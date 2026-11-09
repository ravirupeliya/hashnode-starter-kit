"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
var date_fns_1 = require("date-fns");
var DateFormatter = function (_a) {
    var dateString = _a.dateString;
    if (!dateString)
        return <></>;
    var date = (0, date_fns_1.parseISO)(dateString);
    return (<>
			<time dateTime={dateString}>{(0, date_fns_1.format)(date, 'LLL d, yyyy')}</time>
		</>);
};
exports.DateFormatter = DateFormatter;
