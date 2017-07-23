export default {
  dest: 'dist/bundles/aytacworld-angular-bookmark.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    'validator': 'validator',
    'rxjs': 'rxjs'
  },
  moduleName: 'ng.simpleForms',
  sourceMap: false,
  external: [ '@angular/core', '@angular/forms', 'validator', 'rxjs' ]
}
