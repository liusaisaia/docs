/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ddf1a02597b9a18d26a681189be957d9"
  },
  {
    "url": "assets/css/0.styles.ed77be9c.css",
    "revision": "6474b3e9c2f67172dcc0c3cd3cb48be1"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.b0c3361e.js",
    "revision": "cbde6c2986d71b805f4db9168cc72718"
  },
  {
    "url": "assets/js/10.55079f75.js",
    "revision": "ca318ad291c70d20e2ad15c86dc22276"
  },
  {
    "url": "assets/js/11.266a1a6f.js",
    "revision": "be7a59b353dc13782fd99b483003159c"
  },
  {
    "url": "assets/js/12.e1c203fa.js",
    "revision": "006302850845024a745f8ad4b52055a3"
  },
  {
    "url": "assets/js/13.fa7e44e5.js",
    "revision": "a8c6f0eba7d527665d39ea23be050b6d"
  },
  {
    "url": "assets/js/14.fc154e81.js",
    "revision": "bef99b22e61f4abe5cf480e4ee601243"
  },
  {
    "url": "assets/js/15.103cae3a.js",
    "revision": "754c46eda9809e728bd01ac06e6e7f09"
  },
  {
    "url": "assets/js/16.490f772b.js",
    "revision": "6682cf9f02dbd3ac4dc0068b5c862e7b"
  },
  {
    "url": "assets/js/17.3eab5719.js",
    "revision": "b0c9b875e18459cabb526cbe5eb473d1"
  },
  {
    "url": "assets/js/18.11105d06.js",
    "revision": "c9e2d84554e6534aadb785c908cc57cd"
  },
  {
    "url": "assets/js/19.c94f62ac.js",
    "revision": "08ad0e82757d7127984de73a209a2a6f"
  },
  {
    "url": "assets/js/20.dd22ea21.js",
    "revision": "88dff4650c646ba64b83c4de6d6bb77b"
  },
  {
    "url": "assets/js/21.4f69a0e2.js",
    "revision": "f9e0b764b9dca187528275a7dfa07c92"
  },
  {
    "url": "assets/js/22.e1b65681.js",
    "revision": "7928181ad9aaabf9d03b897926e8d6e1"
  },
  {
    "url": "assets/js/23.3c3eaeb1.js",
    "revision": "e43833c340b47d3b1a284f64d7c6dc6a"
  },
  {
    "url": "assets/js/3.2be35faf.js",
    "revision": "37fff390fb2d4c231d5b45069c83acbe"
  },
  {
    "url": "assets/js/4.fb09c090.js",
    "revision": "2ad6def4f2a03c8d5eb62ca7e03fb530"
  },
  {
    "url": "assets/js/5.f59a0914.js",
    "revision": "219d5647ae21179b05d1023304496794"
  },
  {
    "url": "assets/js/6.7f986fc8.js",
    "revision": "20330abb26281bf192d47323cfe1f532"
  },
  {
    "url": "assets/js/7.a3265b2f.js",
    "revision": "58c84a648a756771132cbd1bdf55d3e0"
  },
  {
    "url": "assets/js/8.19e86200.js",
    "revision": "9866348fdb4c9c02710b269a44f52379"
  },
  {
    "url": "assets/js/9.7f41f5fc.js",
    "revision": "521983d5460c4f68de870071aa847099"
  },
  {
    "url": "assets/js/app.208a8f02.js",
    "revision": "a96bc4163fa5cccd0f6fc62713db35f7"
  },
  {
    "url": "categories/index.html",
    "revision": "162b210c53bcfa1a458df8f3ed91a711"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "193fb4da0d9978665b43deda97bcb33c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "920a02511eea0c5dc985b40b47da812a"
  },
  {
    "url": "categories/vue小程序/index.html",
    "revision": "1f17ef383ae99ac9621e1f80bfb2ac6b"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "1e5659cd28d98e375b488f1ba37445ae"
  },
  {
    "url": "categories/学习记录/index.html",
    "revision": "45fd3facce16b9ec1d63aa74e2d45dc7"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "616382a81c211d4334510bae53ac58d3"
  },
  {
    "url": "tag/index.html",
    "revision": "3fb1e108c207c27208b19c13958e93a7"
  },
  {
    "url": "tag/收集/index.html",
    "revision": "e44e39401c32cdf977f6a632f44ff5db"
  },
  {
    "url": "tag/方法/index.html",
    "revision": "ef93d3d5c056fb57e2b61fef05fa7b2d"
  },
  {
    "url": "tag/日常记录/index.html",
    "revision": "e92df71fc73617e7bcfe86ccd52fe87d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e944c76d4cc4f1c14f2bb8f9c6c686a"
  },
  {
    "url": "views/other/guide.html",
    "revision": "b80d403a480e8a43493fd782558bb8a3"
  },
  {
    "url": "views/vue/vue项目问题收集/121501.html",
    "revision": "577ee3e5d9b99e1b5208346c7bd450b7"
  },
  {
    "url": "views/vue/vue项目问题收集/20200520.html",
    "revision": "3801aa396651048abf9fa152b3e0c4b9"
  },
  {
    "url": "views/vue/一些方法/20200520.html",
    "revision": "0a6b5b882c7bae2a7ae43129197dcced"
  },
  {
    "url": "views/vue/一些方法/202005201.html",
    "revision": "53bb12c9db58eef0354c20bbb12a3f9f"
  },
  {
    "url": "views/webpack/基本配置.html",
    "revision": "3c198b12ae67425433600bb3dc9a9308"
  },
  {
    "url": "views/学习记录/20200519.html",
    "revision": "830cf8536ff103ccedb1b375fa0912df"
  },
  {
    "url": "views/学习记录/202005202.html",
    "revision": "e3b3f25ada4be36300de5e0e996eeab8"
  },
  {
    "url": "views/学习记录/202005203.html",
    "revision": "ebdd11a815af2921a52e146fb42544b8"
  },
  {
    "url": "views/学习记录/20200924.html",
    "revision": "5b7e62fdc76f53ac2848224046e15347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
