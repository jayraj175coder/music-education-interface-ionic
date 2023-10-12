# MUSIC EDUCATION INTERFACE - Trumpet #

## Description ##
A simple app for helping students learning the trumpet.


build with:

`ionic capacitor build ios --prod`
or 
`ionic capacitor build android --prod`


### important ###
When archiving the app in order to release it on ios, patch the file

`ios/App/Pods/Target Support Files/Pods-App/Pods-App-frameworks.sh`

line 44:
```diff
- source="$(readlink "${source}")"
+ source="$(readlink -f "${source}")"
```


## update versions ##
in file `ios/App/App.xcodeproj/project.pbxproj` change CURRENT_PROJECT_VERSION and MARKETING_VERSION
in file `android/app/build.gradle` change versionCode and versionName