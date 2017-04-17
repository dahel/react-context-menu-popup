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
		const Trigger = React.Children.toArray(this.props.children).filter((item) => {
			return item.type.name === 'ContextMenuPopupTrigger'
		})[0];

		const a = React.cloneElement(Trigger, {
			customOnClickHandler: Trigger.props.onClick,
			onClick: this.onTriggerClick.bind(this),
			contextMenuPopup: this
		})

		console.log('################################################## ??');
		console.log(a.props.customOnClickHandler);
	}

	onTriggerClick() {
		this.setState({
			optionsVisible: true
		});
	}

	getOptionsListElement() {
		const OptionsList = React.Children.toArray(this.props.children).filter((item) => {
			return item.type.name === 'ContextMenuPopupOptions'
		})[0];

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