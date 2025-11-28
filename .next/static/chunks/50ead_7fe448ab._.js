(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSDKVersion = void 0;
const getSDKVersion = ()=>'9.1.0';
exports.getSDKVersion = getSDKVersion; //# sourceMappingURL=version.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateRequestId = void 0;
// i.e. 0-255 -> '00'-'ff'
const dec2hex = (dec)=>dec.toString(16).padStart(2, '0');
const generateId = (len)=>{
    const arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
};
const generateRequestId = ()=>{
    if (typeof window !== 'undefined') {
        return generateId(10);
    }
    return new Date().getTime().toString(36);
};
exports.generateRequestId = generateRequestId; //# sourceMappingURL=utils.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/messageFormatter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageFormatter = void 0;
const version_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/version.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/utils.js [app-client] (ecmascript)");
class MessageFormatter {
}
exports.MessageFormatter = MessageFormatter;
MessageFormatter.makeRequest = (method, params)=>{
    const id = (0, utils_js_1.generateRequestId)();
    return {
        id,
        method,
        params,
        env: {
            sdkVersion: (0, version_js_1.getSDKVersion)()
        }
    };
};
MessageFormatter.makeResponse = (id, data, version)=>({
        id,
        success: true,
        version,
        data
    });
MessageFormatter.makeErrorResponse = (id, error, version)=>({
        id,
        success: false,
        error,
        version
    }); //# sourceMappingURL=messageFormatter.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RestrictedMethods = exports.Methods = void 0;
var Methods;
(function(Methods) {
    Methods["sendTransactions"] = "sendTransactions";
    Methods["rpcCall"] = "rpcCall";
    Methods["getChainInfo"] = "getChainInfo";
    Methods["getSafeInfo"] = "getSafeInfo";
    Methods["getTxBySafeTxHash"] = "getTxBySafeTxHash";
    Methods["getSafeBalances"] = "getSafeBalances";
    Methods["signMessage"] = "signMessage";
    Methods["signTypedMessage"] = "signTypedMessage";
    Methods["getEnvironmentInfo"] = "getEnvironmentInfo";
    Methods["getOffChainSignature"] = "getOffChainSignature";
    Methods["requestAddressBook"] = "requestAddressBook";
    Methods["wallet_getPermissions"] = "wallet_getPermissions";
    Methods["wallet_requestPermissions"] = "wallet_requestPermissions";
})(Methods || (exports.Methods = Methods = {}));
var RestrictedMethods;
(function(RestrictedMethods) {
    RestrictedMethods["requestAddressBook"] = "requestAddressBook";
})(RestrictedMethods || (exports.RestrictedMethods = RestrictedMethods = {})); //# sourceMappingURL=methods.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const messageFormatter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/messageFormatter.js [app-client] (ecmascript)");
class PostMessageCommunicator {
    constructor(allowedOrigins = null, debugMode = false){
        this.allowedOrigins = null;
        this.callbacks = new Map();
        this.debugMode = false;
        this.isServer = typeof window === 'undefined';
        this.isValidMessage = (param)=>{
            let { origin, data, source } = param;
            const emptyOrMalformed = !data;
            const sentFromParentEl = !this.isServer && source === window.parent;
            const majorVersionNumber = typeof data.version !== 'undefined' && parseInt(data.version.split('.')[0]);
            const allowedSDKVersion = typeof majorVersionNumber === 'number' && majorVersionNumber >= 1;
            let validOrigin = true;
            if (Array.isArray(this.allowedOrigins)) {
                validOrigin = this.allowedOrigins.find((regExp)=>regExp.test(origin)) !== undefined;
            }
            return !emptyOrMalformed && sentFromParentEl && allowedSDKVersion && validOrigin;
        };
        this.logIncomingMessage = (msg)=>{
            console.info("Safe Apps SDK v1: A message was received from origin ".concat(msg.origin, ". "), msg.data);
        };
        this.onParentMessage = (msg)=>{
            if (this.isValidMessage(msg)) {
                this.debugMode && this.logIncomingMessage(msg);
                this.handleIncomingMessage(msg.data);
            }
        };
        this.handleIncomingMessage = (payload)=>{
            const { id } = payload;
            const cb = this.callbacks.get(id);
            if (cb) {
                cb(payload);
                this.callbacks.delete(id);
            }
        };
        this.send = (method, params)=>{
            const request = messageFormatter_js_1.MessageFormatter.makeRequest(method, params);
            if (this.isServer) {
                throw new Error("Window doesn't exist");
            }
            window.parent.postMessage(request, '*');
            return new Promise((resolve, reject)=>{
                this.callbacks.set(request.id, (response)=>{
                    if (!response.success) {
                        reject(new Error(response.error));
                        return;
                    }
                    resolve(response);
                });
            });
        };
        this.allowedOrigins = allowedOrigins;
        this.debugMode = debugMode;
        if (!this.isServer) {
            window.addEventListener('message', this.onParentMessage);
        }
    }
}
exports.default = PostMessageCommunicator;
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/sdk.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObjectEIP712TypedData = void 0;
const isObjectEIP712TypedData = (obj)=>{
    return typeof obj === 'object' && obj != null && 'domain' in obj && 'types' in obj && 'message' in obj;
};
exports.isObjectEIP712TypedData = isObjectEIP712TypedData; //# sourceMappingURL=sdk.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/rpc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=rpc.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/gateway.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransferDirection = exports.TransactionStatus = exports.TokenType = exports.Operation = void 0;
var safe_gateway_typescript_sdk_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Operation", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.Operation;
    }
});
Object.defineProperty(exports, "TokenType", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.TokenType;
    }
});
Object.defineProperty(exports, "TransactionStatus", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.TransactionStatus;
    }
});
Object.defineProperty(exports, "TransferDirection", {
    enumerable: true,
    get: function() {
        return safe_gateway_typescript_sdk_1.TransferDirection;
    }
}); //# sourceMappingURL=gateway.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/messaging.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const methods_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)"); //# sourceMappingURL=messaging.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/sdk.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/rpc.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/gateway.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/messaging.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/txs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TXs = void 0;
const methods_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)");
class TXs {
    async getBySafeTxHash(safeTxHash) {
        if (!safeTxHash) {
            throw new Error('Invalid safeTxHash');
        }
        const response = await this.communicator.send(methods_js_1.Methods.getTxBySafeTxHash, {
            safeTxHash
        });
        return response.data;
    }
    async signMessage(message) {
        const messagePayload = {
            message
        };
        const response = await this.communicator.send(methods_js_1.Methods.signMessage, messagePayload);
        return response.data;
    }
    async signTypedMessage(typedData) {
        if (!(0, index_js_1.isObjectEIP712TypedData)(typedData)) {
            throw new Error('Invalid typed data');
        }
        const response = await this.communicator.send(methods_js_1.Methods.signTypedMessage, {
            typedData
        });
        return response.data;
    }
    async send(param) {
        let { txs, params } = param;
        if (!txs || !txs.length) {
            throw new Error('No transactions were passed');
        }
        const messagePayload = {
            txs,
            params
        };
        const response = await this.communicator.send(methods_js_1.Methods.sendTransactions, messagePayload);
        return response.data;
    }
    constructor(communicator){
        this.communicator = communicator;
    }
}
exports.TXs = TXs; //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPC_CALLS = void 0;
exports.RPC_CALLS = {
    eth_call: 'eth_call',
    eth_gasPrice: 'eth_gasPrice',
    eth_getLogs: 'eth_getLogs',
    eth_getBalance: 'eth_getBalance',
    eth_getCode: 'eth_getCode',
    eth_getBlockByHash: 'eth_getBlockByHash',
    eth_getBlockByNumber: 'eth_getBlockByNumber',
    eth_getStorageAt: 'eth_getStorageAt',
    eth_getTransactionByHash: 'eth_getTransactionByHash',
    eth_getTransactionReceipt: 'eth_getTransactionReceipt',
    eth_getTransactionCount: 'eth_getTransactionCount',
    eth_estimateGas: 'eth_estimateGas',
    safe_setSettings: 'safe_setSettings'
}; //# sourceMappingURL=constants.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Eth = void 0;
const constants_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)");
const methods_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const inputFormatters = {
    defaultBlockParam: function() {
        let arg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'latest';
        return arg;
    },
    returnFullTxObjectParam: function() {
        let arg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        return arg;
    },
    blockNumberToHex: (arg)=>Number.isInteger(arg) ? "0x".concat(arg.toString(16)) : arg
};
class Eth {
    buildRequest(args) {
        const { call, formatters } = args;
        return async (params)=>{
            if (formatters && Array.isArray(params)) {
                formatters.forEach((formatter, i)=>{
                    if (formatter) {
                        params[i] = formatter(params[i]);
                    }
                });
            }
            const payload = {
                call,
                params: params || []
            };
            const response = await this.communicator.send(methods_js_1.Methods.rpcCall, payload);
            return response.data;
        };
    }
    constructor(communicator){
        this.communicator = communicator;
        this.call = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_call,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getBalance = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getBalance,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getCode = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getCode,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getStorageAt = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getStorageAt,
            formatters: [
                null,
                inputFormatters.blockNumberToHex,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getPastLogs = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getLogs
        });
        this.getBlockByHash = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getBlockByHash,
            formatters: [
                null,
                inputFormatters.returnFullTxObjectParam
            ]
        });
        this.getBlockByNumber = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getBlockByNumber,
            formatters: [
                inputFormatters.blockNumberToHex,
                inputFormatters.returnFullTxObjectParam
            ]
        });
        this.getTransactionByHash = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getTransactionByHash
        });
        this.getTransactionReceipt = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getTransactionReceipt
        });
        this.getTransactionCount = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_getTransactionCount,
            formatters: [
                null,
                inputFormatters.defaultBlockParam
            ]
        });
        this.getGasPrice = this.buildRequest({
            call: constants_js_1.RPC_CALLS.eth_gasPrice
        });
        this.getEstimateGas = (transaction)=>this.buildRequest({
                call: constants_js_1.RPC_CALLS.eth_estimateGas
            })([
                transaction
            ]);
        this.setSafeSettings = this.buildRequest({
            call: constants_js_1.RPC_CALLS.safe_setSettings
        });
    }
}
exports.Eth = Eth; //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/signatures.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MAGIC_VALUE_BYTES = exports.MAGIC_VALUE = void 0;
const MAGIC_VALUE = '0x1626ba7e';
exports.MAGIC_VALUE = MAGIC_VALUE;
const MAGIC_VALUE_BYTES = '0x20c13b0b';
exports.MAGIC_VALUE_BYTES = MAGIC_VALUE_BYTES; //# sourceMappingURL=signatures.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/permissions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PermissionsError = exports.PERMISSIONS_REQUEST_REJECTED = void 0;
exports.PERMISSIONS_REQUEST_REJECTED = 4001;
class PermissionsError extends Error {
    constructor(message, code, data){
        super(message);
        this.code = code;
        this.data = data;
        // Should adjust prototype manually because how TS handles the type extension compilation
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, PermissionsError.prototype);
    }
}
exports.PermissionsError = PermissionsError; //# sourceMappingURL=permissions.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/wallet/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wallet = void 0;
const methods_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const permissions_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/permissions.js [app-client] (ecmascript)");
class Wallet {
    async getPermissions() {
        const response = await this.communicator.send(methods_js_1.Methods.wallet_getPermissions, undefined);
        return response.data;
    }
    async requestPermissions(permissions) {
        if (!this.isPermissionRequestValid(permissions)) {
            throw new permissions_js_1.PermissionsError('Permissions request is invalid', permissions_js_1.PERMISSIONS_REQUEST_REJECTED);
        }
        try {
            const response = await this.communicator.send(methods_js_1.Methods.wallet_requestPermissions, permissions);
            return response.data;
        } catch (e) {
            throw new permissions_js_1.PermissionsError('Permissions rejected', permissions_js_1.PERMISSIONS_REQUEST_REJECTED);
        }
    }
    isPermissionRequestValid(permissions) {
        return permissions.every((pr)=>{
            if (typeof pr === 'object') {
                return Object.keys(pr).every((method)=>{
                    if (Object.values(methods_js_1.RestrictedMethods).includes(method)) {
                        return true;
                    }
                    return false;
                });
            }
            return false;
        });
    }
    constructor(communicator){
        this.communicator = communicator;
    }
}
exports.Wallet = Wallet; //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/decorators/requirePermissions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const index_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/wallet/index.js [app-client] (ecmascript)");
const permissions_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/permissions.js [app-client] (ecmascript)");
const hasPermission = (required, permissions)=>permissions.some((permission)=>permission.parentCapability === required);
const requirePermission = ()=>(_, propertyKey, descriptor)=>{
        const originalMethod = descriptor.value;
        descriptor.value = async function() {
            // @ts-expect-error accessing private property from decorator. 'this' context is the class instance
            const wallet = new index_js_1.Wallet(this.communicator);
            let currentPermissions = await wallet.getPermissions();
            if (!hasPermission(propertyKey, currentPermissions)) {
                currentPermissions = await wallet.requestPermissions([
                    {
                        [propertyKey]: {}
                    }
                ]);
            }
            if (!hasPermission(propertyKey, currentPermissions)) {
                throw new permissions_js_1.PermissionsError('Permissions rejected', permissions_js_1.PERMISSIONS_REQUEST_REJECTED);
            }
            return originalMethod.apply(this);
        };
        return descriptor;
    };
