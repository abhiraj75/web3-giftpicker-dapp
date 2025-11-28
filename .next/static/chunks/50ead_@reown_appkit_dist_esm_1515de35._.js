(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WcConstantsUtil",
    ()=>WcConstantsUtil
]);
const WcConstantsUtil = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5000,
    ERROR_INVALID_CHAIN_ID: 32603,
    DEFAULT_ALLOWED_ANCESTORS: [
        'http://localhost:*',
        'https://*.pages.dev',
        'https://*.vercel.app',
        'https://*.ngrok-free.app',
        'https://secure-mobile.walletconnect.com',
        'https://secure-mobile.walletconnect.org'
    ]
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineChain",
    ()=>defineChain
]);
function defineChain(chain) {
    return {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain
    };
} //# sourceMappingURL=utils.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solana.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solana",
    ()=>solana
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/utils.js [app-client] (ecmascript)");
;
const solana = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    name: 'Solana',
    network: 'solana-mainnet',
    nativeCurrency: {
        name: 'Solana',
        symbol: 'SOL',
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.walletconnect.org/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Solscan',
            url: 'https://solscan.io'
        }
    },
    testnet: false,
    chainNamespace: 'solana',
    caipNetworkId: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    deprecatedCaipNetworkId: 'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ'
}); //# sourceMappingURL=solana.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solanaDevnet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solanaDevnet",
    ()=>solanaDevnet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/utils.js [app-client] (ecmascript)");
;
const solanaDevnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    name: 'Solana Devnet',
    network: 'solana-devnet',
    nativeCurrency: {
        name: 'Solana',
        symbol: 'SOL',
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.walletconnect.org/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Solscan',
            url: 'https://solscan.io'
        }
    },
    testnet: true,
    chainNamespace: 'solana',
    caipNetworkId: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    deprecatedCaipNetworkId: 'solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K'
}); //# sourceMappingURL=solanaDevnet.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solanaTestnet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solanaTestnet",
    ()=>solanaTestnet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/utils.js [app-client] (ecmascript)");
;
const solanaTestnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    name: 'Solana Testnet',
    network: 'solana-testnet',
    nativeCurrency: {
        name: 'Solana',
        symbol: 'SOL',
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.walletconnect.org/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Solscan',
            url: 'https://solscan.io'
        }
    },
    testnet: true,
    chainNamespace: 'solana',
    caipNetworkId: 'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z'
}); //# sourceMappingURL=solanaTestnet.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solana.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solanaDevnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solanaDevnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solanaTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solanaTestnet.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/bitcoin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bitcoin",
    ()=>bitcoin,
    "bitcoinTestnet",
    ()=>bitcoinTestnet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/utils.js [app-client] (ecmascript)");
;
const bitcoin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: '000000000019d6689c085ae165831e93',
    caipNetworkId: 'bip122:000000000019d6689c085ae165831e93',
    chainNamespace: 'bip122',
    name: 'Bitcoin',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.walletconnect.org/v1'
            ]
        }
    }
});
const bitcoinTestnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: '000000000933ea01ad0ee984209779ba',
    caipNetworkId: 'bip122:000000000933ea01ad0ee984209779ba',
    chainNamespace: 'bip122',
    name: 'Bitcoin Testnet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.walletconnect.org/v1'
            ]
        }
    },
    testnet: true
}); //# sourceMappingURL=bitcoin.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// -- Networks ---------------------------------------------------------------
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$bitcoin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/bitcoin.js [app-client] (ecmascript)");
// -- Utils ------------------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/utils.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/HelpersUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_METHODS",
    ()=>DEFAULT_METHODS,
    "WcHelpersUtil",
    ()=>WcHelpersUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EnsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EnsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solana.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solanaDevnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/networks/solana/solanaDevnet.js [app-client] (ecmascript)");
