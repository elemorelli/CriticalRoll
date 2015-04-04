@echo off
del CriticalRoll*.xap
call ionic build
call cordova build --release wp8
copy platforms\wp8\bin\release\CriticalRoll.xap CriticalRoll.xap
@echo on
