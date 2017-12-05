import { createDomRenderer } from "./render";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

export const renderReactDomTree = createElement;
export const renderReactDomToString = renderToString;