<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="logo-cell">
        <Logo width="30rem" paddingTop="0" />
        <div>
          <p class="phone">+7 800 000-00-00</p>
          <p class="email">addax18490@mixzu.net</p>
        </div>
      </div>
      <ul class="links-cell">
        <li>Вопрос-ответ</li>
        <li>О нас</li>
        <li>Видео</li>
        <li>Отзывы</li>
        <li>Контакты</li>
      </ul>
      <ul class="links-cell">
        <li>Вопрос-ответ</li>
        <li>О нас</li>
        <li>Видео</li>
        <li>Отзывы</li>
        <li>Контакты</li>
      </ul>
      <ul class="links-cell">
        <li>Вопрос-ответ</li>
        <li>О нас</li>
        <li>Видео</li>
        <li>Отзывы</li>
        <li>Контакты</li>
      </ul>
    </div>
    <div class="lower-footer">
      <div>SOCIALS</div>
      <p>Политика обработки персональных данных</p>
      <p>Пользовательское соглашение</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  background-color: rgba(3, 3, 3, 0.3);
  margin: 0 5rem;
  margin-bottom: 5rem;
  padding: 3rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 0.5fr 0.25fr 0.25fr 0.25fr;
  grid-template-rows: minmax(22rem, 0.6fr);
  padding-bottom: 5rem;
  /* height: 50vh; */
}

.logo-cell {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.phone {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.email {
  font-size: 2rem;
  font-weight: 400;
}

.links-cell {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.5rem;
  list-style: none;
  font-size: 2rem;
  font-weight: 400;

  li {
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
}

.lower-footer {
  display: flex;
  justify-content: space-evenly;
}
</style>
