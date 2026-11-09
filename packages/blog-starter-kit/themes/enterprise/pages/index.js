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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
exports.default = Index;
var addPublicationJsonLd_1 = require("@starter-kit/utils/seo/addPublicationJsonLd");
var og_1 = require("@starter-kit/utils/social/og");
var graphql_request_1 = require("graphql-request");
var dynamic_1 = require("next/dynamic");
var head_1 = require("next/head");
var react_1 = require("react");
var react_waypoint_1 = require("react-waypoint");
var button_1 = require("../components/button");
var container_1 = require("../components/container");
var appContext_1 = require("../components/contexts/appContext");
var footer_1 = require("../components/footer");
var header_1 = require("../components/header");
var hero_post_1 = require("../components/hero-post");
var icons_1 = require("../components/icons");
var layout_1 = require("../components/layout");
var more_posts_1 = require("../components/more-posts");
var navbar_1 = require("../components/navbar");
var secondary_post_1 = require("../components/secondary-post");
var graphql_1 = require("../generated/graphql");
var const_1 = require("../utils/const");
var SubscribeForm = (0, dynamic_1.default)(function () {
    return Promise.resolve().then(function () { return require('../components/subscribe-form'); }).then(function (mod) { return mod.SubscribeForm; });
});
var GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
function Index(_a) {
    var _this = this;
    var _b;
    var publication = _a.publication, initialAllPosts = _a.initialAllPosts, initialPageInfo = _a.initialPageInfo;
    var _c = (0, react_1.useState)(initialAllPosts), allPosts = _c[0], setAllPosts = _c[1];
    var _d = (0, react_1.useState)(initialPageInfo), pageInfo = _d[0], setPageInfo = _d[1];
    var _e = (0, react_1.useState)(false), loadedMore = _e[0], setLoadedMore = _e[1];
    var loadMore = function () { return __awaiter(_this, void 0, void 0, function () {
        var data, newPosts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, graphql_request_1.default)(GQL_ENDPOINT, graphql_1.MorePostsByPublicationDocument, {
                        first: 10,
                        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
                        after: pageInfo.endCursor,
                    })];
                case 1:
                    data = _a.sent();
                    if (!data.publication) {
                        return [2 /*return*/];
                    }
                    newPosts = data.publication.posts.edges.map(function (edge) { return edge.node; });
                    setAllPosts(__spreadArray(__spreadArray([], allPosts, true), newPosts, true));
                    setPageInfo(data.publication.posts.pageInfo);
                    setLoadedMore(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var firstPost = allPosts[0];
    var secondaryPosts = allPosts.slice(1, 4).map(function (post) {
        var _a;
        return (<secondary_post_1.SecondaryPost key={post.id} title={post.title} coverImage={((_a = post.coverImage) === null || _a === void 0 ? void 0 : _a.url) || const_1.DEFAULT_COVER} date={post.publishedAt} slug={post.slug} excerpt={post.brief}/>);
    });
    var morePosts = allPosts.slice(4);
    return (<appContext_1.AppProvider publication={publication}>
			<layout_1.Layout>
				<head_1.default>
					<title>
						{publication.displayTitle || publication.title || 'Hashnode Blog Starter Kit'}
					</title>
					<meta name="description" content={publication.descriptionSEO || publication.title || "".concat(publication.author.name, "'s Blog")}/>
					<meta property="twitter:card" content="summary_large_image"/>
					<meta property="twitter:title" content={publication.displayTitle || publication.title || 'Hashnode Blog Starter Kit'}/>
					<meta property="twitter:description" content={publication.descriptionSEO || publication.title || "".concat(publication.author.name, "'s Blog")}/>
					<meta property="og:image" content={publication.ogMetaData.image || (0, og_1.getAutogeneratedPublicationOG)(publication)}/>
					<meta property="twitter:image" content={publication.ogMetaData.image || (0, og_1.getAutogeneratedPublicationOG)(publication)}/>
					<script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify((0, addPublicationJsonLd_1.addPublicationJsonLd)(publication)),
        }}/>
				</head_1.default>
				<header_1.Header />
				<container_1.Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
					<navbar_1.Navbar />

					{allPosts.length === 0 && (<div className="grid grid-cols-1 py-20 lg:grid-cols-3">
							<div className="col-span-1 flex flex-col items-center gap-5 text-center text-slate-700 dark:text-neutral-400 lg:col-start-2">
								<div className="w-20">
									<icons_1.ArticleSVG clasName="stroke-current"/>
								</div>
								<p className="text-xl font-semibold ">
									Hang tight! We&apos;re drafting the first article.
								</p>
							</div>
						</div>)}

					<div className="grid items-start gap-6 xl:grid-cols-2">
						<div className="col-span-1">
							{firstPost && (<hero_post_1.HeroPost title={firstPost.title} coverImage={((_b = firstPost.coverImage) === null || _b === void 0 ? void 0 : _b.url) || const_1.DEFAULT_COVER} date={firstPost.publishedAt} slug={firstPost.slug} excerpt={firstPost.brief}/>)}
						</div>
						<div className="col-span-1 flex flex-col gap-6">{secondaryPosts}</div>
					</div>

					{allPosts.length > 0 && (<div className="bg-primary-50 grid grid-cols-4 rounded-lg px-5 py-5 dark:bg-neutral-900 md:py-10">
							<div className="col-span-full md:col-span-2 md:col-start-2">
								<h2 className="text-primary-600 dark:text-primary-500 mb-5 text-center text-lg font-semibold">
									Subscribe to our newsletter for updates and changelog.
								</h2>
								<SubscribeForm />
							</div>
						</div>)}

					{morePosts.length > 0 && (<>
							<more_posts_1.MorePosts context="home" posts={morePosts}/>
							{!loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (<div className="flex w-full flex-row items-center justify-center">
									<button_1.Button onClick={loadMore} type="outline" icon={<icons_1.ChevronDownSVG className="h-5 w-5 stroke-current"/>} label="Load more posts"/>
								</div>)}
							{loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (<react_waypoint_1.Waypoint onEnter={loadMore} bottomOffset={'10%'}/>)}
						</>)}
				</container_1.Container>
				<footer_1.Footer />
			</layout_1.Layout>
		</appContext_1.AppProvider>);
}
var getStaticProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, publication, initialAllPosts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, graphql_request_1.default)(GQL_ENDPOINT, graphql_1.PostsByPublicationDocument, {
                    first: 10,
                    host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
                })];
            case 1:
                data = _a.sent();
                publication = data.publication;
                if (!publication) {
                    return [2 /*return*/, {
                            notFound: true,
                        }];
                }
                initialAllPosts = publication.posts.edges.map(function (edge) { return edge.node; });
                return [2 /*return*/, {
                        props: {
                            publication: publication,
                            initialAllPosts: initialAllPosts,
                            initialPageInfo: publication.posts.pageInfo,
                        },
                        revalidate: 1,
                    }];
        }
    });
}); };
exports.getStaticProps = getStaticProps;
