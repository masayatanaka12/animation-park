//----------------------------------------------------------------------
//  モード
//----------------------------------------------------------------------
"use strict";

//----------------------------------------------------------------------
//  モジュール読み込み
//----------------------------------------------------------------------
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //Sassコンパイル
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss'); //autoprefixerとセット
const mqpacker = require("css-mqpacker"); // mediaクエリまとめる
const sassGlob = require("gulp-sass-glob"); // @importまとめる
const cleanCSS = require('gulp-clean-css'); //コンパイルした css を圧縮するため
const uglify = require('gulp-uglify'); // javascript minify
const rename = require('gulp-rename'); //圧縮したファイル名に.minを追加
const plumber = require('gulp-plumber'); // error handling
const sourcemaps = require('gulp-sourcemaps'); //sourcemaps
const concat = require('gulp-concat'); // JS圧縮
const imagemin = require('gulp-imagemin'); // 画像圧縮
const pngquant = require("imagemin-pngquant"); // 画像圧縮
const mozjpeg = require('imagemin-mozjpeg'); // 画像圧縮
const changed = require("gulp-changed");
const babel = require('gulp-babel'); // babel
const ejs = require("gulp-ejs");
const replace = require("gulp-replace");
const imageResize = require('gulp-image-resize'); // 画像リサイズ
const pkg = require('./package.json');
const browserSync = require('browser-sync').create(); // ブラウザの自動リロード
const reload = browserSync.reload; //ブラウザの自動リロード




const ffmpeg     = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const through2   = require('through2');

// FFmpeg のパスを設定
ffmpeg.setFfmpegPath(ffmpegPath);

// 動画を MP4 (H.264) に変換
function toMp4() {
  return gulp.src('src/video/*.mov')
    .pipe(through2.obj(function (file, _, cb) {
      const inputPath  = file.path;
      const outputName = file.stem + '.mp4';

      ffmpeg(inputPath)
        .outputOptions([
          '-c:v libx264',
          '-preset fast',
          '-crf 28',
          '-movflags +faststart'
        ])
        .on('error', err => cb(err))
        .on('end', () => cb(null, file))
        .save(`assets/video/${outputName}`);
    }));
}

// 動画を WebM (VP9) に変換
function toWebm() {
  return gulp.src('src/video/*.mov')
    .pipe(through2.obj(function (file, _, cb) {
      const inputPath  = file.path;
      const outputName = file.stem + '.webm';

      ffmpeg(inputPath)
        .outputOptions([
          '-c:v libvpx-vp9',
          '-b:v 0',
          '-crf 30'
        ])
        .on('error', err => cb(err))
        .on('end', () => cb(null, file))
        .save(`assets/video/${outputName}`);
    }));
}

gulp.task('toMp4', toMp4);
gulp.task('toWebm', toWebm);



// path設定
const paths = {
  'src': {
    'scss': './src/scss/**/*.scss',
    'images': './src/img/**/*',
    'js': './src/js/**/*.js',
    'copy': [
      './src/**/*.html',
      './src/**/*.php',
    ],
  },
  'dist': {
    'css': './assets/css',
    'img': './assets/img',
    'js': './assets/js',
    'copy': './',
  }
};




// sass コンバイル
gulp.task("sass", (done) => {
  gulp
    .src(paths.src.scss)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer({ grid: true }))
    .pipe(postcss([mqpacker()]))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(paths.dist.css));
  done();
});



// 画像圧縮
gulp.task("imagemin", function () {
  return gulp
    .src(paths.src.images)
    .pipe(changed(paths.dist.img))
    .pipe(plumber())
    .pipe(
      imagemin([
        pngquant({
          quality: [0.7, 0.85],
          speed: 1,
          floyd: 0,
        }),
        mozjpeg({
          quality: 85,
          progressive: true,
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle(),
      ])
    )
    .pipe(gulp.dest(paths.dist.img));
});

// JS 結合＆圧縮
gulp.task('jsConcat', function () {
  return gulp.src(paths.src.js)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    }))
    .pipe(concat('base.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist.js))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(paths.dist.js))
});


// html & php コピー
// gulp.task('copy', function (done) {
//   gulp.src(paths.src.copy)
//     .pipe(gulp.dest(paths.dist.copy));
//   done();
// });


// gulp.task("ejs", (done) => {
//   gulp
//     .src(["./src/ejs/**/*.ejs", "!src/ejs/**/_*.ejs"])
//     .pipe(plumber())
//     .pipe(ejs({}, {}, { ext: ".html" }))
//     .pipe(rename({ extname: ".html" }))
//     .pipe(gulp.dest("./"));
//   done();
// });


// scss ファイルを変更し保存する度にコンパイル gulp dev
gulp.task('dev', () => {

  // BrowserSyncの設定
  browserSync.init({
    proxy: 'animation-park.local/',  // Local by Flywheelのドメイン
    open: true,
    notify: false,
  });

  gulp.watch(paths.src.scss, gulp.task('sass'));
  gulp.watch(paths.src.images, gulp.task('imagemin'));
  gulp.watch(paths.src.js, gulp.task('jsConcat'));
  // gulp.watch(paths.src.copy, gulp.task('copy'));
  // gulp.watch("./src/ejs/", gulp.task("ejs"));

  // ② .mov 変更で動画変換
  gulp.watch(
    'src/video/**/*.mov',
    gulp.series(toMp4, toWebm)    // reload は下の watch でやるので不要
  );

  // ③ 変換後ファイルを監視してリロード
  gulp.watch('assets/video/**/*.+(mp4|webm)')
      .on('change', reload);

  // BrowserSyncのライブプレビュー設定
  gulp.watch("**/*.html").on("change", reload);
  gulp.watch('assets/**/*.css').on("change", reload);
  gulp.watch('assets/**/*.js').on("change", reload);
  gulp.watch('assets/**/*.+(jpg|jpeg|png|gif|svg)').on("change", reload);


});


// npm run pro
gulp.task('pro', done => {
  gulp.src(paths.src.scss)
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      grid: true
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist.css));
  done();
});


// imageResize
gulp.task('faviconResize', done => {
  for (let size of sizes) {
    let width = size[0];
    let height = size[1];

    gulp.src('./src/img/favicon/favicon.jpg')
      .pipe(imageResize({
        width,
        height,
        crop: true,
        upscale: false
      }))
      .pipe(rename(`favicon-${width}x${height}.jpg`))
      .pipe(gulp.dest('./src/img/favicon'));
  }
  done();
});




exports.build = gulp.series(toMp4, toWebm);