exports.default = requirePermission; //# sourceMappingURL=requirePermissions.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __decorate = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Safe = void 0;
const viem_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/viem/_cjs/index.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/signatures.js [app-client] (ecmascript)");
const methods_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)");
const constants_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)");
const requirePermissions_js_1 = __importDefault(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/decorators/requirePermissions.js [app-client] (ecmascript)"));
class Safe {
    async getChainInfo() {
        const response = await this.communicator.send(methods_js_1.Methods.getChainInfo, undefined);
        return response.data;
    }
    async getInfo() {
        const response = await this.communicator.send(methods_js_1.Methods.getSafeInfo, undefined);
        return response.data;
    }
    // There is a possibility that this method will change because we may add pagination to the endpoint
    async experimental_getBalances() {
        let { currency = 'usd' } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const response = await this.communicator.send(methods_js_1.Methods.getSafeBalances, {
            currency
        });
        return response.data;
    }
    async check1271Signature(messageHash) {
        let signature = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '0x';
        const safeInfo = await this.getInfo();
        const encodedIsValidSignatureCall = (0, viem_1.encodeFunctionData)({
            abi: [
                {
                    constant: false,
                    inputs: [
                        {
                            name: '_dataHash',
                            type: 'bytes32'
                        },
                        {
                            name: '_signature',
                            type: 'bytes'
                        }
                    ],
                    name: 'isValidSignature',
                    outputs: [
                        {
                            name: '',
                            type: 'bytes4'
                        }
                    ],
                    payable: false,
                    stateMutability: 'nonpayable',
                    type: 'function'
                }
            ],
            functionName: 'isValidSignature',
            args: [
                messageHash,
                signature
            ]
        });
        const payload = {
            call: constants_js_1.RPC_CALLS.eth_call,
            params: [
                {
                    to: safeInfo.safeAddress,
                    data: encodedIsValidSignatureCall
                },
                'latest'
            ]
        };
        try {
            const response = await this.communicator.send(methods_js_1.Methods.rpcCall, payload);
            return response.data.slice(0, 10).toLowerCase() === signatures_js_1.MAGIC_VALUE;
        } catch (err) {
            return false;
        }
    }
    async check1271SignatureBytes(messageHash) {
        let signature = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '0x';
        const safeInfo = await this.getInfo();
        const encodedIsValidSignatureCall = (0, viem_1.encodeFunctionData)({
            abi: [
                {
                    constant: false,
                    inputs: [
                        {
                            name: '_data',
                            type: 'bytes'
                        },
                        {
                            name: '_signature',
                            type: 'bytes'
                        }
                    ],
                    name: 'isValidSignature',
                    outputs: [
                        {
                            name: '',
                            type: 'bytes4'
                        }
                    ],
                    payable: false,
                    stateMutability: 'nonpayable',
                    type: 'function'
                }
            ],
            functionName: 'isValidSignature',
            args: [
                messageHash,
                signature
            ]
        });
        const payload = {
            call: constants_js_1.RPC_CALLS.eth_call,
            params: [
                {
                    to: safeInfo.safeAddress,
                    data: encodedIsValidSignatureCall
                },
                'latest'
            ]
        };
        try {
            const response = await this.communicator.send(methods_js_1.Methods.rpcCall, payload);
            return response.data.slice(0, 10).toLowerCase() === signatures_js_1.MAGIC_VALUE_BYTES;
        } catch (err) {
            return false;
        }
    }
    calculateMessageHash(message) {
        return (0, viem_1.hashMessage)(message);
    }
    calculateTypedMessageHash(typedMessage) {
        const chainId = typeof typedMessage.domain.chainId === 'object' ? typedMessage.domain.chainId.toNumber() : Number(typedMessage.domain.chainId);
        let primaryType = typedMessage.primaryType;
        if (!primaryType) {
            const fields = Object.values(typedMessage.types);
            // We try to infer primaryType (simplified ether's version)
            const primaryTypes = Object.keys(typedMessage.types).filter((typeName)=>fields.every((dataTypes)=>dataTypes.every((param)=>{
                        let { type } = param;
                        return type.replace('[', '').replace(']', '') !== typeName;
                    })));
            if (primaryTypes.length === 0 || primaryTypes.length > 1) throw new Error('Please specify primaryType');
            primaryType = primaryTypes[0];
        }
        return (0, viem_1.hashTypedData)({
            message: typedMessage.message,
            domain: {
                ...typedMessage.domain,
                chainId,
                verifyingContract: typedMessage.domain.verifyingContract,
                salt: typedMessage.domain.salt
            },
            types: typedMessage.types,
            primaryType
        });
    }
    async getOffChainSignature(messageHash) {
        const response = await this.communicator.send(methods_js_1.Methods.getOffChainSignature, messageHash);
        return response.data;
    }
    async isMessageSigned(message) {
        let signature = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '0x';
        let check;
        if (typeof message === 'string') {
            check = async ()=>{
                const messageHash = this.calculateMessageHash(message);
                const messageHashSigned = await this.isMessageHashSigned(messageHash, signature);
                return messageHashSigned;
            };
        }
        if ((0, index_js_1.isObjectEIP712TypedData)(message)) {
            check = async ()=>{
                const messageHash = this.calculateTypedMessageHash(message);
                const messageHashSigned = await this.isMessageHashSigned(messageHash, signature);
                return messageHashSigned;
            };
        }
        if (check) {
            const isValid = await check();
            return isValid;
        }
        throw new Error('Invalid message type');
    }
    async isMessageHashSigned(messageHash) {
        let signature = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '0x';
        const checks = [
            this.check1271Signature.bind(this),
            this.check1271SignatureBytes.bind(this)
        ];
        for (const check of checks){
            const isValid = await check(messageHash, signature);
            if (isValid) {
                return true;
            }
        }
        return false;
    }
    async getEnvironmentInfo() {
        const response = await this.communicator.send(methods_js_1.Methods.getEnvironmentInfo, undefined);
        return response.data;
    }
    async requestAddressBook() {
        const response = await this.communicator.send(methods_js_1.Methods.requestAddressBook, undefined);
        return response.data;
    }
    constructor(communicator){
        this.communicator = communicator;
    }
}
exports.Safe = Safe;
__decorate([
    (0, requirePermissions_js_1.default)()
], Safe.prototype, "requestAddressBook", null); //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/sdk.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const index_js_1 = __importDefault(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/index.js [app-client] (ecmascript)"));
const index_js_2 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/txs/index.js [app-client] (ecmascript)");
const index_js_3 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/index.js [app-client] (ecmascript)");
const index_js_4 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/safe/index.js [app-client] (ecmascript)");
const index_js_5 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/wallet/index.js [app-client] (ecmascript)");
class SafeAppsSDK {
    constructor(opts = {}){
        const { allowedDomains = null, debug = false } = opts;
        this.communicator = new index_js_1.default(allowedDomains, debug);
        this.eth = new index_js_3.Eth(this.communicator);
        this.txs = new index_js_2.TXs(this.communicator);
        this.safe = new index_js_4.Safe(this.communicator);
        this.wallet = new index_js_5.Wallet(this.communicator);
    }
}
exports.default = SafeAppsSDK; //# sourceMappingURL=sdk.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSDKVersion = void 0;
const sdk_js_1 = __importDefault(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/sdk.js [app-client] (ecmascript)"));
exports.default = sdk_js_1.default;
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/sdk.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/types/index.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/methods.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/communication/messageFormatter.js [app-client] (ecmascript)"), exports);
var version_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/version.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSDKVersion", {
    enumerable: true,
    get: function() {
        return version_js_1.getSDKVersion;
    }
});
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/eth/constants.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertParams = insertParams;
exports.stringifyQuery = stringifyQuery;
exports.fetchData = fetchData;
exports.getData = getData;
const isErrorResponse = (data)=>{
    const isObject = typeof data === 'object' && data !== null;
    return isObject && ('code' in data || 'statusCode' in data) && 'message' in data;
};
function replaceParam(str, key, value) {
    return str.replace(new RegExp("\\{".concat(key, "\\}"), 'g'), value);
}
function insertParams(template, params) {
    return params ? Object.keys(params).reduce((result, key)=>{
        return replaceParam(result, key, String(params[key]));
    }, template) : template;
}
function stringifyQuery(query) {
    if (!query) {
        return '';
    }
    const searchParams = new URLSearchParams();
    Object.keys(query).forEach((key)=>{
        if (query[key] != null) {
            searchParams.append(key, String(query[key]));
        }
    });
    const searchString = searchParams.toString();
    return searchString ? "?".concat(searchString) : '';
}
function parseResponse(resp) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a;
        let json;
        try {
            json = yield resp.json();
        } catch (_b) {
            json = {};
        }
        if (!resp.ok) {
            const errTxt = isErrorResponse(json) ? "CGW error - ".concat((_a = json.code) !== null && _a !== void 0 ? _a : json.statusCode, ": ").concat(json.message) : "CGW error - status ".concat(resp.statusText);
            throw new Error(errTxt);
        }
        return json;
    });
}
function fetchData(url, method, body, headers, credentials) {
    return __awaiter(this, void 0, void 0, function*() {
        const requestHeaders = Object.assign({
            'Content-Type': 'application/json'
        }, headers);
        const options = {
            method: method !== null && method !== void 0 ? method : 'POST',
            headers: requestHeaders
        };
        if (credentials) {
            options['credentials'] = credentials;
        }
        if (body != null) {
            options.body = typeof body === 'string' ? body : JSON.stringify(body);
        }
        const resp = yield fetch(url, options);
        return parseResponse(resp);
    });
}
function getData(url, headers, credentials) {
    return __awaiter(this, void 0, void 0, function*() {
        const options = {
            method: 'GET'
        };
        if (headers) {
            options['headers'] = Object.assign(Object.assign({}, headers), {
                'Content-Type': 'application/json'
            });
        }
        if (credentials) {
            options['credentials'] = credentials;
        }
        const resp = yield fetch(url, options);
        return parseResponse(resp);
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/endpoint.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postEndpoint = postEndpoint;
exports.putEndpoint = putEndpoint;
exports.deleteEndpoint = deleteEndpoint;
exports.getEndpoint = getEndpoint;
const utils_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/utils.js [app-client] (ecmascript)");
function makeUrl(baseUrl, path, pathParams, query) {
    const pathname = (0, utils_1.insertParams)(path, pathParams);
    const search = (0, utils_1.stringifyQuery)(query);
    return "".concat(baseUrl).concat(pathname).concat(search);
}
function postEndpoint(baseUrl, path, params) {
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url, 'POST', params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
}
function putEndpoint(baseUrl, path, params) {
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url, 'PUT', params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
}
function deleteEndpoint(baseUrl, path, params) {
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url, 'DELETE', params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
}
function getEndpoint(baseUrl, path, params, rawUrl) {
    if (rawUrl) {
        return (0, utils_1.getData)(rawUrl, undefined, params === null || params === void 0 ? void 0 : params.credentials);
    }
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.getData)(url, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
} //# sourceMappingURL=endpoint.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_BASE_URL = void 0;
exports.DEFAULT_BASE_URL = 'https://safe-client.safe.global'; //# sourceMappingURL=config.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-info.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImplementationVersionState = void 0;
var ImplementationVersionState;
(function(ImplementationVersionState) {
    ImplementationVersionState["UP_TO_DATE"] = "UP_TO_DATE";
    ImplementationVersionState["OUTDATED"] = "OUTDATED";
    ImplementationVersionState["UNKNOWN"] = "UNKNOWN";
})(ImplementationVersionState || (exports.ImplementationVersionState = ImplementationVersionState = {})); //# sourceMappingURL=safe-info.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-apps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeAppSocialPlatforms = exports.SafeAppFeatures = exports.SafeAppAccessPolicyTypes = void 0;
var SafeAppAccessPolicyTypes;
(function(SafeAppAccessPolicyTypes) {
    SafeAppAccessPolicyTypes["NoRestrictions"] = "NO_RESTRICTIONS";
    SafeAppAccessPolicyTypes["DomainAllowlist"] = "DOMAIN_ALLOWLIST";
})(SafeAppAccessPolicyTypes || (exports.SafeAppAccessPolicyTypes = SafeAppAccessPolicyTypes = {}));
var SafeAppFeatures;
(function(SafeAppFeatures) {
    SafeAppFeatures["BATCHED_TRANSACTIONS"] = "BATCHED_TRANSACTIONS";
})(SafeAppFeatures || (exports.SafeAppFeatures = SafeAppFeatures = {}));
var SafeAppSocialPlatforms;
(function(SafeAppSocialPlatforms) {
    SafeAppSocialPlatforms["TWITTER"] = "TWITTER";
    SafeAppSocialPlatforms["GITHUB"] = "GITHUB";
    SafeAppSocialPlatforms["DISCORD"] = "DISCORD";
    SafeAppSocialPlatforms["TELEGRAM"] = "TELEGRAM";
})(SafeAppSocialPlatforms || (exports.SafeAppSocialPlatforms = SafeAppSocialPlatforms = {})); //# sourceMappingURL=safe-apps.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/transactions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabelValue = exports.StartTimeValue = exports.DurationType = exports.DetailedExecutionInfoType = exports.TransactionListItemType = exports.ConflictType = exports.TransactionInfoType = exports.SettingsInfoType = exports.TransactionTokenType = exports.TransferDirection = exports.TransactionStatus = exports.Operation = void 0;
var Operation;
(function(Operation) {
    Operation[Operation["CALL"] = 0] = "CALL";
    Operation[Operation["DELEGATE"] = 1] = "DELEGATE";
})(Operation || (exports.Operation = Operation = {}));
var TransactionStatus;
(function(TransactionStatus) {
    TransactionStatus["AWAITING_CONFIRMATIONS"] = "AWAITING_CONFIRMATIONS";
    TransactionStatus["AWAITING_EXECUTION"] = "AWAITING_EXECUTION";
    TransactionStatus["CANCELLED"] = "CANCELLED";
    TransactionStatus["FAILED"] = "FAILED";
    TransactionStatus["SUCCESS"] = "SUCCESS";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransferDirection;
(function(TransferDirection) {
    TransferDirection["INCOMING"] = "INCOMING";
    TransferDirection["OUTGOING"] = "OUTGOING";
    TransferDirection["UNKNOWN"] = "UNKNOWN";
})(TransferDirection || (exports.TransferDirection = TransferDirection = {}));
var TransactionTokenType;
(function(TransactionTokenType) {
    TransactionTokenType["ERC20"] = "ERC20";
    TransactionTokenType["ERC721"] = "ERC721";
    TransactionTokenType["NATIVE_COIN"] = "NATIVE_COIN";
})(TransactionTokenType || (exports.TransactionTokenType = TransactionTokenType = {}));
var SettingsInfoType;
(function(SettingsInfoType) {
    SettingsInfoType["SET_FALLBACK_HANDLER"] = "SET_FALLBACK_HANDLER";
    SettingsInfoType["ADD_OWNER"] = "ADD_OWNER";
    SettingsInfoType["REMOVE_OWNER"] = "REMOVE_OWNER";
    SettingsInfoType["SWAP_OWNER"] = "SWAP_OWNER";
    SettingsInfoType["CHANGE_THRESHOLD"] = "CHANGE_THRESHOLD";
    SettingsInfoType["CHANGE_IMPLEMENTATION"] = "CHANGE_IMPLEMENTATION";
    SettingsInfoType["ENABLE_MODULE"] = "ENABLE_MODULE";
    SettingsInfoType["DISABLE_MODULE"] = "DISABLE_MODULE";
    SettingsInfoType["SET_GUARD"] = "SET_GUARD";
    SettingsInfoType["DELETE_GUARD"] = "DELETE_GUARD";
})(SettingsInfoType || (exports.SettingsInfoType = SettingsInfoType = {}));
var TransactionInfoType;
(function(TransactionInfoType) {
    TransactionInfoType["TRANSFER"] = "Transfer";
    TransactionInfoType["SETTINGS_CHANGE"] = "SettingsChange";
    TransactionInfoType["CUSTOM"] = "Custom";
    TransactionInfoType["CREATION"] = "Creation";
    TransactionInfoType["SWAP_ORDER"] = "SwapOrder";
    TransactionInfoType["TWAP_ORDER"] = "TwapOrder";
    TransactionInfoType["SWAP_TRANSFER"] = "SwapTransfer";
    TransactionInfoType["NATIVE_STAKING_DEPOSIT"] = "NativeStakingDeposit";
    TransactionInfoType["NATIVE_STAKING_VALIDATORS_EXIT"] = "NativeStakingValidatorsExit";
    TransactionInfoType["NATIVE_STAKING_WITHDRAW"] = "NativeStakingWithdraw";
})(TransactionInfoType || (exports.TransactionInfoType = TransactionInfoType = {}));
var ConflictType;
(function(ConflictType) {
    ConflictType["NONE"] = "None";
    ConflictType["HAS_NEXT"] = "HasNext";
    ConflictType["END"] = "End";
})(ConflictType || (exports.ConflictType = ConflictType = {}));
var TransactionListItemType;
(function(TransactionListItemType) {
    TransactionListItemType["TRANSACTION"] = "TRANSACTION";
    TransactionListItemType["LABEL"] = "LABEL";
    TransactionListItemType["CONFLICT_HEADER"] = "CONFLICT_HEADER";
    TransactionListItemType["DATE_LABEL"] = "DATE_LABEL";
})(TransactionListItemType || (exports.TransactionListItemType = TransactionListItemType = {}));
var DetailedExecutionInfoType;
(function(DetailedExecutionInfoType) {
    DetailedExecutionInfoType["MULTISIG"] = "MULTISIG";
    DetailedExecutionInfoType["MODULE"] = "MODULE";
})(DetailedExecutionInfoType || (exports.DetailedExecutionInfoType = DetailedExecutionInfoType = {}));
var DurationType;
(function(DurationType) {
    DurationType["AUTO"] = "AUTO";
    DurationType["LIMIT_DURATION"] = "LIMIT_DURATION";
})(DurationType || (exports.DurationType = DurationType = {}));
var StartTimeValue;
(function(StartTimeValue) {
    StartTimeValue["AT_MINING_TIME"] = "AT_MINING_TIME";
    StartTimeValue["AT_EPOCH"] = "AT_EPOCH";
})(StartTimeValue || (exports.StartTimeValue = StartTimeValue = {}));
var LabelValue;
(function(LabelValue) {
    LabelValue["Queued"] = "Queued";
    LabelValue["Next"] = "Next";
})(LabelValue || (exports.LabelValue = LabelValue = {})); //# sourceMappingURL=transactions.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/chains.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FEATURES = exports.GAS_PRICE_TYPE = exports.RPC_AUTHENTICATION = void 0;
var RPC_AUTHENTICATION;
(function(RPC_AUTHENTICATION) {
    RPC_AUTHENTICATION["API_KEY_PATH"] = "API_KEY_PATH";
    RPC_AUTHENTICATION["NO_AUTHENTICATION"] = "NO_AUTHENTICATION";
    RPC_AUTHENTICATION["UNKNOWN"] = "UNKNOWN";
})(RPC_AUTHENTICATION || (exports.RPC_AUTHENTICATION = RPC_AUTHENTICATION = {}));
var GAS_PRICE_TYPE;
(function(GAS_PRICE_TYPE) {
    GAS_PRICE_TYPE["ORACLE"] = "ORACLE";
    GAS_PRICE_TYPE["FIXED"] = "FIXED";
    GAS_PRICE_TYPE["FIXED_1559"] = "FIXED1559";
    GAS_PRICE_TYPE["UNKNOWN"] = "UNKNOWN";
})(GAS_PRICE_TYPE || (exports.GAS_PRICE_TYPE = GAS_PRICE_TYPE = {}));
var FEATURES;
(function(FEATURES) {
    FEATURES["ERC721"] = "ERC721";
    FEATURES["SAFE_APPS"] = "SAFE_APPS";
    FEATURES["CONTRACT_INTERACTION"] = "CONTRACT_INTERACTION";
    FEATURES["DOMAIN_LOOKUP"] = "DOMAIN_LOOKUP";
    FEATURES["SPENDING_LIMIT"] = "SPENDING_LIMIT";
    FEATURES["EIP1559"] = "EIP1559";
    FEATURES["SAFE_TX_GAS_OPTIONAL"] = "SAFE_TX_GAS_OPTIONAL";
    FEATURES["TX_SIMULATION"] = "TX_SIMULATION";
    FEATURES["EIP1271"] = "EIP1271";
})(FEATURES || (exports.FEATURES = FEATURES = {})); //# sourceMappingURL=chains.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenType = void 0;
var TokenType;
(function(TokenType) {
    TokenType["ERC20"] = "ERC20";
    TokenType["ERC721"] = "ERC721";
    TokenType["NATIVE_TOKEN"] = "NATIVE_TOKEN";
    TokenType["UNKNOWN"] = "UNKNOWN";
})(TokenType || (exports.TokenType = TokenType = {})); //# sourceMappingURL=common.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/master-copies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=master-copies.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/decoded-data.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NativeStakingStatus = exports.ConfirmationViewTypes = void 0;
var ConfirmationViewTypes;
(function(ConfirmationViewTypes) {
    ConfirmationViewTypes["GENERIC"] = "GENERIC";
    ConfirmationViewTypes["COW_SWAP_ORDER"] = "COW_SWAP_ORDER";
    ConfirmationViewTypes["COW_SWAP_TWAP_ORDER"] = "COW_SWAP_TWAP_ORDER";
    ConfirmationViewTypes["KILN_NATIVE_STAKING_DEPOSIT"] = "KILN_NATIVE_STAKING_DEPOSIT";
    ConfirmationViewTypes["KILN_NATIVE_STAKING_VALIDATORS_EXIT"] = "KILN_NATIVE_STAKING_VALIDATORS_EXIT";
    ConfirmationViewTypes["KILN_NATIVE_STAKING_WITHDRAW"] = "KILN_NATIVE_STAKING_WITHDRAW";
})(ConfirmationViewTypes || (exports.ConfirmationViewTypes = ConfirmationViewTypes = {}));
var NativeStakingStatus;
(function(NativeStakingStatus) {
    NativeStakingStatus["NOT_STAKED"] = "NOT_STAKED";
    NativeStakingStatus["ACTIVATING"] = "ACTIVATING";
    NativeStakingStatus["DEPOSIT_IN_PROGRESS"] = "DEPOSIT_IN_PROGRESS";
    NativeStakingStatus["ACTIVE"] = "ACTIVE";
    NativeStakingStatus["EXIT_REQUESTED"] = "EXIT_REQUESTED";
    NativeStakingStatus["EXITING"] = "EXITING";
    NativeStakingStatus["EXITED"] = "EXITED";
    NativeStakingStatus["SLASHED"] = "SLASHED";
})(NativeStakingStatus || (exports.NativeStakingStatus = NativeStakingStatus = {})); //# sourceMappingURL=decoded-data.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-messages.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeMessageStatus = exports.SafeMessageListItemType = void 0;
var SafeMessageListItemType;
(function(SafeMessageListItemType) {
    SafeMessageListItemType["DATE_LABEL"] = "DATE_LABEL";
    SafeMessageListItemType["MESSAGE"] = "MESSAGE";
})(SafeMessageListItemType || (exports.SafeMessageListItemType = SafeMessageListItemType = {}));
var SafeMessageStatus;
(function(SafeMessageStatus) {
    SafeMessageStatus["NEEDS_CONFIRMATION"] = "NEEDS_CONFIRMATION";
    SafeMessageStatus["CONFIRMED"] = "CONFIRMED";
})(SafeMessageStatus || (exports.SafeMessageStatus = SafeMessageStatus = {})); //# sourceMappingURL=safe-messages.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/notifications.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeviceType = void 0;
var DeviceType;
(function(DeviceType) {
    DeviceType["ANDROID"] = "ANDROID";
    DeviceType["IOS"] = "IOS";
    DeviceType["WEB"] = "WEB";
})(DeviceType || (exports.DeviceType = DeviceType = {})); //# sourceMappingURL=notifications.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/relay.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=relay.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBaseUrl = void 0;
exports.relayTransaction = relayTransaction;
exports.getRelayCount = getRelayCount;
exports.getSafeInfo = getSafeInfo;
exports.getIncomingTransfers = getIncomingTransfers;
exports.getModuleTransactions = getModuleTransactions;
exports.getMultisigTransactions = getMultisigTransactions;
exports.getBalances = getBalances;
exports.getFiatCurrencies = getFiatCurrencies;
exports.getOwnedSafes = getOwnedSafes;
exports.getAllOwnedSafes = getAllOwnedSafes;
exports.getCollectibles = getCollectibles;
exports.getCollectiblesPage = getCollectiblesPage;
exports.getTransactionHistory = getTransactionHistory;
exports.getTransactionQueue = getTransactionQueue;
exports.getTransactionDetails = getTransactionDetails;
exports.deleteTransaction = deleteTransaction;
exports.postSafeGasEstimation = postSafeGasEstimation;
exports.getNonces = getNonces;
exports.proposeTransaction = proposeTransaction;
exports.getConfirmationView = getConfirmationView;
exports.getTxPreview = getTxPreview;
exports.getChainsConfig = getChainsConfig;
exports.getChainConfig = getChainConfig;
exports.getSafeApps = getSafeApps;
exports.getMasterCopies = getMasterCopies;
exports.getDecodedData = getDecodedData;
exports.getSafeMessages = getSafeMessages;
exports.getSafeMessage = getSafeMessage;
exports.proposeSafeMessage = proposeSafeMessage;
exports.confirmSafeMessage = confirmSafeMessage;
exports.getDelegates = getDelegates;
exports.registerDevice = registerDevice;
exports.unregisterSafe = unregisterSafe;
exports.unregisterDevice = unregisterDevice;
exports.registerEmail = registerEmail;
exports.changeEmail = changeEmail;
exports.resendEmailVerificationCode = resendEmailVerificationCode;
exports.verifyEmail = verifyEmail;
exports.getRegisteredEmail = getRegisteredEmail;
exports.deleteRegisteredEmail = deleteRegisteredEmail;
exports.registerRecoveryModule = registerRecoveryModule;
exports.unsubscribeSingle = unsubscribeSingle;
exports.unsubscribeAll = unsubscribeAll;
exports.getSafeOverviews = getSafeOverviews;
exports.getContract = getContract;
exports.getAuthNonce = getAuthNonce;
exports.verifyAuth = verifyAuth;
exports.createAccount = createAccount;
exports.getAccount = getAccount;
exports.deleteAccount = deleteAccount;
exports.getAccountDataTypes = getAccountDataTypes;
exports.getAccountDataSettings = getAccountDataSettings;
exports.putAccountDataSettings = putAccountDataSettings;
exports.getIndexingStatus = getIndexingStatus;
const endpoint_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/endpoint.js [app-client] (ecmascript)");
const config_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/config.js [app-client] (ecmascript)");
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-info.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-apps.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/transactions.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/chains.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/common.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/master-copies.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/decoded-data.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/safe-messages.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/notifications.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-gateway-typescript-sdk/dist/types/relay.js [app-client] (ecmascript)"), exports);
// Can be set externally to a different CGW host
let baseUrl = config_1.DEFAULT_BASE_URL;
/**
 * Set the base CGW URL
 */ const setBaseUrl = (url)=>{
    baseUrl = url;
};
exports.setBaseUrl = setBaseUrl;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */ /**
 * Relay a transaction from a Safe
 */ function relayTransaction(chainId, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/relay', {
        path: {
            chainId
        },
        body
    });
}
/**
 * Get the relay limit and number of remaining relays remaining
 */ function getRelayCount(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/relay/{address}', {
        path: {
            chainId,
            address
        }
    });
}
/**
 * Get basic information about a Safe. E.g. owners, modules, version etc
 */ function getSafeInfo(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}', {
        path: {
            chainId,
            address
        }
    });
}
/**
 * Get filterable list of incoming transactions
 */ function getIncomingTransfers(chainId, address, query, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/incoming-transfers/', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get filterable list of module transactions
 */ function getModuleTransactions(chainId, address, query, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/module-transactions/', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get filterable list of multisig transactions
 */ function getMultisigTransactions(chainId, address, query, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/multisig-transactions/', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get the total balance and all assets stored in a Safe
 */ function getBalances(chainId, address) {
    let currency = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'usd', query = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/balances/{currency}', {
        path: {
            chainId,
            address,
            currency
        },
        query
    });
}
/**
 * Get a list of supported fiat currencies (e.g. USD, EUR etc)
 */ function getFiatCurrencies() {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/balances/supported-fiat-codes');
}
/**
 * Get the addresses of all Safes belonging to an owner
 */ function getOwnedSafes(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/owners/{address}/safes', {
        path: {
            chainId,
            address
        }
    });
}
/**
 * Get the addresses of all Safes belonging to an owner on all chains
 */ function getAllOwnedSafes(address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/owners/{address}/safes', {
        path: {
            address
        }
    });
}
/**
 * Get NFTs stored in a Safe
 */ function getCollectibles(chainId, address) {
    let query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{address}/collectibles', {
        path: {
            chainId,
            address
        },
        query
    });
}
/**
 * Get NFTs stored in a Safe
 */ function getCollectiblesPage(chainId, address) {
    let query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, pageUrl = arguments.length > 3 ? arguments[3] : void 0;
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v2/chains/{chainId}/safes/{address}/collectibles', {
        path: {
            chainId,
            address
        },
        query
    }, pageUrl);
}
/**
 * Get a list of past Safe transactions
 */ function getTransactionHistory(chainId, address) {
    let query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, pageUrl = arguments.length > 3 ? arguments[3] : void 0;
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/transactions/history', {
        path: {
            chainId,
            safe_address: address
        },
        query
    }, pageUrl);
}
/**
 * Get the list of pending transactions
 */ function getTransactionQueue(chainId, address) {
    let query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, pageUrl = arguments.length > 3 ? arguments[3] : void 0;
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/transactions/queued', {
        path: {
            chainId,
            safe_address: address
        },
        query
    }, pageUrl);
}
/**
 * Get the details of an individual transaction by its id
 */ function getTransactionDetails(chainId, transactionId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{transactionId}', {
        path: {
            chainId,
            transactionId
        }
    });
}
/**
 * Delete a transaction by its safeTxHash
 */ function deleteTransaction(chainId, safeTxHash, signature) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{safeTxHash}', {
        path: {
            chainId,
            safeTxHash
        },
        body: {
            signature
        }
    });
}
/**
 * Request a gas estimate & recommmended tx nonce for a created transaction
 */ function postSafeGasEstimation(chainId, address, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations', {
        path: {
            chainId,
            safe_address: address
        },
        body
    });
}
function getNonces(chainId, address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/nonces', {
        path: {
            chainId,
            safe_address: address
        }
    });
}
/**
 * Propose a new transaction for other owners to sign/execute
 */ function proposeTransaction(chainId, address, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{safe_address}/propose', {
        path: {
            chainId,
            safe_address: address
        },
        body
    });
}
/**
 * Returns decoded data
 */ function getConfirmationView(chainId, safeAddress, operation, data, to, value) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body: {
            operation,
            data,
            to,
            value
        }
    });
}
/**
 * Get a tx preview
 */ function getTxPreview(chainId, safeAddress, operation, data, to, value) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/transactions/{safe_address}/preview', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body: {
            operation,
            data,
            to,
            value
        }
    });
}
/**
 * Returns all defined chain configs
 */ function getChainsConfig(query) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains', {
        query
    });
}
/**
 * Returns a chain config
 */ function getChainConfig(chainId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}', {
        path: {
            chainId: chainId
        }
    });
}
/**
 * Returns Safe Apps List
 */ function getSafeApps(chainId) {
    let query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safe-apps', {
        path: {
            chainId: chainId
        },
        query
    });
}
/**
 * Returns list of Master Copies
 */ function getMasterCopies(chainId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/about/master-copies', {
        path: {
            chainId: chainId
        }
    });
}
/**
 * Returns decoded data
 */ function getDecodedData(chainId, operation, encodedData, to) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/data-decoder', {
        path: {
            chainId: chainId
        },
        body: {
            operation,
            data: encodedData,
            to
        }
    });
}
/**
 * Returns list of `SafeMessage`s
 */ function getSafeMessages(chainId, address, pageUrl) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/messages', {
        path: {
            chainId,
            safe_address: address
        },
        query: {}
    }, pageUrl);
}
/**
 * Returns a `SafeMessage`
 */ function getSafeMessage(chainId, messageHash) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/messages/{message_hash}', {
        path: {
            chainId,
            message_hash: messageHash
        }
    });
}
/**
 * Propose a new `SafeMessage` for other owners to sign
 */ function proposeSafeMessage(chainId, address, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/messages', {
        path: {
            chainId,
            safe_address: address
        },
        body
    });
}
/**
 * Add a confirmation to a `SafeMessage`
 */ function confirmSafeMessage(chainId, messageHash, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/messages/{message_hash}/signatures', {
        path: {
            chainId,
            message_hash: messageHash
        },
        body
    });
}
/**
 * Returns a list of delegates
 */ function getDelegates(chainId) {
    let query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v2/chains/{chainId}/delegates', {
        path: {
            chainId
        },
        query
    });
}
/**
 * Registers a device/Safe for notifications
 */ function registerDevice(body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/register/notifications', {
        body
    });
}
/**
 * Unregisters a Safe from notifications
 */ function unregisterSafe(chainId, address, uuid) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}', {
        path: {
            chainId,
            safe_address: address,
            uuid
        }
    });
}
/**
 * Unregisters a device from notifications
 */ function unregisterDevice(chainId, uuid) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/notifications/devices/{uuid}', {
        path: {
            chainId,
            uuid
        }
    });
}
/**
 * Registers a email address for a safe signer.
 *
 * The signer wallet has to sign a message of format: `email-register-{chainId}-{safeAddress}-{emailAddress}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param body Signer address and email address
 * @param headers Signature and Signature timestamp
 * @returns 200 if signature matches the data
 */ function registerEmail(chainId, safeAddress, body, headers) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body,
        headers
    });
}
/**
 * Changes an already registered email address for a safe signer. The new email address still needs to be verified.
 *
 * The signer wallet has to sign a message of format: `email-edit-{chainId}-{safeAddress}-{emailAddress}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress
 * @param body New email address
 * @param headers Signature and Signature timestamp
 * @returns 202 if signature matches the data
 */ function changeEmail(chainId, safeAddress, signerAddress, body, headers) {
    return (0, endpoint_1.putEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        body,
        headers
    });
}
/**
 * Resends an email verification code.
 */ function resendEmailVerificationCode(chainId, safeAddress, signerAddress) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        body: ''
    });
}
/**
 * Verifies a pending email address registration.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress address who signed the email registration
 * @param body Verification code
 */ function verifyEmail(chainId, safeAddress, signerAddress, body) {
    return (0, endpoint_1.putEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        body
    });
}
/**
 * Gets the registered email address of the signer
 *
 * The signer wallet will have to sign a message of format: `email-retrieval-{chainId}-{safe}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress address of the owner of the Safe
 *
 * @returns email address and verified flag
 */ function getRegisteredEmail(chainId, safeAddress, signerAddress, headers) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        headers
    });
}
/**
 * Delete a registered email address for the signer
 *
 * The signer wallet will have to sign a message of format: `email-delete-{chainId}-{safe}-{signer}-{timestamp}`
 * The signature is valid for 5 minutes.
 *
 * @param chainId
 * @param safeAddress
 * @param signerAddress
 * @param headers
 */ function deleteRegisteredEmail(chainId, safeAddress, signerAddress, headers) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}', {
        path: {
            chainId,
            safe_address: safeAddress,
            signer: signerAddress
        },
        headers
    });
}
/**
 * Register a recovery module for receiving alerts
 * @param chainId
 * @param safeAddress
 * @param body - { moduleAddress: string }
 */ function registerRecoveryModule(chainId, safeAddress, body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/chains/{chainId}/safes/{safe_address}/recovery', {
        path: {
            chainId,
            safe_address: safeAddress
        },
        body
    });
}
/**
 * Delete email subscription for a single category
 * @param query
 */ function unsubscribeSingle(query) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/subscriptions', {
        query
    });
}
/**
 * Delete email subscription for all categories
 * @param query
 */ function unsubscribeAll(query) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/subscriptions/all', {
        query
    });
}
/**
 * Get Safe overviews per address
 */ function getSafeOverviews(safes, query) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/safes', {
        query: Object.assign(Object.assign({}, query), {
            safes: safes.join(',')
        })
    });
}
function getContract(chainId, contractAddress) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/contracts/{contractAddress}', {
        path: {
            chainId: chainId,
            contractAddress: contractAddress
        }
    });
}
function getAuthNonce() {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/auth/nonce', {
        credentials: 'include'
    });
}
function verifyAuth(body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/auth/verify', {
        body,
        credentials: 'include'
    });
}
function createAccount(body) {
    return (0, endpoint_1.postEndpoint)(baseUrl, '/v1/accounts', {
        body,
        credentials: 'include'
    });
}
function getAccount(address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/accounts/{address}', {
        path: {
            address
        },
        credentials: 'include'
    });
}
function deleteAccount(address) {
    return (0, endpoint_1.deleteEndpoint)(baseUrl, '/v1/accounts/{address}', {
        path: {
            address
        },
        credentials: 'include'
    });
}
function getAccountDataTypes() {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/accounts/data-types');
}
function getAccountDataSettings(address) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/accounts/{address}/data-settings', {
        path: {
            address
        },
        credentials: 'include'
    });
}
function putAccountDataSettings(address, body) {
    return (0, endpoint_1.putEndpoint)(baseUrl, '/v1/accounts/{address}/data-settings', {
        path: {
            address
        },
        body,
        credentials: 'include'
    });
}
function getIndexingStatus(chainId) {
    return (0, endpoint_1.getEndpoint)(baseUrl, '/v1/chains/{chainId}/about/indexing', {
        path: {
            chainId
        }
    });
} /* eslint-enable @typescript-eslint/explicit-module-boundary-types */  //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
exports.version = '1.1.0'; //# sourceMappingURL=version.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = void 0;
const version_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/version.js [app-client] (ecmascript)");
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        var _args_cause;
        const details = args.cause instanceof BaseError ? args.cause.details : ((_args_cause = args.cause) === null || _args_cause === void 0 ? void 0 : _args_cause.message) ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                "Docs: https://abitype.dev".concat(docsPath)
            ] : [],
            ...details ? [
                "Details: ".concat(details)
            ] : [],
            "Version: abitype@".concat(version_js_1.version)
        ].join('\n');
        super(message);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
}
exports.BaseError = BaseError; //# sourceMappingURL=errors.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/narrow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.narrow = narrow;
function narrow(value) {
    return value;
} //# sourceMappingURL=narrow.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTupleRegex = exports.integerRegex = exports.bytesRegex = void 0;
exports.execTyped = execTyped;
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match === null || match === void 0 ? void 0 : match.groups;
}
exports.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
exports.integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
exports.isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiParameter = formatAbiParameter;
const regex_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const tupleRegex = RegExp("^tuple(?<array>(\\[(\\d*)\\])*)$");
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, regex_js_1.execTyped)(tupleRegex, abiParameter.type);
        var _result_array;
        type += ")".concat((_result_array = result === null || result === void 0 ? void 0 : result.array) !== null && _result_array !== void 0 ? _result_array : '');
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    if ('indexed' in abiParameter && abiParameter.indexed) type = "".concat(type, " indexed");
    if (abiParameter.name) return "".concat(type, " ").concat(abiParameter.name);
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiParameters = formatAbiParameters;
const formatAbiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, formatAbiParameter_js_1.formatAbiParameter)(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItem = formatAbiItem;
const formatAbiParameters_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
function formatAbiItem(abiItem) {
    var _abiItem_outputs;
    if (abiItem.type === 'function') return "function ".concat(abiItem.name, "(").concat((0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs), ")").concat(abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? " ".concat(abiItem.stateMutability) : '').concat(((_abiItem_outputs = abiItem.outputs) === null || _abiItem_outputs === void 0 ? void 0 : _abiItem_outputs.length) ? " returns (".concat((0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.outputs), ")") : '');
    if (abiItem.type === 'event') return "event ".concat(abiItem.name, "(").concat((0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs), ")");
    if (abiItem.type === 'error') return "error ".concat(abiItem.name, "(").concat((0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs), ")");
    if (abiItem.type === 'constructor') return "constructor(".concat((0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs), ")").concat(abiItem.stateMutability === 'payable' ? ' payable' : '');
    if (abiItem.type === 'fallback') return "fallback() external".concat(abiItem.stateMutability === 'payable' ? ' payable' : '');
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbi.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbi = formatAbi;
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)");
function formatAbi(abi) {
    const signatures = [];
    const length = abi.length;
    for(let i = 0; i < length; i++){
        const abiItem = abi[i];
        const signature = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
        signatures.push(signature);
    }
    return signatures;
} //# sourceMappingURL=formatAbi.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.functionModifiers = exports.eventModifiers = exports.modifiers = void 0;
exports.isErrorSignature = isErrorSignature;
exports.execErrorSignature = execErrorSignature;
exports.isEventSignature = isEventSignature;
exports.execEventSignature = execEventSignature;
exports.isFunctionSignature = isFunctionSignature;
exports.execFunctionSignature = execFunctionSignature;
exports.isStructSignature = isStructSignature;
exports.execStructSignature = execStructSignature;
exports.isConstructorSignature = isConstructorSignature;
exports.execConstructorSignature = execConstructorSignature;
exports.isFallbackSignature = isFallbackSignature;
exports.execFallbackSignature = execFallbackSignature;
exports.isReceiveSignature = isReceiveSignature;
const regex_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const errorSignatureRegex = RegExp("^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\\((?<parameters>.*?)\\)$");
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, regex_js_1.execTyped)(errorSignatureRegex, signature);
}
const eventSignatureRegex = RegExp("^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\\((?<parameters>.*?)\\)$");
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, regex_js_1.execTyped)(eventSignatureRegex, signature);
}
const functionSignatureRegex = RegExp("^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\\((?<parameters>.*?)\\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\\s?\\((?<returns>.*?)\\))?$");
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, regex_js_1.execTyped)(functionSignatureRegex, signature);
}
const structSignatureRegex = RegExp("^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \\{(?<properties>.*?)\\}$");
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, regex_js_1.execTyped)(structSignatureRegex, signature);
}
const constructorSignatureRegex = RegExp("^constructor\\((?<parameters>.*?)\\)(?:\\s(?<stateMutability>payable{1}))?$");
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, regex_js_1.execTyped)(constructorSignatureRegex, signature);
}
const fallbackSignatureRegex = RegExp("^fallback\\(\\) external(?:\\s(?<stateMutability>payable{1}))?$");
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0, regex_js_1.execTyped)(fallbackSignatureRegex, signature);
}
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
exports.modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata'
]);
exports.eventModifiers = new Set([
    'indexed'
]);
exports.functionModifiers = new Set([
    'calldata',
    'memory',
    'storage'
]); //# sourceMappingURL=signatures.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownSolidityTypeError = exports.UnknownTypeError = exports.InvalidAbiItemError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidAbiItemError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Failed to parse ABI item.', {
            details: "parseAbiItem(".concat(JSON.stringify(signature, null, 2), ")"),
            docsPath: '/api/human#parseabiitem-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
