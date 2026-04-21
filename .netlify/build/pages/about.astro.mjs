/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, F as Fragment } from '../chunks/astro/server_DA_5307C.mjs';
import { a as $$Icon, G as GITHUB_URL, E as EMAIL, T as TELEGRAM_URL, L as LINKEDIN_URL, $ as $$Main } from '../chunks/main_CDnNHdgm.mjs';
import { $ as $$Separator } from '../chunks/separator_CZzneCoQ.mjs';
import { C as Content } from '../chunks/aboutMe_wKH7tLb7.mjs';
export { renderers } from '../renderers.mjs';

const tools = [
	{
		skillName: "Data Processing",
		skillTools: [
			{
				logo: "dataProcessing/numpy",
				url: "https://numpy.org/",
				tooltip: "Numpy"
			},
			{
				logo: "dataProcessing/pandas",
				url: "https://pandas.pydata.org/",
				tooltip: "Pandas"
			},
			{
				logo: "dataProcessing/scipy",
				url: "https://scipy.org/",
				tooltip: "Scipy"
			}
		]
	},
	{
		skillName: "Model Building",
		skillTools: [
			{
				logo: "modeling/statsmodels",
				url: "https://www.statsmodels.org/stable/index.html",
				tooltip: "Statsmodels"
			},
			{
				logo: "modeling/sklearn",
				url: "https://scikit-learn.org/stable/",
				tooltip: "Sklearn"
			},
			{
				logo: "modeling/prophet",
				url: "https://facebook.github.io/prophet/",
				tooltip: "Prophet"
			},
			{
				logo: "modeling/pytorch",
				url: "https://pytorch.org/",
				tooltip: "PyTorch"
			}
		]
	},
	{
		skillName: "Data Visualization",
		skillTools: [
			{
				logo: "dataVis/matplotlib",
				url: "https://matplotlib.org/",
				tooltip: "Matplotlib"
			},
			{
				logo: "dataVis/seaborn",
				url: "https://seaborn.pydata.org/",
				tooltip: "Seaborn"
			},
			{
				logo: "dataVis/plotly",
				url: "https://plotly.com/",
				tooltip: "Plotly"
			},
			{
				logo: "dataVis/streamlit",
				url: "https://streamlit.io/",
				tooltip: "Streamlit"
			}
		]
	},
	{
		skillName: "Generative AI",
		skillTools: [
			{
				logo: "genai/huggingface",
				url: "https://huggingface.co/",
				tooltip: "HuggingFace"
			},
			{
				logo: "genai/langchain",
				url: "https://www.langchain.com/",
				tooltip: "LangChain"
			},
			{
				logo: "genai/langgraph",
				url: "https://www.langchain.com/langgraph",
				tooltip: "LangGraph"
			}
		]
	},
	{
		skillName: "Computer Vision",
		skillTools: [
			{
				logo: "computerVision/opencv",
				url: "https://opencv.org/",
				tooltip: "OpenCV"
			},
			{
				logo: "computerVision/pillow",
				url: "https://pillow.readthedocs.io/",
				tooltip: "PIL"
			}
		]
	},
	{
		skillName: "Web Development",
		skillTools: [
			{
				logo: "webDev/fastapi",
				url: "https://fastapi.tiangolo.com/",
				tooltip: "FastAPI"
			},
			{
				logo: "webDev/flask",
				url: "https://flask.palletsprojects.com/",
				tooltip: "Flask"
			},
			{
				logo: "webDev/jinja2",
				url: "https://jinja.palletsprojects.com/",
				tooltip: "Jinja2 Templating Engine"
			},
			{
				logo: "webDev/htmx",
				url: "https://htmx.org/",
				tooltip: "HTMX"
			},
			{
				logo: "webDev/rabbitmq",
				url: "https://www.rabbitmq.com/",
				tooltip: "RabbitMQ"
			},
			{
				logo: "webDev/vue",
				url: "https://vuejs.org/",
				tooltip: "Vue3.js"
			},
			{
				logo: "webDev/nuxt",
				url: "https://nuxt.com/",
				tooltip: "Nuxt3.js"
			},
			{
				logo: "webDev/astro",
				url: "https://astro.build/",
				tooltip: "Astro.js"
			}
		]
	},
	{
		skillName: "Databases",
		skillTools: [
			{
				logo: "databases/postgresql",
				url: "https://www.postgresql.org/",
				tooltip: "Postgresql"
			},
			{
				logo: "databases/mysql",
				url: "https://www.mysql.com/",
				tooltip: "MySQL"
			},
			{
				logo: "databases/sqlalchemy",
				url: "https://www.sqlalchemy.org/",
				tooltip: "SQLAlchemy"
			},
			{
				logo: "databases/mongodb",
				url: "https://www.mongodb.com/",
				tooltip: "MongoDB"
			},
			{
				logo: "databases/beanie",
				url: "https://beanie-odm.dev/",
				tooltip: "Beanie-odm"
			},
			{
				logo: "databases/redis",
				url: "https://beanie-odm.dev/",
				tooltip: "Redis"
			}
		]
	},
	{
		skillName: "Dev Tools",
		skillTools: [
			{
				logo: "devTools/pytest",
				url: "https://docs.pytest.org/",
				tooltip: "PyTest"
			},
			{
				logo: "devTools/git",
				url: "https://git-scm.com/",
				tooltip: "Git"
			},
			{
				logo: "devTools/githubActions",
				url: "https://docs.github.com/en/actions",
				tooltip: "Github Actions"
			},
			{
				logo: "devTools/docker",
				url: "https://www.docker.com/",
				tooltip: "Docker"
			},
			{
				logo: "devTools/mlflow",
				url: "https://mlflow.org/",
				tooltip: "Mlflow"
			},
			{
				logo: "devTools/dvc",
				url: "https://dvc.org/",
				tooltip: "DVC"
			},
			{
				logo: "devTools/airflow",
				url: "https://airflow.apache.org/",
				tooltip: "Apache Airflow"
			}
		]
	}
];

