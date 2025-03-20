module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  ignorePatterns: ['**/.next/**', '**/node_modules/**'],
  root: true,
  settings: {
    next: {
      rootDir: ['basics/*/', 'dashboard/*/', 'seo/'],
    },
  },
  rules: {
    'next/no-html-link-for-pages': [
      'error',
      {
        pagesDir: './app' // 与 next.config.js 中配置的路径一致
      }
    ]
  }
};
