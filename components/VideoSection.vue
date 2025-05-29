<script setup></script>

<template>
  <section class="video-section" id="videos">
    <h2>Видео</h2>
    <p class="video-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
      tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed
      ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et
      tincidunt odio leo in leo. Praesent enim orci, iaculis at sem eget,
      gravida porttitor urna. Mauris a interdum diam.
    </p>
    <div class="video-grid">
      <div class="video-top">
        <img
          class="preview-img"
          src="/assets/images/video-preview.png"
          alt=""
        />
        <img class="play-btn" src="/assets/icons/btn-next.svg" alt="" />
      </div>
      <div class="desc-top">
        <h3>Название</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, atque ad
          quae similique quod vitae voluptatum, recusandae laboriosam quam alias
          perspiciatis ipsa necessitatibus cum saepe voluptatibus id iure totam
          veritatis.
        </p>
      </div>
      <div class="desc-bottom">
        <h3>Название</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          aperiam error quo! Eos non blanditiis libero, quam maiores mollitia
          deserunt est, obcaecati vitae minima voluptatum harum necessitatibus
          accusantium. Adipisci, distinctio.
        </p>
      </div>
      <div class="video-bottom">
        <img
          class="preview-img"
          src="/assets/images/video-preview.png"
          alt=""
        />
        <img class="play-btn" src="/assets/icons/btn-next.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  padding: 0 var(--horiz-main-padding);
  margin-bottom: 5rem;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-template-rows: auto;
  row-gap: 1.5rem;
}
.video-text {
  margin-bottom: 3rem;
  width: 60%;
}

.preview-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.video-top {
  grid-column: 1 / 3;
  grid-row: 1;
  margin-right: -25px;
}
.desc-top {
  grid-column: 3 / -1;
  grid-row: 1;
}

.video-bottom {
  grid-column: 2 / -1;
  grid-row: 2;
  margin-left: -25px;
}
.desc-bottom {
  grid-column: 1 / 2;
  grid-row: 2;
}

.video-bottom,
.video-top {
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 2rem;
  background: linear-gradient(#011331, #011331) padding-box,
    linear-gradient(
        to right,
        var(--dark-gradient-color),
        var(--light-gradient-color)
      )
      border-box;
}

.desc-top,
.desc-bottom {
  font-size: 2rem;
  padding: 4rem;
}

.desc-top {
  border: 2px solid transparent;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border-left-width: 0;
  background: linear-gradient(#092557, #092557) padding-box,
    linear-gradient(
        to right,
        var(--light-gradient-color),
        var(--dark-gradient-color)
      )
      border-box;
}
.desc-bottom {
  border: 2px solid transparent;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-right-width: 0;
  background: linear-gradient(#092557, #092557) padding-box,
    linear-gradient(
        to right,
        var(--dark-gradient-color),
        var(--light-gradient-color)
      )
      border-box;
}

.play-btn {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
}

/* (768px–1023px) */
@media (max-width: 1023px) {
  .video-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .video-text {
    width: 100%;
  }

  .desc-top {
    order: 2;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2rem;
    border-left-width: 2px;
    border-top-width: 0;
  }
  .desc-bottom {
    order: 4;
    border-top-left-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-width: 0;
    border-right-width: 2px;
  }

  .video-top {
    order: 1;
    margin-right: 0;
    margin-bottom: -25px;
  }
  .video-bottom {
    display: flex;
    justify-content: center;
    order: 3;
    margin-left: 0;
    margin-bottom: -25px;
    width: 100%;
  }
}
/* (–767px) */
@media (max-width: 767px) {
  .play-btn {
    width: 7rem;
  }
  .video-top {
    margin-bottom: -35px;
  }
  .video-bottom {
    margin-bottom: -35px;
  }
  .desc-top,
  .desc-bottom {
    padding: 0 3rem 3rem 3rem;
    padding-top: calc(3rem + 15px);
  }
}
/* (-590px) */
@media (max-width: 590px) {
  .play-btn {
    width: 6rem;
  }
  .desc-top,
  .desc-bottom {
    padding: 0 2rem 2rem 2rem;
    padding-top: calc(2rem + 15px);
  }
}
@media (max-width: 426px) {
  .play-btn {
    width: 5rem;
  }
}
</style>
