import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', 
        borderRadius: '2xl'
      },
      defaultProps: {
        colorScheme: 'purple', 
      },
    },
  },
})

export default theme