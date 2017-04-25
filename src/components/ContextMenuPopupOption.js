import React from 'react';
// import classNames from 'classnames';

const styles = {
	padding: '10px',
	whiteSpace: 'nowrap',
	cursor: 'pointer'
};

const hoverStyles = {
	backgroundColor: 'rgb(207, 207, 207)'
};

class ContextMenuPopupOption extends React.Component {
	/* istanbul ignore next */
	constructor() {
		super();

		this.state = {
			hovered: false
		}
	}

	render() {
		return (
			<div
				className={this.getClassName()}
				style={this.getStyle()}
				onMouseEnter={this.onMouseEnter.bind(this)}
				onMouseLeave={this.onMouseLeave.bind(this)}
				onClick={this.handleOptionClick.bind(this)}
			>{this.props.children}</div>
		)
	}

	getClassName() {
		return this.props.className || 'context-menu-popup__option';
	}

	handleOptionClick() {
		if (this.props.onOptionSelect) {
			this.props.onOptionSelect(this.props.id, this.props.contextMenuPopup);
		} else {
			this.props.onClick(this.props.contextMenuPopup);
		}
	}

	onMouseEnter() {
		this.setState({
			hovered: true
		})
	}

	onMouseLeave() {
		this.setState({
			hovered: false
		})
	}

	getStyle() {
		const {style, hoverStyle, initialStyles} = this.props;
		const {hovered} = this.state;

		if (style && !hovered) {
		    return style;
		}

		if (style && hovered) {
			return Object.assign({}, style, hoverStyle);
		}

		if (!initialStyles) {
		    return {};
		}

		if (hovered) {
			return Object.assign({}, styles, hoverStyles);
		}

		return styles;
	}
}

export default ContextMenuPopupOption;