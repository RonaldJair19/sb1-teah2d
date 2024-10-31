export const useTheme = () => {
  const colorMode = useState('colorMode', () => 'light')
  
  const toggleTheme = () => {
    const newTheme = colorMode.value === 'light' ? 'dark' : 'light'
    colorMode.value = newTheme
    localStorage.setItem('theme', newTheme)
    updateHTMLClasses(newTheme)
  }

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      const theme = savedTheme || (prefersDark ? 'dark' : 'light')
      colorMode.value = theme
      updateHTMLClasses(theme)
    }
  }

  const updateHTMLClasses = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    colorMode,
    toggleTheme,
    initTheme
  }
}