const education = [
	{
		dates: "August 2020",
		degree: "MSc. Machine Learning and Data Analysis",
		university: "ITMO University, Russia",
		faculty: "Faculty of Information Technology and Programming",
		logo: "/assets/images/education/itmo_university.png"
	},
	{
		dates: "December 2012",
		degree: "BSc. Mathematics and Computer Science",
		university: "University of Khartoum, Sudan",
		faculty: "Faculty of Mathematical Sciences",
		logo: "/assets/images/education/uofk.jpg"
	}
];

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$AboutExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutExperience;
  const { logo, dates, role, company, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col justify-start pl-12"> <div class="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700"> <img${addAttribute(logo, "src")}${addAttribute(company, "alt")} class="w-8 h-8 dark:invert"> </div> <p class="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest"> ${dates} </p> <h3 class="my-1 text-lg font-bold dark:text-neutral-100">${role}</h3> <p class="mb-1 text-sm font-medium dark:text-neutral-300">${company}</p> <p class="text-sm font-light text-neutral-600 dark:text-neutral-400"> ${description} </p> </div>`;
}, "/home/ubuntu_wsl/main-blog/src/components/about-experience.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "AiMirghani - About Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-40 max-w-3xl mx-auto my-12 px-7 lg:px-0"> <!-- Hero --> <div class="mb-12"> <p class="font-mono text-xs text-violet-500 dark:text-fuchsia-400 uppercase tracking-widest mb-3">
$ whoami
</p> <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 leading-tight">
Ahmed Mirghani
</h1> <div class="flex flex-wrap gap-2 mb-6"> <span class="px-3 py-1 text-xs font-mono rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700">
Data Scientist
</span> <span class="px-3 py-1 text-xs font-mono rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-200 dark:border-fuchsia-700">
ML Engineer
</span> <span class="px-3 py-1 text-xs font-mono rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
Python Developer
</span> <span class="px-3 py-1 text-xs font-mono rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
Open-Source Believer
</span> </div> </div> <!-- Bio --> <div class="border-l-2 border-violet-500 dark:border-fuchsia-500 pl-6 mb-4"> <div class="text-sm leading-6 text-gray-600 dark:text-neutral-300 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg text-justify"> ${renderComponent($$result2, "AboutMeContent", Content, {})} </div> </div> ${renderComponent($$result2, "Separator", $$Separator, { "text": "Technical Skills" })} <div class="space-y-8 mb-4"> ${tools.map((skill) => renderTemplate`<div> <div class="flex items-center gap-3 mb-4"> <span class="font-mono text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-fuchsia-400 whitespace-nowrap"> ${skill.skillName} </span> <div class="flex-1 h-px bg-neutral-100 dark:bg-neutral-800"></div> </div> <div class="flex flex-wrap gap-3"> ${skill.skillTools.map((tool) => renderTemplate`<a${addAttribute(tool.url, "href")} target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center gap-2 p-3 w-[72px] rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-violet-300 dark:hover:border-fuchsia-700/60 hover:bg-violet-50 dark:hover:bg-fuchsia-900/10 hover:shadow-sm transition-all duration-200"> ${renderComponent($$result2, "Icon", $$Icon, { "name": tool.logo, "size": 28, "class": "transition-transform duration-200 group-hover:scale-110" })} <span class="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-violet-600 dark:group-hover:text-fuchsia-400 transition-colors duration-200 text-center leading-tight w-full truncate"> ${tool.tooltip} </span> </a>`)} </div> </div>`)} </div> ${renderComponent($$result2, "Separator", $$Separator, { "text": "Education" })} <div class="px-5 py-10 grid place-content-center"> ${education.map((study, loop) => {
    const isLast = loop === education.length - 1;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${!isLast ? renderTemplate`<div class="pb-10 border-l border-gray-200 dark:border-neutral-700"> ${renderComponent($$result3, "AboutExperience", $$AboutExperience, { "dates": study.dates, "role": study.degree, "company": study.university, "description": study.faculty, "logo": study.logo })} </div>` : renderTemplate`${renderComponent($$result3, "AboutExperience", $$AboutExperience, { "dates": study.dates, "role": study.degree, "company": study.university, "description": study.faculty, "logo": study.logo })}`}` })}`;
  })} </div> ${renderComponent($$result2, "Separator", $$Separator, { "text": "Let's Connect" })} <div class="mb-16"> <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed sm:text-base">
