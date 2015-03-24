@echo off
del CriticalRoll*.apk
call ionic build
call cordova build --release android
copy platforms\android\ant-build\MainActivity-release-unsigned.apk CriticalRoll-unsigned.apk
call "%java_home%\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore CriticalRoll-unsigned.apk gemorelli
call "%android_home%\build-tools\22.0.0\zipalign.exe" -v 4 CriticalRoll-unsigned.apk CriticalRoll.apk
del CriticalRoll-unsigned.apk
@echo on