;
;
const DEFAULT_METHODS = {
    solana: [
        'solana_signMessage',
        'solana_signTransaction',
        'solana_requestAccounts',
        'solana_getAccounts',
        'solana_signAllTransactions',
        'solana_signAndSendTransaction'
    ],
    eip155: [
        'eth_accounts',
        'eth_requestAccounts',
        'eth_sendRawTransaction',
        'eth_sign',
        'eth_signTransaction',
        'eth_signTypedData',
        'eth_signTypedData_v3',
        'eth_signTypedData_v4',
        'eth_sendTransaction',
        'personal_sign',
        'wallet_switchEthereumChain',
        'wallet_addEthereumChain',
        'wallet_getPermissions',
        'wallet_requestPermissions',
        'wallet_registerOnboarding',
        'wallet_watchAsset',
        'wallet_scanQRCode',
        // EIP-5792
        'wallet_getCallsStatus',
        'wallet_showCallsStatus',
        'wallet_sendCalls',
        'wallet_getCapabilities',
        // EIP-7715
        'wallet_grantPermissions',
        'wallet_revokePermissions',
        //EIP-7811
        'wallet_getAssets'
    ],
    bip122: [
        'sendTransfer',
        'signMessage',
        'signPsbt',
        'getAccountAddresses'
    ]
};
const WcHelpersUtil = {
    getMethodsByChainNamespace (chainNamespace) {
        return DEFAULT_METHODS[chainNamespace] || [];
    },
    createDefaultNamespace (chainNamespace) {
        return {
            methods: this.getMethodsByChainNamespace(chainNamespace),
            events: [
                'accountsChanged',
                'chainChanged'
            ],
            chains: [],
            rpcMap: {}
        };
    },
    applyNamespaceOverrides (baseNamespaces, overrides) {
        if (!overrides) {
            return {
                ...baseNamespaces
            };
        }
        const result = {
            ...baseNamespaces
        };
        const namespacesToOverride = new Set();
        if (overrides.methods) {
            Object.keys(overrides.methods).forEach((ns)=>namespacesToOverride.add(ns));
        }
        if (overrides.chains) {
            Object.keys(overrides.chains).forEach((ns)=>namespacesToOverride.add(ns));
        }
        if (overrides.events) {
            Object.keys(overrides.events).forEach((ns)=>namespacesToOverride.add(ns));
        }
        if (overrides.rpcMap) {
            Object.keys(overrides.rpcMap).forEach((chainId)=>{
                const [ns] = chainId.split(':');
                if (ns) {
                    namespacesToOverride.add(ns);
                }
            });
        }
        namespacesToOverride.forEach((ns)=>{
            if (!result[ns]) {
                result[ns] = this.createDefaultNamespace(ns);
            }
        });
        if (overrides.methods) {
            Object.entries(overrides.methods).forEach((param)=>{
                let [ns, methods] = param;
                if (result[ns]) {
                    result[ns].methods = methods;
                }
            });
        }
        if (overrides.chains) {
            Object.entries(overrides.chains).forEach((param)=>{
                let [ns, chains] = param;
                if (result[ns]) {
                    result[ns].chains = chains;
                }
            });
        }
        if (overrides.events) {
            Object.entries(overrides.events).forEach((param)=>{
                let [ns, events] = param;
                if (result[ns]) {
                    result[ns].events = events;
                }
            });
        }
        if (overrides.rpcMap) {
            const processedNamespaces = new Set();
            Object.entries(overrides.rpcMap).forEach((param)=>{
                let [chainId, rpcUrl] = param;
                const [ns, id] = chainId.split(':');
                if (!ns || !id || !result[ns]) {
                    return;
                }
                if (!result[ns].rpcMap) {
                    result[ns].rpcMap = {};
                }
                if (!processedNamespaces.has(ns)) {
                    result[ns].rpcMap = {};
                    processedNamespaces.add(ns);
                }
                result[ns].rpcMap[id] = rpcUrl;
            });
        }
        return result;
    },
    createNamespaces (caipNetworks, configOverride) {
        const defaultNamespaces = caipNetworks.reduce((acc, chain)=>{
            const { id, chainNamespace, rpcUrls } = chain;
            const rpcUrl = rpcUrls.default.http[0];
            if (!acc[chainNamespace]) {
                acc[chainNamespace] = this.createDefaultNamespace(chainNamespace);
            }
            const caipNetworkId = "".concat(chainNamespace, ":").concat(id);
            // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
            const namespace = acc[chainNamespace];
            namespace.chains.push(caipNetworkId);
            // Workaround for wallets that only support deprecated Solana network ID
            switch(caipNetworkId){
                case __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solana"].caipNetworkId:
                    namespace.chains.push(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solana"].deprecatedCaipNetworkId);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solanaDevnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solanaDevnet"].caipNetworkId:
                    namespace.chains.push(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$networks$2f$solana$2f$solanaDevnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solanaDevnet"].deprecatedCaipNetworkId);
                    break;
                default:
            }
            if ((namespace === null || namespace === void 0 ? void 0 : namespace.rpcMap) && rpcUrl) {
                namespace.rpcMap[id] = rpcUrl;
            }
            return acc;
        }, {});
        return this.applyNamespaceOverrides(defaultNamespaces, configOverride);
    },
    resolveReownName: async (name)=>{
        var _networkNameAddresses_;
        const wcNameAddress = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EnsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsController"].resolveName(name);
        const networkNameAddresses = Object.values(wcNameAddress === null || wcNameAddress === void 0 ? void 0 : wcNameAddress.addresses) || [];
        return ((_networkNameAddresses_ = networkNameAddresses[0]) === null || _networkNameAddresses_ === void 0 ? void 0 : _networkNameAddresses_.address) || false;
    },
    getChainsFromNamespaces () {
        let namespaces = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.values(namespaces).flatMap((namespace)=>{
            const chains = namespace.chains || [];
            const accountsChains = namespace.accounts.map((account)=>{
                const [chainNamespace, chainId] = account.split(':');
                return "".concat(chainNamespace, ":").concat(chainId);
            });
            return Array.from(new Set([
                ...chains,
                ...accountsChains
            ]));
        });
    },
    isSessionEventData (data) {
        return typeof data === 'object' && data !== null && 'id' in data && 'topic' in data && 'params' in data && typeof data.params === 'object' && data.params !== null && 'chainId' in data.params && 'event' in data.params && typeof data.params.event === 'object' && data.params.event !== null;
    },
    isOriginAllowed (currentOrigin, allowedPatterns, defaultAllowedOrigins) {
        for (const pattern of [
            ...allowedPatterns,
            ...defaultAllowedOrigins
        ]){
            if (pattern.includes('*')) {
                // Convert wildcard pattern to regex, escape special chars, replace *, match whole string
                const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
                const regexString = "^".concat(escapedPattern.replace(/\\\*/gu, '.*'), "$");
                const regex = new RegExp(regexString, 'u');
                if (regex.test(currentOrigin)) {
                    return true;
                }
            } else {
                /**
                 * There are some cases where pattern is getting just the origin, where using new URL(pattern).origin will throw an error
                 * thus we a try catch to handle this case
                 */ try {
                    if (new URL(pattern).origin === currentOrigin) {
                        return true;
                    }
                } catch (e) {
                    if (pattern === currentOrigin) {
                        return true;
                    }
                }
            }
        }
        // No match found
        return false;
    }
}; //# sourceMappingURL=HelpersUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/TypesUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=TypesUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$TypesUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/TypesUtil.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/connectors/WalletConnectConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletConnectConnector",
    ()=>WalletConnectConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/node_modules/@walletconnect/universal-provider/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/HelpersUtil.js [app-client] (ecmascript)");
;
;
;
;
;
class WalletConnectConnector {
    get chains() {
        return this.getCaipNetworks();
    }
    async connectWalletConnect() {
        const isAuthenticated = await this.authenticate();
        if (!isAuthenticated) {
            const caipNetworks = this.getCaipNetworks();
            const universalProviderConfigOverride = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.universalProviderConfigOverride;
            const namespaces = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcHelpersUtil"].createNamespaces(caipNetworks, universalProviderConfigOverride);
            await this.provider.connect({
                optionalNamespaces: namespaces
            });
        }
        return {
            clientId: await this.provider.client.core.crypto.getClientId(),
            session: this.provider.session
        };
    }
    async disconnect() {
        await this.provider.disconnect();
    }
    async authenticate() {
        const chains = this.chains.map((network)=>network.caipNetworkId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIWXUtil"].universalProviderAuthenticate({
            universalProvider: this.provider,
            chains,
            methods: OPTIONAL_METHODS
        });
    }
    constructor({ provider, namespace }){
        this.id = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT;
        this.name = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorNamesMap[__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT];
        this.type = 'WALLET_CONNECT';
        this.imageId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorImageIds[__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT];
        this.getCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getCaipNetworks.bind(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"]);
        this.caipNetworks = this.getCaipNetworks();
        this.provider = provider;
        this.chain = namespace;
    }
}
const OPTIONAL_METHODS = [
    'eth_accounts',
    'eth_requestAccounts',
    'eth_sendRawTransaction',
    'eth_sign',
    'eth_signTransaction',
    'eth_signTypedData',
    'eth_signTypedData_v3',
    'eth_signTypedData_v4',
    'eth_sendTransaction',
    'personal_sign',
    'wallet_switchEthereumChain',
    'wallet_addEthereumChain',
    'wallet_getPermissions',
    'wallet_requestPermissions',
    'wallet_registerOnboarding',
    'wallet_watchAsset',
    'wallet_scanQRCode',
    // EIP-5792
    'wallet_getCallsStatus',
    'wallet_sendCalls',
    'wallet_getCapabilities',
    // EIP-7715
    'wallet_grantPermissions',
    'wallet_revokePermissions',
    //EIP-7811
    'wallet_getAssets'
]; //# sourceMappingURL=WalletConnectConnector.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/adapters/ChainAdapterBlueprint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdapterBlueprint",
    ()=>AdapterBlueprint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/node_modules/@walletconnect/universal-provider/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$connectors$2f$WalletConnectConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/connectors/WalletConnectConnector.js [app-client] (ecmascript)");
;
;
;
;
;
class AdapterBlueprint {
    /**
     * Initializes the adapter with the given parameters.
     * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
     */ construct(params) {
        this.projectId = params.projectId;
        this.namespace = params.namespace;
        this.adapterType = params.adapterType;
    }
    /**
     * Gets the available connectors.
     * @returns {Connector[]} An array of available connectors
     */ get connectors() {
        return this.availableConnectors;
    }
    /**
     * Gets the supported networks.
     * @returns {CaipNetwork[]} An array of supported networks
     */ get networks() {
        return this.getCaipNetworks(this.namespace);
    }
    /**
     * Sets the auth provider.
     * @param {W3mFrameProvider} authProvider - The auth provider instance
     */ setAuthProvider(authProvider) {
        this.addConnector({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH,
            type: 'AUTH',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_NAMES.AUTH,
            provider: authProvider,
            imageId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorImageIds[__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: []
        });
    }
    /**
     * Adds one or more connectors to the available connectors list.
     * @param {...Connector} connectors - The connectors to add
     */ addConnector() {
        for(var _len = arguments.length, connectors = new Array(_len), _key = 0; _key < _len; _key++){
            connectors[_key] = arguments[_key];
        }
        const connectorsAdded = new Set();
        this.availableConnectors = [
            ...connectors,
            ...this.availableConnectors
        ].filter((connector)=>{
            if (connectorsAdded.has(connector.id)) {
                return false;
            }
            connectorsAdded.add(connector.id);
            return true;
        });
        this.emit('connectors', this.availableConnectors);
    }
    setStatus(status, chainNamespace) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setStatus(status, chainNamespace);
    }
    /**
     * Adds an event listener for a specific event.
     * @template T
     * @param {T} eventName - The name of the event
     * @param {EventCallback<T>} callback - The callback function to be called when the event is emitted
     */ on(eventName, callback) {
        var _this_eventListeners_get;
        if (!this.eventListeners.has(eventName)) {
            this.eventListeners.set(eventName, new Set());
        }
        (_this_eventListeners_get = this.eventListeners.get(eventName)) === null || _this_eventListeners_get === void 0 ? void 0 : _this_eventListeners_get.add(callback);
    }
    /**
     * Removes an event listener for a specific event.
     * @template T
     * @param {T} eventName - The name of the event
     * @param {EventCallback<T>} callback - The callback function to be removed
     */ off(eventName, callback) {
        const listeners = this.eventListeners.get(eventName);
        if (listeners) {
            listeners.delete(callback);
        }
    }
    /**
     * Removes all event listeners.
     */ removeAllEventListeners() {
        this.eventListeners.forEach((listeners)=>{
            listeners.clear();
        });
    }
    /**
     * Emits an event with the given name and optional data.
     * @template T
     * @param {T} eventName - The name of the event to emit
     * @param {EventData[T]} [data] - The optional data to be passed to the event listeners
     */ emit(eventName, data) {
        const listeners = this.eventListeners.get(eventName);
        if (listeners) {
            listeners.forEach((callback)=>callback(data));
        }
    }
    /**
     * Connects to WalletConnect.
     * @param {number | string} [_chainId] - Optional chain ID to connect to
     */ async connectWalletConnect(_chainId) {
        const connector = this.getWalletConnectConnector();
        const result = await connector.connectWalletConnect();
        return {
            clientId: result.clientId
        };
    }
    /**
     * Switches the network.
     * @param {AdapterBlueprint.SwitchNetworkParams} params - Network switching parameters
     */ async switchNetwork(params) {
        const { caipNetwork, providerType } = params;
        if (!params.provider) {
            return;
        }
        const provider = 'provider' in params.provider ? params.provider.provider : params.provider;
        if (providerType === 'WALLET_CONNECT') {
            ;
            provider.setDefaultChain(caipNetwork.caipNetworkId);
            return;
        }
        if (provider && providerType === 'AUTH') {
            var _AccountController_state_preferredAccountTypes;
            const authProvider = provider;
            const preferredAccountType = (_AccountController_state_preferredAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.preferredAccountTypes) === null || _AccountController_state_preferredAccountTypes === void 0 ? void 0 : _AccountController_state_preferredAccountTypes[caipNetwork.chainNamespace];
            await authProvider.switchNetwork(caipNetwork.caipNetworkId);
            const user = await authProvider.getUser({
                chainId: caipNetwork.caipNetworkId,
                preferredAccountType
            });
            this.emit('switchNetwork', user);
        }
    }
    getWalletConnectConnector() {
        const connector = this.connectors.find((c)=>c instanceof __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$connectors$2f$WalletConnectConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectConnector"]);
        if (!connector) {
            throw new Error('WalletConnectConnector not found');
        }
        return connector;
    }
    /**
     * Creates an instance of AdapterBlueprint.
     * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
     */ constructor(params){
        this.availableConnectors = [];
        this.eventListeners = new Map();
        this.getCaipNetworks = (namespace)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getCaipNetworks(namespace);
        if (params) {
            this.construct(params);
        }
    }
} //# sourceMappingURL=ChainAdapterBlueprint.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/universal-adapter/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalAdapter",
    ()=>UniversalAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$adapters$2f$ChainAdapterBlueprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/adapters/ChainAdapterBlueprint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$connectors$2f$WalletConnectConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/connectors/WalletConnectConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class UniversalAdapter extends __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$adapters$2f$ChainAdapterBlueprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdapterBlueprint"] {
    setUniversalProvider(universalProvider) {
        this.addConnector(new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$connectors$2f$WalletConnectConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectConnector"]({
            provider: universalProvider,
            caipNetworks: this.getCaipNetworks(),
            namespace: this.namespace
        }));
    }
    async connect(params) {
        return Promise.resolve({
            id: 'WALLET_CONNECT',
            type: 'WALLET_CONNECT',
            chainId: Number(params.chainId),
            provider: this.provider,
            address: ''
        });
    }
    async disconnect() {
        try {
            const connector = this.getWalletConnectConnector();
            await connector.disconnect();
        } catch (error) {
            console.warn('UniversalAdapter:disconnect - error', error);
        }
    }
    async getAccounts(param) {
        let { namespace } = param;
        var _provider_session_namespaces_namespace_accounts, _provider_session_namespaces_namespace, _provider_session_namespaces, _provider_session;
        const provider = this.provider;
        const addresses = (provider === null || provider === void 0 ? void 0 : (_provider_session = provider.session) === null || _provider_session === void 0 ? void 0 : (_provider_session_namespaces = _provider_session.namespaces) === null || _provider_session_namespaces === void 0 ? void 0 : (_provider_session_namespaces_namespace = _provider_session_namespaces[namespace]) === null || _provider_session_namespaces_namespace === void 0 ? void 0 : (_provider_session_namespaces_namespace_accounts = _provider_session_namespaces_namespace.accounts) === null || _provider_session_namespaces_namespace_accounts === void 0 ? void 0 : _provider_session_namespaces_namespace_accounts.map((account)=>{
            const [, , address] = account.split(':');
            return address;
        }).filter((address, index, self)=>self.indexOf(address) === index)) || [];
        return Promise.resolve({
            accounts: addresses.map((address)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].createAccount(namespace, address, namespace === 'bip122' ? 'payment' : 'eoa'))
        });
    }
    async syncConnectors() {
        return Promise.resolve();
    }
    async getBalance(params) {
        var _params_caipNetwork, _params_caipNetwork1, _ChainController_state_activeCaipNetwork, _params_caipNetwork2;
        const isBalanceSupported = params.caipNetwork && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BALANCE_SUPPORTED_CHAINS.includes((_params_caipNetwork = params.caipNetwork) === null || _params_caipNetwork === void 0 ? void 0 : _params_caipNetwork.chainNamespace);
        if (!isBalanceSupported || ((_params_caipNetwork1 = params.caipNetwork) === null || _params_caipNetwork1 === void 0 ? void 0 : _params_caipNetwork1.testnet)) {
            var _params_caipNetwork3;
            return {
                balance: '0.00',
                symbol: ((_params_caipNetwork3 = params.caipNetwork) === null || _params_caipNetwork3 === void 0 ? void 0 : _params_caipNetwork3.nativeCurrency.symbol) || ''
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.balanceLoading && params.chainId === ((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.id)) {
            return {
                balance: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.balance || '0.00',
                symbol: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.balanceSymbol || ''
            };
        }
        const balances = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].fetchTokenBalance();
        const balance = balances.find((b)=>{
            var _params_caipNetwork, _params_caipNetwork1;
            return b.chainId === "".concat((_params_caipNetwork = params.caipNetwork) === null || _params_caipNetwork === void 0 ? void 0 : _params_caipNetwork.chainNamespace, ":").concat(params.chainId) && b.symbol === ((_params_caipNetwork1 = params.caipNetwork) === null || _params_caipNetwork1 === void 0 ? void 0 : _params_caipNetwork1.nativeCurrency.symbol);
        });
        return {
            balance: (balance === null || balance === void 0 ? void 0 : balance.quantity.numeric) || '0.00',
            symbol: (balance === null || balance === void 0 ? void 0 : balance.symbol) || ((_params_caipNetwork2 = params.caipNetwork) === null || _params_caipNetwork2 === void 0 ? void 0 : _params_caipNetwork2.nativeCurrency.symbol) || ''
        };
    }
    async signMessage(params) {
        var _ChainController_state_activeCaipNetwork;
        const { provider, message, address } = params;
        if (!provider) {
            throw new Error('UniversalAdapter:signMessage - provider is undefined');
        }
        let signature = '';
        if (((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.chainNamespace) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.SOLANA) {
            var _ChainController_state_activeCaipNetwork1;
            const response = await provider.request({
                method: 'solana_signMessage',
                params: {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(new TextEncoder().encode(message)),
                    pubkey: address
                }
            }, (_ChainController_state_activeCaipNetwork1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork1 === void 0 ? void 0 : _ChainController_state_activeCaipNetwork1.caipNetworkId);
            signature = response.signature;
        } else {
            var _ChainController_state_activeCaipNetwork2;
            signature = await provider.request({
                method: 'personal_sign',
                params: [
                    message,
                    address
                ]
            }, (_ChainController_state_activeCaipNetwork2 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork2 === void 0 ? void 0 : _ChainController_state_activeCaipNetwork2.caipNetworkId);
        }
        return {
            signature
        };
    }
    // -- Transaction methods ---------------------------------------------------
    /**
     *
     * These methods are supported only on `wagmi` and `ethers` since the Solana SDK does not support them in the same way.
     * These function definition is to have a type parity between the clients. Currently not in use.
     */ async estimateGas() {
        return Promise.resolve({
            gas: BigInt(0)
        });
    }
    async sendTransaction() {
        return Promise.resolve({
            hash: ''
        });
    }
    walletGetAssets(_params) {
        return Promise.resolve({});
    }
    async writeContract() {
        return Promise.resolve({
            hash: ''
        });
    }
    parseUnits() {
        return 0n;
    }
    formatUnits() {
        return '0';
    }
    async getCapabilities() {
        return Promise.resolve({});
    }
    async grantPermissions() {
        return Promise.resolve({});
    }
    async revokePermissions() {
        return Promise.resolve('0x');
    }
    async syncConnection() {
        return Promise.resolve({
            id: 'WALLET_CONNECT',
            type: 'WALLET_CONNECT',
            chainId: 1,
            provider: this.provider,
            address: ''
        });
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async switchNetwork(params) {
        const { caipNetwork } = params;
        const connector = this.getWalletConnectConnector();
        if (caipNetwork.chainNamespace === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM) {
            try {
                var _connector_provider;
                await ((_connector_provider = connector.provider) === null || _connector_provider === void 0 ? void 0 : _connector_provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [
                        {
                            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(caipNetwork.id)
                        }
                    ]
                }));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (switchError) {
                var _switchError_data_originalError, _switchError_data;
                if (switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_INVALID_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_CODE_DEFAULT || (switchError === null || switchError === void 0 ? void 0 : (_switchError_data = switchError.data) === null || _switchError_data === void 0 ? void 0 : (_switchError_data_originalError = _switchError_data.originalError) === null || _switchError_data_originalError === void 0 ? void 0 : _switchError_data_originalError.code) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                    try {
                        var _caipNetwork_rpcUrls_chainDefault, _caipNetwork_blockExplorers, _connector_provider1;
                        await ((_connector_provider1 = connector.provider) === null || _connector_provider1 === void 0 ? void 0 : _connector_provider1.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(caipNetwork.id),
                                    rpcUrls: [
                                        caipNetwork === null || caipNetwork === void 0 ? void 0 : (_caipNetwork_rpcUrls_chainDefault = caipNetwork.rpcUrls['chainDefault']) === null || _caipNetwork_rpcUrls_chainDefault === void 0 ? void 0 : _caipNetwork_rpcUrls_chainDefault.http
                                    ],
                                    chainName: caipNetwork.name,
                                    nativeCurrency: caipNetwork.nativeCurrency,
                                    blockExplorerUrls: [
                                        (_caipNetwork_blockExplorers = caipNetwork.blockExplorers) === null || _caipNetwork_blockExplorers === void 0 ? void 0 : _caipNetwork_blockExplorers.default.url
                                    ]
                                }
                            ]
                        }));
                    } catch (error) {
                        throw new Error('Chain is not supported');
                    }
                }
            }
        }
        connector.provider.setDefaultChain(caipNetwork.caipNetworkId);
    }
    getWalletConnectProvider() {
        const connector = this.connectors.find((c)=>c.type === 'WALLET_CONNECT');
        const provider = connector === null || connector === void 0 ? void 0 : connector.provider;
        return provider;
    }
} //# sourceMappingURL=client.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/ConfigUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigUtil",
    ()=>ConfigUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const FEATURE_KEYS = [
    'email',
    'socials',
    'swaps',
    'onramp',
    'activity',
    'reownBranding'
];
const featureConfig = {
    email: {
        apiFeatureName: 'social_login',
        localFeatureName: 'email',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig)=>{
            if (!(apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.config)) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.includes('email');
        },
        processFallback: (localValue)=>{
            if (localValue === undefined) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.email;
            }
            return Boolean(localValue);
        }
    },
    socials: {
        apiFeatureName: 'social_login',
        localFeatureName: 'socials',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig)=>{
            if (!(apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.config)) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.length > 0 ? config.filter((s)=>s !== 'email') : false;
        },
        processFallback: (localValue)=>{
            if (localValue === undefined) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.socials;
            }
            if (typeof localValue === 'boolean') {
                return localValue ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.socials : false;
            }
            return localValue;
        }
    },
    swaps: {
        apiFeatureName: 'swap',
        localFeatureName: 'swaps',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig)=>{
            if (!(apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.config)) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
        },
        processFallback: (localValue)=>{
            if (localValue === undefined) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.swaps;
            }
            if (typeof localValue === 'boolean') {
                return localValue ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.swaps : false;
            }
            return localValue;
        }
    },
    onramp: {
        apiFeatureName: 'onramp',
        localFeatureName: 'onramp',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig)=>{
            if (!(apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.config)) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
        },
        processFallback: (localValue)=>{
            if (localValue === undefined) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.onramp;
            }
            if (typeof localValue === 'boolean') {
                return localValue ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.onramp : false;
            }
            return localValue;
        }
    },
    activity: {
        apiFeatureName: 'activity',
        localFeatureName: 'history',
        returnType: false,
        isLegacy: true,
        isAvailableOnBasic: false,
        processApi: (apiConfig)=>Boolean(apiConfig.isEnabled),
        processFallback: (localValue)=>{
            if (localValue === undefined) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.activity;
            }
            return Boolean(localValue);
        }
    },
    reownBranding: {
        apiFeatureName: 'reown_branding',
        localFeatureName: 'reownBranding',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig)=>Boolean(apiConfig.isEnabled),
        processFallback: (localValue)=>{
            if (localValue === undefined) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES.reownBranding;
            }
            return Boolean(localValue);
        }
    }
};
const ConfigUtil = {
    localSettingsOverridden: new Set(),
    getApiConfig (id, apiProjectConfig) {
        return apiProjectConfig === null || apiProjectConfig === void 0 ? void 0 : apiProjectConfig.find((f)=>f.id === id);
    },
    addWarning (localFeatureValue, featureKey) {
        if (localFeatureValue !== undefined) {
            const config = featureConfig[featureKey];
            const warningName = config.isLegacy ? '"features.'.concat(config.localFeatureName, '" (now "').concat(featureKey, '")') : '"features.'.concat(featureKey, '"');
            this.localSettingsOverridden.add(warningName);
        }
    },
    processFeature (featureKey, localFeatures, apiProjectConfig, useApi, isBasic) {
        const config = featureConfig[featureKey];
        const localValue = localFeatures[config.localFeatureName];
        if (isBasic && !config.isAvailableOnBasic) {
            return false;
        }
        if (useApi) {
            const apiConfig = this.getApiConfig(config.apiFeatureName, apiProjectConfig);
            if ((apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.config) === null) {
                return this.processFallbackFeature(featureKey, localValue);
            }
            if (!(apiConfig === null || apiConfig === void 0 ? void 0 : apiConfig.config)) {
                return false;
            }
            if (localValue !== undefined) {
                this.addWarning(localValue, featureKey);
            }
            return this.processApiFeature(featureKey, apiConfig);
        }
        return this.processFallbackFeature(featureKey, localValue);
    },
    processApiFeature (featureKey, apiConfig) {
        return featureConfig[featureKey].processApi(apiConfig);
    },
    processFallbackFeature (featureKey, localValue) {
        return featureConfig[featureKey].processFallback(localValue);
    },
    async fetchRemoteFeatures (config) {
        var _config_basic;
        const isBasic = (_config_basic = config.basic) !== null && _config_basic !== void 0 ? _config_basic : false;
        const localFeatures = config.features || {};
        this.localSettingsOverridden.clear();
        let apiProjectConfig = null;
        let useApiConfig = false;
        try {
            apiProjectConfig = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchProjectConfig();
            useApiConfig = apiProjectConfig !== null && apiProjectConfig !== undefined;
        } catch (e) {
            console.warn('[Reown Config] Failed to fetch remote project configuration. Using local/default values.', e);
        }
        const remoteFeaturesConfig = useApiConfig && !isBasic ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES : __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES_DISABLED;
        try {
            for (const featureKey of FEATURE_KEYS){
                const result = this.processFeature(featureKey, localFeatures, apiProjectConfig, useApiConfig, isBasic);
                Object.assign(remoteFeaturesConfig, {
                    [featureKey]: result
                });
            }
        } catch (e) {
            console.warn('[Reown Config] Failed to process the configuration from Cloud. Using default values.', e);
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_REMOTE_FEATURES;
        }
        if (useApiConfig && this.localSettingsOverridden.size > 0) {
            const warningMessage = "Your local configuration for ".concat(Array.from(this.localSettingsOverridden).join(', '), " was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.");
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertController"].open({
                shortMessage: 'Local configuration ignored',
                longMessage: "[Reown Config Notice] ".concat(warningMessage)
            }, 'warning');
        }
        return remoteFeaturesConfig;
    }
}; //# sourceMappingURL=ConfigUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/client/appkit-base-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppKitBaseClient",
    ()=>AppKitBaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/node_modules/@walletconnect/universal-provider/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EnsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EnsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OnRampController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OnRampController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SendController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SendController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$exports$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/ErrorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$LoggerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/LoggerUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-utils/dist/esm/src/ProviderUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$universal$2d$adapter$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/universal-adapter/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConfigUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/ConfigUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/utils/HelpersUtil.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class AppKitBaseClient {
    getChainNamespacesSet(adapters, caipNetworks) {
        const adapterNamespaces = adapters === null || adapters === void 0 ? void 0 : adapters.map((adapter)=>adapter.namespace).filter((namespace)=>Boolean(namespace));
        if (adapterNamespaces === null || adapterNamespaces === void 0 ? void 0 : adapterNamespaces.length) {
            return [
                ...new Set(adapterNamespaces)
            ];
        }
        const networkNamespaces = caipNetworks === null || caipNetworks === void 0 ? void 0 : caipNetworks.map((network)=>network.chainNamespace);
        return [
            ...new Set(networkNamespaces)
        ];
    }
    async initialize(options) {
        var _OptionsController_state_remoteFeatures, _OptionsController_state_remoteFeatures1, _OptionsController_state_remoteFeatures2;
        this.initializeProjectSettings(options);
        this.initControllers(options);
        await this.initChainAdapters();
        this.sendInitializeEvent(options);
        await this.syncExistingConnection();
        this.remoteFeatures = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConfigUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigUtil"].fetchRemoteFeatures(options);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setRemoteFeatures(this.remoteFeatures);
        if (this.remoteFeatures.onramp) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OnRampController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnRampController"].setOnrampProviders(this.remoteFeatures.onramp);
        }
        // Check allowed origins only if email or social features are enabled
        if (((_OptionsController_state_remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures) === null || _OptionsController_state_remoteFeatures === void 0 ? void 0 : _OptionsController_state_remoteFeatures.email) || Array.isArray((_OptionsController_state_remoteFeatures1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures) === null || _OptionsController_state_remoteFeatures1 === void 0 ? void 0 : _OptionsController_state_remoteFeatures1.socials) && ((_OptionsController_state_remoteFeatures2 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures) === null || _OptionsController_state_remoteFeatures2 === void 0 ? void 0 : _OptionsController_state_remoteFeatures2.socials.length) > 0) {
            await this.checkAllowedOrigins();
        }
    }
    async checkAllowedOrigins() {
        const allowedOrigins = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchAllowedOrigins();
        if (allowedOrigins && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isClient()) {
            const currentOrigin = window.location.origin;
            const isOriginAllowed = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcHelpersUtil"].isOriginAllowed(currentOrigin, allowedOrigins, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].DEFAULT_ALLOWED_ANCESTORS);
            if (!isOriginAllowed) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertController"].open(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].ALERT_ERRORS.INVALID_APP_CONFIGURATION, 'error');
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertController"].open(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, 'error');
        }
    }
    sendInitializeEvent(options) {
        var _options_siweConfig;
        const { ...optionsCopy } = options;
        delete optionsCopy.adapters;
        delete optionsCopy.universalProvider;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'INITIALIZE',
            properties: {
                ...optionsCopy,
                networks: options.networks.map((n)=>n.id),
                siweConfig: {
                    options: ((_options_siweConfig = options.siweConfig) === null || _options_siweConfig === void 0 ? void 0 : _options_siweConfig.options) || {}
                }
            }
        });
    }
    // -- Controllers initialization ---------------------------------------------------
    initControllers(options) {
        this.initializeOptionsController(options);
        this.initializeChainController(options);
        this.initializeThemeController(options);
        this.initializeConnectionController(options);
        this.initializeConnectorController();
    }
    initializeThemeController(options) {
        if (options.themeMode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeMode(options.themeMode);
        }
        if (options.themeVariables) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeVariables(options.themeVariables);
        }
    }
    initializeChainController(options) {
        if (!this.connectionControllerClient || !this.networkControllerClient) {
            throw new Error('ConnectionControllerClient and NetworkControllerClient must be set');
        }
        var _options_adapters;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].initialize((_options_adapters = options.adapters) !== null && _options_adapters !== void 0 ? _options_adapters : [], this.caipNetworks, {
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient
        });
        const network = this.getDefaultNetwork();
        if (network) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setActiveCaipNetwork(network);
        }
    }
    initializeConnectionController(options) {
        var _options_basic;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcBasic((_options_basic = options.basic) !== null && _options_basic !== void 0 ? _options_basic : false);
    }
    initializeConnectorController() {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].initialize(this.chainNamespaces);
    }
    initializeProjectSettings(options) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setProjectId(options.projectId);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setSdkVersion(options.sdkVersion);
    }
    initializeOptionsController(options) {
        var _options_adapters;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setDebug(options.debug !== false);
        // On by default
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableWalletConnect(options.enableWalletConnect !== false);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableWalletGuide(options.enableWalletGuide !== false);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableWallets(options.enableWallets !== false);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEIP6963Enabled(options.enableEIP6963 !== false);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableNetworkSwitch(options.enableNetworkSwitch !== false);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableAuthLogger(options.enableAuthLogger !== false);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setCustomRpcUrls(options.customRpcUrls);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableEmbedded(options.enableEmbedded);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setAllWallets(options.allWallets);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setIncludeWalletIds(options.includeWalletIds);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setExcludeWalletIds(options.excludeWalletIds);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setFeaturedWalletIds(options.featuredWalletIds);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setTokens(options.tokens);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setTermsConditionsUrl(options.termsConditionsUrl);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setPrivacyPolicyUrl(options.privacyPolicyUrl);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setCustomWallets(options.customWallets);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setFeatures(options.features);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setAllowUnsupportedChain(options.allowUnsupportedChain);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setUniversalProviderConfigOverride(options.universalProviderConfigOverride);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setPreferUniversalLinks(options.experimental_preferUniversalLinks);
        // Save option in controller
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setDefaultAccountTypes(options.defaultAccountTypes);
        // Get stored account types
        const storedAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getPreferredAccountTypes() || {};
        const defaultTypes = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.defaultAccountTypes,
            ...storedAccountTypes
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setPreferredAccountTypes(defaultTypes);
        const defaultMetaData = this.getDefaultMetaData();
        if (!options.metadata && defaultMetaData) {
            options.metadata = defaultMetaData;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setMetadata(options.metadata);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setDisableAppend(options.disableAppend);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableEmbedded(options.enableEmbedded);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setSIWX(options.siwx);
        if (!options.projectId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertController"].open(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, 'error');
            return;
        }
        const evmAdapter = (_options_adapters = options.adapters) === null || _options_adapters === void 0 ? void 0 : _options_adapters.find((adapter)=>adapter.namespace === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM);
        // Set the SIWE client for EVM chains
        if (evmAdapter) {
            if (options.siweConfig) {
                if (options.siwx) {
                    throw new Error('Cannot set both `siweConfig` and `siwx` options');
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setSIWX(options.siweConfig.mapToSIWX());
            }
        }
    }
    getDefaultMetaData() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isClient()) {
            var _document_getElementsByTagName_, _document_getElementsByTagName, _document_querySelector, _document_querySelector1;
            return {
                name: ((_document_getElementsByTagName = document.getElementsByTagName('title')) === null || _document_getElementsByTagName === void 0 ? void 0 : (_document_getElementsByTagName_ = _document_getElementsByTagName[0]) === null || _document_getElementsByTagName_ === void 0 ? void 0 : _document_getElementsByTagName_.textContent) || '',
                description: ((_document_querySelector = document.querySelector('meta[property="og:description"]')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.content) || '',
                url: window.location.origin,
                icons: [
                    ((_document_querySelector1 = document.querySelector('link[rel~="icon"]')) === null || _document_querySelector1 === void 0 ? void 0 : _document_querySelector1.href) || ''
                ]
            };
        }
        return null;
    }
    // -- Network Initialization ---------------------------------------------------
    setUnsupportedNetwork(chainId) {
        const namespace = this.getActiveChainNamespace();
        if (namespace) {
            const unsupportedNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaipNetworksUtil"].getUnsupportedNetwork("".concat(namespace, ":").concat(chainId));
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setActiveCaipNetwork(unsupportedNetwork);
        }
    }
    getDefaultNetwork() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaipNetworksUtil"].getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(network, options) {
        const extendedNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaipNetworksUtil"].extendCaipNetwork(network, {
            customNetworkImageUrls: options.chainImages,
            projectId: options.projectId
        });
        return extendedNetwork;
    }
    extendCaipNetworks(options) {
        const extendedNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaipNetworksUtil"].extendCaipNetworks(options.networks, {
            customNetworkImageUrls: options.chainImages,
            customRpcUrls: options.customRpcUrls,
            projectId: options.projectId
        });
        return extendedNetworks;
    }
    extendDefaultCaipNetwork(options) {
        const defaultNetwork = options.networks.find((n)=>{
            var _options_defaultNetwork;
            return n.id === ((_options_defaultNetwork = options.defaultNetwork) === null || _options_defaultNetwork === void 0 ? void 0 : _options_defaultNetwork.id);
        });
        const extendedNetwork = defaultNetwork ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaipNetworksUtil"].extendCaipNetwork(defaultNetwork, {
            customNetworkImageUrls: options.chainImages,
            customRpcUrls: options.customRpcUrls,
            projectId: options.projectId
        }) : undefined;
        return extendedNetwork;
    }
    async disconnectNamespace(namespace) {
        try {
            const adapter = this.getAdapter(namespace);
            const provider = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(namespace);
            const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProviderId(namespace);
            const { caipAddress } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(namespace) || {};
            this.setLoading(true, namespace);
            if (caipAddress && (adapter === null || adapter === void 0 ? void 0 : adapter.disconnect)) {
                await adapter.disconnect({
                    provider,
                    providerType
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].removeConnectedNamespace(namespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].resetChain(namespace);
            this.setUser(undefined, namespace);
            this.setStatus('disconnected', namespace);
            this.setConnectedWalletInfo(undefined, namespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].removeConnectorId(namespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].resetAccount(namespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].resetNetwork(namespace);
            this.setLoading(false, namespace);
        } catch (error) {
            this.setLoading(false, namespace);
            throw new Error("Failed to disconnect chain ".concat(namespace, ": ").concat(error.message));
        }
    }
    // -- Client Initialization ---------------------------------------------------
    createClients() {
        this.connectionControllerClient = {
            connectWalletConnect: async ()=>{
                var _this_getCaipNetwork;
                const activeChain = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
                const adapter = this.getAdapter(activeChain);
                const chainId = (_this_getCaipNetwork = this.getCaipNetwork(activeChain)) === null || _this_getCaipNetwork === void 0 ? void 0 : _this_getCaipNetwork.id;
                if (!adapter) {
                    throw new Error('Adapter not found');
                }
                const result = await adapter.connectWalletConnect(chainId);
                this.close();
                this.setClientId((result === null || result === void 0 ? void 0 : result.clientId) || null);
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setConnectedNamespaces([
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.keys()
                ]);
                this.chainNamespaces.forEach((namespace)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setConnectorId(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_WALLET_CONNECT, namespace);
                });
                await this.syncWalletConnectAccount();
            },
            connectExternal: async (param)=>{
                let { id, info, type, provider, chain, caipNetwork, socialUri } = param;
                var _caipNetwork_rpcUrls_default_http, _caipNetwork_rpcUrls_default, _caipNetwork_rpcUrls, _fallbackCaipNetwork_rpcUrls_default_http, _fallbackCaipNetwork_rpcUrls_default, _fallbackCaipNetwork_rpcUrls;
                const activeChain = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
                const chainToUse = chain || activeChain;
                const adapter = this.getAdapter(chainToUse);
                if (chain && chain !== activeChain && !caipNetwork) {
                    const toConnectNetwork = this.getCaipNetworks().find((network)=>network.chainNamespace === chain);
                    if (toConnectNetwork) {
                        this.setCaipNetwork(toConnectNetwork);
                    }
                }
                if (!adapter) {
                    throw new Error('Adapter not found');
                }
                const fallbackCaipNetwork = this.getCaipNetwork(chainToUse);
                const res = await adapter.connect({
                    id,
                    info,
                    type,
                    provider,
                    socialUri,
                    chainId: (caipNetwork === null || caipNetwork === void 0 ? void 0 : caipNetwork.id) || (fallbackCaipNetwork === null || fallbackCaipNetwork === void 0 ? void 0 : fallbackCaipNetwork.id),
                    rpcUrl: (caipNetwork === null || caipNetwork === void 0 ? void 0 : (_caipNetwork_rpcUrls = caipNetwork.rpcUrls) === null || _caipNetwork_rpcUrls === void 0 ? void 0 : (_caipNetwork_rpcUrls_default = _caipNetwork_rpcUrls.default) === null || _caipNetwork_rpcUrls_default === void 0 ? void 0 : (_caipNetwork_rpcUrls_default_http = _caipNetwork_rpcUrls_default.http) === null || _caipNetwork_rpcUrls_default_http === void 0 ? void 0 : _caipNetwork_rpcUrls_default_http[0]) || (fallbackCaipNetwork === null || fallbackCaipNetwork === void 0 ? void 0 : (_fallbackCaipNetwork_rpcUrls = fallbackCaipNetwork.rpcUrls) === null || _fallbackCaipNetwork_rpcUrls === void 0 ? void 0 : (_fallbackCaipNetwork_rpcUrls_default = _fallbackCaipNetwork_rpcUrls.default) === null || _fallbackCaipNetwork_rpcUrls_default === void 0 ? void 0 : (_fallbackCaipNetwork_rpcUrls_default_http = _fallbackCaipNetwork_rpcUrls_default.http) === null || _fallbackCaipNetwork_rpcUrls_default_http === void 0 ? void 0 : _fallbackCaipNetwork_rpcUrls_default_http[0])
                });
                if (!res) {
                    return;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].addConnectedNamespace(chainToUse);
                this.syncProvider({
                    ...res,
                    chainNamespace: chainToUse
                });
                /*
                 * SyncAllAccounts already set the accounts in the state
                 * and its more efficient to use the stored accounts rather than fetching them again
                 */ const syncedAccounts = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.allAccounts;
                const { accounts } = (syncedAccounts === null || syncedAccounts === void 0 ? void 0 : syncedAccounts.length) > 0 ? // Using new array else the accounts will have the same reference and react will not re-render
                {
                    accounts: [
                        ...syncedAccounts
                    ]
                } : await adapter.getAccounts({
                    namespace: chainToUse,
                    id
                });
                this.setAllAccounts(accounts, chainToUse);
                this.setStatus('connected', chainToUse);
                this.syncConnectedWalletInfo(chainToUse);
            },
            reconnectExternal: async (param)=>{
                let { id, info, type, provider } = param;
                const namespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
                const adapter = this.getAdapter(namespace);
                if (adapter === null || adapter === void 0 ? void 0 : adapter.reconnect) {
                    var _this_getCaipNetwork;
                    await (adapter === null || adapter === void 0 ? void 0 : adapter.reconnect({
                        id,
                        info,
                        type,
                        provider,
                        chainId: (_this_getCaipNetwork = this.getCaipNetwork()) === null || _this_getCaipNetwork === void 0 ? void 0 : _this_getCaipNetwork.id
                    }));
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].addConnectedNamespace(namespace);
                    this.syncConnectedWalletInfo(namespace);
                }
            },
            disconnect: async (chainNamespace)=>{
                const chainsToDisconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainsToDisconnect"])(chainNamespace);
                try {
                    // Reset send state when disconnecting
                    const disconnectResults = await Promise.allSettled(chainsToDisconnect.map(async (param)=>{
                        let [ns] = param;
                        return this.disconnectNamespace(ns);
                    }));
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SendController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendController"].resetSend();
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].resetWcConnection();
                    await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIWXUtil"].clearSessions();
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setFilterByNamespace(undefined);
                    const failures = disconnectResults.filter((result)=>result.status === 'rejected');
                    if (failures.length > 0) {
                        throw new Error(failures.map((f)=>f.reason.message).join(', '));
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].deleteConnectedSocialProvider();
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                        type: 'track',
                        event: 'DISCONNECT_SUCCESS',
                        properties: {
                            namespace: chainNamespace || 'all'
                        }
                    });
                } catch (error) {
                    throw new Error("Failed to disconnect chains: ".concat(error.message));
                }
            },
            checkInstalled: (ids)=>{
                if (!ids) {
                    return Boolean(window.ethereum);
                }
                return ids.some((id)=>{
                    var _window_ethereum;
                    return Boolean((_window_ethereum = window.ethereum) === null || _window_ethereum === void 0 ? void 0 : _window_ethereum[String(id)]);
                });
            },
            signMessage: async (message)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                const result = await (adapter === null || adapter === void 0 ? void 0 : adapter.signMessage({
                    message,
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address,
                    provider: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain)
                }));
                return (result === null || result === void 0 ? void 0 : result.signature) || '';
            },
            sendTransaction: async (args)=>{
                const namespace = args.chainNamespace;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SEND_SUPPORTED_NAMESPACES.includes(namespace)) {
                    const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(namespace);
                    const result = await (adapter === null || adapter === void 0 ? void 0 : adapter.sendTransaction({
                        ...args,
                        caipNetwork: this.getCaipNetwork(),
                        provider
                    }));
                    return (result === null || result === void 0 ? void 0 : result.hash) || '';
                }
                return '';
            },
            estimateGas: async (args)=>{
                if (args.chainNamespace === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM) {
                    const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                    const caipNetwork = this.getCaipNetwork();
                    if (!caipNetwork) {
                        throw new Error('CaipNetwork is undefined');
                    }
                    const result = await (adapter === null || adapter === void 0 ? void 0 : adapter.estimateGas({
                        ...args,
                        provider,
                        caipNetwork
                    }));
                    return (result === null || result === void 0 ? void 0 : result.gas) || 0n;
                }
                return 0n;
            },
            getEnsAvatar: async ()=>{
                var _this_getCaipNetwork;
                await this.syncIdentity({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address,
                    chainId: Number((_this_getCaipNetwork = this.getCaipNetwork()) === null || _this_getCaipNetwork === void 0 ? void 0 : _this_getCaipNetwork.id),
                    chainNamespace: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.profileImage || false;
            },
            getEnsAddress: async (name)=>await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcHelpersUtil"].resolveReownName(name),
            writeContract: async (args)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                const caipNetwork = this.getCaipNetwork();
                const caipAddress = this.getCaipAddress();
                const provider = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                if (!caipNetwork || !caipAddress) {
                    throw new Error('CaipNetwork or CaipAddress is undefined');
                }
                const result = await (adapter === null || adapter === void 0 ? void 0 : adapter.writeContract({
                    ...args,
                    caipNetwork,
                    provider,
                    caipAddress
                }));
                return result === null || result === void 0 ? void 0 : result.hash;
            },
            parseUnits: (value, decimals)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                var _adapter_parseUnits;
                return (_adapter_parseUnits = adapter === null || adapter === void 0 ? void 0 : adapter.parseUnits({
                    value,
                    decimals
                })) !== null && _adapter_parseUnits !== void 0 ? _adapter_parseUnits : 0n;
            },
            formatUnits: (value, decimals)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                var _adapter_formatUnits;
                return (_adapter_formatUnits = adapter === null || adapter === void 0 ? void 0 : adapter.formatUnits({
                    value,
                    decimals
                })) !== null && _adapter_formatUnits !== void 0 ? _adapter_formatUnits : '0';
            },
            getCapabilities: async (params)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                return await (adapter === null || adapter === void 0 ? void 0 : adapter.getCapabilities(params));
            },
            grantPermissions: async (params)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                return await (adapter === null || adapter === void 0 ? void 0 : adapter.grantPermissions(params));
            },
            revokePermissions: async (params)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                if (adapter === null || adapter === void 0 ? void 0 : adapter.revokePermissions) {
                    return await adapter.revokePermissions(params);
                }
                return '0x';
            },
            walletGetAssets: async (params)=>{
                const adapter = this.getAdapter(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                var _ref;
                return (_ref = await (adapter === null || adapter === void 0 ? void 0 : adapter.walletGetAssets(params))) !== null && _ref !== void 0 ? _ref : {};
            },
            updateBalance: (namespace)=>{
                const caipNetwork = this.getCaipNetwork(namespace);
                if (!caipNetwork || !__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address) {
                    return;
                }
                this.updateNativeBalance(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address, caipNetwork === null || caipNetwork === void 0 ? void 0 : caipNetwork.id, namespace);
            }
        };
        this.networkControllerClient = {
            switchCaipNetwork: async (caipNetwork)=>await this.switchCaipNetwork(caipNetwork),
            // eslint-disable-next-line @typescript-eslint/require-await
            getApprovedCaipNetworksData: async ()=>this.getApprovedCaipNetworksData()
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setClient(this.connectionControllerClient);
    }
    getApprovedCaipNetworksData() {
        const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_WALLET_CONNECT) {
            var _this_universalProvider_session, _this_universalProvider, _this_universalProvider_session_peer, _this_universalProvider_session1, _this_universalProvider1;
            const namespaces = (_this_universalProvider = this.universalProvider) === null || _this_universalProvider === void 0 ? void 0 : (_this_universalProvider_session = _this_universalProvider.session) === null || _this_universalProvider_session === void 0 ? void 0 : _this_universalProvider_session.namespaces;
            return {
                /*
                 * MetaMask Wallet only returns 1 namespace in the session object. This makes it imposible
                 * to switch to other networks. Setting supportsAllNetworks to true for MetaMask Wallet
                 * will make it possible to switch to other networks.
                 */ supportsAllNetworks: ((_this_universalProvider1 = this.universalProvider) === null || _this_universalProvider1 === void 0 ? void 0 : (_this_universalProvider_session1 = _this_universalProvider1.session) === null || _this_universalProvider_session1 === void 0 ? void 0 : (_this_universalProvider_session_peer = _this_universalProvider_session1.peer) === null || _this_universalProvider_session_peer === void 0 ? void 0 : _this_universalProvider_session_peer.metadata.name) === 'MetaMask Wallet',
                approvedCaipNetworkIds: this.getChainsFromNamespaces(namespaces)
            };
        }
        return {
            supportsAllNetworks: true,
            approvedCaipNetworkIds: []
        };
    }
    async switchCaipNetwork(caipNetwork) {
        if (!caipNetwork) {
            return;
        }
        const networkNamespace = caipNetwork.chainNamespace;
        const namespaceAddress = this.getAddressByChainNamespace(caipNetwork.chainNamespace);
        if (namespaceAddress) {
            const provider = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(networkNamespace);
            const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProviderId(networkNamespace);
            if (caipNetwork.chainNamespace === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain) {
                const adapter = this.getAdapter(networkNamespace);
                await (adapter === null || adapter === void 0 ? void 0 : adapter.switchNetwork({
                    caipNetwork,
                    provider,
                    providerType
                }));
            } else {
                this.setCaipNetwork(caipNetwork);
                if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_WALLET_CONNECT) {
                    this.syncWalletConnectAccount();
                } else {
                    const address = this.getAddressByChainNamespace(networkNamespace);
                    if (address) {
                        this.syncAccount({
                            address,
                            chainId: caipNetwork.id,
                            chainNamespace: networkNamespace
                        });
                    }
                }
            }
        } else {
            this.setCaipNetwork(caipNetwork);
        }
    }
    getChainsFromNamespaces() {
        let namespaces = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.values(namespaces).flatMap((namespace)=>{
            const chains = namespace.chains || [];
            const accountsChains = namespace.accounts.map((account)=>{
                const { chainId, chainNamespace } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipAddress(account);
                return "".concat(chainNamespace, ":").concat(chainId);
            });
            return Array.from(new Set([
                ...chains,
                ...accountsChains
            ]));
        });
    }
    // -- Adapter Initialization ---------------------------------------------------
    createAdapters(blueprints) {
        this.createClients();
        return this.chainNamespaces.reduce((adapters, namespace)=>{
            const blueprint = blueprints === null || blueprints === void 0 ? void 0 : blueprints.find((b)=>b.namespace === namespace);
            if (blueprint) {
                var _this_options;
                blueprint.construct({
                    namespace,
                    projectId: (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.projectId,
                    networks: this.getCaipNetworks()
                });
                adapters[namespace] = blueprint;
            } else {
                adapters[namespace] = new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$universal$2d$adapter$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalAdapter"]({
                    namespace: namespace,
                    networks: this.getCaipNetworks()
                });
            }
            return adapters;
        // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
        }, {});
    }
    async initChainAdapter(namespace) {
        var _this_chainAdapters;
        this.onConnectors(namespace);
        this.listenAdapter(namespace);
        await ((_this_chainAdapters = this.chainAdapters) === null || _this_chainAdapters === void 0 ? void 0 : _this_chainAdapters[namespace].syncConnectors(this.options, this));
        await this.createUniversalProviderForAdapter(namespace);
    }
    async initChainAdapters() {
        await Promise.all(this.chainNamespaces.map(async (namespace)=>{
            await this.initChainAdapter(namespace);
        }));
    }
    onConnectors(chainNamespace) {
        const adapter = this.getAdapter(chainNamespace);
        adapter === null || adapter === void 0 ? void 0 : adapter.on('connectors', this.setConnectors.bind(this));
    }
    listenAdapter(chainNamespace) {
        const adapter = this.getAdapter(chainNamespace);
        if (!adapter) {
            return;
        }
        const connectionStatus = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectionStatus();
        if (connectionStatus === 'connected') {
            this.setStatus('connecting', chainNamespace);
        } else if (connectionStatus === 'disconnected') {
            /*
             * Address cache is kept after disconnecting from the wallet
             * but should be cleared if appkit is launched in disconnected state
             */ __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].clearAddressCache();
            this.setStatus(connectionStatus, chainNamespace);
        } else {
            this.setStatus(connectionStatus, chainNamespace);
        }
        adapter.on('switchNetwork', (param)=>{
            let { address, chainId } = param;
            const caipNetwork = this.getCaipNetworks().find((n)=>n.id === chainId || n.caipNetworkId === chainId);
            const isSameNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain === chainNamespace;
            const accountAddress = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountProp('address', chainNamespace);
            if (caipNetwork) {
                const account = isSameNamespace && address ? address : accountAddress;
                if (account) {
                    this.syncAccount({
                        address: account,
                        chainId: caipNetwork.id,
                        chainNamespace
                    });
                }
            } else {
                this.setUnsupportedNetwork(chainId);
            }
        });
        adapter.on('disconnect', this.disconnect.bind(this, chainNamespace));
        adapter.on('connections', (connections)=>{
            this.setConnections(connections, chainNamespace);
        });
        adapter.on('pendingTransactions', ()=>{
            const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address;
            const activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
            if (!address || !(activeCaipNetwork === null || activeCaipNetwork === void 0 ? void 0 : activeCaipNetwork.id)) {
                return;
            }
            this.updateNativeBalance(address, activeCaipNetwork.id, activeCaipNetwork.chainNamespace);
        });
        adapter.on('accountChanged', (param)=>{
            let { address, chainId } = param;
            var _ChainController_state_activeCaipNetwork;
            const isActiveChain = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain === chainNamespace;
            if (isActiveChain && chainId) {
                this.syncAccount({
                    address,
                    chainId,
                    chainNamespace
                });
            } else if (isActiveChain && ((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.id)) {
                var _ChainController_state_activeCaipNetwork1;
                this.syncAccount({
                    address,
                    chainId: (_ChainController_state_activeCaipNetwork1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork1 === void 0 ? void 0 : _ChainController_state_activeCaipNetwork1.id,
                    chainNamespace
                });
            } else {
                this.syncAccountInfo(address, chainId, chainNamespace);
            }
            this.syncAllAccounts(chainNamespace);
        });
    }
    async createUniversalProviderForAdapter(chainNamespace) {
        await this.getUniversalProvider();
        if (this.universalProvider) {
            var _this_chainAdapters_chainNamespace_setUniversalProvider, _this_chainAdapters_chainNamespace, _this_chainAdapters;
            (_this_chainAdapters = this.chainAdapters) === null || _this_chainAdapters === void 0 ? void 0 : (_this_chainAdapters_chainNamespace = _this_chainAdapters[chainNamespace]) === null || _this_chainAdapters_chainNamespace === void 0 ? void 0 : (_this_chainAdapters_chainNamespace_setUniversalProvider = _this_chainAdapters_chainNamespace.setUniversalProvider) === null || _this_chainAdapters_chainNamespace_setUniversalProvider === void 0 ? void 0 : _this_chainAdapters_chainNamespace_setUniversalProvider.call(_this_chainAdapters_chainNamespace, this.universalProvider);
        }
    }
    // -- Connection Sync ---------------------------------------------------
    async syncExistingConnection() {
        await Promise.allSettled(this.chainNamespaces.map((namespace)=>this.syncNamespaceConnection(namespace)));
    }
    async syncNamespaceConnection(namespace) {
        try {
            if (namespace === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isSafeApp()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setConnectorId(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE, namespace);
            }
            const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(namespace);
            this.setStatus('connecting', namespace);
            switch(connectorId){
                case __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT:
                    await this.syncWalletConnectAccount();
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH:
                    break;
                default:
                    await this.syncAdapterConnection(namespace);
            }
        } catch (err) {
            console.warn("AppKit couldn't sync existing connection", err);
            this.setStatus('disconnected', namespace);
        }
    }
    async syncAdapterConnection(namespace) {
        const adapter = this.getAdapter(namespace);
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(namespace);
        const caipNetwork = this.getCaipNetwork(namespace);
        const connectors = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectors(namespace);
        const connector = connectors.find((c)=>c.id === connectorId);
        try {
            var _caipNetwork_rpcUrls_default_http, _caipNetwork_rpcUrls_default, _caipNetwork_rpcUrls;
            if (!adapter || !connector) {
                throw new Error("Adapter or connector not found for namespace ".concat(namespace));
            }
            if (!(caipNetwork === null || caipNetwork === void 0 ? void 0 : caipNetwork.id)) {
                throw new Error('CaipNetwork not found');
            }
            const connection = await (adapter === null || adapter === void 0 ? void 0 : adapter.syncConnection({
                namespace,
                id: connector.id,
                chainId: caipNetwork.id,
                rpcUrl: caipNetwork === null || caipNetwork === void 0 ? void 0 : (_caipNetwork_rpcUrls = caipNetwork.rpcUrls) === null || _caipNetwork_rpcUrls === void 0 ? void 0 : (_caipNetwork_rpcUrls_default = _caipNetwork_rpcUrls.default) === null || _caipNetwork_rpcUrls_default === void 0 ? void 0 : (_caipNetwork_rpcUrls_default_http = _caipNetwork_rpcUrls_default.http) === null || _caipNetwork_rpcUrls_default_http === void 0 ? void 0 : _caipNetwork_rpcUrls_default_http[0]
            }));
            if (connection) {
                const accounts = await (adapter === null || adapter === void 0 ? void 0 : adapter.getAccounts({
                    namespace,
                    id: connector.id
                }));
                if (accounts && accounts.accounts.length > 0) {
                    this.setAllAccounts(accounts.accounts, namespace);
                } else {
                    this.setAllAccounts([
                        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].createAccount(namespace, connection.address, 'eoa')
                    ], namespace);
                }
                this.syncProvider({
                    ...connection,
                    chainNamespace: namespace
                });
                await this.syncAccount({
                    ...connection,
                    chainNamespace: namespace
                });
                this.setStatus('connected', namespace);
            } else {
                this.setStatus('disconnected', namespace);
            }
        } catch (e) {
            this.setStatus('disconnected', namespace);
        }
    }
    async syncWalletConnectAccount() {
        const syncTasks = this.chainNamespaces.map(async (chainNamespace)=>{
            var _this_universalProvider_session_namespaces_chainNamespace, _this_universalProvider_session_namespaces, _this_universalProvider_session, _this_universalProvider, _ChainController_state_activeCaipNetwork;
            const adapter = this.getAdapter(chainNamespace);
            const namespaceAccounts = ((_this_universalProvider = this.universalProvider) === null || _this_universalProvider === void 0 ? void 0 : (_this_universalProvider_session = _this_universalProvider.session) === null || _this_universalProvider_session === void 0 ? void 0 : (_this_universalProvider_session_namespaces = _this_universalProvider_session.namespaces) === null || _this_universalProvider_session_namespaces === void 0 ? void 0 : (_this_universalProvider_session_namespaces_chainNamespace = _this_universalProvider_session_namespaces[chainNamespace]) === null || _this_universalProvider_session_namespaces_chainNamespace === void 0 ? void 0 : _this_universalProvider_session_namespaces_chainNamespace.accounts) || [];
            // We try and find the address for this network in the session object.
            const activeChainId = (_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.id;
            const sessionAddress = namespaceAccounts.find((account)=>{
                const { chainId } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipAddress(account);
                return chainId === (activeChainId === null || activeChainId === void 0 ? void 0 : activeChainId.toString());
            }) || namespaceAccounts[0];
            if (sessionAddress) {
                const caipAddress = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].validateCaipAddress(sessionAddress);
                const { chainId, address } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipAddress(caipAddress);
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].setProviderId(chainNamespace, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_WALLET_CONNECT);
                if (this.caipNetworks && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork && (adapter === null || adapter === void 0 ? void 0 : adapter.namespace) !== __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM) {
                    const provider = adapter === null || adapter === void 0 ? void 0 : adapter.getWalletConnectProvider({
                        caipNetworks: this.getCaipNetworks(),
                        provider: this.universalProvider,
                        activeCaipNetwork: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].setProvider(chainNamespace, provider);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].setProvider(chainNamespace, this.universalProvider);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setConnectorId(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT, chainNamespace);
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].addConnectedNamespace(chainNamespace);
                this.syncWalletConnectAccounts(chainNamespace);
                await this.syncAccount({
                    address,
                    chainId,
                    chainNamespace
                });
            } else {
                this.setStatus('disconnected', chainNamespace);
            }
            this.syncConnectedWalletInfo(chainNamespace);
            await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setApprovedCaipNetworksData(chainNamespace);
        });
        await Promise.all(syncTasks);
    }
    syncWalletConnectAccounts(chainNamespace) {
        var _this_universalProvider_session_namespaces_chainNamespace_accounts, _this_universalProvider_session_namespaces_chainNamespace, _this_universalProvider_session_namespaces, _this_universalProvider_session, _this_universalProvider;
        const addresses = (_this_universalProvider = this.universalProvider) === null || _this_universalProvider === void 0 ? void 0 : (_this_universalProvider_session = _this_universalProvider.session) === null || _this_universalProvider_session === void 0 ? void 0 : (_this_universalProvider_session_namespaces = _this_universalProvider_session.namespaces) === null || _this_universalProvider_session_namespaces === void 0 ? void 0 : (_this_universalProvider_session_namespaces_chainNamespace = _this_universalProvider_session_namespaces[chainNamespace]) === null || _this_universalProvider_session_namespaces_chainNamespace === void 0 ? void 0 : (_this_universalProvider_session_namespaces_chainNamespace_accounts = _this_universalProvider_session_namespaces_chainNamespace.accounts) === null || _this_universalProvider_session_namespaces_chainNamespace_accounts === void 0 ? void 0 : _this_universalProvider_session_namespaces_chainNamespace_accounts.map((account)=>{
            const { address } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipAddress(account);
            return address;
        }).filter((address, index, self)=>self.indexOf(address) === index);
        if (addresses) {
            this.setAllAccounts(addresses.map((address)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].createAccount(chainNamespace, address, chainNamespace === 'bip122' ? 'payment' : 'eoa')), chainNamespace);
        }
    }
    syncProvider(param) {
        let { type, provider, id, chainNamespace } = param;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].setProviderId(chainNamespace, type);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].setProvider(chainNamespace, provider);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setConnectorId(id, chainNamespace);
    }
    async syncAllAccounts(namespace) {
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(namespace);
        if (!connectorId) {
            return;
        }
        const adapter = this.getAdapter(namespace);
        const accounts = await (adapter === null || adapter === void 0 ? void 0 : adapter.getAccounts({
            namespace,
            id: connectorId
        }));
        if (accounts && accounts.accounts.length > 0) {
            this.setAllAccounts(accounts.accounts, namespace);
        }
    }
    async syncAccount(params) {
        var _ChainController_state_activeCaipNetwork;
        const isActiveNamespace = params.chainNamespace === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        const networkOfChain = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getCaipNetworkByNamespace(params.chainNamespace, params.chainId);
        const { address, chainId, chainNamespace } = params;
        const { chainId: activeChainId } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getActiveNetworkProps();
        const chainIdToUse = chainId || activeChainId;
        const isUnsupportedNetwork = ((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.name) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].UNSUPPORTED_NETWORK_NAME;
        const shouldSupportAllNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getNetworkProp('supportsAllNetworks', chainNamespace);
        this.setStatus('connected', chainNamespace);
        if (isUnsupportedNetwork && !shouldSupportAllNetworks) {
            return;
        }
        if (chainIdToUse) {
            let caipNetwork = this.getCaipNetworks().find((n)=>n.id.toString() === chainIdToUse.toString());
            let fallbackCaipNetwork = this.getCaipNetworks().find((n)=>n.chainNamespace === chainNamespace);
            // If doesn't support all networks, we need to use approved networks
            if (!shouldSupportAllNetworks && !caipNetwork && !fallbackCaipNetwork) {
                // Connection can be requested for a chain that is not supported by the wallet so we need to use approved networks here
                const caipNetworkIds = this.getApprovedCaipNetworkIds() || [];
                const caipNetworkId = caipNetworkIds.find((id)=>{
                    var _ParseUtil_parseCaipNetworkId;
                    return ((_ParseUtil_parseCaipNetworkId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipNetworkId(id)) === null || _ParseUtil_parseCaipNetworkId === void 0 ? void 0 : _ParseUtil_parseCaipNetworkId.chainId) === chainIdToUse.toString();
                });
                const fallBackCaipNetworkId = caipNetworkIds.find((id)=>{
                    var _ParseUtil_parseCaipNetworkId;
                    return ((_ParseUtil_parseCaipNetworkId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipNetworkId(id)) === null || _ParseUtil_parseCaipNetworkId === void 0 ? void 0 : _ParseUtil_parseCaipNetworkId.chainNamespace) === chainNamespace;
                });
                caipNetwork = this.getCaipNetworks().find((n)=>n.caipNetworkId === caipNetworkId);
                fallbackCaipNetwork = this.getCaipNetworks().find((n)=>n.caipNetworkId === fallBackCaipNetworkId || 'deprecatedCaipNetworkId' in n && n.deprecatedCaipNetworkId === fallBackCaipNetworkId);
            }
            const network = caipNetwork || fallbackCaipNetwork;
            if ((network === null || network === void 0 ? void 0 : network.chainNamespace) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain) {
                var _ChainController_state_activeCaipNetwork1;
                // If the network is unsupported and the user doesn't allow unsupported chains, we show the unsupported chain UI
                if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableNetworkSwitch && !__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.allowUnsupportedChain && ((_ChainController_state_activeCaipNetwork1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork1 === void 0 ? void 0 : _ChainController_state_activeCaipNetwork1.name) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].UNSUPPORTED_NETWORK_NAME) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].showUnsupportedChainUI();
                } else {
                    this.setCaipNetwork(network);
                }
            } else if (!isActiveNamespace) {
                if (networkOfChain) {
                    this.setCaipNetworkOfNamespace(networkOfChain, chainNamespace);
                }
            }
            this.syncConnectedWalletInfo(chainNamespace);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(address, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address)) {
                this.syncAccountInfo(address, network === null || network === void 0 ? void 0 : network.id, chainNamespace);
            }
            if (isActiveNamespace) {
                await this.syncBalance({
                    address,
                    chainId: network === null || network === void 0 ? void 0 : network.id,
                    chainNamespace
                });
            } else {
                await this.syncBalance({
                    address,
                    chainId: networkOfChain === null || networkOfChain === void 0 ? void 0 : networkOfChain.id,
                    chainNamespace
                });
            }
        }
    }
    async syncAccountInfo(address, chainId, chainNamespace) {
        const caipAddress = this.getCaipAddress(chainNamespace);
        const newChainId = chainId || (caipAddress === null || caipAddress === void 0 ? void 0 : caipAddress.split(':')[1]);
        if (!newChainId) {
            return;
        }
        const newCaipAddress = "".concat(chainNamespace, ":").concat(newChainId, ":").concat(address);
        this.setCaipAddress(newCaipAddress, chainNamespace);
        await this.syncIdentity({
            address,
            chainId: newChainId,
            chainNamespace
        });
    }
    async syncReownName(address, chainNamespace) {
        try {
            const registeredWcNames = await this.getReownName(address);
            if (registeredWcNames[0]) {
                const wcName = registeredWcNames[0];
                this.setProfileName(wcName.name, chainNamespace);
            } else {
                this.setProfileName(null, chainNamespace);
            }
        } catch (e) {
            this.setProfileName(null, chainNamespace);
        }
    }
    syncConnectedWalletInfo(chainNamespace) {
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(chainNamespace);
        const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProviderId(chainNamespace);
        if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_ANNOUNCED || providerType === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_INJECTED) {
            if (connectorId) {
                const connector = this.getConnectors().find((c)=>c.id === connectorId);
                if (connector) {
                    const { info, name, imageUrl } = connector;
                    const icon = imageUrl || this.getConnectorImage(connector);
                    this.setConnectedWalletInfo({
                        name,
                        icon,
                        ...info
                    }, chainNamespace);
                }
            }
        } else if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_WALLET_CONNECT) {
            const provider = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(chainNamespace);
            if (provider === null || provider === void 0 ? void 0 : provider.session) {
                var _provider_session_peer_metadata_icons;
                this.setConnectedWalletInfo({
                    ...provider.session.peer.metadata,
                    name: provider.session.peer.metadata.name,
                    icon: (_provider_session_peer_metadata_icons = provider.session.peer.metadata.icons) === null || _provider_session_peer_metadata_icons === void 0 ? void 0 : _provider_session_peer_metadata_icons[0]
                }, chainNamespace);
            }
        } else if (connectorId) {
            if (connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE) {
                const connector = this.getConnectors().find((c)=>c.id === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE);
                this.setConnectedWalletInfo({
                    name: 'Coinbase Wallet',
                    icon: this.getConnectorImage(connector)
                }, chainNamespace);
            }
        }
    }
    async syncBalance(params) {
        const caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].getNetworksByNamespace(this.getCaipNetworks(), params.chainNamespace).find((n)=>{
            var _params_chainId;
            return n.id.toString() === ((_params_chainId = params.chainId) === null || _params_chainId === void 0 ? void 0 : _params_chainId.toString());
        });
        if (!caipNetwork || !params.chainId) {
            return;
        }
        await this.updateNativeBalance(params.address, params.chainId, params.chainNamespace);
    }
    async ready() {
        await this.readyPromise;
    }
    async updateNativeBalance(address, chainId, namespace) {
        const adapter = this.getAdapter(namespace);
        const caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getCaipNetworkByNamespace(namespace, chainId);
        if (adapter) {
            const balance = await adapter.getBalance({
                address,
                chainId,
                caipNetwork,
                tokens: this.options.tokens
            });
            this.setBalance(balance.balance, balance.symbol, namespace);
            return balance;
        }
        return undefined;
    }
    // -- Universal Provider ---------------------------------------------------
    async initializeUniversalAdapter() {
        var _this = this;
        var _this_options, _this_options1, _this_options2, _this_options3, _this_options4, _this_options5, _this_options6, _this_options7, _this_options8, _this_options9;
        const logger = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$LoggerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoggerUtil"].createLogger(function(error) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            if (error) {
                _this.handleAlertError(error);
            }
            // eslint-disable-next-line no-console
            console.error(...args);
        });
        const universalProviderOptions = {
            projectId: (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.projectId,
            metadata: {
                name: ((_this_options1 = this.options) === null || _this_options1 === void 0 ? void 0 : _this_options1.metadata) ? (_this_options2 = this.options) === null || _this_options2 === void 0 ? void 0 : _this_options2.metadata.name : '',
                description: ((_this_options3 = this.options) === null || _this_options3 === void 0 ? void 0 : _this_options3.metadata) ? (_this_options4 = this.options) === null || _this_options4 === void 0 ? void 0 : _this_options4.metadata.description : '',
                url: ((_this_options5 = this.options) === null || _this_options5 === void 0 ? void 0 : _this_options5.metadata) ? (_this_options6 = this.options) === null || _this_options6 === void 0 ? void 0 : _this_options6.metadata.url : '',
                icons: ((_this_options7 = this.options) === null || _this_options7 === void 0 ? void 0 : _this_options7.metadata) ? (_this_options8 = this.options) === null || _this_options8 === void 0 ? void 0 : _this_options8.metadata.icons : [
                    ''
                ]
            },
            logger
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setManualWCControl(Boolean((_this_options9 = this.options) === null || _this_options9 === void 0 ? void 0 : _this_options9.manualWCControl));
        var _this_options_universalProvider;
        this.universalProvider = (_this_options_universalProvider = this.options.universalProvider) !== null && _this_options_universalProvider !== void 0 ? _this_options_universalProvider : await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(universalProviderOptions);
        this.listenWalletConnect();
    }
    listenWalletConnect() {
        if (this.universalProvider) {
            this.universalProvider.on('display_uri', (uri)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setUri(uri);
            });
            this.universalProvider.on('connect', __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].finalizeWcConnection);
            this.universalProvider.on('disconnect', ()=>{
                this.chainNamespaces.forEach((namespace)=>{
                    this.resetAccount(namespace);
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].resetWcConnection();
            });
            this.universalProvider.on('chainChanged', (chainId)=>{
                // eslint-disable-next-line eqeqeq
                const caipNetwork = this.getCaipNetworks().find((c)=>c.id == chainId);
                const currentCaipNetwork = this.getCaipNetwork();
                if (!caipNetwork) {
                    this.setUnsupportedNetwork(chainId);
                    return;
                }
                if ((currentCaipNetwork === null || currentCaipNetwork === void 0 ? void 0 : currentCaipNetwork.id) !== (caipNetwork === null || caipNetwork === void 0 ? void 0 : caipNetwork.id)) {
                    this.setCaipNetwork(caipNetwork);
                }
            });
            this.universalProvider.on('session_event', (callbackData)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcHelpersUtil"].isSessionEventData(callbackData)) {
                    const { name, data } = callbackData.params.event;
                    if (name === 'accountsChanged' && Array.isArray(data) && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isCaipAddress(data[0])) {
                        this.syncAccount(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipAddress(data[0]));
                    }
                }
            });
        }
    }
    createUniversalProvider() {
        var _this_options;
        if (!this.universalProviderInitPromise && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isClient() && ((_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.projectId)) {
            this.universalProviderInitPromise = this.initializeUniversalAdapter();
        }
        return this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
        if (!this.universalProvider) {
            try {
                await this.createUniversalProvider();
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                    type: 'error',
                    event: 'INTERNAL_SDK_ERROR',
                    properties: {
                        errorType: 'UniversalProviderInitError',
                        errorMessage: err instanceof Error ? err.message : 'Unknown',
                        uncaught: false
                    }
                });
                // eslint-disable-next-line no-console
                console.error('AppKit:getUniversalProvider - Cannot create provider', err);
            }
        }
        return this.universalProvider;
    }
    // - Utils -------------------------------------------------------------------
    handleAlertError(error) {
        const matchedUniversalProviderError = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].UniversalProviderErrors).find((param)=>{
            let [, { message }] = param;
            return error.message.includes(message);
        });
        const [errorKey, errorValue] = matchedUniversalProviderError !== null && matchedUniversalProviderError !== void 0 ? matchedUniversalProviderError : [];
        const { message, alertErrorKey } = errorValue !== null && errorValue !== void 0 ? errorValue : {};
        if (errorKey && message && !this.reportedAlertErrors[errorKey]) {
            const alertError = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].ALERT_ERRORS[alertErrorKey];
            if (alertError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertController"].open(alertError, 'error');
                this.reportedAlertErrors[errorKey] = true;
            }
        }
    }
    getAdapter(namespace) {
        var _this_chainAdapters;
        if (!namespace) {
            return undefined;
        }
        return (_this_chainAdapters = this.chainAdapters) === null || _this_chainAdapters === void 0 ? void 0 : _this_chainAdapters[namespace];
    }
    createAdapter(blueprint) {
        var _this_options;
        if (!blueprint) {
            return;
        }
        const namespace = blueprint.namespace;
        if (!namespace) {
            return;
        }
        this.createClients();
        const adapterBlueprint = blueprint;
        adapterBlueprint.namespace = namespace;
        adapterBlueprint.construct({
            namespace,
            projectId: (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.projectId,
            networks: this.getCaipNetworks()
        });
        if (!this.chainNamespaces.includes(namespace)) {
            this.chainNamespaces.push(namespace);
        }
        if (this.chainAdapters) {
            this.chainAdapters[namespace] = adapterBlueprint;
        }
    }
    // -- Public -------------------------------------------------------------------
    async open(options) {
        await this.injectModalUi();
        if (options === null || options === void 0 ? void 0 : options.uri) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setUri(options.uri);
        }
        if (options === null || options === void 0 ? void 0 : options.arguments) {
            switch(options === null || options === void 0 ? void 0 : options.view){
                case 'Swap':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].open({
                        ...options,
                        data: {
                            swap: options.arguments
                        }
                    });
                default:
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].open(options);
    }
    async close() {
        await this.injectModalUi();
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
    }
    setLoading(loading, namespace) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].setLoading(loading, namespace);
    }
    async disconnect(chainNamespace) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].disconnect(chainNamespace);
    }
    getSIWX() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.siwx;
    }
    // -- review these -------------------------------------------------------------------
    getError() {
        return '';
    }
    getChainId() {
        var _ChainController_state_activeCaipNetwork;
        return (_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.id;
    }
    async switchNetwork(appKitNetwork) {
        const network = this.getCaipNetworks().find((n)=>n.id === appKitNetwork.id);
        if (!network) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertController"].open(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, 'error');
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].switchActiveNetwork(network);
    }
    getWalletProvider() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].state.providers[__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain] : null;
    }
    getWalletProviderType() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
    }
    subscribeProviders(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].subscribeProviders(callback);
    }
    getThemeMode() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeMode;
    }
    getThemeVariables() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables;
    }
    setThemeMode(themeMode) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeMode(themeMode);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeMode);
    }
    setTermsConditionsUrl(termsConditionsUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setTermsConditionsUrl(termsConditionsUrl);
    }
    setPrivacyPolicyUrl(privacyPolicyUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setPrivacyPolicyUrl(privacyPolicyUrl);
    }
    setThemeVariables(themeVariables) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeVariables(themeVariables);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setThemeVariables"])(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables);
    }
    subscribeTheme(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].subscribe(callback);
    }
    getWalletInfo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.connectedWalletInfo;
    }
    getAccount(namespace) {
        var _accountState_preferredAccountTypes;
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector(namespace);
        const accountState = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(namespace);
        const activeChain = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        const activeConnectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedConnectorId(namespace || activeChain);
        if (!accountState) {
            return undefined;
        }
        return {
            allAccounts: accountState.allAccounts,
            caipAddress: accountState.caipAddress,
            address: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(accountState.caipAddress),
            isConnected: Boolean(accountState.caipAddress),
            status: accountState.status,
            embeddedWalletInfo: authConnector && activeConnectorId === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH ? {
                user: accountState.user ? {
                    ...accountState.user,
                    /*
                             * Getting the username from the chain controller works well for social logins,
                             * but Farcaster uses a different connection flow and doesn't emit the username via events.
                             * Since the username is stored in local storage before the chain controller updates,
                             * it's safe to use the local storage value here.
                             */ username: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedSocialUsername()
                } : undefined,
                authProvider: accountState.socialProvider || 'email',
                accountType: (_accountState_preferredAccountTypes = accountState.preferredAccountTypes) === null || _accountState_preferredAccountTypes === void 0 ? void 0 : _accountState_preferredAccountTypes[namespace || activeChain],
                isSmartAccountDeployed: Boolean(accountState.smartAccountDeployed)
            } : undefined
        };
    }
    subscribeAccount(callback, namespace) {
        const updateVal = ()=>{
            const account = this.getAccount(namespace);
            if (!account) {
                return;
            }
            callback(account);
        };
        if (namespace) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeChainProp('accountState', updateVal, namespace);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribe(updateVal);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribe(updateVal);
    }
    subscribeNetwork(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribe((param)=>{
            let { activeCaipNetwork } = param;
            callback({
                caipNetwork: activeCaipNetwork,
                chainId: activeCaipNetwork === null || activeCaipNetwork === void 0 ? void 0 : activeCaipNetwork.id,
                caipNetworkId: activeCaipNetwork === null || activeCaipNetwork === void 0 ? void 0 : activeCaipNetwork.caipNetworkId
            });
        });
    }
    subscribeWalletInfo(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].subscribeKey('connectedWalletInfo', callback);
    }
    subscribeShouldUpdateToAddress(callback) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].subscribeKey('shouldUpdateToAddress', callback);
    }
    subscribeCaipNetworkChange(callback) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('activeCaipNetwork', callback);
    }
    getState() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].state;
    }
    subscribeState(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].subscribe(callback);
    }
    showErrorMessage(message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError(message);
    }
    showSuccessMessage(message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess(message);
    }
    getEvent() {
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].state
        };
    }
    subscribeEvents(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].subscribe(callback);
    }
    replace(route) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace(route);
    }
    redirect(route) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push(route);
    }
    popTransactionStack(status) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].popTransactionStack(status);
    }
    isOpen() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].state.open;
    }
    isTransactionStackEmpty() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.transactionStack.length === 0;
    }
    static getInstance() {
        return this.instance;
    }
    updateFeatures(newFeatures) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setFeatures(newFeatures);
    }
    updateRemoteFeatures(newRemoteFeatures) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setRemoteFeatures(newRemoteFeatures);
    }
    updateOptions(newOptions) {
        const currentOptions = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state || {};
        const updatedOptions = {
            ...currentOptions,
            ...newOptions
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setOptions(updatedOptions);
    }
    setConnectMethodsOrder(connectMethodsOrder) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setConnectMethodsOrder(connectMethodsOrder);
    }
    setWalletFeaturesOrder(walletFeaturesOrder) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setWalletFeaturesOrder(walletFeaturesOrder);
    }
    setCollapseWallets(collapseWallets) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setCollapseWallets(collapseWallets);
    }
    setSocialsOrder(socialsOrder) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setSocialsOrder(socialsOrder);
    }
    getConnectMethodsOrder() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].getConnectOrderMethod(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectors());
    }
    /**
     * Adds a network to an existing adapter in AppKit.
     * @param namespace - The chain namespace to add the network to (e.g. 'eip155', 'solana')
     * @param network - The network configuration to add
     * @throws Error if adapter for namespace doesn't exist
     */ addNetwork(namespace, network) {
        if (this.chainAdapters && !this.chainAdapters[namespace]) {
            throw new Error("Adapter for namespace ".concat(namespace, " doesn't exist"));
        }
        const extendedNetwork = this.extendCaipNetwork(network, this.options);
        if (!this.getCaipNetworks().find((n)=>n.id === extendedNetwork.id)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].addNetwork(extendedNetwork);
        }
    }
    /**
     * Removes a network from an existing adapter in AppKit.
     * @param namespace - The chain namespace the network belongs to
     * @param networkId - The network ID to remove
     * @throws Error if adapter for namespace doesn't exist or if removing last network
     */ removeNetwork(namespace, networkId) {
        if (this.chainAdapters && !this.chainAdapters[namespace]) {
            throw new Error("Adapter for namespace ".concat(namespace, " doesn't exist"));
        }
        const networkToRemove = this.getCaipNetworks().find((n)=>n.id === networkId);
        if (!networkToRemove) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].removeNetwork(namespace, networkId);
    }
    constructor(options){
        this.chainNamespaces = [];
        this.remoteFeatures = {};
        this.reportedAlertErrors = {};
        // -- Public Internal ---------------------------------------------------
        this.getCaipNetwork = (chainNamespace, id)=>{
            if (chainNamespace) {
                var _ChainController_getNetworkData_requestedCaipNetworks, _ChainController_getNetworkData, _ChainController_getNetworkData1, _requestedCaipNetworks_filter;
                const caipNetworkWithId = (_ChainController_getNetworkData = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getNetworkData(chainNamespace)) === null || _ChainController_getNetworkData === void 0 ? void 0 : (_ChainController_getNetworkData_requestedCaipNetworks = _ChainController_getNetworkData.requestedCaipNetworks) === null || _ChainController_getNetworkData_requestedCaipNetworks === void 0 ? void 0 : _ChainController_getNetworkData_requestedCaipNetworks.find((c)=>c.id === id);
                if (caipNetworkWithId) {
                    return caipNetworkWithId;
                }
                const namespaceCaipNetwork = (_ChainController_getNetworkData1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getNetworkData(chainNamespace)) === null || _ChainController_getNetworkData1 === void 0 ? void 0 : _ChainController_getNetworkData1.caipNetwork;
                if (namespaceCaipNetwork) {
                    return namespaceCaipNetwork;
                }
                const requestedCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getRequestedCaipNetworks(chainNamespace);
                return (_requestedCaipNetworks_filter = requestedCaipNetworks.filter((c)=>c.chainNamespace === chainNamespace)) === null || _requestedCaipNetworks_filter === void 0 ? void 0 : _requestedCaipNetworks_filter[0];
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork || this.defaultCaipNetwork;
        };
        this.getCaipNetworkId = ()=>{
            const network = this.getCaipNetwork();
            if (network) {
                return network.id;
            }
            return undefined;
        };
        this.getCaipNetworks = (namespace)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getCaipNetworks(namespace);
        this.getActiveChainNamespace = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        this.setRequestedCaipNetworks = (requestedCaipNetworks, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setRequestedCaipNetworks(requestedCaipNetworks, chain);
        };
        this.getApprovedCaipNetworkIds = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllApprovedCaipNetworkIds();
        this.getCaipAddress = (chainNamespace)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain === chainNamespace || !chainNamespace) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountProp('caipAddress', chainNamespace);
        };
        this.setClientId = (clientId)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].setClientId(clientId);
        };
        this.getProvider = (namespace)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProvider(namespace);
        this.getProviderType = (namespace)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProviderId(namespace);
        this.getPreferredAccountType = (namespace)=>{
            var _AccountController_state_preferredAccountTypes;
            return (_AccountController_state_preferredAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.preferredAccountTypes) === null || _AccountController_state_preferredAccountTypes === void 0 ? void 0 : _AccountController_state_preferredAccountTypes[namespace];
        };
        this.setCaipAddress = (caipAddress, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setCaipAddress(caipAddress, chain);
            /**
             * For the embedded use cases (Demo app), we should call close() when the user is connected to redirect them to Account View.
             */ if (caipAddress && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEmbedded) {
                this.close();
            }
        };
        this.setBalance = (balance, balanceSymbol, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setBalance(balance, balanceSymbol, chain);
        };
        this.setProfileName = (profileName, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setProfileName(profileName, chain);
        };
        this.setProfileImage = (profileImage, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setProfileImage(profileImage, chain);
        };
        this.setUser = (user, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setUser(user, chain);
        };
        this.resetAccount = (chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].resetAccount(chain);
        };
        this.setCaipNetwork = (caipNetwork)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setActiveCaipNetwork(caipNetwork);
        };
        this.setCaipNetworkOfNamespace = (caipNetwork, chainNamespace)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setChainNetworkData(chainNamespace, {
                caipNetwork
            });
        };
        this.setAllAccounts = (addresses, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setAllAccounts(addresses, chain);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setHasMultipleAddresses((addresses === null || addresses === void 0 ? void 0 : addresses.length) > 1);
        };
        this.setStatus = (status, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setStatus(status, chain);
            // If at least one namespace is connected, set the connection status
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].isConnected()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setConnectionStatus('connected');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setConnectionStatus('disconnected');
            }
        };
        this.getAddressByChainNamespace = (chainNamespace)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountProp('address', chainNamespace);
        this.setConnectors = (connectors)=>{
            const allConnectors = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.allConnectors,
                ...connectors
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setConnectors(allConnectors);
        };
        this.setConnections = (connections, chainNamespace)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setConnections(connections, chainNamespace);
        };
        this.fetchIdentity = (request)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchIdentity(request);
        this.getReownName = (address)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EnsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsController"].getNamesForAddress(address);
        this.getConnectors = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectors();
        this.getConnectorImage = (connector)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(connector);
        this.setConnectedWalletInfo = (connectedWalletInfo, chain)=>{
            const type = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ProviderUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderUtil"].getProviderId(chain);
            const walletInfo = connectedWalletInfo ? {
                ...connectedWalletInfo,
                type
            } : undefined;
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setConnectedWalletInfo(walletInfo, chain);
        };
        this.getIsConnectedState = ()=>Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress);
        this.addAddressLabel = (address, label, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].addAddressLabel(address, label, chain);
        };
        this.removeAddressLabel = (address, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].removeAddressLabel(address, chain);
        };
        this.getAddress = (chainNamespace)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain === chainNamespace || !chainNamespace) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountProp('address', chainNamespace);
        };
        this.setApprovedCaipNetworksData = (namespace)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setApprovedCaipNetworksData(namespace);
        this.resetNetwork = (namespace)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].resetNetwork(namespace);
        };
        this.addConnector = (connector)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].addConnector(connector);
        };
        this.resetWcConnection = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].resetWcConnection();
        };
        this.setAddressExplorerUrl = (addressExplorerUrl, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setAddressExplorerUrl(addressExplorerUrl, chain);
        };
        this.setSmartAccountDeployed = (isDeployed, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setSmartAccountDeployed(isDeployed, chain);
        };
        this.setSmartAccountEnabledNetworks = (smartAccountEnabledNetworks, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, chain);
        };
        this.setPreferredAccountType = (preferredAccountType, chain)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setPreferredAccountType(preferredAccountType, chain);
        };
        this.setEIP6963Enabled = (enabled)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEIP6963Enabled(enabled);
        };
        this.handleUnsafeRPCRequest = ()=>{
            if (this.isOpen()) {
                // If we are on the modal but there is no transaction stack, close the modal
                if (this.isTransactionStackEmpty()) {
                    return;
                }
                // Check if we need to replace or redirect
                this.redirect('ApproveTransaction');
            } else {
                // If called from outside the modal, open ApproveTransaction
                this.open({
                    view: 'ApproveTransaction'
                });
            }
        };
        this.options = options;
        this.version = options.sdkVersion;
        this.caipNetworks = this.extendCaipNetworks(options);
        this.chainNamespaces = this.getChainNamespacesSet(options.adapters, this.caipNetworks);
        this.defaultCaipNetwork = this.extendDefaultCaipNetwork(options);
        this.chainAdapters = this.createAdapters(options.adapters);
        this.readyPromise = this.initialize(options);
    }
} //# sourceMappingURL=appkit-base-client.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/client/appkit-core.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppKit",
    ()=>AppKit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$client$2f$appkit$2d$base$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/client/appkit-base-client.js [app-client] (ecmascript)");
