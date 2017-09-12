==================

AngularJS Module that integrate cryptography functionality offers from the [crypto-js](https://code.google.com/p/crypto-js/) project. Provides a simple service to encrypt and decrypt using AES.

Dependencies
------------
- [AngularJS 1.1.4 + ](http://angularjs.org/) (tested with 1.1.4 and 1.2.16)
- [Crypto-js 3.1.2 AES modul](https://github.com/sytelus/CryptoJS/tree/master/rollups/tripledes.js)

##Install (bower)

* bower install angular-des
```html
<script type='text/javascript' src="[bower_components/]cryptojslib/rollups/tripledes.js"></script>
<script type='text/javascript' src="[bower_components/]angular-des/angular-des.js"></script>
```

##Usage

* add module dependency ('angular-des') to angular
```js
var demoApp = angular.module('app', ['services', 'angular-des']);
```

* setup the encryption key in your config
```js
angular.module.('app').config(['$cryptojsProvider', function($cryptojsProvider){
	$cryptojsProvider.setKey('ABCD123');
});
```

Example Service Usage

```js
angular.module('app').controller('DemoController', ['$scope', '$cryptojs', function($scope, $cryptojs) {

	var encrypted = $cryptojs.encrypt('');
	var decrypted = $cryptojs.decrypt(encrypted);
});

```

or you can use a custom key everytime

```js
angular.module('app').controller('ExampleController', ['$scope', '$crypto', function($scope, $crypto) {

	var encrypted = $crypto.encrypt('some plain text data', 'some custom key');
	var decrypted = $crypto.decrypt(encrypted, 'some other custom key');
});

```

That's all !

Issues
-------------
- Report at the github [issue tracker](https://github.com/middleout/angular-cryptography/issues)

License
--------------

Middleout Angular Cryptography is released under the [Apache License](http://opensource.org/licenses/Apache-2.0).
