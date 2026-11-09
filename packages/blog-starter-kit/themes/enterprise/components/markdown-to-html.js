"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownToHtml = void 0;
var useEmbeds_1 = require("@starter-kit/utils/renderer/hooks/useEmbeds");
var markdownToHtml_1 = require("@starter-kit/utils/renderer/markdownToHtml");
var react_1 = require("react");
var _MarkdownToHtml = function (_a) {
    var contentMarkdown = _a.contentMarkdown;
    var content = (0, markdownToHtml_1.markdownToHtml)(contentMarkdown);
    (0, useEmbeds_1.useEmbeds)({ enabled: true });
    return (<div className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md" dangerouslySetInnerHTML={{ __html: content }}/>);
};
exports.MarkdownToHtml = (0, react_1.memo)(_MarkdownToHtml);
