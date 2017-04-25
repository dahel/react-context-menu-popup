import React from 'react';

class ContextMenuPopup extends React.Component {
	constructor () {
		super();

		this.state = {
			optionsVisible: false
		};
	}

    componentDidUpdate() {
        this.boundClickCallback = this.boundClickCallback || this.close.bind(this);

		if (this.state.optionsVisible) {
            document.addEventListener('click', this.boundClickCallback);
        } else {
            document.removeEventListener('click', this.boundClickCallback);
        }
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
		return this.props.className || 'context-menu-popup';
	}

	getTriggerElement() {
		const Trigger = React.Children.toArray(this.props.children).filter((item) => {
			if (item && item.type && item.type.name === 'ContextMenuPopupTrigger') {
			    return item;
			}
		})[0];

		return React.cloneElement(Trigger, {
			customOnClickHandler: Trigger.props.onClick,
			onClick: this.onTriggerClick.bind(this),
			contextMenuPopup: this
		});
	}

	onTriggerClick() {
		this.setState({
			optionsVisible: true
		});
	}

	getOptionsListElement() {
		const OptionsList = React.Children.toArray(this.props.children).filter((item) => {
			if (item && item.type && item.type.name === 'ContextMenuPopupOptions') {
				return item;
			}
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