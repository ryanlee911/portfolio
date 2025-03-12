<template>
  <header class="header">
    <div class="logo">Portfolio</div>
    <nav class="nav">
      <router-link to="/" class="nav-item">소개</router-link>
      <router-link to="/projects" class="nav-item">프로젝트</router-link>
      <router-link to="/blog" class="nav-item">블로그</router-link>
      <router-link to="/contact" class="nav-item">연락하기</router-link>
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
  padding: 1rem 2rem;
  background-color: #1a1a1a;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-item:hover {
  color: #3498db;
}
</style> 