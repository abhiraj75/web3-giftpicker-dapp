(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil,
    "MELD_PUBLIC_KEY",
    ()=>MELD_PUBLIC_KEY,
    "ONRAMP_PROVIDERS",
    ()=>ONRAMP_PROVIDERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/giftpicker/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
const SECURE_SITE = // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
(typeof __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_ORIGIN'] : undefined) || 'https://secure.walletconnect.org';
const ONRAMP_PROVIDERS = [
    {
        label: 'Coinbase',
        name: 'coinbase',
        feeRange: '1-2%',
        url: '',
        supportedChains: [
            'eip155'
        ]
    },
    {
        label: 'Meld.io',
        name: 'meld',
        feeRange: '1-2%',
        url: 'https://meldcrypto.com',
        supportedChains: [
            'eip155',
            'solana'
        ]
    }
];
const MELD_PUBLIC_KEY = 'WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU';
const ConstantsUtil = {
    FOUR_MINUTES_MS: 240_000,
    TEN_SEC_MS: 10_000,
    FIVE_SEC_MS: 5_000,
    THREE_SEC_MS: 3_000,
    ONE_SEC_MS: 1_000,
    SECURE_SITE,
    SECURE_SITE_DASHBOARD: "".concat(SECURE_SITE, "/dashboard"),
    SECURE_SITE_FAVICON: "".concat(SECURE_SITE, "/images/favicon.png"),
    RESTRICTED_TIMEZONES: [
        'ASIA/SHANGHAI',
        'ASIA/URUMQI',
        'ASIA/CHONGQING',
        'ASIA/HARBIN',
        'ASIA/KASHGAR',
        'ASIA/MACAU',
        'ASIA/HONG_KONG',
        'ASIA/MACAO',
        'ASIA/BEIJING',
        'ASIA/HARBIN'
    ],
    /**
     * Network name to Coinbase Pay SDK chain name map object
     * @see supported chain names on Coinbase for Pay SDK: https://github.com/coinbase/cbpay-js/blob/d4bda2c05c4d5917c8db6a05476b603546046394/src/types/onramp.ts
     */ WC_COINBASE_PAY_SDK_CHAINS: [
        'ethereum',
        'arbitrum',
        'polygon',
        'berachain',
        'avalanche-c-chain',
        'optimism',
        'celo',
        'base'
    ],
    WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: 'ethereum',
    WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
        Ethereum: 'ethereum',
        'Arbitrum One': 'arbitrum',
        Polygon: 'polygon',
        Berachain: 'berachain',
        Avalanche: 'avalanche-c-chain',
        'OP Mainnet': 'optimism',
        Celo: 'celo',
        Base: 'base'
    },
    WC_COINBASE_ONRAMP_APP_ID: 'bf18c88d-495a-463b-b249-0b9d3656cf5e',
    SWAP_SUGGESTED_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP'
    ],
    SWAP_POPULAR_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP',
        'METAL',
        'DAI',
        'CHAMP',
        'WOLF',
        'SALE',
        'BAL',
        'BUSD',
        'MUST',
        'BTCpx',
        'ROUTE',
        'HEX',
        'WELT',
        'amDAI',
        'VSQ',
        'VISION',
        'AURUM',
        'pSP',
        'SNX',
        'VC',
        'LINK',
        'CHP',
        'amUSDT',
        'SPHERE',
        'FOX',
        'GIDDY',
        'GFC',
        'OMEN',
        'OX_OLD',
        'DE',
        'WNT'
    ],
    BALANCE_SUPPORTED_CHAINS: [
        'eip155',
        'solana'
    ],
    SWAP_SUPPORTED_NETWORKS: [
        // Ethereum'
        'eip155:1',
        // Arbitrum One'
        'eip155:42161',
        // Optimism'
        'eip155:10',
        // ZKSync Era'
        'eip155:324',
        // Base'
        'eip155:8453',
        // BNB Smart Chain'
        'eip155:56',
        // Polygon'
        'eip155:137',
        // Gnosis'
        'eip155:100',
        // Avalanche'
        'eip155:43114',
        // Fantom'
        'eip155:250',
        // Klaytn'
        'eip155:8217',
        // Aurora
        'eip155:1313161554'
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: [
        'eip155'
    ],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
        'eip155',
        'solana'
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
        'eip155'
    ],
    NATIVE_TOKEN_ADDRESS: {
        eip155: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        solana: 'So11111111111111111111111111111111111111111',
        polkadot: '0x',
        bip122: '0x',
        cosmos: '0x'
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
        MOBILE: 'Open and continue in the wallet app',
        WEB: 'Open and continue in the wallet app'
    },
    SEND_SUPPORTED_NAMESPACES: [
        'eip155',
        'solana'
    ],
    DEFAULT_REMOTE_FEATURES: {
        swaps: [
            '1inch'
        ],
        onramp: [
            'coinbase',
            'meld'
        ],
        email: true,
        socials: [
            'google',
            'x',
            'discord',
            'farcaster',
            'github',
            'apple',
            'facebook'
        ],
        activity: true,
        reownBranding: true
    },
    DEFAULT_REMOTE_FEATURES_DISABLED: {
        email: false,
        socials: false,
        swaps: false,
        onramp: false,
        activity: false,
        reownBranding: false
    },
    DEFAULT_FEATURES: {
        receive: true,
        send: true,
        emailShowWallets: true,
        connectorTypeOrder: [
            'walletConnect',
            'recent',
            'injected',
            'featured',
            'custom',
            'external',
            'recommended'
        ],
        analytics: true,
        allWallets: true,
        legalCheckbox: false,
        smartSessions: false,
        collapseWallets: false,
        walletFeaturesOrder: [
            'onramp',
            'swaps',
            'receive',
            'send'
        ],
        connectMethodsOrder: undefined,
        pay: false
    },
    DEFAULT_SOCIALS: [
        'google',
        'x',
        'farcaster',
        'discord',
        'apple',
        'github',
        'facebook'
    ],
    DEFAULT_ACCOUNT_TYPES: {
        bip122: 'payment',
        eip155: 'smartAccount',
        polkadot: 'eoa',
        solana: 'eoa'
    },
    ADAPTER_TYPES: {
        UNIVERSAL: 'universal',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5',
        BITCOIN: 'bitcoin'
    }
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-console */ __turbopack_context__.s([
    "StorageUtil",
    ()=>StorageUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-client] (ecmascript)");
;
const StorageUtil = {
    // Cache expiry in milliseconds
    cacheExpiry: {
        portfolio: 30000,
        nativeBalance: 30000,
        ens: 300000,
        identity: 300000
    },
    isCacheExpired (timestamp, cacheExpiry) {
        return Date.now() - timestamp > cacheExpiry;
    },
    getActiveNetworkProps () {
        const namespace = StorageUtil.getActiveNamespace();
        const caipNetworkId = StorageUtil.getActiveCaipNetworkId();
        const stringChainId = caipNetworkId ? caipNetworkId.split(':')[1] : undefined;
        // eslint-disable-next-line no-nested-ternary
        const chainId = stringChainId ? isNaN(Number(stringChainId)) ? stringChainId : Number(stringChainId) : undefined;
        return {
            namespace,
            caipNetworkId,
            chainId
        };
    },
    setWalletConnectDeepLink (param) {
        let { name, href } = param;
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].DEEPLINK_CHOICE, JSON.stringify({
                href,
                name
            }));
        } catch (e) {
            console.info('Unable to set WalletConnect deep link');
        }
    },
    getWalletConnectDeepLink () {
        try {
            const deepLink = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].DEEPLINK_CHOICE);
            if (deepLink) {
                return JSON.parse(deepLink);
            }
        } catch (e) {
            console.info('Unable to get WalletConnect deep link');
        }
        return undefined;
    },
    deleteWalletConnectDeepLink () {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].DEEPLINK_CHOICE);
        } catch (e) {
            console.info('Unable to delete WalletConnect deep link');
        }
    },
    setActiveNamespace (namespace) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ACTIVE_NAMESPACE, namespace);
        } catch (e) {
            console.info('Unable to set active namespace');
        }
    },
    setActiveCaipNetworkId (caipNetworkId) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
            StorageUtil.setActiveNamespace(caipNetworkId.split(':')[0]);
        } catch (e) {
            console.info('Unable to set active caip network id');
        }
    },
    getActiveCaipNetworkId () {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ACTIVE_CAIP_NETWORK_ID);
        } catch (e) {
            console.info('Unable to get active caip network id');
            return undefined;
        }
    },
    deleteActiveCaipNetworkId () {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ACTIVE_CAIP_NETWORK_ID);
        } catch (e) {
            console.info('Unable to delete active caip network id');
        }
    },
    deleteConnectedConnectorId (namespace) {
        try {
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSafeConnectorIdKey"])(namespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(key);
        } catch (e) {
            console.info('Unable to delete connected connector id');
        }
    },
    setAppKitRecent (wallet) {
        try {
            const recentWallets = StorageUtil.getRecentWallets();
            const exists = recentWallets.find((w)=>w.id === wallet.id);
            if (!exists) {
                recentWallets.unshift(wallet);
                if (recentWallets.length > 2) {
                    recentWallets.pop();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].RECENT_WALLETS, JSON.stringify(recentWallets));
            }
        } catch (e) {
            console.info('Unable to set AppKit recent');
        }
    },
    getRecentWallets () {
        try {
            const recent = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].RECENT_WALLETS);
            return recent ? JSON.parse(recent) : [];
        } catch (e) {
            console.info('Unable to get AppKit recent');
        }
        return [];
    },
    setConnectedConnectorId (namespace, connectorId) {
        try {
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSafeConnectorIdKey"])(namespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(key, connectorId);
        } catch (e) {
            console.info('Unable to set Connected Connector Id');
        }
    },
    getActiveNamespace () {
        try {
            const activeNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ACTIVE_NAMESPACE);
            return activeNamespace;
        } catch (e) {
            console.info('Unable to get active namespace');
        }
        return undefined;
    },
    getConnectedConnectorId (namespace) {
        if (!namespace) {
            return undefined;
        }
        try {
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSafeConnectorIdKey"])(namespace);
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(key);
        } catch (e) {
            console.info('Unable to get connected connector id in namespace ', namespace);
        }
        return undefined;
    },
    setConnectedSocialProvider (socialProvider) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTED_SOCIAL, socialProvider);
        } catch (e) {
            console.info('Unable to set connected social provider');
        }
    },
    getConnectedSocialProvider () {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTED_SOCIAL);
        } catch (e) {
            console.info('Unable to get connected social provider');
        }
        return undefined;
    },
    deleteConnectedSocialProvider () {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTED_SOCIAL);
        } catch (e) {
            console.info('Unable to delete connected social provider');
        }
    },
    getConnectedSocialUsername () {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTED_SOCIAL_USERNAME);
        } catch (e) {
            console.info('Unable to get connected social username');
        }
        return undefined;
    },
    getStoredActiveCaipNetworkId () {
        var _storedCaipNetworkId_split;
        const storedCaipNetworkId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ACTIVE_CAIP_NETWORK_ID);
        const networkId = storedCaipNetworkId === null || storedCaipNetworkId === void 0 ? void 0 : (_storedCaipNetworkId_split = storedCaipNetworkId.split(':')) === null || _storedCaipNetworkId_split === void 0 ? void 0 : _storedCaipNetworkId_split[1];
        return networkId;
    },
    setConnectionStatus (status) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTION_STATUS, status);
        } catch (e) {
            console.info('Unable to set connection status');
        }
    },
    getConnectionStatus () {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTION_STATUS);
        } catch (e) {
            return undefined;
        }
    },
    getConnectedNamespaces () {
        try {
            const namespaces = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTED_NAMESPACES);
            if (!(namespaces === null || namespaces === void 0 ? void 0 : namespaces.length)) {
                return [];
            }
            return namespaces.split(',');
        } catch (e) {
            return [];
        }
    },
    setConnectedNamespaces (namespaces) {
        try {
            const uniqueNamespaces = Array.from(new Set(namespaces));
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTED_NAMESPACES, uniqueNamespaces.join(','));
        } catch (e) {
            console.info('Unable to set namespaces in storage');
        }
    },
    addConnectedNamespace (namespace) {
        try {
            const namespaces = StorageUtil.getConnectedNamespaces();
            if (!namespaces.includes(namespace)) {
                namespaces.push(namespace);
                StorageUtil.setConnectedNamespaces(namespaces);
            }
        } catch (e) {
            console.info('Unable to add connected namespace');
        }
    },
    removeConnectedNamespace (namespace) {
        try {
            const namespaces = StorageUtil.getConnectedNamespaces();
            const index = namespaces.indexOf(namespace);
            if (index > -1) {
                namespaces.splice(index, 1);
                StorageUtil.setConnectedNamespaces(namespaces);
            }
        } catch (e) {
            console.info('Unable to remove connected namespace');
        }
    },
    getTelegramSocialProvider () {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].TELEGRAM_SOCIAL_PROVIDER);
        } catch (e) {
            console.info('Unable to get telegram social provider');
            return null;
        }
    },
    setTelegramSocialProvider (socialProvider) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].TELEGRAM_SOCIAL_PROVIDER, socialProvider);
        } catch (e) {
            console.info('Unable to set telegram social provider');
        }
    },
    removeTelegramSocialProvider () {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].TELEGRAM_SOCIAL_PROVIDER);
        } catch (e) {
            console.info('Unable to remove telegram social provider');
        }
    },
    getBalanceCache () {
        let cache = {};
        try {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].PORTFOLIO_CACHE);
            cache = result ? JSON.parse(result) : {};
        } catch (e) {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromBalanceCache (caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].PORTFOLIO_CACHE, JSON.stringify({
                ...cache,
                [caipAddress]: undefined
            }));
        } catch (e) {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getBalanceCacheForCaipAddress (caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            const balanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (balanceCache && !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) {
                return balanceCache.balance;
            }
            StorageUtil.removeAddressFromBalanceCache(caipAddress);
        } catch (e) {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateBalanceCache (params) {
        try {
            const cache = StorageUtil.getBalanceCache();
            cache[params.caipAddress] = params;
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].PORTFOLIO_CACHE, JSON.stringify(cache));
        } catch (e) {
            console.info('Unable to update balance cache', params);
        }
    },
    getNativeBalanceCache () {
        let cache = {};
        try {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].NATIVE_BALANCE_CACHE);
            cache = result ? JSON.parse(result) : {};
        } catch (e) {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromNativeBalanceCache (caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].NATIVE_BALANCE_CACHE, JSON.stringify({
                ...cache,
                [caipAddress]: undefined
            }));
        } catch (e) {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getNativeBalanceCacheForCaipAddress (caipAddress) {
        try {
            const cache = StorageUtil.getNativeBalanceCache();
            const nativeBalanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (nativeBalanceCache && !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) {
                return nativeBalanceCache;
            }
            console.info('Discarding cache for address', caipAddress);
            StorageUtil.removeAddressFromBalanceCache(caipAddress);
        } catch (e) {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateNativeBalanceCache (params) {
        try {
            const cache = StorageUtil.getNativeBalanceCache();
            cache[params.caipAddress] = params;
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].NATIVE_BALANCE_CACHE, JSON.stringify(cache));
        } catch (e) {
            console.info('Unable to update balance cache', params);
        }
    },
    getEnsCache () {
        let cache = {};
        try {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ENS_CACHE);
            cache = result ? JSON.parse(result) : {};
        } catch (e) {
            console.info('Unable to get ens name cache');
        }
        return cache;
    },
    getEnsFromCacheForAddress (address) {
        try {
            const cache = StorageUtil.getEnsCache();
            const ensCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) {
                return ensCache.ens;
            }
            StorageUtil.removeEnsFromCache(address);
        } catch (e) {
            console.info('Unable to get ens name from cache', address);
        }
        return undefined;
    },
    updateEnsCache (params) {
        try {
            const cache = StorageUtil.getEnsCache();
            cache[params.address] = params;
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ENS_CACHE, JSON.stringify(cache));
        } catch (e) {
            console.info('Unable to update ens name cache', params);
        }
    },
    removeEnsFromCache (address) {
        try {
            const cache = StorageUtil.getEnsCache();
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ENS_CACHE, JSON.stringify({
                ...cache,
                [address]: undefined
            }));
        } catch (e) {
            console.info('Unable to remove ens name from cache', address);
        }
    },
    getIdentityCache () {
        let cache = {};
        try {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].IDENTITY_CACHE);
            cache = result ? JSON.parse(result) : {};
        } catch (e) {
            console.info('Unable to get identity cache');
        }
        return cache;
    },
    getIdentityFromCacheForAddress (address) {
        try {
            const cache = StorageUtil.getIdentityCache();
            const identityCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (identityCache && !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) {
                return identityCache.identity;
            }
            StorageUtil.removeIdentityFromCache(address);
        } catch (e) {
            console.info('Unable to get identity from cache', address);
        }
        return undefined;
    },
    updateIdentityCache (params) {
        try {
            const cache = StorageUtil.getIdentityCache();
            cache[params.address] = {
                identity: params.identity,
                timestamp: params.timestamp
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].IDENTITY_CACHE, JSON.stringify(cache));
        } catch (e) {
            console.info('Unable to update identity cache', params);
        }
    },
    removeIdentityFromCache (address) {
        try {
            const cache = StorageUtil.getIdentityCache();
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].IDENTITY_CACHE, JSON.stringify({
                ...cache,
                [address]: undefined
            }));
        } catch (e) {
            console.info('Unable to remove identity from cache', address);
        }
    },
    clearAddressCache () {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].PORTFOLIO_CACHE);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].NATIVE_BALANCE_CACHE);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].ENS_CACHE);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].IDENTITY_CACHE);
        } catch (e) {
            console.info('Unable to clear address cache');
        }
    },
    setPreferredAccountTypes (accountTypes) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
        } catch (e) {
            console.info('Unable to set preferred account types', accountTypes);
        }
    },
    getPreferredAccountTypes () {
        try {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].PREFERRED_ACCOUNT_TYPES);
            if (!result) {
                return {};
            }
            return JSON.parse(result);
        } catch (e) {
            console.info('Unable to get preferred account types');
        }
        return {};
    },
    setConnections (connections, chainNamespace) {
        try {
            const newConnections = {
                ...StorageUtil.getConnections(),
                [chainNamespace]: connections
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTIONS, JSON.stringify(newConnections));
        } catch (error) {
            console.error('Unable to sync connections to storage', error);
        }
    },
    getConnections () {
        try {
            const connectionsStorage = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorage"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeLocalStorageKeys"].CONNECTIONS);
            if (!connectionsStorage) {
                return {};
            }
            return JSON.parse(connectionsStorage);
        } catch (error) {
            console.error('Unable to get connections from storage', error);
            return {};
        }
    }
}; //# sourceMappingURL=StorageUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreHelperUtil",
    ()=>CoreHelperUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
