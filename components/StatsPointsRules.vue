<script setup>
const pointsRulesContainer = ref(null);

defineExpose({ pointsRulesContainer });
</script>

<template>
  <div class="points-rules-container" ref="pointsRulesContainer">
    <div class="points-rules-texts">
      <h3 class="stats-heading">Методика начисления баллов</h3>
      <p>
        Количество баллов, которые игрок получает по итогам турнира, зависит от
        трёх основных факторов:
      </p>
      <ul class="points-rules-list">
        <li>
          <div class="rule-title">Занятое место:</div>
          <div class="rule-text">
            Чем выше итоговое место в турнире, тем больше баллов начисляется
            игроку.
          </div>
        </li>
        <li>
          <div class="rule-title">Количество участников:</div>
          <div class="rule-text">
            Чем больше игроков (столов) участвует в турнире, тем выше ценность
            каждого места и, соответственно, больше баллов за его занятие.
          </div>
        </li>
        <li>
          <div class="rule-title">Формат турнира:</div>
          <div class="rule-text">
            В некоторых форматах (например, турниры с Нокаутами или Баунти)
            предусмотрены дополнительные бонусы. За каждого выбитого Вами игрока
            начисляется +10 баллов.
          </div>
        </li>
      </ul>
      <p>
        Таким образом, максимальное количество баллов можно получить, заняв
        высокое место в крупном турнире с большим числом участников. В турнирах
        соответствующих форматов на итоговую сумму также влияет количество
        сделанных Вами нокаутов.
      </p>
      <p>
        Первые два фактора Вы можете самостоятельно рассчитать по таблице,
        приведённой ниже (см. таблицу). Третий фактор (бонусные баллы за нокауты
        или Баунти) рассчитывается и добавляется к результату после окончания
        Вашего участия в турнире.
      </p>
    </div>
    <PointsRulesTable />
  </div>
</template>

<style scoped>
.points-rules-container {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 3rem;
}
.point-rules-img {
  width: 40rem;
}
.points-rules-texts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;

  border: 2px solid transparent;
  border-radius: 2rem;
  background: linear-gradient(var(--dark-blue-color), var(--dark-blue-color))
      padding-box,
    linear-gradient(
        to right,
        var(--light-gradient-color),
        var(--dark-gradient-color)
      )
      border-box;
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  padding: 1rem 1.5rem;
}

.points-rules-heading {
  font-size: 3rem;
}
.points-rules-list {
  list-style: inside decimal;

  li {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
  }
}
.rule-title {
  display: inline-flex;
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
}
.rule-text {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  margin-left: 1.2em;
}

@media (max-width: 1030px) {
  .point-rules-img {
    width: 30rem;
  }
}
@media (max-width: 800px) {
  .points-rules-container {
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 420px) {
  .point-rules-img {
    width: 100%;
  }
}
</style>
