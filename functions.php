<?

// CSS JSファイル読み込み
function my_theme_scripts(){
  wp_enqueue_style('main', get_stylesheet_directory_uri() . '/assets/css/style.css','', '1.0.0');
  wp_enqueue_script('main', get_stylesheet_directory_uri() . '/assets/js/base.js', ['jquery'], '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'my_theme_scripts');