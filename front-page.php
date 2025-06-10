<?php get_header(); ?>

<!-- <section class="topKv">
  <div class="topKv__ttlWrap">
    <h1 class="topKv__ttl">Animation park</h1>
    <p class="topKv__txt">
      アニメーションギャラリーサイト
    </p>
  </div>
</section> -->

<!-- <section class="topAbout">
  <div class="topAbout__wrapper">
    <h2 class="topAbout__ttl">
      About
    </h2>
    <div class="topAbout__txtWrap">
      <p class="topAbout__txt">
        個人的に"いいな"と感じたアニメーションを厳選して紹介しています。<br>
        自分のホームページをもう少しおしゃれに魅せたいオーナー様、<br class="vpc">動きのアイデアを探しているデザイナー様やディレクター様、<br class="vpc">実装のヒントが欲しいコーダー様、<br class="vpc">
        少しでも皆さまの制作の参考になれば幸いです。<br>
        主にCSS、GSAP、three.js、WebGLを使ったアニメーションを取り上げています。
      </p>
    </div>
  </div>
</section> -->

<header class="header">
  <div class="header__ttlWrap">
    <h1 class="header__ttl">Animation park</h1>
    <p class="header__txt">
      アニメーションギャラリーサイト
    </p>
  </div>
</header>

<section class="topGallery">
  <div class="topGallery__inner">
    <ul class="topGallery__cards">
      <li class="topGallery__card galleryCard">
        <div class="galleryCard__link">
          <div class="galleryCard__box">
            <span class="num">001</span>
            <p class="ttl">マスクアニメーション</p>
          </div>
          <div class="galleryCard__videoContent">
            <button class="galleryCard__play">play</button>
            <div class="galleryCard__videoWrap">
              <img class="galleryModal__img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/common/sample01.png" alt="">
              <video
                class="galleryCard__video js-video"
                src="<?php echo get_stylesheet_directory_uri(); ?>/assets/video/test.mp4"
                muted
                loop
                playsinline
                webkit-playsinline
                preload="auto">
                <!-- フォールバック用 -->
                このブラウザではビデオが再生できません。
              </video>
            </div>
          </div>
          <ul class="galleryCard__tagList">
            <li class="galleryCard__tag">
              スタイリッシュ
            </li>
            <li class="galleryCard__tag">
              ゆっくり
            </li>
            <li class="galleryCard__tag">
              おしゃれ
            </li>
          </ul>
          <ul class="galleryCard__catList">
            <li class="galleryCard__cat">画像</li>
            <li class="galleryCard__cat">mask image</li>
          </ul>
          <div class="galleryCard__btnWrap">
            <div class="galleryCard__btn galleryCard__btn--code" data-modal="sample01">
              <button>
                コードを見る
              </button>
            </div>
            <div class="galleryCard__btn galleryCard__btn--sample">
              <a href="<?php echo esc_url(home_url()); ?>/sample01/" target="_blank" rel="noopener">
                実際の動きを見る
              </a>
            </div>
          </div>
        </div>
      </li>
      <li class="topGallery__card galleryCard">
        <div class="galleryCard__link">
          <div class="galleryCard__box">
            <span class="num">002</span>
            <p class="ttl">ジャンプするハンバーガーメニュー</p>
          </div>
          <div class="galleryCard__videoWrap">
            <img class="galleryModal__img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/common/sample02.png" alt="">
            <video
              class="galleryCard__video js-video"
              src="<?php echo get_stylesheet_directory_uri(); ?>/assets/video/test02.mp4"
              muted
              loop
              playsinline
              webkit-playsinline
              preload="auto">
              <!-- フォールバック用 -->
              このブラウザではビデオが再生できません。
            </video>
          </div>
          <ul class="galleryCard__tagList">
            <li class="galleryCard__tag">
              かわいい
            </li>
            <li class="galleryCard__tag">
              ポップ
            </li>
          </ul>
          <ul class="galleryCard__catList">
            <li class="galleryCard__cat">ハンバーガーメニュー</li>
          </ul>
          <div class="galleryCard__btnWrap">
            <div class="galleryCard__btn galleryCard__btn--code" data-modal="sample02">
              <button>
                コードを見る
              </button>
            </div>
            <div class="galleryCard__btn galleryCard__btn--sample">
              <a href="<?php echo esc_url(home_url()); ?>/sample02/" target="_blank" rel="noopener">
                実際の動きを見る
              </a>
            </div>
          </div>
        </div>
      </li>
      <li class="topGallery__card galleryCard">
        <div class="galleryCard__link">
          <div class="galleryCard__box">
            <span class="num">003</span>
            <p class="ttl">Coming soon...</p>
          </div>
          <div class="galleryCard__videoWrap">
            <div class="galleryCard__videoTxt">
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="topGalleryModal__bg"></div>

  <div class="topGallery__modal topGalleryModal">
    <div class="topGalleryModal__close"></div>
    <div class="topGalleryModal__wrapper" data-modal-content="sample01">
      <div class="topGalleryModal__info">
        <div class="topGalleryModal__header">
          <span class="num">001</span>
          <p class="ttl">マスクアニメーション</p>
          <ul class="tags">
            <li class="tag">スタイリッシュ</li>
            <li class="tag">ゆっくり</li>
            <li class="tag">おしゃれ</li>
          </ul>
        </div>
        <div class="topGalleryModal__box">
          <div class="galleryModal__videoContent">
            <button class="galleryModal__play">
              play
            </button>
            <div class="galleryModal__videoWrap">
              <img class="galleryModal__img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/common/sample01.png" alt="">
              <video
                class="galleryModal__video js-video"
                poster="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/common/sample01.jpg"
                src="<?php echo get_stylesheet_directory_uri(); ?>/assets/video/test.mp4"
                muted
                loop
                playsinline
                webkit-playsinline
                preload="auto">
                このブラウザではビデオが再生できません。
              </video>
            </div>
          </div>
          <div class="topGalleryModal__sample galleryCard__btn--sample">
            <a href="<?php echo esc_url(home_url()); ?>/sample01/" target="_blank" rel="noopener">
              実際の動きを見る
            </a>
          </div>
        </div>
      </div>
      <ul class="topGalleryModal__list">
        <li class="topGalleryModal__item active" data-tab="0">
          HTML
        </li>
        <li class="topGalleryModal__item" data-tab="1">
          CSS
        </li>
        <li class="topGalleryModal__item" data-tab="2">
          Javascript
        </li>
      </ul>
      <div class="topGalleryModal__codeWrap">
        <div class="topGalleryModal__code" data-tab="0">
          <div class="topGalleryModal__detail">
            <button class="copy-btn vpc">Copy</button>
            <pre>
              <code class="language-html">
