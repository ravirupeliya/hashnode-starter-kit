"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var searchbar_1 = require("./searchbar");
var social_links_1 = require("./social-links");
var Navbar = function () {
    return (<div className="grid grid-cols-1 items-center gap-5 pt-5 text-sm md:grid-cols-2">
			<searchbar_1.Search />
			<social_links_1.SocialLinks />
		</div>);
};
exports.Navbar = Navbar;
