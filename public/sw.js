if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/OnUK2O1l8o8QV8lhENuxS/_buildManifest.js",revision:"abe9bf53ba413bc6cee4f3dc4905d3c0"},{url:"/_next/static/OnUK2O1l8o8QV8lhENuxS/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/669-710d976450c047d626b6.js",revision:"403444d423fd03f045315d2d14ca225b"},{url:"/_next/static/chunks/7112840a-a1570b116388aec723cf.js",revision:"4a87b6a894a01f9cf0e6269d77265b5f"},{url:"/_next/static/chunks/953-880a9397b6e862d16363.js",revision:"786de424fc38527e94b82bddfae9e098"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"4328303147a9363db368b17367be6c71"},{url:"/_next/static/chunks/main-f8573a57a048d51969e6.js",revision:"35ef5b630bfdf6bd11ac4c959c15969d"},{url:"/_next/static/chunks/pages/_app-061aebe2eef78b889146.js",revision:"c405c7bec1cdd3f57a7c840b8151284f"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"5b1da81a87ce586bb4a1dd94c2d6e7a5"},{url:"/_next/static/chunks/pages/admin-22f8609e25e8432a2078.js",revision:"bc5dba387ebf867af70e1e357650f83d"},{url:"/_next/static/chunks/pages/bibledetail-6d3e835515f6bd2ec249.js",revision:"0be32881763b72654051febd62e2bf20"},{url:"/_next/static/chunks/pages/biblelist-34cbaa4544310b08ad41.js",revision:"68118f132684e3e9e827ba5c70dc3584"},{url:"/_next/static/chunks/pages/biblemain-287569f3e49b559e114c.js",revision:"508b02046fa4d6a850a81ce19e5f8192"},{url:"/_next/static/chunks/pages/boardview-3da8a444a90239d14373.js",revision:"e3afc770b04527e3c4b081d5033cef3e"},{url:"/_next/static/chunks/pages/boardwrite-b91e258e92c00fe839b1.js",revision:"1c640a6f70375b9a7198986f2e6ec126"},{url:"/_next/static/chunks/pages/book/%5Bid%5D-4721267821b7c8b8c516.js",revision:"db0239a6efbc1977ae28000bd807b14d"},{url:"/_next/static/chunks/pages/chapter/%5Bid%5D-77155d3c48a1687e270e.js",revision:"d6ba2ffe4ff5c25567c62c758c4c0070"},{url:"/_next/static/chunks/pages/csdeclaration-4080e1aaffba86a0afa0.js",revision:"c87b66a40430206712280f95d8ddbdb1"},{url:"/_next/static/chunks/pages/csmain-a61554db8ce5148d6a5a.js",revision:"427ece0d4c753d4ebe81893e54fae213"},{url:"/_next/static/chunks/pages/csnotice-5111f6c00395cea4070a.js",revision:"ac27b3e7a618564fee3a4e68f94b986e"},{url:"/_next/static/chunks/pages/index-f4c86b974a8cc1defb47.js",revision:"86c6630c55c2416b39b06c13efc3e4fc"},{url:"/_next/static/chunks/pages/onmain-38edb1abfb20aa29ddba.js",revision:"8c9b1499c0f784b2dbced49998cd89c9"},{url:"/_next/static/chunks/pages/onsub-1cb238a0c650c9fc7665.js",revision:"de066225f57e21404cf12caad7625a59"},{url:"/_next/static/chunks/pages/praisedetail-d05113d84b9661ddc093.js",revision:"c8848e0334d092292d5975c670e3f2e1"},{url:"/_next/static/chunks/pages/praiselist-07e60d4c41a3a41a25fc.js",revision:"531aa669a685a0237630c7abc5f3e414"},{url:"/_next/static/chunks/pages/praisemain-5c97a7582d43aec1b927.js",revision:"0fddaaa741d23241b50e8a7517acfbd7"},{url:"/_next/static/chunks/pages/praisesub-be682c76e2abadaa11af.js",revision:"c1c4a75d90f3022f652bb29141fad50b"},{url:"/_next/static/chunks/pages/search-f912a94b67b8a80cc4ac.js",revision:"10733167bd26e093fcd814bc54b1196f"},{url:"/_next/static/chunks/pages/sermon-1fce856417186b8511ce.js",revision:"806d9f5fc2c58b25f8ca709ffe91b748"},{url:"/_next/static/chunks/pages/sermonmain-af6d51363cb5dbf2dbca.js",revision:"5431d0eb420f62eed0c3d38b113bf87c"},{url:"/_next/static/chunks/pages/settings-e29b16a688f1604029f9.js",revision:"ae44b58de9b700581bb6a71078415539"},{url:"/_next/static/chunks/pages/weeklymain-8c124ae715131caaa6b0.js",revision:"a0d4dd5c42421b754633fe2fec141338"},{url:"/_next/static/chunks/pages/weeklynews-dacb91b712365828c4c4.js",revision:"05c1694462c483b1291bbf99d4c22098"},{url:"/_next/static/chunks/pages/weeklyorder-d1146c262d6c67ad0c4d.js",revision:"8fc017ed55d9df30ba1e2c26dd257bfa"},{url:"/_next/static/chunks/pages/weeklysummary-228cae63d66682a3a2ee.js",revision:"7d0d521c6a370cecbcbe7b9348e908e6"},{url:"/_next/static/chunks/pages/weeklywords-8a80aa79268188794542.js",revision:"e8b927c73faabe15cd75e62e1439f185"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-90a60b87fd0d5fc150f2.js",revision:"a7a7abccdb9ab52867ca86bfb2de76be"},{url:"/_next/static/css/048be37a0a0bc06af80b.css",revision:"c3874c51c08a1bd8926590392f1e5f9f"},{url:"/_next/static/css/b2c770bd0065b535fca6.css",revision:"cf296bd532b8ddb7cdb097328edeb08b"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/firebase-logo.png",revision:"c3330f751280e6dd26199b48db7f1118"},{url:"/firebase-messaging-sw.js",revision:"8e02ebda07ee83a8458dcfc59f80802e"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"f1aa3b50d8454263d485f339736ec44c"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