I'm always happy to connect — whether it's about a data problem, a collaboration idea, or just a conversation.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <a${addAttribute(GITHUB_URL, "href")} target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-md hover:shadow-violet-500/10 transition-all duration-200"> <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors duration-200"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "contacts/github", "class": "w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200" })} </span> <div> <p class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">GitHub</p> <p class="text-xs text-neutral-500 dark:text-neutral-400">@imirghania</p> </div> </a> <a${addAttribute(`mailto:${EMAIL}`, "href")} class="group flex items-center gap-4 px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-fuchsia-400 dark:hover:border-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/10 transition-all duration-200"> <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-900/20 transition-colors duration-200"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "contacts/email", "class": "w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors duration-200" })} </span> <div> <p class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Email</p> <p class="text-xs text-neutral-500 dark:text-neutral-400">${EMAIL}</p> </div> </a> <a${addAttribute(TELEGRAM_URL, "href")} target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-md hover:shadow-violet-500/10 transition-all duration-200"> <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors duration-200"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "contacts/telegram", "class": "w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200" })} </span> <div> <p class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Telegram</p> <p class="text-xs text-neutral-500 dark:text-neutral-400">@AhmdIdris</p> </div> </a> <a${addAttribute(LINKEDIN_URL, "href")} target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-fuchsia-400 dark:hover:border-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/10 transition-all duration-200"> <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-900/20 transition-colors duration-200"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "contacts/linkedin", "class": "w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors duration-200" })} </span> <div> <p class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">LinkedIn</p> <p class="text-xs text-neutral-500 dark:text-neutral-400">@aimirghani</p> </div> </a> </div> </div> </section> ` })}`;
}, "/home/ubuntu_wsl/main-blog/src/pages/about.astro", void 0);

const $$file = "/home/ubuntu_wsl/main-blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
