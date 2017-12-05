import { createDomRenderer } from "./render";

export const renderJSONDomTree = createDomRenderer(function (nodeName, attributes, children) {
    return { nodeName, attributes, children };
});