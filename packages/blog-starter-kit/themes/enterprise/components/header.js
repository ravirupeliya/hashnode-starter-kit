"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var DropdownMenu = require("@radix-ui/react-dropdown-menu");
var react_1 = require("react");
var button_1 = require("./button");
var container_1 = require("./container");
var appContext_1 = require("./contexts/appContext");
var HamburgerSVG_1 = require("./icons/svgs/HamburgerSVG");
var publication_logo_1 = require("./publication-logo");
var sidebar_1 = require("./sidebar");
function hasUrl(navbarItem) {
    return !!navbarItem.url && navbarItem.url.length > 0;
}
var Header = function () {
    var baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
    var _a = (0, react_1.useState)(), isSidebarVisible = _a[0], setIsSidebarVisible = _a[1];
    var publication = (0, appContext_1.useAppContext)().publication;
    var navbarItems = publication.preferences.navbarItems.filter(hasUrl);
    var visibleItems = navbarItems.slice(0, 3);
    var hiddenItems = navbarItems.slice(3);
    var toggleSidebar = function () {
        setIsSidebarVisible(function (prevVisibility) { return !prevVisibility; });
    };
    var navList = (<ul className="flex flex-row items-center gap-2 text-white">
			{visibleItems.map(function (item) { return (<li key={item.url}>
					<a href={item.url} target="_blank" rel="noopener noreferrer" className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
						{item.label}
					</a>
				</li>); })}

			{hiddenItems.length > 0 && (<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="transition-200 block rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
								More
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white" align="end" sideOffset={5}>
								{hiddenItems.map(function (item) { return (<DropdownMenu.Item asChild key={item.url}>
										<a href={item.url} target="_blank" rel="noopener noreferrer" className="transition-200 block truncate p-2 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
											{item.label}
										</a>
									</DropdownMenu.Item>); })}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>)}
		</ul>);
    return (<header className="border-b bg-slate-950 py-10 dark:border-neutral-800 dark:bg-neutral-900">
			<container_1.Container className="grid grid-cols-4 gap-5 px-5">
				<div className="col-span-2 flex flex-1 flex-row items-center gap-2 lg:col-span-1">
					<div className="lg:hidden">
						<button_1.Button type="outline" label="" icon={<HamburgerSVG_1.default className="h-5 w-5 stroke-current"/>} className="rounded-xl border-transparent !px-3 !py-2 text-white hover:bg-slate-900 dark:hover:bg-neutral-800" onClick={toggleSidebar}/>

						{isSidebarVisible && (<sidebar_1.default navbarItems={navbarItems} toggleSidebar={toggleSidebar}/>)}
					</div>
					<div className="hidden lg:block">
						<publication_logo_1.PublicationLogo />
					</div>
				</div>
				<div className="col-span-2 flex flex-row items-center justify-end gap-5 text-slate-300 lg:col-span-3">
					<nav className="hidden lg:block">{navList}</nav>
					{/* <Button href={baseUrl} as="a" type="primary" label="Book a demo" /> */}
				</div>
			</container_1.Container>
			<div className="mt-5 flex justify-center lg:hidden">
				<publication_logo_1.PublicationLogo />
			</div>
		</header>);
};
exports.Header = Header;
