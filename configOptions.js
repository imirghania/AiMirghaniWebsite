export const rehypePrettyCodeOptions = {
    theme: "dracula",
    onVisitLine(node) {
        if (node.children.length === 0) {
        node.children = [
            {
            type: "text",
            value: " ",
            },
        ];
        }
    },
    onVisitHighlightedLine(node) {
        const nodeClass = node.properties.className;
        if (nodeClass && nodeClass.length > 0) {
        node.properties.className.push("line--highlighted");
        } else {
        node.properties.className = ["line--highlighted"];
        }
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
    },
    tokensMap: {},
};

export const rehypeAutolinkHeadingsOptions = {
    behavior: "wrap",
    headingProperties: {
        className: ["scroll-mt-6 no-underline"],
    },
    properties: {
        className: ["anchor", "scroll-mt-9"],
    },
    content: {
        type: "element",
        tagName: "i",
        properties: {
        className: ["fas", "fa-link"],
    },
    },
}