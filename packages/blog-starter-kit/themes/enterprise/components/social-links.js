"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLinks = void 0;
var appContext_1 = require("./contexts/appContext");
var icons_1 = require("./icons");
var SocialLinks = function (_a) {
    var _b, _c, _d, _e;
    var isSidebar = _a.isSidebar;
    var publication = (0, appContext_1.useAppContext)().publication;
    var hasSocialLinks = (publication === null || publication === void 0 ? void 0 : publication.links)
        ? !Object.values(publication.links).every(function (val) { return val === ''; })
        : false;
    return (<>
			<div className={"col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ".concat(isSidebar ? 'justify-start' : 'justify-end')}>
				{hasSocialLinks && (<>
						{((_b = publication.links) === null || _b === void 0 ? void 0 : _b.linkedin) && (<a href={publication.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Find us on Linkedin, external website, opens in new tab" className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600">
								<icons_1.LinkedinSVG className="h-5 w-5 stroke-current"/>
							</a>)}
						{((_c = publication.links) === null || _c === void 0 ? void 0 : _c.github) && (<a href={publication.links.github} target="_blank" rel="noopener noreferrer" aria-label="Find us on Github, external website, opens in new tab" className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600">
								<icons_1.GithubSVG className="h-5 w-5 stroke-current"/>
							</a>)}
						{((_d = publication.links) === null || _d === void 0 ? void 0 : _d.twitter) && (<a href={publication.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Find us on Twitter, external website, opens in new tab" className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600">
								<icons_1.XSVG className="h-5 w-5 stroke-current"/>
							</a>)}
						{((_e = publication.links) === null || _e === void 0 ? void 0 : _e.hashnode) && (<a href={publication.links.hashnode} target="_blank" rel="noopener noreferrer" aria-label="Find us on Hashnode, external website, opens in new tab" className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600">
								<icons_1.HashnodeSVG className="h-5 w-5 stroke-current"/>
							</a>)}
					</>)}

				{/* <Link
            prefetch={false}
            href={`/rss.xml`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open blog XML Feed, opens in new tab"
            className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
        >
            <RssSVG className="h-5 w-5 stroke-current" />
        </Link> */}
			</div>
		</>);
};
exports.SocialLinks = SocialLinks;
