<template>
  <div class="min-h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-200 font-sans">
    <NuxtLoadingIndicator />
    
    <!-- Header Flotante -->
    <div class="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <header class="max-w-5xl mx-auto bg-primary dark:bg-primary/90 rounded-2xl shadow-xl transition-all duration-300">
        <nav class="px-6 py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-8">
              <NuxtLink to="/" class="text-xl font-bold text-white font-heading">Mi Empresa</NuxtLink>
              <div class="hidden md:flex space-x-6">
                <a href="#servicios" class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors">Servicios</a>
                <a href="#proyectos" class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors">Proyectos</a>
                <NuxtLink to="/blog" class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors">Blog</NuxtLink>
                <a href="#contacto" class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors">Contacto</a>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <ThemeToggle />
              <button class="hidden md:block px-4 py-2 bg-white hover:bg-gray-100 text-primary rounded-lg transition-colors">
                Contáctanos
              </button>
              <MobileMenu class="mobile-menu" />
            </div>
          </div>
        </nav>
      </header>
    </div>

    <!-- Contenido Principal -->
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* Ajuste para el scroll del header */
@media (min-width: 768px) {
  .scrolled {
    @apply shadow-lg bg-primary dark:bg-primary/90;
  }
}
</style>