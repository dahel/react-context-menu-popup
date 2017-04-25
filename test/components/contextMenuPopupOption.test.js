import React from 'react';

import ContextMenuPopupOption from '../../src/components/ContextMenuPopupOption';

describe('ContextMenuPopupOption' , () => {
	it('has properly defined initial state', () => {
		const wrapper = mount(<ContextMenuPopupOption />);

		expect(wrapper.state()).to.eql({hovered: false});
	});

	it('renders children when passed in', () => {
		const wrapper = mount(
			<ContextMenuPopupOption>
				<div className="unique" />
			</ContextMenuPopupOption>
		);

		expect(wrapper.contains(<div className="unique" />)).to.equal(true);
	});

	it('adds proper class to root element in case it is passed as className property', () => {
		const className = 'test-class-name';
		const wrapper = mount(
			<ContextMenuPopupOption className={className}/>
		);

		expect(wrapper.find('div').hasClass(className)).to.equal(true);
	});

	it('adds default class to root element in case there is no className passed as property', () => {
		const className = 'context-menu-popup__option';
		const wrapper = mount(
			<ContextMenuPopupOption />
		);

		expect(wrapper.find('div').hasClass(className)).to.equal(true);
	});
	
	describe('adds proper styles to root element', () => {
		it('in case style is not passed as prop, state.hovered is false and props.initialStyles is true', () => {
			const wrapper = mount(
				<ContextMenuPopupOption initialStyles={true}/>
			);

			expect(wrapper.find('div').getDOMNode().style.padding).to.eql('10px');
			expect(wrapper.find('div').getDOMNode().style.whiteSpace).to.eql('nowrap');
			expect(wrapper.find('div').getDOMNode().style.cursor).to.eql('pointer');
		});

		it('in case style is not passed as prop, state.hovered is false and props.initialStyles is false', () => {
			const wrapper = mount(
				<ContextMenuPopupOption initialStyles={false}/>
			);

			expect(wrapper.find('div').getDOMNode().style.cssText).to.eql('');
		});

		it('in case style is passed as prop and state.hovered is false', () => {
			const style = {background: 'red'};
			const wrapper = mount(
				<ContextMenuPopupOption style={style}/>
			);

			expect(wrapper.find('div').getDOMNode().style.cssText).to.eql('background: red;');
		});

		it('in case style and hoverStyle are passed as prop and state.hovered is true', () => {
			const style = {background: 'red', color: 'green'};
			const hoveredStyle = {background: 'green'};
			const wrapper = mount(
				<ContextMenuPopupOption style={style} hoverStyle={hoveredStyle}/>
			);

			wrapper.instance().setState({hovered: true});

			expect(wrapper.find('div').getDOMNode().style.background).to.eql('green');
			expect(wrapper.find('div').getDOMNode().style.color).to.eql('green');
		});

		it('in case style is not passed as prop and hoverStyle is not passed as prop and state.hovered is true and initialStyles is false', () => {
			const wrapper = mount(
				<ContextMenuPopupOption initialStyles={true}/>
			);

			wrapper.instance().setState({hovered: true});

			expect(wrapper.find('div').getDOMNode().style.background).to.eql('rgb(207, 207, 207)');
		});
	});

	it('set this.state.hovered to true on mouse enter', () => {
		const customOnClickHandler = sinon.spy();

		const wrapper = mount(
			<ContextMenuPopupOption customOnClickHandler={customOnClickHandler}/>
		);

		expect(wrapper.instance().state.hovered).to.eql(false);

		wrapper.find('div').simulate('mouseenter');

		expect(wrapper.instance().state.hovered).to.eql(true);
	});

	it('set this.state.hovered to true on mouse leave', () => {
		const customOnClickHandler = sinon.spy();

		const wrapper = mount(
			<ContextMenuPopupOption customOnClickHandler={customOnClickHandler}/>
		);

		wrapper.instance().setState({hovered: true});

		expect(wrapper.instance().state.hovered).to.eql(true);

		wrapper.find('div').simulate('mouseleave');

		expect(wrapper.instance().state.hovered).to.eql(false);
	});

	it('calls onOptionSelect after click event in case onOptionSelect is passed as prop', () => {
		const customOnClickHandler = sinon.spy();
		const contextMenuPopup = {};
		const id = 1234;

		const wrapper = mount(
			<ContextMenuPopupOption id={id} onOptionSelect={customOnClickHandler} contextMenuPopup={contextMenuPopup}/>
		);

		wrapper.find('div').simulate('click');

		expect(customOnClickHandler.calledOnce).to.eql(true);
		expect(customOnClickHandler.calledWith(id, contextMenuPopup)).to.eql(true);
	});

	it('calls onClick after click event in case onOptionSelect is not passed as prop', () => {
		const onClick = sinon.spy();
		const contextMenuPopup = {};

		const wrapper = mount(
			<ContextMenuPopupOption contextMenuPopup={contextMenuPopup} onClick={onClick}/>
		);

		wrapper.find('div').simulate('click');

		expect(onClick.calledOnce).to.eql(true);
		expect(onClick.calledWith(contextMenuPopup)).to.eql(true);
	});
});
