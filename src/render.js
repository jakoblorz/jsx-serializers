export const createDomRenderer = function (fn) {
    return function (nodeName, attributes, ...args) {
        let children = args.length ? [].concat(...args) : null;
        return fn(nodeName, attributes, children);
    }
}

export const loadDomTree = createDomRenderer(function (nodeName, attributes, children) {
    return { nodeName, attributes, children };
});