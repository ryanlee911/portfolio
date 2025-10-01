const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/jyp_deploy/" // 👉 GitHub 저장소 이름과 동일하게 설정해야 함!
});
