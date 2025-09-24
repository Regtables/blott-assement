import localFont from 'next/font/local'

const albraFont = localFont({
  src: './fonts/albra-thin.otf',
  variable: '--font-albra',
  display: 'swap',
})

const helveticaNowFont = localFont({
  src: './fonts/helvetica-now-display-light.ttf',
  variable: '--font-helvetica-now',
  display: 'swap',
})

export { albraFont, helveticaNowFont }