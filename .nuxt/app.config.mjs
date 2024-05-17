
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "C:/Users/gowth/Downloads/themeforest-Va4KCQY1-tairo-multipurpose-nuxt-tailwind-css-dashboard-system/.app/app.config.ts"
import cfg1 from "C:/Users/gowth/Downloads/themeforest-Va4KCQY1-tairo-multipurpose-nuxt-tailwind-css-dashboard-system/layers/tairo/app.config.ts"
import cfg2 from "C:/Users/gowth/Downloads/themeforest-Va4KCQY1-tairo-multipurpose-nuxt-tailwind-css-dashboard-system/node_modules/@shuriken-ui/nuxt/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, cfg2, inlineConfig)
