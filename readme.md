# Simple Sticky Notes Chrome Extension

A simple Chrome extension for taking sticky notes while watching videos or browsing, with support for saving notes specific to each URL and preventing duplicate tabs for the same page. The extension includes a draggable text editor overlay that remains visible even in video fullscreen mode.

## Features

- Persistent text editor overlay with a draggable header labeled "Notes."
- Saves notes specifically for each URL, allowing isolated notes across different pages.
- Autosaves notes to local storage every 2 seconds.
- Detects duplicate tabs for the same URL, showing an alert and preventing multiple editors on the same page.
- Designed to remain visible when watching videos in fullscreen.

## Installation

1. Download or clone this repository.
2. Open Chrome, go to `chrome://extensions`, and enable **Developer mode**.
3. Click on **Load unpacked** and select the extension folder.

## Usage

1. **Open the Editor**: Click the extension icon to toggle the sticky notes editor.
2. **Writing Notes**: Type notes directly into the text area. The notes automatically save every 2 seconds for the specific URL.
3. **Moving the Editor**: Use the green "Notes" header to drag the editor to a convenient position on your screen.
4. **Fullscreen Compatibility**: The editor remains visible even in video fullscreen mode.
5. **Prevent Duplicate Tabs**: If you try to open the editor on another tab with the same URL, an alert will notify you that only one sticky notes instance is allowed per URL.

## Notes

- The extension saves notes specific to each URL using local storage, so notes on one page won't appear on another, even within the same website.
- Autosave and duplicate detection ensure a smooth note-taking experience without overlapping notes across tabs.

## License

This project is licensed under the MIT License.
