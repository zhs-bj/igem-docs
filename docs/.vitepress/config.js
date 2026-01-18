export default {
  base: '/igem-docs/', // 必须和仓库名一致
  lang: 'zh-CN',
  title: 'IGEM Project Docs',
  description: 'IGEM项目文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '语法示例', link: '/markdown-examples.md' },
      { text: 'API示例', link: '/api-examples.md' },
      { text: '项目说明', link: '/project_introduction.md' },
      { text: '团队介绍', link: '/team_introduction.md' }
    ]
  }
}