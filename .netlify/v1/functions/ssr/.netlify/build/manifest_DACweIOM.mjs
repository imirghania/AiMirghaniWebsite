import './chunks/astro/server_DA_5307C.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ubuntu_wsl/main-blog/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.12.2_@types+node@20.14.9_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C2OYgM3-.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BMXShDwH.css"},{"type":"external","src":"/_astro/about.Lhxs5vWh.css"},{"type":"external","src":"/_astro/about.CYtHRDLw.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C2OYgM3-.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BMXShDwH.css"},{"type":"external","src":"/_astro/about.Lhxs5vWh.css"},{"type":"external","src":"/_astro/about.CYtHRDLw.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C2OYgM3-.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BMXShDwH.css"},{"type":"external","src":"/_astro/about.Lhxs5vWh.css"},{"type":"external","src":"/_astro/about.CYtHRDLw.css"},{"type":"inline","content":"html{scroll-behavior:smooth}.anchor{display:inline-block;text-decoration:none}:target:before{content:\"\";display:block;height:80px;margin-top:-80px;visibility:hidden}.anchor i{visibility:hidden;font-size:1.25rem;padding-left:.5rem}h1:hover .anchor i,h2:hover .anchor i,h3:hover .anchor i,h4:hover .anchor i,h5:hover .anchor i,h6:hover .anchor i{visibility:visible}\n"}],"routeData":{"route":"/blog/article/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/article(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"article","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/article/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C2OYgM3-.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BMXShDwH.css"},{"type":"external","src":"/_astro/about.Lhxs5vWh.css"},{"type":"external","src":"/_astro/about.CYtHRDLw.css"}],"routeData":{"route":"/blog/tag/[...tag]","isIndex":false,"type":"page","pattern":"^\\/blog\\/tag(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/blog/tag/[...tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C2OYgM3-.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BMXShDwH.css"},{"type":"external","src":"/_astro/about.Lhxs5vWh.css"},{"type":"external","src":"/_astro/about.CYtHRDLw.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C2OYgM3-.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BMXShDwH.css"},{"type":"external","src":"/_astro/about.Lhxs5vWh.css"},{"type":"external","src":"/_astro/about.CYtHRDLw.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Lhxs5vWh.css"}],"routeData":{"route":"/texts/aboutme","isIndex":false,"type":"page","pattern":"^\\/texts\\/aboutMe\\/?$","segments":[[{"content":"texts","dynamic":false,"spread":false}],[{"content":"aboutMe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/texts/aboutMe.md","pathname":"/texts/aboutMe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Lhxs5vWh.css"}],"routeData":{"route":"/texts/introcode","isIndex":false,"type":"page","pattern":"^\\/texts\\/introCode\\/?$","segments":[[{"content":"texts","dynamic":false,"spread":false}],[{"content":"introCode","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/texts/introCode.md","pathname":"/texts/introCode","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BhvKU7RE.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BMXShDwH.css"},{"type":"external","src":"/_astro/about.Lhxs5vWh.css"},{"type":"external","src":"/_astro/about.CYtHRDLw.css"},{"type":"inline","content":".content{max-width:800px;font-size:16px;margin:0 auto;padding:8rem 0;border-radius:.75rem}.content pre{border-radius:.75rem}.content pre>code{display:grid;padding:1.2rem 0 1.2rem 0rem;background-color:#1e293b;border-radius:.75rem}.content pre>code [data-line]{border-left:.5rem solid transparent;padding:0 1rem 0 0}.content pre>code .line--highlighted{background-color:#2e4c35;border-color:#469458}.content pre>code[data-line-numbers]{counter-reset:line}.content pre>code[data-line-numbers]>[data-line]:before{counter-increment:line;content:counter(line);display:inline-block;margin-right:1rem;width:.5rem;text-align:right;color:#7ca2dfad}.content pre>code>[data-line]:before{content:\"\";display:inline-block;width:1rem;text-align:right}[data-line]>[data-chars-id=word]{padding:.1rem .2rem;background-color:#2e4c35;border-radius:.1rem}.content pre>code[data-line-numbers-max-digits=\"2\"]>[data-line]:before{width:1rem}.content code[data-line-numbers-max-digits=\"3\"]>[data-line]:before{width:2rem}.content [data-rehype-pretty-code-figure]{position:relative}.content [data-rehype-pretty-code-title]{position:absolute;top:-1.75rem;left:0;border-top-left-radius:.5rem;border-top-right-radius:.5rem;background-color:#1e293b;color:#9abcf3ec;padding:.5rem 1rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","isIndex":false,"route":"/blog/tag/blog/article/[...slug]","pattern":"^\\/blog\\/tag\\/blog\\/article(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"article","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"/blog/tag/blog/article/[...slug]","prerender":false,"redirect":"/blog/article/[...slug]","redirectRoute":{"route":"/blog/article/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/article(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"article","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/article/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}},"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","isIndex":false,"route":"/blogblog","pattern":"^\\/blogblog\\/?$","segments":[[{"content":"blogblog","dynamic":false,"spread":false}]],"params":[],"component":"/blogblog","pathname":"/blogblog","prerender":false,"redirect":"/blog","redirectRoute":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}},"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","isIndex":false,"route":"/feed","pattern":"^\\/feed\\/?$","segments":[[{"content":"feed","dynamic":false,"spread":false}]],"params":[],"component":"/feed","pathname":"/feed","prerender":false,"redirect":"/rss.xml","redirectRoute":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}},"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://ahmed.imirghani.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ubuntu_wsl/main-blog/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/ubuntu_wsl/main-blog/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/ubuntu_wsl/main-blog/src/pages/blog/article/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/ubuntu_wsl/main-blog/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/ubuntu_wsl/main-blog/src/pages/blog/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["/home/ubuntu_wsl/main-blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/ubuntu_wsl/main-blog/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/ubuntu_wsl/main-blog/src/components/home/projects.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/ubuntu_wsl/main-blog/src/components/post/posts-loop.astro",{"propagation":"in-tree","containsHead":false}],["/home/ubuntu_wsl/main-blog/src/components/home/writings.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/article/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ubuntu_wsl/main-blog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/.pnpm/astro@4.12.2_@types+node@20.14.9_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/article/[...slug]@_@astro":"pages/blog/article/_---slug_.astro.mjs","\u0000@astro-page:src/pages/blog/tag/[...tag]@_@astro":"pages/blog/tag/_---tag_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/texts/aboutMe@_@md":"pages/texts/aboutme.astro.mjs","\u0000@astro-page:src/pages/texts/introCode@_@md":"pages/texts/introcode.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DACweIOM.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Data-visualization-tools-in-python.md?astroContentCollectionEntry=true":"chunks/Data-visualization-tools-in-python_0HwR1tlI.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Dissection-of-Data-Science-future-research-trends.md?astroContentCollectionEntry=true":"chunks/Dissection-of-Data-Science-future-research-trends_DgyHQF2O.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Object-detctors-from-dpm-to-neural-networks.md?astroContentCollectionEntry=true":"chunks/Object-detctors-from-dpm-to-neural-networks_Cwa9YufZ.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Pollars-the-Pandas-in-steroids.md?astroContentCollectionEntry=true":"chunks/Pollars-the-Pandas-in-steroids_BxLDjlZh.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/how-to-perform-hypothesis-testing-in-python.md?astroContentCollectionEntry=true":"chunks/how-to-perform-hypothesis-testing-in-python_BK9eC52J.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/linear-regression-with-gradient-descent/index.mdx?astroContentCollectionEntry=true":"chunks/index_D3jS-Qre.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/my-journey-to-building-the-perfect-blog.md?astroContentCollectionEntry=true":"chunks/my-journey-to-building-the-perfect-blog_BnS05xk7.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/support-victor-classifier/index.mdx?astroContentCollectionEntry=true":"chunks/index_CzFyhB6v.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Agentic-cheque-ocr.md?astroContentCollectionEntry=true":"chunks/Agentic-cheque-ocr_BWLTytbT.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Analog-time-reader.md?astroContentCollectionEntry=true":"chunks/Analog-time-reader_V239iffz.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Credit-score-classification.md?astroContentCollectionEntry=true":"chunks/Credit-score-classification_DieTObtZ.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/FastAPI-products-catalog-microservice.md?astroContentCollectionEntry=true":"chunks/FastAPI-products-catalog-microservice_ytED8k5Z.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Local-RAG.md?astroContentCollectionEntry=true":"chunks/Local-RAG_ufaV9cGv.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Poker-Texas-Holdem-Ebd-to-End-Project.md?astroContentCollectionEntry=true":"chunks/Poker-Texas-Holdem-Ebd-to-End-Project_DIT08WZb.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Visdrone-detector-Flask-app.md?astroContentCollectionEntry=true":"chunks/Visdrone-detector-Flask-app_DVo9nyy7.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Data-visualization-tools-in-python.md?astroPropagatedAssets":"chunks/Data-visualization-tools-in-python_C78wAu4t.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Dissection-of-Data-Science-future-research-trends.md?astroPropagatedAssets":"chunks/Dissection-of-Data-Science-future-research-trends_BdhdQZV8.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Object-detctors-from-dpm-to-neural-networks.md?astroPropagatedAssets":"chunks/Object-detctors-from-dpm-to-neural-networks_DrncopZo.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Pollars-the-Pandas-in-steroids.md?astroPropagatedAssets":"chunks/Pollars-the-Pandas-in-steroids_BP5XkL5i.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/how-to-perform-hypothesis-testing-in-python.md?astroPropagatedAssets":"chunks/how-to-perform-hypothesis-testing-in-python_k8p5zagR.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/linear-regression-with-gradient-descent/index.mdx?astroPropagatedAssets":"chunks/index_BsBTVtZl.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/my-journey-to-building-the-perfect-blog.md?astroPropagatedAssets":"chunks/my-journey-to-building-the-perfect-blog_DxFkLosA.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/support-victor-classifier/index.mdx?astroPropagatedAssets":"chunks/index_BpA_p99X.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Agentic-cheque-ocr.md?astroPropagatedAssets":"chunks/Agentic-cheque-ocr_Ca7z9fiT.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Analog-time-reader.md?astroPropagatedAssets":"chunks/Analog-time-reader_CkQzxBB8.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Credit-score-classification.md?astroPropagatedAssets":"chunks/Credit-score-classification_C-UQsMob.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/FastAPI-products-catalog-microservice.md?astroPropagatedAssets":"chunks/FastAPI-products-catalog-microservice_ChABbE7Q.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Local-RAG.md?astroPropagatedAssets":"chunks/Local-RAG_B8UEWjLD.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Poker-Texas-Holdem-Ebd-to-End-Project.md?astroPropagatedAssets":"chunks/Poker-Texas-Holdem-Ebd-to-End-Project_DN-gpv7B.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Visdrone-detector-Flask-app.md?astroPropagatedAssets":"chunks/Visdrone-detector-Flask-app_C4VusCb8.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Data-visualization-tools-in-python.md":"chunks/Data-visualization-tools-in-python_BJI-TfuM.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Dissection-of-Data-Science-future-research-trends.md":"chunks/Dissection-of-Data-Science-future-research-trends_DZWmYhXA.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Object-detctors-from-dpm-to-neural-networks.md":"chunks/Object-detctors-from-dpm-to-neural-networks_B3jstNnR.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/Pollars-the-Pandas-in-steroids.md":"chunks/Pollars-the-Pandas-in-steroids_Dqi_CD5Y.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/how-to-perform-hypothesis-testing-in-python.md":"chunks/how-to-perform-hypothesis-testing-in-python_CqJrU9i8.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/linear-regression-with-gradient-descent/index.mdx":"chunks/index_BN7H0yXq.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/my-journey-to-building-the-perfect-blog.md":"chunks/my-journey-to-building-the-perfect-blog_BUtgLf44.mjs","/home/ubuntu_wsl/main-blog/src/content/blog/support-victor-classifier/index.mdx":"chunks/index_uldKwNTN.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Agentic-cheque-ocr.md":"chunks/Agentic-cheque-ocr_CWERLejP.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Analog-time-reader.md":"chunks/Analog-time-reader_Do5pMH4M.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Credit-score-classification.md":"chunks/Credit-score-classification_22TN9eCf.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/FastAPI-products-catalog-microservice.md":"chunks/FastAPI-products-catalog-microservice_BYJ--lDb.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Local-RAG.md":"chunks/Local-RAG_IXILjxIk.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Poker-Texas-Holdem-Ebd-to-End-Project.md":"chunks/Poker-Texas-Holdem-Ebd-to-End-Project_Dpn3c2Xe.mjs","/home/ubuntu_wsl/main-blog/src/content/projects/Visdrone-detector-Flask-app.md":"chunks/Visdrone-detector-Flask-app_BV_vsX1S.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BhvKU7RE.js","/astro/hoisted.js?q=0":"_astro/hoisted.C2OYgM3-.js","@astrojs/vue/client.js":"_astro/client.CErfhgnA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/error-404.Ox42KQdE.png","/_astro/MLR._c2lm42G.png","/_astro/SVM_data.CkgHzV2G.png","/_astro/SVM_data_basic_plot.BhHz7TSv.png","/_astro/line_candidates.aps-xQYY.png","/_astro/first_line.UBRz9iLh.png","/_astro/SVM_w_vector.HsNu6iBI.png","/_astro/SVM_final.Cxco8Pdh.png","/_astro/support_vectors.B9TtgHKe.png","/_astro/about.CYtHRDLw.css","/_astro/about.Lhxs5vWh.css","/codeHighlightTheme.json","/favicon.ico","/robots.txt","/_astro/client.CErfhgnA.js","/_astro/hoisted.BMXShDwH.css","/_astro/hoisted.BhvKU7RE.js","/_astro/hoisted.C2OYgM3-.js","/css/all.min.css","/css/katex.min.css","/css/prism.css","/rss/styles.xsl","/webfonts/fa-brands-400.ttf","/webfonts/fa-brands-400.woff2","/webfonts/fa-regular-400.ttf","/webfonts/fa-regular-400.woff2","/webfonts/fa-solid-900.ttf","/webfonts/fa-solid-900.woff2","/webfonts/fa-v4compatibility.ttf","/webfonts/fa-v4compatibility.woff2","/assets/images/blog-banner-bg.png","/assets/images/cover.png","/assets/images/favicon.png","/assets/images/photo.png","/assets/images/education/itmo_university.png","/assets/images/education/uofk.jpg","/assets/images/experiences/fta.ico","/assets/images/experiences/wulian.ico","/assets/images/experiences/yoho.ico","/assets/images/posts/blogging.jpg","/assets/images/posts/code-canvas.jpg","/assets/images/posts/coffee.jpg","/assets/images/posts/flowchart.jpg","/assets/images/posts/hypothesis-testing.png","/assets/images/posts/multiple_linear_regression.png","/assets/images/posts/perfect-coffee.jpg","/assets/images/posts/pour-over.jpg","/assets/images/posts/svc.jpg","/assets/images/posts/vintage-tech-01.jpg","/assets/images/posts/vintage-tech-02.jpg","/assets/images/posts/workspace.jpg","/assets/images/projects/agentic_cheque_ocr.png","/assets/images/projects/credit_score_classification.png","/assets/images/projects/poker_project.jpg","/assets/images/projects/product_catalog_api_service.png","/assets/images/projects/rag_system.png","/assets/images/projects/time_reader.png","/assets/images/projects/visdrone-detector-flask-app.png"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
