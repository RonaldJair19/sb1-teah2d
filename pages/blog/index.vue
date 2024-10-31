<template>
  <div class="min-h-screen bg-gray-50 dark:bg-dark">
    <!-- Hero Section con Ilustración -->
    <div class="relative w-full h-[50vh]">
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
        alt="Blog Header"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 dark:from-black/80 dark:to-black/60"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white font-heading mb-4">Blog</h1>
        <div class="w-24 h-1 bg-primary"></div>
      </div>
    </div>

    <!-- Lista de Posts -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContentList path="/blog" v-slot="{ list }">
          <article
            v-for="post in list"
            :key="post._path"
            class="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <NuxtLink :to="post._path">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ new Date(post.date).toLocaleDateString('es-ES', { 
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) }}
                  </span>
                </div>
                <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {{ post.title }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {{ post.description }}
                </p>
                <div class="mt-4 flex items-center gap-2 flex-wrap">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Explora nuestros artículos sobre desarrollo, tecnología y más' }
  ]
})
</script>