&lt;div class="sample01"&gt;
  &lt;div class="sample01__imgWrap"&gt;
    &lt;div class="sample01__img"&gt;
      &lt;img src="http://animation-park.com/wp-content/uploads/2025/05/dandelion.jpg" alt=""&gt;
    &lt;/div&gt;
    &lt;div class="sample01__img"&gt;
      &lt;img src="http://animation-park.com/wp-content/uploads/2025/05/flower.jpg" alt=""&gt;
    &lt;/div&gt;
    &lt;div class="sample01__img"&gt;
      &lt;img src="http://animation-park.com/wp-content/uploads/2025/05/palmtree.jpg" alt=""&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
        <div class="topGalleryModal__code" data-tab="1" style="display:none;">
          <div class="topGalleryModal__detail">
            <button class="copy-btn vpc">Copy</button>
            <pre>
              <code class="language-css">
.sample01__imgWrap{
  display: grid;
  gap: 80px;
}

.sample01__img {
  max-width: 600px;
  margin: auto;

  mask-image: linear-gradient(135deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0)   70%,
    rgba(0, 0, 0, 0)   100%);
  -webkit-mask-image: linear-gradient(135deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0)   70%,
    rgba(0, 0, 0, 0)   100%);
  mask-size: 200% 200%;
  -webkit-mask-size: 200% 200%;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: 140% 140%;
  -webkit-mask-position: 140% 140%;
}

.sample01__img.js-mask-animation {
  animation: img-mask-animation 1.3s linear forwards;
}