exports.InvalidAbiItemError = InvalidAbiItemError;
class UnknownTypeError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                'Type "'.concat(type, '" is not a valid ABI type. Perhaps you forgot to include a struct signature?')
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
exports.UnknownTypeError = UnknownTypeError;
class UnknownSolidityTypeError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                'Type "'.concat(type, '" is not a valid ABI type.')
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
}
exports.UnknownSolidityTypeError = UnknownSolidityTypeError; //# sourceMappingURL=abiItem.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidAbiTypeParameterError = exports.InvalidFunctionModifierError = exports.InvalidModifierError = exports.SolidityProtectedKeywordError = exports.InvalidParameterError = exports.InvalidAbiParametersError = exports.InvalidAbiParameterError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidAbiParameterError extends errors_js_1.BaseError {
    constructor({ param }){
        super('Failed to parse ABI parameter.', {
            details: "parseAbiParameter(".concat(JSON.stringify(param, null, 2), ")"),
            docsPath: '/api/human#parseabiparameter-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
exports.InvalidAbiParameterError = InvalidAbiParameterError;
class InvalidAbiParametersError extends errors_js_1.BaseError {
    constructor({ params }){
        super('Failed to parse ABI parameters.', {
            details: "parseAbiParameters(".concat(JSON.stringify(params, null, 2), ")"),
            docsPath: '/api/human#parseabiparameters-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
exports.InvalidAbiParametersError = InvalidAbiParametersError;
class InvalidParameterError extends errors_js_1.BaseError {
    constructor({ param }){
        super('Invalid ABI parameter.', {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
exports.InvalidParameterError = InvalidParameterError;
class SolidityProtectedKeywordError extends errors_js_1.BaseError {
    constructor({ param, name }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                '"'.concat(name, '" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html')
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
exports.SolidityProtectedKeywordError = SolidityProtectedKeywordError;
class InvalidModifierError extends errors_js_1.BaseError {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                'Modifier "'.concat(modifier, '" not allowed').concat(type ? ' in "'.concat(type, '" type') : '', ".")
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
exports.InvalidModifierError = InvalidModifierError;
class InvalidFunctionModifierError extends errors_js_1.BaseError {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                'Modifier "'.concat(modifier, '" not allowed').concat(type ? ' in "'.concat(type, '" type') : '', "."),
                'Data location can only be specified for array, struct, or mapping types, but "'.concat(modifier, '" was given.')
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
exports.InvalidFunctionModifierError = InvalidFunctionModifierError;
class InvalidAbiTypeParameterError extends errors_js_1.BaseError {
    constructor({ abiParameter }){
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                'ABI parameter type is invalid.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
}
exports.InvalidAbiTypeParameterError = InvalidAbiTypeParameterError; //# sourceMappingURL=abiParameter.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidStructSignatureError = exports.UnknownSignatureError = exports.InvalidSignatureError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidSignatureError extends errors_js_1.BaseError {
    constructor({ signature, type }){
        super("Invalid ".concat(type, " signature."), {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
exports.InvalidSignatureError = InvalidSignatureError;
class UnknownSignatureError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Unknown signature.', {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
exports.UnknownSignatureError = UnknownSignatureError;
class InvalidStructSignatureError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: [
                'No properties exist.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
}
exports.InvalidStructSignatureError = InvalidStructSignatureError; //# sourceMappingURL=signature.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircularReferenceError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class CircularReferenceError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Circular reference detected.', {
            metaMessages: [
                'Struct "'.concat(type, '" is a circular reference.')
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
}
exports.CircularReferenceError = CircularReferenceError; //# sourceMappingURL=struct.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidParenthesisError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidParenthesisError extends errors_js_1.BaseError {
    constructor({ current, depth }){
        super('Unbalanced parentheses.', {
            metaMessages: [
                '"'.concat(current.trim(), '" has too many ').concat(depth > 0 ? 'opening' : 'closing', " parentheses.")
            ],
            details: 'Depth "'.concat(depth, '"')
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
}
exports.InvalidParenthesisError = InvalidParenthesisError; //# sourceMappingURL=splitParameters.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parameterCache = void 0;
exports.getParameterCacheKey = getParameterCacheKey;
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs) for (const struct of Object.entries(structs)){
        if (!struct) continue;
        let propertyKey = '';
        for (const property of struct[1]){
            propertyKey += "[".concat(property.type).concat(property.name ? ":".concat(property.name) : '', "]");
        }
        structKey += "(".concat(struct[0], "{").concat(propertyKey, "})");
    }
    if (type) return "".concat(type, ":").concat(param).concat(structKey);
    return param;
}
exports.parameterCache = new Map([
    [
        'address',
        {
            type: 'address'
        }
    ],
    [
        'bool',
        {
            type: 'bool'
        }
    ],
    [
        'bytes',
        {
            type: 'bytes'
        }
    ],
    [
        'bytes32',
        {
            type: 'bytes32'
        }
    ],
    [
        'int',
        {
            type: 'int256'
        }
    ],
    [
        'int256',
        {
            type: 'int256'
        }
    ],
    [
        'string',
        {
            type: 'string'
        }
    ],
    [
        'uint',
        {
            type: 'uint256'
        }
    ],
    [
        'uint8',
        {
            type: 'uint8'
        }
    ],
    [
        'uint16',
        {
            type: 'uint16'
        }
    ],
    [
        'uint24',
        {
            type: 'uint24'
        }
    ],
    [
        'uint32',
        {
            type: 'uint32'
        }
    ],
    [
        'uint64',
        {
            type: 'uint64'
        }
    ],
    [
        'uint96',
        {
            type: 'uint96'
        }
    ],
    [
        'uint112',
        {
            type: 'uint112'
        }
    ],
    [
        'uint160',
        {
            type: 'uint160'
        }
    ],
    [
        'uint192',
        {
            type: 'uint192'
        }
    ],
    [
        'uint256',
        {
            type: 'uint256'
        }
    ],
    [
        'address owner',
        {
            type: 'address',
            name: 'owner'
        }
    ],
    [
        'address to',
        {
            type: 'address',
            name: 'to'
        }
    ],
    [
        'bool approved',
        {
            type: 'bool',
            name: 'approved'
        }
    ],
    [
        'bytes _data',
        {
            type: 'bytes',
            name: '_data'
        }
    ],
    [
        'bytes data',
        {
            type: 'bytes',
            name: 'data'
        }
    ],
    [
        'bytes signature',
        {
            type: 'bytes',
            name: 'signature'
        }
    ],
    [
        'bytes32 hash',
        {
            type: 'bytes32',
            name: 'hash'
        }
    ],
    [
        'bytes32 r',
        {
            type: 'bytes32',
            name: 'r'
        }
    ],
    [
        'bytes32 root',
        {
            type: 'bytes32',
            name: 'root'
        }
    ],
    [
        'bytes32 s',
        {
            type: 'bytes32',
            name: 's'
        }
    ],
    [
        'string name',
        {
            type: 'string',
            name: 'name'
        }
    ],
    [
        'string symbol',
        {
            type: 'string',
            name: 'symbol'
        }
    ],
    [
        'string tokenURI',
        {
            type: 'string',
            name: 'tokenURI'
        }
    ],
    [
        'uint tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint8 v',
        {
            type: 'uint8',
            name: 'v'
        }
    ],
    [
        'uint256 balance',
        {
            type: 'uint256',
            name: 'balance'
        }
    ],
    [
        'uint256 tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint256 value',
        {
            type: 'uint256',
            name: 'value'
        }
    ],
    [
        'event:address indexed from',
        {
            type: 'address',
            name: 'from',
            indexed: true
        }
    ],
    [
        'event:address indexed to',
        {
            type: 'address',
            name: 'to',
            indexed: true
        }
    ],
    [
        'event:uint indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ],
    [
        'event:uint256 indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ]
]); //# sourceMappingURL=cache.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSignature = parseSignature;
exports.parseFunctionSignature = parseFunctionSignature;
exports.parseEventSignature = parseEventSignature;
exports.parseErrorSignature = parseErrorSignature;
exports.parseConstructorSignature = parseConstructorSignature;
exports.parseFallbackSignature = parseFallbackSignature;
exports.parseAbiParameter = parseAbiParameter;
exports.splitParameters = splitParameters;
exports.isSolidityType = isSolidityType;
exports.isSolidityKeyword = isSolidityKeyword;
exports.isValidDataLocation = isValidDataLocation;
const regex_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const abiItem_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const abiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signature_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
const splitParameters_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
const cache_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/cache.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
function parseSignature(signature) {
    let structs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ((0, signatures_js_1.isFunctionSignature)(signature)) return parseFunctionSignature(signature, structs);
    if ((0, signatures_js_1.isEventSignature)(signature)) return parseEventSignature(signature, structs);
    if ((0, signatures_js_1.isErrorSignature)(signature)) return parseErrorSignature(signature, structs);
    if ((0, signatures_js_1.isConstructorSignature)(signature)) return parseConstructorSignature(signature, structs);
    if ((0, signatures_js_1.isFallbackSignature)(signature)) return parseFallbackSignature(signature);
    if ((0, signatures_js_1.isReceiveSignature)(signature)) return {
        type: 'receive',
        stateMutability: 'payable'
    };
    throw new signature_js_1.UnknownSignatureError({
        signature
    });
}
function parseFunctionSignature(signature) {
    let structs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const match = (0, signatures_js_1.execFunctionSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'function'
    });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for(let i = 0; i < inputLength; i++){
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: signatures_js_1.functionModifiers,
            structs,
            type: 'function'
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for(let i = 0; i < outputLength; i++){
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: signatures_js_1.functionModifiers,
                structs,
                type: 'function'
            }));
        }
    }
    var _match_stateMutability;
    return {
        name: match.name,
        type: 'function',
        stateMutability: (_match_stateMutability = match.stateMutability) !== null && _match_stateMutability !== void 0 ? _match_stateMutability : 'nonpayable',
        inputs,
        outputs
    };
}
function parseEventSignature(signature) {
    let structs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const match = (0, signatures_js_1.execEventSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'event'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        modifiers: signatures_js_1.eventModifiers,
        structs,
        type: 'event'
    }));
    return {
        name: match.name,
        type: 'event',
        inputs: abiParameters
    };
}
function parseErrorSignature(signature) {
    let structs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const match = (0, signatures_js_1.execErrorSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'error'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'error'
    }));
    return {
        name: match.name,
        type: 'error',
        inputs: abiParameters
    };
}
function parseConstructorSignature(signature) {
    let structs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const match = (0, signatures_js_1.execConstructorSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'constructor'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'constructor'
    }));
    var _match_stateMutability;
    return {
        type: 'constructor',
        stateMutability: (_match_stateMutability = match.stateMutability) !== null && _match_stateMutability !== void 0 ? _match_stateMutability : 'nonpayable',
        inputs: abiParameters
    };
}
function parseFallbackSignature(signature) {
    const match = (0, signatures_js_1.execFallbackSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'fallback'
    });
    var _match_stateMutability;
    return {
        type: 'fallback',
        stateMutability: (_match_stateMutability = match.stateMutability) !== null && _match_stateMutability !== void 0 ? _match_stateMutability : 'nonpayable'
    };
}
const abiParameterWithoutTupleRegex = RegExp("^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\\spayable)?)(?<array>(?:\\[\\d*?\\])+?)?(?:\\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$");
const abiParameterWithTupleRegex = RegExp("^\\((?<type>.+?)\\)(?<array>(?:\\[\\d*?\\])+?)?(?:\\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$");
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    const parameterCacheKey = (0, cache_js_1.getParameterCacheKey)(param, options === null || options === void 0 ? void 0 : options.type, options === null || options === void 0 ? void 0 : options.structs);
    if (cache_js_1.parameterCache.has(parameterCacheKey)) return cache_js_1.parameterCache.get(parameterCacheKey);
    const isTuple = regex_js_1.isTupleRegex.test(param);
    const match = (0, regex_js_1.execTyped)(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new abiParameter_js_1.InvalidParameterError({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new abiParameter_js_1.SolidityProtectedKeywordError({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === 'indexed' ? {
        indexed: true
    } : {};
    var _options_structs;
    const structs = (_options_structs = options === null || options === void 0 ? void 0 : options.structs) !== null && _options_structs !== void 0 ? _options_structs : {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++){
            components_.push(parseAbiParameter(params[i], {
                structs
            }));
        }
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = 'tuple';
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) {
        type = "".concat(match.type, "256");
    } else if (match.type === 'address payable') {
        type = 'address';
    } else {
        type = match.type;
        if (!((options === null || options === void 0 ? void 0 : options.type) === 'struct') && !isSolidityType(type)) throw new abiItem_js_1.UnknownSolidityTypeError({
            type
        });
    }
    if (match.modifier) {
        var _options_modifiers_has, _options_modifiers;
        if (!(options === null || options === void 0 ? void 0 : (_options_modifiers = options.modifiers) === null || _options_modifiers === void 0 ? void 0 : (_options_modifiers_has = _options_modifiers.has) === null || _options_modifiers_has === void 0 ? void 0 : _options_modifiers_has.call(_options_modifiers, match.modifier))) throw new abiParameter_js_1.InvalidModifierError({
            param,
            type: options === null || options === void 0 ? void 0 : options.type,
            modifier: match.modifier
        });
        if (signatures_js_1.functionModifiers.has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new abiParameter_js_1.InvalidFunctionModifierError({
            param,
            type: options === null || options === void 0 ? void 0 : options.type,
            modifier: match.modifier
        });
    }
    var _match_array;
    const abiParameter = {
        type: "".concat(type).concat((_match_array = match.array) !== null && _match_array !== void 0 ? _match_array : ''),
        ...name,
        ...indexed,
        ...components
    };
    cache_js_1.parameterCache.set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params) {
    let result = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], current = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', depth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    const length = params.trim().length;
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ',':
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, "".concat(current).concat(char), depth);
            case '(':
                return splitParameters(tail, result, "".concat(current).concat(char), depth + 1);
            case ')':
                return splitParameters(tail, result, "".concat(current).concat(char), depth - 1);
            default:
                return splitParameters(tail, result, "".concat(current).concat(char), depth);
        }
    }
    if (current === '') return result;
    if (depth !== 0) throw new splitParameters_js_1.InvalidParenthesisError({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === 'address' || type === 'bool' || type === 'function' || type === 'string' || regex_js_1.bytesRegex.test(type) || regex_js_1.integerRegex.test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === 'address' || name === 'bool' || name === 'function' || name === 'string' || name === 'tuple' || regex_js_1.bytesRegex.test(name) || regex_js_1.integerRegex.test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
} //# sourceMappingURL=utils.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseStructs = parseStructs;
const regex_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const abiItem_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const abiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signature_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
const struct_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseStructs(signatures) {
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, signatures_js_1.isStructSignature)(signature)) continue;
        const match = (0, signatures_js_1.execStructSignature)(signature);
        if (!match) throw new signature_js_1.InvalidSignatureError({
            signature,
            type: 'struct'
        });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, utils_js_1.parseAbiParameter)(trimmed, {
                type: 'struct'
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new signature_js_1.InvalidStructSignatureError({
            signature
        });
        shallowStructs[match.name] = components;
    }
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = RegExp("^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\\[\\d*?\\])+?)?$");
function resolveStructs(abiParameters, structs) {
    let ancestors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Set();
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = regex_js_1.isTupleRegex.test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, regex_js_1.execTyped)(typeWithoutTupleRegex, abiParameter.type);
            if (!(match === null || match === void 0 ? void 0 : match.type)) throw new abiParameter_js_1.InvalidAbiTypeParameterError({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new struct_js_1.CircularReferenceError({
                    type
                });
                var _structs_type;
                components.push({
                    ...abiParameter,
                    type: "tuple".concat(array !== null && array !== void 0 ? array : ''),
                    components: resolveStructs((_structs_type = structs[type]) !== null && _structs_type !== void 0 ? _structs_type : [], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, utils_js_1.isSolidityType)(type)) components.push(abiParameter);
                else throw new abiItem_js_1.UnknownTypeError({
                    type
                });
            }
        }
    }
    return components;
} //# sourceMappingURL=structs.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbi.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbi = parseAbi;
const signatures_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbi(signatures) {
    const structs = (0, structs_js_1.parseStructs)(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, signatures_js_1.isStructSignature)(signature)) continue;
        abi.push((0, utils_js_1.parseSignature)(signature, structs));
    }
    return abi;
} //# sourceMappingURL=parseAbi.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiItem = parseAbiItem;
const abiItem_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string') abiItem = (0, utils_js_1.parseSignature)(signature);
    else {
        const structs = (0, structs_js_1.parseStructs)(signature);
        const length = signature.length;
        for(let i = 0; i < length; i++){
            const signature_ = signature[i];
            if ((0, signatures_js_1.isStructSignature)(signature_)) continue;
            abiItem = (0, utils_js_1.parseSignature)(signature_, structs);
            break;
        }
    }
    if (!abiItem) throw new abiItem_js_1.InvalidAbiItemError({
        signature
    });
    return abiItem;
} //# sourceMappingURL=parseAbiItem.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbiParameter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiParameter = parseAbiParameter;
const abiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiParameter(param) {
    let abiParameter;
    if (typeof param === 'string') abiParameter = (0, utils_js_1.parseAbiParameter)(param, {
        modifiers: signatures_js_1.modifiers
    });
    else {
        const structs = (0, structs_js_1.parseStructs)(param);
        const length = param.length;
        for(let i = 0; i < length; i++){
            const signature = param[i];
            if ((0, signatures_js_1.isStructSignature)(signature)) continue;
            abiParameter = (0, utils_js_1.parseAbiParameter)(signature, {
                modifiers: signatures_js_1.modifiers,
                structs
            });
            break;
        }
    }
    if (!abiParameter) throw new abiParameter_js_1.InvalidAbiParameterError({
        param
    });
    return abiParameter;
} //# sourceMappingURL=parseAbiParameter.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiParameters = parseAbiParameters;
const abiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
const utils_js_2 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, utils_js_1.splitParameters)(params);
        const length = parameters.length;
        for(let i = 0; i < length; i++){
            abiParameters.push((0, utils_js_2.parseAbiParameter)(parameters[i], {
                modifiers: signatures_js_1.modifiers
            }));
        }
    } else {
        const structs = (0, structs_js_1.parseStructs)(params);
        const length = params.length;
        for(let i = 0; i < length; i++){
            const signature = params[i];
            if ((0, signatures_js_1.isStructSignature)(signature)) continue;
            const parameters = (0, utils_js_1.splitParameters)(signature);
            const length = parameters.length;
            for(let k = 0; k < length; k++){
                abiParameters.push((0, utils_js_2.parseAbiParameter)(parameters[k], {
                    modifiers: signatures_js_1.modifiers,
                    structs
                }));
            }
        }
    }
    if (abiParameters.length === 0) throw new abiParameter_js_1.InvalidAbiParametersError({
        params
    });
    return abiParameters;
} //# sourceMappingURL=parseAbiParameters.js.map
}),
"[project]/giftpicker/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircularReferenceError = exports.InvalidParenthesisError = exports.UnknownSignatureError = exports.InvalidSignatureError = exports.InvalidStructSignatureError = exports.InvalidAbiParameterError = exports.InvalidAbiParametersError = exports.InvalidParameterError = exports.SolidityProtectedKeywordError = exports.InvalidModifierError = exports.InvalidFunctionModifierError = exports.InvalidAbiTypeParameterError = exports.UnknownSolidityTypeError = exports.InvalidAbiItemError = exports.UnknownTypeError = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.formatAbiParameters = exports.formatAbiParameter = exports.formatAbiItem = exports.formatAbi = exports.narrow = exports.BaseError = void 0;
var errors_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BaseError", {
    enumerable: true,
    get: function() {
        return errors_js_1.BaseError;
    }
});
var narrow_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/narrow.js [app-client] (ecmascript)");
Object.defineProperty(exports, "narrow", {
    enumerable: true,
    get: function() {
        return narrow_js_1.narrow;
    }
});
var formatAbi_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbi", {
    enumerable: true,
    get: function() {
        return formatAbi_js_1.formatAbi;
    }
});
var formatAbiItem_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiItem", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiItem;
    }
});
var formatAbiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiParameter", {
    enumerable: true,
    get: function() {
        return formatAbiParameter_js_1.formatAbiParameter;
    }
});
var formatAbiParameters_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiParameters", {
    enumerable: true,
    get: function() {
        return formatAbiParameters_js_1.formatAbiParameters;
    }
});
var parseAbi_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return parseAbi_js_1.parseAbi;
    }
});
var parseAbiItem_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return parseAbiItem_js_1.parseAbiItem;
    }
});
var parseAbiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return parseAbiParameter_js_1.parseAbiParameter;
    }
});
var parseAbiParameters_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/parseAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return parseAbiParameters_js_1.parseAbiParameters;
    }
});
var abiItem_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "UnknownTypeError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.UnknownTypeError;
    }
});
Object.defineProperty(exports, "InvalidAbiItemError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.InvalidAbiItemError;
    }
});
Object.defineProperty(exports, "UnknownSolidityTypeError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.UnknownSolidityTypeError;
    }
});
var abiParameter_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidAbiTypeParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiTypeParameterError;
    }
});
Object.defineProperty(exports, "InvalidFunctionModifierError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidFunctionModifierError;
    }
});
Object.defineProperty(exports, "InvalidModifierError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidModifierError;
    }
});
Object.defineProperty(exports, "SolidityProtectedKeywordError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.SolidityProtectedKeywordError;
    }
});
Object.defineProperty(exports, "InvalidParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidParameterError;
    }
});
Object.defineProperty(exports, "InvalidAbiParametersError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiParametersError;
    }
});
Object.defineProperty(exports, "InvalidAbiParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiParameterError;
    }
});
var signature_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidStructSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.InvalidStructSignatureError;
    }
});
Object.defineProperty(exports, "InvalidSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.InvalidSignatureError;
    }
});
Object.defineProperty(exports, "UnknownSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.UnknownSignatureError;
    }
});
var splitParameters_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidParenthesisError", {
    enumerable: true,
    get: function() {
        return splitParameters_js_1.InvalidParenthesisError;
    }
});
var struct_js_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)");
Object.defineProperty(exports, "CircularReferenceError", {
    enumerable: true,
    get: function() {
        return struct_js_1.CircularReferenceError;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/_u64.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toBig = exports.shrSL = exports.shrSH = exports.rotrSL = exports.rotrSH = exports.rotrBL = exports.rotrBH = exports.rotr32L = exports.rotr32H = exports.rotlSL = exports.rotlSH = exports.rotlBL = exports.rotlBH = exports.add5L = exports.add5H = exports.add4L = exports.add4H = exports.add3L = exports.add3H = void 0;
exports.add = add;
exports.fromBig = fromBig;
exports.split = split;
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
exports.shrSH = shrSH;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
exports.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
exports.rotrSH = rotrSH;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
exports.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
exports.rotrBH = rotrBH;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
exports.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
exports.rotr32H = rotr32H;
const rotr32L = (h, _l)=>h;
exports.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
exports.rotlSH = rotlSH;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
exports.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
exports.rotlBH = rotlBH;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
exports.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
exports.add3L = add3L;
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
exports.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
exports.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
exports.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
exports.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
exports.add5H = add5H;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
exports.default = u64; //# sourceMappingURL=_u64.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/crypto.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined; //# sourceMappingURL=crypto.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.Hash = exports.nextTick = exports.swap32IfBE = exports.byteSwapIfBE = exports.swap8IfBE = exports.isLE = void 0;
exports.isBytes = isBytes;
exports.anumber = anumber;
exports.abytes = abytes;
exports.ahash = ahash;
exports.aexists = aexists;
exports.aoutput = aoutput;
exports.u8 = u8;
exports.u32 = u32;
exports.clean = clean;
exports.createView = createView;
exports.rotr = rotr;
exports.rotl = rotl;
exports.byteSwap = byteSwap;
exports.byteSwap32 = byteSwap32;
exports.bytesToHex = bytesToHex;
exports.hexToBytes = hexToBytes;
exports.asyncLoop = asyncLoop;
exports.utf8ToBytes = utf8ToBytes;
exports.bytesToUtf8 = bytesToUtf8;
exports.toBytes = toBytes;
exports.kdfInputToBytes = kdfInputToBytes;
exports.concatBytes = concatBytes;
exports.checkOpts = checkOpts;
exports.createHasher = createHasher;
exports.createOptHasher = createOptHasher;
exports.createXOFer = createXOFer;
exports.randomBytes = randomBytes;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
const crypto_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/crypto.js [app-client] (ecmascript)");
/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */ function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
/** Asserts something is positive integer. */ function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
/** Asserts something is Uint8Array. */ function abytes(b) {
    for(var _len = arguments.length, lengths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        lengths[_key - 1] = arguments[_key];
    }
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */ function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */ function aexists(instance) {
    let checkFinished = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */ function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
/** Cast u8 / u16 / u32 to u8. */ function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** Cast u8 / u16 / u32 to u32. */ function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
/** Zeroize a byte array. Warning: JS provides no guarantees. */ function clean() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
/** Create DataView of an array for easy byte-level manipulation. */ function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */ function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
/** The rotate left (circular left shift) operation for uint32 */ function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */ exports.isLE = (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
/** The byte swap operation for uint32 */ function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
/** Conditionally byte swap if on a big-endian platform */ exports.swap8IfBE = exports.isLE ? (n)=>n : (n)=>byteSwap(n);
/** @deprecated */ exports.byteSwapIfBE = exports.swap8IfBE;
/** In place byte swap for Uint32Array */ function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
exports.swap32IfBE = exports.isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string. Uses built-in function, when available.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array. Uses built-in function, when available.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin) return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
/**
 * There is no setImmediate in browser and setTimeout is slow.
 * Call of async fn will return Promise, which will be fullfiled only on
 * next scheduler queue processing step and this is exactly what we need.
 */ const nextTick = async ()=>{};
exports.nextTick = nextTick;
/** Returns control to thread each 'tick' ms to avoid blocking. */ async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
/**
 * Converts string to bytes using UTF8 encoding.
 * @example utf8ToBytes('abc') // Uint8Array.from([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Converts bytes to string using UTF8 encoding.
 * @example bytesToUtf8(Uint8Array.from([97, 98, 99])) // 'abc'
 */ function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
/**
 * Helper for KDFs: consumes uint8array or string.
 * When string is passed, does utf8 decoding, using TextDecoder.
 */ function kdfInputToBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
/** Copies several Uint8Arrays into one. */ function concatBytes() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
/** For runtime check if class implements interface */ class Hash {
}
exports.Hash = Hash;
/** Wraps hash function, creating an interface on top of it */ function createHasher(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function createOptHasher(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function createXOFer(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructor = createHasher;
exports.wrapConstructorWithOpts = createOptHasher;
exports.wrapXOFConstructorWithOpts = createXOFer;
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */ function randomBytes() {
    let bytesLength = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 32;
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') {
        return Uint8Array.from(crypto_1.crypto.randomBytes(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/sha3.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = void 0;
exports.keccakP = keccakP;
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ const _u64_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/_u64.js [app-client] (ecmascript)");
// prettier-ignore
const utils_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
// No __PURE__ annotations in sha3 header:
// EVERYTHING is in fact used on every export.
// Various per round constants calculations
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(0x71);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const IOTAS = (0, _u64_ts_1.split)(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, _u64_ts_1.rotlBH)(h, l, s) : (0, _u64_ts_1.rotlSH)(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, _u64_ts_1.rotlBL)(h, l, s) : (0, _u64_ts_1.rotlSL)(h, l, s);
/** `keccakf1600` internal function, additionally allows to adjust round count. */ function keccakP(s) {
    let rounds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 24;
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    (0, utils_ts_1.clean)(B);
}
/** Keccak sponge function. */ class Keccak extends utils_ts_1.Hash {
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, utils_ts_1.swap32IfBE)(this.state32);
        keccakP(this.state32, this.rounds);
        (0, utils_ts_1.swap32IfBE)(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, utils_ts_1.aexists)(this);
        data = (0, utils_ts_1.toBytes)(data);
        (0, utils_ts_1.abytes)(data);
        const { blockLen, state } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, utils_ts_1.aexists)(this, false);
        (0, utils_ts_1.abytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, utils_ts_1.anumber)(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, utils_ts_1.aoutput)(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        (0, utils_ts_1.clean)(this.state);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        // Can be passed from user as dkLen
        (0, utils_ts_1.anumber)(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (!(0 < blockLen && blockLen < 200)) throw new Error('only keccak-f1600 function is supported');
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_ts_1.u32)(this.state);
    }
}
exports.Keccak = Keccak;
const gen = (suffix, blockLen, outputLen)=>(0, utils_ts_1.createHasher)(()=>new Keccak(blockLen, suffix, outputLen));
/** SHA3-224 hash function. */ exports.sha3_224 = (()=>gen(0x06, 144, 224 / 8))();
/** SHA3-256 hash function. Different from keccak-256. */ exports.sha3_256 = (()=>gen(0x06, 136, 256 / 8))();
/** SHA3-384 hash function. */ exports.sha3_384 = (()=>gen(0x06, 104, 384 / 8))();
/** SHA3-512 hash function. */ exports.sha3_512 = (()=>gen(0x06, 72, 512 / 8))();
/** keccak-224 hash function. */ exports.keccak_224 = (()=>gen(0x01, 144, 224 / 8))();
/** keccak-256 hash function. Different from SHA3-256. */ exports.keccak_256 = (()=>gen(0x01, 136, 256 / 8))();
/** keccak-384 hash function. */ exports.keccak_384 = (()=>gen(0x01, 104, 384 / 8))();
/** keccak-512 hash function. */ exports.keccak_512 = (()=>gen(0x01, 72, 512 / 8))();
const genShake = (suffix, blockLen, outputLen)=>(0, utils_ts_1.createXOFer)(function() {
        let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true);
    });
/** SHAKE128 XOF with 128-bit security. */ exports.shake128 = (()=>genShake(0x1f, 168, 128 / 8))();
/** SHAKE256 XOF with 256-bit security. */ exports.shake256 = (()=>genShake(0x1f, 136, 256 / 8))(); //# sourceMappingURL=sha3.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/_md.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA512_IV = exports.SHA384_IV = exports.SHA224_IV = exports.SHA256_IV = exports.HashMD = void 0;
exports.setBigUint64 = setBigUint64;
exports.Chi = Chi;
exports.Maj = Maj;
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */ const utils_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */ function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
/** Choice: a ? b : c */ function Chi(a, b, c) {
    return a & b ^ ~a & c;
}
/** Majority function, true if any two inputs is true. */ function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
}
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */ class HashMD extends utils_ts_1.Hash {
    update(data) {
        (0, utils_ts_1.aexists)(this);
        data = (0, utils_ts_1.toBytes)(data);
        (0, utils_ts_1.abytes)(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_ts_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, utils_ts_1.aexists)(this);
        (0, utils_ts_1.aoutput)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        (0, utils_ts_1.clean)(this.buffer.subarray(pos));
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_ts_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_ts_1.createView)(this.buffer);
    }
}
exports.HashMD = HashMD;
/**
 * Initial SHA-2 state: fractional parts of square roots of first 16 primes 2..53.
 * Check out `test/misc/sha2-gen-iv.js` for recomputation guide.
 */ /** Initial SHA256 state. Bits 0..32 of frac part of sqrt of primes 2..19 */ exports.SHA256_IV = Uint32Array.from([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
/** Initial SHA224 state. Bits 32..64 of frac part of sqrt of primes 23..53 */ exports.SHA224_IV = Uint32Array.from([
    0xc1059ed8,
    0x367cd507,
    0x3070dd17,
    0xf70e5939,
    0xffc00b31,
    0x68581511,
    0x64f98fa7,
    0xbefa4fa4
]);
/** Initial SHA384 state. Bits 0..64 of frac part of sqrt of primes 23..53 */ exports.SHA384_IV = Uint32Array.from([
    0xcbbb9d5d,
    0xc1059ed8,
    0x629a292a,
    0x367cd507,
    0x9159015a,
    0x3070dd17,
    0x152fecd8,
    0xf70e5939,
    0x67332667,
    0xffc00b31,
    0x8eb44a87,
    0x68581511,
    0xdb0c2e0d,
    0x64f98fa7,
    0x47b5481d,
    0xbefa4fa4
]);
/** Initial SHA512 state. Bits 0..64 of frac part of sqrt of primes 2..19 */ exports.SHA512_IV = Uint32Array.from([
    0x6a09e667,
    0xf3bcc908,
    0xbb67ae85,
    0x84caa73b,
    0x3c6ef372,
    0xfe94f82b,
    0xa54ff53a,
    0x5f1d36f1,
    0x510e527f,
    0xade682d1,
    0x9b05688c,
    0x2b3e6c1f,
    0x1f83d9ab,
    0xfb41bd6b,
    0x5be0cd19,
    0x137e2179
]); //# sourceMappingURL=_md.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/sha2.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha512_224 = exports.sha512_256 = exports.sha384 = exports.sha512 = exports.sha224 = exports.sha256 = exports.SHA512_256 = exports.SHA512_224 = exports.SHA384 = exports.SHA512 = exports.SHA224 = exports.SHA256 = void 0;
/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */ const _md_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/_md.js [app-client] (ecmascript)");
const u64 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/_u64.js [app-client] (ecmascript)");
const utils_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */ // prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/** Reusable temporary buffer. "W" comes straight from spec. */ const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends _md_ts_1.HashMD {
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_ts_1.rotr)(W15, 7) ^ (0, utils_ts_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_ts_1.rotr)(W2, 17) ^ (0, utils_ts_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_ts_1.rotr)(E, 6) ^ (0, utils_ts_1.rotr)(E, 11) ^ (0, utils_ts_1.rotr)(E, 25);
            const T1 = H + sigma1 + (0, _md_ts_1.Chi)(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_ts_1.rotr)(A, 2) ^ (0, utils_ts_1.rotr)(A, 13) ^ (0, utils_ts_1.rotr)(A, 22);
            const T2 = sigma0 + (0, _md_ts_1.Maj)(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        (0, utils_ts_1.clean)(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, utils_ts_1.clean)(this.buffer);
    }
    constructor(outputLen = 32){
        super(64, outputLen, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = _md_ts_1.SHA256_IV[0] | 0;
        this.B = _md_ts_1.SHA256_IV[1] | 0;
        this.C = _md_ts_1.SHA256_IV[2] | 0;
        this.D = _md_ts_1.SHA256_IV[3] | 0;
        this.E = _md_ts_1.SHA256_IV[4] | 0;
        this.F = _md_ts_1.SHA256_IV[5] | 0;
        this.G = _md_ts_1.SHA256_IV[6] | 0;
        this.H = _md_ts_1.SHA256_IV[7] | 0;
    }
}
exports.SHA256 = SHA256;
class SHA224 extends SHA256 {
    constructor(){
        super(28);
        this.A = _md_ts_1.SHA224_IV[0] | 0;
        this.B = _md_ts_1.SHA224_IV[1] | 0;
        this.C = _md_ts_1.SHA224_IV[2] | 0;
        this.D = _md_ts_1.SHA224_IV[3] | 0;
        this.E = _md_ts_1.SHA224_IV[4] | 0;
        this.F = _md_ts_1.SHA224_IV[5] | 0;
        this.G = _md_ts_1.SHA224_IV[6] | 0;
        this.H = _md_ts_1.SHA224_IV[7] | 0;
    }
}
exports.SHA224 = SHA224;
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (()=>u64.split([
        '0x428a2f98d728ae22',
        '0x7137449123ef65cd',
        '0xb5c0fbcfec4d3b2f',
        '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538',
        '0x59f111f1b605d019',
        '0x923f82a4af194f9b',
        '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242',
        '0x12835b0145706fbe',
        '0x243185be4ee4b28c',
        '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f',
        '0x80deb1fe3b1696b1',
        '0x9bdc06a725c71235',
        '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2',
        '0xefbe4786384f25e3',
        '0x0fc19dc68b8cd5b5',
        '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275',
        '0x4a7484aa6ea6e483',
        '0x5cb0a9dcbd41fbd4',
        '0x76f988da831153b5',
        '0x983e5152ee66dfab',
        '0xa831c66d2db43210',
        '0xb00327c898fb213f',
        '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2',
        '0xd5a79147930aa725',
        '0x06ca6351e003826f',
        '0x142929670a0e6e70',
        '0x27b70a8546d22ffc',
        '0x2e1b21385c26c926',
        '0x4d2c6dfc5ac42aed',
        '0x53380d139d95b3df',
        '0x650a73548baf63de',
        '0x766a0abb3c77b2a8',
        '0x81c2c92e47edaee6',
        '0x92722c851482353b',
        '0xa2bfe8a14cf10364',
        '0xa81a664bbc423001',
        '0xc24b8b70d0f89791',
        '0xc76c51a30654be30',
        '0xd192e819d6ef5218',
        '0xd69906245565a910',
        '0xf40e35855771202a',
        '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8',
        '0x1e376c085141ab53',
        '0x2748774cdf8eeb99',
        '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63',
        '0x4ed8aa4ae3418acb',
        '0x5b9cca4f7763e373',
        '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc',
        '0x78a5636f43172f60',
        '0x84c87814a1f0ab72',
        '0x8cc702081a6439ec',
        '0x90befffa23631e28',
        '0xa4506cebde82bde9',
        '0xbef9a3f7b2c67915',
        '0xc67178f2e372532b',
        '0xca273eceea26619c',
        '0xd186b8c721c0c207',
        '0xeada7dd6cde0eb1e',
        '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba',
        '0x0a637dc5a2c898a6',
        '0x113f9804bef90dae',
        '0x1b710b35131c471b',
        '0x28db77f523047d84',
        '0x32caab7b40c72493',
        '0x3c9ebe0a15c9bebc',
        '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6',
        '0x597f299cfc657e2a',
        '0x5fcb6fab3ad6faec',
        '0x6c44198c4a475817'
    ].map((n)=>BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (()=>K512[0])();
const SHA512_Kl = /* @__PURE__ */ (()=>K512[1])();
// Reusable temporary buffers
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends _md_ts_1.HashMD {
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
            const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
            const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
            const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
            const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = u64.add3L(T1l, sigma0l, MAJl);
            Ah = u64.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, utils_ts_1.clean)(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        (0, utils_ts_1.clean)(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    constructor(outputLen = 64){
        super(128, outputLen, 16, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = _md_ts_1.SHA512_IV[0] | 0;
        this.Al = _md_ts_1.SHA512_IV[1] | 0;
        this.Bh = _md_ts_1.SHA512_IV[2] | 0;
        this.Bl = _md_ts_1.SHA512_IV[3] | 0;
        this.Ch = _md_ts_1.SHA512_IV[4] | 0;
        this.Cl = _md_ts_1.SHA512_IV[5] | 0;
        this.Dh = _md_ts_1.SHA512_IV[6] | 0;
        this.Dl = _md_ts_1.SHA512_IV[7] | 0;
        this.Eh = _md_ts_1.SHA512_IV[8] | 0;
        this.El = _md_ts_1.SHA512_IV[9] | 0;
        this.Fh = _md_ts_1.SHA512_IV[10] | 0;
        this.Fl = _md_ts_1.SHA512_IV[11] | 0;
        this.Gh = _md_ts_1.SHA512_IV[12] | 0;
        this.Gl = _md_ts_1.SHA512_IV[13] | 0;
        this.Hh = _md_ts_1.SHA512_IV[14] | 0;
        this.Hl = _md_ts_1.SHA512_IV[15] | 0;
    }
}
exports.SHA512 = SHA512;
class SHA384 extends SHA512 {
    constructor(){
        super(48);
        this.Ah = _md_ts_1.SHA384_IV[0] | 0;
        this.Al = _md_ts_1.SHA384_IV[1] | 0;
        this.Bh = _md_ts_1.SHA384_IV[2] | 0;
        this.Bl = _md_ts_1.SHA384_IV[3] | 0;
        this.Ch = _md_ts_1.SHA384_IV[4] | 0;
        this.Cl = _md_ts_1.SHA384_IV[5] | 0;
        this.Dh = _md_ts_1.SHA384_IV[6] | 0;
        this.Dl = _md_ts_1.SHA384_IV[7] | 0;
        this.Eh = _md_ts_1.SHA384_IV[8] | 0;
        this.El = _md_ts_1.SHA384_IV[9] | 0;
        this.Fh = _md_ts_1.SHA384_IV[10] | 0;
        this.Fl = _md_ts_1.SHA384_IV[11] | 0;
        this.Gh = _md_ts_1.SHA384_IV[12] | 0;
        this.Gl = _md_ts_1.SHA384_IV[13] | 0;
        this.Hh = _md_ts_1.SHA384_IV[14] | 0;
        this.Hl = _md_ts_1.SHA384_IV[15] | 0;
    }
}
exports.SHA384 = SHA384;
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See `test/misc/sha2-gen-iv.js`.
 */ /** SHA512/224 IV */ const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8,
    0x19544da2,
    0x73e19966,
    0x89dcd4d6,
    0x1dfab7ae,
    0x32ff9c82,
    0x679dd514,
    0x582f9fcf,
    0x0f6d2b69,
    0x7bd44da8,
    0x77e36f73,
    0x04c48942,
    0x3f9d85a8,
    0x6a1d36c8,
    0x1112e6ad,
    0x91d692a1
]);
/** SHA512/256 IV */ const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194,
    0xfc2bf72c,
    0x9f555fa3,
    0xc84c64c2,
    0x2393b86b,
    0x6f53b151,
    0x96387719,
    0x5940eabd,
    0x96283ee2,
    0xa88effe3,
    0xbe5e1e25,
    0x53863992,
    0x2b0199fc,
    0x2c85b8aa,
    0x0eb72ddc,
    0x81c52ca2
]);
class SHA512_224 extends SHA512 {
    constructor(){
        super(28);
        this.Ah = T224_IV[0] | 0;
        this.Al = T224_IV[1] | 0;
        this.Bh = T224_IV[2] | 0;
        this.Bl = T224_IV[3] | 0;
        this.Ch = T224_IV[4] | 0;
        this.Cl = T224_IV[5] | 0;
        this.Dh = T224_IV[6] | 0;
        this.Dl = T224_IV[7] | 0;
        this.Eh = T224_IV[8] | 0;
        this.El = T224_IV[9] | 0;
        this.Fh = T224_IV[10] | 0;
        this.Fl = T224_IV[11] | 0;
        this.Gh = T224_IV[12] | 0;
        this.Gl = T224_IV[13] | 0;
        this.Hh = T224_IV[14] | 0;
        this.Hl = T224_IV[15] | 0;
    }
}
exports.SHA512_224 = SHA512_224;
class SHA512_256 extends SHA512 {
    constructor(){
        super(32);
        this.Ah = T256_IV[0] | 0;
        this.Al = T256_IV[1] | 0;
        this.Bh = T256_IV[2] | 0;
        this.Bl = T256_IV[3] | 0;
        this.Ch = T256_IV[4] | 0;
        this.Cl = T256_IV[5] | 0;
        this.Dh = T256_IV[6] | 0;
        this.Dl = T256_IV[7] | 0;
        this.Eh = T256_IV[8] | 0;
        this.El = T256_IV[9] | 0;
        this.Fh = T256_IV[10] | 0;
        this.Fl = T256_IV[11] | 0;
        this.Gh = T256_IV[12] | 0;
        this.Gl = T256_IV[13] | 0;
        this.Hh = T256_IV[14] | 0;
        this.Hl = T256_IV[15] | 0;
    }
}
exports.SHA512_256 = SHA512_256;
/**
 * SHA2-256 hash function from RFC 4634.
 *
 * It is the fastest JS hash, even faster than Blake3.
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 */ exports.sha256 = (0, utils_ts_1.createHasher)(()=>new SHA256());
/** SHA2-224 hash function from RFC 4634 */ exports.sha224 = (0, utils_ts_1.createHasher)(()=>new SHA224());
/** SHA2-512 hash function from RFC 4634. */ exports.sha512 = (0, utils_ts_1.createHasher)(()=>new SHA512());
/** SHA2-384 hash function from RFC 4634. */ exports.sha384 = (0, utils_ts_1.createHasher)(()=>new SHA384());
/**
 * SHA2-512/256 "truncated" hash function, with improved resistance to length extension attacks.
 * See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
 */ exports.sha512_256 = (0, utils_ts_1.createHasher)(()=>new SHA512_256());
/**
 * SHA2-512/224 "truncated" hash function, with improved resistance to length extension attacks.
 * See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
 */ exports.sha512_224 = (0, utils_ts_1.createHasher)(()=>new SHA512_224()); //# sourceMappingURL=sha2.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/hmac.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmac = exports.HMAC = void 0;
/**
 * HMAC: RFC2104 message authentication code.
 * @module
 */ const utils_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
class HMAC extends utils_ts_1.Hash {
    update(buf) {
        (0, utils_ts_1.aexists)(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, utils_ts_1.aexists)(this);
        (0, utils_ts_1.abytes)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        (0, utils_ts_1.ahash)(hash);
        const key = (0, utils_ts_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        (0, utils_ts_1.clean)(pad);
    }
}
exports.HMAC = HMAC;
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 * @example
 * import { hmac } from '@noble/hashes/hmac';
 * import { sha256 } from '@noble/hashes/sha2';
 * const mac1 = hmac(sha256, 'key', 'message');
 */ const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
exports.hmac = hmac;
exports.hmac.create = (hash, key)=>new HMAC(hash, key); //# sourceMappingURL=hmac.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/sha256.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.SHA224 = exports.sha256 = exports.SHA256 = void 0;
/**
 * SHA2-256 a.k.a. sha256. In JS, it is the fastest hash, even faster than Blake3.
 *
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 *
 * Check out [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 * @deprecated
 */ const sha2_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/sha2.js [app-client] (ecmascript)");
/** @deprecated Use import from `noble/hashes/sha2` module */ exports.SHA256 = sha2_ts_1.SHA256;
/** @deprecated Use import from `noble/hashes/sha2` module */ exports.sha256 = sha2_ts_1.sha256;
/** @deprecated Use import from `noble/hashes/sha2` module */ exports.SHA224 = sha2_ts_1.SHA224;
/** @deprecated Use import from `noble/hashes/sha2` module */ exports.sha224 = sha2_ts_1.sha224; //# sourceMappingURL=sha256.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/legacy.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = exports.RIPEMD160 = exports.md5 = exports.MD5 = exports.sha1 = exports.SHA1 = void 0;
/**

SHA1 (RFC 3174), MD5 (RFC 1321) and RIPEMD160 (RFC 2286) legacy, weak hash functions.
Don't use them in a new protocol. What "weak" means:

- Collisions can be made with 2^18 effort in MD5, 2^60 in SHA1, 2^80 in RIPEMD160.
- No practical pre-image attacks (only theoretical, 2^123.4)
- HMAC seems kinda ok: https://datatracker.ietf.org/doc/html/rfc6151
 * @module
 */ const _md_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/_md.js [app-client] (ecmascript)");
const utils_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
/** Initial SHA1 state */ const SHA1_IV = /* @__PURE__ */ Uint32Array.from([
    0x67452301,
    0xefcdab89,
    0x98badcfe,
    0x10325476,
    0xc3d2e1f0
]);
// Reusable temporary buffer
const SHA1_W = /* @__PURE__ */ new Uint32Array(80);
/** SHA1 legacy hash class. */ class SHA1 extends _md_ts_1.HashMD {
    get() {
        const { A, B, C, D, E } = this;
        return [
            A,
            B,
            C,
            D,
            E
        ];
    }
    set(A, B, C, D, E) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)SHA1_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 80; i++)SHA1_W[i] = (0, utils_ts_1.rotl)(SHA1_W[i - 3] ^ SHA1_W[i - 8] ^ SHA1_W[i - 14] ^ SHA1_W[i - 16], 1);
        // Compression function main loop, 80 rounds
        let { A, B, C, D, E } = this;
        for(let i = 0; i < 80; i++){
            let F, K;
            if (i < 20) {
                F = (0, _md_ts_1.Chi)(B, C, D);
                K = 0x5a827999;
            } else if (i < 40) {
                F = B ^ C ^ D;
                K = 0x6ed9eba1;
            } else if (i < 60) {
                F = (0, _md_ts_1.Maj)(B, C, D);
                K = 0x8f1bbcdc;
            } else {
                F = B ^ C ^ D;
                K = 0xca62c1d6;
            }
            const T = (0, utils_ts_1.rotl)(A, 5) + F + E + K + SHA1_W[i] | 0;
            E = D;
            D = C;
            C = (0, utils_ts_1.rotl)(B, 30);
            B = A;
            A = T;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        this.set(A, B, C, D, E);
    }
    roundClean() {
        (0, utils_ts_1.clean)(SHA1_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0);
        (0, utils_ts_1.clean)(this.buffer);
    }
    constructor(){
        super(64, 20, 8, false);
        this.A = SHA1_IV[0] | 0;
        this.B = SHA1_IV[1] | 0;
        this.C = SHA1_IV[2] | 0;
        this.D = SHA1_IV[3] | 0;
        this.E = SHA1_IV[4] | 0;
    }
}
exports.SHA1 = SHA1;
/** SHA1 (RFC 3174) legacy hash function. It was cryptographically broken. */ exports.sha1 = (0, utils_ts_1.createHasher)(()=>new SHA1());
/** Per-round constants */ const p32 = /* @__PURE__ */ Math.pow(2, 32);
const K = /* @__PURE__ */ Array.from({
    length: 64
}, (_, i)=>Math.floor(p32 * Math.abs(Math.sin(i + 1))));
/** md5 initial state: same as sha1, but 4 u32 instead of 5. */ const MD5_IV = /* @__PURE__ */ SHA1_IV.slice(0, 4);
// Reusable temporary buffer
const MD5_W = /* @__PURE__ */ new Uint32Array(16);
/** MD5 legacy hash class. */ class MD5 extends _md_ts_1.HashMD {
    get() {
        const { A, B, C, D } = this;
        return [
            A,
            B,
            C,
            D
        ];
    }
    set(A, B, C, D) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)MD5_W[i] = view.getUint32(offset, true);
        // Compression function main loop, 64 rounds
        let { A, B, C, D } = this;
        for(let i = 0; i < 64; i++){
            let F, g, s;
            if (i < 16) {
                F = (0, _md_ts_1.Chi)(B, C, D);
                g = i;
                s = [
                    7,
                    12,
                    17,
                    22
                ];
            } else if (i < 32) {
                F = (0, _md_ts_1.Chi)(D, B, C);
                g = (5 * i + 1) % 16;
                s = [
                    5,
                    9,
                    14,
                    20
                ];
            } else if (i < 48) {
                F = B ^ C ^ D;
                g = (3 * i + 5) % 16;
                s = [
                    4,
                    11,
                    16,
                    23
                ];
            } else {
                F = C ^ (B | ~D);
                g = 7 * i % 16;
                s = [
                    6,
                    10,
                    15,
                    21
                ];
            }
            F = F + A + K[i] + MD5_W[g];
            A = D;
            D = C;
            C = B;
            B = B + (0, utils_ts_1.rotl)(F, s[i % 4]);
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        this.set(A, B, C, D);
    }
    roundClean() {
        (0, utils_ts_1.clean)(MD5_W);
    }
    destroy() {
        this.set(0, 0, 0, 0);
        (0, utils_ts_1.clean)(this.buffer);
    }
    constructor(){
        super(64, 16, 8, true);
        this.A = MD5_IV[0] | 0;
        this.B = MD5_IV[1] | 0;
        this.C = MD5_IV[2] | 0;
        this.D = MD5_IV[3] | 0;
    }
}
exports.MD5 = MD5;
/**
 * MD5 (RFC 1321) legacy hash function. It was cryptographically broken.
 * MD5 architecture is similar to SHA1, with some differences:
 * - Reduced output length: 16 bytes (128 bit) instead of 20
 * - 64 rounds, instead of 80
 * - Little-endian: could be faster, but will require more code
 * - Non-linear index selection: huge speed-up for unroll
 * - Per round constants: more memory accesses, additional speed-up for unroll
 */ exports.md5 = (0, utils_ts_1.createHasher)(()=>new MD5());
// RIPEMD-160
const Rho160 = /* @__PURE__ */ Uint8Array.from([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const Id160 = /* @__PURE__ */ (()=>Uint8Array.from(new Array(16).fill(0).map((_, i)=>i)))();
const Pi160 = /* @__PURE__ */ (()=>Id160.map((i)=>(9 * i + 5) % 16))();
const idxLR = /* @__PURE__ */ (()=>{
    const L = [
        Id160
    ];
    const R = [
        Pi160
    ];
    const res = [
        L,
        R
    ];
    for(let i = 0; i < 4; i++)for (let j of res)j.push(j[i].map((k)=>Rho160[k]));
    return res;
})();
const idxL = /* @__PURE__ */ (()=>idxLR[0])();
const idxR = /* @__PURE__ */ (()=>idxLR[1])();
// const [idxL, idxR] = idxLR;
const shifts160 = /* @__PURE__ */ [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>Uint8Array.from(i));
const shiftsL160 = /* @__PURE__ */ idxL.map((idx, i)=>idx.map((j)=>shifts160[i][j]));
const shiftsR160 = /* @__PURE__ */ idxR.map((idx, i)=>idx.map((j)=>shifts160[i][j]));
const Kl160 = /* @__PURE__ */ Uint32Array.from([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const Kr160 = /* @__PURE__ */ Uint32Array.from([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// It's called f() in spec.
function ripemd_f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    if (group === 1) return x & y | ~x & z;
    if (group === 2) return (x | ~y) ^ z;
    if (group === 3) return x & z | y & ~z;
    return x ^ (y | ~z);
}
// Reusable temporary buffer
const BUF_160 = /* @__PURE__ */ new Uint32Array(16);
class RIPEMD160 extends _md_ts_1.HashMD {
    get() {
        const { h0, h1, h2, h3, h4 } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)BUF_160[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = Kl160[group], hbr = Kr160[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL160[group], sr = shiftsR160[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = (0, utils_ts_1.rotl)(al + ripemd_f(group, bl, cl, dl) + BUF_160[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = (0, utils_ts_1.rotl)(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = (0, utils_ts_1.rotl)(ar + ripemd_f(rGroup, br, cr, dr) + BUF_160[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = (0, utils_ts_1.rotl)(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        (0, utils_ts_1.clean)(BUF_160);
    }
    destroy() {
        this.destroyed = true;
        (0, utils_ts_1.clean)(this.buffer);
        this.set(0, 0, 0, 0, 0);
    }
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 0x67452301 | 0;
        this.h1 = 0xefcdab89 | 0;
        this.h2 = 0x98badcfe | 0;
        this.h3 = 0x10325476 | 0;
        this.h4 = 0xc3d2e1f0 | 0;
    }
}
exports.RIPEMD160 = RIPEMD160;
/**
 * RIPEMD-160 - a legacy hash function from 1990s.
 * * https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
 * * https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
 */ exports.ripemd160 = (0, utils_ts_1.createHasher)(()=>new RIPEMD160()); //# sourceMappingURL=legacy.js.map
}),
"[project]/giftpicker/node_modules/@noble/hashes/ripemd160.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = exports.RIPEMD160 = void 0;
/**
 * RIPEMD-160 legacy hash function.
 * https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
 * https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
 * @module
 * @deprecated
 */ const legacy_ts_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@noble/hashes/legacy.js [app-client] (ecmascript)");
/** @deprecated Use import from `noble/hashes/legacy` module */ exports.RIPEMD160 = legacy_ts_1.RIPEMD160;
/** @deprecated Use import from `noble/hashes/legacy` module */ exports.ripemd160 = legacy_ts_1.ripemd160; //# sourceMappingURL=ripemd160.js.map
}),
"[project]/giftpicker/node_modules/isows/_esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNativeWebSocket",
    ()=>getNativeWebSocket
]);
function getNativeWebSocket() {
    if (typeof WebSocket !== "undefined") return WebSocket;
    if (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket !== "undefined") return /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket;
    if (typeof window.WebSocket !== "undefined") return window.WebSocket;
    if (typeof self.WebSocket !== "undefined") return self.WebSocket;
    throw new Error("`WebSocket` is not supported in this environment");
} //# sourceMappingURL=utils.js.map
}),
"[project]/giftpicker/node_modules/isows/_esm/native.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocket",
    ()=>WebSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$isows$2f$_esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/isows/_esm/utils.js [app-client] (ecmascript)");
;
const WebSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$isows$2f$_esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeWebSocket"])(); //# sourceMappingURL=native.js.map
}),
"[project]/giftpicker/node_modules/events/events.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
} else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target);
    };
}
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        }
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) {
            // Note: The comments on the `throw` lines are intentional, they show
            // up in Node's output if this results in an unhandled exception.
            throw er; // Unhandled 'error' event
        }
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') {
        ReflectApply(handler, this, args);
    } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] = prepend ? [
                listener,
                existing
            ] : [
                existing,
                listener
            ];
        // If we've already got an array, just append.
        } else if (prepend) {
            existing.unshift(listener);
        } else {
            existing.push(listener);
        }
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--){
            if (list[i] === listener || list[i].listener === listener) {
                originalListener = list[i].listener;
                position = i;
                break;
            }
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else {
            spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
    } else if (listeners !== undefined) {
        // LIFO order
        for(i = listeners.length - 1; i >= 0; i--){
            this.removeListener(type, listeners[i]);
        }
    }
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
    } else {
        return listenerCount.call(emitter, type);
    }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') {
            return 1;
        } else if (evlistener !== undefined) {
            return evlistener.length;
        }
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i){
        ret[i] = arr[i].listener || arr[i];
    }
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') {
                emitter.removeListener('error', errorListener);
            }
            resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') {
            addErrorHandlerIfEventEmitter(emitter, errorListener, {
                once: true
            });
        }
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') {
        eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
    }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) {
            emitter.once(name, listener);
        } else {
            emitter.on(name, listener);
        }
    } else if (typeof emitter.addEventListener === 'function') {
        // EventTarget does not have `error` event semantics like Node
        // EventEmitters, we do not listen for `error` events here.
        emitter.addEventListener(name, function wrapListener(arg) {
            // IE does not have builtin `{ once: true }` support so we
            // have to do it manually.
            if (flags.once) {
                emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
        });
    } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
}
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-provider/dist/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.numberToHex = exports.getLowerCase = void 0;
function getLowerCase(value) {
    if (value) {
        return value.toLowerCase();
    }
    return value;
}
exports.getLowerCase = getLowerCase;
function numberToHex(value) {
    return "0x".concat(value.toString(16));
}
exports.numberToHex = numberToHex; //# sourceMappingURL=utils.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-provider/dist/provider.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeAppProvider = void 0;
const safe_apps_sdk_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-sdk/dist/cjs/index.js [app-client] (ecmascript)");
const events_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/events/events.js [app-client] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-provider/dist/utils.js [app-client] (ecmascript)");
// The API is based on Ethereum JavaScript API Provider Standard. Link: https://eips.ethereum.org/EIPS/eip-1193
class SafeAppProvider extends events_1.EventEmitter {
    async connect() {
        this.emit('connect', {
            chainId: this.chainId
        });
        return;
    }
    async disconnect() {
        return;
    }
    get chainId() {
        return this.safe.chainId;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async request(request) {
        const { method, params = [] } = request;
        switch(method){
            case 'eth_accounts':
                return [
                    this.safe.safeAddress
                ];
            case 'net_version':
            case 'eth_chainId':
                return (0, utils_1.numberToHex)(this.chainId);
            case 'personal_sign':
                {
                    const [message, address] = params;
                    if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase()) {
                        throw new Error('The address or message hash is invalid');
                    }
                    const response = await this.sdk.txs.signMessage(message);
                    const signature = 'signature' in response ? response.signature : undefined;
                    return signature || '0x';
                }
            case 'eth_sign':
                {
                    const [address, messageHash] = params;
                    if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase() || !messageHash.startsWith('0x')) {
                        throw new Error('The address or message hash is invalid');
                    }
                    const response = await this.sdk.txs.signMessage(messageHash);
                    const signature = 'signature' in response ? response.signature : undefined;
                    return signature || '0x';
                }
            case 'eth_signTypedData':
            case 'eth_signTypedData_v4':
                {
                    const [address, typedData] = params;
                    const parsedTypedData = typeof typedData === 'string' ? JSON.parse(typedData) : typedData;
                    if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase()) {
                        throw new Error('The address is invalid');
                    }
                    const response = await this.sdk.txs.signTypedMessage(parsedTypedData);
                    const signature = 'signature' in response ? response.signature : undefined;
                    return signature || '0x';
                }
            case 'eth_sendTransaction':
                // `value` or `data` can be explicitly set as `undefined` for example in Viem. The spread will overwrite the fallback value.
                const tx = {
                    ...params[0],
                    value: params[0].value || '0',
                    data: params[0].data || '0x'
                };
                // Some ethereum libraries might pass the gas as a hex-encoded string
                // We need to convert it to a number because the SDK expects a number and our backend only supports
                // Decimal numbers
                if (typeof tx.gas === 'string' && tx.gas.startsWith('0x')) {
                    tx.gas = parseInt(tx.gas, 16);
                }
                const resp = await this.sdk.txs.send({
                    txs: [
                        tx
                    ],
                    params: {
                        safeTxGas: tx.gas
                    }
                });
                // Store fake transaction
                this.submittedTxs.set(resp.safeTxHash, {
                    from: this.safe.safeAddress,
                    hash: resp.safeTxHash,
                    gas: 0,
                    gasPrice: '0x00',
                    nonce: 0,
                    input: tx.data,
                    value: tx.value,
                    to: tx.to,
                    blockHash: null,
                    blockNumber: null,
                    transactionIndex: null
                });
                return resp.safeTxHash;
            case 'eth_blockNumber':
                const block = await this.sdk.eth.getBlockByNumber([
                    'latest'
                ]);
                return block.number;
            case 'eth_getBalance':
                return this.sdk.eth.getBalance([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1]
                ]);
            case 'eth_getCode':
                return this.sdk.eth.getCode([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1]
                ]);
            case 'eth_getTransactionCount':
                return this.sdk.eth.getTransactionCount([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1]
                ]);
            case 'eth_getStorageAt':
                return this.sdk.eth.getStorageAt([
                    (0, utils_1.getLowerCase)(params[0]),
                    params[1],
                    params[2]
                ]);
            case 'eth_getBlockByNumber':
                return this.sdk.eth.getBlockByNumber([
                    params[0],
                    params[1]
                ]);
            case 'eth_getBlockByHash':
                return this.sdk.eth.getBlockByHash([
                    params[0],
                    params[1]
                ]);
            case 'eth_getTransactionByHash':
                let txHash = params[0];
                try {
                    const resp = await this.sdk.txs.getBySafeTxHash(txHash);
                    txHash = resp.txHash || txHash;
                } catch (e) {}
                // Use fake transaction if we don't have a real tx hash
                if (this.submittedTxs.has(txHash)) {
                    return this.submittedTxs.get(txHash);
                }
                return this.sdk.eth.getTransactionByHash([
                    txHash
                ]).then((tx)=>{
                    // We set the tx hash to the one requested, as some provider assert this
                    if (tx) {
                        tx.hash = params[0];
                    }
                    return tx;
                });
            case 'eth_getTransactionReceipt':
                {
                    let txHash = params[0];
                    try {
                        const resp = await this.sdk.txs.getBySafeTxHash(txHash);
                        txHash = resp.txHash || txHash;
                    } catch (e) {}
                    return this.sdk.eth.getTransactionReceipt([
                        txHash
                    ]).then((tx)=>{
                        // We set the tx hash to the one requested, as some provider assert this
                        if (tx) {
                            tx.transactionHash = params[0];
                        }
                        return tx;
                    });
                }
            case 'eth_estimateGas':
                {
                    return this.sdk.eth.getEstimateGas(params[0]);
                }
            case 'eth_call':
                {
                    return this.sdk.eth.call([
                        params[0],
                        params[1]
                    ]);
                }
            case 'eth_getLogs':
                return this.sdk.eth.getPastLogs([
                    params[0]
                ]);
            case 'eth_gasPrice':
                return this.sdk.eth.getGasPrice();
            case 'wallet_getPermissions':
                return this.sdk.wallet.getPermissions();
            case 'wallet_requestPermissions':
                return this.sdk.wallet.requestPermissions(params[0]);
            case 'safe_setSettings':
                return this.sdk.eth.setSafeSettings([
                    params[0]
                ]);
            case 'wallet_sendCalls':
                {
                    const { from, calls, chainId } = params[0];
                    if (chainId !== (0, utils_1.numberToHex)(this.chainId)) {
                        throw new Error("Safe is not on chain ".concat(chainId));
                    }
                    if (from !== this.safe.safeAddress) {
                        throw Error('Invalid from address');
                    }
                    const txs = calls.map((call, i)=>{
                        if (!call.to) {
                            throw new Error("Invalid call #".concat(i, ': missing "to" field'));
                        }
                        var _call_data, _call_value;
                        return {
                            to: call.to,
                            data: (_call_data = call.data) !== null && _call_data !== void 0 ? _call_data : '0x',
                            value: (_call_value = call.value) !== null && _call_value !== void 0 ? _call_value : (0, utils_1.numberToHex)(0)
                        };
                    });
                    const { safeTxHash } = await this.sdk.txs.send({
                        txs
                    });
                    const result = {
                        id: safeTxHash
                    };
                    return result;
                }
            case 'wallet_getCallsStatus':
                {
                    var _tx_txData_dataDecoded, _tx_txData, _tx_txData_dataDecoded_parameters__valueDecoded, _tx_txData_dataDecoded_parameters;
                    const safeTxHash = params[0];
                    const CallStatus = {
                        [safe_apps_sdk_1.TransactionStatus.AWAITING_CONFIRMATIONS]: 100,
                        [safe_apps_sdk_1.TransactionStatus.AWAITING_EXECUTION]: 100,
                        [safe_apps_sdk_1.TransactionStatus.SUCCESS]: 200,
                        [safe_apps_sdk_1.TransactionStatus.CANCELLED]: 400,
                        [safe_apps_sdk_1.TransactionStatus.FAILED]: 500
                    };
                    const tx = await this.sdk.txs.getBySafeTxHash(safeTxHash);
                    const result = {
                        version: '1.0',
                        id: safeTxHash,
                        chainId: (0, utils_1.numberToHex)(this.chainId),
                        status: CallStatus[tx.txStatus]
                    };
                    // Transaction is queued
                    if (!tx.txHash) {
                        return result;
                    }
                    // If transaction is executing, receipt is null
                    const receipt = await this.sdk.eth.getTransactionReceipt([
                        tx.txHash
                    ]);
                    if (!receipt) {
                        return result;
                    }
                    var _tx_txData_dataDecoded_parameters__valueDecoded_length;
                    const calls = ((_tx_txData = tx.txData) === null || _tx_txData === void 0 ? void 0 : (_tx_txData_dataDecoded = _tx_txData.dataDecoded) === null || _tx_txData_dataDecoded === void 0 ? void 0 : _tx_txData_dataDecoded.method) !== 'multiSend' ? 1 : (_tx_txData_dataDecoded_parameters__valueDecoded_length = (_tx_txData_dataDecoded_parameters = tx.txData.dataDecoded.parameters) === null || _tx_txData_dataDecoded_parameters === void 0 ? void 0 : (_tx_txData_dataDecoded_parameters__valueDecoded = _tx_txData_dataDecoded_parameters[0].valueDecoded) === null || _tx_txData_dataDecoded_parameters__valueDecoded === void 0 ? void 0 : _tx_txData_dataDecoded_parameters__valueDecoded.length) !== null && _tx_txData_dataDecoded_parameters__valueDecoded_length !== void 0 ? _tx_txData_dataDecoded_parameters__valueDecoded_length : 1;
                    // Typed as number; is hex
                    const blockNumber = Number(receipt.blockNumber);
                    const gasUsed = Number(receipt.gasUsed);
                    result.receipts = Array(calls).fill({
                        logs: receipt.logs,
                        status: (0, utils_1.numberToHex)(tx.txStatus === safe_apps_sdk_1.TransactionStatus.SUCCESS ? 1 : 0),
                        blockHash: receipt.blockHash,
                        blockNumber: (0, utils_1.numberToHex)(blockNumber),
                        gasUsed: (0, utils_1.numberToHex)(gasUsed),
                        transactionHash: tx.txHash
                    });
                    return result;
                }
            case 'wallet_showCallsStatus':
                {
                    // Cannot open transaction details page via SDK
                    throw new Error('"'.concat(request.method, '" not supported'));
                }
            case 'wallet_getCapabilities':
                {
                    return {
                        [(0, utils_1.numberToHex)(this.chainId)]: {
                            atomicBatch: {
                                supported: true
                            }
                        }
                    };
                }
            default:
                throw Error('"'.concat(request.method, '" not implemented'));
        }
    }
    // this method is needed for ethers v4
    // https://github.com/ethers-io/ethers.js/blob/427e16826eb15d52d25c4f01027f8db22b74b76c/src.ts/providers/web3-provider.ts#L41-L55
    send(request, callback) {
        if (!request) callback('Undefined request');
        this.request(request).then((result)=>callback(null, {
                jsonrpc: '2.0',
                id: request.id,
                result
            })).catch((error)=>callback(error, null));
    }
    constructor(safe, sdk){
        super();
        this.submittedTxs = new Map();
        this.safe = safe;
        this.sdk = sdk;
    }
}
exports.SafeAppProvider = SafeAppProvider; //# sourceMappingURL=provider.js.map
}),
"[project]/giftpicker/node_modules/@safe-global/safe-apps-provider/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeAppProvider = void 0;
var provider_1 = __turbopack_context__.r("[project]/giftpicker/node_modules/@safe-global/safe-apps-provider/dist/provider.js [app-client] (ecmascript)");
Object.defineProperty(exports, "SafeAppProvider", {
    enumerable: true,
    get: function() {
        return provider_1.SafeAppProvider;
    }
}); //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=50ead_7fe448ab._.js.map