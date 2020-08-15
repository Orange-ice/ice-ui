module.exports = {
  base:'/Ice-UI/',
  title: 'Ice-UI',
  description: '一个简约、易用的 UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: 'Github', link: 'https://github.com/Orange-ice/Ice-UI'},
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
          '/components/popover',
        ]
      },

    ]
  }
}