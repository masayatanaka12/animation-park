"use strict";

// scroll class add
jQuery(window).on("load scroll resize", function () {}); // scroll class add END

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

document.addEventListener('DOMContentLoaded', function () {
  // ▼ ホバーで再生／停止（PC向け）
  document.querySelectorAll('.js-video').forEach(function (video) {
    video.addEventListener('mouseenter', function () {
      video.play();
    });
    video.addEventListener('mouseleave', function () {
      video.pause();
      video.currentTime = 0;
    });
  });

  // ▼ Playボタンを押したら先頭から再生（SP向けも含む）
  document.querySelectorAll('.galleryCard__play').forEach(function (button) {
    var container = button.parentElement; // .galleryModal__videoContent
    var video = container.querySelector('.js-video');
    var img = container.querySelector('.galleryModal__img');
    if (!video) return;
    button.addEventListener('click', function () {
      // 画像を非表示にする
      if (img) {
        img.style.display = 'none';
      }

      // 動画を先頭に戻して再生
      video.currentTime = 0;
      video.play();
    });
  });
  document.querySelectorAll('.galleryModal__play').forEach(function (button) {
    var container = button.parentElement; // .galleryModal__videoContent
    var video = container.querySelector('.js-video');
    var img = container.querySelector('.galleryModal__img');
    if (!video) return;
    button.addEventListener('click', function () {
      // 画像を非表示にする
      if (img) {
        img.style.display = 'none';
      }

      // 動画を先頭に戻して再生
      video.currentTime = 0;
      video.play();
    });
  });
});
document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // ① ボタンの親要素内の<code>を探す
    var code = btn.closest('.topGalleryModal__detail').querySelector('code');
    if (!code) return;

    // ② コピー
    navigator.clipboard.writeText(code.innerText).then(function () {
      btn.innerText = 'Copied!';
      setTimeout(function () {
        return btn.innerText = 'Copy';
      }, 1200);
    });
  });
});
document.querySelectorAll('.topGalleryModal__item').forEach(function (tab) {
  tab.addEventListener('click', function () {
    // すべてのタブからactiveを外す
    document.querySelectorAll('.topGalleryModal__item').forEach(function (t) {
      return t.classList.remove('active');
    });
    // すべてのコードパネルを非表示に
    document.querySelectorAll('.topGalleryModal__code').forEach(function (c) {
      return c.style.display = 'none';
    });

    // クリックしたタブにactiveをつける
    tab.classList.add('active');
    // 同じdata-tabのコードを表示
    var target = tab.getAttribute('data-tab');
    document.querySelector('.topGalleryModal__code[data-tab="' + target + '"]').style.display = 'block';
  });
});
document.querySelectorAll('.galleryCard__btn--code').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector('.topGalleryModal').classList.add('active');
    document.querySelector('.topGalleryModal__bg').classList.add('active');
  });
});

// モーダルを開く
// モーダルを開く
document.querySelectorAll('.galleryCard__btn--code').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var modal = document.querySelector('.topGalleryModal');
    var bg = document.querySelector('.topGalleryModal__bg');
    modal.classList.remove('closing'); // 念のため外す
    modal.classList.add('active');
    bg.classList.add('active');
  });
});

