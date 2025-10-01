<template>
  <header class="header">
    <router-link to="/" class="logo">Portfolio</router-link>
    <nav class="nav">
      <router-link to="/aboutme" class="nav-item">About me</router-link>
      <router-link to="/projects" class="nav-item">Project</router-link>
      <router-link to="/contact" class="nav-item">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #1a1a1a;
  color: white;
}

.logo {
  font-size: 2.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 3rem;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-item:hover {
  color: #3498db;
}
</style> 