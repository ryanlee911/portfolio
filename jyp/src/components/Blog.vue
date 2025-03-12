<template>
  <div class="blog">
    <h1>블로그</h1>
    <div class="blog-posts">
      <div class="blog-post">
        <div class="post-date">2023년 3월 15일</div>
        <h2>Vue.js 프로젝트 시작하기</h2>
        <p>Vue.js로 프로젝트를 시작하는 방법에 대해 알아보겠습니다. Vue CLI를 사용하면 쉽게 프로젝트를 설정할 수 있습니다.</p>
        <a href="#" class="read-more">더 읽기</a>
      </div>
      <div class="blog-post">
        <div class="post-date">2023년 2월 28일</div>
        <h2>반응형 웹 디자인의 기본 원칙</h2>
        <p>반응형 웹 디자인을 위한 기본 원칙과 CSS 미디어 쿼리 활용법에 대해 알아봅니다.</p>
        <a href="#" class="read-more">더 읽기</a>
      </div>
      <div class="blog-post">
        <div class="post-date">2023년 1월 10일</div>
        <h2>JavaScript ES6+ 주요 기능 정리</h2>
        <p>자바스크립트 ES6 이상의 주요 기능과 문법에 대해 정리해보았습니다.</p>
        <a href="#" class="read-more">더 읽기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage'
}
</script>

<style scoped>
.blog {
  padding: 2rem;
}

.blog h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.blog-posts {
  max-width: 800px;
  margin: 0 auto;
}

.blog-post {
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.post-date {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.blog-post h2 {
  margin-bottom: 1rem;
  color: #333;
}

.blog-post p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  color: #3498db;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}

.read-more:hover {
  color: #2980b9;
}
</style> 