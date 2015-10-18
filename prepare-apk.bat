@echo off
del android-release*.apk
call ionic build --release android
copy platforms\android\build\outputs\apk\android-release-unsigned.apk android-release-unsigned.apk
call "%java_home%\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk gemorelli
call "%android_home%\build-tools\22.0.1\zipalign.exe" -v 4 android-release-unsigned.apk android-release.apk
del android-release-unsigned.apk
@echo on
