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
    // Get the parent modal wrapper
    const modalWrapper = this.closest('.topGalleryModal__wrapper');
    if (!modalWrapper) return;

    // Remove active class from all tabs in this modal
    modalWrapper.querySelectorAll('.topGalleryModal__item').forEach(t => t.classList.remove('active'));
    // Hide all code panels in this modal
    modalWrapper.querySelectorAll('.topGalleryModal__code').forEach(c => c.style.display = 'none');
    
    // Add active class to clicked tab
    this.classList.add('active');
    // Show the corresponding code panel
    const target = this.getAttribute('data-tab');
    modalWrapper.querySelector(`.topGalleryModal__code[data-tab="${target}"]`).style.display = 'block';
  });
});


document.querySelectorAll('.galleryCard__btn--code').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const modal = document.querySelector('.topGalleryModal');
    const bg = document.querySelector('.topGalleryModal__bg');
    const modalId = this.getAttribute('data-modal');
    
    // Hide all modal wrappers first
    document.querySelectorAll('.topGalleryModal__wrapper').forEach(wrapper => {
      wrapper.style.display = 'none';
    });
    
    // Show the selected modal wrapper
    const selectedWrapper = document.querySelector(`.topGalleryModal__wrapper[data-modal-content="${modalId}"]`);
    if (selectedWrapper) {
      selectedWrapper.style.display = 'block';
      
      // Initialize tabs for this modal
      const tabs = selectedWrapper.querySelectorAll('.topGalleryModal__item');
      const codePanels = selectedWrapper.querySelectorAll('.topGalleryModal__code');
      
      // Reset all tabs and panels
      tabs.forEach(tab => tab.classList.remove('active'));
      codePanels.forEach(panel => panel.style.display = 'none');
      
      // Activate first tab and show its content
      if (tabs.length > 0) {
        tabs[0].classList.add('active');
        const firstPanel = selectedWrapper.querySelector('.topGalleryModal__code[data-tab="0"]');
        if (firstPanel) {
          firstPanel.style.display = 'block';
        }
      }
    }
    
    modal.classList.remove('closing');
    modal.classList.add('active');
    bg.classList.add('active');
  });
});

// Close modal functionality
document.querySelectorAll('.topGalleryModal__close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    const modal = document.querySelector('.topGalleryModal');
    const bg = document.querySelector('.topGalleryModal__bg');
    
    // First remove active class to trigger closing animation
    modal.classList.remove('active');
    // Then add closing class for the animation
    modal.classList.add('closing');
    bg.classList.remove('active');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      modal.classList.remove('closing');
      document.querySelectorAll('.topGalleryModal__wrapper').forEach(wrapper => {
        wrapper.style.display = 'none';
      });
    }, 700);
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




