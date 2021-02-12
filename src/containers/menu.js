const menu = [
    {
        key: '/datamp',
        title: '数据配置',
        icon: 'icon-dashboard',
        auth: [1],
        subs: [
            {
                title: '应用数据结构配置',
                key: '/datamp/application'
            }
        ]
    },
    {
        title: '业务配置',
        key: '/business',
        icon: 'icon-yewu1',
        auth: [1],
        subs: [
            {
                title: '业务单元配置',
                key: '/business/configuration',
                subs: [
                    {
                        title: '上链数据单元配置',
                        key: '/business/configuration/upchainunit'
                    },
                    // {
                    //     title: '数据上链配置',
                    //     key: '/business/configuration/dataupchainsetting'
                    // },
                    // {
                    //     title: '数据下链配置',
                    //     key: '/business/configuration/datadownchainsetting'
                    // },
                    {
                        title: '存证单元配置',
                        key: '/business/configuration/storageunit'
                    }
                ]
            },
            {
                title: '业务流程配置',
                key: '/business/process/configuration',
                subs: [
                    {
                        title: '实际业务流程配置',
                        key: '/business/process/configuration'
                    }
                ]
            }
        ]
    },
    {
        title: '区块链服务配置',
        key: '/appblockchainserver',
        icon: 'icon-qukuailian',
        auth: [1],
        subs: [
            {
                title: '区块链地址薄',
                key: '/appblockchainserver/blockchainaddresssetting',
                icon: 'safety'
            }
        ]
    },
    {
        title: '第三方',
        key: '/thirdparty',
        icon: 'icon-disanfangdanbao',
        auth: [1],
        subs: [
            {
                title: '消息推送',
                key: '/thirdparty/notification',
                icon: 'notification'
            }
        ]
    },
    {
        title: 'Api接口文档',
        key: '/docs',
        icon: 'icon-APIfuwu',
        auth: [1],
        subs: [
            {
                title: '上链',
                key: '/docs/uchain',
                icon: 'notification'
            },
            {
                title: '下链',
                key: '/docs/dchain',
                icon: 'notification'
            }
        ]
    }
]

export default menu
