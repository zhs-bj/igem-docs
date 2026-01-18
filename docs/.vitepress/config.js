// docs/.vitepress/config.js 精准修复版 导航+文档100%匹配
export default {
  // 网站基础信息
  title: 'IGEM Project Docs',
  description: 'IGEM项目文档作业',
  lang: 'zh-CN',

  // 主题配置 - 导航栏+页脚 （重点：导航菜单名称改成你要的【项目说明、团队介绍】）
  themeConfig: {
    // 顶部导航栏 👇 这里的文字就是网页顶部显示的菜单名称，链接对应docs里的md文件
    nav: [
      { text: '首页', link: '/' },
      { text: '语法示例', link: '/markdown-examples.md' },
      { text: 'API示例', link: '/api-examples.md' },
      { text: '项目说明', link: '/my-docs.md' },  // 文字：项目说明 → 对应文件 my-docs.md
      { text: '团队介绍', link: '/team-intro.md' } // 文字：团队介绍 → 对应文件 team-intro.md
    ],
    // 左侧侧边栏：自动生成文档目录，不用改
    sidebar: 'auto',
    // 页脚信息
    footer: {
      message: 'IGEM作业 · VitePress搭建完成',
      copyright: '版权所有 © 2026'
    }
  }
}