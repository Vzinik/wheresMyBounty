# Where's My Bounty

A Chrome extension that automates Twitch bounty coin collection while watching streams.

Designed to reduce manual interaction and streamline coin collection from Twitch streams with planned support for automatic stream switching when rewards stop (game-specific targeting).

---

## Overview

**Where's My Bounty** is a browser automation extension built using Chrome Extension Manifest V3 for learning how Chrome extensions interact with different tabs and webpages.
The purpose of choosing this project was to automate the coin collection in the game I liked (Paladins) so that I can purchase in-game skins with those coins.    
The extension includes a popup interface, background worker logic, and a configurable settings page.

##  Features

-  Automatic bounty coin collection on Twitch streams
-  Background worker for timed checks
-  Popup UI for quick controls
-  Settings page for configuration
-  Chrome storage integration
-  Planned: Auto-switch to another stream if rewards stop

#  Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vzinik/wheresMyBounty.git
2. Open Google Chrome and navigate to:
    ```bash
    chrome://extensions/
    ```
3. Enable Developer Mode (toggle in the top-right corner).
4. Click "Load unpacked".
5. Select the cloned wheresMyBounty project folder.

The extension will now appear in your extensions list and be active on supported Twitch pages.
