import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'cursor-pointer inline-block opacity-75 transition duration-200 ease-in-out hover:opacity-100 disabled:cursor-default disabled:bg-gray disabled:opacity-50'],
    ['btn-primary', 'bg-primary px-4 py-1 rounded-full'],
    ['btn-icon', ' hover:text-primary'],
  ],
  theme: {
    colors: {
      light: "#e6e1de",
      dark: "#0f0c13",
      primary: {
        DEFAULT: "#ff6b6b",
        //"50": "",
        //"100": "",
        //"200": "",
        //"300": "",
        //"400": "",
        //"500": "#ff6b6b",
        //"700": "",
        //"800": "",
        //"900": ""
      },
      secondary: "#00bfba",
      accent: "#ff9c4a"     
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        sans: ['Open Sans', 'Open Sans:400,700'],
        display: ['Dosis', 'Dosis:400,700'],
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})