// モーダルを閉じる
// topGalleryModal を閉じる際にスクロール位置をリセットする
// topGalleryModal を閉じる際に 0.5 秒後に wrapper.scrollTop = 0 を実行する
document.querySelectorAll('.topGalleryModal__close, .topGalleryModal__bg').forEach(function (elm) {
  elm.addEventListener('click', function () {
    var modal = document.querySelector('.topGalleryModal');
    var wrapper = modal.querySelector('.topGalleryModal__wrapper');
    var bg = document.querySelector('.topGalleryModal__bg');

    // モーダルを閉じるクラス操作
    modal.classList.remove('active'); // 開く用クラスを外す
    modal.classList.add('closing'); // 閉じるアニメ用クラスを付ける
    bg.classList.remove('active');

    // 0.5秒後にスクロール位置をリセットし、closing クラスを外す
    setTimeout(function () {
      if (wrapper) {
        wrapper.scrollTop = 0;
      }
      modal.classList.remove('closing');
      // 必要ならここで display: none; をつけてもOK
    }, 500); // 0.5s → 閉じるアニメーションの所要時間に合わせる
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var modalSample = document.querySelector('.topGallerySample');
  var scroller = modalSample; // scroll container

  // IntersectionObserver の設定
  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
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
    fadeEls.forEach(function (el) {
      el.classList.remove('is-visible');
      observer.observe(el);
    });
  }

  // モーダルを開く／閉じるボタン
  document.querySelectorAll('.galleryCard__btn--sample').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isNowOpen = modalSample.classList.toggle('active');
      document.body.style.overflow = isNowOpen ? 'hidden' : '';
      if (isNowOpen) {
        // 開いた直後にリセット
        modalSample.scrollTop = 0;
        resetAnimations();
      }
    });
  });

  // モーダル内の「閉じる」ボタン
  document.querySelectorAll('.topGallerySample__close').forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modalSample.classList.remove('active');
      document.body.style.overflow = '';
      // 閉じたときもリセットしておくと安心
      modalSample.scrollTop = 0;
      resetAnimations();
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };
  var callback = function callback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('js-mask-animation');
        observer.unobserve(entry.target);
      }
    });
  };
  var observer = new IntersectionObserver(callback, options);
  document.querySelectorAll('.sample01__img').forEach(function (elm) {
    observer.observe(elm);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsialF1ZXJ5Iiwid2luZG93Iiwib24iLCIkIiwid2lkdGgiLCJoZWFkZXJIaWdodCIsImNsaWNrIiwic3BlZWQiLCJocmVmIiwiYXR0ciIsInRhcmdldCIsInBvc2l0aW9uIiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmlkZW8iLCJwbGF5IiwicGF1c2UiLCJjdXJyZW50VGltZSIsImJ1dHRvbiIsImNvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1nIiwic3R5bGUiLCJkaXNwbGF5IiwiYnRuIiwiY29kZSIsImNsb3Nlc3QiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJpbm5lclRleHQiLCJ0aGVuIiwic2V0VGltZW91dCIsInRhYiIsInQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjIiwiYWRkIiwiZ2V0QXR0cmlidXRlIiwibW9kYWwiLCJiZyIsImVsbSIsIndyYXBwZXIiLCJtb2RhbFNhbXBsZSIsInNjcm9sbGVyIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwicm9vdCIsInRocmVzaG9sZCIsInJlc2V0QW5pbWF0aW9ucyIsImZhZGVFbHMiLCJlbCIsIm9ic2VydmUiLCJpc05vd09wZW4iLCJ0b2dnbGUiLCJib2R5Iiwib3ZlcmZsb3ciLCJjbG9zZUJ0biIsIm9wdGlvbnMiLCJyb290TWFyZ2luIiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQUEsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FHcEQsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFSjtBQUNBRixNQUFNLENBQUMsVUFBVUcsQ0FBQyxFQUFFO0VBRWxCO0VBQ0E7O0VBR0E7RUFDQTtFQUNBLElBQUlDLEtBQUssR0FBR0QsQ0FBQyxDQUFDRixNQUFNLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7RUFDN0IsSUFBSUEsS0FBSyxJQUFJLElBQUksRUFBRTtJQUNqQixJQUFJQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDeEIsQ0FBQyxNQUFNO0lBQ0wsSUFBSUEsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3pCO0VBRUFGLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0csS0FBSyxDQUFDLFlBQVk7SUFDbEMsSUFBSUMsS0FBSyxHQUFHLEdBQUc7SUFDZixJQUFJQyxJQUFJLEdBQUdMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJQyxNQUFNLEdBQUdQLENBQUMsQ0FBQ0ssSUFBSSxJQUFJLEdBQUcsSUFBSUEsSUFBSSxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUdBLElBQUksQ0FBQztJQUN6RCxJQUFJRyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxHQUFHUixXQUFXO0lBQ2hERixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNXLE9BQU8sQ0FBQztNQUN0QkMsU0FBUyxFQUFFSjtJQUNiLENBQUMsRUFBRUosS0FBSyxFQUFFLE9BQU8sQ0FBQztJQUNsQixPQUFPLEtBQUs7RUFDZCxDQUFDLENBQUM7QUFJSixDQUFDLENBQUM7QUFDRjs7QUFHQVMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xEO0VBQ0FELFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxLQUFLLEVBQUk7SUFDdERBLEtBQUssQ0FBQ0gsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07TUFDekNHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUM7SUFDRkQsS0FBSyxDQUFDSCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtNQUN6Q0csS0FBSyxDQUFDRSxLQUFLLENBQUMsQ0FBQztNQUNiRixLQUFLLENBQUNHLFdBQVcsR0FBRyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNGUCxRQUFRLENBQUNFLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBSyxNQUFNLEVBQUk7SUFDaEUsSUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLElBQU1OLEtBQUssR0FBT0ssU0FBUyxDQUFDRSxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ3RELElBQU1DLEdBQUcsR0FBU0gsU0FBUyxDQUFDRSxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDL0QsSUFBSSxDQUFDUCxLQUFLLEVBQUU7SUFFWkksTUFBTSxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNyQztNQUNBLElBQUlXLEdBQUcsRUFBRTtRQUNQQSxHQUFHLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDNUI7O01BRUE7TUFDQVYsS0FBSyxDQUFDRyxXQUFXLEdBQUcsQ0FBQztNQUNyQkgsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUNGTCxRQUFRLENBQUNFLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBSyxNQUFNLEVBQUk7SUFDakUsSUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLElBQU1OLEtBQUssR0FBT0ssU0FBUyxDQUFDRSxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ3RELElBQU1DLEdBQUcsR0FBU0gsU0FBUyxDQUFDRSxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDL0QsSUFBSSxDQUFDUCxLQUFLLEVBQUU7SUFFWkksTUFBTSxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNyQztNQUNBLElBQUlXLEdBQUcsRUFBRTtRQUNQQSxHQUFHLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDNUI7O01BRUE7TUFDQVYsS0FBSyxDQUFDRyxXQUFXLEdBQUcsQ0FBQztNQUNyQkgsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUVGLENBQUMsQ0FBQztBQUVGTCxRQUFRLENBQUNFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQVksR0FBRyxFQUFJO0VBQ3BEQSxHQUFHLENBQUNkLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3ZDO0lBQ0EsSUFBTWUsSUFBSSxHQUFHRCxHQUFHLENBQUNFLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDTixhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzFFLElBQUksQ0FBQ0ssSUFBSSxFQUFFOztJQUVYO0lBQ0FFLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUNDLElBQUksQ0FBQyxZQUFNO01BQ3ZEUCxHQUFHLENBQUNNLFNBQVMsR0FBRyxTQUFTO01BQ3pCRSxVQUFVLENBQUM7UUFBQSxPQUFNUixHQUFHLENBQUNNLFNBQVMsR0FBRyxNQUFNO01BQUEsR0FBRSxJQUFJLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBSUZyQixRQUFRLENBQUNFLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBcUIsR0FBRyxFQUFJO0VBQ2pFQSxHQUFHLENBQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN2QztJQUNBRCxRQUFRLENBQUNFLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBc0IsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQUEsRUFBQztJQUM5RjtJQUNBM0IsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQXlCLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNmLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFBQSxFQUFDOztJQUUxRjtJQUNBVSxHQUFHLENBQUNFLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMzQjtJQUNBLElBQU1uQyxNQUFNLEdBQUc4QixHQUFHLENBQUNNLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDM0M5QixRQUFRLENBQUNXLGFBQWEsQ0FBQyxtQ0FBbUMsR0FBR2pCLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQ21CLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87RUFDckcsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBR0ZkLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVNZLEdBQUcsRUFBRTtFQUN6RUEsR0FBRyxDQUFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN2Q0QsUUFBUSxDQUFDVyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQ2UsU0FBUyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2xFN0IsUUFBUSxDQUFDVyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQ2UsU0FBUyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3hFLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7QUFLRjtBQUNBO0FBQ0E3QixRQUFRLENBQUNFLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFTWSxHQUFHLEVBQUU7RUFDekVBLEdBQUcsQ0FBQ2QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDdkMsSUFBTThCLEtBQUssR0FBRy9CLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ3hELElBQU1xQixFQUFFLEdBQUdoQyxRQUFRLENBQUNXLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztJQUN6RG9CLEtBQUssQ0FBQ0wsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQ0ksS0FBSyxDQUFDTCxTQUFTLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDN0JHLEVBQUUsQ0FBQ04sU0FBUyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQzVCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTdCLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsK0NBQStDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVM4QixHQUFHLEVBQUU7RUFDL0ZBLEdBQUcsQ0FBQ2hDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3ZDLElBQU04QixLQUFLLEdBQUsvQixRQUFRLENBQUNXLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUMxRCxJQUFNdUIsT0FBTyxHQUFHSCxLQUFLLENBQUNwQixhQUFhLENBQUMsMkJBQTJCLENBQUM7SUFDaEUsSUFBTXFCLEVBQUUsR0FBUWhDLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLHNCQUFzQixDQUFDOztJQUU5RDtJQUNBb0IsS0FBSyxDQUFDTCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFHO0lBQ3BDSSxLQUFLLENBQUNMLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUs7SUFDcENHLEVBQUUsQ0FBQ04sU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDOztJQUU3QjtJQUNBSixVQUFVLENBQUMsWUFBVztNQUNwQixJQUFJVyxPQUFPLEVBQUU7UUFDWEEsT0FBTyxDQUFDbkMsU0FBUyxHQUFHLENBQUM7TUFDdkI7TUFDQWdDLEtBQUssQ0FBQ0wsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2pDO0lBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDWCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFNRjNCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRCxJQUFNa0MsV0FBVyxHQUFHbkMsUUFBUSxDQUFDVyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDL0QsSUFBTXlCLFFBQVEsR0FBTUQsV0FBVyxDQUFDLENBQWlCOztFQUVqRDtFQUNBLElBQU1FLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLEdBQUcsRUFBSztJQUMxREQsT0FBTyxDQUFDcEMsT0FBTyxDQUFDLFVBQUFzQyxLQUFLLEVBQUk7TUFDdkIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7UUFDeEJELEtBQUssQ0FBQy9DLE1BQU0sQ0FBQ2dDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFlBQVksQ0FBQztRQUN4Q1csR0FBRyxDQUFDRyxTQUFTLENBQUNGLEtBQUssQ0FBQy9DLE1BQU0sQ0FBQztNQUM3QjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRTtJQUNEa0QsSUFBSSxFQUFFUixRQUFRO0lBQ2RTLFNBQVMsRUFBRTtFQUNiLENBQUMsQ0FBQzs7RUFFRjtFQUNBLFNBQVNDLGVBQWVBLENBQUEsRUFBRztJQUN6QkMsT0FBTyxDQUFDNUMsT0FBTyxDQUFDLFVBQUE2QyxFQUFFLEVBQUk7TUFDcEJBLEVBQUUsQ0FBQ3RCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztNQUNqQ1UsUUFBUSxDQUFDWSxPQUFPLENBQUNELEVBQUUsQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDSjs7RUFFQTtFQUNBaEQsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQVksR0FBRyxFQUFJO0lBQ3BFQSxHQUFHLENBQUNkLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ2xDLElBQU1pRCxTQUFTLEdBQUdmLFdBQVcsQ0FBQ1QsU0FBUyxDQUFDeUIsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN4RG5ELFFBQVEsQ0FBQ29ELElBQUksQ0FBQ3ZDLEtBQUssQ0FBQ3dDLFFBQVEsR0FBR0gsU0FBUyxHQUFHLFFBQVEsR0FBRyxFQUFFO01BQ3hELElBQUlBLFNBQVMsRUFBRTtRQUNiO1FBQ0FmLFdBQVcsQ0FBQ3BDLFNBQVMsR0FBRyxDQUFDO1FBQ3pCK0MsZUFBZSxDQUFDLENBQUM7TUFDbkI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQTlDLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFtRCxRQUFRLEVBQUk7SUFDeEVBLFFBQVEsQ0FBQ3JELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3ZDa0MsV0FBVyxDQUFDVCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDdEMzQixRQUFRLENBQUNvRCxJQUFJLENBQUN2QyxLQUFLLENBQUN3QyxRQUFRLEdBQUcsRUFBRTtNQUNqQztNQUNBbEIsV0FBVyxDQUFDcEMsU0FBUyxHQUFHLENBQUM7TUFDekIrQyxlQUFlLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFJRjlDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRCxJQUFNc0QsT0FBTyxHQUFHO0lBQ2RYLElBQUksRUFBRSxJQUFJO0lBQ1ZZLFVBQVUsRUFBRSxLQUFLO0lBQ2pCWCxTQUFTLEVBQUU7RUFDYixDQUFDO0VBRUQsSUFBTVksUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlsQixPQUFPLEVBQUVGLFFBQVEsRUFBSztJQUN0Q0UsT0FBTyxDQUFDcEMsT0FBTyxDQUFDLFVBQUFzQyxLQUFLLEVBQUk7TUFDdkIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7UUFDeEJELEtBQUssQ0FBQy9DLE1BQU0sQ0FBQ2dDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQy9DUSxRQUFRLENBQUNNLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDL0MsTUFBTSxDQUFDO01BQ2xDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELElBQU0yQyxRQUFRLEdBQUcsSUFBSUMsb0JBQW9CLENBQUNtQixRQUFRLEVBQUVGLE9BQU8sQ0FBQztFQUU1RHZELFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUE4QixHQUFHLEVBQUk7SUFDekRJLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDaEIsR0FBRyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2Nyb2xsIGNsYXNzIGFkZFxualF1ZXJ5KHdpbmRvdykub24oXCJsb2FkIHNjcm9sbCByZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuXG5cbn0pOyAvLyBzY3JvbGwgY2xhc3MgYWRkIEVORFxuXG4vLyBqUXVlcnkgc3RhcnRcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuXG4gIC8vIFNQIDEwMHZoKOOCueOCr+ODreODvOODq+ODkOODvOWvvuetlilcbiAgLy8gJCgnLmxvYWRpbmdMb2dvJykuY3NzKCdoZWlnaHQnLCQod2luZG93KS5oZWlnaHQoKSk7XG5cblxuICAvLyBTbW9vdGggc2Nyb2xsXG4gIC8vIOODmuODvOOCuOWGheODquODs+OCr1xuICB2YXIgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgaWYgKHdpZHRoIDw9IDEwMjMpIHtcbiAgICB2YXIgaGVhZGVySGlnaHQgPSA2MDsgLy/jg5jjg4Pjg4Djga7pq5jjgZVcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZGVySGlnaHQgPSAxMDA7IC8v44OY44OD44OA44Gu6auY44GVXG4gIH1cblxuICAkKCdhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3BlZWQgPSA4MDA7XG4gICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuICAgIHZhciB0YXJnZXQgPSAkKGhyZWYgPT0gXCIjXCIgfHwgaHJlZiA9PSBcIlwiID8gJ2h0bWwnIDogaHJlZik7XG4gICAgdmFyIHBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIGhlYWRlckhpZ2h0O1xuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiBwb3NpdGlvblxuICAgIH0sIHNwZWVkLCBcInN3aW5nXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cblxuXG59KTtcbi8vIGpRdWVyeSBFbmRcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyDilrwg44Ob44OQ44O844Gn5YaN55Sf77yP5YGc5q2i77yIUEPlkJHjgZHvvIlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXZpZGVvJykuZm9yRWFjaCh2aWRlbyA9PiB7XG4gICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICB9KTtcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gMDtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8g4pa8IFBsYXnjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgonlhYjpoK3jgYvjgonlho3nlJ/vvIhTUOWQkeOBkeOCguWQq+OCgO+8iVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlDYXJkX19wbGF5JykuZm9yRWFjaChidXR0b24gPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDsgLy8gLmdhbGxlcnlNb2RhbF9fdmlkZW9Db250ZW50XG4gIGNvbnN0IHZpZGVvICAgICA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtdmlkZW8nKTtcbiAgY29uc3QgaW1nICAgICAgID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5TW9kYWxfX2ltZycpO1xuICBpZiAoIXZpZGVvKSByZXR1cm47XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIOeUu+WDj+OCkumdnuihqOekuuOBq+OBmeOCi1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIOWLleeUu+OCkuWFiOmgreOBq+aIu+OBl+OBpuWGjeeUn1xuICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gMDtcbiAgICB2aWRlby5wbGF5KCk7XG4gIH0pO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeU1vZGFsX19wbGF5JykuZm9yRWFjaChidXR0b24gPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDsgLy8gLmdhbGxlcnlNb2RhbF9fdmlkZW9Db250ZW50XG4gIGNvbnN0IHZpZGVvICAgICA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtdmlkZW8nKTtcbiAgY29uc3QgaW1nICAgICAgID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5TW9kYWxfX2ltZycpO1xuICBpZiAoIXZpZGVvKSByZXR1cm47XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIOeUu+WDj+OCkumdnuihqOekuuOBq+OBmeOCi1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIOWLleeUu+OCkuWFiOmgreOBq+aIu+OBl+OBpuWGjeeUn1xuICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gMDtcbiAgICB2aWRlby5wbGF5KCk7XG4gIH0pO1xufSk7XG5cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29weS1idG4nKS5mb3JFYWNoKGJ0biA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIOKRoCDjg5zjgr/jg7Pjga7opqropoHntKDlhoXjga48Y29kZT7jgpLmjqLjgZlcbiAgICBjb25zdCBjb2RlID0gYnRuLmNsb3Nlc3QoJy50b3BHYWxsZXJ5TW9kYWxfX2RldGFpbCcpLnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcbiAgICBpZiAoIWNvZGUpIHJldHVybjtcblxuICAgIC8vIOKRoSDjgrPjg5Tjg7xcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlLmlubmVyVGV4dCkudGhlbigoKSA9PiB7XG4gICAgICBidG4uaW5uZXJUZXh0ID0gJ0NvcGllZCEnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBidG4uaW5uZXJUZXh0ID0gJ0NvcHknLCAxMjAwKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3BHYWxsZXJ5TW9kYWxfX2l0ZW0nKS5mb3JFYWNoKHRhYiA9PiB7XG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIOOBmeOBueOBpuOBruOCv+ODluOBi+OCiWFjdGl2ZeOCkuWkluOBmVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3BHYWxsZXJ5TW9kYWxfX2l0ZW0nKS5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgLy8g44GZ44G544Gm44Gu44Kz44O844OJ44OR44ON44Or44KS6Z2e6KGo56S644GrXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvcEdhbGxlcnlNb2RhbF9fY29kZScpLmZvckVhY2goYyA9PiBjLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICAgIFxuICAgIC8vIOOCr+ODquODg+OCr+OBl+OBn+OCv+ODluOBq2FjdGl2ZeOCkuOBpOOBkeOCi1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAvLyDlkIzjgZhkYXRhLXRhYuOBruOCs+ODvOODieOCkuihqOekulxuICAgIGNvbnN0IHRhcmdldCA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEdhbGxlcnlNb2RhbF9fY29kZVtkYXRhLXRhYj1cIicgKyB0YXJnZXQgKyAnXCJdJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pO1xufSk7XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlDYXJkX19idG4tLWNvZGUnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wR2FsbGVyeU1vZGFsJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEdhbGxlcnlNb2RhbF9fYmcnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuXG5cblxuLy8g44Oi44O844OA44Or44KS6ZaL44GPXG4vLyDjg6Ljg7zjg4Djg6vjgpLplovjgY9cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5Q2FyZF9fYnRuLS1jb2RlJykuZm9yRWFjaChmdW5jdGlvbihidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wR2FsbGVyeU1vZGFsJyk7XG4gICAgY29uc3QgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wR2FsbGVyeU1vZGFsX19iZycpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTsgLy8g5b+144Gu44Gf44KB5aSW44GZXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgYmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbi8vIOODouODvOODgOODq+OCkumWieOBmOOCi1xuLy8gdG9wR2FsbGVyeU1vZGFsIOOCkumWieOBmOOCi+mam+OBq+OCueOCr+ODreODvOODq+S9jee9ruOCkuODquOCu+ODg+ODiOOBmeOCi1xuLy8gdG9wR2FsbGVyeU1vZGFsIOOCkumWieOBmOOCi+mam+OBqyAwLjUg56eS5b6M44GrIHdyYXBwZXIuc2Nyb2xsVG9wID0gMCDjgpLlrp/ooYzjgZnjgotcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3BHYWxsZXJ5TW9kYWxfX2Nsb3NlLCAudG9wR2FsbGVyeU1vZGFsX19iZycpLmZvckVhY2goZnVuY3Rpb24oZWxtKSB7XG4gIGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1vZGFsICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wR2FsbGVyeU1vZGFsJyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50b3BHYWxsZXJ5TW9kYWxfX3dyYXBwZXInKTtcbiAgICBjb25zdCBiZyAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEdhbGxlcnlNb2RhbF9fYmcnKTtcblxuICAgIC8vIOODouODvOODgOODq+OCkumWieOBmOOCi+OCr+ODqeOCueaTjeS9nFxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyAgIC8vIOmWi+OBj+eUqOOCr+ODqeOCueOCkuWkluOBmVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTsgICAgIC8vIOmWieOBmOOCi+OCouODi+ODoeeUqOOCr+ODqeOCueOCkuS7mOOBkeOCi1xuICAgIGJnLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgLy8gMC4156eS5b6M44Gr44K544Kv44Ot44O844Or5L2N572u44KS44Oq44K744OD44OI44GX44CBY2xvc2luZyDjgq/jg6njgrnjgpLlpJbjgZlcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgd3JhcHBlci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICAgICAgLy8g5b+F6KaB44Gq44KJ44GT44GT44GnIGRpc3BsYXk6IG5vbmU7IOOCkuOBpOOBkeOBpuOCgk9LXG4gICAgfSwgNTAwKTsgLy8gMC41cyDihpIg6ZaJ44GY44KL44Ki44OL44Oh44O844K344On44Oz44Gu5omA6KaB5pmC6ZaT44Gr5ZCI44KP44Gb44KLXG4gIH0pO1xufSk7XG5cblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgbW9kYWxTYW1wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wR2FsbGVyeVNhbXBsZScpO1xuICBjb25zdCBzY3JvbGxlciAgICA9IG1vZGFsU2FtcGxlOyAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsIGNvbnRhaW5lclxuXG4gIC8vIEludGVyc2VjdGlvbk9ic2VydmVyIOOBruioreWumlxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgICAgICBvYnMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICByb290OiBzY3JvbGxlcixcbiAgICB0aHJlc2hvbGQ6IDAuMVxuICB9KTtcblxuICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PnirbmhYvjgpLjg6rjgrvjg4Pjg4jjgZfjgablho3nm6PoppbjgZnjgovplqLmlbBcbiAgZnVuY3Rpb24gcmVzZXRBbmltYXRpb25zKCkge1xuICAgIGZhZGVFbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOODouODvOODgOODq+OCkumWi+OBj++8j+mWieOBmOOCi+ODnOOCv+ODs1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeUNhcmRfX2J0bi0tc2FtcGxlJykuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzTm93T3BlbiA9IG1vZGFsU2FtcGxlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGlzTm93T3BlbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgICBpZiAoaXNOb3dPcGVuKSB7XG4gICAgICAgIC8vIOmWi+OBhOOBn+ebtOW+jOOBq+ODquOCu+ODg+ODiFxuICAgICAgICBtb2RhbFNhbXBsZS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICByZXNldEFuaW1hdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8g44Oi44O844OA44Or5YaF44Gu44CM6ZaJ44GY44KL44CN44Oc44K/44OzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3BHYWxsZXJ5U2FtcGxlX19jbG9zZScpLmZvckVhY2goY2xvc2VCdG4gPT4ge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWxTYW1wbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAvLyDplonjgZjjgZ/jgajjgY3jgoLjg6rjgrvjg4Pjg4jjgZfjgabjgYrjgY/jgajlronlv4NcbiAgICAgIG1vZGFsU2FtcGxlLnNjcm9sbFRvcCA9IDA7XG4gICAgICByZXNldEFuaW1hdGlvbnMoKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcm9vdDogbnVsbCxcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAuM1xuICB9O1xuXG4gIGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnanMtbWFzay1hbmltYXRpb24nKTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYW1wbGUwMV9faW1nJykuZm9yRWFjaChlbG0gPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxtKTtcbiAgfSk7XG59KTtcblxuIl19
