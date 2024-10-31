<template>
  <section class="py-24 bg-gray-50 dark:bg-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white font-heading mb-4">Nuestro Equipo</h2>
        <div class="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Team Member 1 -->
        <div class="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6 text-center">
            <div class="w-32 h-32 mx-auto mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                alt="Juan Pérez"
                class="w-full h-full object-cover rounded-full border-4 border-primary"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Juan Pérez</h3>
            <p class="text-primary font-medium mb-4">CEO & Fundador</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Con más de 15 años de experiencia en desarrollo de software y liderazgo de equipos tecnológicos.
            </p>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6 text-center">
            <div class="w-32 h-32 mx-auto mb-6">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
                alt="Ana García"
                class="w-full h-full object-cover rounded-full border-4 border-primary"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Ana García</h3>
            <p class="text-primary font-medium mb-4">CTO</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Especialista en arquitectura de software y desarrollo de soluciones escalables.
            </p>
          </div>
        </div>

        <!-- Team Member 3 -->
        <div class="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6 text-center">
            <div class="w-32 h-32 mx-auto mb-6">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2070&auto=format&fit=crop"
                alt="Carlos Rodríguez"
                class="w-full h-full object-cover rounded-full border-4 border-primary"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Carlos Rodríguez</h3>
            <p class="text-primary font-medium mb-4">Lead Developer</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Experto en desarrollo frontend y creación de experiencias de usuario excepcionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>