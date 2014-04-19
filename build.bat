@echo off
cls
build/node_modules/.bin/jake -f build/Jakefile.js %*
