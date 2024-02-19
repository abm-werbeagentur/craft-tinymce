# craft-tinymce

<img src="src/icon.svg" width="100">

# TinyMCE Field for Craft CMS

A Craft CMS plugin that adds the [TinyMCE](https://www.tiny.cloud/tinymce/) editor as a field type.

## Installation
This plugin can be installed from the [Craft Plugin Store](https://plugins.craftcms.com/) or with [Composer](https://packagist.org/).

### Craft Plugin Store

Open your Craft project's control panel, navigate to the Plugin Store, search for TinyMCE Field and click Install.

### Composer

Open your terminal, navigate to your Craft project's root directory and run the following command:

```
# go to the project directory
cd /path/to/my-project.test

# tell Composer to load the plugin
composer require abmat/craft-tinymce

# tell Craft to install the plugin
php craft plugin/install abm-tinymce
```

### Requirements

TinyMCE Field 1.x requires Craft CMS 4.
TinyMCE Field 2.x requires Craft CMS 5.


## Configuration
You can create custom TinyMCE configs that will be available to your TinyMCE fields. They should be created as JSON files in your config/tinymce/ folder.
Default configuration is created on plugin install. You can add personalized project config files like project1.json, project2.json, ... to get those configurations in your TinyMCE fields settings.

See the [TinyMCE documentation](https://www.tiny.cloud/docs/configure/editor-appearance/) for a list of available config options and buttons.

### Custom TinyMCE Config
There are some custom TinyMCE Config described here:
- craftlink_adv_tab [boolean]: Set to true if you want to be able to add ID and additional classes to your links
- craftlink_data_attr [array]: Here you can define data- Attributes that you can fill for your links. Only works if you have craftlink_adv_tab activated.
- craftlink_anker [boolean]: Set to true if you want to have an anchor field for your links
- craftimage_title [boolean]: Set to true if you want to add a title to your images
- craftimage_class_list [array]: You can define an Array for custom classes that can be assigned to your images. { "title": "Default", "value": "editor-img-default" }

For each TinyMCE Config you can add a custom css file in your config/tinymce/resources folder. For example for the Project1.json configuration you can add a Project1.css file to have those styles applied to your custom styles in the backend editor.

### plugin "abmChatGpt" and buttons "abmChatGptLanguages", "abmChatGptPrompts"
To enable our plugin ["ChatGPT for editors - Plugin"](https://plugins.craftcms.com/abm-chatgpt), add "abmChatGpt" to the plugin list in your custom tinymce config and then add the Buttons "abmChatGptLanguages" and / or "abmChatGptPrompts" to a toolbar.
Button "abmChatGptLanguages" is for translations.
Button "abmChatGptPrompts" is for prompts.

On a fresh install, the plugin "abmchatGpt" and the buttons are already in the Default.json file.

### TinyMCE style_formats
You can add custom style formats to your editor by added them to your json config file.
See the [TinyMCE style_formats documentation](https://www.tiny.cloud/docs/configure/editor-appearance/#style_formats) for a list of available config options.

Example:
```json
"style_formats": [
  {
    "title": "Font Color",
    "items": [
      {"title": "orange", "inline": "span", "classes": "fc-orange"},
      {"title": "blau", "inline": "span", "classes": "fc-blue"}
    ]
  },
  {
    "title": "SEO",
    "items": [
      {"title": "H1", "format": "h1"},
      {"title": "H2", "format": "h2"},
      {"title": "H3", "format": "h3"},
      {"title": "H4", "format": "h4"},
      {"title": "H5", "format": "h5"},
      {"title": "H6", "format": "h6"}
    ]
  }
]
```

### TinyMCE Link Classes
You cann add custom link classes to your links by adding them to your json config file. The value will be added as a class to the a tag when selected as a link class on inserting/editing a link.

```json
"link_class_list": [
  {"title": "None", "value": ""},
  {"title": "My custom link class", "value": "custom_link_class"}
]
```



---
*Created and maintained by [abm Feregyhazy & Simon GmbH](https://www.abm.at)*
