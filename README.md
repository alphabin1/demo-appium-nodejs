# Appium Mobile Testing with Webdriver.io and Node.js Sample
Welcome to the Appium mobile automation testing guide using Webdriver.io and Node.js. This readme provides a step-by-step guide to set up and execute mobile tests using the powerful combination of Appium, Webdriver.io and Node.js.

## Prerequisites
Before you can start with the mobile automation testing using Appium, make sure you have the following prerequisites set up on your system:
1. Node.js: install Node.js, which includes npm (Node Package Manager), from the official website: https://nodejs.org. Make sure you have a version of Node.js intalled that supports the features required by Webdriver.io and Appium.
2. Appium: Install Appium globally on your system using the following command:
    ```
    npm install -g appium
    ```
3. AndroidSDK: Install the Android SDK and configure the necessary environment variables for Android mobile testing. Refer to the official Andoird documentation for installation instructions: https://developer.android.com/studio.
4. Java Development Kit (JDK): Install the Java Development Kit (JD) on your system. Make sure you have the necessary Java environment variables set up.
5. Appium Server: Start the Appium server on your local machine or on a remote machine. Make sure the Appium server is running before executing the tests.
6. Android Device or Emulator: Connect a physical Android device or set up an Android emulator for testing. Ensure that the device or emulator is properly configured and accessible by Appium.
7. Webdriver.io and Dependencies: Install the necessary dependencies for Webdriver.io by running the followig command in your project directory.
    ```
    npm install
    ```
    
## Getting Started
To get started with mobile automation testing, follow the steps below:

#### Installation
Clone the repository and install the dependencies by running the following commands:
```
git clone https://github.com/alphabin1/demo-appium-nodejs.git
cd demo-appium-nodejs
npm install
```

#### Execution
To execute the mobile tests, follow these steps:
1. Enter the desired capabilities, such as `deviceName` and `platformVersion`, in the `wdio.androidApp.js` file located at `config/wdio.androidApp.js`. Modify these capabilities according to your target device.
2. Open your terminal or command prompt.
3. Run the following command to execute the tests:
    ```
    npm run androidApp
    ```
    This command triggers the execution of the mobile tests on your terminal.
    Make sure you have the necessary devices connected and configured for Appium testing.
    
Feel free to explore and enhance the Appium mobile automation testing framework using Webdriver.io and Node.js to suit your specific mobile testing needs. 
Happy testing! 😊
