export default {
    buildModules: [
        ['@nuxtjs/vuetify',
            {
                customVariables: ['~/assets/variables.scss'],
                defaultAssets: {
                    font: {
                        family: 'Roboto'
                    },
                    icons: 'mdi'
                },
                treeShake: true
            }
        ],
        '@nuxt/typescript-build'
    ],
    modules: [
        '@nuxtjs/axios'
    ]
}
