"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPreview = void 0;
var image_1 = require("@starter-kit/utils/image");
var link_1 = require("next/link");
var const_1 = require("../utils/const");
var cover_image_1 = require("./cover-image");
var date_formatter_1 = require("./date-formatter");
var PostPreview = function (_a) {
    var title = _a.title, coverImage = _a.coverImage, date = _a.date, excerpt = _a.excerpt, slug = _a.slug;
    var postURL = "/".concat(slug);
    return (<div className="grid grid-cols-1 gap-5">
			<div className="col-span-1">
				<cover_image_1.CoverImage slug={slug} title={title} src={(0, image_1.resizeImage)(coverImage, { w: 400, h: 210, c: 'thumb' }, const_1.DEFAULT_COVER)}/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
					<link_1.default href={postURL} className="hover:text-primary-600 dark:hover:text-primary-500 hover:underline">
						{title}
					</link_1.default>
				</h1>
				<link_1.default href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
						{excerpt.length > 140 ? excerpt.substring(0, 140) + '…' : excerpt}
					</p>
				</link_1.default>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<link_1.default href={postURL}>
						<date_formatter_1.DateFormatter dateString={date}/>
					</link_1.default>
				</div>
			</div>
		</div>);
};
exports.PostPreview = PostPreview;
