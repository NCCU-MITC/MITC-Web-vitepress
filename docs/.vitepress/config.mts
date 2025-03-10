import { defineConfig } from 'vitepress'
import ClubLeader from 'docs\.vitepress\components\ClubWorker.vue';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NCCU MITc",
  head: [
    ['link',{rel:'icon',href:'/icon.png'}],
    ['meta', { name: 'keywords', content: '數理資訊社, 政大數理資訊社, 政治大學, 政治大學數理資訊社, MITC, NCCU-MITC, Pyday' }],
    ['meta', { name: 'description', content: '政大數理資訊社官網' }],
    ['meta', { name: 'google-site-verification', content:'xwL8a9NV2cxXJFvIs7jO-r717PzvMiHIjCJAl6VB7cg'} ],
    ["meta", { property: "og:title", content: "政大數理資訊社" }],
    ["meta", { property: "og:description", content: "這是政大數理資訊社官網，提供高品質的內容" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://nccu-mitc.github.io/MITC-Web-vitepress/" }],
    ["meta", { property: "og:image", content: "https://media.discordapp.net/attachments/1339172704699285587/1348280209601990747/images.jpg?ex=67cf8c0b&is=67ce3a8b&hm=de518491ebaed759d96111d0ee2a094934f252b599d22045f8fbaaa77551fcfe&=&format=webp&width=285&height=276" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "政大數理資訊社" }],
    ["meta", { name: "twitter:description", content: "這是政大數理資訊社官網" }],
    ["meta", { name: "twitter:image", content: "https://media.discordapp.net/attachments/1339172704699285587/1348280209601990747/images.jpg?ex=67cf8c0b&is=67ce3a8b&hm=de518491ebaed759d96111d0ee2a094934f252b599d22045f8fbaaa77551fcfe&=&format=webp&width=285&height=276" }],
  ],
  description: "A Good Site",

  base: '/MITC-Web-vitepress/',

  themeConfig: {
    //siteTitle: false,
    logo:'/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '關於我們', link: '/about-us/' },
      { text: '幹部名單', link: '/workerlist/'},
      { text: '社課與專案', link:'/plan/'},
      { text: '教學教材', link:'/teach'},
      { text: 'Blog', link:'/blog' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NCCU-MITC/MITC-Web-vitepress' },
      { icon: 'facebook', link: 'https://www.facebook.com/nccumit'},
      { icon: 'discord', link: 'https://discord.gg/hNZEAAaw7W'},
      { icon: 'instagram', link:'https://www.instagram.com/nccu_mitc/'},
    ],
    footer:{
      message:'聯絡我們: <a href="nccumitc@gmail.com">nccumitc@gmail.com</a> ',
      //copyright:'AAAAA'

    }
  }
})
