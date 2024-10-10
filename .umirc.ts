import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
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
});
