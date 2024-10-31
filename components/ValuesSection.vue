<template>
  <section class="py-24 bg-white dark:bg-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white font-heading mb-4">Nuestros Valores</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Los principios que guían nuestras acciones y definen quiénes somos
        </p>
        <div class="w-24 h-1 bg-primary mx-auto mt-6"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Cada tarjeta tiene la clase animate-on-scroll y una dirección -->
        <div 
          v-for="(value, index) in values" 
          :key="value.title"
          class="group bg-gray-50 dark:bg-dark-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 opacity-0 animate-on-scroll"
          :class="[
            index % 2 === 0 ? 'slide-left' : 'slide-right',
            { 'slide-top': index >= values.length - (values.length % 3 || 3) }
          ]"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20">
            <component :is="value.icon" class="h-8 w-8 text-primary" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ value.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    title: 'Innovación',
    description: 'Buscamos constantemente nuevas formas de resolver desafíos y mejorar nuestras soluciones tecnológicas.',
    icon: defineComponent({
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>`
    })
  },
  {
    title: 'Excelencia',
    description: 'Nos esforzamos por alcanzar los más altos estándares en cada proyecto que emprendemos.',
    icon: defineComponent({
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>`
    })
  },
  {
    title: 'Colaboración',
    description: 'Trabajamos juntos para crear soluciones integrales que beneficien a nuestros clientes.',
    icon: defineComponent({
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`
    })
  },
  {
    title: 'Integridad',
    description: 'Actuamos con honestidad y transparencia en todas nuestras interacciones.',
    icon: defineComponent({
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`
    })
  },
  {
    title: 'Compromiso',
    description: 'Nos dedicamos a cumplir y superar las expectativas de nuestros clientes.',
    icon: defineComponent({
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    })
  },
  {
    title: 'Sostenibilidad',
    description: 'Desarrollamos soluciones pensando en el impacto a largo plazo y el futuro.',
    icon: defineComponent({
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    })
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.animate-on-scroll {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left {
  transform: translateX(-100px);
}

.slide-right {
  transform: translateX(100px);
}

.slide-top {
  transform: translateY(50px);
}

.animate-in {
  opacity: 1 !important;
  transform: translate(0) !important;
}
</style>