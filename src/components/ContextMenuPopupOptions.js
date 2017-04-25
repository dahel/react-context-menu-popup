import React from 'react';

const requiredStyles = {
	position: 'absolute',
	top: 0,
	left: 0
};

const styles = {
	boxShadow: '0 0 5px #c7c7c7',
	background: 'white',
	opacity: 0,
    zIndex: 1
};

class ContextMenuPopupOptions extends React.Component {
	render() {
		this.align();

		const children = React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child, {
				contextMenuPopup: this.props.contextMenuPopup,
				onOptionSelect: this.props.onOptionSelect,
				initialStyles: this.props.initialStyles,
				key: index
			})
		});

		return (
			<div
				className={this.getClassName()}
				ref="options"
				onMouseLeave={this.props.onMouseLeave}
				style={this.getStyles()}>
				{children}
			</div>
		)
	}

	getClassName() {
		return this.props.className || 'context-menu-popup__options';
	}

	align () {
		setTimeout(() => {
			const {options} = this.refs;

			if (options.getBoundingClientRect().right > window.innerWidth) {
				options.style.left = '';
				options.style.right = '0';
			}

			if (options.getBoundingClientRect().bottom > window.innerHeight) {
				options.style.top = '';
				options.style.bottom = '0';
			}

			options.style.opacity = 1;
		}, 1);
	}

	getStyles() {
		const {props} = this;

		if (props.style) {
		    return Object.assign({}, requiredStyles, props.style);
		}

		if (!props.initialStyles) {
		    return requiredStyles;
		}

		return Object.assign({}, requiredStyles, styles);
	}
}

export default ContextMenuPopupOptions;