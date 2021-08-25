# MyMars

Tinder style app using NASA's Curiosity rover API with React Native

<p align="center">
    <img src="new-record.gif"/>
</p>

## Get started

```
yarn
react-native start
```

## Run

### Run on Android

```
npx jetifier
npx react-native run-android
```

### Run on iOS

```
cd ios && pod install
cd ..
react-native run-ios
```

### iOS build issue

1. 'Multiple commands produce' error when building with new Xcode build system

After Xcode 11 stable released and upgraded, it required fonts removal under `Copy Bundle Resources` in Build Phases.
So simply remove duplicate reference fonts (react-native-vector-icons fonts) in `Copy Bundle Resources` except app custom fonts such as prefix "PT-***".
Please reference this link. https://github.com/oblador/react-native-vector-icons/issues/1074
