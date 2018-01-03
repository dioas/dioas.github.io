module.exports = {
    bundle: {
      main: {
        scripts: [
          './assets/js/*.js',
          '/plugin/fancyBox/source/jquery.fancybox.pack.js'
        ],
        styles: ['./assets/css/*.css',
                 './plugin/fancyBox/source/jquery.fancybox.css',]
      },
      vendor: {
        scripts: './bower_components/angular/angular.js'
      }
    },
    copy: './assets/img/*.{png,svg,jpg,PNG}'
  };
