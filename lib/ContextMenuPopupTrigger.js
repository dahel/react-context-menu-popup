import React from 'react';

class ContextMenuPopupTrigger extends React.Component {
	render() {
		return (
			<div
				className={this.getClassName()}
				onClick={this.handleClick.bind(this)}
				style={this.props.style}
			>{this.props.children}</div>
		)
	}

	getClassName() {
		return this.props.className || 'context-menu-popup__trigger';
	}

	handleClick() {
		if (this.props.customOnClickHandler) {
			this.props.customOnClickHandler(this.props.contextMenuPopup);
		} else {
			this.props.onClick();
		}
	}
}


export default ContextMenuPopupTrigger;