# Alamin Rafi - Digital Hub Android App

This is a professional Android WebView wrapper for `https://alaminrafi.com`.

## Features

- **Splash Screen**: Modern startup experience.
- **Pull-to-Refresh**: Easily reload the website by swiping down.
- **Progress Bar**: Visual feedback while pages load.
- **Deep Linking**: Handles WhatsApp, Phone, and Email links automatically.
- **External Links**: Opens non-portfolio links in the system browser.
- **Back Button**: Native-like navigation within the website.

## How to Build

1. **Open in Android Studio**:
   - Launch Android Studio.
   - Select **File > Open**.
   - Navigate to this `android-app` directory and click **OK**.
2. **Sync Gradle**:
   - Android Studio will automatically start syncing Gradle. Wait for it to finish.
3. **Run**:
   - Connect an Android device or start an emulator.
   - Click the **Run** button (green play icon).
4. **Generate APK/Bundle**:
   - Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)`.
   - For Play Store, use **Build > Generate Signed Bundle / APK**.

## Customization

- **URL**: Change `websiteUrl` in `MainActivity.kt`.
- **Package Name**: Update `applicationId` in `app/build.gradle`.
- **Icons**: Use **File > New > Image Asset** to regenerate icons in all sizes from `app_logo.png`.