;
;
;
const CoreHelperUtil = {
    isMobile () {
        if (this.isClient()) {
            var _window, _window_matchMedia, _window1;
            return Boolean(typeof ((_window = window) === null || _window === void 0 ? void 0 : _window.matchMedia) === 'function' && ((_window1 = window) === null || _window1 === void 0 ? void 0 : (_window_matchMedia = _window1.matchMedia('(pointer:coarse)')) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
        }
        return false;
    },
    checkCaipNetwork (network) {
        let networkName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
        return network === null || network === void 0 ? void 0 : network.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
    },
    isAndroid () {
        var _window;
        if (!this.isMobile()) {
            return false;
        }
        const ua = (_window = window) === null || _window === void 0 ? void 0 : _window.navigator.userAgent.toLowerCase();
        return CoreHelperUtil.isMobile() && ua.includes('android');
    },
    isIos () {
        var _window;
        if (!this.isMobile()) {
            return false;
        }
        const ua = (_window = window) === null || _window === void 0 ? void 0 : _window.navigator.userAgent.toLowerCase();
        return ua.includes('iphone') || ua.includes('ipad');
    },
    isSafari () {
        var _window;
        if (!this.isClient()) {
            return false;
        }
        const ua = (_window = window) === null || _window === void 0 ? void 0 : _window.navigator.userAgent.toLowerCase();
        return ua.includes('safari');
    },
    isClient () {
        return typeof window !== 'undefined';
    },
    isPairingExpired (expiry) {
        return expiry ? expiry - Date.now() <= __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].TEN_SEC_MS : true;
    },
    isAllowedRetry (lastRetry) {
        let differenceMs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ONE_SEC_MS;
        return Date.now() - lastRetry >= differenceMs;
    },
    copyToClopboard (text) {
        navigator.clipboard.writeText(text);
    },
    isIframe () {
        try {
            var _window, _window1;
            return ((_window = window) === null || _window === void 0 ? void 0 : _window.self) !== ((_window1 = window) === null || _window1 === void 0 ? void 0 : _window1.top);
        } catch (e) {
            return false;
        }
    },
    isSafeApp () {
        if (CoreHelperUtil.isClient() && window.self !== window.top) {
            try {
                var _window_location_ancestorOrigins, _window_location, _window;
                const ancestor = (_window = window) === null || _window === void 0 ? void 0 : (_window_location = _window.location) === null || _window_location === void 0 ? void 0 : (_window_location_ancestorOrigins = _window_location.ancestorOrigins) === null || _window_location_ancestorOrigins === void 0 ? void 0 : _window_location_ancestorOrigins[0];
                const safeAppUrl = 'https://app.safe.global';
                if (ancestor) {
                    const ancestorUrl = new URL(ancestor);
                    const safeUrl = new URL(safeAppUrl);
                    return ancestorUrl.hostname === safeUrl.hostname;
                }
            } catch (e) {
                return false;
            }
        }
        return false;
    },
    getPairingExpiry () {
        return Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].FOUR_MINUTES_MS;
    },
    getNetworkId (caipAddress) {
        return caipAddress === null || caipAddress === void 0 ? void 0 : caipAddress.split(':')[1];
    },
    getPlainAddress (caipAddress) {
        return caipAddress === null || caipAddress === void 0 ? void 0 : caipAddress.split(':')[2];
    },
    async wait (milliseconds) {
        return new Promise((resolve)=>{
            setTimeout(resolve, milliseconds);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debounce (func) {
        let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
        let timer = undefined;
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            function next() {
                func(...args);
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(next, timeout);
        };
    },
    isHttpUrl (url) {
        return url.startsWith('http://') || url.startsWith('https://');
    },
    formatNativeUrl (appUrl, wcUri) {
        let universalLink = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatUniversalUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        let safeUniversalLink = universalLink;
        if (!safeAppUrl.includes('://')) {
            safeAppUrl = appUrl.replaceAll('/', '').replaceAll(':', '');
            safeAppUrl = "".concat(safeAppUrl, "://");
        }
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = "".concat(safeAppUrl, "/");
        }
        if (safeUniversalLink && !(safeUniversalLink === null || safeUniversalLink === void 0 ? void 0 : safeUniversalLink.endsWith('/'))) {
            safeUniversalLink = "".concat(safeUniversalLink, "/");
        }
        // Android deeplinks in tg context require the uri to be encoded twice
        if (this.isTelegram() && this.isAndroid()) {
            // eslint-disable-next-line no-param-reassign
            wcUri = encodeURIComponent(wcUri);
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: "".concat(safeAppUrl, "wc?uri=").concat(encodedWcUrl),
            redirectUniversalLink: safeUniversalLink ? "".concat(safeUniversalLink, "wc?uri=").concat(encodedWcUrl) : undefined,
            href: safeAppUrl
        };
    },
    formatUniversalUrl (appUrl, wcUri) {
        if (!CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatNativeUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = "".concat(safeAppUrl, "/");
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: "".concat(safeAppUrl, "wc?uri=").concat(encodedWcUrl),
            href: safeAppUrl
        };
    },
    getOpenTargetForPlatform (target) {
        if (target === 'popupWindow') {
            return target;
        }
        // Only '_blank' deeplinks work in Telegram context
        if (this.isTelegram()) {
            // But for social login, we need to load the page in the same context
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getTelegramSocialProvider()) {
                return '_top';
            }
            return '_blank';
        }
        return target;
    },
    openHref (href, target, features) {
        var _window;
        (_window = window) === null || _window === void 0 ? void 0 : _window.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    returnOpenHref (href, target, features) {
        var _window;
        return (_window = window) === null || _window === void 0 ? void 0 : _window.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    isTelegram () {
        return typeof window !== 'undefined' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (Boolean(window.TelegramWebviewProxy) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Boolean(window.Telegram) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Boolean(window.TelegramWebviewProxyProto));
    },
    isPWA () {
        var _window_matchMedia, _window_matchMedia1, _window, _window_navigator, _window1;
        if (typeof window === 'undefined') {
            return false;
        }
        const isStandaloneDisplayMode = (_window_matchMedia1 = (_window = window).matchMedia) === null || _window_matchMedia1 === void 0 ? void 0 : (_window_matchMedia = _window_matchMedia1.call(_window, '(display-mode: standalone)')) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.matches;
        const isIOSStandalone = (_window1 = window) === null || _window1 === void 0 ? void 0 : (_window_navigator = _window1.navigator) === null || _window_navigator === void 0 ? void 0 : _window_navigator.standalone;
        return Boolean(isStandaloneDisplayMode || isIOSStandalone);
    },
    async preloadImage (src) {
        const imagePromise = new Promise((resolve, reject)=>{
            const image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.crossOrigin = 'anonymous';
            image.src = src;
        });
        return Promise.race([
            imagePromise,
            CoreHelperUtil.wait(2000)
        ]);
    },
    formatBalance (balance, symbol) {
        let formattedBalance = '0.000';
        if (typeof balance === 'string') {
            const number = Number(balance);
            if (number) {
                const formattedValue = Math.floor(number * 1000) / 1000;
                if (formattedValue) {
                    formattedBalance = formattedValue.toString();
                }
            }
        }
        return "".concat(formattedBalance).concat(symbol ? " ".concat(symbol) : '');
    },
    formatBalance2 (balance, symbol) {
        let formattedBalance = undefined;
        if (balance === '0') {
            formattedBalance = '0';
        } else if (typeof balance === 'string') {
            const number = Number(balance);
            if (number) {
                var _number_toString_match;
                formattedBalance = (_number_toString_match = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) === null || _number_toString_match === void 0 ? void 0 : _number_toString_match[0];
            }
        }
        return {
            value: formattedBalance !== null && formattedBalance !== void 0 ? formattedBalance : '0',
            rest: formattedBalance === '0' ? '000' : '',
            symbol
        };
    },
    getApiUrl () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].W3M_API_URL;
    },
    getBlockchainApiUrl () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].PULSE_API_URL;
    },
    getUUID () {
        var _crypto;
        if ((_crypto = crypto) === null || _crypto === void 0 ? void 0 : _crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (c)=>{
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseError (error) {
        var _error_issues_, _error_issues;
        if (typeof error === 'string') {
            return error;
        } else if (typeof (error === null || error === void 0 ? void 0 : (_error_issues = error.issues) === null || _error_issues === void 0 ? void 0 : (_error_issues_ = _error_issues[0]) === null || _error_issues_ === void 0 ? void 0 : _error_issues_.message) === 'string') {
            return error.issues[0].message;
        } else if (error instanceof Error) {
            return error.message;
        }
        return 'Unknown error';
    },
    sortRequestedNetworks (approvedIds) {
        let requestedNetworks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        const approvedIndexMap = {};
        if (requestedNetworks && approvedIds) {
            approvedIds.forEach((id, index)=>{
                approvedIndexMap[id] = index;
            });
            requestedNetworks.sort((a, b)=>{
                const indexA = approvedIndexMap[a.id];
                const indexB = approvedIndexMap[b.id];
                if (indexA !== undefined && indexB !== undefined) {
                    return indexA - indexB;
                } else if (indexA !== undefined) {
                    return -1;
                } else if (indexB !== undefined) {
                    return 1;
                }
                return 0;
            });
        }
        return requestedNetworks;
    },
    calculateBalance (array) {
        let sum = 0;
        for (const item of array){
            var _item_value;
            sum += (_item_value = item.value) !== null && _item_value !== void 0 ? _item_value : 0;
        }
        return sum;
    },
    formatTokenBalance (number) {
        const roundedNumber = number.toFixed(2);
        const [dollars, pennies] = roundedNumber.split('.');
        return {
            dollars,
            pennies
        };
    },
    isAddress (address) {
        let chain = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'eip155';
        switch(chain){
            case 'eip155':
                if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
                    return false;
                } else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
                    return true;
                }
                return false;
            case 'solana':
                return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
            default:
                return false;
        }
    },
    uniqueBy (arr, key) {
        const set = new Set();
        return arr.filter((item)=>{
            const keyValue = item[key];
            if (set.has(keyValue)) {
                return false;
            }
            set.add(keyValue);
            return true;
        });
    },
    generateSdkVersion (adapters, platform, version) {
        const hasNoAdapters = adapters.length === 0;
        const adapterNames = hasNoAdapters ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ADAPTER_TYPES.UNIVERSAL : adapters.map((adapter)=>adapter.adapterType).join(',');
        return "".concat(platform, "-").concat(adapterNames, "-").concat(version);
    },
    // eslint-disable-next-line max-params
    createAccount (namespace, address, type, publicKey, path) {
        return {
            namespace,
            address,
            type,
            publicKey,
            path
        };
    },
    isCaipAddress (address) {
        if (typeof address !== 'string') {
            return false;
        }
        const sections = address.split(':');
        const namespace = sections[0];
        return sections.filter(Boolean).length === 3 && namespace in __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP;
    },
    isMac () {
        var _window;
        const ua = (_window = window) === null || _window === void 0 ? void 0 : _window.navigator.userAgent.toLowerCase();
        return ua.includes('macintosh') && !ua.includes('safari');
    },
    formatTelegramSocialLoginUrl (url) {
        var _window;
        const valueToInject = "--".concat(encodeURIComponent((_window = window) === null || _window === void 0 ? void 0 : _window.location.href));
        const paramToInject = 'state=';
        const parsedUrl = new URL(url);
        if (parsedUrl.host === 'auth.magic.link') {
            const providerParam = 'provider_authorization_url=';
            const providerUrl = url.substring(url.indexOf(providerParam) + providerParam.length);
            const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
            return url.replace(providerUrl, encodeURIComponent(resultUrl));
        }
        return this.injectIntoUrl(url, paramToInject, valueToInject);
    },
    injectIntoUrl (url, key, appendString) {
        // Find the position of "key" e.g. "state=" in the URL
        const keyIndex = url.indexOf(key);
        if (keyIndex === -1) {
            throw new Error("".concat(key, " parameter not found in the URL: ").concat(url));
        }
        // Find the position of the next "&" after "key"
        const keyEndIndex = url.indexOf('&', keyIndex);
        const keyLength = key.length;
        // If there is no "&" after key, it means "key" is the last parameter
        // eslint-disable-next-line no-negated-condition
        const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
        // Extract the part of the URL before the key value
        const beforeKeyValue = url.substring(0, keyIndex + keyLength);
        // Extract the current key value
        const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
        // Extract the part of the URL after the key value
        const afterKeyValue = url.substring(keyEndIndex);
        // Append the new string to the key value
        const newKeyValue = currentKeyValue + appendString;
        // Reconstruct the URL with the appended key value
        const newUrl = beforeKeyValue + newKeyValue + afterKeyValue;
        return newUrl;
    }
}; //# sourceMappingURL=CoreHelperUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FetchUtil",
    ()=>FetchUtil
]);
async function fetchData() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const response = await fetch(...args);
    if (!response.ok) {
        // Create error object and reject if not a 2xx response code
        const err = new Error("HTTP status code: ".concat(response.status), {
            cause: response
        });
        throw err;
    }
    return response;
}
class FetchUtil {
    async get(param) {
        let { headers, signal, cache, ...args } = param;
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'GET',
            headers,
            signal,
            cache
        });
        return response.json();
    }
    async getBlob(param) {
        let { headers, signal, ...args } = param;
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'GET',
            headers,
            signal
        });
        return response.blob();
    }
    async post(param) {
        let { body, headers, signal, ...args } = param;
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'POST',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async put(param) {
        let { body, headers, signal, ...args } = param;
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'PUT',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async delete(param) {
        let { body, headers, signal, ...args } = param;
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'DELETE',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    createUrl(param) {
        let { path, params } = param;
        const url = new URL(path, this.baseUrl);
        if (params) {
            Object.entries(params).forEach((param)=>{
                let [key, value] = param;
                if (value) {
                    url.searchParams.append(key, value);
                }
            });
        }
        if (this.clientId) {
            url.searchParams.append('clientId', this.clientId);
        }
        return url;
    }
    constructor({ baseUrl, clientId }){
        this.baseUrl = baseUrl;
        this.clientId = clientId;
    }
} //# sourceMappingURL=FetchUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/OptionsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionsUtil",
    ()=>OptionsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
;
;
const OptionsUtil = {
    getFeatureValue (key, features) {
        const optionValue = features === null || features === void 0 ? void 0 : features[key];
        if (optionValue === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_FEATURES[key];
        }
        return optionValue;
    },
    filterSocialsByPlatform (socials) {
        if (!socials || !socials.length) {
            return socials;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram()) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos()) {
                return socials.filter((s)=>s !== 'google');
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMac()) {
                return socials.filter((s)=>s !== 'x');
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isAndroid()) {
                return socials.filter((s)=>![
                        'facebook',
                        'x'
                    ].includes(s));
            }
        }
        return socials;
    }
}; //# sourceMappingURL=OptionsUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionsController",
    ()=>OptionsController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$OptionsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/OptionsUtil.js [app-client] (ecmascript)");
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    features: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_FEATURES,
    projectId: '',
    sdkType: 'appkit',
    sdkVersion: 'html-wagmi-undefined',
    defaultAccountTypes: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {}
});
const OptionsController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    setOptions (options) {
        Object.assign(state, options);
    },
    setRemoteFeatures (remoteFeatures) {
        var _state_remoteFeatures;
        if (!remoteFeatures) {
            return;
        }
        const newRemoteFeatures = {
            ...state.remoteFeatures,
            ...remoteFeatures
        };
        state.remoteFeatures = newRemoteFeatures;
        if ((_state_remoteFeatures = state.remoteFeatures) === null || _state_remoteFeatures === void 0 ? void 0 : _state_remoteFeatures.socials) {
            state.remoteFeatures.socials = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$OptionsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsUtil"].filterSocialsByPlatform(state.remoteFeatures.socials);
        }
    },
    setFeatures (features) {
        if (!features) {
            return;
        }
        if (!state.features) {
            state.features = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_FEATURES;
        }
        const newFeatures = {
            ...state.features,
            ...features
        };
        state.features = newFeatures;
    },
    setProjectId (projectId) {
        state.projectId = projectId;
    },
    setCustomRpcUrls (customRpcUrls) {
        state.customRpcUrls = customRpcUrls;
    },
    setAllWallets (allWallets) {
        state.allWallets = allWallets;
    },
    setIncludeWalletIds (includeWalletIds) {
        state.includeWalletIds = includeWalletIds;
    },
    setExcludeWalletIds (excludeWalletIds) {
        state.excludeWalletIds = excludeWalletIds;
    },
    setFeaturedWalletIds (featuredWalletIds) {
        state.featuredWalletIds = featuredWalletIds;
    },
    setTokens (tokens) {
        state.tokens = tokens;
    },
    setTermsConditionsUrl (termsConditionsUrl) {
        state.termsConditionsUrl = termsConditionsUrl;
    },
    setPrivacyPolicyUrl (privacyPolicyUrl) {
        state.privacyPolicyUrl = privacyPolicyUrl;
    },
    setCustomWallets (customWallets) {
        state.customWallets = customWallets;
    },
    setIsSiweEnabled (isSiweEnabled) {
        state.isSiweEnabled = isSiweEnabled;
    },
    setIsUniversalProvider (isUniversalProvider) {
        state.isUniversalProvider = isUniversalProvider;
    },
    setSdkVersion (sdkVersion) {
        state.sdkVersion = sdkVersion;
    },
    setMetadata (metadata) {
        state.metadata = metadata;
    },
    setDisableAppend (disableAppend) {
        state.disableAppend = disableAppend;
    },
    setEIP6963Enabled (enableEIP6963) {
        state.enableEIP6963 = enableEIP6963;
    },
    setDebug (debug) {
        state.debug = debug;
    },
    setEnableWalletConnect (enableWalletConnect) {
        state.enableWalletConnect = enableWalletConnect;
    },
    setEnableWalletGuide (enableWalletGuide) {
        state.enableWalletGuide = enableWalletGuide;
    },
    setEnableAuthLogger (enableAuthLogger) {
        state.enableAuthLogger = enableAuthLogger;
    },
    setEnableWallets (enableWallets) {
        state.enableWallets = enableWallets;
    },
    setPreferUniversalLinks (preferUniversalLinks) {
        state.experimental_preferUniversalLinks = preferUniversalLinks;
    },
    setHasMultipleAddresses (hasMultipleAddresses) {
        state.hasMultipleAddresses = hasMultipleAddresses;
    },
    setSIWX (siwx) {
        state.siwx = siwx;
    },
    setConnectMethodsOrder (connectMethodsOrder) {
        state.features = {
            ...state.features,
            connectMethodsOrder
        };
    },
    setWalletFeaturesOrder (walletFeaturesOrder) {
        state.features = {
            ...state.features,
            walletFeaturesOrder
        };
    },
    setSocialsOrder (socialsOrder) {
        state.remoteFeatures = {
            ...state.remoteFeatures,
            socials: socialsOrder
        };
    },
    setCollapseWallets (collapseWallets) {
        state.features = {
            ...state.features,
            collapseWallets
        };
    },
    setEnableEmbedded (enableEmbedded) {
        state.enableEmbedded = enableEmbedded;
    },
    setAllowUnsupportedChain (allowUnsupportedChain) {
        state.allowUnsupportedChain = allowUnsupportedChain;
    },
    setManualWCControl (manualWCControl) {
        state.manualWCControl = manualWCControl;
    },
    setEnableNetworkSwitch (enableNetworkSwitch) {
        state.enableNetworkSwitch = enableNetworkSwitch;
    },
    setDefaultAccountTypes () {
        let defaultAccountType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Object.entries(defaultAccountType).forEach((param)=>{
            let [namespace, accountType] = param;
            if (accountType) {
                // @ts-expect-error - Keys are validated by the param type
                state.defaultAccountTypes[namespace] = accountType;
            }
        });
    },
    setUniversalProviderConfigOverride (universalProviderConfigOverride) {
        state.universalProviderConfigOverride = universalProviderConfigOverride;
    },
    getUniversalProviderConfigOverride () {
        return state.universalProviderConfigOverride;
    },
    getSnapshot () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(state);
    }
}; //# sourceMappingURL=OptionsController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TelemetryController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelemetryController",
    ()=>TelemetryController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
;
;
;
// -- Constants ----------------------------------------- //
const DEFAULT_STATE = Object.freeze({
    enabled: true,
    events: []
});
const api = new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getAnalyticsUrl(),
    clientId: null
});
// Rate limiting constants
const MAX_ERRORS_PER_MINUTE = 5;
const ONE_MINUTE_MS = 60 * 1000;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    ...DEFAULT_STATE
});
const TelemetryController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    async sendError (error, category) {
        if (!state.enabled) {
            return;
        }
        // Check rate limiting using events array
        const now = Date.now();
        const recentErrors = state.events.filter((event)=>{
            const eventTime = new Date(event.properties.timestamp || '').getTime();
            return now - eventTime < ONE_MINUTE_MS;
        });
        if (recentErrors.length >= MAX_ERRORS_PER_MINUTE) {
            // Exit silently
            return;
        }
        const errorEvent = {
            type: 'error',
            event: category,
            properties: {
                errorType: error.name,
                errorMessage: error.message,
                stackTrace: error.stack,
                timestamp: new Date().toISOString()
            }
        };
        state.events.push(errorEvent);
        try {
            if (typeof window === 'undefined') {
                return;
            }
            const { projectId, sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
            await api.post({
                path: '/e',
                params: {
                    projectId,
                    st: sdkType,
                    sv: sdkVersion || 'html-wagmi-4.2.2'
                },
                body: {
                    eventId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: new Date().toISOString(),
                    props: {
                        type: 'error',
                        event: category,
                        errorType: error.name,
                        errorMessage: error.message,
                        stackTrace: error.stack
                    }
                }
            });
        } catch (e) {
        // Do nothing
        }
    },
    enable () {
        state.enabled = true;
    },
    disable () {
        state.enabled = false;
    },
    clearEvents () {
        state.events = [];
    }
}; //# sourceMappingURL=TelemetryController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppKitError",
    ()=>AppKitError,
    "withErrorBoundary",
    ()=>withErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$TelemetryController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TelemetryController.js [app-client] (ecmascript)");
