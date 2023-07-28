<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section w-full flex flex-col md:flex-row bg-gray>
    <div w-full text-center md:text-right>
      <h1 text-2xl text-primary>{{ blok.title }}</h1>
      <p>{{ blok.description }}</p>
      <NuxtLink class="btn btn-primary">{{ blok.cta_primary_label }}</NuxtLink>
    </div>
  </section>
</template>
