(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@angular/common/http'), require('@fortawesome/angular-fontawesome'), require('ng-click-outside'), require('jquery'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/annotation', ['exports', '@angular/core', '@angular/common', '@groupdocs.examples.angular/common-components', 'rxjs', '@angular/common/http', '@fortawesome/angular-fontawesome', 'ng-click-outside', 'jquery', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.annotation = {}), global.ng.core, global.ng.common, global.commonComponents, global.rxjs, global.ng.common.http, global.angularFontawesome, global.ngClickOutside, global.jquery, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons));
}(this, (function (exports, core, common, commonComponents, rxjs, http, angularFontawesome, ngClickOutside, jquery, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AnnotationConfig = /** @class */ (function () {
        function AnnotationConfig() {
        }
        return AnnotationConfig;
    }());
    if (false) {
        /** @type {?} */
        AnnotationConfig.prototype.rewrite;
        /** @type {?} */
        AnnotationConfig.prototype.pageSelector;
        /** @type {?} */
        AnnotationConfig.prototype.download;
        /** @type {?} */
        AnnotationConfig.prototype.upload;
        /** @type {?} */
        AnnotationConfig.prototype.print;
        /** @type {?} */
        AnnotationConfig.prototype.browse;
        /** @type {?} */
        AnnotationConfig.prototype.enableRightClick;
        /** @type {?} */
        AnnotationConfig.prototype.filesDirectory;
        /** @type {?} */
        AnnotationConfig.prototype.fontsDirectory;
        /** @type {?} */
        AnnotationConfig.prototype.defaultDocument;
        /** @type {?} */
        AnnotationConfig.prototype.preloadPageCount;
        /** @type {?} */
        AnnotationConfig.prototype.textAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.areaAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.pointAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.textStrikeoutAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.polylineAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.textFieldAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.watermarkAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.textReplacementAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.arrowAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.textRedactionAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.textUnderlineAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.distanceAnnotation;
        /** @type {?} */
        AnnotationConfig.prototype.downloadOriginal;
        /** @type {?} */
        AnnotationConfig.prototype.downloadAnnotated;
        /** @type {?} */
        AnnotationConfig.prototype.zoom;
        /** @type {?} */
        AnnotationConfig.prototype.fitWidth;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AnnotationConfigService = /** @class */ (function () {
        function AnnotationConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._annotationConfig = new rxjs.BehaviorSubject(new AnnotationConfig());
            this._updatedConfig = this._annotationConfig.asObservable();
        }
        Object.defineProperty(AnnotationConfigService.prototype, "updatedConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this._updatedConfig;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AnnotationConfigService.prototype.load = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.ANNOTATION_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var annotationConfig = (/** @type {?} */ (response));
                    _this._annotationConfig.next(annotationConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load annotation config: " + JSON.stringify(response));
                }));
            }));
        };
        AnnotationConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AnnotationConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ AnnotationConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AnnotationConfigService_Factory() { return new AnnotationConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: AnnotationConfigService, providedIn: "root" });
        return AnnotationConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AnnotationConfigService.prototype._annotationConfig;
        /**
         * @type {?}
         * @private
         */
        AnnotationConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        AnnotationConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        AnnotationConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AnnotationService = /** @class */ (function () {
        function AnnotationService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        AnnotationService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getAnnotationApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        AnnotationService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getAnnotationApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        AnnotationService.prototype.upload = /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        function (file, url, rewrite) {
            /** @type {?} */
            var formData = new FormData();
            formData.append("file", file);
            formData.append('rewrite', String(rewrite));
            if (url) {
                formData.append("url", url);
            }
            return this._http.post(this._config.getAnnotationApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        AnnotationService.prototype.loadPage = /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        function (credentials, page) {
            return this._http.post(this._config.getAnnotationApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'page': page
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        AnnotationService.prototype.getDownloadUrl = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._config.getAnnotationApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
        };
        /**
         * @param {?} credentials
         * @param {?} annotationsData
         * @param {?} print
         * @return {?}
         */
        AnnotationService.prototype.annotate = /**
         * @param {?} credentials
         * @param {?} annotationsData
         * @param {?} print
         * @return {?}
         */
        function (credentials, annotationsData, print) {
            /** @type {?} */
            var data = {
                'guid': credentials.guid,
                'password': credentials.password,
                'annotationsData': annotationsData,
                'documentType': commonComponents.FileUtil.find(credentials.guid, false).format,
                'print': print
            };
            return this._http.post(this._config.getAnnotationApiEndpoint() + commonComponents.Api.ANNOTATE, data, commonComponents.Api.httpOptionsJson);
        };
        AnnotationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AnnotationService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ AnnotationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AnnotationService_Factory() { return new AnnotationService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: AnnotationService, providedIn: "root" });
        return AnnotationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AnnotationService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        AnnotationService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AnnotationType = /** @class */ (function () {
        function AnnotationType() {
        }
        /**
         * @param {?} id
         * @return {?}
         */
        AnnotationType.getAnnotationType = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            switch (id) {
                case AnnotationType.TEXT.id:
                    return AnnotationType.TEXT;
                case AnnotationType.AREA.id:
                    return AnnotationType.AREA;
                case AnnotationType.POINT.id:
                    return AnnotationType.POINT;
                case AnnotationType.TEXT_STRIKEOUT.id:
                    return AnnotationType.TEXT_STRIKEOUT;
                case AnnotationType.POLYLINE.id:
                    return AnnotationType.POLYLINE;
                case AnnotationType.TEXT_FIELD.id:
                    return AnnotationType.TEXT_FIELD;
                case AnnotationType.WATERMARK.id:
                    return AnnotationType.WATERMARK;
                case AnnotationType.TEXT_REPLACEMENT.id:
                    return AnnotationType.TEXT_REPLACEMENT;
                case AnnotationType.ARROW.id:
                    return AnnotationType.ARROW;
                case AnnotationType.TEXT_REDACTION.id:
                    return AnnotationType.TEXT_REDACTION;
                case AnnotationType.TEXT_UNDERLINE.id:
                    return AnnotationType.TEXT_UNDERLINE;
                case AnnotationType.DISTANCE.id:
                    return AnnotationType.DISTANCE;
            }
        };
        AnnotationType.TEXT = { id: 'text', name: 'Text', icon: 'highlighter' };
        AnnotationType.AREA = { id: 'area', name: 'Area', icon: 'vector-square' };
        AnnotationType.POINT = { id: 'point', name: 'Point', icon: 'thumbtack' };
        AnnotationType.TEXT_STRIKEOUT = { id: 'textStrikeout', name: 'Text strikeout', icon: 'strikethrough', };
        AnnotationType.POLYLINE = { id: 'polyline', name: 'Polyline', icon: 'signature' };
        AnnotationType.TEXT_FIELD = { id: 'textField', name: 'Text field', icon: 'i-cursor' };
        AnnotationType.WATERMARK = { id: 'watermark', name: 'Watermark', icon: 'tint' };
        AnnotationType.TEXT_REPLACEMENT = { id: 'textReplacement', name: 'Text replacement', icon: 'edit' };
        AnnotationType.ARROW = { id: 'arrow', name: 'Arrow', icon: 'mouse-pointer' };
        AnnotationType.TEXT_REDACTION = { id: 'textRedaction', name: 'Text redaction', icon: 'brush' };
        AnnotationType.TEXT_UNDERLINE = { id: 'textUnderline', name: 'Text underline', icon: 'underline' };
        AnnotationType.DISTANCE = { id: 'distance', name: 'Distance', icon: 'ruler' };
        return AnnotationType;
    }());
    if (false) {
        /** @type {?} */
        AnnotationType.TEXT;
        /** @type {?} */
        AnnotationType.AREA;
        /** @type {?} */
        AnnotationType.POINT;
        /** @type {?} */
        AnnotationType.TEXT_STRIKEOUT;
        /** @type {?} */
        AnnotationType.POLYLINE;
        /** @type {?} */
        AnnotationType.TEXT_FIELD;
        /** @type {?} */
        AnnotationType.WATERMARK;
        /** @type {?} */
        AnnotationType.TEXT_REPLACEMENT;
        /** @type {?} */
        AnnotationType.ARROW;
        /** @type {?} */
        AnnotationType.TEXT_REDACTION;
        /** @type {?} */
        AnnotationType.TEXT_UNDERLINE;
        /** @type {?} */
        AnnotationType.DISTANCE;
    }
    var FileAnnotationDescription = /** @class */ (function () {
        function FileAnnotationDescription() {
        }
        return FileAnnotationDescription;
    }());
    if (false) {
        /** @type {?} */
        FileAnnotationDescription.prototype.guid;
        /** @type {?} */
        FileAnnotationDescription.prototype.pages;
        /** @type {?} */
        FileAnnotationDescription.prototype.supportedAnnotations;
    }
    var PageAnnotationModel = /** @class */ (function (_super) {
        __extends(PageAnnotationModel, _super);
        function PageAnnotationModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PageAnnotationModel;
    }(commonComponents.PageModel));
    if (false) {
        /** @type {?} */
        PageAnnotationModel.prototype.annotations;
    }
    var Position = /** @class */ (function () {
        function Position(left, top) {
            this.left = left;
            this.top = top;
        }
        /**
         * @param {?} position
         * @return {?}
         */
        Position.clone = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            return new Position(position.left, position.top);
        };
        return Position;
    }());
    if (false) {
        /** @type {?} */
        Position.prototype.left;
        /** @type {?} */
        Position.prototype.top;
    }
    var Dimension = /** @class */ (function () {
        function Dimension(width, height) {
            this.width = width;
            this.height = height;
        }
        /**
         * @return {?}
         */
        Dimension.prototype.isNone = /**
         * @return {?}
         */
        function () {
            return this.width === 0 && this.height === 0;
        };
        return Dimension;
    }());
    if (false) {
        /** @type {?} */
        Dimension.prototype.width;
        /** @type {?} */
        Dimension.prototype.height;
    }
    var AnnotationData = /** @class */ (function () {
        function AnnotationData() {
            this.text = "";
            this.fontColor = 8421375;
        }
        return AnnotationData;
    }());
    if (false) {
        /** @type {?} */
        AnnotationData.prototype.id;
        /** @type {?} */
        AnnotationData.prototype.comments;
        /** @type {?} */
        AnnotationData.prototype.text;
        /** @type {?} */
        AnnotationData.prototype.font;
        /** @type {?} */
        AnnotationData.prototype.fontSize;
        /** @type {?} */
        AnnotationData.prototype.fontColor;
        /** @type {?} */
        AnnotationData.prototype.height;
        /** @type {?} */
        AnnotationData.prototype.width;
        /** @type {?} */
        AnnotationData.prototype.left;
        /** @type {?} */
        AnnotationData.prototype.top;
        /** @type {?} */
        AnnotationData.prototype.pageNumber;
        /** @type {?} */
        AnnotationData.prototype.svgPath;
        /** @type {?} */
        AnnotationData.prototype.type;
    }
    var CommentAnnotation = /** @class */ (function () {
        function CommentAnnotation(id) {
            this.id = id;
        }
        return CommentAnnotation;
    }());
    if (false) {
        /** @type {?} */
        CommentAnnotation.prototype.id;
    }
    var Comment = /** @class */ (function () {
        function Comment(id) {
            this.id = id;
            this.time = Date.now();
            this.text = "";
            this.userName = "";
        }
        /**
         * @param {?} comment
         * @return {?}
         */
        Comment.create = /**
         * @param {?} comment
         * @return {?}
         */
        function (comment) {
            /** @type {?} */
            var ret = new Comment(comment.id);
            ret.text = comment.text;
            ret.userName = comment.userName;
            ret.time = comment.time;
            return ret;
        };
        return Comment;
    }());
    if (false) {
        /** @type {?} */
        Comment.prototype.id;
        /** @type {?} */
        Comment.prototype.text;
        /** @type {?} */
        Comment.prototype.userName;
        /** @type {?} */
        Comment.prototype.time;
    }
    var RemoveAnnotation = /** @class */ (function () {
        function RemoveAnnotation(id) {
            this.id = id;
        }
        return RemoveAnnotation;
    }());
    if (false) {
        /** @type {?} */
        RemoveAnnotation.prototype.id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActiveAnnotationService = /** @class */ (function () {
        function ActiveAnnotationService() {
            this._observer = new rxjs.Subject();
            this._activeChange = this._observer.asObservable();
        }
        Object.defineProperty(ActiveAnnotationService.prototype, "activeChange", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activeChange;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} annId
         * @return {?}
         */
        ActiveAnnotationService.prototype.changeActive = /**
         * @param {?} annId
         * @return {?}
         */
        function (annId) {
            this._observer.next(annId);
        };
        return ActiveAnnotationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ActiveAnnotationService.prototype._observer;
        /**
         * @type {?}
         * @private
         */
        ActiveAnnotationService.prototype._activeChange;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RemoveAnnotationService = /** @class */ (function () {
        function RemoveAnnotationService() {
            this._observer = new rxjs.Subject();
            this._removeAnnotation = this._observer.asObservable();
        }
        Object.defineProperty(RemoveAnnotationService.prototype, "removeAnnotation", {
            get: /**
             * @return {?}
             */
            function () {
                return this._removeAnnotation;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        RemoveAnnotationService.prototype.remove = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._observer.next(id);
        };
        return RemoveAnnotationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        RemoveAnnotationService.prototype._observer;
        /**
         * @type {?}
         * @private
         */
        RemoveAnnotationService.prototype._removeAnnotation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommentAnnotationService = /** @class */ (function () {
        function CommentAnnotationService() {
            this._observer = new rxjs.Subject();
            this._commentAnnotation = this._observer.asObservable();
            this._observerAddComment = new rxjs.Subject();
            this._addCommentObserve = this._observerAddComment.asObservable();
        }
        Object.defineProperty(CommentAnnotationService.prototype, "commentAnnotation", {
            get: /**
             * @return {?}
             */
            function () {
                return this._commentAnnotation;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        CommentAnnotationService.prototype.comment = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._observer.next(id);
        };
        Object.defineProperty(CommentAnnotationService.prototype, "addCommentObserve", {
            get: /**
             * @return {?}
             */
            function () {
                return this._addCommentObserve;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} comment
         * @return {?}
         */
        CommentAnnotationService.prototype.addComment = /**
         * @param {?} comment
         * @return {?}
         */
        function (comment) {
            this._observerAddComment.next(comment);
        };
        return CommentAnnotationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CommentAnnotationService.prototype._observer;
        /**
         * @type {?}
         * @private
         */
        CommentAnnotationService.prototype._commentAnnotation;
        /**
         * @type {?}
         * @private
         */
        CommentAnnotationService.prototype._observerAddComment;
        /**
         * @type {?}
         * @private
         */
        CommentAnnotationService.prototype._addCommentObserve;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $ = jquery;
    var AnnotationComponent = /** @class */ (function () {
        function AnnotationComponent(_activeAnnotationService, _removeAnnotationService, _commentAnnotationService) {
            var _this = this;
            this._activeAnnotationService = _activeAnnotationService;
            this._removeAnnotationService = _removeAnnotationService;
            this._commentAnnotationService = _commentAnnotationService;
            this.active = true;
            this.dimension = new Dimension(0, 0);
            this.textValue = "";
            this.distanceValue = '0px';
            this.pointsValue = "";
            this.svgPath = "";
            this.formatting = commonComponents.Formatting.default();
            this.points = [];
            this._activeAnnotationService.activeChange.subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this.active = _this.id === id;
                if (_this.active) {
                    _this.setTextFocus();
                }
            }));
        }
        /**
         * @param {?} position
         * @return {?}
         */
        AnnotationComponent.isOnPage = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            /** @type {?} */
            var currentPage = document.elementFromPoint(position.x, position.y);
            return currentPage && $(currentPage).parent().parent() &&
                ($(currentPage).parent().parent().parent().hasClass("page") ||
                    $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.leftTop = Position.clone(this.position);
            if (this.isPolyline()) {
                if (this.svgPath) {
                    /** @type {?} */
                    var parsedPoints = this.svgPath.replace("M", "").split('L');
                    /** @type {?} */
                    var x_1 = parseFloat(parsedPoints[0].split(",")[0]);
                    /** @type {?} */
                    var y_1 = parseFloat(parsedPoints[0].split(",")[1]);
                    /** @type {?} */
                    var comp_1 = this;
                    parsedPoints.forEach((/**
                     * @param {?} point
                     * @param {?} index
                     * @return {?}
                     */
                    function (point, index) {
                        if (index !== 0) {
                            if (point !== "") {
                                comp_1.addPoint(new Position(x_1, y_1));
                                x_1 = (x_1 + parseFloat(point.split(",")[0]));
                                y_1 = (y_1 + parseFloat(point.split(",")[1]));
                            }
                        }
                    }));
                }
                else {
                    this.addPoint(this.position);
                }
            }
            else if (this.isPath()) {
                if (this.svgPath || (this.type === AnnotationType.ARROW.id && !this.dimension.isNone())) {
                    /** @type {?} */
                    var end = new Position(this.position.left + this.dimension.width, this.position.top + this.dimension.height);
                    this.setEndPosition(end);
                    if (this.dimension.height < 0) {
                        this.leftTop.top += this.dimension.height;
                        this.dimension.height = this.dimension.height * (-1);
                    }
                    if (this.dimension.width < 0) {
                        this.leftTop.left += this.dimension.width;
                        this.dimension.width = this.dimension.width * (-1);
                    }
                }
                else {
                    this.setEndPosition(this.position);
                }
                this.distanceValue = this.getDistance() + "px";
            }
            else if (this.type === AnnotationType.POINT.id) {
                this.initPoint();
            }
            else {
                this.setEndPosition(this.position);
            }
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.setTextFocus();
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.activation = /**
         * @return {?}
         */
        function () {
            this._activeAnnotationService.changeActive(this.id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.width = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.checkDragging($event, 0)) {
                this.dimension.width += $event;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.height = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.checkDragging(0, $event)) {
                this.dimension.height += $event;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.left = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.position.left += $event;
            this.correctPosition();
            this.refreshLeftTop();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.top = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.position.top += $event;
            this.correctPosition();
            this.refreshLeftTop();
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationComponent.prototype.refreshLeftTop = /**
         * @private
         * @return {?}
         */
        function () {
            this.leftTop.left = this.position.left;
            this.leftTop.top = this.position.top;
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationComponent.prototype.correctPosition = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.position.left < 0) {
                this.position.left = 0;
            }
            if (this.position.top < 0) {
                this.position.top = 0;
            }
            if (this.position.top + this.dimension.height > this.pageHeight) {
                this.position.top = this.pageHeight - this.dimension.height;
            }
            if (this.position.left + this.dimension.width > this.pageWidth) {
                this.position.left = this.pageWidth - this.dimension.width;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.dragOver = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.dragStart = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            this.oldPosition = commonComponents.Utils.getMousePosition($event);
            if ($event.dataTransfer) {
                $event.dataTransfer.setData('text', 'foo');
            }
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.initPoint = /**
         * @return {?}
         */
        function () {
            this.dimension = new Dimension(40, 40);
            this.position.left = this.position.left - 20;
            this.position.top = this.position.top - 20;
            this.leftTop = Position.clone(this.position);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.dragging = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var e_1, _a;
            $event.preventDefault();
            /** @type {?} */
            var position = commonComponents.Utils.getMousePosition($event);
            if (position.x && position.y && AnnotationComponent.isOnPage(position)) {
                /** @type {?} */
                var left = position.x - this.oldPosition.x;
                /** @type {?} */
                var top_1 = position.y - this.oldPosition.y;
                if (this.isPolyline()) {
                    if (!this.checkDragging(left, top_1)) {
                        return;
                    }
                    this.pointsValue = "";
                    try {
                        for (var _b = __values(this.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var point = _c.value;
                            point.left = point.left + left;
                            point.top = point.top + top_1;
                            this.pointsValue += point.left + "," + point.top + " ";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this.leftTop.left += left;
                    this.leftTop.top += top_1;
                }
                else if (this.isPath()) {
                    if (!this.checkDragging(left, top_1)) {
                        return;
                    }
                    this.position.left += left;
                    this.position.top += top_1;
                    this.endPosition.left += left;
                    this.endPosition.top += top_1;
                    this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
                    this.distanceValue = this.getDistance() + "px";
                    this.leftTop.left += left;
                    this.leftTop.top += top_1;
                }
                else {
                    this.position.left += left;
                    this.position.top += top_1;
                    this.correctPosition();
                    this.refreshLeftTop();
                }
                this.oldPosition = position;
            }
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getAnnotationClass = /**
         * @return {?}
         */
        function () {
            switch (this.type) {
                case AnnotationType.TEXT.id:
                    return "gd-annotation-wrapper-border gd-text-annotation";
                case AnnotationType.TEXT_STRIKEOUT.id:
                    return "gd-annotation-wrapper-border gd-text-annotation gd-text-strikeout-annotation";
                case AnnotationType.TEXT_UNDERLINE.id:
                    return "gd-annotation-wrapper-border gd-text-annotation gd-text-underline-annotation";
                case AnnotationType.TEXT_REDACTION.id:
                    return "gd-annotation-wrapper-border gd-text-redaction-annotation";
                case AnnotationType.TEXT_REPLACEMENT.id:
                    return "gd-annotation-wrapper-border gd-text-replacement-annotation";
                case AnnotationType.POINT.id:
                    return "";
                default:
                    return "gd-annotation-wrapper-border";
            }
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isStrikeoutOrUnderline = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.TEXT_STRIKEOUT.id || this.type === AnnotationType.TEXT_UNDERLINE.id;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isTextReplacement = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.TEXT_REPLACEMENT.id;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AnnotationComponent.prototype.saveText = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.textValue = value;
        };
        /**
         * @param {?} position
         * @return {?}
         */
        AnnotationComponent.prototype.draw = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            if (this.onPage(position)) {
                if (this.isPolyline()) {
                    this.addPoint(position);
                }
                else if (this.isPath()) {
                    this.setEndPosition(position);
                    this.distanceValue = this.getDistance() + "px";
                }
                this.calcPositionAndDimension();
            }
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.setStyles = /**
         * @return {?}
         */
        function () {
            return {
                'stroke': '#579AF0',
                'stroke-width': 2,
                'fill-opacity': 0,
                'id': (this.isPolyline() ? 'gd-polyline-annotation-' : (this.isDistance() ? 'gd-distance-annotation-' : 'gd-arrow-annotation-')) + this.id,
                'class': 'annotation-svg',
            };
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isPolyline = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.POLYLINE.id;
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationComponent.prototype.calcPositionAndDimension = /**
         * @private
         * @return {?}
         */
        function () {
            var e_2, _a;
            /** @type {?} */
            var leftTop = new Position(Number.MAX_VALUE, Number.MAX_VALUE);
            /** @type {?} */
            var rightBottom = new Position(Number.MIN_VALUE, Number.MIN_VALUE);
            if (this.isPolyline()) {
                try {
                    for (var _b = __values(this.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var point = _c.value;
                        leftTop.left = Math.min(point.left, leftTop.left);
                        leftTop.top = Math.min(point.top, leftTop.top);
                        rightBottom.left = Math.max(point.left, rightBottom.left);
                        rightBottom.top = Math.max(point.top, rightBottom.top);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                leftTop.left = Math.min(this.position.left, this.endPosition.left);
                leftTop.top = Math.min(this.position.top, this.endPosition.top);
                rightBottom.left = Math.max(this.position.left, this.endPosition.left);
                rightBottom.top = Math.max(this.position.top, this.endPosition.top);
            }
            this.dimension.width = rightBottom.left - leftTop.left;
            this.dimension.height = rightBottom.top - leftTop.top;
            this.leftTop = leftTop;
        };
        /**
         * @param {?} currentPosition
         * @return {?}
         */
        AnnotationComponent.prototype.calcDimensions = /**
         * @param {?} currentPosition
         * @return {?}
         */
        function (currentPosition) {
            if (currentPosition.left <= this.pageWidth && currentPosition.left >= 0) {
                this.dimension.width = currentPosition.left - this.position.left;
            }
            if (currentPosition.top <= this.pageHeight && currentPosition.top >= 0) {
                this.dimension.height = currentPosition.top - this.position.top;
            }
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getHeight = /**
         * @return {?}
         */
        function () {
            return this.dimension.height === undefined ? undefined : Math.abs(this.dimension.height);
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getWidth = /**
         * @return {?}
         */
        function () {
            return this.dimension.width === undefined ? undefined : Math.abs(this.dimension.width);
        };
        /**
         * @private
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
        AnnotationComponent.prototype.checkDragging = /**
         * @private
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
        function (left, top) {
            return !(this.leftTop.left + left < 0 || this.leftTop.top + top < 0 ||
                this.leftTop.top + top + this.dimension.height > this.pageHeight ||
                this.leftTop.left + left + this.dimension.width > this.pageWidth);
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isPoint = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.POINT.id;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isSVG = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.POLYLINE.id ||
                this.type === AnnotationType.DISTANCE.id ||
                this.type === AnnotationType.ARROW.id;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isDistance = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.DISTANCE.id;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.distanceTextOptions = /**
         * @return {?}
         */
        function () {
            return { 'font-size': "12px" };
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isPath = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.DISTANCE.id ||
                this.type === AnnotationType.ARROW.id;
        };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        AnnotationComponent.prototype.setEndPosition = /**
         * @private
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.endPosition = Position.clone(position);
            this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
        };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        AnnotationComponent.prototype.addPoint = /**
         * @private
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.points.push(position);
            this.pointsValue += position.left + "," + position.top + " ";
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationComponent.prototype.getDistance = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var xs = this.position.left - this.endPosition.left;
            /** @type {?} */
            var ys = this.position.top - this.endPosition.top;
            return Math.round(Math.sqrt(xs * xs + ys * ys));
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.bottom = /**
         * @return {?}
         */
        function () {
            return 'url(' + window.location + '#end)';
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.head = /**
         * @return {?}
         */
        function () {
            return this.isDistance() ? 'url(' + window.location + '#start)' : "";
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getTextX = /**
         * @return {?}
         */
        function () {
            return this.getDistance() / 2;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.isText = /**
         * @return {?}
         */
        function () {
            return this.type === AnnotationType.TEXT_FIELD.id || this.type === AnnotationType.WATERMARK.id;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getFormatting = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var f = this.formatting;
            /** @type {?} */
            var formatting = commonComponents.Formatting.default();
            if (f) {
                formatting.fontSize = f.fontSize;
                formatting.font = f.font;
                formatting.color = f.color;
            }
            return formatting;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.saveFormatting = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.formatting.fontSize = $event.fontSize;
            this.formatting.font = $event.font;
            this.formatting.color = $event.color;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.remove = /**
         * @return {?}
         */
        function () {
            this._removeAnnotationService.remove(new RemoveAnnotation(this.id));
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getMenuShift = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var menuWidth = this.isText() ? 265 : 111;
            return this.dimension.width > menuWidth ? 0 : (this.dimension.width - menuWidth) * 0.5;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getMenuType = /**
         * @return {?}
         */
        function () {
            return commonComponents.MenuType.FOR_ANNOTATION;
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.addComment = /**
         * @return {?}
         */
        function () {
            this._commentAnnotationService.comment(new CommentAnnotation(this.id));
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationComponent.prototype.setTextFocus = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.isText() || this.isTextReplacement()) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var element = $("#text-" + _this.id);
                    if (element) {
                        element.focus();
                    }
                }), 100);
            }
        };
        /**
         * @param {?} key
         * @param {?} textarea
         * @return {?}
         */
        AnnotationComponent.prototype.textAreaHeight = /**
         * @param {?} key
         * @param {?} textarea
         * @return {?}
         */
        function (key, textarea) {
            this.dimension.height = "Enter" === key ? textarea.scrollHeight + this.formatting.fontSize : textarea.scrollHeight;
            this.dimension.width = textarea.scrollWidth;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationComponent.prototype.hideMenu = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this._activeAnnotationService.changeActive(null);
        };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.getAnnotationData = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var annotationData = new AnnotationData();
            annotationData.id = this.id;
            annotationData.text = this.textValue;
            annotationData.fontColor = parseInt(commonComponents.Utils.toHex(this.formatting.color).replace("#", ""), 16);
            annotationData.fontSize = this.formatting.fontSize;
            annotationData.font = this.formatting.font;
            if (this.type === AnnotationType.POINT.id) {
                annotationData.left = this.leftTop.left + 20;
                annotationData.top = this.leftTop.top + 20;
                annotationData.height = 0;
                annotationData.width = 0;
            }
            else {
                annotationData.left = this.leftTop.left;
                annotationData.top = this.leftTop.top;
                annotationData.height = this.dimension.height;
                annotationData.width = this.dimension.width;
            }
            annotationData.pageNumber = this.pageNumber;
            annotationData.type = this.type;
            annotationData.svgPath = this.getSvgPath();
            return annotationData;
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationComponent.prototype.getSvgPath = /**
         * @private
         * @return {?}
         */
        function () {
            var e_3, _a;
            /** @type {?} */
            var svgPath = "M";
            if (this.type === AnnotationType.POLYLINE.id) {
                /** @type {?} */
                var index = 0;
                /** @type {?} */
                var previousX = 0;
                /** @type {?} */
                var previousY = 0;
                try {
                    for (var _b = __values(this.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var point = _c.value;
                        if (index === 0) {
                            svgPath += point.left + "," + point.top + "l";
                            index = 1;
                        }
                        else {
                            previousX = point.left - previousX;
                            previousY = point.top - previousY;
                            svgPath += previousX + "," + previousY + "l";
                        }
                        previousX = point.left;
                        previousY = point.top;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            else if (this.type === AnnotationType.DISTANCE.id || this.type === AnnotationType.ARROW.id) {
                svgPath += this.position.left + "," + this.position.top + " ";
                svgPath += this.endPosition.left + "," + this.endPosition.top + " ";
            }
            else {
                svgPath = "";
            }
            return svgPath;
        };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        AnnotationComponent.prototype.onPage = /**
         * @private
         * @param {?} position
         * @return {?}
         */
        function (position) {
            return position.left <= this.pageWidth && position.top <= this.pageHeight &&
                position.left >= 0 && position.top >= 0;
        };
        AnnotationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-annotation',
                        template: "<div class=\"gd-annotation\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle,.gd-comments-panel'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"leftTop.left\" [style.top.px]=\"leftTop.top\"\n     [style.width.px]=\"getWidth()\"\n     [style.height.px]=\"getHeight()\"\n     (click)=\"activation()\"\n     (touchstart)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"dragOver($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-annotation-wrapper\" [ngClass]=\"getAnnotationClass()\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveFormatting($event)\" (removeItem)=\"remove()\"\n                     [translation]=\"getMenuShift()\" [menuType]=\"getMenuType()\"\n                     (comment)=\"addComment()\"></gd-context-menu>\n    <div class=\"gd-text-strikeout-line\" *ngIf=\"isStrikeoutOrUnderline()\"></div>\n    <textarea wrap=\"off\" class=\"gd-text\" *ngIf=\"isTextReplacement() || isText()\" [value]=\"textValue\"\n              id=\"{{'text-' + id}}\" #text (keyup)=\"saveText(text.value)\"\n              (keydown)=\"textAreaHeight($event.key, text)\"\n              [style.color]=\"formatting?.color\"\n              [style.font-family]=\"formatting?.font\"\n              [style.font-size.px]=\"formatting?.fontSize\"\n              [style.width.px]=\"getWidth()\"\n              [style.height.px]=\"getHeight()\"></textarea>\n    <div *ngIf=\"isPoint()\" class=\"gd-point\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','thumbtack']\" [size]=\"'lg'\"></fa-icon>\n    </div>\n  </div>\n\n  <gd-resizing [id]=\"id\" *ngIf=\"active && !isSVG() && !isPoint()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"true\" [ne]=\"true\" [nw]=\"true\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<svg *ngIf=\"isSVG()\" class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polyline *ngIf=\"isPolyline()\" [attr.id]=\"id\" [attr.points]=\"pointsValue\" [ngStyle]=\"setStyles()\">\n  </polyline>\n  <path id=\"{{'gd-path-' + id}}\" *ngIf=\"isPath()\" [attr.d]=\"pathValue\" [attr.marker-end]=\"bottom()\"\n        [attr.marker-start]=\"head()\" [ngStyle]=\"setStyles()\">\n    <title *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\">{{ distanceValue }}</title>\n  </path>\n  <text *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\" [attr.x]=\"getTextX()\"\n        [attr.y]=\"0\">\n    <textPath [attr.href]=\"'#gd-path-' + id\">\n      {{ distanceValue }}\n    </textPath>\n  </text>\n</svg>\n",
                        styles: [".gd-annotation{position:absolute!important;cursor:pointer;z-index:9}.gd-annotation .gd-annotation-wrapper-border{outline:#679ffa solid 1px;display:-webkit-box}.gd-annotation .gd-annotation-wrapper{height:inherit;z-index:9}.gd-annotation .gd-annotation-wrapper ::ng-deep .palette{width:0;height:37px}.gd-annotation .gd-annotation-wrapper .gd-text-strikeout-line{background-color:#e04e4e;height:2px;width:100%}.gd-annotation .gd-annotation-wrapper .gd-text{border:none;outline:0;margin:0;padding:0;overflow:hidden;background-color:transparent;min-width:1em;min-height:1em}.gd-annotation .gd-annotation-wrapper .gd-point{background-color:#7cbc46;width:41px;height:41px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;-khtml-border-radius:50%;box-shadow:0 1px 1px 1px #bbb;-moz-box-shadow:0 1px 1px 1px #bbb;-webkit-box-shadow:0 1px 1px 1px #bbb}.gd-annotation .gd-text-annotation{background-color:rgba(151,151,240,.51)}.gd-annotation .gd-text-strikeout-annotation{align-items:center;-webkit-box-align:center}.gd-annotation .gd-text-underline-annotation{align-items:end;-webkit-box-align:end}.gd-annotation .gd-text-redaction-annotation{background-color:#000}.gd-annotation .gd-text-replacement-annotation{background-color:#fff}.svg{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%}.annotation-svg{position:absolute;cursor:pointer;z-index:2}"]
                    }] }
        ];
        /** @nocollapse */
        AnnotationComponent.ctorParameters = function () { return [
            { type: ActiveAnnotationService },
            { type: RemoveAnnotationService },
            { type: CommentAnnotationService }
        ]; };
        return AnnotationComponent;
    }());
    if (false) {
        /** @type {?} */
        AnnotationComponent.prototype.id;
        /** @type {?} */
        AnnotationComponent.prototype.position;
        /** @type {?} */
        AnnotationComponent.prototype.leftTop;
        /** @type {?} */
        AnnotationComponent.prototype.type;
        /** @type {?} */
        AnnotationComponent.prototype.pageWidth;
        /** @type {?} */
        AnnotationComponent.prototype.pageHeight;
        /** @type {?} */
        AnnotationComponent.prototype.active;
        /** @type {?} */
        AnnotationComponent.prototype.dimension;
        /** @type {?} */
        AnnotationComponent.prototype.pageNumber;
        /** @type {?} */
        AnnotationComponent.prototype.textValue;
        /** @type {?} */
        AnnotationComponent.prototype.pathValue;
        /** @type {?} */
        AnnotationComponent.prototype.distanceValue;
        /** @type {?} */
        AnnotationComponent.prototype.pointsValue;
        /** @type {?} */
        AnnotationComponent.prototype.svgPath;
        /** @type {?} */
        AnnotationComponent.prototype.formatting;
        /**
         * @type {?}
         * @private
         */
        AnnotationComponent.prototype.oldPosition;
        /**
         * @type {?}
         * @private
         */
        AnnotationComponent.prototype.points;
        /**
         * @type {?}
         * @private
         */
        AnnotationComponent.prototype.endPosition;
        /**
         * @type {?}
         * @private
         */
        AnnotationComponent.prototype._activeAnnotationService;
        /**
         * @type {?}
         * @private
         */
        AnnotationComponent.prototype._removeAnnotationService;
        /**
         * @type {?}
         * @private
         */
        AnnotationComponent.prototype._commentAnnotationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$1 = jquery;
    var AnnotationAppComponent = /** @class */ (function () {
        function AnnotationAppComponent(_annotationService, _modalService, _navigateService, _tabActivatorService, _hostingComponentsService, _addDynamicComponentService, _activeAnnotationService, _removeAnnotationService, _commentAnnotationService, uploadFilesService, pagePreloadService, passwordService, _windowService) {
            var _this = this;
            this._annotationService = _annotationService;
            this._modalService = _modalService;
            this._navigateService = _navigateService;
            this._tabActivatorService = _tabActivatorService;
            this._hostingComponentsService = _hostingComponentsService;
            this._addDynamicComponentService = _addDynamicComponentService;
            this._activeAnnotationService = _activeAnnotationService;
            this._removeAnnotationService = _removeAnnotationService;
            this._commentAnnotationService = _commentAnnotationService;
            this._windowService = _windowService;
            this.title = 'annotation';
            this.files = [];
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.formatDisabled = !this.file;
            this.annotationTypes = [
                AnnotationType.TEXT,
                AnnotationType.TEXT_STRIKEOUT,
                AnnotationType.TEXT_UNDERLINE,
                AnnotationType.TEXT_REPLACEMENT,
                AnnotationType.TEXT_REDACTION,
                AnnotationType.POLYLINE,
                AnnotationType.ARROW,
                AnnotationType.DISTANCE,
                AnnotationType.AREA,
                AnnotationType.TEXT_FIELD,
                AnnotationType.WATERMARK,
                AnnotationType.POINT,
            ];
            this.annotationTypeFirst = [
                AnnotationType.TEXT,
                AnnotationType.TEXT_UNDERLINE,
                AnnotationType.TEXT_REDACTION,
                AnnotationType.TEXT_REPLACEMENT,
                AnnotationType.TEXT_STRIKEOUT,
            ];
            this.annotationTypeSecond = [
                AnnotationType.POLYLINE,
                AnnotationType.ARROW,
                AnnotationType.DISTANCE,
                AnnotationType.AREA,
                AnnotationType.POINT
            ];
            this.annotationTypeThird = [
                AnnotationType.TEXT_FIELD,
                AnnotationType.WATERMARK,
            ];
            this.countPages = 0;
            this.comments = new Map();
            this.fileWasDropped = false;
            this.annotations = new Map();
            this._activeAnnotationService.activeChange.subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                if (_this.activeAnnotationId !== id) {
                    _this.commentOpenedId = null;
                    _this.activeAnnotationId = id;
                }
            }));
            this._commentAnnotationService.commentAnnotation.subscribe((/**
             * @param {?} commentAnnotation
             * @return {?}
             */
            function (commentAnnotation) {
                _this.commentOpenedId = commentAnnotation.id;
                if (!_this.comments.get(_this.commentOpenedId)) {
                    _this.comments.set(_this.commentOpenedId, []);
                }
            }));
            this._commentAnnotationService.addCommentObserve.subscribe((/**
             * @param {?} comment
             * @return {?}
             */
            function (comment) {
                _this.comments.get(_this.commentOpenedId).push(comment);
            }));
            this._removeAnnotationService.removeAnnotation.subscribe((/**
             * @param {?} removeAnnotation
             * @return {?}
             */
            function (removeAnnotation) {
                /** @type {?} */
                var componentRef = _this.annotations.get(removeAnnotation.id);
                if (componentRef) {
                    componentRef.destroy();
                }
                _this.annotations.delete(removeAnnotation.id);
                if (_this.commentOpenedId === removeAnnotation.id) {
                    _this.commentOpenedId = null;
                }
                _this.comments.delete(removeAnnotation.id);
            }));
            uploadFilesService.uploadsChange.subscribe((/**
             * @param {?} uploads
             * @return {?}
             */
            function (uploads) {
                if (uploads) {
                    /** @type {?} */
                    var i = void 0;
                    for (i = 0; i < uploads.length; i++) {
                        _this._annotationService.upload(uploads.item(i), '', _this.rewriteConfig).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                        }));
                    }
                }
            }));
            pagePreloadService.checkPreload.subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (_this.preloadPageCountConfig !== 0) {
                    for (var i = page; i < page + 2; i++) {
                        if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                            _this.preloadPages(i, i);
                        }
                    }
                }
            }));
            passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                _this.selectFile(_this.credentials.guid, pass, commonComponents.CommonModals.PasswordRequired);
            }));
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
            }));
        }
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.getComments = /**
         * @return {?}
         */
        function () {
            return this.comments.get(this.commentOpenedId);
        };
        Object.defineProperty(AnnotationAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "zoomConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.zoom : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "pageSelectorConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.pageSelector : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "preloadPageCountConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.preloadPageCount : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "downloadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.download : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "downloadOriginalConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.downloadOriginal : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "downloadAnnotatedConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.downloadAnnotated : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        AnnotationAppComponent.prototype.defaultDocumentConfig = /**
         * @private
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.defaultDocument : "";
        };
        Object.defineProperty(AnnotationAppComponent.prototype, "printConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.print : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "htmlModeConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "enableRightClickConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.enableRightClick : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "textAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.textAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "areaAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.areaAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "pointAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.pointAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "textStrikeoutAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.textStrikeoutAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "polylineAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.polylineAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "textFieldAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.textFieldAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "watermarkAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.watermarkAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "textReplacementAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.textReplacementAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "arrowAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.arrowAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "textRedactionAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.textRedactionAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "textUnderlineAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.textUnderlineAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotationAppComponent.prototype, "distanceAnnotationConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.annotationConfig ? this.annotationConfig.distanceAnnotation : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} id
         * @return {?}
         */
        AnnotationAppComponent.prototype.openModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.open(id);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        AnnotationAppComponent.prototype.closeModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.close(id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._annotationService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        AnnotationAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            var _this = this;
            this.credentials = new commonComponents.FileCredentials($event, password);
            this.file = null;
            this.commentOpenedId = null;
            this._annotationService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.cleanAnnotations();
                _this.file = file;
                _this.formatDisabled = !_this.file;
                if (file) {
                    /** @type {?} */
                    var preloadPageCount = _this.preloadPageCountConfig;
                    /** @type {?} */
                    var countPages = file.pages ? file.pages.length : 0;
                    if (preloadPageCount > 0) {
                        _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            var e_1, _a;
                            try {
                                for (var _b = __values(_this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var page = _c.value;
                                    _this.importAnnotations(page.annotations ? page.annotations : []);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }), 100);
                    }
                    _this._navigateService.countPages = countPages;
                    _this._navigateService.currentPage = 1;
                    _this.countPages = countPages;
                }
            }));
            if (modalId) {
                this._modalService.close(modalId);
            }
            this.clearData();
        };
        /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        AnnotationAppComponent.prototype.preloadPages = /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            var _this = this;
            var _loop_1 = function (i) {
                this_1._annotationService.loadPage(this_1.credentials, i).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    _this.file.pages[i - 1] = page;
                    _this.importAnnotations(page.annotations ? page.annotations : []);
                }));
            };
            var this_1 = this;
            for (var i = start; i <= end; i++) {
                _loop_1(i);
            }
        };
        /**
         * @private
         * @param {?} annotations
         * @return {?}
         */
        AnnotationAppComponent.prototype.importAnnotations = /**
         * @private
         * @param {?} annotations
         * @return {?}
         */
        function (annotations) {
            var e_2, _a;
            try {
                for (var annotations_1 = __values(annotations), annotations_1_1 = annotations_1.next(); !annotations_1_1.done; annotations_1_1 = annotations_1.next()) {
                    var annotation = annotations_1_1.value;
                    /** @type {?} */
                    var position = new Position(annotation.left, annotation.top);
                    /** @type {?} */
                    var id = this.addAnnotationComponent(annotation.pageNumber, position, annotation);
                    this.comments.set(id, annotation.comments);
                    this._activeAnnotationService.changeActive(id);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (annotations_1_1 && !annotations_1_1.done && (_a = annotations_1.return)) _a.call(annotations_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._annotationService.upload(null, $event, this.rewriteConfig).subscribe((/**
             * @return {?}
             */
            function () {
                _this.selectDir('');
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.onRightClick = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            return this.enableRightClickConfig;
        };
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.downloadFile = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            window.location.assign(this._annotationService.getDownloadUrl(this.credentials));
        };
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.annotate = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var annotationsData = this.prepareAnnotationsData();
            this._annotationService.annotate(this.credentials, annotationsData, false).subscribe((/**
             * @param {?} ret
             * @return {?}
             */
            function (ret) {
                _this._modalService.open(commonComponents.CommonModals.OperationSuccess);
                _this.selectFile(ret.guid, null, commonComponents.CommonModals.OperationSuccess);
            }));
        };
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.prepareAnnotationsData = /**
         * @return {?}
         */
        function () {
            var e_3, _a;
            /** @type {?} */
            var annotationsData = [];
            try {
                for (var _b = __values(this.annotations.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var annotation = _c.value;
                    /** @type {?} */
                    var annotationData = ((/** @type {?} */ (annotation.instance))).getAnnotationData();
                    annotationData.comments = this.comments.get(annotationData.id);
                    annotationsData.push(annotationData);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return annotationsData;
        };
        /**
         * @param {?} id
         * @return {?}
         */
        AnnotationAppComponent.prototype.isVisible = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var supported = !this.file || (this.file && this.file.supportedAnnotations &&
                this.file.supportedAnnotations.find((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    return id === value;
                })));
            return this.getAnnotationTypeConfig(id) && supported;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.activeTab = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.activeAnnotationTab = $event;
        };
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.codesConfigFirst = /**
         * @return {?}
         */
        function () {
            return this.checkConfig(this.annotationTypeFirst);
        };
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.codesConfigSecond = /**
         * @return {?}
         */
        function () {
            return this.checkConfig(this.annotationTypeSecond);
        };
        /**
         * @private
         * @param {?} annotationList
         * @return {?}
         */
        AnnotationAppComponent.prototype.checkConfig = /**
         * @private
         * @param {?} annotationList
         * @return {?}
         */
        function (annotationList) {
            var e_4, _a;
            try {
                for (var annotationList_1 = __values(annotationList), annotationList_1_1 = annotationList_1.next(); !annotationList_1_1.done; annotationList_1_1 = annotationList_1.next()) {
                    var annotationType = annotationList_1_1.value;
                    if (this.getAnnotationTypeConfig(annotationType.id)) {
                        return true;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (annotationList_1_1 && !annotationList_1_1.done && (_a = annotationList_1.return)) _a.call(annotationList_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return false;
        };
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.codesConfigThird = /**
         * @return {?}
         */
        function () {
            return this.getAnnotationTypeConfig(AnnotationType.TEXT_FIELD.id) && this.getAnnotationTypeConfig(AnnotationType.WATERMARK.id);
        };
        /**
         * @private
         * @param {?} id
         * @return {?}
         */
        AnnotationAppComponent.prototype.getAnnotationTypeConfig = /**
         * @private
         * @param {?} id
         * @return {?}
         */
        function (id) {
            switch (id) {
                case AnnotationType.TEXT.id:
                    return this.textAnnotationConfig;
                case AnnotationType.AREA.id:
                    return this.areaAnnotationConfig;
                case AnnotationType.POINT.id:
                    return this.pointAnnotationConfig;
                case AnnotationType.TEXT_STRIKEOUT.id:
                    return this.textStrikeoutAnnotationConfig;
                case AnnotationType.POLYLINE.id:
                    return this.polylineAnnotationConfig;
                case AnnotationType.TEXT_FIELD.id:
                    return this.textFieldAnnotationConfig;
                case AnnotationType.WATERMARK.id:
                    return this.watermarkAnnotationConfig;
                case AnnotationType.TEXT_REPLACEMENT.id:
                    return this.textReplacementAnnotationConfig;
                case AnnotationType.ARROW.id:
                    return this.arrowAnnotationConfig;
                case AnnotationType.TEXT_REDACTION.id:
                    return this.textRedactionAnnotationConfig;
                case AnnotationType.TEXT_UNDERLINE.id:
                    return this.textUnderlineAnnotationConfig;
                case AnnotationType.DISTANCE.id:
                    return this.distanceAnnotationConfig;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.fileWasDropped = $event;
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationAppComponent.prototype.cleanAnnotations = /**
         * @private
         * @return {?}
         */
        function () {
            var e_5, _a;
            try {
                for (var _b = __values(this.annotations.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var componentRef = _c.value;
                    componentRef.destroy();
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            this.annotations = new Map();
            this.comments = new Map();
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationAppComponent.prototype.clearData = /**
         * @private
         * @return {?}
         */
        function () {
            var e_6, _a;
            if (!this.file || !this.file.pages) {
                return;
            }
            try {
                for (var _b = __values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var page = _c.value;
                    page.data = null;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.createAnnotation = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.activeAnnotationTab) {
                $event.preventDefault();
            }
            if (this.activeAnnotationTab) {
                /** @type {?} */
                var position = commonComponents.Utils.getMousePosition($event);
                /** @type {?} */
                var elements = document.elementsFromPoint(position.x, position.y);
                /** @type {?} */
                var currentPage = elements.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.id && x.id.startsWith("page-"); }));
                if (currentPage) {
                    /** @type {?} */
                    var documentPage = $$1(currentPage).parent().parent()[0];
                    /** @type {?} */
                    var currentPosition = this.getCurrentPosition(position, $$1(documentPage));
                    /** @type {?} */
                    var pageId = currentPage.id;
                    /** @type {?} */
                    var pageNumber = 1;
                    if (pageId) {
                        /** @type {?} */
                        var split = pageId.split('-');
                        pageNumber = split.length === 2 ? parseInt(split[1], 10) : pageNumber;
                    }
                    /** @type {?} */
                    var id = this.addAnnotationComponent(pageNumber, currentPosition, null);
                    this._activeAnnotationService.changeActive(id);
                    this.creatingAnnotationId = id;
                    this._tabActivatorService.changeActiveTab(null);
                }
            }
        };
        /**
         * @private
         * @param {?} pageNumber
         * @param {?} currentPosition
         * @param {?} data
         * @return {?}
         */
        AnnotationAppComponent.prototype.addAnnotationComponent = /**
         * @private
         * @param {?} pageNumber
         * @param {?} currentPosition
         * @param {?} data
         * @return {?}
         */
        function (pageNumber, currentPosition, data) {
            /** @type {?} */
            var dynamicDirective = this._hostingComponentsService.find(pageNumber);
            if (dynamicDirective) {
                /** @type {?} */
                var viewContainerRef = dynamicDirective.viewContainerRef;
                /** @type {?} */
                var annotationComponent = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, AnnotationComponent);
                /** @type {?} */
                var id = this.getNextId();
                ((/** @type {?} */ (annotationComponent.instance))).id = id;
                ((/** @type {?} */ (annotationComponent.instance))).position = currentPosition;
                ((/** @type {?} */ (annotationComponent.instance))).pageNumber = pageNumber;
                if (data) {
                    /** @type {?} */
                    var dimension = new Dimension(data.width, data.height);
                    /** @type {?} */
                    var type = AnnotationType.getAnnotationType(data.type);
                    /** @type {?} */
                    var formatting = commonComponents.Formatting.default();
                    formatting.fontSize = data.fontSize;
                    if (data.fontColor) {
                        formatting.color = "#" + data.fontColor.toString(16);
                    }
                    formatting.font = data.font;
                    ((/** @type {?} */ (annotationComponent.instance))).type = type ? type.id : data.type;
                    ((/** @type {?} */ (annotationComponent.instance))).dimension = dimension;
                    ((/** @type {?} */ (annotationComponent.instance))).svgPath = data.svgPath;
                    ((/** @type {?} */ (annotationComponent.instance))).textValue = data.text;
                    if (formatting) {
                        ((/** @type {?} */ (annotationComponent.instance))).saveFormatting(formatting);
                    }
                }
                else {
                    ((/** @type {?} */ (annotationComponent.instance))).type = this.activeAnnotationTab;
                }
                /** @type {?} */
                var pageModel = this.file.pages.find((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) {
                    return p.number === pageNumber;
                }));
                ((/** @type {?} */ (annotationComponent.instance))).pageWidth = pageModel.width;
                ((/** @type {?} */ (annotationComponent.instance))).pageHeight = pageModel.height;
                this.annotations.set(id, annotationComponent);
                return id;
            }
            return null;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.resizingCreatingAnnotation = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.activeAnnotationTab) {
                $event.preventDefault();
            }
            if (this.creatingAnnotationId) {
                /** @type {?} */
                var position = commonComponents.Utils.getMousePosition($event);
                /** @type {?} */
                var annotationComponent = this.annotations.get(this.creatingAnnotationId);
                /** @type {?} */
                var type = ((/** @type {?} */ (annotationComponent.instance))).type;
                /** @type {?} */
                var pageNumber = ((/** @type {?} */ (annotationComponent.instance))).pageNumber;
                /** @type {?} */
                var currentPosition = this.getCurrentPosition(position, $$1("#page-" + pageNumber));
                if (type === AnnotationType.POLYLINE.id || type === AnnotationType.DISTANCE.id || type === AnnotationType.ARROW.id) {
                    ((/** @type {?} */ (annotationComponent.instance))).draw(currentPosition);
                }
                else if (type !== AnnotationType.POINT.id) {
                    ((/** @type {?} */ (annotationComponent.instance))).calcDimensions(currentPosition);
                }
            }
        };
        /**
         * @private
         * @param {?} position
         * @param {?} page
         * @return {?}
         */
        AnnotationAppComponent.prototype.getCurrentPosition = /**
         * @private
         * @param {?} position
         * @param {?} page
         * @return {?}
         */
        function (position, page) {
            /** @type {?} */
            var left = position.x - page.offset().left;
            /** @type {?} */
            var top = position.y - page.offset().top;
            return new Position(left, top);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AnnotationAppComponent.prototype.finishCreatingAnnotation = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.activeAnnotationTab) {
                $event.preventDefault();
            }
            if (this.creatingAnnotationId) {
                this._activeAnnotationService.changeActive(this.creatingAnnotationId);
                this.creatingAnnotationId = null;
            }
        };
        /**
         * @return {?}
         */
        AnnotationAppComponent.prototype.closeComments = /**
         * @return {?}
         */
        function () {
            this.commentOpenedId = null;
        };
        /**
         * @private
         * @return {?}
         */
        AnnotationAppComponent.prototype.getNextId = /**
         * @private
         * @return {?}
         */
        function () {
            var e_7, _a;
            /** @type {?} */
            var maxId = 0;
            try {
                for (var _b = __values(this.annotations.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var annId = _c.value;
                    if (annId > maxId) {
                        maxId = annId;
                    }
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
            /** @type {?} */
            var id = maxId + 1;
            return id;
        };
        AnnotationAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-annotation-app',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"annotation-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'annotation'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"annotate()\"></gd-button>\n\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Annotations'\" [icon]=\"'highlighter'\" [id]=\"'2'\"\n                *ngIf=\"isDesktop || (!isDesktop && codesConfigFirst())\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of (isDesktop ? annotationTypes : annotationTypeFirst)\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'vector-square'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfigSecond()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeSecond\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'i-cursor'\" [id]=\"'4'\" *ngIf=\"!isDesktop && codesConfigThird()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeThird\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <div class=\"doc-panel\" *ngIf=\"file\" (mousedown)=\"createAnnotation($event)\"\n         (mousemove)=\"resizingCreatingAnnotation($event)\" (mouseup)=\"finishCreatingAnnotation($event)\"\n         (touchstart)=\"createAnnotation($event)\" (touchmove)=\"resizingCreatingAnnotation($event)\"\n         (touchend)=\"finishCreatingAnnotation($event)\"\n         (panstart)=\"createAnnotation($event)\" (panmove)=\"resizingCreatingAnnotation($event)\"\n         (panend)=\"finishCreatingAnnotation($event)\">\n      <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    </div>\n    <gd-comment-panel *ngIf=\"commentOpenedId\" [annotationId]=\"commentOpenedId\"\n                      [comments]=\"getComments()\" (closeComments)=\"closeComments()\">\n    </gd-comment-panel>\n\n    <gd-init-state [icon]=\"'highlighter'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs xmlns=\"http://www.w3.org/2000/svg\">\n      <marker id=\"end\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"10\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M0,7 L0,13 L12,10 z' fill='#579AF0'></path>\n      </marker>\n      <marker id=\"start\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"0\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M12,7 L12,13 L0,10 z' fill='#579AF0'></path>\n      </marker>\n    </defs>\n  </svg>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.annotation-wrapper ::ng-deep .button{color:#3e4e5a!important}.annotation-wrapper ::ng-deep .button .text{padding:0!important}.annotation-wrapper ::ng-deep .select{color:#3e4e5a!important}@media (max-width:1037px){::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        AnnotationAppComponent.ctorParameters = function () { return [
            { type: AnnotationService },
            { type: commonComponents.ModalService },
            { type: commonComponents.NavigateService },
            { type: commonComponents.TopTabActivatorService },
            { type: commonComponents.HostingDynamicComponentService },
            { type: commonComponents.AddDynamicComponentService },
            { type: ActiveAnnotationService },
            { type: RemoveAnnotationService },
            { type: CommentAnnotationService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.PagePreloadService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService }
        ]; };
        return AnnotationAppComponent;
    }());
    if (false) {
        /** @type {?} */
        AnnotationAppComponent.prototype.title;
        /** @type {?} */
        AnnotationAppComponent.prototype.files;
        /** @type {?} */
        AnnotationAppComponent.prototype.file;
        /** @type {?} */
        AnnotationAppComponent.prototype.isLoading;
        /** @type {?} */
        AnnotationAppComponent.prototype.annotationConfig;
        /** @type {?} */
        AnnotationAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        AnnotationAppComponent.prototype.formatDisabled;
        /** @type {?} */
        AnnotationAppComponent.prototype.credentials;
        /** @type {?} */
        AnnotationAppComponent.prototype.annotationTypes;
        /** @type {?} */
        AnnotationAppComponent.prototype.isDesktop;
        /** @type {?} */
        AnnotationAppComponent.prototype.annotationTypeFirst;
        /** @type {?} */
        AnnotationAppComponent.prototype.annotationTypeSecond;
        /** @type {?} */
        AnnotationAppComponent.prototype.annotationTypeThird;
        /** @type {?} */
        AnnotationAppComponent.prototype.countPages;
        /** @type {?} */
        AnnotationAppComponent.prototype.commentOpenedId;
        /** @type {?} */
        AnnotationAppComponent.prototype.comments;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype.activeAnnotationTab;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype.fileWasDropped;
        /** @type {?} */
        AnnotationAppComponent.prototype.annotations;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype.creatingAnnotationId;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype.activeAnnotationId;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._annotationService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._navigateService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._tabActivatorService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._hostingComponentsService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._addDynamicComponentService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._activeAnnotationService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._removeAnnotationService;
        /** @type {?} */
        AnnotationAppComponent.prototype._commentAnnotationService;
        /**
         * @type {?}
         * @private
         */
        AnnotationAppComponent.prototype._windowService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommentPanelComponent = /** @class */ (function () {
        function CommentPanelComponent(_commentAnnotationService) {
            this._commentAnnotationService = _commentAnnotationService;
            this.closeComments = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        CommentPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        CommentPanelComponent.prototype.closePanel = /**
         * @return {?}
         */
        function () {
            this.closeComments.emit(true);
        };
        /**
         * @return {?}
         */
        CommentPanelComponent.prototype.newComment = /**
         * @return {?}
         */
        function () {
            this.currentComment = new Comment(this.annotationId);
        };
        /**
         * @return {?}
         */
        CommentPanelComponent.prototype.clearComment = /**
         * @return {?}
         */
        function () {
            this.currentComment = null;
        };
        /**
         * @return {?}
         */
        CommentPanelComponent.prototype.addComment = /**
         * @return {?}
         */
        function () {
            this._commentAnnotationService.addComment(Comment.create(this.currentComment));
            this.currentComment = null;
        };
        CommentPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-comment-panel',
                        template: "<div class=\"gd-comments-panel\">\n  <div class=\"gd-comments-head\">\n    <fa-icon [icon]=\"['fas', 'plus']\" [class]=\"'ng-fa-icon icon'\" (click)=\"newComment()\"></fa-icon>\n    <span class=\"gd-comments-title\">Comments</span>\n    <fa-icon [icon]=\"['fas', 'times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closePanel()\"></fa-icon>\n  </div>\n  <div class=\"gd-comments-body\">\n    <div *ngIf=\"comments.length != 0\">\n      <div *ngFor=\"let comment of comments\">\n        <gd-comment [comment]=\"comment\"></gd-comment>\n      </div>\n    </div>\n    <gd-create-comment *ngIf=\"currentComment\" [comment]=\"currentComment\" (addComment)=\"addComment()\"\n                       (removeComment)=\"clearComment()\"></gd-create-comment>\n    <div class=\"gd-empty-comments-list\" *ngIf=\"comments.length == 0 && !currentComment\">\n      <fa-icon [icon]=\"['fas','comments']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n      <span class=\"gd-empty-text\">No comments yet. Be the first one, <br/>\n        </span>\n      <span class=\"gd-empty-text gd-empty-bold-text\">add comment.</span>\n    </div>\n  </div>\n</div>\n",
                        styles: [".gd-comments-panel{position:absolute;right:0;top:30px;overflow:auto!important;width:334px;display:-webkit-box;display:flex;height:100%;z-index:9;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-comments-panel .gd-comments-head{height:60px;width:334px;display:-webkit-box;display:flex;background-color:#222e35;color:#959da5;-webkit-box-align:center;align-items:center}.gd-comments-panel .gd-comments-head .icon{-webkit-box-flex:0;flex:0 0 40px;margin-left:20px;cursor:pointer}.gd-comments-panel .gd-comments-head .gd-comments-title{-webkit-box-flex:1;flex:1;font-size:13px;font-weight:700}.gd-comments-panel .gd-comments-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-color:#f4f4f4;height:calc(100% - 90px)}.gd-comments-panel .gd-comments-body .gd-empty-comments-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5;width:250px;height:250px;margin-top:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .icon{font-size:65px;margin-bottom:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-text{font-size:15px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-bold-text{font-weight:700}"]
                    }] }
        ];
        /** @nocollapse */
        CommentPanelComponent.ctorParameters = function () { return [
            { type: CommentAnnotationService }
        ]; };
        CommentPanelComponent.propDecorators = {
            comments: [{ type: core.Input }],
            annotationId: [{ type: core.Input }],
            closeComments: [{ type: core.Output }]
        };
        return CommentPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        CommentPanelComponent.prototype.comments;
        /** @type {?} */
        CommentPanelComponent.prototype.annotationId;
        /** @type {?} */
        CommentPanelComponent.prototype.closeComments;
        /** @type {?} */
        CommentPanelComponent.prototype.currentComment;
        /**
         * @type {?}
         * @private
         */
        CommentPanelComponent.prototype._commentAnnotationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommentComponent = /** @class */ (function () {
        function CommentComponent() {
        }
        /**
         * @return {?}
         */
        CommentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        CommentComponent.prototype.getTime = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var time = Date.now() - this.comment.time;
            /** @type {?} */
            var hours = Math.round(time / (60 * 60 * 1000));
            if (hours > 1) {
                return 'about ' + hours + ' hours ago';
            }
            /** @type {?} */
            var min = Math.round(time / (60 * 1000));
            if (min > 1) {
                return 'about ' + min + ' minutes ago';
            }
            /** @type {?} */
            var sec = Math.round(time / 1000);
            if (sec > 1) {
                return 'about ' + sec + ' seconds ago';
            }
            return this.comment.time;
        };
        CommentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-comment',
                        template: "<div class=\"gd-comment\">\n  <div class=\"gd-comment-head\">\n    <fa-icon [icon]=\"['fas', 'user-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-name\">{{comment.userName}}</span>\n  </div>\n  <span class=\"gd-message\">{{comment.text}}</span>\n  <span class=\"gd-time\">{{getTime()}}</span>\n</div>\n",
                        styles: [".gd-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:294px;font-size:13px;color:#3e4e5a;padding-top:20px}.gd-comment .gd-comment-head{display:-webkit-box;display:flex}.gd-comment .gd-comment-head .icon{-webkit-box-flex:0;flex:0 0 30px}.gd-comment .gd-comment-head .gd-name{font-weight:700}.gd-comment .gd-message{padding-top:5px}.gd-comment .gd-time{color:#acacac;padding-top:5px}"]
                    }] }
        ];
        /** @nocollapse */
        CommentComponent.ctorParameters = function () { return []; };
        CommentComponent.propDecorators = {
            comment: [{ type: core.Input }]
        };
        return CommentComponent;
    }());
    if (false) {
        /** @type {?} */
        CommentComponent.prototype.comment;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$2 = jquery;
    var CreateCommentComponent = /** @class */ (function () {
        function CreateCommentComponent() {
            this.addComment = new core.EventEmitter();
            this.removeComment = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        CreateCommentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = $$2("#name");
                if (element) {
                    element.focus();
                }
            }), 100);
        };
        /**
         * @return {?}
         */
        CreateCommentComponent.prototype.onAddComment = /**
         * @return {?}
         */
        function () {
            this.addComment.emit(this.comment);
        };
        /**
         * @return {?}
         */
        CreateCommentComponent.prototype.clearComment = /**
         * @return {?}
         */
        function () {
            this.removeComment.emit(true);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CreateCommentComponent.prototype.saveText = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.comment.text = value;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CreateCommentComponent.prototype.saveName = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.comment.userName = value;
        };
        CreateCommentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-create-comment',
                        template: "<div class=\"gd-new-comment\">\n  <input type=\"text\" class=\"gd-name\" id=\"name\" [value]=\"comment.userName\" #name autofocus (keyup)=\"saveName(name.value)\" placeholder=\"Name\"/>\n  <textarea class=\"gd-text\" [value]=\"comment.text\" #text (keyup)=\"saveText(text.value)\" placeholder=\"Message\"></textarea>\n  <div class=\"gd-buttons\">\n    <gd-button (click)=\"clearComment()\" [iconOnly]=\"false\" class=\"gd-cancel-comment\">\n      Cancel\n    </gd-button>\n    <gd-button (click)=\"onAddComment()\" [icon]=\"'share'\" class=\"gd-add-comment\" [iconOnly]=\"false\">\n      Reply\n    </gd-button>\n  </div>\n</div>\n",
                        styles: [".gd-new-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-top:20px;width:294px;font-size:14px}.gd-new-comment .gd-buttons{display:-webkit-box;display:flex;margin-top:20px;width:294px;-webkit-box-pack:end;justify-content:flex-end}.gd-new-comment .gd-buttons .gd-add-comment{background-color:#4b566c!important;margin-left:10px;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button{color:#fff!important}.gd-new-comment .gd-buttons .gd-cancel-comment{background-color:transparent;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-cancel-comment ::ng-deep .button{color:#acacac!important}.gd-new-comment .gd-name{width:100%;height:37px;border:1px solid #6e6e6e}.gd-new-comment .gd-text{width:100%;height:100px;border:1px solid #6e6e6e;margin-top:20px}"]
                    }] }
        ];
        /** @nocollapse */
        CreateCommentComponent.ctorParameters = function () { return []; };
        CreateCommentComponent.propDecorators = {
            comment: [{ type: core.Input }],
            addComment: [{ type: core.Output }],
            removeComment: [{ type: core.Output }]
        };
        return CreateCommentComponent;
    }());
    if (false) {
        /** @type {?} */
        CreateCommentComponent.prototype.comment;
        /** @type {?} */
        CreateCommentComponent.prototype.addComment;
        /** @type {?} */
        CreateCommentComponent.prototype.removeComment;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} annotationConfigService
     * @return {?}
     */
    function initializeApp(annotationConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return annotationConfigService.load(); });
        return result;
    }
    // NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
    // @dynamic
    /**
     * @param {?} service
     * @return {?}
     */
    function setupLoadingInterceptor(service) {
        return new commonComponents.LoadingMaskInterceptorService(service);
    }
    var AnnotationModule = /** @class */ (function () {
        function AnnotationModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        AnnotationModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: AnnotationModule
            };
        };
        AnnotationModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent,
                        ],
                        exports: [commonComponents.CommonComponentsModule, AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent],
                        imports: [common.CommonModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule,
                            ngClickOutside.ClickOutsideModule],
                        providers: [
                            commonComponents.ConfigService,
                            AnnotationConfigService,
                            ActiveAnnotationService,
                            RemoveAnnotationService,
                            CommentAnnotationService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [AnnotationConfigService], multi: true
                            },
                            commonComponents.LoadingMaskService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useFactory: setupLoadingInterceptor,
                                multi: true,
                                deps: [commonComponents.LoadingMaskService]
                            }
                        ],
                        entryComponents: [AnnotationComponent],
                    },] }
        ];
        /** @nocollapse */
        AnnotationModule.ctorParameters = function () { return []; };
        return AnnotationModule;
    }());

    exports.ActiveAnnotationService = ActiveAnnotationService;
    exports.AnnotationAppComponent = AnnotationAppComponent;
    exports.AnnotationConfigService = AnnotationConfigService;
    exports.AnnotationModule = AnnotationModule;
    exports.AnnotationService = AnnotationService;
    exports.CommentAnnotationService = CommentAnnotationService;
    exports.RemoveAnnotationService = RemoveAnnotationService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = AnnotationComponent;
    exports.ɵb = CommentPanelComponent;
    exports.ɵc = CommentComponent;
    exports.ɵd = CreateCommentComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-annotation.umd.js.map
