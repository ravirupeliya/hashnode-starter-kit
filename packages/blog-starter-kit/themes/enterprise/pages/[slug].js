"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPaths = exports.getStaticProps = void 0;
exports.default = PostOrPage;
var addArticleJsonLd_1 = require("@starter-kit/utils/seo/addArticleJsonLd");
var og_1 = require("@starter-kit/utils/social/og");
var graphql_request_1 = require("graphql-request");
var dynamic_1 = require("next/dynamic");
var head_1 = require("next/head");
var link_1 = require("next/link");
var container_1 = require("../components/container");
var appContext_1 = require("../components/contexts/appContext");
var footer_1 = require("../components/footer");
var header_1 = require("../components/header");
var layout_1 = require("../components/layout");
var markdown_to_html_1 = require("../components/markdown-to-html");
var post_header_1 = require("../components/post-header");
var post_toc_1 = require("../components/post-toc");
var graphql_1 = require("../generated/graphql");
// @ts-ignore
var handle_math_jax_1 = require("@starter-kit/utils/handle-math-jax");
var useEmbeds_1 = require("@starter-kit/utils/renderer/hooks/useEmbeds");
var embed_1 = require("@starter-kit/utils/renderer/services/embed");
var react_1 = require("react");
// @ts-ignore
var trigger_custom_widget_embed_1 = require("@starter-kit/utils/trigger-custom-widget-embed");
var AboutAuthor = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return require('../components/about-author'); }); }, { ssr: false });
var Subscribe = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return require('../components/subscribe'); }).then(function (mod) { return mod.Subscribe; }); });
var PostComments = (0, dynamic_1.default)(function () {
    return Promise.resolve().then(function () { return require('../components/post-comments'); }).then(function (mod) { return mod.PostComments; });
});
var Post = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var publication = _a.publication, post = _a.post;
    var highlightJsMonokaiTheme = '.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';
    var tagsList = ((_b = post.tags) !== null && _b !== void 0 ? _b : []).map(function (tag) { return (<li key={tag.id}>
			<link_1.default href={"/tag/".concat(tag.slug)} className="block rounded-full border px-2 py-1 font-medium hover:bg-slate-50 dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4">
				#{tag.slug}
			</link_1.default>
		</li>); });
    var _r = (0, react_1.useState)(false), setMobMount = _r[1];
    var _s = (0, react_1.useState)(false), canLoadEmbeds = _s[0], setCanLoadEmbeds = _s[1];
    (0, useEmbeds_1.useEmbeds)({ enabled: canLoadEmbeds });
    if (post.hasLatexInPost) {
        setTimeout(function () {
            (0, handle_math_jax_1.default)(true);
        }, 500);
    }
    (0, react_1.useEffect)(function () {
        if (screen.width <= 425) {
            setMobMount(true);
        }
        if (!post) {
            return;
        }
        // TODO:
        // More of an alert, did this below to wrap async funcs inside useEffect
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, embed_1.loadIframeResizer)()];
                    case 1:
                        _b.sent();
                        (0, trigger_custom_widget_embed_1.triggerCustomWidgetEmbed)((_a = post.publication) === null || _a === void 0 ? void 0 : _a.id.toString());
                        setCanLoadEmbeds(true);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (<>
			<head_1.default>
				<title>{((_c = post.seo) === null || _c === void 0 ? void 0 : _c.title) || post.title}</title>
				<link rel="canonical" href={post.url}/>
				<meta name="description" content={((_d = post.seo) === null || _d === void 0 ? void 0 : _d.description) || post.subtitle || post.brief}/>
				<meta property="twitter:card" content="summary_large_image"/>
				<meta property="twitter:title" content={((_e = post.seo) === null || _e === void 0 ? void 0 : _e.title) || post.title}/>
				<meta property="twitter:description" content={((_f = post.seo) === null || _f === void 0 ? void 0 : _f.description) || post.subtitle || post.brief}/>
				<meta property="og:image" content={((_g = post.ogMetaData) === null || _g === void 0 ? void 0 : _g.image) ||
            ((_h = post.coverImage) === null || _h === void 0 ? void 0 : _h.url) ||
            (0, og_1.getAutogeneratedPostOG)(post, publication)}/>
				<meta property="twitter:image" content={((_j = post.ogMetaData) === null || _j === void 0 ? void 0 : _j.image) ||
            ((_k = post.coverImage) === null || _k === void 0 ? void 0 : _k.url) ||
            (0, og_1.getAutogeneratedPostOG)(post, publication)}/>
				<script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify((0, addArticleJsonLd_1.addArticleJsonLd)(publication, post)),
        }}/>
				<style dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}></style>
			</head_1.default>
			<post_header_1.PostHeader title={post.title} coverImage={(_l = post.coverImage) === null || _l === void 0 ? void 0 : _l.url} date={post.publishedAt} author={post.author} readTimeInMinutes={post.readTimeInMinutes}/>
			{post.features.tableOfContents.isEnabled && ((_p = (_o = (_m = post.features) === null || _m === void 0 ? void 0 : _m.tableOfContents) === null || _o === void 0 ? void 0 : _o.items) === null || _p === void 0 ? void 0 : _p.length) > 0 && <post_toc_1.PostTOC />}
			<markdown_to_html_1.MarkdownToHtml contentMarkdown={post.content.markdown}/>
			{((_q = post.tags) !== null && _q !== void 0 ? _q : []).length > 0 && (<div className="mx-auto w-full px-5 text-slate-600 dark:text-neutral-300 md:max-w-screen-md">
					<ul className="flex flex-row flex-wrap items-center gap-2">{tagsList}</ul>
				</div>)}
			<AboutAuthor />
			{!post.preferences.disableComments && post.comments.totalDocuments > 0 && <PostComments />}
			<Subscribe />
		</>);
};
var Page = function (_a) {
    var page = _a.page;
    var title = page.title;
    return (<>
			<head_1.default>
				<title>{title}</title>
			</head_1.default>
			<markdown_to_html_1.MarkdownToHtml contentMarkdown={page.content.markdown}/>
		</>);
};
function PostOrPage(props) {
    var maybePost = props.type === 'post' ? props.post : null;
    var maybePage = props.type === 'page' ? props.page : null;
    var publication = props.publication;
    return (<appContext_1.AppProvider publication={publication} post={maybePost} page={maybePage}>
			<layout_1.Layout>
				<header_1.Header />
				<container_1.Container className="pt-10">
					<article className="flex flex-col items-start gap-10 pb-10">
						{props.type === 'post' && <Post {...props}/>}
						{props.type === 'page' && <Page {...props}/>}
					</article>
				</container_1.Container>
				<footer_1.Footer />
			</layout_1.Layout>
		</appContext_1.AppProvider>);
}
var getStaticProps = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var endpoint, host, slug, postData, pageData;
    var _c, _d;
    var params = _b.params;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!params) {
                    throw new Error('No params');
                }
                endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
                host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
                slug = params.slug;
                return [4 /*yield*/, (0, graphql_request_1.default)(endpoint, graphql_1.SinglePostByPublicationDocument, { host: host, slug: slug })];
            case 1:
                postData = _e.sent();
                if ((_c = postData.publication) === null || _c === void 0 ? void 0 : _c.post) {
                    return [2 /*return*/, {
                            props: {
                                type: 'post',
                                post: postData.publication.post,
                                publication: postData.publication,
                            },
                            revalidate: 1,
                        }];
                }
                return [4 /*yield*/, (0, graphql_request_1.default)(endpoint, graphql_1.PageByPublicationDocument, { host: host, slug: slug })];
            case 2:
                pageData = _e.sent();
                if ((_d = pageData.publication) === null || _d === void 0 ? void 0 : _d.staticPage) {
                    return [2 /*return*/, {
                            props: {
                                type: 'page',
                                page: pageData.publication.staticPage,
                                publication: pageData.publication,
                            },
                            revalidate: 1,
                        }];
                }
                return [2 /*return*/, {
                        notFound: true,
                        revalidate: 1,
                    }];
        }
    });
}); };
exports.getStaticProps = getStaticProps;
var getStaticPaths = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, postSlugs;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, graphql_request_1.default)(process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT, graphql_1.SlugPostsByPublicationDocument, {
                    first: 10,
                    host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
                })];
            case 1:
                data = _c.sent();
                postSlugs = ((_b = (_a = data.publication) === null || _a === void 0 ? void 0 : _a.posts.edges) !== null && _b !== void 0 ? _b : []).map(function (edge) { return edge.node.slug; });
                return [2 /*return*/, {
                        paths: postSlugs.map(function (slug) {
                            return {
                                params: {
                                    slug: slug,
                                },
                            };
                        }),
                        fallback: 'blocking',
                    }];
        }
    });
}); };
exports.getStaticPaths = getStaticPaths;
