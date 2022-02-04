module.exports = {
    title: '轱辘UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            {
                // path: '/install/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                title: '入门',
                children: [ '/install/','/get-start/'],
            },
            {
                title: '组件',
                children: [
                    "/components/button",
                    // "/components/input",
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
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
