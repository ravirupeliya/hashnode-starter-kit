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
exports.Search = void 0;
var image_1 = require("@starter-kit/utils/image");
var graphql_request_1 = require("graphql-request");
var link_1 = require("next/link");
var react_1 = require("react");
var graphql_1 = require("../generated/graphql");
var const_1 = require("../utils/const");
var appContext_1 = require("./contexts/appContext");
var cover_image_1 = require("./cover-image");
var GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
var NO_OF_SEARCH_RESULTS = 5;
var Search = function () {
    var publication = (0, appContext_1.useAppContext)().publication;
    var searchInputRef = (0, react_1.useRef)(null);
    var timerRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(''), query = _a[0], setQuery = _a[1];
    var _b = (0, react_1.useState)([]), searchResults = _b[0], setSearchResults = _b[1];
    var _c = (0, react_1.useState)(false), isSearching = _c[0], setIsSearching = _c[1];
    var resetInput = function () {
        if (!searchInputRef.current)
            return;
        searchInputRef.current.value = '';
        setQuery('');
    };
    var escapeSearchOnESC = function (e) {
        if (e.key === 'Escape') {
            resetInput();
        }
    };
    var updateSearchQuery = function () {
        var _a;
        setQuery(((_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.value) || '');
    };
    var search = function (query) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (timerRef.current)
                clearTimeout(timerRef.current);
            if (!query) {
                setSearchResults([]);
                setIsSearching(false);
                return [2 /*return*/];
            }
            timerRef.current = setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                var data, posts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setIsSearching(true);
                            return [4 /*yield*/, (0, graphql_request_1.default)(GQL_ENDPOINT, graphql_1.SearchPostsOfPublicationDocument, {
                                    first: NO_OF_SEARCH_RESULTS,
                                    filter: { query: query, publicationId: publication.id },
                                })];
                        case 1:
                            data = _a.sent();
                            posts = data.searchPostsOfPublication.edges.map(function (edge) { return edge.node; });
                            setSearchResults(posts);
                            setIsSearching(false);
                            return [2 /*return*/];
                    }
                });
            }); }, 500);
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        search(query);
    }, [query]);
    var searchResultsList = searchResults.map(function (post) {
        var _a;
        var postURL = "/".concat(post.slug);
        return (<link_1.default key={post.id} href={postURL} className="flex flex-row items-center gap-5 px-4 py-2 hover:bg-slate-50 focus:outline-1 dark:hover:bg-neutral-800">
				<div className="flex flex-col gap-1">
					<strong className="text-base">{post.title}</strong>
					<span className="text-slate-600 dark:text-neutral-300">
						{post.brief.length > 140 ? post.brief.substring(0, 140) + '…' : post.brief}
					</span>
				</div>
				<div className="w-56">
					<cover_image_1.CoverImage title={post.title} src={(0, image_1.resizeImage)((_a = post.coverImage) === null || _a === void 0 ? void 0 : _a.url, {
                w: 400,
                h: 210,
                c: 'thumb',
            }, const_1.DEFAULT_COVER)}/>
				</div>
			</link_1.default>);
    });
    return (<div className="relative col-span-1">
			<input type="text" ref={searchInputRef} onKeyUp={escapeSearchOnESC} onChange={updateSearchQuery} placeholder="Search blog posts…" className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-base focus:bg-transparent dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"/>
			{query && (<>
					{isSearching && (<div className="top-100 absolute left-0 z-10 mt-1 flex w-full flex-col items-stretch overflow-hidden rounded-lg border bg-white p-1 text-left text-slate-900 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50">
							<div className="flex animate-pulse flex-col gap-1 p-4">
								<div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-2/3 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
							</div>
							<div className="flex animate-pulse flex-col gap-1 p-4">
								<div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-2/3 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
							</div>
							<div className="flex animate-pulse flex-col gap-1 p-4">
								<div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-2/3 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
							</div>
						</div>)}
					{searchResults.length > 0 && !isSearching && (<div className="top-100 absolute left-0 z-10 mt-1 flex w-full flex-col items-stretch overflow-hidden rounded-lg border bg-white p-1 text-left text-slate-900 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50">
							<h3 className="px-4 py-2 font-medium text-slate-500 dark:text-neutral-400">
								Found {searchResults.length} results
							</h3>
							<hr className="dark:border-neutral-800"/>
							{searchResultsList}
						</div>)}
				</>)}
		</div>);
};
exports.Search = Search;
