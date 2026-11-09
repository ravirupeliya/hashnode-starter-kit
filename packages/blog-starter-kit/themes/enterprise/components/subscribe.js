"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribe = void 0;
var Popover = require("@radix-ui/react-popover");
var button_1 = require("./button");
var icons_1 = require("./icons");
var subscribe_form_1 = require("./subscribe-form");
var Subscribe = function () {
    return (<div className="fixed z-50 bottom-10 right-10">
			<Popover.Root>
				<Popover.Trigger asChild>
					<button_1.Button label="Subscribe" type="outline" icon={<icons_1.NewsletterPlusSVG className="w-5 h-5 fill-current"/>} className="!bg-white dark:!bg-neutral-950"/>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content className="w-[350px] rounded-xl border bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 md:w-[500px]" align="end" sideOffset={5}>
						<h3 className="mb-2 text-base font-semibold text-center text-primary-600">
							Subscribe to our newsletter for updates and changelog.
						</h3>
						<subscribe_form_1.SubscribeForm />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>);
};
exports.Subscribe = Subscribe;
