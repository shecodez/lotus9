<script setup></script>

<template>
  <div min-h-screen flex flex-col>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