@keyframes img-mask-animation {
  0% {
    mask-position: 140% 140%;
    -webkit-mask-position: 140% 140%;
  }
  100% {
    mask-position: 0 0;
    -webkit-mask-position: 0 0;
  }
}
              </code>
            </pre>
          </div>
        </div>
        <div class="topGalleryModal__code" data-tab="2" style="display:none;">
          <div class="topGalleryModal__detail">
            <button class="copy-btn vpc">Copy</button>
            <pre><code class="language-javascript">
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('js-mask-animation');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll('.sample01__img').forEach(elm => {
    observer.observe(elm);
  });
});
            </code></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="topGalleryModal__wrapper" data-modal-content="sample02">
      <div class="topGalleryModal__info">
        <div class="topGalleryModal__header">
          <span class="num">002</span>
          <p class="ttl">ジャンプするハンバーガーメニュー</p>
          <ul class="tags">
            <li class="tag">かわいい</li>
            <li class="tag">ポップ</li>
          </ul>
        </div>
        <div class="topGalleryModal__box">
          <div class="galleryModal__videoContent">
            <button class="galleryModal__play">
              play
            </button>
            <div class="galleryModal__videoWrap">
              <img class="galleryModal__img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/common/sample02.png" alt="">
              <video
                class="galleryModal__video js-video"
                poster="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/common/sample02.jpg"
                src="<?php echo get_stylesheet_directory_uri(); ?>/assets/video/test02.mp4"
                muted
                loop
                playsinline
                webkit-playsinline
                preload="auto">
                このブラウザではビデオが再生できません。
              </video>
            </div>
          </div>
          <div class="topGalleryModal__sample galleryCard__btn--sample">
            <a href="<?php echo esc_url(home_url()); ?>/sample02/" target="_blank" rel="noopener">
              実際の動きを見る
            </a>
          </div>
        </div>
      </div>
      <ul class="topGalleryModal__list">
        <li class="topGalleryModal__item active" data-tab="0">
          HTML
        </li>
        <li class="topGalleryModal__item" data-tab="1">
          CSS
        </li>
        <li class="topGalleryModal__item" data-tab="2">
          Javascript
        </li>
      </ul>
      <div class="topGalleryModal__codeWrap">
        <div class="topGalleryModal__code" data-tab="0">
          <div class="topGalleryModal__detail">
            <button class="copy-btn vpc">Copy</button>
            <pre>
              <code class="language-html">
&lt;div class="sample02"&gt;
  &lt;div class="sample02__hamburger"&gt;
    &lt;button class="sample02__button"&gt;
      &lt;div class="sample02__box"&gt;
        &lt;span class="line"&gt;&lt;/span&gt;
        &lt;span class="line"&gt;&lt;/span&gt;
        &lt;span class="line"&gt;&lt;/span&gt;
        &lt;span class="text"&gt;MENU&lt;/span&gt;
      &lt;/div&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
        <div class="topGalleryModal__code" data-tab="1" style="display:none;">
          <div class="topGalleryModal__detail">
            <button class="copy-btn vpc">Copy</button>
            <pre>
              <code class="language-css">
.sample02 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sample02__box {
  position: relative;
  width: 80px;
  height: 60px;
  background: #ECEAE0;
}

.sample02__box .text {
  z-index: -1;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 0.2em;
  font-weight: 900;
  font-size: 17px;
  line-height: 1;
}

.sample02__box .line {
  position: absolute;
  height: 10px;
  background: #30493d;
  display: block;
  width: 100%;
  left: 0;
  border-radius: 4px;
}

.sample02__button .line:nth-of-type(1) {
  bottom: 0;
  transform: translateY(-50px);
  transition: transform 0.3s ease-out;
}

.sample02__button .line:nth-of-type(2) {
  bottom: 0;
  transform: translateY(-25px);
  transition: transform 0.3s ease-out;
}

.sample02__button .line:nth-of-type(3) {
  bottom: 0;
  transition: transform 0.3s ease-out;
}

.sample02__button.active .line:nth-of-type(1) {
  animation: popUp 0.2s ease-out forwards, 
            fallDown 0.3s ease-in 0.3s forwards;
}

.sample02__button.active .line:nth-of-type(2) {
  animation: popUp02 0.2s ease-out forwards, 
            fallDown02 0.3s ease-in 0.3s forwards;
}

.sample02__button.active .sample02__box .text {
  animation: popUp03 0.2s ease-out forwards, 
            fallDown03 0.3s ease-in 0.3s forwards;
}

.sample02__button:not(.active) .line:nth-of-type(1) {
  animation: reversePopUp 0.2s ease-out forwards, 
            reverseFallDown 0.2s ease-in 0.3s forwards;
}

.sample02__button:not(.active) .line:nth-of-type(2) {
  animation: reversePopUp02 0.2s ease-out forwards, 
            reverseFallDown02 0.2s ease-in 0.3s forwards;
}

.sample02__button:not(.active) .sample02__box .text {
  animation: reversePopUp03 0.2s ease-out forwards, 
            reverseFallDown03 0.2s ease-in 0.3s forwards;
}
              </code>
            </pre>
          </div>
        </div>
        <div class="topGalleryModal__code" data-tab="2" style="display:none;">
          <div class="topGalleryModal__detail">
            <button class="copy-btn vpc">Copy</button>
            <pre><code class="language-javascript">
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.sample02__button');
  
  if (button) {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      button.classList.toggle('active');
      
      const textElement = button.querySelector('.text');
      if (textElement) {
        textElement.textContent = isExpanded ? 'MENU' : 'CLOSE';
      }
    });
  }
});
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>