import {devexpresswpf,defineNotesConfig } from 'vuepress-theme-plume'
/**
 * 配置 单个 note
 */
const devexpresswpf = defineNoteConfig({
  dir: 'devexpresswpf',
  link: '/devexpresswpf/',
  sidebar: [
    '/保持原生WPF控件样式.md',
  ]
})


export const notes = defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [devexpresswpf]
    
})
