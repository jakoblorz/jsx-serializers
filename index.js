
const createDomRenderer = function (fn) {
    return function (nodeName, attributes, ...args) {
        let children = args.length ? [].concat(...args) : null;
        return fn(nodeName, attributes, children);
    }
}

const renderJSONDomTree = createDomRenderer(function (nodeName, attributes, children) {
    let serializedChildString = "[]";
    
    const isJsonFormat = function (val) {
        return val[0] === "{" && val[1] === '"' && val[val.length - 1] === "}";
    };

    const concatChildrenString = function (s, c) {
        if (isJsonFormat(c)) {
            return s + "," + c.toString();
        }

        return s + ',"' + c + '"';
    }

    if (children && children instanceof Array) {
        serializedChildString = "[" + children.reduce(
            concatChildrenString, "").slice(1) + "]";
    }

    const serializedContent = JSON.stringify({ nodeName, attributes });
    return serializedContent.slice(0, -1) + ',"children":' + serializedChildString + "}";
});

const renderHTMLDomTree = createDomRenderer(function (nodeName, attributes, children) {
    
    const attribs = Object.keys(attributes ? attributes : {}).reduce((atts, att) =>
        atts + " " + att + '="' + attributes[att] + '"', "");

    if (!children) {
        return "<" + nodeName + attribs + "/>";
    }

    const childs = children.reduce((s, c) => s + c, "");

    return "<" + nodeName + attribs + ">" + childs + "</" + nodeName + ">";
});

module.exports.createRenderer = function (format) {
    switch (format) {
        case "json":
            return renderJSONDomTree;
        case "html":
            return renderHTMLDomTree;
        default:
            throw new Error(format + " is not a supported format");
            break;
    }
}