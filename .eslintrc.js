module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
    },
    "extends": [
        'plugin:prettire/recommended',
        "plugin:nuxt/recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "@nuxtjs/eslint-config-typescript"
    ],
    // "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": '@typescript-eslint/parser',
        "sourceType": "module"
    },
    "plugins": [
        "prettier-plugin-tailwindcss",
        "@typescript-eslint"
    ],
    "rules": {
        'prettier/prettier': [
            'error',
            {
            singleQuote: true,
            },
        ],
        'vue/script-setup-uses-vars': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/custom-event-name-casing': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            },
        ],
        'no-unused-vars': [
            'error',
            {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            },
        ],
        'space-before-function-paren': 'off',

        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/html-self-closing': [ // 標籤斜線結尾
            'error',
            {
            html: {
                void: 'always',
                normal: 'never',
                component: 'always',
            },
            svg: 'always',
            math: 'always',
            },
        ],
        'vue/no-multiple-template-root': 0, // Nuxt3 有一些元件都會是單一名稱，例如404，所以最好是關掉
        'vue/multi-word-component-names': 0,
    },
}
