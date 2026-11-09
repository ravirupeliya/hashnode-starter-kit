"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeForm = void 0;
var graphql_request_1 = require("graphql-request");
var react_1 = require("react");
var graphql_1 = require("../generated/graphql");
var appContext_1 = require("./contexts/appContext");
var GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
var SubscribeForm = function () {
    var _a = (0, react_1.useState)(), status = _a[0], setStatus = _a[1];
    var _b = (0, react_1.useState)(false), requestInProgress = _b[0], setRequestInProgress = _b[1];
    var inputRef = (0, react_1.useRef)(null);
    var publication = (0, appContext_1.useAppContext)().publication;
    var subscribe = function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, data, error_1, message;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    email = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value;
                    if (!email)
                        return [2 /*return*/];
                    setRequestInProgress(true);
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, graphql_request_1.default)(GQL_ENDPOINT, graphql_1.SubscribeToNewsletterDocument, {
                            input: { publicationId: publication.id, email: email },
                        })];
                case 2:
                    data = _e.sent();
                    setRequestInProgress(false);
                    setStatus(data.subscribeToNewsletter.status);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _e.sent();
                    message = (_d = (_c = (_b = error_1.response) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.message;
                    if (message) {
                        window.alert(message);
                    }
                    setRequestInProgress(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<>
			{!status && (<div className="relative w-full rounded-full bg-white p-2 dark:bg-neutral-950">
					<input ref={inputRef} type="email" placeholder="john@doe.com" className="focus:outline-primary-600 dark:focus:outline-primary-500 left-3 top-3 w-full rounded-full p-3 text-base text-black outline-none dark:bg-neutral-950 dark:text-neutral-50"/>
					<button disabled={requestInProgress} onClick={subscribe} className="bg-primary-600 dark:bg-primary-600 absolute right-3 top-3 rounded-full px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-80">
						Subscribe
					</button>
				</div>)}
			{status === 'PENDING' && (<div className="relative w-full p-2 text-center">
					<p className="font-bold text-green-600 dark:text-green-500">Almost there!</p>
					<p className="font-medium text-slate-600 dark:text-neutral-300">
						Check your inbox for a confirmation email and click{' '}
						<strong>&quot;Confirm and Subscribe&quot;</strong> to complete your subscription. Thanks
						for joining us!
					</p>
				</div>)}
		</>);
};
exports.SubscribeForm = SubscribeForm;
