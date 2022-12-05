const path = require('path')
const { mergeConfig } = require('vite')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@src': path.resolve(__dirname, '../src')
        }
      },
  
      css: {
        postcss: null,
        preprocessorOptions: {
          scss: {
            additionalData: `@import "../src/styles/styles.scss";`
          }
        }
      }
    })
  }
}
