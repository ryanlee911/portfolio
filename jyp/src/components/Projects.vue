<template>
  <div class="projects">
    <h1>프로젝트</h1>
    <div class="projects-grid">
      <div class="project-card">
        <h2>프로젝트 1</h2>
        <p>프로젝트 설명이 들어갑니다. 이 프로젝트는 Vue.js를 사용하여 개발되었습니다.</p>
        <div class="tech-stack">
          <span class="tech">Vue.js</span>
          <span class="tech">JavaScript</span>
          <span class="tech">CSS3</span>
        </div>
        <a href="#" class="btn">자세히 보기</a>
      </div>
      <div class="project-card">
        <h2>프로젝트 2</h2>
        <p>프로젝트 설명이 들어갑니다. 이 프로젝트는 React를 사용하여 개발되었습니다.</p>
        <div class="tech-stack">
          <span class="tech">React</span>
          <span class="tech">TypeScript</span>
          <span class="tech">Styled Components</span>
        </div>
        <a href="#" class="btn">자세히 보기</a>
      </div>
      <div class="project-card">
        <h2>프로젝트 3</h2>
        <p>프로젝트 설명이 들어갑니다. 이 프로젝트는 Node.js를 사용하여 개발되었습니다.</p>
        <div class="tech-stack">
          <span class="tech">Node.js</span>
          <span class="tech">Express</span>
          <span class="tech">MongoDB</span>
        </div>
        <a href="#" class="btn">자세히 보기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage'
}
</script>

<style scoped>
.projects {
  padding: 2rem;
}

.projects h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h2 {
  margin-bottom: 1rem;
  color: #333;
}

.project-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech {
  background-color: #3498db;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2980b9;
}
</style> 