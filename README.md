# Doctor Mobile App
## Introduce

React Native IOS and Android Mobile App

## Environment

- React Native : 0.68.0
- React: 17.0.2
- Node : 14.17.0
- Yarn: 1.22.10
- npm: 6.14.13
- Watchman: 2021.06.07.00
- CocoaPods: 1.11.2
- iOS SDK:
      Platforms: DriverKit 21.2, iOS 15.2, macOS 12.1, tvOS 15.2, watchOS 8.3
- Android SDK:
      API Levels: 23, 25, 26, 27, 28, 29, 30
      Build Tools: 28.0.3, 29.0.0, 29.0.2, 29.0.3, 30.0.1, 30.0.3
      System Images: android-23 | Intel x86 Atom_64, android-23 | Google APIs Intel x86 Atom_64, android-28 | Intel x86 Atom_64, android-29 | Google Play Intel x86 Atom, android-30 | Google APIs Intel x8

## Run project

Doctor requires all environment to run.

Clone source code from repo

```sh
git clone https://bitbucket.org/huydt1412/leber-doctor-app/src
```

Install node_modules.

```sh
cd master
yarn
```

Install CocoaPods.

```sh
cd ios && pod install && cd ..
```

Build project on Android

```sh
npx react-native run-android
```

Build project on iOS

```sh
npx react-native run-ios
```

## IDE

Tools for development application

| Name | Website |
| ------ | ------ |
| Visual Studio Code | [https://code.visualstudio.com/download] |
| Android Stuido | [https://developer.android.com/studio/install] |
| Xcode | [https://developer.apple.com/xcode/] |

## Structure

Doctor mobile app structure in folder src:

- [components] - includes global components of the project.
- [contexts] - includes context api.
- [screens] - includes screens of the project
- [theme] - define colors and fonts used in the project

## License

MIT