;
class AppKitError extends Error {
    constructor(message, category, originalError){
        super(message);
        this.name = 'AppKitError';
        this.category = category;
        this.originalError = originalError;
        // Ensure `this instanceof AppKitError` is true, important for custom errors.
        Object.setPrototypeOf(this, AppKitError.prototype);
        let isStackConstructedFromOriginal = false;
        if (originalError instanceof Error && typeof originalError.stack === 'string' && originalError.stack) {
            const originalErrorStack = originalError.stack;
            /**
             * Most error stacks start with "ErrorName: ErrorMessage\n...frames..."
             * We want to take the "...frames..." part.
             */ const firstNewlineIndex = originalErrorStack.indexOf('\n');
            if (firstNewlineIndex > -1) {
                const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
                this.stack = "".concat(this.name, ": ").concat(this.message, "\n").concat(originalFrames);
                isStackConstructedFromOriginal = true;
            }
        }
        if (!isStackConstructedFromOriginal) {
            /**
             * If stack was not (or could not be) constructed from originalError,
             * generate a standard stack trace for this AppKitError instance.
             * This will point to where `new AppKitError()` was called.
             */ if (Error.captureStackTrace) {
                Error.captureStackTrace(this, AppKitError);
            } else if (!this.stack) {
                /**
                 * Fallback for environments without Error.captureStackTrace.
                 * `super(message)` might have set a stack.
                 * If `this.stack` is still undefined/empty, provide a minimal one.
                 * Node.js and modern browsers typically set `this.stack` from `super(message)`.
                 */ this.stack = "".concat(this.name, ": ").concat(this.message);
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function errorHandler(err, defaultCategory) {
    const error = err instanceof AppKitError ? err : new AppKitError(err instanceof Error ? err.message : String(err), defaultCategory, err);
    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$TelemetryController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelemetryController"].sendError(error, error.category);
    throw error;
}
function withErrorBoundary(controller) {
    let defaultCategory = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'INTERNAL_SDK_ERROR';
    const newController = {};
    Object.keys(controller).forEach((key)=>{
        const original = controller[key];
        if (typeof original === 'function') {
            let wrapped = original;
            if (original.constructor.name === 'AsyncFunction') {
                wrapped = async function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    try {
                        return await original(...args);
                    } catch (err) {
                        return errorHandler(err, defaultCategory);
                    }
                };
            } else {
                wrapped = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    try {
                        return original(...args);
                    } catch (err) {
                        return errorHandler(err, defaultCategory);
                    }
                };
            }
            newController[key] = wrapped;
        } else {
            newController[key] = original;
        }
    });
    return newController;
} //# sourceMappingURL=withErrorBoundary.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/MobileWallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUSTOM_DEEPLINK_WALLETS",
    ()=>CUSTOM_DEEPLINK_WALLETS,
    "MobileWalletUtil",
    ()=>MobileWalletUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const CUSTOM_DEEPLINK_WALLETS = {
    PHANTOM: {
        id: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        url: 'https://phantom.app'
    },
    SOLFLARE: {
        id: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        url: 'https://solflare.com'
    },
    COINBASE: {
        id: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        url: 'https://go.cb-w.com'
    }
};
const MobileWalletUtil = {
    /**
     * Handles mobile wallet redirection for wallets that have Universal Links and doesn't support WalletConnect Deep Links.
     *
     * @param {string} id - The id of the wallet.
     * @param {ChainNamespace} namespace - The namespace of the chain.
     */ handleMobileDeeplinkRedirect (id, namespace) {
        /**
         * Universal Links requires explicit user interaction to open the wallet app.
         * Previously we've been calling this with the life-cycle methods in the Solana clients by listening the SELECT_WALLET event of EventController.
         * But this breaks the UL functionality for some wallets like Phantom.
         */ const href = window.location.href;
        const encodedHref = encodeURIComponent(href);
        if (id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id && !('phantom' in window)) {
            const protocol = href.startsWith('https') ? 'https' : 'http';
            const host = href.split('/')[2];
            const encodedRef = encodeURIComponent("".concat(protocol, "://").concat(host));
            window.location.href = "".concat(CUSTOM_DEEPLINK_WALLETS.PHANTOM.url, "/ul/browse/").concat(encodedHref, "?ref=").concat(encodedRef);
        }
        if (id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id && !('solflare' in window)) {
            window.location.href = "".concat(CUSTOM_DEEPLINK_WALLETS.SOLFLARE.url, "/ul/v1/browse/").concat(encodedHref, "?ref=").concat(encodedHref);
        }
        if (namespace === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.SOLANA) {
            if (id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id && !('coinbaseSolana' in window)) {
                window.location.href = "".concat(CUSTOM_DEEPLINK_WALLETS.COINBASE.url, "/dapp?cb_url=").concat(encodedHref);
            }
        }
    }
}; //# sourceMappingURL=MobileWallet.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssetController",
    ()=>AssetController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribeNetworkImages (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state.networkImages, ()=>callback(state.networkImages));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    setWalletImage (key, value) {
        state.walletImages[key] = value;
    },
    setNetworkImage (key, value) {
        state.networkImages[key] = value;
    },
    setChainImage (key, value) {
        state.chainImages[key] = value;
    },
    setConnectorImage (key, value) {
        state.connectorImages = {
            ...state.connectorImages,
            [key]: value
        };
    },
    setTokenImage (key, value) {
        state.tokenImages[key] = value;
    },
    setCurrencyImage (key, value) {
        state.currencyImages[key] = value;
    }
};
const AssetController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=AssetController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssetUtil",
    ()=>AssetUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
;
;
;
const namespaceImageIds = {
    // Ethereum
    eip155: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
    // Solana
    solana: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
    // Polkadot
    polkadot: '',
    // Bitcoin
    bip122: '0b4838db-0161-4ffe-022d-532bf03dba00',
    // Cosmos
    cosmos: ''
};
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    networkImagePromises: {}
});
const AssetUtil = {
    async fetchWalletImage (imageId) {
        if (!imageId) {
            return undefined;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"]._fetchWalletImage(imageId);
        return this.getWalletImageById(imageId);
    },
    async fetchNetworkImage (imageId) {
        if (!imageId) {
            return undefined;
        }
        const existingImage = this.getNetworkImageById(imageId);
        // Check if the image already exists
        if (existingImage) {
            return existingImage;
        }
        // Check if the promise is already created
        if (!state.networkImagePromises[imageId]) {
            state.networkImagePromises[imageId] = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"]._fetchNetworkImage(imageId);
        }
        await state.networkImagePromises[imageId];
        return this.getNetworkImageById(imageId);
    },
    getWalletImageById (imageId) {
        if (!imageId) {
            return undefined;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.walletImages[imageId];
    },
    getWalletImage (wallet) {
        if (wallet === null || wallet === void 0 ? void 0 : wallet.image_url) {
            return wallet === null || wallet === void 0 ? void 0 : wallet.image_url;
        }
        if (wallet === null || wallet === void 0 ? void 0 : wallet.image_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.walletImages[wallet.image_id];
        }
        return undefined;
    },
    getNetworkImage (network) {
        var _network_assets, _network_assets1;
        if (network === null || network === void 0 ? void 0 : (_network_assets = network.assets) === null || _network_assets === void 0 ? void 0 : _network_assets.imageUrl) {
            var _network_assets2;
            return network === null || network === void 0 ? void 0 : (_network_assets2 = network.assets) === null || _network_assets2 === void 0 ? void 0 : _network_assets2.imageUrl;
        }
        if (network === null || network === void 0 ? void 0 : (_network_assets1 = network.assets) === null || _network_assets1 === void 0 ? void 0 : _network_assets1.imageId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.networkImages[network.assets.imageId];
        }
        return undefined;
    },
    getNetworkImageById (imageId) {
        if (!imageId) {
            return undefined;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.networkImages[imageId];
    },
    getConnectorImage (connector) {
        if (connector === null || connector === void 0 ? void 0 : connector.imageUrl) {
            return connector.imageUrl;
        }
        if (connector === null || connector === void 0 ? void 0 : connector.imageId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.connectorImages[connector.imageId];
        }
        return undefined;
    },
    getChainImage (chain) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.networkImages[namespaceImageIds[chain]];
    }
}; //# sourceMappingURL=AssetUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertController",
    ()=>AlertController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    message: '',
    variant: 'info',
    open: false
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    open (message, variant) {
        const { debug } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const { shortMessage, longMessage } = message;
        if (debug) {
            state.message = shortMessage;
            state.variant = variant;
            state.open = true;
        }
        if (longMessage) {
            // eslint-disable-next-line no-console
            console.error(typeof longMessage === 'function' ? longMessage() : longMessage);
        }
    },
    close () {
        state.open = false;
        state.message = '';
        state.variant = 'info';
    }
};
const AlertController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=AlertController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventsController",
    ()=>EventsController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
// -- Helpers ------------------------------------------- //
const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getAnalyticsUrl();
const api = new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
    baseUrl,
    clientId: null
});
const excluded = [
    'MODAL_CREATED'
];
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    timestamp: Date.now(),
    reportedErrors: {},
    data: {
        type: 'track',
        event: 'MODAL_CREATED'
    }
});
const EventsController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    getSdkProperties () {
        const { projectId, sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return {
            projectId,
            st: sdkType,
            sv: sdkVersion || 'html-wagmi-4.2.2'
        };
    },
    async _sendAnalyticsEvent (payload) {
        try {
            const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address;
            if (excluded.includes(payload.data.event) || typeof window === 'undefined') {
                return;
            }
            await api.post({
                path: '/e',
                params: EventsController.getSdkProperties(),
                body: {
                    eventId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: payload.timestamp,
                    props: {
                        ...payload.data,
                        address
                    }
                }
            });
            state.reportedErrors['FORBIDDEN'] = false;
        } catch (err) {
            const isForbiddenError = err instanceof Error && err.cause instanceof Response && err.cause.status === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].HTTP_STATUS_CODES.FORBIDDEN && !state.reportedErrors['FORBIDDEN'];
            if (isForbiddenError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AlertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertController"].open({
                    shortMessage: 'Invalid App Configuration',
                    longMessage: "Origin ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafe"])() ? window.origin : 'uknown', " not found on Allowlist - update configuration on cloud.reown.com")
                }, 'error');
                state.reportedErrors['FORBIDDEN'] = true;
            }
        }
    },
    sendEvent (data) {
        var _OptionsController_state_features;
        state.timestamp = Date.now();
        state.data = data;
        if ((_OptionsController_state_features = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features) === null || _OptionsController_state_features === void 0 ? void 0 : _OptionsController_state_features.analytics) {
            EventsController._sendAnalyticsEvent(state);
        }
    }
}; //# sourceMappingURL=EventsController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiController",
    ()=>ApiController,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$MobileWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/MobileWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
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
;
// -- Helpers ------------------------------------------- //
const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getApiUrl();
const api = new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
    baseUrl,
    clientId: null
});
const entries = 40;
const recommendedEntries = 4;
const imageCountToFetch = 20;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    promises: {},
    page: 1,
    count: 0,
    featured: [],
    allFeatured: [],
    recommended: [],
    allRecommended: [],
    wallets: [],
    filteredWallets: [],
    search: [],
    isAnalyticsEnabled: false,
    excludedWallets: [],
    isFetchingRecommendedWallets: false
});
const ApiController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    _getSdkProperties () {
        const { projectId, sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return {
            projectId,
            st: sdkType || 'appkit',
            sv: sdkVersion || 'html-wagmi-4.2.2'
        };
    },
    _filterOutExtensions (wallets) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.isUniversalProvider) {
            return wallets.filter((w)=>Boolean(w.mobile_link || w.desktop_link || w.webapp_link));
        }
        return wallets;
    },
    async _fetchWalletImage (imageId) {
        const imageUrl = "".concat(api.baseUrl, "/getWalletImage/").concat(imageId);
        const blob = await api.getBlob({
            path: imageUrl,
            params: ApiController._getSdkProperties()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setWalletImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchNetworkImage (imageId) {
        const imageUrl = "".concat(api.baseUrl, "/public/getAssetImage/").concat(imageId);
        const blob = await api.getBlob({
            path: imageUrl,
            params: ApiController._getSdkProperties()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setNetworkImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchConnectorImage (imageId) {
        const imageUrl = "".concat(api.baseUrl, "/public/getAssetImage/").concat(imageId);
        const blob = await api.getBlob({
            path: imageUrl,
            params: ApiController._getSdkProperties()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setConnectorImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchCurrencyImage (countryCode) {
        const imageUrl = "".concat(api.baseUrl, "/public/getCurrencyImage/").concat(countryCode);
        const blob = await api.getBlob({
            path: imageUrl,
            params: ApiController._getSdkProperties()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setCurrencyImage(countryCode, URL.createObjectURL(blob));
    },
    async _fetchTokenImage (symbol) {
        const imageUrl = "".concat(api.baseUrl, "/public/getTokenImage/").concat(symbol);
        const blob = await api.getBlob({
            path: imageUrl,
            params: ApiController._getSdkProperties()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setTokenImage(symbol, URL.createObjectURL(blob));
    },
    _filterWalletsByPlatform (wallets) {
        const filteredWallets = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile() ? wallets === null || wallets === void 0 ? void 0 : wallets.filter((w)=>{
            if (w.mobile_link) {
                return true;
            }
            if (w.id === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$MobileWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_DEEPLINK_WALLETS"].COINBASE.id) {
                return true;
            }
            const isSolana = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain === 'solana';
            return isSolana && (w.id === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$MobileWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_DEEPLINK_WALLETS"].SOLFLARE.id || w.id === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$MobileWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_DEEPLINK_WALLETS"].PHANTOM.id);
        }) : wallets;
        return filteredWallets;
    },
    async fetchProjectConfig () {
        const response = await api.get({
            path: '/appkit/v1/config',
            params: ApiController._getSdkProperties()
        });
        return response.features;
    },
    async fetchAllowedOrigins () {
        try {
            const { allowedOrigins } = await api.get({
                path: '/projects/v1/origins',
                params: ApiController._getSdkProperties()
            });
            return allowedOrigins;
        } catch (error) {
            return [];
        }
    },
    async fetchNetworkImages () {
        const requestedCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const ids = requestedCaipNetworks === null || requestedCaipNetworks === void 0 ? void 0 : requestedCaipNetworks.map((param)=>{
            let { assets } = param;
            return assets === null || assets === void 0 ? void 0 : assets.imageId;
        }).filter(Boolean).filter((imageId)=>!__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getNetworkImageById(imageId));
        if (ids) {
            await Promise.allSettled(ids.map((id)=>ApiController._fetchNetworkImage(id)));
        }
    },
    async fetchConnectorImages () {
        const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
        const ids = connectors.map((param)=>{
            let { imageId } = param;
            return imageId;
        }).filter(Boolean);
        await Promise.allSettled(ids.map((id)=>ApiController._fetchConnectorImage(id)));
    },
    async fetchCurrencyImages () {
        let currencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        await Promise.allSettled(currencies.map((currency)=>ApiController._fetchCurrencyImage(currency)));
    },
    async fetchTokenImages () {
        let tokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        await Promise.allSettled(tokens.map((token)=>ApiController._fetchTokenImage(token)));
    },
    async fetchWallets (params) {
        var _params_include;
        var _params_exclude;
        const exclude = (_params_exclude = params.exclude) !== null && _params_exclude !== void 0 ? _params_exclude : [];
        const sdkProperties = ApiController._getSdkProperties();
        if (sdkProperties.sv.startsWith('html-core-')) {
            exclude.push(...Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$MobileWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_DEEPLINK_WALLETS"]).map((w)=>w.id));
        }
        const wallets = await api.get({
            path: '/getWallets',
            params: {
                ...ApiController._getSdkProperties(),
                ...params,
                page: String(params.page),
                entries: String(params.entries),
                include: (_params_include = params.include) === null || _params_include === void 0 ? void 0 : _params_include.join(','),
                exclude: exclude.join(',')
            }
        });
        const filteredWallets = ApiController._filterWalletsByPlatform(wallets === null || wallets === void 0 ? void 0 : wallets.data);
        return {
            data: filteredWallets || [],
            // Keep original count for display on main page
            count: wallets === null || wallets === void 0 ? void 0 : wallets.count
        };
    },
    async fetchFeaturedWallets () {
        const { featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        if (featuredWalletIds === null || featuredWalletIds === void 0 ? void 0 : featuredWalletIds.length) {
            var _featuredWalletIds_length;
            const params = {
                ...ApiController._getSdkProperties(),
                page: 1,
                entries: (_featuredWalletIds_length = featuredWalletIds === null || featuredWalletIds === void 0 ? void 0 : featuredWalletIds.length) !== null && _featuredWalletIds_length !== void 0 ? _featuredWalletIds_length : recommendedEntries,
                include: featuredWalletIds
            };
            const { data } = await ApiController.fetchWallets(params);
            const sortedData = [
                ...data
            ].sort((a, b)=>featuredWalletIds.indexOf(a.id) - featuredWalletIds.indexOf(b.id));
            const images = sortedData.map((d)=>d.image_id).filter(Boolean);
            await Promise.allSettled(images.map((id)=>ApiController._fetchWalletImage(id)));
            state.featured = sortedData;
            state.allFeatured = sortedData;
        }
    },
    async fetchRecommendedWallets () {
        try {
            state.isFetchingRecommendedWallets = true;
            const { includeWalletIds, excludeWalletIds, featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
            const exclude = [
                ...excludeWalletIds !== null && excludeWalletIds !== void 0 ? excludeWalletIds : [],
                ...featuredWalletIds !== null && featuredWalletIds !== void 0 ? featuredWalletIds : []
            ].filter(Boolean);
            const chains = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getRequestedCaipNetworkIds().join(',');
            const params = {
                page: 1,
                entries: recommendedEntries,
                include: includeWalletIds,
                exclude,
                chains
            };
            const { data, count } = await ApiController.fetchWallets(params);
            const recent = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
            const recommendedImages = data.map((d)=>d.image_id).filter(Boolean);
            const recentImages = recent.map((r)=>r.image_id).filter(Boolean);
            await Promise.allSettled([
                ...recommendedImages,
                ...recentImages
            ].map((id)=>ApiController._fetchWalletImage(id)));
            state.recommended = data;
            state.allRecommended = data;
            state.count = count !== null && count !== void 0 ? count : 0;
        } catch (e) {
        // Catch silently
        } finally{
            state.isFetchingRecommendedWallets = false;
        }
    },
    async fetchWalletsByPage (param) {
        let { page } = param;
        const { includeWalletIds, excludeWalletIds, featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const chains = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getRequestedCaipNetworkIds().join(',');
        const exclude = [
            ...state.recommended.map((param)=>{
                let { id } = param;
                return id;
            }),
            ...excludeWalletIds !== null && excludeWalletIds !== void 0 ? excludeWalletIds : [],
            ...featuredWalletIds !== null && featuredWalletIds !== void 0 ? featuredWalletIds : []
        ].filter(Boolean);
        const params = {
            page,
            entries,
            include: includeWalletIds,
            exclude,
            chains
        };
        const { data, count } = await ApiController.fetchWallets(params);
        const images = data.slice(0, imageCountToFetch).map((w)=>w.image_id).filter(Boolean);
        await Promise.allSettled(images.map((id)=>ApiController._fetchWalletImage(id)));
        state.wallets = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].uniqueBy([
            ...state.wallets,
            ...ApiController._filterOutExtensions(data)
        ], 'id').filter((w)=>{
            var _w_chains;
            return (_w_chains = w.chains) === null || _w_chains === void 0 ? void 0 : _w_chains.some((chain)=>chains.includes(chain));
        });
        state.count = count > state.count ? count : state.count;
        state.page = page;
    },
    async initializeExcludedWallets (param) {
        let { ids } = param;
        const params = {
            page: 1,
            entries: ids.length,
            include: ids
        };
        const { data } = await ApiController.fetchWallets(params);
        if (data) {
            data.forEach((wallet)=>{
                state.excludedWallets.push({
                    rdns: wallet.rdns,
                    name: wallet.name
                });
            });
        }
    },
    async searchWallet (param) {
        let { search, badge } = param;
        const { includeWalletIds, excludeWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const chains = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getRequestedCaipNetworkIds().join(',');
        state.search = [];
        const params = {
            page: 1,
            entries: 100,
            search: search === null || search === void 0 ? void 0 : search.trim(),
            badge_type: badge,
            include: includeWalletIds,
            exclude: excludeWalletIds,
            chains
        };
        const { data } = await ApiController.fetchWallets(params);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SEARCH_WALLET',
            properties: {
                badge: badge !== null && badge !== void 0 ? badge : '',
                search: search !== null && search !== void 0 ? search : ''
            }
        });
        const images = data.map((w)=>w.image_id).filter(Boolean);
        await Promise.allSettled([
            ...images.map((id)=>ApiController._fetchWalletImage(id)),
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].wait(300)
        ]);
        state.search = ApiController._filterOutExtensions(data);
    },
    initPromise (key, fetchFn) {
        const existingPromise = state.promises[key];
        if (existingPromise) {
            return existingPromise;
        }
        return state.promises[key] = fetchFn();
    },
    prefetch () {
        let { fetchConnectorImages = true, fetchFeaturedWallets = true, fetchRecommendedWallets = true, fetchNetworkImages = true } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const promises = [
            fetchConnectorImages && ApiController.initPromise('connectorImages', ApiController.fetchConnectorImages),
            fetchFeaturedWallets && ApiController.initPromise('featuredWallets', ApiController.fetchFeaturedWallets),
            fetchRecommendedWallets && ApiController.initPromise('recommendedWallets', ApiController.fetchRecommendedWallets),
            fetchNetworkImages && ApiController.initPromise('networkImages', ApiController.fetchNetworkImages)
        ].filter(Boolean);
        return Promise.allSettled(promises);
    },
    prefetchAnalyticsConfig () {
        var _OptionsController_state_features;
        if ((_OptionsController_state_features = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features) === null || _OptionsController_state_features === void 0 ? void 0 : _OptionsController_state_features.analytics) {
            ApiController.fetchAnalyticsConfig();
        }
    },
    async fetchAnalyticsConfig () {
        try {
            const { isAnalyticsEnabled } = await api.get({
                path: '/getAnalyticsConfig',
                params: ApiController._getSdkProperties()
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setFeatures({
                analytics: isAnalyticsEnabled
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setFeatures({
                analytics: false
            });
        }
    },
    filterByNamespaces (namespaces) {
        if (!(namespaces === null || namespaces === void 0 ? void 0 : namespaces.length)) {
            state.featured = state.allFeatured;
            state.recommended = state.allRecommended;
            return;
        }
        const caipNetworkIds = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getRequestedCaipNetworkIds().join(',');
        state.featured = state.allFeatured.filter((wallet)=>{
            var _wallet_chains;
            return (_wallet_chains = wallet.chains) === null || _wallet_chains === void 0 ? void 0 : _wallet_chains.some((chain)=>caipNetworkIds.includes(chain));
        });
        state.recommended = state.allRecommended.filter((wallet)=>{
            var _wallet_chains;
            return (_wallet_chains = wallet.chains) === null || _wallet_chains === void 0 ? void 0 : _wallet_chains.some((chain)=>caipNetworkIds.includes(chain));
        });
        state.filteredWallets = state.wallets.filter((wallet)=>{
            var _wallet_chains;
            return (_wallet_chains = wallet.chains) === null || _wallet_chains === void 0 ? void 0 : _wallet_chains.some((chain)=>caipNetworkIds.includes(chain));
        });
    },
    clearFilterByNamespaces () {
        state.filteredWallets = [];
    },
    setFilterByNamespace (namespace) {
        if (!namespace) {
            state.featured = state.allFeatured;
            state.recommended = state.allRecommended;
            return;
        }
        const caipNetworkIds = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getRequestedCaipNetworkIds().join(',');
        state.featured = state.allFeatured.filter((wallet)=>{
            var _wallet_chains;
            return (_wallet_chains = wallet.chains) === null || _wallet_chains === void 0 ? void 0 : _wallet_chains.some((chain)=>caipNetworkIds.includes(chain));
        });
        state.recommended = state.allRecommended.filter((wallet)=>{
            var _wallet_chains;
            return (_wallet_chains = wallet.chains) === null || _wallet_chains === void 0 ? void 0 : _wallet_chains.some((chain)=>caipNetworkIds.includes(chain));
        });
        state.filteredWallets = state.wallets.filter((wallet)=>{
            var _wallet_chains;
            return (_wallet_chains = wallet.chains) === null || _wallet_chains === void 0 ? void 0 : _wallet_chains.some((chain)=>caipNetworkIds.includes(chain));
        });
    }
}; //# sourceMappingURL=ApiController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetworkUtil",
    ()=>NetworkUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
;
;
;
;
;
const NetworkUtil = {
    /**
     * Function to handle the network switch.
     * This function has variety of conditions to handle the network switch depending on the connectors or namespace's connection states.
     * @param args.network - The network to switch to.
     * @param args.shouldConfirmSwitch - Whether to confirm the switch. If true, the user will be asked to confirm the switch if necessary.
     * @returns void
     */ onSwitchNetwork (param) {
        let { network, ignoreSwitchConfirmation = false } = param;
        const currentNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        const routerData = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data;
        const isSameNetwork = network.id === (currentNetwork === null || currentNetwork === void 0 ? void 0 : currentNetwork.id);
        if (isSameNetwork) {
            return;
        }
        const isCurrentNamespaceConnected = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].getCaipAddress(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        const isDifferentNamespace = network.chainNamespace !== __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        const isNextNamespaceConnected = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].getCaipAddress(network.chainNamespace);
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        /**
         * If the network is supported by the auth connector, we don't need to show switch active chain view.
         * But there are some cases like switching from Ethereum to Bitcoin where Bitcoin is not supported by the auth connector and users should connect with another connector.
         */ const isConnectedWithAuth = connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH;
        const isSupportedForAuthConnector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS.find((c)=>c === network.chainNamespace);
        /**
         * 1. If the ignoreSwitchConfirmation is set to true, we should switch to the network,
         * 2. If user connected with auth connector and the next network is supported by the auth connector,
         * we should switch to the network without confirmation screen.
         */ if (ignoreSwitchConfirmation || isConnectedWithAuth && isSupportedForAuthConnector) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('SwitchNetwork', {
                ...routerData,
                network
            });
        } else if (/**
         * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first.
         */ isCurrentNamespaceConnected && isDifferentNamespace && !isNextNamespaceConnected) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('SwitchActiveChain', {
                switchToChain: network.chainNamespace,
                navigateTo: 'Connect',
                navigateWithReplace: true,
                network
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('SwitchNetwork', {
                ...routerData,
                network
            });
        }
    }
}; //# sourceMappingURL=NetworkUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicStateController",
    ()=>PublicStateController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    loading: false,
    open: false,
    selectedNetworkId: undefined,
    activeChain: undefined,
    initialized: false
});
const PublicStateController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeOpen (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, 'open', callback);
    },
    set (newState) {
        Object.assign(state, {
            ...state,
            ...newState
        });
    }
}; //# sourceMappingURL=PublicStateController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalController",
    ()=>ModalController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
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
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    loading: false,
    loadingNamespaceMap: new Map(),
    open: false,
    shake: false,
    namespace: undefined
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    async open (options) {
        var _ChainController_getAccountData;
        const isConnected = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.status === 'connected';
        const namespace = options === null || options === void 0 ? void 0 : options.namespace;
        const currentNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        const isSwitchingNamespace = namespace && namespace !== currentNamespace;
        const caipAddress = (_ChainController_getAccountData = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(options === null || options === void 0 ? void 0 : options.namespace)) === null || _ChainController_getAccountData === void 0 ? void 0 : _ChainController_getAccountData.caipAddress;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcBasic) {
            // No need to add an await here if we are use basic
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].prefetch({
                fetchNetworkImages: false,
                fetchConnectorImages: false
            });
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].prefetch({
                fetchConnectorImages: !isConnected,
                fetchFeaturedWallets: !isConnected,
                fetchRecommendedWallets: !isConnected
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setFilterByNamespace(options === null || options === void 0 ? void 0 : options.namespace);
        ModalController.setLoading(true, namespace);
        if (namespace && isSwitchingNamespace) {
            var _ChainController_getNetworkData;
            const namespaceNetwork = ((_ChainController_getNetworkData = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getNetworkData(namespace)) === null || _ChainController_getNetworkData === void 0 ? void 0 : _ChainController_getNetworkData.caipNetwork) || __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getRequestedCaipNetworks(namespace)[0];
            if (namespaceNetwork) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].onSwitchNetwork({
                    network: namespaceNetwork,
                    ignoreSwitchConfirmation: true
                });
            }
        } else {
            const hasNoAdapters = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.manualWCControl || hasNoAdapters && !caipAddress) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('AllWallets');
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('ConnectingWalletConnectBasic');
                }
            } else if (options === null || options === void 0 ? void 0 : options.view) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset(options.view, options.data);
            } else if (caipAddress) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Account');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Connect');
            }
        }
        state.open = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            open: true
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'MODAL_OPEN',
            properties: {
                connected: Boolean(caipAddress)
            }
        });
    },
    close () {
        const isEmbeddedEnabled = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEmbedded;
        const isConnected = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress);
        // Only send the event if the modal is open and is about to be closed
        if (state.open) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'MODAL_CLOSE',
                properties: {
                    connected: isConnected
                }
            });
        }
        state.open = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Connect');
        ModalController.clearLoading();
        if (isEmbeddedEnabled) {
            if (isConnected) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('Account');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('Connect');
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
                open: false
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].resetUri();
    },
    setLoading (loading, namespace) {
        if (namespace) {
            state.loadingNamespaceMap.set(namespace, loading);
        }
        state.loading = loading;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            loading
        });
    },
    clearLoading () {
        state.loadingNamespaceMap.clear();
        state.loading = false;
    },
    shake () {
        if (state.shake) {
            return;
        }
        state.shake = true;
        setTimeout(()=>{
            state.shake = false;
        }, 500);
    }
};
const ModalController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=ModalController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouterController",
    ()=>RouterController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    view: 'Connect',
    history: [
        'Connect'
    ],
    transactionStack: []
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    pushTransactionStack (action) {
        state.transactionStack.push(action);
    },
    popTransactionStack (status) {
        const action = state.transactionStack.pop();
        if (!action) {
            return;
        }
        const { onSuccess, onError, onCancel } = action;
        switch(status){
            case 'success':
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
                break;
            case 'error':
                onError === null || onError === void 0 ? void 0 : onError();
                RouterController.goBack();
                break;
            case 'cancel':
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                RouterController.goBack();
                break;
            default:
        }
    },
    push (view, data) {
        if (view !== state.view) {
            state.view = view;
            state.history.push(view);
            state.data = data;
        }
    },
    reset (view, data) {
        state.view = view;
        state.history = [
            view
        ];
        state.data = data;
    },
    replace (view, data) {
        const lastView = state.history.at(-1);
        const isSameView = lastView === view;
        if (!isSameView) {
            state.view = view;
            state.history[state.history.length - 1] = view;
            state.data = data;
        }
    },
    goBack () {
        var _state_data;
        const isConnected = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress;
        const isFarcasterView = RouterController.state.view === 'ConnectingFarcaster';
        const shouldReload = !isConnected && isFarcasterView;
        if (state.history.length > 1) {
            state.history.pop();
            const [last] = state.history.slice(-1);
            if (last) {
                const isConnectView = last === 'Connect';
                if (isConnected && isConnectView) {
                    state.view = 'Account';
                } else {
                    state.view = last;
                }
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
        }
        if ((_state_data = state.data) === null || _state_data === void 0 ? void 0 : _state_data.wallet) {
            state.data.wallet = undefined;
        }
        // Reloading the iframe contentwindow and doing the view animation in the modal causes a small freeze in the transition. Doing these separately fixes that.
        setTimeout(()=>{
            if (shouldReload) {
                var _authConnector_provider, _authConnector_provider_syncDappData, _authConnector_provider1;
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setFarcasterUrl(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
                authConnector === null || authConnector === void 0 ? void 0 : (_authConnector_provider = authConnector.provider) === null || _authConnector_provider === void 0 ? void 0 : _authConnector_provider.reload();
                const optionsState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state);
                authConnector === null || authConnector === void 0 ? void 0 : (_authConnector_provider1 = authConnector.provider) === null || _authConnector_provider1 === void 0 ? void 0 : (_authConnector_provider_syncDappData = _authConnector_provider1.syncDappData) === null || _authConnector_provider_syncDappData === void 0 ? void 0 : _authConnector_provider_syncDappData.call(_authConnector_provider1, {
                    metadata: optionsState.metadata,
                    sdkVersion: optionsState.sdkVersion,
                    projectId: optionsState.projectId,
                    sdkType: optionsState.sdkType
                });
            }
        }, 100);
    },
    goBackToIndex (historyIndex) {
        if (state.history.length > 1) {
            state.history = state.history.slice(0, historyIndex + 1);
            const [last] = state.history.slice(-1);
            if (last) {
                state.view = last;
            }
        }
    },
    goBackOrCloseModal () {
        if (RouterController.state.history.length > 1) {
            RouterController.goBack();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
        }
    }
};
const RouterController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=RouterController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeController",
    ()=>ThemeController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    themeMode: 'dark',
    themeVariables: {},
    w3mThemeVariables: undefined
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    setThemeMode (themeMode) {
        state.themeMode = themeMode;
        try {
            const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
            if (authConnector) {
                const themeVariables = controller.getSnapshot().themeVariables;
                authConnector.provider.syncTheme({
                    themeMode,
                    themeVariables,
                    w3mThemeVariables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, themeMode)
                });
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.info('Unable to sync theme to auth connector');
        }
    },
    setThemeVariables (themeVariables) {
        state.themeVariables = {
            ...state.themeVariables,
            ...themeVariables
        };
        try {
            const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
            if (authConnector) {
                const themeVariablesSnapshot = controller.getSnapshot().themeVariables;
                authConnector.provider.syncTheme({
                    themeVariables: themeVariablesSnapshot,
                    w3mThemeVariables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(state.themeVariables, state.themeMode)
                });
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.info('Unable to sync theme to auth connector');
        }
    },
    getSnapshot () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(state);
    }
};
const ThemeController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=ThemeController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectorController",
    ()=>ConnectorController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$MobileWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/MobileWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
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
const defaultActiveConnectors = {
    eip155: undefined,
    solana: undefined,
    polkadot: undefined,
    bip122: undefined,
    cosmos: undefined
};
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    allConnectors: [],
    connectors: [],
    activeConnector: undefined,
    filterByNamespace: undefined,
    activeConnectorIds: {
        ...defaultActiveConnectors
    },
    filterByNamespaceMap: {
        eip155: true,
        solana: true,
        polkadot: true,
        bip122: true,
        cosmos: true
    }
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>{
            callback(state);
        });
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    initialize (namespaces) {
        namespaces.forEach((namespace)=>{
            const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedConnectorId(namespace);
            if (connectorId) {
                ConnectorController.setConnectorId(connectorId, namespace);
            }
        });
    },
    setActiveConnector (connector) {
        if (connector) {
            state.activeConnector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(connector);
        }
    },
    setConnectors (connectors) {
        const newConnectors = connectors.filter((newConnector)=>!state.allConnectors.some((existingConnector)=>existingConnector.id === newConnector.id && ConnectorController.getConnectorName(existingConnector.name) === ConnectorController.getConnectorName(newConnector.name) && existingConnector.chain === newConnector.chain));
        /**
         * We are reassigning the state of the proxy to a new array of new objects, ConnectorController can cause issues. So it is better to use ref in ConnectorController case.
         * Check more about proxy on https://valtio.dev/docs/api/basic/proxy#Gotchas
         * Check more about ref on https://valtio.dev/docs/api/basic/ref
         */ newConnectors.forEach((connector)=>{
            if (connector.type !== 'MULTI_CHAIN') {
                state.allConnectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(connector));
            }
        });
        const enabledNamespaces = ConnectorController.getEnabledNamespaces();
        const connectorsFilteredByNamespaces = ConnectorController.getEnabledConnectors(enabledNamespaces);
        state.connectors = ConnectorController.mergeMultiChainConnectors(connectorsFilteredByNamespaces);
    },
    filterByNamespaces (enabledNamespaces) {
        Object.keys(state.filterByNamespaceMap).forEach((namespace)=>{
            state.filterByNamespaceMap[namespace] = false;
        });
        enabledNamespaces.forEach((namespace)=>{
            state.filterByNamespaceMap[namespace] = true;
        });
        ConnectorController.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace (namespace, enabled) {
        state.filterByNamespaceMap[namespace] = enabled;
        ConnectorController.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces () {
        const enabledNamespaces = ConnectorController.getEnabledNamespaces();
        const enabledConnectors = ConnectorController.getEnabledConnectors(enabledNamespaces);
        const areAllNamespacesEnabled = ConnectorController.areAllNamespacesEnabled();
        state.connectors = ConnectorController.mergeMultiChainConnectors(enabledConnectors);
        if (areAllNamespacesEnabled) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].clearFilterByNamespaces();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].filterByNamespaces(enabledNamespaces);
        }
    },
    getEnabledNamespaces () {
        return Object.entries(state.filterByNamespaceMap).filter((param)=>{
            let [_, enabled] = param;
            return enabled;
        }).map((param)=>{
            let [namespace] = param;
            return namespace;
        });
    },
    getEnabledConnectors (enabledNamespaces) {
        return state.allConnectors.filter((connector)=>enabledNamespaces.includes(connector.chain));
    },
    areAllNamespacesEnabled () {
        return Object.values(state.filterByNamespaceMap).every((enabled)=>enabled);
    },
    mergeMultiChainConnectors (connectors) {
        const connectorsByNameMap = ConnectorController.generateConnectorMapByName(connectors);
        const mergedConnectors = [];
        connectorsByNameMap.forEach((keyConnectors)=>{
            const firstItem = keyConnectors[0];
            const isAuthConnector = (firstItem === null || firstItem === void 0 ? void 0 : firstItem.id) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH;
            if (keyConnectors.length > 1 && firstItem) {
                mergedConnectors.push({
                    name: firstItem.name,
                    imageUrl: firstItem.imageUrl,
                    imageId: firstItem.imageId,
                    connectors: [
                        ...keyConnectors
                    ],
                    type: isAuthConnector ? 'AUTH' : 'MULTI_CHAIN',
                    // These values are just placeholders, we don't use them in multi-chain connector select screen
                    chain: 'eip155',
                    id: (firstItem === null || firstItem === void 0 ? void 0 : firstItem.id) || ''
                });
            } else if (firstItem) {
                mergedConnectors.push(firstItem);
            }
        });
        return mergedConnectors;
    },
    generateConnectorMapByName (connectors) {
        const connectorsByNameMap = new Map();
        connectors.forEach((connector)=>{
            const { name } = connector;
            const connectorName = ConnectorController.getConnectorName(name);
            if (!connectorName) {
                return;
            }
            const connectorsByName = connectorsByNameMap.get(connectorName) || [];
            const haveSameConnector = connectorsByName.find((c)=>c.chain === connector.chain);
            if (!haveSameConnector) {
                connectorsByName.push(connector);
            }
            connectorsByNameMap.set(connectorName, connectorsByName);
        });
        return connectorsByNameMap;
    },
    getConnectorName (name) {
        if (!name) {
            return name;
        }
        const nameOverrideMap = {
            'Trust Wallet': 'Trust'
        };
        return nameOverrideMap[name] || name;
    },
    getUniqueConnectorsByName (connectors) {
        const uniqueConnectors = [];
        connectors.forEach((c)=>{
            if (!uniqueConnectors.find((uc)=>uc.chain === c.chain)) {
                uniqueConnectors.push(c);
            }
        });
        return uniqueConnectors;
    },
    addConnector (connector) {
        if (connector.id === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH) {
            var _authConnector_provider_syncDappData, _authConnector_provider, _authConnector_provider1;
            const authConnector = connector;
            const optionsState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state);
            const themeMode = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].getSnapshot().themeMode;
            const themeVariables = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].getSnapshot().themeVariables;
            authConnector === null || authConnector === void 0 ? void 0 : (_authConnector_provider = authConnector.provider) === null || _authConnector_provider === void 0 ? void 0 : (_authConnector_provider_syncDappData = _authConnector_provider.syncDappData) === null || _authConnector_provider_syncDappData === void 0 ? void 0 : _authConnector_provider_syncDappData.call(_authConnector_provider, {
                metadata: optionsState.metadata,
                sdkVersion: optionsState.sdkVersion,
                projectId: optionsState.projectId,
                sdkType: optionsState.sdkType
            });
            authConnector === null || authConnector === void 0 ? void 0 : (_authConnector_provider1 = authConnector.provider) === null || _authConnector_provider1 === void 0 ? void 0 : _authConnector_provider1.syncTheme({
                themeMode,
                themeVariables,
                w3mThemeVariables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, themeMode)
            });
            ConnectorController.setConnectors([
                connector
            ]);
        } else {
            ConnectorController.setConnectors([
                connector
            ]);
        }
    },
    getAuthConnector (chainNamespace) {
        var _authConnector_connectors;
        const activeNamespace = chainNamespace || __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        const authConnector = state.connectors.find((c)=>c.id === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH);
        if (!authConnector) {
            return undefined;
        }
        if (authConnector === null || authConnector === void 0 ? void 0 : (_authConnector_connectors = authConnector.connectors) === null || _authConnector_connectors === void 0 ? void 0 : _authConnector_connectors.length) {
            const connector = authConnector.connectors.find((c)=>c.chain === activeNamespace);
            return connector;
        }
        return authConnector;
    },
    getAnnouncedConnectorRdns () {
        return state.connectors.filter((c)=>c.type === 'ANNOUNCED').map((c)=>{
            var _c_info;
            return (_c_info = c.info) === null || _c_info === void 0 ? void 0 : _c_info.rdns;
        });
    },
    getConnectorById (id) {
        return state.allConnectors.find((c)=>c.id === id);
    },
    getConnector (id, rdns) {
        const connectorsByNamespace = state.allConnectors.filter((c)=>c.chain === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        return connectorsByNamespace.find((c)=>{
            var _c_info;
            return c.explorerId === id || ((_c_info = c.info) === null || _c_info === void 0 ? void 0 : _c_info.rdns) === rdns;
        });
    },
    syncIfAuthConnector (connector) {
        var _authConnector_provider_syncDappData, _authConnector_provider;
        if (connector.id !== 'ID_AUTH') {
            return;
        }
        const authConnector = connector;
        const optionsState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state);
        const themeMode = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].getSnapshot().themeMode;
        const themeVariables = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].getSnapshot().themeVariables;
        authConnector === null || authConnector === void 0 ? void 0 : (_authConnector_provider = authConnector.provider) === null || _authConnector_provider === void 0 ? void 0 : (_authConnector_provider_syncDappData = _authConnector_provider.syncDappData) === null || _authConnector_provider_syncDappData === void 0 ? void 0 : _authConnector_provider_syncDappData.call(_authConnector_provider, {
            metadata: optionsState.metadata,
            sdkVersion: optionsState.sdkVersion,
            sdkType: optionsState.sdkType,
            projectId: optionsState.projectId
        });
        authConnector.provider.syncTheme({
            themeMode,
            themeVariables,
            w3mThemeVariables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, themeMode)
        });
    },
    /**
     * Returns the connectors filtered by namespace.
     * @param namespace - The namespace to filter the connectors by.
     * @returns ConnectorWithProviders[].
     */ getConnectorsByNamespace (namespace) {
        const namespaceConnectors = state.allConnectors.filter((connector)=>connector.chain === namespace);
        return ConnectorController.mergeMultiChainConnectors(namespaceConnectors);
    },
    selectWalletConnector (wallet) {
        const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
        const namespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$MobileWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileWalletUtil"].handleMobileDeeplinkRedirect((connector === null || connector === void 0 ? void 0 : connector.explorerId) || wallet.id, namespace);
        if (connector) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingExternal', {
                connector
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect', {
                wallet
            });
        }
    },
    /**
     * Returns the connectors. If a namespace is provided, the connectors are filtered by namespace.
     * @param namespace - The namespace to filter the connectors by. If not provided, all connectors are returned.
     * @returns ConnectorWithProviders[].
     */ getConnectors (namespace) {
        if (namespace) {
            return ConnectorController.getConnectorsByNamespace(namespace);
        }
        return ConnectorController.mergeMultiChainConnectors(state.allConnectors);
    },
    /**
     * Sets the filter by namespace and updates the connectors.
     * @param namespace - The namespace to filter the connectors by.
     */ setFilterByNamespace (namespace) {
        state.filterByNamespace = namespace;
        state.connectors = ConnectorController.getConnectors(namespace);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].setFilterByNamespace(namespace);
    },
    setConnectorId (connectorId, namespace) {
        if (connectorId) {
            state.activeConnectorIds = {
                ...state.activeConnectorIds,
                [namespace]: connectorId
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setConnectedConnectorId(namespace, connectorId);
        }
    },
    removeConnectorId (namespace) {
        state.activeConnectorIds = {
            ...state.activeConnectorIds,
            [namespace]: undefined
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].deleteConnectedConnectorId(namespace);
    },
    getConnectorId (namespace) {
        if (!namespace) {
            return undefined;
        }
        return state.activeConnectorIds[namespace];
    },
    isConnected (namespace) {
        if (!namespace) {
            return Object.values(state.activeConnectorIds).some((id)=>Boolean(id));
        }
        return Boolean(state.activeConnectorIds[namespace]);
    },
    resetConnectorIds () {
        state.activeConnectorIds = {
            ...defaultActiveConnectors
        };
    }
};
const ConnectorController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=ConnectorController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SnackController",
    ()=>SnackController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
