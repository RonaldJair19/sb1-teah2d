<template>
  <div>
    <!-- Hamburger Button -->
    <button
      @click="isOpen = !isOpen"
      class="md:hidden p-2 text-white hover:text-white/80 transition-colors"
      aria-label="Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!isOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-xl bg-primary dark:bg-primary/90 shadow-xl"
      >
        <nav class="flex flex-col space-y-4">
          <a
            href="#servicios"
            class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            @click="isOpen = false"
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            @click="isOpen = false"
          >
            Proyectos
          </a>
          <NuxtLink
            to="/blog"
            class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            @click="isOpen = false"
          >
            Blog
          </NuxtLink>
          <a
            href="#contacto"
            class="text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            @click="isOpen = false"
          >
            Contacto
          </a>
          <button class="w-full text-left px-4 py-2 bg-white hover:bg-gray-100 text-primary rounded-lg transition-colors">
            Contáctanos
          </button>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isOpen = ref(false)

// Close menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event) => {
    if (isOpen.value && !event.target.closest('.mobile-menu')) {
      isOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Close menu when route changes
watch(() => useRoute().fullPath, () => {
  isOpen.value = false
})
</script>