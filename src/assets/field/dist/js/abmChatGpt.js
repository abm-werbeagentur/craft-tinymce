tinymce.PluginManager.add('abmChatGpt', function (editor) {

	if(typeof abm_chatgpt_languages != "undefined") {

		editor.ui.registry.addMenuButton('abmChatGptLanguages', {
			icon: 'translate',
			fetch: (callback) => {
				const items = [];

				$.each(abm_chatgpt_languages, function(i, langObj) {
					items.push({
						type: "menuitem",
						text: langObj.text,
						onAction: (_)=> {
							let prompt = '_translate_';
							let query = editor.getContent();

							if(typeof abm_chatgpt_sendRequest != "undefined") {
								abm_chatgpt_sendRequest(prompt, query, langObj.language).then((response) => {
		
									if(response.res) {
										let responseText = response.result.processed;
										let data = "";

										if(responseText) {
											if(response.result.replaceText) {
												data = responseText;
											} else {
												data = query + " " + responseText;
											}
										}
							
										if(data) {
											editor.setContent(data, { format: 'html' });
											editor.save();
										}
									} else {
										let errorMessages = (response.msg).replaceAll('<br>','\n');

										alert(errorMessages);
									}
								});
							}
						}
					});
				});

				callback(items);
			}
		});
	} else {
		editor.ui.registry.addButton('abmChatGptLanguages', {
			icon: 'translate',
			onAction: (_) => {

				const dialogConfig = {
					title: "Missing Plugin",
					body: AbmChatGptMissing.bodyDialog(editor)
				};

				editor.windowManager.open(dialogConfig);
			}
		});
	}

	if(typeof abm_chatgpt_prompts != "undefined") {
		editor.ui.registry.addMenuButton('abmChatGptPrompts', {
			icon: 'ai',
			fetch: (callback) => {
				const items = [];

				$.each(abm_chatgpt_prompts, function(i, promptObj) {

					items.push ({
						type: "menuitem",
						text: promptObj.label,
						onAction: (_)=> {
							let prompt = promptObj.id;
							let query = editor.getContent();
							let lang = abm_chatgpt_currentSiteLanguage;

							if(typeof abm_chatgpt_sendRequest != "undefined") {
								abm_chatgpt_sendRequest(prompt, query, lang).then((response) => {
		
									if(response.res) {
										let responseText = response.result.processed;
										let data = "";

										if(responseText) {
											if(response.result.replaceText) {
												data = responseText;
											} else {
												data = query + " " + responseText;
											}
										}
							
										if(data) {
											editor.setContent(data, { format: 'html' });
											editor.save();
										}
									} else {
										let errorMessages = (response.msg).replaceAll('<br>','\n');

										alert(errorMessages);
									}
								});
							}
						}
					});
				});

				callback(items);
			}
		});
	} else {
		editor.ui.registry.addButton('abmChatGptPrompts', {
			icon: 'ai',
			onAction: (_) => {

				const dialogConfig = {
					title: "Missing Plugin",
					body: AbmChatGptMissing.bodyDialog(editor)
				};

				editor.windowManager.open(dialogConfig);
			}
		});
	}
});

const AbmChatGptMissing = {
	bodyDialog: (editor) => {
		let dialog_body = {};

		dialog_body.type = "panel";
		dialog_body.items = [
			{
				type: 'alertbanner',
				text: 'You need our <a href="https://plugins.craftcms.com/abm-chatgpt" target="_blank">Chat GPT Plugin</a> to enable this feature.',
				level: 'info',
				icon: 'info'

			}
		];
		return dialog_body;
	}
}