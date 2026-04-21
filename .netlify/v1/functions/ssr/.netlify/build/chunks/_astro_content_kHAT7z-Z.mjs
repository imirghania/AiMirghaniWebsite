import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BCUK_Zky.mjs';
import { c as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://ahmed.imirghani.com/", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/Data-visualization-tools-in-python.md": () => import('./Data-visualization-tools-in-python_0HwR1tlI.mjs'),"/src/content/blog/Dissection-of-Data-Science-future-research-trends.md": () => import('./Dissection-of-Data-Science-future-research-trends_DgyHQF2O.mjs'),"/src/content/blog/Object-detctors-from-dpm-to-neural-networks.md": () => import('./Object-detctors-from-dpm-to-neural-networks_Cwa9YufZ.mjs'),"/src/content/blog/Pollars-the-Pandas-in-steroids.md": () => import('./Pollars-the-Pandas-in-steroids_BxLDjlZh.mjs'),"/src/content/blog/how-to-perform-hypothesis-testing-in-python.md": () => import('./how-to-perform-hypothesis-testing-in-python_BK9eC52J.mjs'),"/src/content/blog/linear-regression-with-gradient-descent/index.mdx": () => import('./index_D3jS-Qre.mjs'),"/src/content/blog/my-journey-to-building-the-perfect-blog.md": () => import('./my-journey-to-building-the-perfect-blog_BnS05xk7.mjs'),"/src/content/blog/support-victor-classifier/index.mdx": () => import('./index_CzFyhB6v.mjs'),"/src/content/projects/Agentic-cheque-ocr.md": () => import('./Agentic-cheque-ocr_BWLTytbT.mjs'),"/src/content/projects/Analog-time-reader.md": () => import('./Analog-time-reader_V239iffz.mjs'),"/src/content/projects/Credit-score-classification.md": () => import('./Credit-score-classification_DieTObtZ.mjs'),"/src/content/projects/FastAPI-products-catalog-microservice.md": () => import('./FastAPI-products-catalog-microservice_ytED8k5Z.mjs'),"/src/content/projects/Local-RAG.md": () => import('./Local-RAG_ufaV9cGv.mjs'),"/src/content/projects/Poker-Texas-Holdem-Ebd-to-End-Project.md": () => import('./Poker-Texas-Holdem-Ebd-to-End-Project_DIT08WZb.mjs'),"/src/content/projects/Visdrone-detector-Flask-app.md": () => import('./Visdrone-detector-Flask-app_DVo9nyy7.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"Data-visualization-tools-in-python":"/src/content/blog/Data-visualization-tools-in-python.md","Dissection-of-Data-Science-future-research-trends":"/src/content/blog/Dissection-of-Data-Science-future-research-trends.md","Object-detctors-from-dpm-to-neural-networks":"/src/content/blog/Object-detctors-from-dpm-to-neural-networks.md","how-to-perform-hypothesis-testing-in-python":"/src/content/blog/how-to-perform-hypothesis-testing-in-python.md","Pollars-the-Pandas-on-steroids":"/src/content/blog/Pollars-the-Pandas-in-steroids.md","my-journey-to-building-the-perfect-blog":"/src/content/blog/my-journey-to-building-the-perfect-blog.md","mathematical-formulation-of-multipule-linear-regression-closed-form-solution":"/src/content/blog/linear-regression-with-gradient-descent/index.mdx","mathematical-formulation-of-support-vector-classifier":"/src/content/blog/support-victor-classifier/index.mdx"}},"projects":{"type":"content","entries":{"agentic-cheque-ocr":"/src/content/projects/Agentic-cheque-ocr.md","Analog-time-reader":"/src/content/projects/Analog-time-reader.md","Credit-score-classification":"/src/content/projects/Credit-score-classification.md","products-catalog-microservice":"/src/content/projects/FastAPI-products-catalog-microservice.md","local-rag-system":"/src/content/projects/Local-RAG.md","texas-holdem-end-to-end-project":"/src/content/projects/Poker-Texas-Holdem-Ebd-to-End-Project.md","visdrone-detector-flask-app":"/src/content/projects/Visdrone-detector-Flask-app.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/Data-visualization-tools-in-python.md": () => import('./Data-visualization-tools-in-python_C78wAu4t.mjs'),"/src/content/blog/Dissection-of-Data-Science-future-research-trends.md": () => import('./Dissection-of-Data-Science-future-research-trends_BdhdQZV8.mjs'),"/src/content/blog/Object-detctors-from-dpm-to-neural-networks.md": () => import('./Object-detctors-from-dpm-to-neural-networks_DrncopZo.mjs'),"/src/content/blog/Pollars-the-Pandas-in-steroids.md": () => import('./Pollars-the-Pandas-in-steroids_BP5XkL5i.mjs'),"/src/content/blog/how-to-perform-hypothesis-testing-in-python.md": () => import('./how-to-perform-hypothesis-testing-in-python_k8p5zagR.mjs'),"/src/content/blog/linear-regression-with-gradient-descent/index.mdx": () => import('./index_BsBTVtZl.mjs'),"/src/content/blog/my-journey-to-building-the-perfect-blog.md": () => import('./my-journey-to-building-the-perfect-blog_DxFkLosA.mjs'),"/src/content/blog/support-victor-classifier/index.mdx": () => import('./index_BpA_p99X.mjs'),"/src/content/projects/Agentic-cheque-ocr.md": () => import('./Agentic-cheque-ocr_Ca7z9fiT.mjs'),"/src/content/projects/Analog-time-reader.md": () => import('./Analog-time-reader_CkQzxBB8.mjs'),"/src/content/projects/Credit-score-classification.md": () => import('./Credit-score-classification_C-UQsMob.mjs'),"/src/content/projects/FastAPI-products-catalog-microservice.md": () => import('./FastAPI-products-catalog-microservice_ChABbE7Q.mjs'),"/src/content/projects/Local-RAG.md": () => import('./Local-RAG_B8UEWjLD.mjs'),"/src/content/projects/Poker-Texas-Holdem-Ebd-to-End-Project.md": () => import('./Poker-Texas-Holdem-Ebd-to-End-Project_DN-gpv7B.mjs'),"/src/content/projects/Visdrone-detector-Flask-app.md": () => import('./Visdrone-detector-Flask-app_C4VusCb8.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export { getCollection as a, getEntry as g };
