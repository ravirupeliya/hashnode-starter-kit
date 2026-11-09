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
exports.default = Post;
var image_1 = require("@starter-kit/utils/image");
var graphql_request_1 = require("graphql-request");
var head_1 = require("next/head");
var container_1 = require("../../components/container");
var appContext_1 = require("../../components/contexts/appContext");
var cover_image_1 = require("../../components/cover-image");
var footer_1 = require("../../components/footer");
var header_1 = require("../../components/header");
var layout_1 = require("../../components/layout");
var more_posts_1 = require("../../components/more-posts");
var graphql_1 = require("../../generated/graphql");
var const_1 = require("../../utils/const");
function Post(_a) {
    var _b, _c;
    var series = _a.series, publication = _a.publication, posts = _a.posts;
    var title = "".concat(series.name, " - ").concat(publication.title);
    return (<appContext_1.AppProvider publication={publication} series={series}>
			<layout_1.Layout>
				<head_1.default>
					<title>{title}</title>
				</head_1.default>
				<header_1.Header />
				<container_1.Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
					<div className={"".concat(series.coverImage ? 'col-span-full' : 'col-span-3', " grid grid-cols-4 pt-5 md:gap-5")}>
						<div className="col-span-full flex flex-col gap-1 md:col-span-2 lg:col-span-3">
							<p className="font-bold uppercase text-slate-500 dark:text-neutral-400">Series</p>
							<h1 className="text-4xl font-bold text-slate-900 dark:text-neutral-50">
								{series.name}
							</h1>
							<div className="hashnode-content-style" dangerouslySetInnerHTML={{ __html: (_c = (_b = series.description) === null || _b === void 0 ? void 0 : _b.html) !== null && _c !== void 0 ? _c : '' }}></div>
						</div>
						<div className="relative col-span-full md:col-span-2 lg:col-span-1">
							<cover_image_1.CoverImage title={series.name} src={(0, image_1.resizeImage)(series.coverImage, {
            w: 400,
            h: 210,
            c: 'thumb',
        }, const_1.DEFAULT_COVER)}/>
						</div>
					</div>
					{posts.length > 0 ? (<more_posts_1.MorePosts context="series" posts={posts}/>) : (<div>No Posts found</div>)}
				</container_1.Container>
				<footer_1.Footer />
			</layout_1.Layout>
		</appContext_1.AppProvider>);
}
var getStaticProps = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var data, publication, series, posts;
    var params = _b.params;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!params) {
                    throw new Error('No params');
                }
                return [4 /*yield*/, (0, graphql_request_1.default)(process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT, graphql_1.SeriesPostsByPublicationDocument, {
                        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
                        first: 20,
                        seriesSlug: params.slug,
                    })];
            case 1:
                data = _c.sent();
                publication = data.publication;
                series = publication === null || publication === void 0 ? void 0 : publication.series;
                if (!publication || !series) {
                    return [2 /*return*/, {
                            notFound: true,
                        }];
                }
                posts = publication.series ? publication.series.posts.edges.map(function (edge) { return edge.node; }) : [];
                return [2 /*return*/, {
                        props: {
                            series: series,
                            posts: posts,
                            publication: publication,
                        },
                        revalidate: 1,
                    }];
        }
    });
}); };
exports.getStaticProps = getStaticProps;
var getStaticPaths = function () {
    return {
        paths: [],
        fallback: 'blocking',
    };
};
exports.getStaticPaths = getStaticPaths;
