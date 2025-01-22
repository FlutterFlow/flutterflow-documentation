

FlutterFlow uses **`flutter_secure_storage`** to store data securely on  different platforms like Android, iOS and Web

If the platform is Android, then flutter_secure_storage stores data in [`encryptedSharedPreference`](https://developer.android.com/reference/androidx/security/crypto/EncryptedSharedPreferences), which are shared preferences that encrypt keys and values. It handles [AES encryption](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) to generate a secret key encrypted with [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) and stored in [KeyStore](https://developer.android.com/reference/java/security/KeyStore).

For the iOS platform, flutter_secure_storage uses the [KeyChain](https://developer.apple.com/documentation/security/keychain_services) which is an iOS-specific secure storage used to store and access cryptographic keys only in your app.

In the case of the web, flutter_secure_storage uses the [Web Cryptography](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) (Web Crypto) API.