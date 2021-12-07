import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Link: {
    variants: {
      'link-text': props => ({
        color: mode('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3
      })
    }
  },
}

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  spacejelly: '#692ba8',
}

// 3. extend the theme
const theme = extendTheme({ config, styles, components, colors })

export default theme