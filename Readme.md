# LinkedIn Connection Helper

## Description
The LinkedIn Connection Helper is a Chrome extension designed to assist users in managing their LinkedIn connection requests. It features a timer and counter to help users keep track of their connection activities, ensuring they can send requests efficiently.

## Features
- **Timer**: Set a timer to remind you when to send new connection requests.
- **Notifications**: Receive notifications when it's time to send a new connection request.
- **Storage**: Store user preferences and connection counts using Chrome's storage API.

## Installation

1. Clone the repository or download the ZIP file.
   ```bash
   git clone https://github.com/niteshmandall/linkedin-connection-timer.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the directory where the extension files are located.

5. The extension should now be installed and ready to use!

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Set your desired timer interval for sending connection requests.
3. The extension will notify you when it's time to send a new request.

## Permissions
This extension requires the following permissions:
- `storage`: To store user preferences and connection counts.
- `alarms`: To set timers for notifications.
- `notifications`: To display notifications to the user.

## Manifest File
The extension uses a `manifest.json` file to define its properties and permissions. Below is a brief overview of the key sections:

```json
{
  "manifest_version": 3,
  "name": "LinkedIn Connection Helper",
  "version": "1.0",
  "description": "Timer and counter for LinkedIn connections",
  "permissions": [
    "storage",
    "alarms",
    "notifications"
  ],
  "host_permissions": [
    "*://*.linkedin.com/*"
  ],
  "content_scripts": [
    {
      "matches": ["*://*.linkedin.com/*"],
      "js": ["content.js"]
    }
  ],
  "background": {
    "service_worker": "background.js",
    "type": "module"
  }
}
