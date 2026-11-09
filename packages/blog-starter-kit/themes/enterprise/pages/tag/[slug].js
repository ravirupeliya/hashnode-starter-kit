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
var head_1 = require("next/head");
var container_1 = require("../../components/container");
var appContext_1 = require("../../components/contexts/appContext");
var footer_1 = require("../../components/footer");
var header_1 = require("../../components/header");
var layout_1 = require("../../components/layout");
var more_posts_1 = require("../../components/more-posts");
var graphql_1 = require("../../generated/graphql");
function Post(_a) {
    var publication = _a.publication, posts = _a.posts, tag = _a.tag;
    var title = "#".concat(tag, " - ").concat(publication.title);
    return (<appContext_1.AppProvider publication={publication}>
			<layout_1.Layout>
				<head_1.default>
					<title>{title}</title>
				</head_1.default>
				<header_1.Header />
				<container_1.Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
					<div className="flex flex-col gap-1 pt-5">
						<p className="font-bold uppercase text-slate-500 dark:text-neutral-400">Tag</p>
						<h1 className="text-4xl font-bold text-slate-900 dark:text-neutral-50">#{tag}</h1>
					</div>
					<more_posts_1.MorePosts context="tag" posts={posts}/>
				</container_1.Container>
				<footer_1.Footer />
			</layout_1.Layout>
		</appContext_1.AppProvider>);
}
function getStaticProps(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var data, publication, posts;
        var params = _b.params;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, graphql_request_1.default)(process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT, graphql_1.TagPostsByPublicationDocument, {
                        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
                        first: 20,
                        tagSlug: params.slug,
                    })];
                case 1:
                    data = _c.sent();
                    publication = data.publication;
                    if (!publication) {
                        return [2 /*return*/, {
                                notFound: true,
                            }];
                    }
                    posts = publication.posts.edges.map(function (edge) { return edge.node; });
                    return [2 /*return*/, {
                            props: {
                                posts: posts,
                                publication: publication,
                                tag: params.slug,
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
