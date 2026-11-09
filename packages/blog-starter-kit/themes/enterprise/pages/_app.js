"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyApp;
var next_1 = require("@vercel/analytics/next");
var react_1 = require("react");
require("../styles/index.css");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    (0, react_1.useEffect)(function () {
        window.adjustIframeSize = function (id, newHeight) {
            var i = document.getElementById(id);
            if (!i)
                return;
            // eslint-disable-next-line radix
            i.style.height = "".concat(parseInt(newHeight), "px");
        };
    }, []);
    return (<>
			<Component {...pageProps}/>
			<next_1.Analytics />
		</>);
}
