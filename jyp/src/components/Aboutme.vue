<template>
  <div class="about">
    <section class="intro">
      <h1>안녕하세요, 이정윤입니다</h1>
      <p>
        프론트엔드 개발자를 꿈꾸는 컴퓨터공학과 학생입니다.<br />
        사람, 기술, 기획을 잇는 감각적인 인터페이스를 만들고자 합니다.
      </p>
    </section>

    <section class="section">
      <h2>📌 간단 이력</h2>
      <div class="timeline">
        <div v-for="(item, index) in history" :key="index" class="timeline-item">
          <div class="circle" />
          <div class="content">
            <span class="year">{{ item.year }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.details }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>🛠 기술 스택</h2>
      <div class="skill-list">
        <span class="skill" v-for="(skill, index) in skills" :key="index">{{ skill }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About-me',
  data() {
    return {
      history: [
        { year: '2025', title: '~ing', details: '기획과 개발에 흥미를 느끼며 프론트엔드와 AI 프로젝트를 병행 중' },
        { year: '2025', title: '미래에셋 금융 AI 페스티벌 참가', details: 'HyperCLOVA를 활용한 주식 정보 에이전트 개발' },
        { year: '2023', title: '육군 병장 만기 전역', details: '가천대 총학생회 40대 선거운동본부 정책팀장' },
        { year: '2021', title: '가천대학교 컴퓨터공학과 입학', details: '컴퓨터공학과 37대 학생회 총무팀원' },
      ],
      skills: ['Vue.js', 'React', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'GitHub'],
    };
  },
};
</script>

<style scoped>
/* 💎 전체를 flex로 가운데 정렬 */
.about-wrapper {
  min-height: 100vh;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Pretendard', 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #2c3e50;
}

/* 👑 인트로 */
.intro {
  text-align: center;
  max-width: 720px;
  margin-bottom: 60px;
}

.intro h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.highlight {
  color: #42b883;
}

.intro p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

/* 📚 섹션 공통 */
.section {
  width: 100%;
  max-width: 720px;
  margin-top: 60px;
}

.section h2 {
  font-size: 1.6rem;
  font-weight: 600;
  border-left: 6px solid #42b883;
  padding-left: 12px;
  margin-bottom: 24px;
  color: #222;
}

/* 🕓 타임라인 */
.timeline {
  position: relative;
  padding-left: 24px;
  border-left: 2px solid #ccc;
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item .circle {
  width: 12px;
  height: 12px;
  background: #42b883;
  border-radius: 50%;
  position: absolute;
  left: -6px;
  top: 6px;
}

.timeline-item .content {
  margin-left: 10px;
}

.timeline-item .year {
  font-size: 0.85rem;
  color: #999;
}

.timeline-item h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 4px 0;
}

.timeline-item p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* 🧷 기술 스택 */
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill {
  background: #f3f3f3;
  color: #2c3e50;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.skill:hover {
  background: #e1e1e1;
}
</style>
