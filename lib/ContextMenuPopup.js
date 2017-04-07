import React from 'react';

class ContextMenuPopup extends React.Component {
	constructor () {
		super();

		this.state = {
			optionsVisible: false
		};
	}

	render() {
		const Trigger = this.getTriggerElement();
		const OptionsList = this.getOptionsListElement();

		return (
			<div className={this.getClassName()} style={this.getStyles()}>
				{Trigger}
				{this.state.optionsVisible ? OptionsList : null}
			</div>
		)
	}

	getStyles() {
		const required = {
			position: 'relative'
		};

		if (this.props.style) {
		    Object.assign(required, this.props.style);
		}

		return required;
	}

	getClassName() {
		return this.props.className || 'my-context-menu-popup';
	}

	getTriggerElement() {
		const Trigger = this.props.children.find((item) => {
			return item.type.name === 'ContextMenuPopupTrigger';
		});

		return React.cloneElement(Trigger, {
			customOnClickHandler: Trigger.props.onClick,
			onClick: this.onTriggerClick.bind(this),
			contextMenuPopup: this
		})
	}

	onTriggerClick() {
		this.setState({
			optionsVisible: true
		});
	}

	getOptionsListElement() {
		const OptionsList = this.props.children.find((item) => {
			return item.type.name === 'ContextMenuPopupOptions';
		});

		return React.cloneElement(OptionsList, {
			onMouseLeave: this.onOptionsListMouseLeave.bind(this),
			initialStyles: this.props.initialStyles,
			contextMenuPopup: this
		})
	}

	close() {
		this.setState({
			optionsVisible: false
		});
	}

	open() {
		this.setState({
			optionsVisible: true
		});
	}

	onOptionsListMouseLeave() {
		this.setState({
			optionsVisible: false
		});
	}
}

export default ContextMenuPopup;