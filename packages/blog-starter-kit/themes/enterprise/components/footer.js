"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var link_1 = require("next/link");
var container_1 = require("./container");
var appContext_1 = require("./contexts/appContext");
var social_links_1 = require("./social-links");
var HashnodeSVG_1 = require("./icons/svgs/HashnodeSVG");
var Footer = function () {
    var publication = (0, appContext_1.useAppContext)().publication;
    var PUBLICATION_LOGO = publication.preferences.logo;
    return (<footer className="border-t py-20 dark:border-neutral-800 ">
			<container_1.Container className="px-5">
				{PUBLICATION_LOGO ? (<div className="mb-20 flex w-full flex-row justify-center">
						<link_1.default href={'/'} aria-label={"".concat(publication.title, " home page")} className="flex flex-row items-center gap-5">
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title}/>
						</link_1.default>
					</div>) : (<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>)}
				<div className="flex w-full flex-col items-center gap-5 text-center text-slate-600 dark:text-neutral-300">
					<div className="[&>div]:!justify-center">
						<social_links_1.SocialLinks isSidebar={true}/>
					</div>
					<p>&copy; {new Date().getFullYear()} {publication.title}. All rights reserved.</p>
					<p>
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>{' '}
						·{' '}
						<a href="#" className="hover:underline">
							Terms
						</a>
					</p>
					<a href="https://hashnode.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Hashnode" className="mt-8 flex flex-row items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-2 font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700">
						<HashnodeSVG_1.default className="h-5 w-5 stroke-current"/>
						<span>Hashnode</span>
					</a>
				</div>
			</container_1.Container>
		</footer>);
};
exports.Footer = Footer;
