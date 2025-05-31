<?php get_header(); ?>

<section class="topKv">
  <div class="topKv__ttlWrap">
    <h1 class="topKv__ttl">Animation<br>park</h1>
    <p class="topKv__txt">
      アニメーションギャラリーサイト
    </p>
  </div>
  <div class="topKv__txtWrap">
    <p class="topKv__message">
      ホームページを、<br>
      ちょっとおしゃれに。
    </p>
  </div>
</section>

<section class="topAbout">
  <div class="topAbout__wrapper">
    <h2 class="topAbout__ttl">
      About
    </h2>
    <div class="topAbout__txtWrap">
      <p class="topAbout__txt">
        個人的に"いいな"と感じたアニメーションを厳選して紹介しています。<br>
        自分のホームページをもう少しおしゃれに魅せたいオーナー様、<br>
        動きのアイデアを探しているデザイナー様やディレクター様、<br>
        実装のヒントが欲しいコーダー様、<br>
        少しでも皆さまの制作の参考になれば幸いです。<br>
        主にCSS、GSAP、three.js、WebGLを使ったアニメーションを取り上げています。
      </p>
    </div>
  </div>
</section>

<section class="topGallery">
  <div class="topGallery__inner">
    <ul class="topGallery__cards">
      <li class="topGallery__card galleryCard">
        <div class="galleryCard__link">
          <div class="galleryCard__box">
            <span class="num">001</span>
            <p class="ttl">アニメーション</p>
          </div>
          <div class="galleryCard__videoContent">
            <button class="galleryCard__play">play</button>
            <div class="galleryCard__videoWrap">
              <video
                class="galleryCard__video js-video"
                src="<?php echo get_stylesheet_directory_uri(); ?>/assets/video/test.mp4"
                muted
                loop
                preload="metadata">
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
            <li class="galleryCard__tag">
              かっこいい
            </li>
          </ul>
          <ul class="galleryCard__catList">
            <li class="galleryCard__cat">画像</li>
            <li class="galleryCard__cat">テスト</li>
            <li class="galleryCard__cat">テスト</li>
          </ul>
          <div class="galleryCard__btnWrap">
            <div class="galleryCard__btn galleryCard__btn--code">
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
            <p class="ttl">Coming soon...</p>
          </div>
          <div class="galleryCard__videoWrap">
            <div class="galleryCard__videoTxt">
              Coming soon
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
    <div class="topGalleryModal__wrapper">
      <div class="topGalleryModal__info">
        <div class="topGalleryModal__header">
          <span class="num">001</span>
          <p class="ttl">アニメーション</p>
          <ul class="tags">
            <li class="tag">スタイリッシュ</li>
            <li class="tag">おしゃれ</li>
            <li class="tag">かっこいい</li>
          </ul>
        </div>
        <div class="topGalleryModal__box">
          <div class="galleryModal__videoContent">
            <button class="galleryModal__play">
              play
            </button>
            <div class="galleryModal__videoWrap">
              <video
                class="galleryModal__video js-video"
                src="<?php echo get_stylesheet_directory_uri(); ?>/assets/video/test.mp4"
                muted
                loop
                preload="metadata">
                <!-- フォールバック用 -->
                このブラウザではビデオが再生できません。
              </video>
            </div>
          </div>
          <div class="topGalleryModal__sample galleryCard__btn--sample">
            <a href="<?php echo esc_url(home_url()); ?>/sample01/">
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
        <button class="copy-btn">Copy</button>
        <div class="topGalleryModal__code" data-tab="0">
          <div class="topGalleryModal__detail">
            <pre>
              <code class="language-html">
&lt;li class=&quot;topGallery__card galleryCard&quot;&gt;
  &lt;div href=&quot;#&quot; class=&quot;galleryCard__link&quot;&gt;
    &lt;div class=&quot;galleryCard__box&quot;&gt;
      &lt;span class=&quot;num&quot;&gt;001&lt;/span&gt;
      &lt;p class=&quot;ttl&quot;&gt;アニメーション&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;galleryCard__videoWrap&quot;&gt;
      &lt;video
        class=&quot;galleryCard__video&quot;
        src=&quot;&lt;?php echo get_stylesheet_directory_uri(); ?&gt;/assets/video/test.mp4&quot;
        muted
        loop
        preload=&quot;metadata&quot;&gt;
        &lt;!-- フォールバック用 --&gt;
        このブラウザではビデオが再生できません。
      &lt;/video&gt;
    &lt;/div&gt;
    &lt;ul class=&quot;galleryCard__catList&quot;&gt;
      &lt;li class=&quot;galleryCard__cat&quot;&gt;画像&lt;/li&gt;
      &lt;li class=&quot;galleryCard__cat&quot;&gt;テスト&lt;/li&gt;
      &lt;li class=&quot;galleryCard__cat&quot;&gt;テスト&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;galleryCard__btnWrap&quot;&gt;
      &lt;button class=&quot;galleryCard__btn&quot;&gt;
        More
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;
              </code>
            </pre>
          </div>
        </div>
        <div class="topGalleryModal__code" data-tab="1" style="display:none;">
          <div class="topGalleryModal__detail">
            <button class="copy-btn">Copy</button>
            <pre>
              <code class="language-css">
.topGalleryModal__list{
  display: flex;
  border-left: 2px solid $c-white;
  border-bottom: 1px solid $c-white;
}

.topGalleryModal__item{
  padding: 1rem 1.6rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1;
  font-size: 1.4rem;
  border-right: 1px solid $c-white;
  border-top: 1px solid $c-white;
  font-family: $poppins;
  background: $c-black;
  color: $c-white;
  cursor: pointer;
}
              </code>
            </pre>
          </div>
        </div>
        <!-- JavaScript ブロック -->
        <div class="topGalleryModal__code" data-tab="2" style="display:none;">
          <div class="topGalleryModal__detail">
            <button class="copy-btn">Copy</button>
            <pre><code class="language-javascript">
// コピー機能サンプル
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const code = btn.closest('.topGalleryModal__detail').querySelector('code');
    if (!code) return;
    navigator.clipboard.writeText(code.innerText).then(() => {
      btn.innerText = 'Copied!';
      setTimeout(() => btn.innerText = 'Copy', 1200);
    });
  });
});
    </code></pre>
          </div>
        </div>
      </div>
      <div class="topGalleryModal__close"></div>
    </div>
  </div>
</section>

<?php get_footer(); ?>