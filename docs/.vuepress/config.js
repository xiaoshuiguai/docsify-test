module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    sidebar:{
        '/language/chinese/': [
            {
                title: 'Group1',  //组名
                children: [''],   //该分组下要显示的文件的目录
            },
            {
                title: 'Group2',
                children: [['a','测试'],['b','bbbb']],
            },
            {
                title: 'Group3',
                children: [
                    {
                        title: 'A',
                        children: [['math/1','aaaaaa']],
                    },
                    //小组B
                    {
                        title: 'B',
                        children: [['math/2','cccc']],
                    },
                ]
            }
        ],
        '/language/english/': [
            '',
        ],
        '/life/': [
            {
                title: '111',  //组名
                children: [''],   //该分组下要显示的文件的目录
            },
            {
                title: '222',
                children: []
            },
            {
                title: '3333',
                children: [
                    {
                        title: 'A',
                        children: [['life01','111']],
                    },
                    //小组B
                    {
                        title: 'B',
                        children: [['life02','222']],
                    },
                ]
            }
        ]
    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 4
  }
};