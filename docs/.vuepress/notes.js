import {defineNoteConfig,defineNotesConfig } from 'vuepress-theme-plume'
/**
 * 配置 单个 note
 */
const devexpresswpf = defineNoteConfig({
  dir: 'devexpresswpf',
  link: '/devexpresswpf/',
  sidebar: 'auto'
})


export default defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [devexpresswpf]
})
