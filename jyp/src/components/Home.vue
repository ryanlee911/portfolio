<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="title">정윤의 portfolio에 오신 것을<br>환영합니다.</h1>
        <p class="subtitle">기획과 프론트에 중점을 두고 경험을 쌓고 있습니다.<br>항상 성장하는 사람이 되고 싶습니다.</p>
      </div>
      <div class="stacked-cards">
        <div 
          v-for="(photo, index) in photos" 
          :key="index" 
          class="card" 
          :class="{ active: currentSlide === index }"
          :style="getCardStyle(index)">
          <img :src="photo.src" :alt="photo.alt" class="card-image">
        </div>
        <div class="card-navigation">
          <button class="nav-button prev" @click="prevSlide">&#10094;</button>
          <div class="card-dots">
            <span 
              v-for="(_, index) in photos" 
              :key="index" 
              class="dot" 
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)">
            </span>
          </div>
          <button class="nav-button next" @click="nextSlide">&#10095;</button>
        </div>
      </div>
    </section>
    
    <section class="skills">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-item">
          <h3>Frontend</h3>
          <p>Vue.js, React, HTML5, CSS3, JavaScript</p>
        </div>
        <div class="skill-item">
          <h3>Backend</h3>
          <p>Node.js, Python</p>
        </div>
        <div class="skill-item">
          <h3>Database</h3>
          <p>MySQL</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      photos: [
        { src: require('@/assets/photo1.jpg'), alt: '사진 1' },
        { src: require('@/assets/photo2.jpg'), alt: '사진 2' },
        { src: require('@/assets/photo3.jpg'), alt: '사진 3' },
        { src: require('@/assets/photo4.jpg'), alt: '사진 4' },
        { src: require('@/assets/photo5.jpg'), alt: '사진 5' },
        { src: require('@/assets/photo6.jpg'), alt: '사진 6' }
      ]
    }
  },
  mounted() {
    this.startSlideshow();
  },
  beforeUnmount() {
    this.stopSlideshow();
  },
  methods: {
    startSlideshow() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopSlideshow() {
      clearInterval(this.slideInterval);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.photos.length;
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.photos.length - 1 : this.currentSlide - 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    getZIndex(index) {
      if (index === this.currentSlide) {
        return this.photos.length;
      }
      
      const distance = (index - this.currentSlide + this.photos.length) % this.photos.length;
      return this.photos.length - distance;
    },
    getCardStyle(index) {
      const zIndex = this.getZIndex(index);
      
      // 현재 활성화된 슬라이드
      if (index === this.currentSlide) {
        return {
          zIndex,
          opacity: 1,
          transform: 'translateX(0) scale(1)'
        };
      }
      
      // 이전 슬라이드 (왼쪽에 표시)
      const prevIndex = (this.currentSlide - 1 + this.photos.length) % this.photos.length;
      if (index === prevIndex) {
        return {
          zIndex: 1,
          opacity: 0.7,
          transform: 'translateX(-60%) scale(0.8)'
        };
      }
      
      // 다음 슬라이드 (오른쪽에 표시)
      const nextIndex = (this.currentSlide + 1) % this.photos.length;
      if (index === nextIndex) {
        return {
          zIndex: 1,
          opacity: 0.7,
          transform: 'translateX(60%) scale(0.8)'
        };
      }
      
      // 나머지 슬라이드는 숨김
      return {
        zIndex,
        opacity: 0,
        transform: index < this.currentSlide ? 'translateX(-100%) scale(0.8)' : 'translateX(100%) scale(0.8)',
        pointerEvents: 'none'
      };
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0;
  gap: 2rem;
}

.hero-content {
  flex: 1;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

/* 스택 카드 스타일 */
.stacked-cards {
  flex: 1;
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card {
  position: absolute;
  width: 60%;
  height: 500px;
  transition: all 0.5s ease;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card.active {
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .card {
    width: 80%;
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-navigation {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.nav-button {
  background: rgba(255, 255, 255, 0.7);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: background 0.3s;
  margin: 0 10px;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.9);
}

.card-dots {
  display: flex;
  justify-content: center;
}

.dot {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #fff;
}

.skills {
  margin: 4rem 0;
}

.skills h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-item {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.skill-item h3 {
  margin-bottom: 1rem;
  color: #3498db;
}

.skill-item p {
  color: #666;
  line-height: 1.6;
}
</style> 