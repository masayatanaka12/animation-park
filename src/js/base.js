// scroll class add
jQuery(window).on("load scroll resize", function () {

  var st = jQuery(window).scrollTop();
  var wh = jQuery(window).height();
  var ww = jQuery(window).width();

  // fast(<1) slow(>1)
  jQuery(".fade, .fadeMask, .fadeUp, .fadeIn, fadeAnimation").each(function (i) {
    var tg = jQuery(this).offset().top - wh * 0.9;
    if (st > tg) {
      jQuery(this).addClass("active");
    }
  });

  jQuery(".fade-up-fast").each(function (i) {
    var tg = jQuery(this).offset().top - wh * 0.8;
    if (st > tg) {
      jQuery(this).addClass("active");
    }
  });

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