(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo.png.mjs { IMAGE => "[project]/public/images/logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/MobileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/siteCopy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>{
                    setScrolled(window.scrollY > 10);
                }
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header ${scrolled ? "site-header-scrolled" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-header-container c-width",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "site-brand",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                            alt: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].name,
                            width: 28,
                            height: 28,
                            className: "site-brand-logo",
                            style: {
                                width: "auto",
                                height: "auto"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "site-brand-copy md:hidden lg:block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "site-brand-name normal-xsmall",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].shortName
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "site-brand-tagline normal-xsmall",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].brand.logistics
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Header, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/siteCopy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navItems = [
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.home,
        href: "/"
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.about,
        href: "/about"
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.services,
        href: "/services"
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.contact,
        href: "/contact"
    }
];
function MobileMenu() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mobile-menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": open ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.close : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.open,
                "aria-expanded": open,
                onClick: ()=>setOpen((v)=>!v),
                className: "flex h-9 w-9 flex-col items-center justify-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mobile-menu-line", open && "translate-y-[6.5px] rotate-45")
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileMenu.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mobile-menu-line", open && "opacity-0")
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileMenu.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mobile-menu-line", open && "-translate-y-[6.5px] -rotate-45")
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileMenu.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/MobileMenu.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-menu-panel",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mobile-menu-nav",
                    children: [
                        navItems.map((item)=>{
                            const isActive = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setOpen(false),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mobile-menu-link normal-xsmall", isActive ? "mobile-menu-link-active" : ""),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/quote",
                            onClick: ()=>setOpen(false),
                            className: "mobile-menu-quote normal-xsmall",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.quote
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileMenu.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MobileMenu.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/MobileMenu.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/MobileMenu.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(MobileMenu, "zulZ+F5240eOSupJE1BcVv8NMvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/siteCopy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/services.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navItems = [
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.home,
        href: "/"
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.about,
        href: "/about"
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.services,
        href: "/services"
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.contact,
        href: "/contact"
    }
];
const servicesSubItems = [
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[0]?.label,
        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[0]?.href
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[1]?.label,
        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[1]?.href
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[2]?.label,
        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[2]?.href
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[3]?.label,
        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[3]?.href
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[4]?.label,
        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[4]?.href
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[5]?.label,
        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesCopy"].items[5]?.href
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "site-nav",
        children: [
            navItems.map((item)=>{
                const isActive = pathname === item.href || item.href === "/services" && pathname.startsWith("/services");
                if (item.href === "/services") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "site-nav-item site-nav-dropdown",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("site-nav-link normal-xsmall site-nav-link-with-caret", isActive ? "site-nav-link-active" : ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "site-nav-caret",
                                        "aria-hidden": "true",
                                        children: "▾"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "site-nav-dropdown-menu",
                                children: servicesSubItems.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: subItem.href ?? "/services",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("site-nav-sub-link normal-xsmall", pathname === subItem.href ? "site-nav-sub-link-active" : ""),
                                        children: subItem.label
                                    }, subItem.href, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("site-nav-link normal-xsmall", isActive ? "site-nav-link-active" : ""),
                    children: item.label
                }, item.href, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/quote",
                className: "site-quote-link normal-xsmall",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$siteCopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCopy"].navigation.quote
            }, void 0, false, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Navbar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Navbar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/company.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "company",
    ()=>company
]);
const company = {
    name: "Harshavardhani Shipping & Forwarding India Pvt Ltd",
    shortName: "Harshavardhani",
    phone: "+91 44 4301 2098",
    phoneAlt: "+91 98401 34080",
    email: "harshalogistics@gmail.com",
    emailAlt: "harshaindiapvtltd2018@gmail.com",
    address: {
        "line-1": "Old No. 107/108, New No 20/22,",
        "line-2": "Armenian Street, 1st Floor,",
        "line-3": "Chennai – 600 001 Tamil Nadu, India"
    },
    gstin: "GSTIN 33AAECH5202N1ZP",
    licence: "CB Licence No. CHN/R.189/2011"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AirFreightService",
    ()=>AirFreightService,
    "CustomsClearanceService",
    ()=>CustomsClearanceService,
    "InternationalCourierService",
    ()=>InternationalCourierService,
    "OceanFreight",
    ()=>OceanFreight,
    "RoadRailService",
    ()=>RoadRailService,
    "WarehouseService",
    ()=>WarehouseService,
    "servicesCopy",
    ()=>servicesCopy
]);
const servicesCopy = {
    hero: {
        eyebrow: "Services",
        title: "Strength beyond borders.",
        description: "Six tightly-integrated services covering every leg of your shipment from port call to final mile."
    },
    sectionTitle: "Our services",
    requestQuote: "Request a quote",
    viewService: "View service",
    ctaEyebrow: "Ready when you are",
    ctaTitle: "Tell us about your cargo.",
    ctaDescription: "Whether it's a single container or a multi-modal project shipment, our team will respond with a clear plan and a competitive quote usually within the same working day.",
    ctaButton: "Request a quote",
    items: [
        {
            id: "01",
            label: "Ocean Freight",
            description: "FCL, LCL and break-bulk shipping across every major trade lane, backed by dedicated route specialists.",
            icon: "ship",
            href: "/services/ocean-freight",
            page: {
                eyebrow: "service 01",
                title: "Ocean Freight",
                description: "FCL & LCL global ocean shipping."
            }
        },
        {
            id: "02",
            label: "Air Freight",
            description: "Priority, deferred and charter air cargo with real-time visibility and door-to-door coverage.",
            icon: "plane",
            href: "/services/air-freight",
            page: {
                eyebrow: "service 02",
                title: "Air Freight",
                description: "Priority air cargo, door to door."
            }
        },
        {
            id: "03",
            label: "Road & Rail",
            description: "Domestic distribution, cross-border trucking and multimodal rail solutions across the subcontinent.",
            icon: "truck",
            href: "/services/road-rail",
            page: {
                eyebrow: "service 03",
                title: "Road & Rail",
                description: "Domestic & cross-border transport."
            }
        },
        {
            id: "04",
            label: "Customs Clearance",
            description: "Licensed CHA services with expert documentation, HS classification and duty optimisation.",
            icon: "document",
            href: "/services/customs-clearance",
            page: {
                eyebrow: "service 04",
                title: "Customs Clearance",
                description: "Licensed CHA and documentation."
            }
        },
        {
            id: "05",
            label: "Warehouse",
            description: "Warehousing, palletisation, packing and end-to-end overseas cargo handling.",
            icon: "box",
            href: "/services/warehouse",
            page: {
                eyebrow: "service 05",
                title: "Warehouse",
                description: "Storage, handling and distribution."
            }
        },
        {
            id: "06",
            label: "International Courier",
            description: "Express door-to-door courier for documents and small parcels to 200+ destinations.",
            icon: "globe",
            href: "/services/international-courier",
            page: {
                eyebrow: "service 06",
                title: "International Courier",
                description: "Express delivery to 200+ destinations."
            }
        }
    ]
};
const OceanFreight = [
    {
        title: "Ocean Freight",
        description: "As a licensed Chennai shipping agency we book, consolidate and move containerised and break-bulk cargo on every major east–west and intra-Asia trade lane. Long-standing carrier relationships give our customers dependable space, competitive rates and clear sailing schedules.",
        subtitle: "Key features",
        subdescription: "What you get",
        items: [
            {
                title: "FCL & LCL",
                description: "Full-container bookings plus weekly LCL consolidations from Chennai and all major Indian ports."
            },
            {
                title: "Break-bulk & project cargo",
                description: "Over-dimensional and heavy-lift movements planned with surveyors and lashing specialists."
            },
            {
                title: "Carrier partnerships",
                description: "Allocation with leading global lines so your cargo sails on schedule even in peak season."
            },
            {
                title: "Door-to-door options",
                description: "Pick-up, haulage, customs and final delivery handled under one bill of lading."
            }
        ],
        stepsTitle: "How it works",
        stepsIntro: "From enquiry to delivery",
        steps: [
            {
                number: "01",
                title: "Share cargo details, incoterms and preferred sailing window."
            },
            {
                number: "02",
                title: "We compare carrier options and issue a clear all-in quotation."
            },
            {
                number: "03",
                title: "Booking confirmed, containers positioned and documentation prepared."
            },
            {
                number: "04",
                title: "Cargo loaded, customs cleared and B/L released."
            },
            {
                number: "05",
                title: "Sailing tracked to destination with proactive milestone updates."
            }
        ]
    }
];
const AirFreightService = [
    {
        title: "Air Freight",
        description: "When time decides the value of a shipment, our air desk secures capacity on scheduled and charter services worldwide. From perishable cargo to time-sensitive deliveries, we manage the paperwork, booking slots and customs coordination to keep your freight moving.",
        subtitle: "Key features",
        subdescription: "What you get",
        items: [
            {
                title: "Priority & deferred",
                description: "Choose next-flight-out or economical scheduled services for urgent and non-urgent cargo."
            },
            {
                title: "Charter solutions",
                description: "Dedicated aircraft for urgent project, perishables or oversized consignments."
            },
            {
                title: "Temperature-sensitive",
                description: "Cool chain handling for pharma, perishables and delicate instruments."
            },
            {
                title: "Real-time visibility",
                description: "Airway bill tracking with milestone updates from tender to delivery."
            }
        ],
        stepsTitle: "How it works",
        stepsIntro: "From enquiry to delivery",
        steps: [
            {
                number: "01",
                title: "Send weight, dimensions and required delivery date."
            },
            {
                number: "02",
                title: "We reserve airline capacity and confirm rates and routing."
            },
            {
                number: "03",
                title: "Cargo collected, screened, packed and labelled to IATA standards."
            },
            {
                number: "04",
                title: "Export customs cleared and cargo tendered to the carrier."
            },
            {
                number: "05",
                title: "Import clearance and door delivery at destination."
            }
        ]
    }
];
const RoadRailService = [
    {
        title: "Road & Rail",
        description: "Our surface transport network links every inland port, ICD and industrial hub. Trailers, containerised trucking and rail are combined to give the most cost-effective inland freight with low transit times.",
        subtitle: "Key features",
        subdescription: "What you get",
        items: [
            {
                title: "Port haulage",
                description: "Container drayage between factories, ICDs and port terminals."
            },
            {
                title: "Full & part loads",
                description: "FTL and LTL movement with GPS-enabled vehicles and flexible scheduling."
            },
            {
                title: "Rail multimodal",
                description: "Cost-effective rail options for long-haul domestic and cross-border corridors."
            },
            {
                title: "Cross-border",
                description: "Customised movements to neighbouring markets with route planning support."
            }
        ],
        stepsTitle: "How it works",
        stepsIntro: "From enquiry to delivery",
        steps: [
            {
                number: "01",
                title: "Confirm pickup and delivery point and cargo profile."
            },
            {
                number: "02",
                title: "Optimal vehicle or rail mode selected and quoted."
            },
            {
                number: "03",
                title: "Loading supervised with photographic proof."
            },
            {
                number: "04",
                title: "In-transit monitoring and ETA updates."
            },
            {
                number: "05",
                title: "Delivery with signed proof of delivery."
            }
        ]
    }
];
const CustomsClearanceService = [
    {
        title: "Customs Clearance",
        description: "Operating under CB Licence No. CHN/18/2011, our in-house customs team manages import and export documentation for all major Indian ports and airports. Accurate classification and complete paperwork keep your cargo moving without delays.",
        subtitle: "Key features",
        subdescription: "What you get",
        items: [
            {
                title: "Import & export filing",
                description: "Bill of entry and shipping bill filing with accurate customs declarations."
            },
            {
                title: "HS classification",
                description: "Correct tariff headings to avoid penalties and reassessments."
            },
            {
                title: "Duty optimisation",
                description: "Review of customs exemptions, concessions and valuation strategies."
            },
            {
                title: "Regulatory liaison",
                description: "Coordination with port and customs officers for smooth release and compliance."
            }
        ],
        stepsTitle: "How it works",
        stepsIntro: "From enquiry to delivery",
        steps: [
            {
                number: "01",
                title: "Documents reviewed for completeness before arrival."
            },
            {
                number: "02",
                title: "Classification and duty calculation confirmed with you."
            },
            {
                number: "03",
                title: "Declaration filed and duty paid."
            },
            {
                number: "04",
                title: "Examination and assessment handled by our team."
            },
            {
                number: "05",
                title: "Out-of-charge obtained and cargo released."
            }
        ]
    }
];
const WarehouseService = [
    {
        title: "Warehouse",
        description: "Secure covered storage close to the port keeps your inventory ready for dispatch. We receive, sort, pick, palletise and pack cargo with stock controls that keep operations transparent and efficient.",
        subtitle: "Key features",
        subdescription: "What you get",
        items: [
            {
                title: "Bonded & general storage",
                description: "Short- and long-term space with 24/7 security and fire protection."
            },
            {
                title: "Value-added handling",
                description: "Palletisation, shrink-wrapping, export packing, labelling and kitting."
            },
            {
                title: "Inventory reporting",
                description: "Periodic stock statements and inventory reports for planning and reconciliation."
            },
            {
                title: "Distribution ready",
                description: "Pick, pack and dispatch to support onward movement and export deadlines."
            }
        ],
        stepsTitle: "How it works",
        stepsIntro: "From enquiry to delivery",
        steps: [
            {
                number: "01",
                title: "Storage volume and handling needs assessed."
            },
            {
                number: "02",
                title: "Cargo received, inspected and put away."
            },
            {
                number: "03",
                title: "Value-added handling performed as instructed."
            },
            {
                number: "04",
                title: "Stock reported and reconciled."
            },
            {
                number: "05",
                title: "Release and dispatch on your instruction."
            }
        ]
    }
];
const InternationalCourierService = [
    {
        title: "International Courier",
        description: "For documents, samples and small parcels we offer express door-to-door courier to more than 200 countries, with customs paperwork handled at both ends and full online tracking.",
        subtitle: "Key features",
        subdescription: "What you get",
        items: [
            {
                title: "Document & parcel express",
                description: "Fast-tracked movement of commercial documents and small parcels."
            },
            {
                title: "200+ destinations",
                description: "Global coverage through established express partners."
            },
            {
                title: "Customs paperwork",
                description: "Invoices, declarations and duty guidance prepared for you."
            },
            {
                title: "Pick-up service",
                description: "Collection from your office anywhere in Chennai."
            }
        ],
        stepsTitle: "How it works",
        stepsIntro: "From enquiry to delivery",
        steps: [
            {
                number: "01",
                title: "Tell us the destination, weight and contents."
            },
            {
                number: "02",
                title: "Rate and transit time confirmed instantly."
            },
            {
                number: "03",
                title: "Shipment collected and documented."
            },
            {
                number: "04",
                title: "Tracking number issued and monitored."
            },
            {
                number: "05",
                title: "Delivered with proof of delivery."
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/siteCopy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteCopy",
    ()=>siteCopy
]);
const siteCopy = {
    brand: {
        logistics: "Shipping & Forwarding",
        tagline: "Serving with Pride"
    },
    navigation: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        quote: "Get Quote",
        open: "Open menu",
        close: "Close menu"
    },
    footer: {
        description: "a Chennai based shipping agency and customs house, serving Indian importers and exporters with pride since 2011.",
        explore: "Explore",
        reachUs: "Reach Us",
        copyright: "All rights reserved."
    },
    notFound: {
        code: "404",
        title: "Page not found",
        description: "The page you are looking for may have moved or no longer exists.",
        back: "Back to home"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/logo.1c8-t5f-byk9j.png");}),
"[project]/public/images/logo.png.mjs { IMAGE => \"[project]/public/images/logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1536,
    height: 1024,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnElEQVR42iXJuwrCMABG4Z8oiI5amkZ6N70laZJasQgiKLo5+whu4ivoIvgyPqNYh285B0opVEL2iqJEnhcoywpCCPweWLBA2pwm9nydhnI7cH1JaKgIDSpC5yFAk5bYy1se7p9VvnvxtHtmaffIoubGnGBJ4Hg+aCzh8TVx482Q8eOY8f3IjVoy8xJAG4taG6haQ6o/VZu+GWvxBW7fFuu4wNh3AAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1byudl2._.js.map