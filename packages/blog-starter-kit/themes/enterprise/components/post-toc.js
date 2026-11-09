"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTOC = void 0;
var appContext_1 = require("./contexts/appContext");
var mapTableOfContentItems = function (toc) {
    try {
        // `toc` is sometimes an array of arrays or an array of objects. Hashnode is trying to investigate this issue.
        // Meanwhile, we can use the following code to map the table of content items to handle both cases.
        return (toc !== null && toc !== void 0 ? toc : []).map(function (tocItem) {
            var _a;
            var item = Array.isArray(tocItem) ? tocItem[0] : tocItem;
            return {
                id: item.id,
                level: item.level,
                slug: item.slug,
                title: item.title,
                parentId: (_a = item.parentId) !== null && _a !== void 0 ? _a : null,
            };
        });
    }
    catch (error) {
        console.error('Error while mapping table of content items', {
            error: error,
        });
        return [];
    }
};
var Toc = function (_a) {
    var data = _a.data, parentId = _a.parentId;
    var children = data.filter(function (item) { return item.parentId === parentId; });
    if (children.length === 0)
        return null;
    return (<ul className="mt-5 flex flex-col gap-5 pl-5 font-medium text-slate-800 dark:text-neutral-200">
			{children.map(function (item) { return (<li key={item.id}>
					<a href={"#heading-".concat(item.slug)} className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800">
						{item.title}
					</a>

					<Toc data={data} parentId={item.id}/>
				</li>); })}
		</ul>);
};
var PostTOC = function () {
    var post = (0, appContext_1.useAppContext)().post;
    if (!post)
        return null;
    return (<div className="w-full px-5">
			<div className="mx-auto w-full max-w-screen-md rounded-lg border border-b-4 border-r-4 p-5 text-base leading-snug dark:border-neutral-800 dark:text-neutral-50 md:p-8 md:text-lg">
				<h2 className="mb-5 text-lg font-bold md:text-xl">Table of contents</h2>
				<Toc parentId={null} data={mapTableOfContentItems(post.features.tableOfContents.items)}/>
			</div>
		</div>);
};
exports.PostTOC = PostTOC;
