# Changelog

All notable changes to this project will be documented in this file.

## 2.0.9 - 2025-10-20

### Fixed

- PurifierCustomConfig refactored

## 2.0.8 - 2025-09-03

### Fixed

- changes from version 2.0.7 discarded

## 2.0.7 - 2025-08-25

### Fixed

- controlpanel only loads customasset if inline editing is activated

## 2.0.6 - 2025-01-27

### Added
- new config option: 'craftlink_default_multisite'. after selecting an entry and this option is true, the site for the link is 'Multisite'.

### Updated
- field now implements craft\base\CrossSiteCopyableFieldInterface

## 2.0.5 - 2024-09-23

### Updated
- field now implements craft\base\MergeableFieldInterface

## 2.0.4 - 2024-07-05

### Added

- added "license_key" to default.json config on a fresh plugin installation

## 2.0.3 - 2024-06-12

### Fixed

- sometimes changes on links or images are not saved to the textarea field


## 2.0.2 - 2024-04-30

### Fixed

- Fixed a bug with loading the custom css file

## 2.0.1 - 2024-04-29

### Updated

- Updated to TinyMCE 7

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
