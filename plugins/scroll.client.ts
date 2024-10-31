export default defineNuxtPlugin(() => {
  if (process.client) {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }
})