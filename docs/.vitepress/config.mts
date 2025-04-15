import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Notes",
  description: "Compilation of Python Notes from Course",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modules',
        items: [
        { text: 'Module 1', link: '/contents/module1' },
        { text: 'Module 2', link: '/contents/module2' },
        { text: 'Module 3', link: '/contents/module3' },
        { text: 'Module 4', link: '/contents/module4' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Modules',
        items: [
          { text: 'Module 1', link: '/contents/module1' },
          { text: 'Module 2', link: '/contents/module2' },
          { text: 'Module 3', link: '/contents/module3' },
          { text: 'Module 4', link: '/contents/module4' }
        ]
      }
    ],

    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
  }
})
