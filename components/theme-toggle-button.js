import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('purple', 'orange');
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          colorScheme={color}
          icon={icon}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
