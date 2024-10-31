<template>
  <div class="min-h-screen bg-gray-50 dark:bg-dark pt-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article class="prose dark:prose-invert prose-lg mx-auto">
        <ContentDoc v-slot="{ doc }">
          <img
            :src="doc.image"
            :alt="doc.title"
            class="w-full h-64 object-cover rounded-xl mb-8"
          />
          <div class="flex items-center gap-4 mb-8">
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ new Date(doc.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) }}
            </span>
            <div class="flex gap-2">
              <span
                v-for="tag in doc.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </article>
    </div>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())

useHead({
  title: data.value?.title,
  meta: [
    { name: 'description', content: data.value?.description },
    { property: 'og:title', content: data.value?.title },
    { property: 'og:description', content: data.value?.description },
    { property: 'og:image', content: data.value?.image }
  ]
})
</script>