@echo off
del MainActivity*.apk
call ionic build --release android
call cordova build --release android
copy platforms\android\ant-build\MainActivity-release-unsigned.apk MainActivity-unsigned.apk
call "%java_home%\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore MainActivity-unsigned.apk gemorelli
call "%android_home%\build-tools\22.0.1\zipalign.exe" -v 4 MainActivity-unsigned.apk MainActivity.apk
del MainActivity-unsigned.apk
@echo on
