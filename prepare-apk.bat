@echo off
if "%ANDROID_HOME%"=="" set ANDROID_HOME=C:\Users\Ele\AppData\Local\Android\android-sdk
if "%JAVA_HOME%"=="" set JAVA_HOME=C:\Program Files\Java\jdk1.8.0_101
del android-release*.apk
call ionic build android --release
copy platforms\android\build\outputs\apk\android-release-unsigned.apk android-release-unsigned.apk
call "%java_home%\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk gemorelli
call "%android_home%\build-tools\25.0.0\zipalign.exe" -v 4 android-release-unsigned.apk android-release.apk
del android-release-unsigned.apk
@echo on
