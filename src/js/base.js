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


// 1. 全てのラッパー要素を取得
document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.galleryCard__videoWrap');

  wrappers.forEach(wrap => {
    const video = wrap.querySelector('video');
    const img   = wrap.querySelector('.galleryModal__img');

    // video または img が見つからなければスキップ
    if (!video || !img) return;

    wrap.addEventListener('mouseenter', () => {
      img.style.display = 'none';
      video.play();
    });

    wrap.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      img.style.display = ''; // 必要に応じて 'block' などを指定
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.galleryModal__videoWrap');

  wrappers.forEach(wrap => {
    const video = wrap.querySelector('video');
    const img   = wrap.querySelector('.galleryModal__img');

    // video または img が見つからなければスキップ
    if (!video || !img) return;

    wrap.addEventListener('mouseenter', () => {
      img.style.display = 'none';
      video.play();
    });

    wrap.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      img.style.display = ''; // 必要に応じて 'block' などを指定
    });
  });
});



  // ▼ Playボタンを押したら先頭から再生（SP向けも含む）

document.querySelectorAll('.galleryModal__play').forEach(button => {
  const container = button.parentElement; // .galleryModal__videoContent
  const video     = container.querySelector('.js-video');
  const img       = container.querySelector('.galleryModal__img');
  if (!video) return;

  button.addEventListener('click', () => {
    // 画像を非表示にする
    if (img) {
      img.style.display = 'none';
    }

    // 動画を先頭に戻して再生
    video.currentTime = 0;
    video.play();
  });
});

document.querySelectorAll('.galleryCard__play').forEach(button => {
  const container = button.parentElement; // .galleryModal__videoContent
  const video     = container.querySelector('.js-video');
  const img       = container.querySelector('.galleryModal__img');
  if (!video) return;

  button.addEventListener('click', () => {
    // 画像を非表示にする
    if (img) {
      img.style.display = 'none';
    }

    // 動画を先頭に戻して再生
    video.currentTime = 0;
    video.play();
  });
});

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function() {
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
// topGalleryModal を閉じる際にスクロール位置をリセットする
// topGalleryModal を閉じる際に 0.5 秒後に wrapper.scrollTop = 0 を実行する
document.querySelectorAll('.topGalleryModal__close, .topGalleryModal__bg').forEach(function(elm) {
  elm.addEventListener('click', function() {
    const modal   = document.querySelector('.topGalleryModal');
    const wrapper = modal.querySelector('.topGalleryModal__wrapper');
    const bg      = document.querySelector('.topGalleryModal__bg');

    // モーダルを閉じるクラス操作
    modal.classList.remove('active');   // 開く用クラスを外す
    modal.classList.add('closing');     // 閉じるアニメ用クラスを付ける
    bg.classList.remove('active');

    // 0.5秒後にスクロール位置をリセットし、closing クラスを外す
    setTimeout(function() {
      if (wrapper) {
        wrapper.scrollTop = 0;
      }
      modal.classList.remove('closing');
      // 必要ならここで display: none; をつけてもOK
    }, 500); // 0.5s → 閉じるアニメーションの所要時間に合わせる
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const modalSample = document.querySelector('.topGallerySample');
  const scroller    = modalSample;                 // scroll container

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




const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});