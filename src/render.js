export const createDomRenderer = function (fn) {
    return function (nodeName, attributes, ...args) {
        let children = args.length ? [].concat(...args) : null;
        return fn(nodeName, attributes, children);
    }
}

export const loadDomTree = createDomRenderer(function (nodeName, attributes, children) {
    return { nodeName, attributes, children };
});

export const renderJSONDomTree = createDomRenderer(function (nodeName, attributes, children) {
    return JSON.stringify({ nodeName, attributes, children });
});

export const renderHTMLDomTree = createDomRenderer(function (nodeName, attributes, children) {

    const attribs = Object.keys(attributes ? attributes : {}).reduce((atts, att) =>
        atts + " " + att + '="' + attributes[att] + '"', "");

    if (!children) {
        return "<" + nodeName + attribs + "/>";
    }

    const childs = children.reduce((s, c) => s + c, "");

    return "<" + nodeName + attribs + ">" + childs + "</" + nodeName + ">";
});
