import { defaultLang, ui } from "@i18n/ui";

export function useTranslations(lang: keyof typeof ui) {
  return function translate(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export type Translate = (key: keyof (typeof ui)[typeof defaultLang]) => string