;
;
;
;
// -- Helpers -------------------------------------------------------------------
let isInitialized = false;
class AppKit extends __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$client$2f$appkit$2d$base$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppKitBaseClient"] {
    // -- Overrides --------------------------------------------------------------
    async open(options) {
        // Only open modal when not connected
        const isConnected = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].isConnected();
        if (!isConnected) {
            await super.open(options);
        }
    }
    async close() {
        await super.close();
        if (this.options.manualWCControl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].finalizeWcConnection();
        }
    }
    async syncIdentity(_request) {
        return Promise.resolve();
    }
    async syncBalance(_params) {
        return Promise.resolve();
    }
    async injectModalUi() {
        if (!isInitialized && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isClient()) {
            await __turbopack_context__.A("[project]/giftpicker/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/basic.js [app-client] (ecmascript, async loader)");
            await __turbopack_context__.A("[project]/giftpicker/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/w3m-modal.js [app-client] (ecmascript, async loader)");
            const isElementCreated = document.querySelector('w3m-modal');
            if (!isElementCreated) {
                const modal = document.createElement('w3m-modal');
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.disableAppend && !__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEmbedded) {
                    document.body.insertAdjacentElement('beforeend', modal);
                }
            }
            isInitialized = true;
        }
    }
} //# sourceMappingURL=appkit-core.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/exports/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PACKAGE_VERSION",
    ()=>PACKAGE_VERSION
]);
const PACKAGE_VERSION = '1.7.8'; //# sourceMappingURL=constants.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/exports/core.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAppKit",
    ()=>createAppKit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$client$2f$appkit$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/client/appkit-core.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/exports/constants.js [app-client] (ecmascript)");
;
;
function createAppKit(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$client$2f$appkit$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AppKit"]({
        ...options,
        basic: true,
        sdkVersion: "html-core-".concat(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGE_VERSION"])
    });
}
;
 //# sourceMappingURL=core.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit/dist/esm/exports/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppKit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$client$2f$appkit$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AppKit"],
    "createAppKit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAppKit"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/exports/core.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$client$2f$appkit$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit/dist/esm/src/client/appkit-core.js [app-client] (ecmascript) <locals>");
}),
]);

//# sourceMappingURL=50ead_%40reown_appkit_dist_esm_1515de35._.js.map