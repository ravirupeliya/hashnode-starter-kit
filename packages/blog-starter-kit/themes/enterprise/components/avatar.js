"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var image_1 = require("@starter-kit/utils/image");
var const_1 = require("../utils/const");
var Avatar = function (_a) {
    var username = _a.username, name = _a.name, picture = _a.picture, size = _a.size;
    return (<div className="flex items-center gap-2">
			<a href={"https://hashnode.com/@".concat(username)} className={size
            ? "w-".concat(size, " h-").concat(size, " block overflow-hidden rounded-full")
            : 'block h-8 w-8 overflow-hidden rounded-full'} target="_blank" rel="noopener noreferrer">
				<img className="block h-full w-full" src={(0, image_1.resizeImage)(picture, { w: 160, h: 160, c: 'face' }, const_1.DEFAULT_AVATAR)} alt={name}/>
			</a>
			<div className="text-base font-bold text-slate-600 dark:text-neutral-300">
				<a href={"https://hashnode.com/@".concat(username)} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</div>
		</div>);
};
exports.Avatar = Avatar;