;
;
;
// -- Constants ----------------------------------------- //
const DEFAULT_STATE = Object.freeze({
    message: '',
    variant: 'success',
    svg: undefined,
    open: false,
    autoClose: true
});
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    ...DEFAULT_STATE
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    showLoading (message) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this._showMessage({
            message,
            variant: 'loading',
            ...options
        });
    },
    showSuccess (message) {
        this._showMessage({
            message,
            variant: 'success'
        });
    },
    showSvg (message, svg) {
        this._showMessage({
            message,
            svg
        });
    },
    showError (message) {
        const errorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].parseError(message);
        this._showMessage({
            message: errorMessage,
            variant: 'error'
        });
    },
    hide () {
        state.message = DEFAULT_STATE.message;
        state.variant = DEFAULT_STATE.variant;
        state.svg = DEFAULT_STATE.svg;
        state.open = DEFAULT_STATE.open;
        state.autoClose = DEFAULT_STATE.autoClose;
    },
    _showMessage (param) {
        let { message, svg, variant = 'success', autoClose = DEFAULT_STATE.autoClose } = param;
        if (state.open) {
            state.open = false;
            setTimeout(()=>{
                state.message = message;
                state.variant = variant;
                state.svg = svg;
                state.open = true;
                state.autoClose = autoClose;
            }, 150);
        } else {
            state.message = message;
            state.variant = variant;
            state.svg = svg;
            state.open = true;
            state.autoClose = autoClose;
        }
    }
};
const SnackController = controller; //# sourceMappingURL=SnackController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TransactionsController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionsController",
    ()=>TransactionsController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    transactions: [],
    coinbaseTransactions: {},
    transactionsByYear: {},
    lastNetworkInView: undefined,
    loading: false,
    empty: false,
    next: undefined
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    setLastNetworkInView (lastNetworkInView) {
        state.lastNetworkInView = lastNetworkInView;
    },
    async fetchTransactions (accountAddress, onramp) {
        if (!accountAddress) {
            throw new Error("Transactions can't be fetched without an accountAddress");
        }
        state.loading = true;
        try {
            var _ChainController_state_activeCaipNetwork;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchTransactions({
                account: accountAddress,
                cursor: state.next,
                onramp,
                // Coinbase transaction history state updates require the latest data
                cache: onramp === 'coinbase' ? 'no-cache' : undefined,
                chainId: (_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId
            });
            const nonSpamTransactions = TransactionsController.filterSpamTransactions(response.data);
            const sameChainTransactions = TransactionsController.filterByConnectedChain(nonSpamTransactions);
            const filteredTransactions = [
                ...state.transactions,
                ...sameChainTransactions
            ];
            state.loading = false;
            if (onramp === 'coinbase') {
                state.coinbaseTransactions = TransactionsController.groupTransactionsByYearAndMonth(state.coinbaseTransactions, response.data);
            } else {
                state.transactions = filteredTransactions;
                state.transactionsByYear = TransactionsController.groupTransactionsByYearAndMonth(state.transactionsByYear, sameChainTransactions);
            }
            state.empty = filteredTransactions.length === 0;
            state.next = response.next ? response.next : undefined;
        } catch (error) {
            var _AccountController_state_preferredAccountTypes;
            const activeChainNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'ERROR_FETCH_TRANSACTIONS',
                properties: {
                    address: accountAddress,
                    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId,
                    cursor: state.next,
                    isSmartAccount: ((_AccountController_state_preferredAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.preferredAccountTypes) === null || _AccountController_state_preferredAccountTypes === void 0 ? void 0 : _AccountController_state_preferredAccountTypes[activeChainNamespace]) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.SMART_ACCOUNT
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to fetch transactions');
            state.loading = false;
            state.empty = true;
            state.next = undefined;
        }
    },
    groupTransactionsByYearAndMonth () {
        let transactionsMap = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, transactions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        const grouped = transactionsMap;
        transactions.forEach((transaction)=>{
            const year = new Date(transaction.metadata.minedAt).getFullYear();
            const month = new Date(transaction.metadata.minedAt).getMonth();
            var _grouped_year;
            const yearTransactions = (_grouped_year = grouped[year]) !== null && _grouped_year !== void 0 ? _grouped_year : {};
            var _yearTransactions_month;
            const monthTransactions = (_yearTransactions_month = yearTransactions[month]) !== null && _yearTransactions_month !== void 0 ? _yearTransactions_month : [];
            // If there's a transaction with the same id, remove the old one
            const newMonthTransactions = monthTransactions.filter((tx)=>tx.id !== transaction.id);
            grouped[year] = {
                ...yearTransactions,
                [month]: [
                    ...newMonthTransactions,
                    transaction
                ].sort((a, b)=>new Date(b.metadata.minedAt).getTime() - new Date(a.metadata.minedAt).getTime())
            };
        });
        return grouped;
    },
    filterSpamTransactions (transactions) {
        return transactions.filter((transaction)=>{
            const isAllSpam = transaction.transfers.every((transfer)=>{
                var _transfer_nft_info;
                return ((_transfer_nft_info = transfer.nft_info) === null || _transfer_nft_info === void 0 ? void 0 : _transfer_nft_info.flags.is_spam) === true;
            });
            return !isAllSpam;
        });
    },
    filterByConnectedChain (transactions) {
        var _ChainController_state_activeCaipNetwork;
        const chainId = (_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId;
        const filteredTransactions = transactions.filter((transaction)=>transaction.metadata.chain === chainId);
        return filteredTransactions;
    },
    clearCursor () {
        state.next = undefined;
    },
    resetTransactions () {
        state.transactions = [];
        state.transactionsByYear = {};
        state.lastNetworkInView = undefined;
        state.loading = false;
        state.empty = false;
        state.next = undefined;
    }
};
const TransactionsController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller, 'API_ERROR'); //# sourceMappingURL=TransactionsController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-console */ __turbopack_context__.s([
    "ConnectionController",
    ()=>ConnectionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$TransactionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TransactionsController.js [app-client] (ecmascript)");
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
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    connections: new Map(),
    wcError: false,
    buffering: false,
    status: 'disconnected'
});
// eslint-disable-next-line init-declarations
let wcConnectionPromise;
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    _getClient () {
        return state._client;
    },
    setClient (client) {
        state._client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(client);
    },
    async connectWalletConnect () {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() || __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isSafari() && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos()) {
            var _ConnectionController__getClient_connectWalletConnect, _ConnectionController__getClient;
            if (wcConnectionPromise) {
                await wcConnectionPromise;
                wcConnectionPromise = undefined;
                return;
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isPairingExpired(state === null || state === void 0 ? void 0 : state.wcPairingExpiry)) {
                const link = state.wcUri;
                state.wcUri = link;
                return;
            }
            wcConnectionPromise = (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : (_ConnectionController__getClient_connectWalletConnect = _ConnectionController__getClient.connectWalletConnect) === null || _ConnectionController__getClient_connectWalletConnect === void 0 ? void 0 : _ConnectionController__getClient_connectWalletConnect.call(_ConnectionController__getClient).catch(()=>undefined);
            ConnectionController.state.status = 'connecting';
            await wcConnectionPromise;
            wcConnectionPromise = undefined;
            state.wcPairingExpiry = undefined;
            ConnectionController.state.status = 'connected';
        } else {
            var _ConnectionController__getClient_connectWalletConnect1, _ConnectionController__getClient1;
            await ((_ConnectionController__getClient1 = ConnectionController._getClient()) === null || _ConnectionController__getClient1 === void 0 ? void 0 : (_ConnectionController__getClient_connectWalletConnect1 = _ConnectionController__getClient1.connectWalletConnect) === null || _ConnectionController__getClient_connectWalletConnect1 === void 0 ? void 0 : _ConnectionController__getClient_connectWalletConnect1.call(_ConnectionController__getClient1));
        }
    },
    async connectExternal (options, chain) {
        let setChain = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        var _ConnectionController__getClient_connectExternal, _ConnectionController__getClient;
        await ((_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : (_ConnectionController__getClient_connectExternal = _ConnectionController__getClient.connectExternal) === null || _ConnectionController__getClient_connectExternal === void 0 ? void 0 : _ConnectionController__getClient_connectExternal.call(_ConnectionController__getClient, options));
        if (setChain) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setActiveNamespace(chain);
        }
    },
    async reconnectExternal (options) {
        var _ConnectionController__getClient_reconnectExternal, _ConnectionController__getClient;
        await ((_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : (_ConnectionController__getClient_reconnectExternal = _ConnectionController__getClient.reconnectExternal) === null || _ConnectionController__getClient_reconnectExternal === void 0 ? void 0 : _ConnectionController__getClient_reconnectExternal.call(_ConnectionController__getClient, options));
        const namespace = options.chain || __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        if (namespace) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setConnectorId(options.id, namespace);
        }
    },
    async setPreferredAccountType (accountType, namespace) {
        var _ChainController_state_activeCaipNetwork;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].setLoading(true, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        if (!authConnector) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setPreferredAccountType(accountType, namespace);
        await authConnector.provider.setPreferredAccount(accountType);
        var _AccountController_state_preferredAccountTypes;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setPreferredAccountTypes((_AccountController_state_preferredAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.preferredAccountTypes) !== null && _AccountController_state_preferredAccountTypes !== void 0 ? _AccountController_state_preferredAccountTypes : {
            [namespace]: accountType
        });
        await ConnectionController.reconnectExternal(authConnector);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].setLoading(false, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SET_PREFERRED_ACCOUNT_TYPE',
            properties: {
                accountType,
                network: ((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId) || ''
            }
        });
    },
    async signMessage (message) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.signMessage(message);
    },
    parseUnits (value, decimals) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.parseUnits(value, decimals);
    },
    formatUnits (value, decimals) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.formatUnits(value, decimals);
    },
    async sendTransaction (args) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.sendTransaction(args);
    },
    async getCapabilities (params) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.getCapabilities(params);
    },
    async grantPermissions (params) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.grantPermissions(params);
    },
    async walletGetAssets (params) {
        var _ConnectionController__getClient;
        var _ConnectionController__getClient_walletGetAssets;
        return (_ConnectionController__getClient_walletGetAssets = (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.walletGetAssets(params)) !== null && _ConnectionController__getClient_walletGetAssets !== void 0 ? _ConnectionController__getClient_walletGetAssets : {};
    },
    async estimateGas (args) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.estimateGas(args);
    },
    async writeContract (args) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.writeContract(args);
    },
    async getEnsAddress (value) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.getEnsAddress(value);
    },
    async getEnsAvatar (value) {
        var _ConnectionController__getClient;
        return (_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.getEnsAvatar(value);
    },
    checkInstalled (ids) {
        var _ConnectionController__getClient_checkInstalled, _ConnectionController__getClient;
        return ((_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : (_ConnectionController__getClient_checkInstalled = _ConnectionController__getClient.checkInstalled) === null || _ConnectionController__getClient_checkInstalled === void 0 ? void 0 : _ConnectionController__getClient_checkInstalled.call(_ConnectionController__getClient, ids)) || false;
    },
    resetWcConnection () {
        state.wcUri = undefined;
        state.wcPairingExpiry = undefined;
        state.wcLinking = undefined;
        state.recentWallet = undefined;
        state.status = 'disconnected';
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$TransactionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsController"].resetTransactions();
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].deleteWalletConnectDeepLink();
    },
    resetUri () {
        state.wcUri = undefined;
        state.wcPairingExpiry = undefined;
        wcConnectionPromise = undefined;
    },
    finalizeWcConnection () {
        var _RouterController_state_data_wallet, _RouterController_state_data;
        const { wcLinking, recentWallet } = ConnectionController.state;
        if (wcLinking) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setWalletConnectDeepLink(wcLinking);
        }
        if (recentWallet) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setAppKitRecent(recentWallet);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'CONNECT_SUCCESS',
            properties: {
                method: wcLinking ? 'mobile' : 'qrcode',
                name: ((_RouterController_state_data = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data) === null || _RouterController_state_data === void 0 ? void 0 : (_RouterController_state_data_wallet = _RouterController_state_data.wallet) === null || _RouterController_state_data_wallet === void 0 ? void 0 : _RouterController_state_data_wallet.name) || 'Unknown'
            }
        });
    },
    setWcBasic (wcBasic) {
        state.wcBasic = wcBasic;
    },
    setUri (uri) {
        state.wcUri = uri;
        state.wcPairingExpiry = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPairingExpiry();
    },
    setWcLinking (wcLinking) {
        state.wcLinking = wcLinking;
    },
    setWcError (wcError) {
        state.wcError = wcError;
        state.buffering = false;
    },
    setRecentWallet (wallet) {
        state.recentWallet = wallet;
    },
    setBuffering (buffering) {
        state.buffering = buffering;
    },
    setStatus (status) {
        state.status = status;
    },
    async disconnect (namespace) {
        try {
            var _ConnectionController__getClient;
            await ((_ConnectionController__getClient = ConnectionController._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.disconnect(namespace));
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppKitError"]('Failed to disconnect', 'INTERNAL_SDK_ERROR', error);
        }
    },
    setConnections (connections, chainNamespace) {
        state.connections.set(chainNamespace, connections);
    },
    switchAccount (param) {
        let { connection, address, namespace } = param;
        const connectedConnectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.activeConnectorIds[namespace];
        const isConnectorConnected = connectedConnectorId === connection.connectorId;
        if (isConnectorConnected) {
            const currentNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
            if (currentNetwork) {
                const caipAddress = "".concat(namespace, ":").concat(currentNetwork.id, ":").concat(address);
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setCaipAddress(caipAddress, namespace);
            } else {
                console.warn('No current network found for namespace "'.concat(namespace, '"'));
            }
        } else {
            const connector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnector(connection.connectorId);
            if (connector) {
                ConnectionController.connectExternal(connector, namespace);
            } else {
                console.warn('No connector found for namespace "'.concat(namespace, '"'));
            }
        }
    }
};
const ConnectionController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=ConnectionController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ERC7811Util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERC7811Utils",
    ()=>ERC7811Utils
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
;
const ERC7811Utils = {
    /**
     * Creates a Balance object from an ERC7811 Asset object
     * @param asset - Asset object to convert
     * @param chainId - Chain ID in CAIP-2 format
     * @returns Balance object
     */ createBalance (asset, chainId) {
        const metadata = {
            name: asset.metadata['name'] || '',
            symbol: asset.metadata['symbol'] || '',
            decimals: asset.metadata['decimals'] || 0,
            value: asset.metadata['value'] || 0,
            price: asset.metadata['price'] || 0,
            iconUrl: asset.metadata['iconUrl'] || ''
        };
        return {
            name: metadata.name,
            symbol: metadata.symbol,
            chainId,
            address: asset.address === 'native' ? undefined : this.convertAddressToCAIP10Address(asset.address, chainId),
            value: metadata.value,
            price: metadata.price,
            quantity: {
                decimals: metadata.decimals.toString(),
                numeric: this.convertHexToBalance({
                    hex: asset.balance,
                    decimals: metadata.decimals
                })
            },
            iconUrl: metadata.iconUrl
        };
    },
    /**
     * Converts a hex string to a Balance object
     * @param hex - Hex string to convert
     * @param decimals - Number of decimals to use
     * @returns Balance object
     */ convertHexToBalance (param) {
        let { hex, decimals } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(BigInt(hex), decimals);
    },
    /**
     * Converts an address to a CAIP-10 address
     * @param address - Address to convert
     * @param chainId - Chain ID in CAIP-2 format
     * @returns CAIP-10 address
     */ convertAddressToCAIP10Address (address, chainId) {
        return "".concat(chainId, ":").concat(address);
    },
    /**
     *  Creates a CAIP-2 Chain ID from a chain ID and namespace
     * @param chainId  - Chain ID in hex format
     * @param namespace  - Chain namespace
     * @returns
     */ createCAIP2ChainId (chainId, namespace) {
        return "".concat(namespace, ":").concat(parseInt(chainId, 16));
    },
    /**
     * Gets the chain ID in hex format from a CAIP-2 Chain ID
     * @param caip2ChainId - CAIP-2 Chain ID
     * @returns Chain ID in hex format
     */ getChainIdHexFromCAIP2ChainId (caip2ChainId) {
        const parts = caip2ChainId.split(':');
        if (parts.length < 2 || !parts[1]) {
            return '0x0';
        }
        const chainPart = parts[1];
        const parsed = parseInt(chainPart, 10);
        return isNaN(parsed) ? '0x0' : "0x".concat(parsed.toString(16));
    },
    /**
     * Checks if a response is a valid WalletGetAssetsResponse
     * @param response - The response to check
     * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
     */ isWalletGetAssetsResponse (response) {
        // Check if response is an object and has the expected structure
        if (typeof response !== 'object' || response === null) {
            return false;
        }
        // Check if all values are arrays and conform to the expected asset structure
        return Object.values(response).every((value)=>Array.isArray(value) && value.every((asset)=>this.isValidAsset(asset)));
    },
    /**
     * Checks if an asset object is valid.
     * @param asset - The asset object to check.
     * @returns True if the asset is valid, false otherwise.
     */ isValidAsset (asset) {
        return typeof asset === 'object' && asset !== null && typeof asset.address === 'string' && typeof asset.balance === 'string' && (asset.type === 'ERC20' || asset.type === 'NATIVE') && typeof asset.metadata === 'object' && asset.metadata !== null && typeof asset.metadata['name'] === 'string' && typeof asset.metadata['symbol'] === 'string' && typeof asset.metadata['decimals'] === 'number' && typeof asset.metadata['price'] === 'number' && typeof asset.metadata['iconUrl'] === 'string';
    }
}; //# sourceMappingURL=ERC7811Util.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SendApiUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SendApiUtil",
    ()=>SendApiUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ERC7811Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ERC7811Util.js [app-client] (ecmascript)");
