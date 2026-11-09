"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DialogPrimitive = require("@radix-ui/react-dialog");
var link_1 = require("next/link");
var react_1 = require("react");
var button_1 = require("./button");
var appContext_1 = require("./contexts/appContext");
var CloseSVG_1 = require("./icons/svgs/CloseSVG");
var publication_logo_1 = require("./publication-logo");
var social_links_1 = require("./social-links");
function PublicationSidebar(props) {
    var toggleSidebar = props.toggleSidebar, navbarItems = props.navbarItems;
    var _a = (0, react_1.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    var publication = (0, appContext_1.useAppContext)().publication;
    var hasSocialLinks = !Object.values(publication.links).every(function (val) { return val === ''; });
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    return (<DialogPrimitive.Root open>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay className={"fixed inset-0 z-50 bg-slate-900 opacity-0 transition-opacity duration-300 ease-out ".concat(isMounted && 'opacity-50')}/>
				<DialogPrimitive.Content onEscapeKeyDown={function () {
            toggleSidebar();
        }} onPointerDownOutside={function () {
            toggleSidebar();
        }} className={"".concat(
        // When the sheet is mounted, we want to slide it in from the left.
        !isMounted ? '-translate-x-96' : 'translate-x-0', " fixed bottom-0 left-0 top-0 z-50 flex w-80 transform flex-col bg-white shadow-2xl duration-300 ease-out dark:border-neutral-800 dark:bg-neutral-950")}>
					<div className="blog-sidebar-header w-full shrink-0 py-6">
						<div className="flex items-center justify-between pl-8 pr-4">
							<div className="!text-xl">
								<publication_logo_1.PublicationLogo isSidebar/>
							</div>

							<DialogPrimitive.Close asChild>
								<button_1.Button type="outline" label="" icon={<CloseSVG_1.default className="h-5 w-5 fill-current"/>} className="rounded-xl !border-transparent !px-3 !py-2 hover:bg-neutral-800 dark:text-white" onClick={function () {
            toggleSidebar();
        }}/>
							</DialogPrimitive.Close>
						</div>
					</div>

					<div className="py-10 pl-8 pr-4">
						<h2 className="mb-4 text-sm font-semibold uppercase text-slate-500 dark:text-slate-400">
							Blog menu
						</h2>
						<section className="mb-10">
							<ul className="flex flex-col gap-2 text-slate-700 dark:text-white">
								<li>
									<link_1.default href="/" className="transition-200 block truncate text-ellipsis whitespace-nowrap rounded p-2 px-3 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
										Home
									</link_1.default>
								</li>
								{navbarItems.map(function (item) { return (<li key={item.url}>
										<link_1.default href={item.url} className="transition-200 block truncate text-ellipsis whitespace-nowrap rounded p-2 px-3 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
											{item.label}
										</link_1.default>
									</li>); })}
							</ul>
						</section>

						{hasSocialLinks && (<h2 className="mb-4 text-sm font-semibold uppercase leading-6 text-slate-500 dark:text-slate-400">
								Blog socials
							</h2>)}
						<social_links_1.SocialLinks isSidebar/>
					</div>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>);
}
exports.default = PublicationSidebar;
