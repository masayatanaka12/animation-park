// scroll class add
jQuery(window).on("load scroll resize", function () {


}); // scroll class add END

// jQuery start
jQuery(function ($) {

  // SP 100vh(スクロールバー対策)
  // $('.loadingLogo').css('height',$(window).height());


  // Smooth scroll
  // ページ内リンク
  var width = $(window).width();
  if (width <= 1023) {
    var headerHight = 60; //ヘッダの高さ
  } else {
    var headerHight = 100; //ヘッダの高さ
  }

  $('a[href^="#"]').click(function () {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });



});
// jQuery End


document.querySelectorAll('.galleryCard__video').forEach(video => {
  // ホバー開始で再生＆フィルタ解除
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  // ホバー終了で一時停止＆フィルタ戻す
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // 先頭に戻す場合
  });
});

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('aaa')
    // ① ボタンの親要素内の<code>を探す
    const code = btn.closest('.topGalleryModal__detail').querySelector('code');
    if (!code) return;

    // ② コピー
    navigator.clipboard.writeText(code.innerText).then(() => {
      btn.innerText = 'Copied!';
      setTimeout(() => btn.innerText = 'Copy', 1200);
    });
  });
});


document.querySelectorAll('.topGalleryModal__item').forEach(tab => {
  tab.addEventListener('click', function() {
    // すべてのタブからactiveを外す
    document.querySelectorAll('.topGalleryModal__item').forEach(t => t.classList.remove('active'));
    // すべてのコードパネルを非表示に
    document.querySelectorAll('.topGalleryModal__code').forEach(c => c.style.display = 'none');
    
    // クリックしたタブにactiveをつける
    tab.classList.add('active');
    // 同じdata-tabのコードを表示
    const target = tab.getAttribute('data-tab');
    document.querySelector('.topGalleryModal__code[data-tab="' + target + '"]').style.display = 'block';
  });
});


document.querySelectorAll('.galleryCard__btn--code').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelector('.topGalleryModal').classList.add('active');
    document.querySelector('.topGalleryModal__bg').classList.add('active');
  });
});




// モーダルを開く
// モーダルを開く
document.querySelectorAll('.galleryCard__btn--code').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const modal = document.querySelector('.topGalleryModal');
    const bg = document.querySelector('.topGalleryModal__bg');
    modal.classList.remove('closing'); // 念のため外す
    modal.classList.add('active');
    bg.classList.add('active');
  });
});

// モーダルを閉じる
document.querySelectorAll('.topGalleryModal__close, .topGalleryModal__bg').forEach(function(elm) {
  elm.addEventListener('click', function() {
    const modal = document.querySelector('.topGalleryModal');
    const bg = document.querySelector('.topGalleryModal__bg');
    modal.classList.remove('active');      // 開く用クラスを外す
    modal.classList.add('closing');        // 閉じるアニメ用クラスを付ける
    bg.classList.remove('active');
    // アニメーション後に.closingを外す
    setTimeout(function() {
      modal.classList.remove('closing');
      // 必要ならここで display: none; をつけてもOK
    }, 500); // 0.5s → 閉じるアニメの所要時間に合わせる
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const modalSample = document.querySelector('.topGallerySample');
  const scroller    = modalSample;                 // scroll container
  const fadeEls     = modalSample.querySelectorAll('.fadeup');

  // IntersectionObserver の設定
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: scroller,
    threshold: 0.1
  });

  // アニメーション状態をリセットして再監視する関数
  function resetAnimations() {
    fadeEls.forEach(el => {
      el.classList.remove('is-visible');
      observer.observe(el);
    });
  }

  // モーダルを開く／閉じるボタン
  document.querySelectorAll('.galleryCard__btn--sample').forEach(btn => {
    btn.addEventListener('click', () => {
      const isNowOpen = modalSample.classList.toggle('active');
      document.body.style.overflow = isNowOpen ? 'hidden' : '';
      if (isNowOpen) {
        // 開いた直後にリセット
        modalSample.scrollTop = 0;
        resetAnimations();
      }
    });
  });

  // モーダル内の「閉じる」ボタン
  document.querySelectorAll('.topGallerySample__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      modalSample.classList.remove('active');
      document.body.style.overflow = '';
      // 閉じたときもリセットしておくと安心
      modalSample.scrollTop = 0;
      resetAnimations();
    });
  });
});