;
;
;
;
;
const SendApiUtil = {
    async getMyTokensWithBalance (forceUpdate) {
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address;
        const caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        if (!address || !caipNetwork) {
            return [];
        }
        // Extract EIP-155 specific logic
        if (caipNetwork.chainNamespace === 'eip155') {
            const eip155Balances = await this.getEIP155Balances(address, caipNetwork);
            if (eip155Balances) {
                return this.filterLowQualityTokens(eip155Balances);
            }
        }
        // Fallback to 1Inch API
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getBalance(address, caipNetwork.caipNetworkId, forceUpdate);
        return this.filterLowQualityTokens(response.balances);
    },
    async getEIP155Balances (address, caipNetwork) {
        try {
            var _walletCapabilities_chainIdHex_assetDiscovery, _walletCapabilities_chainIdHex;
            const chainIdHex = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ERC7811Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERC7811Utils"].getChainIdHexFromCAIP2ChainId(caipNetwork.caipNetworkId);
            const walletCapabilities = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].getCapabilities(address);
            if (!(walletCapabilities === null || walletCapabilities === void 0 ? void 0 : (_walletCapabilities_chainIdHex = walletCapabilities[chainIdHex]) === null || _walletCapabilities_chainIdHex === void 0 ? void 0 : (_walletCapabilities_chainIdHex_assetDiscovery = _walletCapabilities_chainIdHex['assetDiscovery']) === null || _walletCapabilities_chainIdHex_assetDiscovery === void 0 ? void 0 : _walletCapabilities_chainIdHex_assetDiscovery.supported)) {
                return null;
            }
            const walletGetAssetsResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].walletGetAssets({
                account: address,
                chainFilter: [
                    chainIdHex
                ]
            });
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ERC7811Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERC7811Utils"].isWalletGetAssetsResponse(walletGetAssetsResponse)) {
                return null;
            }
            const assets = walletGetAssetsResponse[chainIdHex] || [];
            return assets.map((asset)=>__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ERC7811Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERC7811Utils"].createBalance(asset, caipNetwork.caipNetworkId));
        } catch (error) {
            return null;
        }
    },
    /**
     * The 1Inch API includes many low-quality tokens in the balance response,
     * which appear inconsistently. This filter prevents them from being displayed.
     */ filterLowQualityTokens (balances) {
        return balances.filter((balance)=>balance.quantity.decimals !== '0');
    },
    mapBalancesToSwapTokens (balances) {
        return (balances === null || balances === void 0 ? void 0 : balances.map((token)=>({
                ...token,
                address: (token === null || token === void 0 ? void 0 : token.address) ? token.address : __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveNetworkTokenAddress(),
                decimals: parseInt(token.quantity.decimals, 10),
                logoUri: token.iconUrl,
                eip2612: false
            }))) || [];
    }
}; //# sourceMappingURL=SendApiUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SendController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SendController",
    ()=>SendController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ContractUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SendApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SendApiUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
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
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    tokenBalances: [],
    loading: false
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    setToken (token) {
        if (token) {
            state.token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(token);
        }
    },
    setTokenAmount (sendTokenAmount) {
        state.sendTokenAmount = sendTokenAmount;
    },
    setReceiverAddress (receiverAddress) {
        state.receiverAddress = receiverAddress;
    },
    setReceiverProfileImageUrl (receiverProfileImageUrl) {
        state.receiverProfileImageUrl = receiverProfileImageUrl;
    },
    setReceiverProfileName (receiverProfileName) {
        state.receiverProfileName = receiverProfileName;
    },
    setNetworkBalanceInUsd (networkBalanceInUSD) {
        state.networkBalanceInUSD = networkBalanceInUSD;
    },
    setLoading (loading) {
        state.loading = loading;
    },
    async sendToken () {
        try {
            var _ChainController_state_activeCaipNetwork;
            SendController.setLoading(true);
            switch((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.chainNamespace){
                case 'eip155':
                    await SendController.sendEvmToken();
                    return;
                case 'solana':
                    await SendController.sendSolanaToken();
                    return;
                default:
                    throw new Error('Unsupported chain');
            }
        } finally{
            SendController.setLoading(false);
        }
    },
    async sendEvmToken () {
        var _AccountController_state_preferredAccountTypes, _SendController_state_token;
        const activeChainNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        const activeAccountType = (_AccountController_state_preferredAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.preferredAccountTypes) === null || _AccountController_state_preferredAccountTypes === void 0 ? void 0 : _AccountController_state_preferredAccountTypes[activeChainNamespace];
        if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
            throw new Error('An amount and receiver address are required');
        }
        if (!SendController.state.token) {
            throw new Error('A token is required');
        }
        if ((_SendController_state_token = SendController.state.token) === null || _SendController_state_token === void 0 ? void 0 : _SendController_state_token.address) {
            var _ChainController_state_activeCaipNetwork;
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'SEND_INITIATED',
                properties: {
                    isSmartAccount: activeAccountType === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token.address,
                    amount: SendController.state.sendTokenAmount,
                    network: ((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId) || ''
                }
            });
            await SendController.sendERC20Token({
                receiverAddress: SendController.state.receiverAddress,
                tokenAddress: SendController.state.token.address,
                sendTokenAmount: SendController.state.sendTokenAmount,
                decimals: SendController.state.token.quantity.decimals
            });
        } else {
            var _ChainController_state_activeCaipNetwork1;
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'SEND_INITIATED',
                properties: {
                    isSmartAccount: activeAccountType === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token.symbol || '',
                    amount: SendController.state.sendTokenAmount,
                    network: ((_ChainController_state_activeCaipNetwork1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork1 === void 0 ? void 0 : _ChainController_state_activeCaipNetwork1.caipNetworkId) || ''
                }
            });
            await SendController.sendNativeToken({
                receiverAddress: SendController.state.receiverAddress,
                sendTokenAmount: SendController.state.sendTokenAmount,
                decimals: SendController.state.token.quantity.decimals
            });
        }
    },
    async fetchTokenBalance (onError) {
        var _ChainController_state_activeCaipNetwork, _ChainController_state_activeCaipNetwork1;
        state.loading = true;
        const chainId = (_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId;
        const chain = (_ChainController_state_activeCaipNetwork1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork1 === void 0 ? void 0 : _ChainController_state_activeCaipNetwork1.chainNamespace;
        const caipAddress = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress;
        const address = caipAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(caipAddress) : undefined;
        if (state.lastRetry && !__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isAllowedRetry(state.lastRetry, 30 * __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ONE_SEC_MS)) {
            state.loading = false;
            return [];
        }
        try {
            if (address && chainId && chain) {
                const balances = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SendApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendApiUtil"].getMyTokensWithBalance();
                state.tokenBalances = balances;
                state.lastRetry = undefined;
                return balances;
            }
        } catch (error) {
            state.lastRetry = Date.now();
            onError === null || onError === void 0 ? void 0 : onError(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Token Balance Unavailable');
        } finally{
            state.loading = false;
        }
        return [];
    },
    fetchNetworkBalance () {
        if (state.tokenBalances.length === 0) {
            return;
        }
        const networkTokenBalances = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SendApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendApiUtil"].mapBalancesToSwapTokens(state.tokenBalances);
        if (!networkTokenBalances) {
            return;
        }
        const networkToken = networkTokenBalances.find((token)=>token.address === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveNetworkTokenAddress());
        if (!networkToken) {
            return;
        }
        state.networkBalanceInUSD = networkToken ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].multiply(networkToken.quantity.numeric, networkToken.price).toString() : '0';
    },
    async sendNativeToken (params) {
        var _AccountController_state_preferredAccountTypes, _SendController_state_token, _ChainController_state_activeCaipNetwork, _ConnectionController__getClient;
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].pushTransactionStack({});
        const to = params.receiverAddress;
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
        const data = '0x';
        await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].sendTransaction({
            chainNamespace: 'eip155',
            to,
            address,
            data,
            value: value !== null && value !== void 0 ? value : BigInt(0)
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SEND_SUCCESS',
            properties: {
                isSmartAccount: ((_AccountController_state_preferredAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.preferredAccountTypes) === null || _AccountController_state_preferredAccountTypes === void 0 ? void 0 : _AccountController_state_preferredAccountTypes['eip155']) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.SMART_ACCOUNT,
                token: ((_SendController_state_token = SendController.state.token) === null || _SendController_state_token === void 0 ? void 0 : _SendController_state_token.symbol) || '',
                amount: params.sendTokenAmount,
                network: ((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId) || ''
            }
        });
        (_ConnectionController__getClient = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"]._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.updateBalance('eip155');
        SendController.resetSend();
    },
    async sendERC20Token (params) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].pushTransactionStack({
            onSuccess () {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('Account');
            }
        });
        const amount = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
            const tokenAddress = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(params.tokenAddress);
            await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].writeContract({
                fromAddress: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address,
                tokenAddress,
                args: [
                    params.receiverAddress,
                    amount !== null && amount !== void 0 ? amount : BigInt(0)
                ],
                method: 'transfer',
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ContractUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractUtil"].getERC20Abi(tokenAddress),
                chainNamespace: 'eip155'
            });
            SendController.resetSend();
        }
    },
    async sendSolanaToken () {
        var _ConnectionController__getClient;
        if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
            throw new Error('An amount and receiver address are required');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].pushTransactionStack({
            onSuccess () {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('Account');
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].sendTransaction({
            chainNamespace: 'solana',
            to: SendController.state.receiverAddress,
            value: SendController.state.sendTokenAmount
        });
        (_ConnectionController__getClient = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"]._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.updateBalance('solana');
        SendController.resetSend();
    },
    resetSend () {
        state.token = undefined;
        state.sendTokenAmount = undefined;
        state.receiverAddress = undefined;
        state.receiverProfileImageUrl = undefined;
        state.receiverProfileName = undefined;
        state.loading = false;
        state.tokenBalances = [];
    }
};
const SendController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=SendController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChainController",
    ()=>ChainController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SendController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SendController.js [app-client] (ecmascript)");
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
;
;
;
;
;
// -- Constants ----------------------------------------- //
const accountState = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: new Map(),
    allAccounts: [],
    user: undefined
};
const networkState = {
    caipNetwork: undefined,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
};
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["proxyMap"])(),
    activeCaipAddress: undefined,
    activeChain: undefined,
    activeCaipNetwork: undefined,
    noAdapters: false,
    universalAdapter: {
        networkControllerClient: undefined,
        connectionControllerClient: undefined
    },
    isSwitchingNamespace: false
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>{
            callback(state);
        });
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    subscribeChainProp (property, callback, chain) {
        let prev = undefined;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state.chains, ()=>{
            const activeChain = chain || state.activeChain;
            if (activeChain) {
                var _state_chains_get;
                const nextValue = (_state_chains_get = state.chains.get(activeChain)) === null || _state_chains_get === void 0 ? void 0 : _state_chains_get[property];
                if (prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            }
        });
    },
    initialize (adapters, caipNetworks, clients) {
        const { chainId: activeChainId, namespace: activeNamespace } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getActiveNetworkProps();
        const activeCaipNetwork = caipNetworks === null || caipNetworks === void 0 ? void 0 : caipNetworks.find((network)=>network.id.toString() === (activeChainId === null || activeChainId === void 0 ? void 0 : activeChainId.toString()));
        const defaultAdapter = adapters.find((adapter)=>(adapter === null || adapter === void 0 ? void 0 : adapter.namespace) === activeNamespace);
        const adapterToActivate = defaultAdapter || (adapters === null || adapters === void 0 ? void 0 : adapters[0]);
        const namespacesFromAdapters = adapters.map((a)=>a.namespace).filter((n)=>n !== undefined);
        var _caipNetworks_map;
        /**
         * If the AppKit is in embedded mode (for Demo app), we should get the available namespaces from the adapters.
         */ const namespaces = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEmbedded ? new Set([
            ...namespacesFromAdapters
        ]) : new Set([
            ...(_caipNetworks_map = caipNetworks === null || caipNetworks === void 0 ? void 0 : caipNetworks.map((network)=>network.chainNamespace)) !== null && _caipNetworks_map !== void 0 ? _caipNetworks_map : []
        ]);
        if ((adapters === null || adapters === void 0 ? void 0 : adapters.length) === 0 || !adapterToActivate) {
            state.noAdapters = true;
        }
        if (!state.noAdapters) {
            state.activeChain = adapterToActivate === null || adapterToActivate === void 0 ? void 0 : adapterToActivate.namespace;
            state.activeCaipNetwork = activeCaipNetwork;
            ChainController.setChainNetworkData(adapterToActivate === null || adapterToActivate === void 0 ? void 0 : adapterToActivate.namespace, {
                caipNetwork: activeCaipNetwork
            });
            if (state.activeChain) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
                    activeChain: adapterToActivate === null || adapterToActivate === void 0 ? void 0 : adapterToActivate.namespace
                });
            }
        }
        namespaces.forEach((namespace)=>{
            const namespaceNetworks = caipNetworks === null || caipNetworks === void 0 ? void 0 : caipNetworks.filter((network)=>network.chainNamespace === namespace);
            ChainController.state.chains.set(namespace, {
                namespace,
                networkState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
                    ...networkState,
                    caipNetwork: namespaceNetworks === null || namespaceNetworks === void 0 ? void 0 : namespaceNetworks[0]
                }),
                accountState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])(accountState),
                caipNetworks: namespaceNetworks !== null && namespaceNetworks !== void 0 ? namespaceNetworks : [],
                ...clients
            });
            ChainController.setRequestedCaipNetworks(namespaceNetworks !== null && namespaceNetworks !== void 0 ? namespaceNetworks : [], namespace);
        });
    },
    removeAdapter (namespace) {
        if (state.activeChain === namespace) {
            const nextAdapter = Array.from(state.chains.entries()).find((param)=>{
                let [chainNamespace] = param;
                return chainNamespace !== namespace;
            });
            if (nextAdapter) {
                var _nextAdapter__caipNetworks, _nextAdapter_;
                const caipNetwork = (_nextAdapter_ = nextAdapter[1]) === null || _nextAdapter_ === void 0 ? void 0 : (_nextAdapter__caipNetworks = _nextAdapter_.caipNetworks) === null || _nextAdapter__caipNetworks === void 0 ? void 0 : _nextAdapter__caipNetworks[0];
                if (caipNetwork) {
                    ChainController.setActiveCaipNetwork(caipNetwork);
                }
            }
        }
        state.chains.delete(namespace);
    },
    addAdapter (adapter, param, caipNetworks) {
        let { networkControllerClient, connectionControllerClient } = param;
        state.chains.set(adapter.namespace, {
            namespace: adapter.namespace,
            networkState: {
                ...networkState,
                caipNetwork: caipNetworks[0]
            },
            accountState,
            caipNetworks,
            connectionControllerClient,
            networkControllerClient
        });
        var _caipNetworks_filter;
        ChainController.setRequestedCaipNetworks((_caipNetworks_filter = caipNetworks === null || caipNetworks === void 0 ? void 0 : caipNetworks.filter((caipNetwork)=>caipNetwork.chainNamespace === adapter.namespace)) !== null && _caipNetworks_filter !== void 0 ? _caipNetworks_filter : [], adapter.namespace);
    },
    addNetwork (network) {
        const chainAdapter = state.chains.get(network.chainNamespace);
        if (chainAdapter) {
            var _chainAdapter_caipNetworks;
            const newNetworks = [
                ...chainAdapter.caipNetworks || []
            ];
            if (!((_chainAdapter_caipNetworks = chainAdapter.caipNetworks) === null || _chainAdapter_caipNetworks === void 0 ? void 0 : _chainAdapter_caipNetworks.find((caipNetwork)=>caipNetwork.id === network.id))) {
                newNetworks.push(network);
            }
            state.chains.set(network.chainNamespace, {
                ...chainAdapter,
                caipNetworks: newNetworks
            });
            ChainController.setRequestedCaipNetworks(newNetworks, network.chainNamespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].filterByNamespace(network.chainNamespace, true);
        }
    },
    removeNetwork (namespace, networkId) {
        const chainAdapter = state.chains.get(namespace);
        if (chainAdapter) {
            var _state_activeCaipNetwork, _chainAdapter_caipNetworks, _chainAdapter_caipNetworks1;
            // Check if network being removed is active network
            const isActiveNetwork = ((_state_activeCaipNetwork = state.activeCaipNetwork) === null || _state_activeCaipNetwork === void 0 ? void 0 : _state_activeCaipNetwork.id) === networkId;
            // Filter out the network being removed
            const newCaipNetworksOfAdapter = [
                ...((_chainAdapter_caipNetworks = chainAdapter.caipNetworks) === null || _chainAdapter_caipNetworks === void 0 ? void 0 : _chainAdapter_caipNetworks.filter((network)=>network.id !== networkId)) || []
            ];
            // If active network was removed and there are other networks available, switch to first one
            if (isActiveNetwork && (chainAdapter === null || chainAdapter === void 0 ? void 0 : (_chainAdapter_caipNetworks1 = chainAdapter.caipNetworks) === null || _chainAdapter_caipNetworks1 === void 0 ? void 0 : _chainAdapter_caipNetworks1[0])) {
                ChainController.setActiveCaipNetwork(chainAdapter.caipNetworks[0]);
            }
            state.chains.set(namespace, {
                ...chainAdapter,
                caipNetworks: newCaipNetworksOfAdapter
            });
            ChainController.setRequestedCaipNetworks(newCaipNetworksOfAdapter || [], namespace);
            if (newCaipNetworksOfAdapter.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].filterByNamespace(namespace, false);
            }
        }
    },
    setAdapterNetworkState (chain, props) {
        const chainAdapter = state.chains.get(chain);
        if (chainAdapter) {
            chainAdapter.networkState = {
                ...chainAdapter.networkState || networkState,
                ...props
            };
            state.chains.set(chain, chainAdapter);
        }
    },
    setChainAccountData (chain, accountProps) {
        let _unknown = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (!chain) {
            throw new Error('Chain is required to update chain account data');
        }
        const chainAdapter = state.chains.get(chain);
        if (chainAdapter) {
            const newAccountState = {
                ...chainAdapter.accountState || accountState,
                ...accountProps
            };
            state.chains.set(chain, {
                ...chainAdapter,
                accountState: newAccountState
            });
            if (state.chains.size === 1 || state.activeChain === chain) {
                if (accountProps.caipAddress) {
                    state.activeCaipAddress = accountProps.caipAddress;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].replaceState(newAccountState);
            }
        }
    },
    setChainNetworkData (chain, networkProps) {
        if (!chain) {
            return;
        }
        const chainAdapter = state.chains.get(chain);
        if (chainAdapter) {
            const newNetworkState = {
                ...chainAdapter.networkState || networkState,
                ...networkProps
            };
            state.chains.set(chain, {
                ...chainAdapter,
                networkState: newNetworkState
            });
        }
    },
    // eslint-disable-next-line max-params
    setAccountProp (prop, value, chain) {
        let replaceState = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
        ChainController.setChainAccountData(chain, {
            [prop]: value
        }, replaceState);
        if (prop === 'status' && value === 'disconnected' && chain) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].removeConnectorId(chain);
        }
    },
    setActiveNamespace (chain) {
        var _newAdapter_networkState;
        state.activeChain = chain;
        const newAdapter = chain ? state.chains.get(chain) : undefined;
        const caipNetwork = newAdapter === null || newAdapter === void 0 ? void 0 : (_newAdapter_networkState = newAdapter.networkState) === null || _newAdapter_networkState === void 0 ? void 0 : _newAdapter_networkState.caipNetwork;
        if ((caipNetwork === null || caipNetwork === void 0 ? void 0 : caipNetwork.id) && chain) {
            var _newAdapter_accountState;
            state.activeCaipAddress = newAdapter === null || newAdapter === void 0 ? void 0 : (_newAdapter_accountState = newAdapter.accountState) === null || _newAdapter_accountState === void 0 ? void 0 : _newAdapter_accountState.caipAddress;
            state.activeCaipNetwork = caipNetwork;
            ChainController.setChainNetworkData(chain, {
                caipNetwork
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setActiveCaipNetworkId(caipNetwork === null || caipNetwork === void 0 ? void 0 : caipNetwork.caipNetworkId);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
                activeChain: chain,
                selectedNetworkId: caipNetwork === null || caipNetwork === void 0 ? void 0 : caipNetwork.caipNetworkId
            });
        }
    },
    setActiveCaipNetwork (caipNetwork) {
        var _newAdapter_accountState, _state_activeCaipNetwork;
        if (!caipNetwork) {
            return;
        }
        if (state.activeChain !== caipNetwork.chainNamespace) {
            ChainController.setIsSwitchingNamespace(true);
        }
        const newAdapter = state.chains.get(caipNetwork.chainNamespace);
        state.activeChain = caipNetwork.chainNamespace;
        state.activeCaipNetwork = caipNetwork;
        ChainController.setChainNetworkData(caipNetwork.chainNamespace, {
            caipNetwork
        });
        if (newAdapter === null || newAdapter === void 0 ? void 0 : (_newAdapter_accountState = newAdapter.accountState) === null || _newAdapter_accountState === void 0 ? void 0 : _newAdapter_accountState.address) {
            var _newAdapter_accountState1;
            state.activeCaipAddress = "".concat(caipNetwork.chainNamespace, ":").concat(caipNetwork.id, ":").concat(newAdapter === null || newAdapter === void 0 ? void 0 : (_newAdapter_accountState1 = newAdapter.accountState) === null || _newAdapter_accountState1 === void 0 ? void 0 : _newAdapter_accountState1.address);
        } else {
            state.activeCaipAddress = undefined;
        }
        // Update the chain's account state with the new caip address value
        ChainController.setAccountProp('caipAddress', state.activeCaipAddress, caipNetwork.chainNamespace);
        if (newAdapter) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].replaceState(newAdapter.accountState);
        }
        // Reset send state when switching networks
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SendController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendController"].resetSend();
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            activeChain: state.activeChain,
            selectedNetworkId: (_state_activeCaipNetwork = state.activeCaipNetwork) === null || _state_activeCaipNetwork === void 0 ? void 0 : _state_activeCaipNetwork.caipNetworkId
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setActiveCaipNetworkId(caipNetwork.caipNetworkId);
        const isSupported = ChainController.checkIfSupportedNetwork(caipNetwork.chainNamespace);
        if (!isSupported && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableNetworkSwitch && !__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.allowUnsupportedChain && !__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcBasic) {
            ChainController.showUnsupportedChainUI();
        }
    },
    addCaipNetwork (caipNetwork) {
        if (!caipNetwork) {
            return;
        }
        const chain = state.chains.get(caipNetwork.chainNamespace);
        if (chain) {
            var _chain_caipNetworks;
            chain === null || chain === void 0 ? void 0 : (_chain_caipNetworks = chain.caipNetworks) === null || _chain_caipNetworks === void 0 ? void 0 : _chain_caipNetworks.push(caipNetwork);
        }
    },
    async switchActiveNamespace (namespace) {
        var _ChainController_getNetworkData;
        if (!namespace) {
            return;
        }
        const isDifferentChain = namespace !== ChainController.state.activeChain;
        const caipNetworkOfNamespace = (_ChainController_getNetworkData = ChainController.getNetworkData(namespace)) === null || _ChainController_getNetworkData === void 0 ? void 0 : _ChainController_getNetworkData.caipNetwork;
        const firstNetworkWithChain = ChainController.getCaipNetworkByNamespace(namespace, caipNetworkOfNamespace === null || caipNetworkOfNamespace === void 0 ? void 0 : caipNetworkOfNamespace.id);
        if (isDifferentChain && firstNetworkWithChain) {
            await ChainController.switchActiveNetwork(firstNetworkWithChain);
        }
    },
    async switchActiveNetwork (network) {
        var _activeAdapter_caipNetworks;
        const activeAdapter = ChainController.state.chains.get(ChainController.state.activeChain);
        const unsupportedNetwork = !(activeAdapter === null || activeAdapter === void 0 ? void 0 : (_activeAdapter_caipNetworks = activeAdapter.caipNetworks) === null || _activeAdapter_caipNetworks === void 0 ? void 0 : _activeAdapter_caipNetworks.some((caipNetwork)=>{
            var _state_activeCaipNetwork;
            return caipNetwork.id === ((_state_activeCaipNetwork = state.activeCaipNetwork) === null || _state_activeCaipNetwork === void 0 ? void 0 : _state_activeCaipNetwork.id);
        }));
        const networkControllerClient = ChainController.getNetworkControllerClient(network.chainNamespace);
        if (networkControllerClient) {
            try {
                await networkControllerClient.switchCaipNetwork(network);
                if (unsupportedNetwork) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].goBack();
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'SWITCH_NETWORK',
                properties: {
                    network: network.caipNetworkId
                }
            });
        }
    },
    getNetworkControllerClient (chainNamespace) {
        const chain = chainNamespace || state.activeChain;
        const chainAdapter = state.chains.get(chain);
        if (!chainAdapter) {
            throw new Error('Chain adapter not found');
        }
        if (!chainAdapter.networkControllerClient) {
            throw new Error('NetworkController client not set');
        }
        return chainAdapter.networkControllerClient;
    },
    getConnectionControllerClient (_chain) {
        const chain = _chain || state.activeChain;
        if (!chain) {
            throw new Error('Chain is required to get connection controller client');
        }
        const chainAdapter = state.chains.get(chain);
        if (!(chainAdapter === null || chainAdapter === void 0 ? void 0 : chainAdapter.connectionControllerClient)) {
            throw new Error('ConnectionController client not set');
        }
        return chainAdapter.connectionControllerClient;
    },
    getAccountProp (key, _chain) {
        var _state_chains_get;
        let chain = state.activeChain;
        if (_chain) {
            chain = _chain;
        }
        if (!chain) {
            return undefined;
        }
        const chainAccountState = (_state_chains_get = state.chains.get(chain)) === null || _state_chains_get === void 0 ? void 0 : _state_chains_get.accountState;
        if (!chainAccountState) {
            return undefined;
        }
        return chainAccountState[key];
    },
    getNetworkProp (key, namespace) {
        var _state_chains_get;
        const chainNetworkState = (_state_chains_get = state.chains.get(namespace)) === null || _state_chains_get === void 0 ? void 0 : _state_chains_get.networkState;
        if (!chainNetworkState) {
            return undefined;
        }
        return chainNetworkState[key];
    },
    getRequestedCaipNetworks (chainToFilter) {
        const adapter = state.chains.get(chainToFilter);
        const { approvedCaipNetworkIds = [], requestedCaipNetworks = [] } = (adapter === null || adapter === void 0 ? void 0 : adapter.networkState) || {};
        const sortedNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        return sortedNetworks;
    },
    getAllRequestedCaipNetworks () {
        const requestedCaipNetworks = [];
        state.chains.forEach((chainAdapter)=>{
            const caipNetworks = ChainController.getRequestedCaipNetworks(chainAdapter.namespace);
            requestedCaipNetworks.push(...caipNetworks);
        });
        return requestedCaipNetworks;
    },
    setRequestedCaipNetworks (caipNetworks, chain) {
        ChainController.setAdapterNetworkState(chain, {
            requestedCaipNetworks: caipNetworks
        });
        const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
        const namespaces = allRequestedCaipNetworks.map((network)=>network.chainNamespace);
        const uniqueNamespaces = Array.from(new Set(namespaces));
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].filterByNamespaces(uniqueNamespaces);
    },
    getAllApprovedCaipNetworkIds () {
        const approvedCaipNetworkIds = [];
        state.chains.forEach((chainAdapter)=>{
            const approvedIds = ChainController.getApprovedCaipNetworkIds(chainAdapter.namespace);
            approvedCaipNetworkIds.push(...approvedIds);
        });
        return approvedCaipNetworkIds;
    },
    getActiveCaipNetwork () {
        return state.activeCaipNetwork;
    },
    getActiveCaipAddress () {
        return state.activeCaipAddress;
    },
    getApprovedCaipNetworkIds (namespace) {
        var _adapter_networkState;
        const adapter = state.chains.get(namespace);
        const approvedCaipNetworkIds = (adapter === null || adapter === void 0 ? void 0 : (_adapter_networkState = adapter.networkState) === null || _adapter_networkState === void 0 ? void 0 : _adapter_networkState.approvedCaipNetworkIds) || [];
        return approvedCaipNetworkIds;
    },
    async setApprovedCaipNetworksData (namespace) {
        const networkControllerClient = ChainController.getNetworkControllerClient();
        const data = await (networkControllerClient === null || networkControllerClient === void 0 ? void 0 : networkControllerClient.getApprovedCaipNetworksData());
        ChainController.setAdapterNetworkState(namespace, {
            approvedCaipNetworkIds: data === null || data === void 0 ? void 0 : data.approvedCaipNetworkIds,
            supportsAllNetworks: data === null || data === void 0 ? void 0 : data.supportsAllNetworks
        });
    },
    checkIfSupportedNetwork (namespace, caipNetwork) {
        const activeCaipNetwork = caipNetwork || state.activeCaipNetwork;
        const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(namespace);
        if (!requestedCaipNetworks.length) {
            return true;
        }
        return requestedCaipNetworks === null || requestedCaipNetworks === void 0 ? void 0 : requestedCaipNetworks.some((network)=>network.id === (activeCaipNetwork === null || activeCaipNetwork === void 0 ? void 0 : activeCaipNetwork.id));
    },
    checkIfSupportedChainId (chainId) {
        if (!state.activeChain) {
            return true;
        }
        const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(state.activeChain);
        return requestedCaipNetworks === null || requestedCaipNetworks === void 0 ? void 0 : requestedCaipNetworks.some((network)=>network.id === chainId);
    },
    // Smart Account Network Handlers
    setSmartAccountEnabledNetworks (smartAccountEnabledNetworks, chain) {
        ChainController.setAdapterNetworkState(chain, {
            smartAccountEnabledNetworks
        });
    },
    checkIfSmartAccountEnabled () {
        var _state_activeCaipNetwork;
        const networkId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].caipNetworkIdToNumber((_state_activeCaipNetwork = state.activeCaipNetwork) === null || _state_activeCaipNetwork === void 0 ? void 0 : _state_activeCaipNetwork.caipNetworkId);
        const activeChain = state.activeChain;
        if (!activeChain || !networkId) {
            return false;
        }
        const smartAccountEnabledNetworks = ChainController.getNetworkProp('smartAccountEnabledNetworks', activeChain);
        return Boolean(smartAccountEnabledNetworks === null || smartAccountEnabledNetworks === void 0 ? void 0 : smartAccountEnabledNetworks.includes(Number(networkId)));
    },
    getActiveNetworkTokenAddress () {
        var _state_activeCaipNetwork, _state_activeCaipNetwork1;
        const namespace = ((_state_activeCaipNetwork = state.activeCaipNetwork) === null || _state_activeCaipNetwork === void 0 ? void 0 : _state_activeCaipNetwork.chainNamespace) || 'eip155';
        const chainId = ((_state_activeCaipNetwork1 = state.activeCaipNetwork) === null || _state_activeCaipNetwork1 === void 0 ? void 0 : _state_activeCaipNetwork1.id) || 1;
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].NATIVE_TOKEN_ADDRESS[namespace];
        return "".concat(namespace, ":").concat(chainId, ":").concat(address);
    },
    showUnsupportedChainUI () {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].open({
            view: 'UnsupportedChain'
        });
    },
    checkIfNamesSupported () {
        const activeCaipNetwork = state.activeCaipNetwork;
        return Boolean((activeCaipNetwork === null || activeCaipNetwork === void 0 ? void 0 : activeCaipNetwork.chainNamespace) && __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(activeCaipNetwork.chainNamespace));
    },
    resetNetwork (namespace) {
        ChainController.setAdapterNetworkState(namespace, {
            approvedCaipNetworkIds: undefined,
            supportsAllNetworks: true,
            smartAccountEnabledNetworks: []
        });
    },
    resetAccount (chain) {
        const chainToWrite = chain;
        if (!chainToWrite) {
            throw new Error('Chain is required to set account prop');
        }
        state.activeCaipAddress = undefined;
        ChainController.setChainAccountData(chainToWrite, {
            smartAccountDeployed: false,
            currentTab: 0,
            caipAddress: undefined,
            address: undefined,
            balance: undefined,
            balanceSymbol: undefined,
            profileName: undefined,
            profileImage: undefined,
            addressExplorerUrl: undefined,
            tokenBalance: [],
            connectedWalletInfo: undefined,
            preferredAccountTypes: undefined,
            socialProvider: undefined,
            socialWindow: undefined,
            farcasterUrl: undefined,
            allAccounts: [],
            user: undefined,
            status: 'disconnected'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].removeConnectorId(chainToWrite);
    },
    setIsSwitchingNamespace (isSwitchingNamespace) {
        state.isSwitchingNamespace = isSwitchingNamespace;
    },
    getFirstCaipNetworkSupportsAuthConnector () {
        const availableChains = [];
        let firstCaipNetwork = undefined;
        state.chains.forEach((chain)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS.find((ns)=>ns === chain.namespace)) {
                if (chain.namespace) {
                    availableChains.push(chain.namespace);
                }
            }
        });
        if (availableChains.length > 0) {
            var _state_chains_get_caipNetworks, _state_chains_get;
            const firstAvailableChain = availableChains[0];
            firstCaipNetwork = firstAvailableChain ? (_state_chains_get = state.chains.get(firstAvailableChain)) === null || _state_chains_get === void 0 ? void 0 : (_state_chains_get_caipNetworks = _state_chains_get.caipNetworks) === null || _state_chains_get_caipNetworks === void 0 ? void 0 : _state_chains_get_caipNetworks[0] : undefined;
            return firstCaipNetwork;
        }
        return undefined;
    },
    getAccountData (chainNamespace) {
        var _ChainController_state_chains_get;
        if (!chainNamespace) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state;
        }
        return (_ChainController_state_chains_get = ChainController.state.chains.get(chainNamespace)) === null || _ChainController_state_chains_get === void 0 ? void 0 : _ChainController_state_chains_get.accountState;
    },
    getNetworkData (chainNamespace) {
        var _ChainController_state_chains_get;
        const namespace = chainNamespace || state.activeChain;
        if (!namespace) {
            return undefined;
        }
        return (_ChainController_state_chains_get = ChainController.state.chains.get(namespace)) === null || _ChainController_state_chains_get === void 0 ? void 0 : _ChainController_state_chains_get.networkState;
    },
    getCaipNetworkByNamespace (chainNamespace, chainId) {
        var _chain_caipNetworks, _chain_networkState, _chain_caipNetworks1;
        if (!chainNamespace) {
            return undefined;
        }
        const chain = ChainController.state.chains.get(chainNamespace);
        const byChainId = chain === null || chain === void 0 ? void 0 : (_chain_caipNetworks = chain.caipNetworks) === null || _chain_caipNetworks === void 0 ? void 0 : _chain_caipNetworks.find((network)=>network.id === chainId);
        if (byChainId) {
            return byChainId;
        }
        return (chain === null || chain === void 0 ? void 0 : (_chain_networkState = chain.networkState) === null || _chain_networkState === void 0 ? void 0 : _chain_networkState.caipNetwork) || (chain === null || chain === void 0 ? void 0 : (_chain_caipNetworks1 = chain.caipNetworks) === null || _chain_caipNetworks1 === void 0 ? void 0 : _chain_caipNetworks1[0]);
    },
    /**
     * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
     * @param namespace - The namespace to get the requested CaipNetwork IDs for
     * @returns The requested CaipNetwork IDs
     */ getRequestedCaipNetworkIds () {
        const namespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.filterByNamespace;
        const chains = namespace ? [
            state.chains.get(namespace)
        ] : Array.from(state.chains.values());
        return chains.flatMap((chain)=>(chain === null || chain === void 0 ? void 0 : chain.caipNetworks) || []).map((caipNetwork)=>caipNetwork.caipNetworkId);
    },
    getCaipNetworks (namespace) {
        if (namespace) {
            return ChainController.getRequestedCaipNetworks(namespace);
        }
        return ChainController.getAllRequestedCaipNetworks();
    }
};
const ChainController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=ChainController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockchainApiController",
    ()=>BlockchainApiController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DEFAULT_OPTIONS = {
    purchaseCurrencies: [
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'USD Coin',
            symbol: 'USDC',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        },
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'Ether',
            symbol: 'ETH',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        }
    ],
    paymentCurrencies: [
        {
            id: 'USD',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        },
        {
            id: 'EUR',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        }
    ]
};
// -- Helpers ------------------------------------------- //
const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getBlockchainApiUrl();
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    clientId: null,
    api: new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
        baseUrl,
        clientId: null
    }),
    supportedChains: {
        http: [],
        ws: []
    }
});
const BlockchainApiController = {
    state,
    async get (request) {
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId;
        const params = {
            ...request.params || {},
            st,
            sv,
            projectId
        };
        return state.api.get({
            ...request,
            params
        });
    },
    getSdkProperties () {
        const { sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return {
            st: sdkType || 'unknown',
            sv: sdkVersion || 'unknown'
        };
    },
    async isNetworkSupported (networkId) {
        if (!networkId) {
            return false;
        }
        try {
            if (!state.supportedChains.http.length) {
                await BlockchainApiController.getSupportedNetworks();
            }
        } catch (e) {
            return false;
        }
        return state.supportedChains.http.includes(networkId);
    },
    async getSupportedNetworks () {
        try {
            const supportedChains = await BlockchainApiController.get({
                path: 'v1/supported-chains'
            });
            state.supportedChains = supportedChains;
            return supportedChains;
        } catch (e) {
            return state.supportedChains;
        }
    },
    async fetchIdentity (param) {
        let { address, caipNetworkId } = param;
        const isSupported = await BlockchainApiController.isNetworkSupported(caipNetworkId);
        if (!isSupported) {
            return {
                avatar: '',
                name: ''
            };
        }
        const identityCache = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getIdentityFromCacheForAddress(address);
        if (identityCache) {
            return identityCache;
        }
        const result = await BlockchainApiController.get({
            path: "/v1/identity/".concat(address),
            params: {
                sender: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress) : undefined
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].updateIdentityCache({
            address,
            identity: result,
            timestamp: Date.now()
        });
        return result;
    },
    async fetchTransactions (param) {
        let { account, cursor, onramp, signal, cache, chainId } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                data: [],
                next: undefined
            };
        }
        return BlockchainApiController.get({
            path: "/v1/account/".concat(account, "/history"),
            params: {
                cursor,
                onramp,
                chainId
            },
            signal,
            cache
        });
    },
    async fetchSwapQuote (param) {
        let { amount, userAddress, from, to, gasPrice } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                quotes: []
            };
        }
        return BlockchainApiController.get({
            path: "/v1/convert/quotes",
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                amount,
                userAddress,
                from,
                to,
                gasPrice
            }
        });
    },
    async fetchSwapTokens (param) {
        let { chainId } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                tokens: []
            };
        }
        return BlockchainApiController.get({
            path: "/v1/convert/tokens",
            params: {
                chainId
            }
        });
    },
    async fetchTokenPrice (param) {
        let { addresses } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                fungibles: []
            };
        }
        return state.api.post({
            path: '/v1/fungible/price',
            body: {
                currency: 'usd',
                addresses,
                projectId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    async fetchSwapAllowance (param) {
        let { tokenAddress, userAddress } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                allowance: '0'
            };
        }
        return BlockchainApiController.get({
            path: "/v1/convert/allowance",
            params: {
                tokenAddress,
                userAddress
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    async fetchGasPrice (param) {
        let { chainId } = param;
        var _ChainController_state_activeCaipNetwork;
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Gas Price');
        }
        return BlockchainApiController.get({
            path: "/v1/convert/gas-price",
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                chainId,
                st,
                sv
            }
        });
    },
    async generateSwapCalldata (param) {
        let { amount, from, to, userAddress, disableEstimate } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Swaps');
        }
        return state.api.post({
            path: '/v1/convert/build-transaction',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                amount,
                eip155: {
                    slippage: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONVERT_SLIPPAGE_TOLERANCE
                },
                projectId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId,
                from,
                to,
                userAddress,
                disableEstimate
            }
        });
    },
    async generateApproveCalldata (param) {
        let { from, to, userAddress } = param;
        var _ChainController_state_activeCaipNetwork;
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Swaps');
        }
        return BlockchainApiController.get({
            path: "/v1/convert/build-approve",
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                userAddress,
                from,
                to,
                st,
                sv
            }
        });
    },
    async getBalance (address, chainId, forceUpdate) {
        var _ChainController_state_activeCaipNetwork;
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Token Balance Unavailable');
            return {
                balances: []
            };
        }
        const caipAddress = "".concat(chainId, ":").concat(address);
        const cachedBalance = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getBalanceCacheForCaipAddress(caipAddress);
        if (cachedBalance) {
            return cachedBalance;
        }
        const balance = await BlockchainApiController.get({
            path: "/v1/account/".concat(address, "/balance"),
            params: {
                currency: 'usd',
                chainId,
                forceUpdate,
                st,
                sv
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].updateBalanceCache({
            caipAddress,
            balance,
            timestamp: Date.now()
        });
        return balance;
    },
    async lookupEnsName (name) {
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                addresses: {},
                attributes: []
            };
        }
        return BlockchainApiController.get({
            path: "/v1/profile/account/".concat(name),
            params: {
                apiVersion: '2'
            }
        });
    },
    async reverseLookupEnsName (param) {
        let { address } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return [];
        }
        return BlockchainApiController.get({
            path: "/v1/profile/reverse/".concat(address),
            params: {
                sender: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address,
                apiVersion: '2'
            }
        });
    },
    async getEnsNameSuggestions (name) {
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                suggestions: []
            };
        }
        return BlockchainApiController.get({
            path: "/v1/profile/suggestions/".concat(name),
            params: {
                zone: 'reown.id'
            }
        });
    },
    async registerEnsName (param) {
        let { coinType, address, message, signature } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                success: false
            };
        }
        return state.api.post({
            path: "/v1/profile/account",
            body: {
                coin_type: coinType,
                address,
                message,
                signature
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    async generateOnRampURL (param) {
        let { destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount } = param;
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return '';
        }
        const response = await state.api.post({
            path: "/v1/generators/onrampurl",
            params: {
                projectId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId
            },
            body: {
                destinationWallets,
                defaultNetwork,
                partnerUserId,
                defaultExperience: 'buy',
                presetCryptoAmount: purchaseAmount,
                presetFiatAmount: paymentAmount
            }
        });
        return response.url;
    },
    async getOnrampOptions () {
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                paymentCurrencies: [],
                purchaseCurrencies: []
            };
        }
        try {
            const response = await BlockchainApiController.get({
                path: "/v1/onramp/options"
            });
            return response;
        } catch (e) {
            return DEFAULT_OPTIONS;
        }
    },
    async getOnrampQuote (param) {
        let { purchaseCurrency, paymentCurrency, amount, network } = param;
        try {
            var _ChainController_state_activeCaipNetwork;
            const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
            if (!isSupported) {
                return null;
            }
            const response = await state.api.post({
                path: "/v1/onramp/quote",
                params: {
                    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId
                },
                body: {
                    purchaseCurrency,
                    paymentCurrency,
                    amount,
                    network
                }
            });
            return response;
        } catch (e) {
            // Mocking response as 1:1 until endpoint is ready
            return {
                coinbaseFee: {
                    amount,
                    currency: paymentCurrency.id
                },
                networkFee: {
                    amount,
                    currency: paymentCurrency.id
                },
                paymentSubtotal: {
                    amount,
                    currency: paymentCurrency.id
                },
                paymentTotal: {
                    amount,
                    currency: paymentCurrency.id
                },
                purchaseAmount: {
                    amount,
                    currency: paymentCurrency.id
                },
                quoteId: 'mocked-quote-id'
            };
        }
    },
    async getSmartSessions (caipAddress) {
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return [];
        }
        return BlockchainApiController.get({
            path: "/v1/sessions/".concat(caipAddress)
        });
    },
    async revokeSmartSession (address, pci, signature) {
        var _ChainController_state_activeCaipNetwork;
        const isSupported = await BlockchainApiController.isNetworkSupported((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId);
        if (!isSupported) {
            return {
                success: false
            };
        }
        return state.api.post({
            path: "/v1/sessions/".concat(address, "/revoke"),
            params: {
                projectId: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId
            },
            body: {
                pci,
                signature
            }
        });
    },
    setClientId (clientId) {
        state.clientId = clientId;
        state.api = new __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
            baseUrl,
            clientId
        });
    }
}; //# sourceMappingURL=BlockchainApiController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountController",
    ()=>AccountController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: new Map(),
    allAccounts: []
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    replaceState (newState) {
        if (!newState) {
            return;
        }
        Object.assign(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(newState));
    },
    subscribe (callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeChainProp('accountState', (accountState)=>{
            if (accountState) {
                return callback(accountState);
            }
            return undefined;
        });
    },
    subscribeKey (property, callback, chain) {
        let prev = undefined;
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeChainProp('accountState', (accountState)=>{
            if (accountState) {
                const nextValue = accountState[property];
                if (prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            }
        }, chain);
    },
    setStatus (status, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('status', status, chain);
    },
    getCaipAddress (chain) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountProp('caipAddress', chain);
    },
    setCaipAddress (caipAddress, chain) {
        const newAddress = caipAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(caipAddress) : undefined;
        if (chain === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress = caipAddress;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('caipAddress', caipAddress, chain);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('address', newAddress, chain);
    },
    setBalance (balance, balanceSymbol, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('balance', balance, chain);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('balanceSymbol', balanceSymbol, chain);
    },
    setProfileName (profileName, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('profileName', profileName, chain);
    },
    setProfileImage (profileImage, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('profileImage', profileImage, chain);
    },
    setUser (user, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('user', user, chain);
    },
    setAddressExplorerUrl (explorerUrl, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('addressExplorerUrl', explorerUrl, chain);
    },
    setSmartAccountDeployed (isDeployed, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('smartAccountDeployed', isDeployed, chain);
    },
    setCurrentTab (currentTab) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('currentTab', currentTab, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
    },
    setTokenBalance (tokenBalance, chain) {
        if (tokenBalance) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('tokenBalance', tokenBalance, chain);
        }
    },
    setShouldUpdateToAddress (address, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('shouldUpdateToAddress', address, chain);
    },
    setAllAccounts (accounts, namespace) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('allAccounts', accounts, namespace);
    },
    addAddressLabel (address, label, chain) {
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountProp('addressLabels', chain) || new Map();
        map.set(address, label);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('addressLabels', map, chain);
    },
    removeAddressLabel (address, chain) {
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountProp('addressLabels', chain) || new Map();
        map.delete(address);
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('addressLabels', map, chain);
    },
    setConnectedWalletInfo (connectedWalletInfo, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('connectedWalletInfo', connectedWalletInfo, chain, false);
    },
    setPreferredAccountType (preferredAccountType, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('preferredAccountTypes', {
            ...state.preferredAccountTypes,
            [chain]: preferredAccountType
        }, chain);
    },
    setPreferredAccountTypes (preferredAccountTypes) {
        state.preferredAccountTypes = preferredAccountTypes;
    },
    setSocialProvider (socialProvider, chain) {
        if (socialProvider) {
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('socialProvider', socialProvider, chain);
        }
    },
    setSocialWindow (socialWindow, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('socialWindow', socialWindow ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(socialWindow) : undefined, chain);
    },
    setFarcasterUrl (farcasterUrl, chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setAccountProp('farcasterUrl', farcasterUrl, chain);
    },
    async fetchTokenBalance (onError) {
        var _ChainController_state_activeCaipNetwork, _ChainController_state_activeCaipNetwork1;
        state.balanceLoading = true;
        const chainId = (_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId;
        const chain = (_ChainController_state_activeCaipNetwork1 = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork1 === void 0 ? void 0 : _ChainController_state_activeCaipNetwork1.chainNamespace;
        const caipAddress = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipAddress;
        const address = caipAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(caipAddress) : undefined;
        if (state.lastRetry && !__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isAllowedRetry(state.lastRetry, 30 * __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ONE_SEC_MS)) {
            state.balanceLoading = false;
            return [];
        }
        try {
            if (address && chainId && chain) {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getBalance(address, chainId);
                /*
                 * The 1Inch API includes many low-quality tokens in the balance response,
                 * which appear inconsistently. This filter prevents them from being displayed.
                 */ const filteredBalances = response.balances.filter((balance)=>balance.quantity.decimals !== '0');
                AccountController.setTokenBalance(filteredBalances, chain);
                state.lastRetry = undefined;
                state.balanceLoading = false;
                return filteredBalances;
            }
        } catch (error) {
            state.lastRetry = Date.now();
            onError === null || onError === void 0 ? void 0 : onError(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Token Balance Unavailable');
        } finally{
            state.balanceLoading = false;
        }
        return [];
    },
    resetAccount (chain) {
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].resetAccount(chain);
    }
};
const AccountController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=AccountController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/EnsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnsUtil",
    ()=>EnsUtil
]);
const SLIP44_MSB = 0x80000000;
const EnsUtil = {
    convertEVMChainIdToCoinType (chainId) {
        if (chainId >= SLIP44_MSB) {
            throw new Error('Invalid chainId');
        }
        return (SLIP44_MSB | chainId) >>> 0;
    }
}; //# sourceMappingURL=EnsUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EnsController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnsController",
    ()=>EnsController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$EnsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/EnsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
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
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    suggestions: [],
    loading: false
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    async resolveName (name) {
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].lookupEnsName(name);
        } catch (e) {
            var _error_reasons_, _error_reasons;
            const error = e;
            throw new Error((error === null || error === void 0 ? void 0 : (_error_reasons = error.reasons) === null || _error_reasons === void 0 ? void 0 : (_error_reasons_ = _error_reasons[0]) === null || _error_reasons_ === void 0 ? void 0 : _error_reasons_.description) || 'Error resolving name');
        }
    },
    async isNameRegistered (name) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].lookupEnsName(name);
            return true;
        } catch (e) {
            return false;
        }
    },
    async getSuggestions (value) {
        try {
            state.loading = true;
            state.suggestions = [];
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getEnsNameSuggestions(value);
            state.suggestions = response.suggestions.map((suggestion)=>({
                    ...suggestion,
                    name: suggestion.name
                })) || [];
            return state.suggestions;
        } catch (e) {
            const errorMessage = EnsController.parseEnsApiError(e, 'Error fetching name suggestions');
            throw new Error(errorMessage);
        } finally{
            state.loading = false;
        }
    },
    async getNamesForAddress (address) {
        try {
            const network = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
            if (!network) {
                return [];
            }
            const cachedEns = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getEnsFromCacheForAddress(address);
            if (cachedEns) {
                return cachedEns;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].reverseLookupEnsName({
                address
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].updateEnsCache({
                address,
                ens: response,
                timestamp: Date.now()
            });
            return response;
        } catch (e) {
            const errorMessage = EnsController.parseEnsApiError(e, 'Error fetching names for address');
            throw new Error(errorMessage);
        }
    },
    async registerName (name) {
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        if (!network) {
            throw new Error('Network not found');
        }
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address;
        const emailConnector = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        if (!address || !emailConnector) {
            throw new Error('Address or auth connector not found');
        }
        state.loading = true;
        try {
            const message = JSON.stringify({
                name,
                attributes: {},
                // Unix timestamp
                timestamp: Math.floor(Date.now() / 1000)
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].pushTransactionStack({
                onCancel () {
                    __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('RegisterAccountName');
                }
            });
            const signature = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].signMessage(message);
            state.loading = false;
            const networkId = network.id;
            if (!networkId) {
                throw new Error('Network not found');
            }
            const coinType = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$EnsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsUtil"].convertEVMChainIdToCoinType(Number(networkId));
            await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].registerEnsName({
                coinType,
                address: address,
                signature: signature,
                message
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setProfileName(name, network.chainNamespace);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('RegisterAccountNameSuccess');
        } catch (e) {
            const errorMessage = EnsController.parseEnsApiError(e, "Error registering name ".concat(name));
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('RegisterAccountName');
            throw new Error(errorMessage);
        } finally{
            state.loading = false;
        }
    },
    validateName (name) {
        return /^[a-zA-Z0-9-]{4,}$/u.test(name);
    },
    parseEnsApiError (error, defaultError) {
        var _ensError_reasons_, _ensError_reasons;
        const ensError = error;
        return (ensError === null || ensError === void 0 ? void 0 : (_ensError_reasons = ensError.reasons) === null || _ensError_reasons === void 0 ? void 0 : (_ensError_reasons_ = _ensError_reasons[0]) === null || _ensError_reasons_ === void 0 ? void 0 : _ensError_reasons_.description) || defaultError;
    }
};
const EnsController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=EnsController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OnRampController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnRampController",
    ()=>OnRampController,
    "USDC_CURRENCY_DEFAULT",
    ()=>USDC_CURRENCY_DEFAULT,
    "USD_CURRENCY_DEFAULT",
    ()=>USD_CURRENCY_DEFAULT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
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
const USDC_CURRENCY_DEFAULT = {
    id: '2b92315d-eab7-5bef-84fa-089a131333f5',
    name: 'USD Coin',
    symbol: 'USDC',
    networks: [
        {
            name: 'ethereum-mainnet',
            display_name: 'Ethereum',
            chain_id: '1',
            contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
        },
        {
            name: 'polygon-mainnet',
            display_name: 'Polygon',
            chain_id: '137',
            contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
        }
    ]
};
const USD_CURRENCY_DEFAULT = {
    id: 'USD',
    payment_method_limits: [
        {
            id: 'card',
            min: '10.00',
            max: '7500.00'
        },
        {
            id: 'ach_bank_account',
            min: '10.00',
            max: '25000.00'
        }
    ]
};
const defaultState = {
    providers: __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONRAMP_PROVIDERS"],
    selectedProvider: null,
    error: null,
    purchaseCurrency: USDC_CURRENCY_DEFAULT,
    paymentCurrency: USD_CURRENCY_DEFAULT,
    purchaseCurrencies: [
        USDC_CURRENCY_DEFAULT
    ],
    paymentCurrencies: [],
    quotesLoading: false
};
// -- State --------------------------------------------- //
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])(defaultState);
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    setSelectedProvider (provider) {
        if (provider && provider.name === 'meld') {
            const currency = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.SOLANA ? 'SOL' : 'USDC';
            var _AccountController_state_address;
            const address = (_AccountController_state_address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address) !== null && _AccountController_state_address !== void 0 ? _AccountController_state_address : '';
            const url = new URL(provider.url);
            url.searchParams.append('publicKey', __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MELD_PUBLIC_KEY"]);
            url.searchParams.append('destinationCurrencyCode', currency);
            url.searchParams.append('walletAddress', address);
            url.searchParams.append('externalCustomerId', __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId);
            state.selectedProvider = {
                ...provider,
                url: url.toString()
            };
        } else {
            state.selectedProvider = provider;
        }
    },
    setOnrampProviders (providers) {
        if (Array.isArray(providers) && providers.every((item)=>typeof item === 'string')) {
            const validOnramp = providers;
            const newProviders = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONRAMP_PROVIDERS"].filter((provider)=>validOnramp.includes(provider.name));
            state.providers = newProviders;
        } else {
            state.providers = [];
        }
    },
    setPurchaseCurrency (currency) {
        state.purchaseCurrency = currency;
    },
    setPaymentCurrency (currency) {
        state.paymentCurrency = currency;
    },
    setPurchaseAmount (amount) {
        OnRampController.state.purchaseAmount = amount;
    },
    setPaymentAmount (amount) {
        OnRampController.state.paymentAmount = amount;
    },
    async getAvailableCurrencies () {
        const options = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getOnrampOptions();
        state.purchaseCurrencies = options.purchaseCurrencies;
        state.paymentCurrencies = options.paymentCurrencies;
        state.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
        state.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
        await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchCurrencyImages(options.paymentCurrencies.map((currency)=>currency.id));
        await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchTokenImages(options.purchaseCurrencies.map((currency)=>currency.symbol));
    },
    async getQuote () {
        state.quotesLoading = true;
        try {
            var _state_paymentAmount, _state_purchaseCurrency;
            const quote = await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getOnrampQuote({
                purchaseCurrency: state.purchaseCurrency,
                paymentCurrency: state.paymentCurrency,
                amount: ((_state_paymentAmount = state.paymentAmount) === null || _state_paymentAmount === void 0 ? void 0 : _state_paymentAmount.toString()) || '0',
                network: (_state_purchaseCurrency = state.purchaseCurrency) === null || _state_purchaseCurrency === void 0 ? void 0 : _state_purchaseCurrency.symbol
            });
            state.quotesLoading = false;
            state.purchaseAmount = Number(quote === null || quote === void 0 ? void 0 : quote.purchaseAmount.amount);
            return quote;
        } catch (error) {
            state.error = error.message;
            state.quotesLoading = false;
            return null;
        } finally{
            state.quotesLoading = false;
        }
    },
    resetState () {
        state.selectedProvider = null;
        state.error = null;
        state.purchaseCurrency = USDC_CURRENCY_DEFAULT;
        state.paymentCurrency = USD_CURRENCY_DEFAULT;
        state.purchaseCurrencies = [
            USDC_CURRENCY_DEFAULT
        ];
        state.paymentCurrencies = [];
        state.paymentAmount = undefined;
        state.purchaseAmount = undefined;
        state.quotesLoading = false;
    }
};
const OnRampController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withErrorBoundary"])(controller); //# sourceMappingURL=OnRampController.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SIWXUtil",
    ()=>SIWXUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/universal-provider/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
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
;
;
const SIWXUtil = {
    getSIWX () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.siwx;
    },
    async initializeIfEnabled () {
        const siwx = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.siwx;
        const caipAddress = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveCaipAddress();
        if (!(siwx && caipAddress)) {
            return;
        }
        const [namespace, chainId, address] = caipAddress.split(':');
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].checkIfSupportedNetwork(namespace)) {
            return;
        }
        try {
            const sessions = await siwx.getSessions("".concat(namespace, ":").concat(chainId), address);
            if (sessions.length) {
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].open({
                view: 'SIWXSignMessage'
            });
        } catch (error) {
            var _ConnectionController__getClient;
            // eslint-disable-next-line no-console
            console.error('SIWXUtil:initializeIfEnabled', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'SIWX_AUTH_ERROR',
                properties: this.getSIWXEventProperties()
            });
            // eslint-disable-next-line no-console
            await ((_ConnectionController__getClient = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"]._getClient()) === null || _ConnectionController__getClient === void 0 ? void 0 : _ConnectionController__getClient.disconnect().catch(console.error));
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Connect');
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('A problem occurred while trying initialize authentication');
        }
    },
    async requestSignMessage () {
        const siwx = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.siwx;
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveCaipAddress());
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveCaipNetwork();
        const client = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"]._getClient();
        if (!siwx) {
            throw new Error('SIWX is not enabled');
        }
        if (!address) {
            throw new Error('No ActiveCaipAddress found');
        }
        if (!network) {
            throw new Error('No ActiveCaipNetwork or client found');
        }
        if (!client) {
            throw new Error('No ConnectionController client found');
        }
        try {
            const siwxMessage = await siwx.createMessage({
                chainId: network.caipNetworkId,
                accountAddress: address
            });
            const message = siwxMessage.toString();
            const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(network.chainNamespace);
            if (connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].pushTransactionStack({});
            }
            const signature = await client.signMessage(message);
            await siwx.addSession({
                data: siwxMessage,
                message,
                signature: signature
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'SIWX_AUTH_SUCCESS',
                properties: this.getSIWXEventProperties()
            });
        } catch (error) {
            const properties = this.getSIWXEventProperties();
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].state.open || __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.view === 'ApproveTransaction') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].open({
                    view: 'SIWXSignMessage'
                });
            }
            if (properties.isSmartAccount) {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('This application might not support Smart Accounts');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Signature declined');
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'SIWX_AUTH_ERROR',
                properties
            });
            // eslint-disable-next-line no-console
            console.error('SWIXUtil:requestSignMessage', error);
        }
    },
    async cancelSignMessage () {
        try {
            var _siwx_getRequired;
            const siwx = this.getSIWX();
            const isRequired = siwx === null || siwx === void 0 ? void 0 : (_siwx_getRequired = siwx.getRequired) === null || _siwx_getRequired === void 0 ? void 0 : _siwx_getRequired.call(siwx);
            if (isRequired) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].disconnect();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Connect');
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                event: 'CLICK_CANCEL_SIWX',
                type: 'track',
                properties: this.getSIWXEventProperties()
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('SIWXUtil:cancelSignMessage', error);
        }
    },
    async getSessions () {
        const siwx = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.siwx;
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveCaipAddress());
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveCaipNetwork();
        if (!(siwx && address && network)) {
            return [];
        }
        return siwx.getSessions(network.caipNetworkId, address);
    },
    async isSIWXCloseDisabled () {
        const siwx = this.getSIWX();
        if (siwx) {
            const isApproveSignScreen = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.view === 'ApproveTransaction';
            const isSiwxSignMessage = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.view === 'SIWXSignMessage';
            if (isApproveSignScreen || isSiwxSignMessage) {
                var _siwx_getRequired;
                return ((_siwx_getRequired = siwx.getRequired) === null || _siwx_getRequired === void 0 ? void 0 : _siwx_getRequired.call(siwx)) && (await this.getSessions()).length === 0;
            }
        }
        return false;
    },
    async universalProviderAuthenticate (param) {
        let { universalProvider, chains, methods } = param;
        var _ChainController_getActiveCaipNetwork, _result_session_peer_metadata_icons, _result_auths;
        const siwx = SIWXUtil.getSIWX();
        const namespaces = new Set(chains.map((chain)=>chain.split(':')[0]));
        if (!siwx || namespaces.size !== 1 || !namespaces.has('eip155')) {
            return false;
        }
        // Ignores chainId and account address to get other message data
        const siwxMessage = await siwx.createMessage({
            chainId: ((_ChainController_getActiveCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveCaipNetwork()) === null || _ChainController_getActiveCaipNetwork === void 0 ? void 0 : _ChainController_getActiveCaipNetwork.caipNetworkId) || '',
            accountAddress: ''
        });
        const result = await universalProvider.authenticate({
            nonce: siwxMessage.nonce,
            domain: siwxMessage.domain,
            uri: siwxMessage.uri,
            exp: siwxMessage.expirationTime,
            iat: siwxMessage.issuedAt,
            nbf: siwxMessage.notBefore,
            requestId: siwxMessage.requestId,
            version: siwxMessage.version,
            resources: siwxMessage.resources,
            statement: siwxMessage.statement,
            chainId: siwxMessage.chainId,
            methods,
            // The first chainId is what is used for universal provider to build the message
            chains: [
                siwxMessage.chainId,
                ...chains.filter((chain)=>chain !== siwxMessage.chainId)
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showLoading('Authenticating...', {
            autoClose: false
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setConnectedWalletInfo({
            ...result.session.peer.metadata,
            name: result.session.peer.metadata.name,
            icon: (_result_session_peer_metadata_icons = result.session.peer.metadata.icons) === null || _result_session_peer_metadata_icons === void 0 ? void 0 : _result_session_peer_metadata_icons[0],
            type: 'WALLET_CONNECT'
        }, Array.from(namespaces)[0]);
        if (result === null || result === void 0 ? void 0 : (_result_auths = result.auths) === null || _result_auths === void 0 ? void 0 : _result_auths.length) {
            const sessions = result.auths.map((cacao)=>{
                const message = universalProvider.client.formatAuthMessage({
                    request: cacao.p,
                    iss: cacao.p.iss
                });
                return {
                    data: {
                        ...cacao.p,
                        accountAddress: cacao.p.iss.split(':').slice(-1).join(''),
                        chainId: cacao.p.iss.split(':').slice(2, 4).join(':'),
                        uri: cacao.p.aud,
                        version: cacao.p.version || siwxMessage.version,
                        expirationTime: cacao.p.exp,
                        issuedAt: cacao.p.iat,
                        notBefore: cacao.p.nbf
                    },
                    message,
                    signature: cacao.s.s,
                    cacao
                };
            });
            try {
                await siwx.setSessions(sessions);
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                    type: 'track',
                    event: 'SIWX_AUTH_SUCCESS',
                    properties: SIWXUtil.getSIWXEventProperties()
                });
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('SIWX:universalProviderAuth - failed to set sessions', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                    type: 'track',
                    event: 'SIWX_AUTH_ERROR',
                    properties: SIWXUtil.getSIWXEventProperties()
                });
                // eslint-disable-next-line no-console
                await universalProvider.disconnect().catch(console.error);
                throw error;
            } finally{
                __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].hide();
            }
        }
        return true;
    },
    getSIWXEventProperties () {
        var _ChainController_state_activeCaipNetwork, _AccountController_state_preferredAccountTypes;
        const activeChainNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        return {
            network: ((_ChainController_state_activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork) === null || _ChainController_state_activeCaipNetwork === void 0 ? void 0 : _ChainController_state_activeCaipNetwork.caipNetworkId) || '',
            isSmartAccount: ((_AccountController_state_preferredAccountTypes = __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.preferredAccountTypes) === null || _AccountController_state_preferredAccountTypes === void 0 ? void 0 : _AccountController_state_preferredAccountTypes[activeChainNamespace]) === __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.SMART_ACCOUNT
        };
    },
    async clearSessions () {
        const siwx = this.getSIWX();
        if (siwx) {
            await siwx.setSessions([]);
        }
    }
}; //# sourceMappingURL=SIWXUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectorControllerUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkNamespaceConnectorId",
    ()=>checkNamespaceConnectorId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
