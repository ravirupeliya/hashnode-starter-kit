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
exports.default = Post;
exports.getStaticProps = getStaticProps;
exports.getStaticPaths = getStaticPaths;
var graphql_request_1 = require("graphql-request");
var error_1 = require("next/error");
var head_1 = require("next/head");
var link_1 = require("next/link");
var container_1 = require("../../components/container");
var appContext_1 = require("../../components/contexts/appContext");
var footer_1 = require("../../components/footer");
var header_1 = require("../../components/header");
var layout_1 = require("../../components/layout");
var markdown_to_html_1 = require("../../components/markdown-to-html");
var post_header_1 = require("../../components/post-header");
var graphql_1 = require("../../generated/graphql");
function Post(_a) {
    var _b, _c;
    var publication = _a.publication, post = _a.post;
    if (!post) {
        return <error_1.default statusCode={404}/>;
    }
    var title = "".concat(post.title, " | Next.js Blog Example with Hashnode");
    var highlightJsMonokaiTheme = '.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';
    var tagsList = (_b = post.tags) === null || _b === void 0 ? void 0 : _b.map(function (tag) { return (<li key={tag.id}>
			<link_1.default href={"/tag/".concat(tag.slug)} className="block rounded-full border px-2 py-1 font-medium hover:bg-slate-50 dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4">
				#{tag.slug}
			</link_1.default>
		</li>); });
    return (<appContext_1.AppProvider publication={publication}>
			<layout_1.Layout>
				<header_1.Header />
				<container_1.Container className="pt-10">
					<article className="flex flex-col items-start gap-10 pb-10">
						<head_1.default>
							<title>{title}</title>
							<link rel="canonical" href={post.url}/>
							<style dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}></style>
						</head_1.default>
						<post_header_1.PostHeader title={post.title} coverImage={(_c = post.coverImage) === null || _c === void 0 ? void 0 : _c.url} date={new Date().toISOString()} author={post.author} readTimeInMinutes={post.readTimeInMinutes}/>
						<markdown_to_html_1.MarkdownToHtml contentMarkdown={post.content.markdown}/>
						<div className="mx-auto w-full px-5 text-slate-600 dark:text-neutral-300 md:max-w-screen-md">
							<ul className="flex flex-row flex-wrap items-center gap-2">{tagsList}</ul>
						</div>
					</article>
				</container_1.Container>
				<footer_1.Footer />
			</layout_1.Layout>
		</appContext_1.AppProvider>);
}
function getStaticProps(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var _c, dataDraft, dataPublication, publication, post;
        var params = _b.params;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        (0, graphql_request_1.default)(process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT, graphql_1.DraftByIdDocument, {
                            id: params.id,
                        }),
                        (0, graphql_request_1.default)(process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT, graphql_1.PublicationByHostDocument, {
                            host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
                        }),
                    ])];
                case 1:
                    _c = _d.sent(), dataDraft = _c[0], dataPublication = _c[1];
                    publication = dataPublication.publication;
                    post = dataDraft.draft;
                    return [2 /*return*/, {
                            props: {
                                post: post,
                                publication: publication,
                            },
                            revalidate: 1,
                        }];
            }
        });
    });
}
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    paths: [],
                    fallback: 'blocking',
                }];
        });
    });
}
