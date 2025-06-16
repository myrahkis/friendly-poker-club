<script setup></script>

<template>
  <div class="tournaments-descriptions">
    <h2>Описание турниров</h2>
    <div class="description-block">
      <div class="desc-pic">
        <img src="/assets/images/bg-hearts.png" alt="" />
      </div>
      <div class="description-block-info">
        <h4>Название турнира</h4>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
    </div>
    <div class="description-block">
      <div class="description-block-info">
        <h4>Название турнира</h4>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
      <div class="desc-pic">
        <img src="/assets/images/bg-spades.png" alt="" />
      </div>
    </div>
    <div class="description-block">
      <div class="desc-pic">
        <img src="/assets/images/bg-hearts.png" alt="" />
      </div>
      <div class="description-block-info">
        <h4>Название турнира</h4>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
    </div>
    <div class="description-block">
      <div class="description-block-info">
        <h4>Название турнира</h4>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
      <div class="desc-pic">
        <img src="/assets/images/bg-spades.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tournaments-descriptions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 5rem;
}

.description-block {
  display: flex;
  gap: 2rem;
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  background-color: rgba(37, 37, 37, 0.2);
  padding: 2rem;
}
.description-block-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 0 1 60%;
  min-width: 20rem;

  h4 {
    margin-bottom: 1rem;
  }
}
.desc-pic {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 40%;
  min-width: 10rem;
  border-radius: 2rem;

  img {
    max-width: 100%;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .description-block {
    flex-direction: column;
  }
  .description-block-info {
    min-width: 100%;
  }
  .desc-pic {
    min-width: 100%;
  }
}
</style>
