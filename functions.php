<?

// CSS JSファイル読み込み
function my_theme_scripts()
{
  // メインの CSS／JS
  wp_enqueue_style(
    'main',
    get_stylesheet_directory_uri() . '/assets/css/style.css',
    [],
    '1.0.0'
  );
  wp_enqueue_script(
    'main',
    get_stylesheet_directory_uri() . '/assets/js/base.js',
    ['jquery'],
    '1.0.0',
    true
  );

  // Prism.js テーマ（CSS）
  wp_enqueue_style(
    'prism-theme',
    'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.css',
    [],
    '1.28.0'
  );

  // Prism.js コア
  wp_enqueue_script(
    'prism-core',
    'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.js',
    [],
    '1.28.0',
    true
  );

  // Prism.js 言語プラグイン（CSS 用）
  wp_enqueue_script(
    'prism-css',
    'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-css.min.js',
    ['prism-core'],
    '1.28.0',
    true
  );

  // Prism.js 言語プラグイン（JavaScript 用）
  wp_enqueue_script(
    'prism-js',
    'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-javascript.min.js',
    ['prism-core'],
    '1.28.0',
    true
  );

  // Prism.js Copy-to-Clipboard プラグイン
  wp_enqueue_script(
    'prism-copy',
    'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js',
    ['prism-core'],
    '1.28.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');
