<template>
  <div class="projects">
    <h1>프로젝트</h1>
    <div class="projects-grid">
      <div class="project-card">
        <h2>미래에셋 AI Festival</h2>
        <p>
          HyperCLOVA X API를 활용한 실시간 주식 정보 분석 AI 에이전트입니다.
          한국 증권 시장의 고유 은어(‘바닥 찍었다’, ‘떡상 간다’)와 매매 패턴(골든크로스·데드크로스, RSI 과매수/과매도, 볼린저 밴드 접촉 등)을 집중적으로 학습한 파인튜닝 모델을 탑재하여 자연스러운 한국어 질의에 즉시 대응하며,
          일반적인 숫자·차트 조회를 넘어 ‘투자 심리’와 ‘커뮤니티 트렌드’까지 반영한 에이전트입니다.
        </p>
        <div class="tech-stack">
          <span class="tech">Python + FastAPI</span>
          <span class="tech">LangGraph + LangChain</span>
          <span class="tech">HyperCLOVA X</span>
        </div>
        <a
          href="https://github.com/ryanlee911/fin-agent"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          자세히 보기
        </a>
      </div>

      <div class="project-card">
        <h2>INSIGHT BOX</h2>
        <p>URL만 입력하면 자동으로 썸네일과 제목을 추출해 손쉽게 북마크를 생성합니다.
        인상 깊은 웹 콘텐츠(기사, 영상, SNS 피드 등)를 저장하고, AI 태그를 생성하여 다시 보게 만드는 서비스입니다.
        카테고리, 태그, 플랫폼 별로 원하는 자료를 빠르게 필터링하고 검색할 수 있습니다.
        효율적인 정보 관리로 필요한 순간에 원하는 북마크를 바로 찾아드립니다.</p>
        <div class="tech-stack">
          <span class="tech">React</span>
          <span class="tech">TypeScript</span>
          <span class="tech">Tailwind CSS</span>
        </div>
        <a
          href="https://github.com/ryanlee911/BOOKMARK"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          자세히 보기
        </a>
      </div>

      <div class="project-card">
        <h2>To be continued..</h2>
        <p></p>
        <div class="tech-stack">
          <span class="tech"></span>
          <span class="tech"></span>
          <span class="tech"></span>
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