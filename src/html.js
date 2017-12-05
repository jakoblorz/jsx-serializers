import { createDomRenderer } from "./render";

export const renderHTMLDomTree = createDomRenderer(function (nodeName, attributes, children) {
    
    const attribs = Object.keys(attributes ? attributes : {}).reduce((atts, att) =>
        atts + " " + att + '="' + attributes[att] + '"', "");

    if (!children) {
        return "<" + nodeName + attribs + "/>";
    }

    const childs = children.reduce((s, c) => s + c, "");

    return "<" + nodeName + attribs + ">" + childs + "</" + nodeName + ">";
});