const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    host: '0.0.0.0',
    server: './',
    open: false
  });

  gulp.watch('./index.html', e =>
    gulp.src(e.path)
        .pipe(browserSync.reload({ stream: true }))
  );
});

gulp.task('default', ['watch']);