;
function checkNamespaceConnectorId(namespace, connectorId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(namespace) === connectorId;
} //# sourceMappingURL=ConnectorControllerUtil.js.map
}),
"[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChainsToDisconnect",
    ()=>getChainsToDisconnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/giftpicker/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectorControllerUtil.js [app-client] (ecmascript)");
;
;
;
function getChainsToDisconnect(namespace) {
    const namespaces = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.keys());
    let chains = [];
    if (namespace) {
        chains.push([
            namespace,
            __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.get(namespace)
        ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNamespaceConnectorId"])(namespace, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT)) {
            namespaces.forEach((ns)=>{
                if (ns !== namespace && (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNamespaceConnectorId"])(ns, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT)) {
                    chains.push([
                        ns,
                        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.get(ns)
                    ]);
                }
            });
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNamespaceConnectorId"])(namespace, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH)) {
            namespaces.forEach((ns)=>{
                if (ns !== namespace && (0, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNamespaceConnectorId"])(ns, __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH)) {
                    chains.push([
                        ns,
                        __TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.get(ns)
                    ]);
                }
            });
        }
    } else {
        chains = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$giftpicker$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.entries());
    }
    return chains;
} //# sourceMappingURL=ChainControllerUtil.js.map
}),
]);

//# sourceMappingURL=50ead_%40reown_appkit-controllers_dist_esm_src_48e55045._.js.map