angular.module('angular-des', [])
    .provider('$cryptojs', function CryptojsKeyProvider() {
        var cryptoKey;

        CryptoJS.mode.ECB = (function () {
            var ECB = CryptoJS.lib.BlockCipherMode.extend();

            ECB.Encryptor = ECB.extend({
                processBlock: function (words, offset) {
                    this._cipher.encryptBlock(words, offset);
                }
            });

            ECB.Decryptor = ECB.extend({
                processBlock: function (words, offset) {
                    this._cipher.decryptBlock(words, offset);
                }
            });

            return ECB;
        }());

        this.setKey = function(value) {
            this.cryptoKey = value;
        }

        this.$get = [function(){
            return {
                cryptoKey: this.cryptoKey,
                encrypt: function(message, key) {

                    if (key === undefined) {
                        key = this.cryptoKey;
                    }
                    var keyHex = CryptoJS.enc.Utf8.parse(key);
                    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7
                    });
                    
                    return encrypted.toString();
                },

                decrypt: function(message, key) {
                    if (key === undefined) {
                        key = this.cryptoKey;
                    }
                    var keyHex = CryptoJS.enc.Utf8.parse(key);
                    var textStr = CryptoJS.enc.Base64.parse(message);
                    var decrypted = CryptoJS.DES.decrypt({
                        ciphertext: textStr
                    }, keyHex, {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7
                    });
                    return decrypted.toString(CryptoJS.enc.Utf8);
                }
            }
        }];
    });