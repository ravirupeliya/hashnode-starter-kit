"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorePosts = void 0;
var post_preview_1 = require("./post-preview");
var MorePosts = function (_a) {
    var posts = _a.posts, context = _a.context;
    return (<section className="mb-10 flex flex-col items-start gap-10">
			{context === 'home' && (<h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl">
					More Posts
				</h2>)}
			<div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
				{posts.map(function (post) {
            var _a;
            return (<post_preview_1.PostPreview key={post.slug} title={post.title} coverImage={(_a = post.coverImage) === null || _a === void 0 ? void 0 : _a.url} date={post.publishedAt} author={{
                    name: post.author.name,
                    profilePicture: post.author.profilePicture,
                }} slug={post.slug} excerpt={post.brief}/>);
        })}
			</div>
		</section>);
};
exports.MorePosts = MorePosts;
