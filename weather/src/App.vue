<script setup>

</script>

<template>
  <header id="header">
    <nav>
      <RouterLink to="/">Weather</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
#header {
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #18181800;
  padding: 1rem 20rem;
  display: flex;
  align-items: center;
  gap: 150px;
  transition: .3s;
  z-index: 50;
  backdrop-filter: blur(40px);
}
main {
  height: 100vh;
  padding: 12vh 0;
  overflow: hidden;
  overflow-y: auto;
  background-image: url(assets/weahtder.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
