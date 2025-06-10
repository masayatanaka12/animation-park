<?php get_header(); ?>


<header class="headerSample">
  <div class="headerSample__wrapper">
    <a href="<?php echo esc_url(home_url()); ?>" class="headerSample__logo">
      Animation<br class="vsp"> park
    </a>
    <div class="headerSample__ttlWrap">
      <span class="headerSample__num">
        002
      </span>
      <h1 class="headerSample__ttl">
        ジャンプするハンバーガーメニュー
      </h1>
    </div>
  </div>
</header>


<div class="sample02">
  <div class="sample02__hamburger">
    <button 
      class="sample02__button" 
      type="button"
      aria-label="Toggle menu"
      aria-expanded="false"
    >
      <div class="sample02__box">
        <span class="line" aria-hidden="true"></span>
        <span class="line" aria-hidden="true"></span>
        <span class="line" aria-hidden="true"></span>
        <span class="text">MENU</span>
      </div>
    </button>
  </div>
</div>

<?php get_footer(); ?>