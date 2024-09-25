import {devexpresswpfNoteConfig,defineNotesConfig } from 'vuepress-theme-plume'
/**
 * 配置 单个 note
 */
const devexpresswpf = devexpresswpfNoteConfig({
  dir: 'devexpresswpf',
  link: '/devexpresswpf/',
  sidebar: 'auto'
})


export const notes = defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [devexpresswpf]
    
})
