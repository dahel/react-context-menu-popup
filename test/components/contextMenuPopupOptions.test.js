import React from 'react';

import ContextMenuPopupOptions from '../../src/components/ContextMenuPopupOptions';

const Option = () => <div className="unique"></div>;

describe('ContextMenuPopupOptions' , () => {
	it('properly aligns element in case it is near right edge', () => {
	    
	});
	
	it('renders children when passed in', () => {
		const wrapper = mount(
			<ContextMenuPopupOptions>
				<Option />
			</ContextMenuPopupOptions>
		);

		expect(wrapper.first('div').getDOMNode().innerHTML).to.eql('<div class="unique"></div>');
	});

	it('passes proper props to children elements', () => {
		const contextMenuPopup = {};
		const onOptionSelect = () => {};
		const initialStyles = true;
		const wrapper = mount(
			<ContextMenuPopupOptions
				contextMenuPopup={contextMenuPopup}
				onOptionSelect={onOptionSelect}
				initialStyles={initialStyles}
			>
				<Option />
				<Option />
			</ContextMenuPopupOptions>
		);

		expect(wrapper.find(Option).at(0).props()).to.eql({
			contextMenuPopup,
			onOptionSelect,
			initialStyles
		});
		expect(wrapper.find(Option).at(1).props()).to.eql({
			contextMenuPopup,
			onOptionSelect,
			initialStyles
		});
	});

	it('adds proper class to root element in case it is passed as className property', () => {
		const className = 'test-class-name';
		const wrapper = mount(
			<ContextMenuPopupOptions className={className}/>
		);

		expect(wrapper.find('div').hasClass(className)).to.equal(true);
	});

	it('adds default class to root element in case there is no className passed as property', () => {
		const className = 'context-menu-popup__options';
		const wrapper = mount(
			<ContextMenuPopupOptions />
		);

		expect(wrapper.find('div').hasClass(className)).to.equal(true);
	});

	it('adds proper ref attribute to root element', () => {
		const wrapper = mount(
			<ContextMenuPopupOptions />
		);

		expect(wrapper.ref('options').hasClass('context-menu-popup__options')).to.equal(true);
	});
	
	it('calls this.props.onMouseLeave on mouse leave event', () => {
		const onMouseLeave = sinon.spy();
		const wrapper = mount(
			<ContextMenuPopupOptions onMouseLeave={onMouseLeave}/>
		);

		wrapper.find('div').simulate('mouseleave');

		expect(onMouseLeave).to.have.property('callCount', 1);
		expect(onMouseLeave.calledWith()).to.eql(true);
	});

	describe('adds proper styles', () => {
	    it('in case style is passed as prop', () => {
	        const style = {position: 'relative', left: '10px'};
			const wrapper = mount(
				<ContextMenuPopupOptions style={style}/>
			);

			expect(wrapper.find('div').getDOMNode().style.position).to.eql('relative');
			expect(wrapper.find('div').getDOMNode().style.top).to.eql('0px');
			expect(wrapper.find('div').getDOMNode().style.left).to.eql('10px');
	    });

		it('in case style is not passed as prop and initialStyles is not defined', () => {
			const wrapper = mount(
				<ContextMenuPopupOptions />
			);

			expect(wrapper.find('div').getDOMNode().style.position).to.eql('absolute');
			expect(wrapper.find('div').getDOMNode().style.top).to.eql('0px');
			expect(wrapper.find('div').getDOMNode().style.left).to.eql('0px');
			expect(wrapper.find('div').getDOMNode().style.boxShadow).to.eql('');
			expect(wrapper.find('div').getDOMNode().style.background).to.eql('');
			expect(wrapper.find('div').getDOMNode().style.opacity).to.eql('');
		});

		it('in case style is not passed as prop and initialStyles is false', () => {
			const wrapper = mount(
				<ContextMenuPopupOptions initialStyles={false}/>
			);

			expect(wrapper.find('div').getDOMNode().style.position).to.eql('absolute');
			expect(wrapper.find('div').getDOMNode().style.top).to.eql('0px');
			expect(wrapper.find('div').getDOMNode().style.left).to.eql('0px');
			expect(wrapper.find('div').getDOMNode().style.boxShadow).to.eql('');
			expect(wrapper.find('div').getDOMNode().style.background).to.eql('');
			expect(wrapper.find('div').getDOMNode().style.opacity).to.eql('');
		});

		it('in case style is not passed as prop and initialStyles is true', () => {
			const wrapper = mount(
				<ContextMenuPopupOptions initialStyles={true}/>
			);

			expect(wrapper.find('div').getDOMNode().style.position).to.eql('absolute');
			expect(wrapper.find('div').getDOMNode().style.top).to.eql('0px');
			expect(wrapper.find('div').getDOMNode().style.left).to.eql('0px');
			expect(wrapper.find('div').getDOMNode().style.boxShadow).to.eql('0 0 5px #c7c7c7');
			expect(wrapper.find('div').getDOMNode().style.background).to.eql('white');
			expect(wrapper.find('div').getDOMNode().style.opacity).to.eql('0');
		});
	});
});
