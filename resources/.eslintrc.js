module.exports = {
    extends: [
        '@nuxtjs/eslint-config-typescript'
    ],
    rules: {
        indent: ['warn', 4],
        'vue/html-indent': ['warn', 4],
        'space-before-function-paren': ['warn', 'never'],
        'vue/name-property-casing': ['warn', 'kebab-case']
    }
}
