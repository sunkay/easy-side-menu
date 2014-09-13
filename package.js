Package.describe({
  summary: "Easily add responsive side menus to your applications",
  version: "1.0.1",
  git: "https://github.com/sunkay/easy-side-menu.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use(['templating'],'client');

  api.addFiles('easy-side-menu.html', 'client');
  api.addFiles(['easy-side-menu.js', 'slideout-menu.css'], 'client');
 
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sunkay:easy-side-menu');
  api.addFiles('easy-side-menu-tests.js');
});
