"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadTimeInMinutes = void 0;
var BookOpenSVG_1 = require("./icons/svgs/BookOpenSVG");
var ReadTimeInMinutes = function (_a) {
    var readTimeInMinutes = _a.readTimeInMinutes;
    return (<>
			<p className="flex flex-row items-center">
				<BookOpenSVG_1.default className="mr-2 h-5 w-5 fill-current opacity-75"/>
				<span>{readTimeInMinutes} min read</span>
			</p>
		</>);
};
exports.ReadTimeInMinutes = ReadTimeInMinutes;
