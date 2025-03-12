<template>
  <div class="contact">
    <h1>Contact me</h1>
    <div class="contact-container">
      <div class="contact-info">
        <h2>연락처 정보</h2>
        <p><strong>e-mail:</strong> ryan5587@naver.com</p>
        <p><strong>phone:</strong> 010-5324-0756</p>
        <div class="social-links">
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">Blog</a>
        </div>
      </div>
      <div class="contact-form">
        <h2>메시지 보내기</h2>
        <form>
          <div class="form-group">
            <label for="name">이름</label>
            <input type="text" id="name" placeholder="이름을 입력하세요">
          </div>
          <div class="form-group">
            <label for="email">이메일</label>
            <input type="email" id="email" placeholder="이메일을 입력하세요">
          </div>
          <div class="form-group">
            <label for="message">메시지</label>
            <textarea id="message" rows="5" placeholder="메시지를 입력하세요"></textarea>
          </div>
          <button type="submit" class="submit-btn">보내기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact {
  padding: 2rem;
}

.contact h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info, .contact-form {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h2, .contact-form h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.contact-info p {
  margin-bottom: 1rem;
  color: #666;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

.social-link:hover {
  color: #2980b9;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2980b9;
}
</style> 