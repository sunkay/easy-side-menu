Package.describe({
  summary: "Easily add responsive side menus to your applications",
  version: "0.1.0",
  git: "https://github.com/sunkay/easy-side-menu.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles(['sunkay:easy-side-menu.js', 'sunkay:easy-side-menu.css']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sunkay:easy-side-menu');
  api.addFiles('sunkay:easy-side-menu-tests.js');
});
