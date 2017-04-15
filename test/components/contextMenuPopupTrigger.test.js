import React from 'react';

import ContextMenuPopupTrigger from '../../src/components/ContextMenuPopupTrigger';

describe('ContextMenuPopupTrigger' , () => {
	it('renders children when passed in', () => {
		const wrapper = mount(
			<ContextMenuPopupTrigger>
				<div className="unique" />
			</ContextMenuPopupTrigger>
		);

		expect(wrapper.contains(<div className="unique" />)).to.equal(true);
	});

	it('adds proper class to root element in case it is passed as className property', () => {
		const className = 'test-class-name';
		const wrapper = mount(
			<ContextMenuPopupTrigger className={className}/>
		);

		expect(wrapper.find('div').hasClass(className)).to.equal(true);
	});

	it('adds default class to root element in case there is no className passed as property', () => {
		const className = 'context-menu-popup__trigger';
		const wrapper = mount(
			<ContextMenuPopupTrigger />
		);

		expect(wrapper.find('div').hasClass(className)).to.equal(true);
	});

	it('calls customOnClickHandler after click event in case customOnClickHandler is passed as prop', () => {
		const customOnClickHandler = sinon.spy();

		const wrapper = mount(
			<ContextMenuPopupTrigger customOnClickHandler={customOnClickHandler}/>
		);

		wrapper.find('div').simulate('click');

		expect(customOnClickHandler).to.have.property('callCount', 1);
	});

	it('calls customOnClickHandler after click event in case customOnClickHandler is passed as prop', () => {
		const customOnClickHandler = sinon.spy();
		const contextMenuPopup = {};

		const wrapper = mount(
			<ContextMenuPopupTrigger customOnClickHandler={customOnClickHandler} contextMenuPopup={contextMenuPopup}/>
		);

		wrapper.find('div').simulate('click');

		expect(customOnClickHandler.calledOnce).to.eql(true);
		expect(customOnClickHandler.calledWith(contextMenuPopup)).to.eql(true);
	});

	it('calls customOnClickHandler after click event in case customOnClickHandler is passed as prop', () => {
		const onClick = sinon.spy();

		const wrapper = mount(
			<ContextMenuPopupTrigger onClick={onClick}/>
		);

		wrapper.find('div').simulate('click');

		expect(onClick.calledOnce).to.eql(true);
		expect(onClick.calledWith()).to.eql(true);
	});
});
