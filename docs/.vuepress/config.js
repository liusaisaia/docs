module.exports = {
  title: "鲸落鹿林",
  description:
    "昔风不起，唯有努力生存。Le vent se leve，il faut tenter de vivre。",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  // 主题配置文件
  themeConfig: {
    // 导航栏配置
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "前往",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/liusaisaia/liusaisaia.github.io",
            icon: "reco-github",
          },
          {
            text: "GitHub",
            link: "https://blog.csdn.net/weixin_45481771",
            icon: "reco-csdn",
          },
        ],
      },
    ],
    type: "blog",
    // 主题所带的配置文件
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "鲸落鹿林",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    search: true, // 当前项目是否要开启搜索
    searchMaxSuggestions: 10,
    sidebar: "auto",
    collapsable: true,
    lastUpdated: "Last Updated",
    author: "liusaisai",
    authorAvatar: "/avatar.png",
    record: "专案报备",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true, // 代码行数是否要显示
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["shizuku", "koharu", "z16", "miku"], // 多个值可以在页面手动更换模型
        width: 300, // 模型宽度
        height: 440, // 模型高度
        clean: false, // 是否隐藏按钮
        messages: {
          // 按钮提示语
          welcome: `欢迎来到 $site.title`,
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "你知道我喜欢吃什么吗？痴痴地望着你。",
        },
        messageStyle: {
          // 消息框样式
          right: "68px",
          bottom: "190px",
          "z-index": 10000,
        },
        // btnStyle: {         // 按钮样式

        // },
        modelStyle: {
          // 自定义模型样式
          right: "90px",
          bottom: "0px",
          opacity: "0.9",
          "z-index": 1000,
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        // 设置 `platform` 而不是 `api`
        platform: "github-v4",

        // 其他的 Vssue 配置
        owner: "liusaisaia",
        repo: "liusaisaia.github.io",
        clientId: "72201652593deb278498",
        clientSecret: "d4abb2a192354bb2b564d4fd2c34c0f464906f0e",
        autoCreateIssue: true,
      },
    ],
  ],
};
