"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTitle = void 0;
var PostTitle = function (_a) {
    var children = _a.children;
    return (<div className="prose md:prose-xl dark:prose-invert prose-h1:text-center mx-auto max-w-screen-lg px-5">
			<h1 className="">{children}</h1>
		</div>);
};
exports.PostTitle = PostTitle;
