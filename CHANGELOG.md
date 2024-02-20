# Changelog

All notable changes to this project will be documented in this file.

## 2.0.0 - 2024-02-20

### Updated

- Support for Craft CMS 5.x

## 1.1.0 - 2024-02-19

### Added

- Added Plugin "abmChatGpt" and buttons "abmChatGptLanguages" and "abmChatGptPrompts". Works with [ChatGPT for editors](https://plugins.craftcms.com/abm-chatgpt)

## 1.0.8 - 2024-01-16

### Fixed

- Fixed bug with image transforms, when selection a transform entry for the image

## 1.0.7 - 2024-01-16

### Fixed

- Fixed access to the image transform translation in the image modal, when there are transforms for the field

## 1.0.6 - 2024-01-10

### Changed
- TinyMCE vulnerable to mutation Cross-site Scripting via special characters in unescaped text nodes. [more infos](https://github.com/advisories/GHSA-v626-r774-j7f8)

## 1.0.5 - 2023-09-27

### Fixed
- the theme.min.js file was created multiple times under /cpresources, when the plugin is loaded.

### Changed
- Added [base_url](https://www.tiny.cloud/docs/tinymce/6/editor-important-options/#base_url) to the config options to prevent loading errors of plugins, icons und modules. This could happen, when the editor is loaded in the sideload in craft cms 4.5.6

## 1.0.4 - 2023-05-30

### Changed
- Added a workaround when expand a collapsed matrixblock (tinymce iframe has height of 0)

## 1.0.3 - 2023-05-24

### Changed
- Fixed translations

## 1.0.2 - 2023-05-09

### Added
- CHANGELOG.md and Banner for Craft Plugin Store

## 1.0.1 - 2023-04-19

### Changed
- Updated Plugin Icon

## 1.0.0 - 2023-04-05

### Added
- Initial release
