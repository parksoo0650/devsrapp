if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,i,a)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return c;case"module":return n;default:return e(s)}})).then(e=>{const s=a(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"4f5ca87a6870c96ad6fb0f65adfdac9b"},{url:"/_next/static/_EscwlTALcHWy_ohRSBvx/_buildManifest.js",revision:"9c3fd4bf386920ca5233dd7a003868dc"},{url:"/_next/static/_EscwlTALcHWy_ohRSBvx/_middlewareManifest.js",revision:"b8473bde57e80626206a2206e3b14c77"},{url:"/_next/static/_EscwlTALcHWy_ohRSBvx/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/406-eb63bd705aba188e.js",revision:"4d7bd8e51892787dd79d455afa0daa1a"},{url:"/_next/static/chunks/445-d582972e50387eb4.js",revision:"8d57a53442ff6dc455ee0772cb7d1fe9"},{url:"/_next/static/chunks/669-af50e33e8221387b.js",revision:"b1e6348d635bd0de99b492341a807df1"},{url:"/_next/static/chunks/683-2a151344b170472b.js",revision:"175874228d5845fc7fa7b88882a5ff05"},{url:"/_next/static/chunks/framework-9346e584cf5fb262.js",revision:"d19f01527a6cca3857e248e63c86bc06"},{url:"/_next/static/chunks/main-02927f9e786a17ba.js",revision:"0b2c320dba5bfddacdd1b165f43ce4f2"},{url:"/_next/static/chunks/pages/_app-3a5e378470443eb9.js",revision:"e7ddc682e9b05b605f06082fa1e5e39b"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"f745e374c3064513d3f9c526ee0fd9e4"},{url:"/_next/static/chunks/pages/admin-94cfe47b821011f1.js",revision:"765f759c33d73172ba823d92a968379e"},{url:"/_next/static/chunks/pages/biblelist-9c3e27bfbb4b3b93.js",revision:"05f2a15a98688ba7142b86f10a128afa"},{url:"/_next/static/chunks/pages/boardlist-8c3de3ef3ecac64b.js",revision:"907945d8ac9cf13449b7ddd9a311839f"},{url:"/_next/static/chunks/pages/boardview-9e625f15575721a9.js",revision:"c93899337ff9502bfe10aaf55b3717e7"},{url:"/_next/static/chunks/pages/boardwrite-3add617fc9a965b3.js",revision:"62370521331dabea77b15cbcb3006bb2"},{url:"/_next/static/chunks/pages/book/%5Bid%5D-909df7bccfce9e93.js",revision:"52989fa333348be36fa2139061e0780e"},{url:"/_next/static/chunks/pages/chapter/%5Bid%5D-47e2b2f6f4c8dc2d.js",revision:"aef605836a773e63a7b17401a1a987ec"},{url:"/_next/static/chunks/pages/hymnmain-63cf3bc3d2e93e61.js",revision:"dc72f34d8797b029677bca437c855899"},{url:"/_next/static/chunks/pages/index-4bb06859e787b7d3.js",revision:"09e4eb5c7e4219fae926537363601778"},{url:"/_next/static/chunks/pages/offering-6bfe7a5868ec0a43.js",revision:"abcfe8a262b7db6c4de5daf513b3472d"},{url:"/_next/static/chunks/pages/onbibledetail-3e0cc4c33d09e351.js",revision:"d5366bb30607ea36db0a2601204861f9"},{url:"/_next/static/chunks/pages/onmain-d35c2ba893c2cb9a.js",revision:"6c5180f0279bfc07a6502aca1c9c97ad"},{url:"/_next/static/chunks/pages/onprayerdetail-46da854e260cb913.js",revision:"6b91142a389db2ef242b9e1e59861273"},{url:"/_next/static/chunks/pages/onsub-fcb619709a13af53.js",revision:"2fced8007efdad9a96eaeca65c7d0e85"},{url:"/_next/static/chunks/pages/onthreedetail-19bc623e66d67038.js",revision:"337210e7e2d0875699756dac43438160"},{url:"/_next/static/chunks/pages/praisedetail-a06a9006f6ac4607.js",revision:"daf0d3bb68021ff4801ad896942ec2b9"},{url:"/_next/static/chunks/pages/praiselist-113076574b35d06a.js",revision:"d5eb4cdd67e570b00c887d68962399c7"},{url:"/_next/static/chunks/pages/praisemain-11018dfe5f730ea2.js",revision:"06d55d197eddc347cfd08ecba0a2d7ef"},{url:"/_next/static/chunks/pages/praisesub-db849ba5e07d5861.js",revision:"f56166748e654626a4b05379309812e9"},{url:"/_next/static/chunks/pages/search-d7024c22ebdbb971.js",revision:"d5f5747aa24015d94b7659ae0eb6a230"},{url:"/_next/static/chunks/pages/sermon-851ad02ff3784bce.js",revision:"a27cb620d50232de651ee690940d690e"},{url:"/_next/static/chunks/pages/sermondetail-d8a81364ed4aca39.js",revision:"d1f939231eab83fc53524a0251c97363"},{url:"/_next/static/chunks/pages/sermonlist-cd75948556c93351.js",revision:"8a92c37c18853bb4c3d5f64bd345553a"},{url:"/_next/static/chunks/pages/sermonmain-2225971850feb458.js",revision:"24e50a2837b6100b21d3bb8f3feef6c3"},{url:"/_next/static/chunks/pages/settings-3695796a396ee55e.js",revision:"6abf9c75fbf34e2551d5d73eceb5ddb3"},{url:"/_next/static/chunks/pages/weeklymain-3aebcdc6c3fd8698.js",revision:"7810a2b7a3cb4654196a4e91c2721bbf"},{url:"/_next/static/chunks/pages/weeklynews-4f50d67c2bf3e99a.js",revision:"d5837585d586bcaa68516f86f9a8d14c"},{url:"/_next/static/chunks/pages/weeklyorder-5d88541fa04eb137.js",revision:"a20180bd7840ee7a906a7b2671fc6d3e"},{url:"/_next/static/chunks/pages/weeklysummary-804b1635adb6cce8.js",revision:"1ab962d3739e22460799b6becf52b9e9"},{url:"/_next/static/chunks/pages/weeklywords-5d3f784b797e59c6.js",revision:"5ecb208aa2796b64f27953c0878b7acd"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-27593bf8d60abcde.js",revision:"95ac22dae0348b5a57892e026d6aae32"},{url:"/_next/static/css/184a6c448a0a3052.css",revision:"f3b7040ec04f44f540df2295d3543ab7"},{url:"/_next/static/css/1d8efe522a3dfcec.css",revision:"666b6162e13d32b2b2773328e80bf6bb"},{url:"/_next/static/css/89e0207573509fed.css",revision:"6d22dce5fbd5e9c464e942947c8734f6"},{url:"/_next/static/css/d2b7ce443467e479.css",revision:"c7cca5640742f341461bf5f88cde16cb"},{url:"/_next/static/media/NanumBarunGothicWeb.af7b31ac.woff",revision:"40eecdb6281f1e909b361f60a8b90f60"},{url:"/_next/static/media/NanumBarunGothicWeb.b5e296b7.ttf",revision:"1814dc2dbca010f485f5c70c7d4b0c3d"},{url:"/_next/static/media/NanumBarunGothicWebBold.7e787ad5.ttf",revision:"eb37fdc1464c8f5d5d744a898f151e8f"},{url:"/_next/static/media/NanumBarunGothicWebBold.aefbddb7.woff",revision:"237bbd8756e45f629eff12d6af6fcd4f"},{url:"/_next/static/media/NanumBarunGothicWebLight.704553dc.woff",revision:"c0f2239c449c9187e1e38573fdb68017"},{url:"/_next/static/media/NanumBarunGothicWebUltraLight.4776cc96.ttf",revision:"3ea83a7051d9d943ce669a548ca814b0"},{url:"/_next/static/media/NanumBarunGothicWebUltraLight.99efa914.woff",revision:"1e2aaa22df9bc9e327d3338423be075c"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/firebase-logo.png",revision:"c3330f751280e6dd26199b48db7f1118"},{url:"/firebase-messaging-sw.js",revision:"8e02ebda07ee83a8458dcfc59f80802e"},{url:"/icons/ico_alarm.svg",revision:"78adb80a8f71e5f7ff2db52a9188c499"},{url:"/icons/ico_back.svg",revision:"66142efca9897e723e4d77a404dc4594"},{url:"/icons/ico_bible.svg",revision:"29cccc66d94c66525d8cee0555f05b17"},{url:"/icons/ico_blog.svg",revision:"f1a80eb7e9396732532ffa0d5056c5bd"},{url:"/icons/ico_book.svg",revision:"6b72eadecdb0f4f26844d678d85d0843"},{url:"/icons/ico_close.svg",revision:"f37af77d23e26d3debf70b8b8ffcf990"},{url:"/icons/ico_copy.svg",revision:"ced718a84d1901469e7696cc29f42160"},{url:"/icons/ico_drop.svg",revision:"5282955a26b08dd508c4c3c1fccc8b41"},{url:"/icons/ico_facebook.svg",revision:"0830f4b79e8e1330a4a12b26cd5c0d79"},{url:"/icons/ico_filter.svg",revision:"84934979e40afdf07972cdfaff0c12a7"},{url:"/icons/ico_home.svg",revision:"615bec81ee52cae06d6951851fc3d711"},{url:"/icons/ico_hymn.svg",revision:"a32e8793282d3fe80b5af328f1a1b881"},{url:"/icons/ico_instar.svg",revision:"8b3f59081a450b9d2af1ea79d526ffe5"},{url:"/icons/ico_menu.svg",revision:"52d28a46bb21cf6313ba6180746b3b9d"},{url:"/icons/ico_onseries.svg",revision:"40d68d617fd2c5faf7064f1381bcaca7"},{url:"/icons/ico_play.svg",revision:"c6139a3e4bc90920477916ad37f555ac"},{url:"/icons/ico_quick_bible.svg",revision:"572e338f0c565a5a856a3b7f184b2414"},{url:"/icons/ico_quick_bible1.svg",revision:"74b8eac24c3e883a4fab834fbc2b41de"},{url:"/icons/ico_quick_hymn.svg",revision:"60d1061d1b8d1b8f3feaab7993bdb5fe"},{url:"/icons/ico_quick_news.svg",revision:"6713dfd2122946fd8c1cf62b42e7dfa2"},{url:"/icons/ico_quick_offering.svg",revision:"d4912df6e5de249e9b79a30056987a8c"},{url:"/icons/ico_quick_onseries.svg",revision:"adfa97021110cb3e9ed4ecc32efddc4c"},{url:"/icons/ico_quick_praise.svg",revision:"ca1d376334463a73e27df78d6dc1ee85"},{url:"/icons/ico_quick_sermon.svg",revision:"c46157d90401e1504a3bde6ae8de7f61"},{url:"/icons/ico_quick_weekly.svg",revision:"c614a584c6988bf2f3f1d2d150acf0fb"},{url:"/icons/ico_sat.svg",revision:"ebc221145ee2ac4d96bb818595eaae5e"},{url:"/icons/ico_search.svg",revision:"5f3dc98764524968ab4c58364c9d8b12"},{url:"/icons/ico_sermon.svg",revision:"41a6e9802c8c5bb64886fd1b246c9af2"},{url:"/icons/ico_setting.svg",revision:"17cbe1f0ef63dbb9b25ff59e559219c1"},{url:"/icons/ico_share.svg",revision:"be8b24f4ff8c84964a3a1ddf8edbf0c2"},{url:"/icons/ico_swiper_left.svg",revision:"a5927008e99216df464cc7c87ef05cf7"},{url:"/icons/ico_swiper_right.svg",revision:"845c21a499d54f7f6743d0067544a304"},{url:"/icons/ico_trans.svg",revision:"921d0b0a767f56406597f2b62783430c"},{url:"/icons/ico_youtube.svg",revision:"b317228d5b3db6e25648c79d05bb08a1"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/icons/thumb_bwm.svg",revision:"b63273387a6db8512d3520ad436a78c0"},{url:"/icons/thumb_cba.svg",revision:"cf47f6280b5ef757e57203a29eb5fd95"},{url:"/icons/thumb_elementary.svg",revision:"ded6e1f3a46d2f081f9f7d0f19467293"},{url:"/icons/thumb_high.svg",revision:"d9e72ba52a4ddd979219e5b70cb91b28"},{url:"/icons/thumb_secondary.svg",revision:"e696ab3b4543ab7008ff72f83c5a5fdb"},{url:"/images/bg_jubo.png",revision:"00652382b045857c85d9c3232623c071"},{url:"/images/img_hymn.svg",revision:"eaf4272415995099adda7bfc058d36cb"},{url:"/images/logo.svg",revision:"1b86473c00b595d2ce5bcc80445898e1"},{url:"/images/main/banner01.png",revision:"b1cebd31fd4c117292638d82e3d91133"},{url:"/images/main_bn_1.png",revision:"9bb48275dce1d119ce9e5cdc7ffdd901"},{url:"/images/main_bn_2.png",revision:"16817667f3bd6d325dee41b111eb848e"},{url:"/images/onthree/img_three01.png",revision:"a93da5765787d77368879c93de2193a3"},{url:"/images/onthree/img_three02.png",revision:"153a8f84c44399db3412f8f0a94c96e2"},{url:"/images/splash_test.jpg",revision:"cbf39fbb4b926790ec1498cb2e3222f1"},{url:"/images/w1.png",revision:"cfa32c86a644ecddada1ca4467557188"},{url:"/images/w2.png",revision:"97db982be35804ab11220741cafe61cb"},{url:"/images/w3.png",revision:"baca7e203849134e87e9f4c74766bbbf"},{url:"/images/w4.png",revision:"971120f44fd10f53680d1d777b0c004f"},{url:"/images/w5.png",revision:"8e708180fabbc4e4e222f8919aa3891d"},{url:"/manifest.json",revision:"d68643a8e81cbb74f223c16c64326129"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
