import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US.json'
// console.log(enUS)
// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'en-US'>({
  locale: 'en-US',
  messages: {
    'en-US': {
      message: enUS
    }
  }
})
// const i18n = createI18n({
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages: {
//     en: {
//       message: {
//         hello: 'hello world'
//       }
//     },
//     ja: {
//       message: {
//         hello: 'こんにちは、世界'
//       }
//     }
//   }
// })


export default i18n