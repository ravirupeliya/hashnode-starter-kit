"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComments = void 0;
var markdownToHtml_1 = require("@starter-kit/utils/renderer/markdownToHtml");
var avatar_1 = require("./avatar");
var button_1 = require("./button");
var appContext_1 = require("./contexts/appContext");
var icons_1 = require("./icons");
var PostComments = function () {
    var post = (0, appContext_1.useAppContext)().post;
    if (!post)
        return null;
    var discussionUrl = "https://hashnode.com/discussions/post/".concat(post.id);
    var commentsList = post.comments.edges.map(function (edge) {
        var comment = edge.node;
        var content = (0, markdownToHtml_1.markdownToHtml)(comment.content.markdown);
        return (<div key={comment.id} className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
				<avatar_1.Avatar username={comment.author.username} name={comment.author.name} size={8} picture={comment.author.profilePicture}/>
				<div className="hashnode-content-style" dangerouslySetInnerHTML={{ __html: content }}></div>
				<div className="flex flex-row gap-5 font-medium text-slate-600 dark:text-neutral-400">
					{comment.totalReactions > 1 && (<a href={discussionUrl} target="_blank" rel="noopener noreferrer">
							{comment.totalReactions} likes
						</a>)}
				</div>
			</div>);
    });
    return (<div className="mx-auto flex w-full max-w-screen-md flex-col gap-5 px-5">
			<h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-neutral-100">
				Comments ({post.comments.totalDocuments})
			</h3>
			<button_1.Button as="a" href={discussionUrl} target="_blank" rel="noopener noreferrer" icon={<icons_1.HashnodeSVG className="h-5 w-5 stroke-current"/>} label="Discuss on Hashnode" secondaryIcon={<icons_1.ExternalArrowSVG className="h-5 w-5 stroke-current"/>}/>
			<div className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
				{commentsList}
			</div>
		</div>);
};
exports.PostComments = PostComments;
