import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'Death Light',
  antd: {},
  access: false,
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
    {
      name: '首页',
      path: '/',
      component: './Home',
    },
  ],
  npmClient: 'yarn',
  base: '/deathlight',
  publicPath: '/deathlight/',
});
