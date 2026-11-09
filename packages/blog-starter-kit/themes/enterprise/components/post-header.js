"use strict";
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
exports.PostHeader = void 0;
var image_1 = require("@starter-kit/utils/image");
var cover_image_1 = require("./cover-image");
var date_formatter_1 = require("./date-formatter");
var co_authors_modal_1 = require("./co-authors-modal");
var post_read_time_in_minutes_1 = require("./post-read-time-in-minutes");
var post_title_1 = require("./post-title");
var appContext_1 = require("./contexts/appContext");
var tailwind_merge_1 = require("tailwind-merge");
var react_1 = require("react");
var profile_image_1 = require("./profile-image");
var PostHeader = function (_a) {
    var _b, _c;
    var title = _a.title, coverImage = _a.coverImage, date = _a.date, author = _a.author, readTimeInMinutes = _a.readTimeInMinutes;
    var _post = (0, appContext_1.useAppContext)().post;
    var post = _post;
    var authorsArray = __spreadArray([post.author], (post.coAuthors || []), true);
    var _d = (0, react_1.useState)(false), isCoAuthorModalVisible = _d[0], setIsCoAuthorModalVisible = _d[1];
    var closeCoAuthorModal = function () {
        setIsCoAuthorModalVisible(false);
    };
    var openCoAuthorModal = function () {
        setIsCoAuthorModalVisible(true);
    };
    return (<>
			<post_title_1.PostTitle>{title}</post_title_1.PostTitle>
			<div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 px-2 text-slate-700 dark:text-neutral-300 md:px-0">
				<div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
					{authorsArray.map(function (coAuthor, index) {
            var _a;
            return (<div key={(_a = coAuthor.id) === null || _a === void 0 ? void 0 : _a.toString()} style={{ zIndex: index + 1 }} className={(0, tailwind_merge_1.twJoin)('overflow-hidden rounded-full  bg-slate-200  dark:bg-white/20 md:mr-3', index > 0 ? 'hidden md:block' : '', authorsArray.length === 1
                    ? 'h-10 w-10 md:h-12 md:w-12'
                    : 'h-8 w-8 border-2 border-slate-100 dark:border-slate-800 md:h-9 md:w-9 [&:not(:first-of-type)]:-ml-3 md:[&:not(:first-of-type)]:-ml-6 ')}>
						<profile_image_1.default user={coAuthor} width="200" height="200" hoverDisabled={true}/>
						</div>);
        })}
					{post.coAuthors && post.coAuthors.length > 0 && (<button onClick={openCoAuthorModal} style={{ zIndex: (_b = post.coAuthors) === null || _b === void 0 ? void 0 : _b.length }} className="relative -ml-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-1-1/2 border-slate-100 bg-slate-100 px-1 group-hover:border-slate-200 dark:border-slate-800 dark:bg-slate-600 dark:text-white group-hover:dark:border-slate-700 md:hidden">
						<p className="truncate text-xs font-normal">+{post.coAuthors.length}</p>
						</button>)}
					{!((_c = post.coAuthors) === null || _c === void 0 ? void 0 : _c.length) && (<a href={"https://hashnode.com/@".concat(post.author.username)} className="ml-2 font-semibold text-slate-600 dark:text-white md:ml-0">
						<span>{post.author.name}</span>
						</a>)}
					{post.coAuthors && post.coAuthors.length > 0 && (<button onClick={openCoAuthorModal} className="ml-2 text-left font-semibold text-slate-600 hover:underline dark:text-white">
						<span>{post.author.name}</span>
						{post.coAuthors && (<span className="font-normal">
							{' '}
							<br className="block sm:hidden"/>
							with {post.coAuthors.length} co-author{post.coAuthors.length === 1 ? '' : 's'}
							</span>)}
						</button>)}
				</div>
				<div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
					<span className="mx-3 hidden font-bold text-slate-500 md:block">&middot;</span>
					<date_formatter_1.DateFormatter dateString={date}/>
					{readTimeInMinutes && <span className="mx-3 font-bold text-slate-500">&middot;</span>}
					<post_read_time_in_minutes_1.ReadTimeInMinutes readTimeInMinutes={readTimeInMinutes}/>
				</div>
			</div>
			{coverImage && (<div className="w-full px-5 sm:px-0">
					<div className="max-w-4xl mx-auto">
						<cover_image_1.CoverImage title={title} src={(0, image_1.resizeImage)(coverImage, { w: 1600, h: 840, c: 'thumb' })} priority={true}/>
					</div>
				</div>)}
			{isCoAuthorModalVisible && (<co_authors_modal_1.default closeModal={closeCoAuthorModal}/>)}
		</>);
};
exports.PostHeader = PostHeader;
