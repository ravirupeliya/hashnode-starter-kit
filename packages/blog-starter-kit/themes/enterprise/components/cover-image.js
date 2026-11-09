"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverImage = void 0;
var link_1 = require("next/link");
var CoverImage = function (_a) {
    var title = _a.title, src = _a.src, slug = _a.slug, _b = _a.priority, priority = _b === void 0 ? false : _b;
    var postURL = "/".concat(slug);
    var image = (<div className="relative pt-[52.5%]">
			<div className="absolute inset-0 bg-cover rounded-lg" style={{ backgroundImage: "url(".concat(src, ")") }}/>
			{/* <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className="w-full rounded-md border object-cover hover:opacity-90 dark:border-neutral-800"
            fill
            unoptimized
            priority={priority}
            style={{ objectPosition: 'top' }}
        /> */}
		</div>);
    return (<div className="sm:mx-0">
			{slug ? (<link_1.default href={postURL} aria-label={title}>
					{image}
				</link_1.default>) : (image)}
		</div>);
};
exports.CoverImage = CoverImage;
