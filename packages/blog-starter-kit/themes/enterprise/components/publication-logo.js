"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationLogo = void 0;
var image_1 = require("@starter-kit/utils/image");
var link_1 = require("next/link");
var appContext_1 = require("./contexts/appContext");
var HashnodeSVG_1 = require("./icons/svgs/HashnodeSVG");
var getPublicationLogo = function (publication, isSidebar) {
    var _a;
    if (isSidebar) {
        return publication.preferences.logo; // Always display light mode logo in sidebar
    }
    return ((_a = publication.preferences.darkMode) === null || _a === void 0 ? void 0 : _a.logo) || publication.preferences.logo;
};
var PublicationLogo = function (_a) {
    var isSidebar = _a.isSidebar;
    var publication = (0, appContext_1.useAppContext)().publication;
    var PUBLICATION_LOGO = getPublicationLogo(publication, isSidebar);
    return (<h1 className="relative w-full flex flex-row items-center justify-center gap-3">
			<a href="https://hashnode.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Hashnode" className="flex items-center">
				<HashnodeSVG_1.default className={"h-6 w-6 shrink-0 ".concat(isSidebar ? 'text-black dark:text-white' : 'text-white md:h-8 md:w-8')}/>
			</a>
			<link_1.default href={'/'} aria-label={"".concat(publication.title, " blog home page")} className="flex flex-row items-center justify-center">
				{PUBLICATION_LOGO ? (<>
						<img className="block w-32 shrink-0 md:w-40" alt={publication.title} src={(0, image_1.resizeImage)(PUBLICATION_LOGO, { w: 320, h: 80 })}/>
						<span className="text-2xl font-semibold text-white md:text-3xl">Blog</span>
					</>) : (<span className={"inline-block text-2xl font-semibold leading-none ".concat(isSidebar ? 'text-black dark:text-white' : 'text-white md:text-4xl')}>
						{publication.title}
					</span>)}
			</link_1.default>
		</h1>);
};
exports.PublicationLogo = PublicationLogo;
