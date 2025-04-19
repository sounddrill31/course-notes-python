import { defineConfig } from 'vitepress'
import { vitepressPythonEditor } from 'vitepress-python-editor/vite-plugin'
import { withMermaid } from "vitepress-plugin-mermaid"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Notes",
  description: "Compilation of Python Notes from Course",
  base: '/course-notes-python/',
  mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
 // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container 
    },
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
  },
  vite: {
    plugins: [
      vitepressPythonEditor({ assetsDir: 'docs/.vitepress/dist/assets' }),
    ]
  }
})