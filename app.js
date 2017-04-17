import React, { Component } from 'react';

import {
	ContextMenuPopup,
	ContextMenuPopupOptions,
	ContextMenuPopupOption,
	ContextMenuPopupTrigger
} from '../contextMenuPopup';



export default class App extends Component {
	constructor () {
		super();
	}

	// basic/default usage
	render1 () {
		return <div>
			<ContextMenuPopup initialStyles={true}>
				<ContextMenuPopupTrigger>
					Click me
				</ContextMenuPopupTrigger>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption onClick={this.onFirstOptionClick}>Option 1</ContextMenuPopupOption>
					<ContextMenuPopupOption  onClick={this.onSecondOptionClick}>Option 2</ContextMenuPopupOption>
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		</div>
	}

	// you can determine if trigger click should display options list
	render2 () {
		return <div>
			<ContextMenuPopup initialStyles={true}>
				<ContextMenuPopupTrigger onClick={this.onTriggerClick}>
					Click me
				</ContextMenuPopupTrigger>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption onClick={this.onFirstOptionClick}>Option 1</ContextMenuPopupOption>
					<ContextMenuPopupOption  onClick={this.onSecondOptionClick}>Option 2</ContextMenuPopupOption>
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		</div>
	}

	// you can handle every option click in one handler.
	// For this you have to pass id prop to every single option, this id will be passed to your handler
	_render3 () {
		return <div>
			<ContextMenuPopup initialStyles={true}>
				<ContextMenuPopupTrigger>
					Click me
				</ContextMenuPopupTrigger>
				<ContextMenuPopupOptions onOptionSelect={this.onOptionSelect}>
					<ContextMenuPopupOption id="option1">Option 1</ContextMenuPopupOption>
					<ContextMenuPopupOption id="option2">Option 2</ContextMenuPopupOption>
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		</div>
	}

	// styling
	// there are some inline-defined styles, you can disable it by NOT passing initialStyles property (or setting it to false) to ContextMenuPopup element
	// you will need to provide your own styles in this case
	render4 () {
		return <div>
			<ContextMenuPopup initialStyles={true}>
				<ContextMenuPopupTrigger>
					Click me
				</ContextMenuPopupTrigger>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption onClick={this.onFirstOptionClick}>Option 1</ContextMenuPopupOption>
					<ContextMenuPopupOption  onClick={this.onSecondOptionClick}>Option 2</ContextMenuPopupOption>
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		</div>
	}

	// class names todo - uzupelnic
	// you can provide your own class for every element
	// or you can used pre-defined class names as described below (it uses BEM)
	render () {
		return <div>
			{/* if not provided xxx will be set */}
			<ContextMenuPopup initialStyles={true} className="my-context-menu-popup">
				{/* if not provided xxx will be set */}
				<ContextMenuPopupTrigger>
					Click me
				</ContextMenuPopupTrigger>

				{/* if not provided xxx will be set */}
				<ContextMenuPopupOptions>
					{/* if not provided xxx will be set */}
					<ContextMenuPopupOption onClick={this.onFirstOptionClick}>
						Option 1
					</ContextMenuPopupOption>
					{/* if not provided xxx will be set */}
					<ContextMenuPopupOption
						onClick={this.onSecondOptionClick}>
						Option 2
					</ContextMenuPopupOption>
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		</div>
	}

	onFirstOptionClick(contextMenuButton) {
		console.log('onFirstOptionClick()');

		contextMenuButton.close();
	}

	onSecondOptionClick(contextMenuButton) {
		console.log('onSecondOptionClick()');
	}

	onTriggerClick(contextMenuButton) {
		console.log('onTriggerClick()');

		contextMenuButton.open();
	}

	onOptionSelect(optionId, contextMenuButton) {
		console.log('onOptionSelect()', optionId);

		contextMenuButton.close();
	}
}