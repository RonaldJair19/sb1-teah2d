<template>
  <main>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop"
          alt="Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 dark:from-black/80 dark:to-black/60"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            Transformamos Ideas en
            <span class="text-primary">Soluciones Digitales</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Desarrollamos software innovador y soluciones web que impulsan el crecimiento de tu negocio
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />

    <!-- Values Section -->
    <ValuesSection />

    <!-- Team Section -->
    <TeamSection />
  </main>
</template>

<script setup>
useHead({
  title: 'Inicio',
  meta: [
    { name: 'description', content: 'Empresa líder en desarrollo de software y soluciones digitales innovadoras' }
  ]
})
</script>