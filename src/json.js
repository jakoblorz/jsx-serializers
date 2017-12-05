import { createDomRenderer } from "./render";

export const renderJSONDomTree = createDomRenderer(function (nodeName, attributes, children) {

    /*let serializedChildString = "[]";
    
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
    return serializedContent.slice(0, -1) + ',"children":' + serializedChildString + "}";*/
    return { nodeName, attributes, children };
});

export const renderJSONDomToString = JSON.stringify;