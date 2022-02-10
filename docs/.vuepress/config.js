module.exports = {
    // base: /R-UI/,
    base: '/R-UI/',
    title: 'R-UI',
    description: '一个好用的UI框架',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: 'github', link: 'https://github.com/xiaoyuAnd/R-UI' },
        ],
        sidebar: [
            {
                title:'入门',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/install/',
                    '/get-start/',
                ]
            },
            {
                title: '组件',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    // '/components/popover',
                    '/components/toast',
                    // '/components/collapse',
                ],
            }
        ],
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.s[ac]ss$/i,
    //             use: [
    //                 // Creates `style` nodes from JS strings
    //                 "style-loader",
    //                 // Translates CSS into CommonJS
    //                 "css-loader",
    //                 // Compiles Sass to CSS
    //                 "sass-loader",
    //             ],
    //         },
    //     ],
    // },
}
