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
    ['primary-btn', 'bg-primary px-4 py-1 rounded-full'],
    ['icon-btn', ' hover:text-primary'],
  ],
  theme: {
    colors: {
      light: "#e6e1de",
      dark: "#0f0c13",
      primary: "#ff6b6b",
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
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})