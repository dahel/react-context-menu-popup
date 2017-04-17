import React from 'react';

import ContextMenuPopup from '../../src/components/ContextMenuPopup';
import ContextMenuPopupTrigger from '../../src/components/ContextMenuPopupTrigger';
import ContextMenuPopupOptions from '../../src/components/ContextMenuPopupOptions';
import ContextMenuPopupOption from '../../src/components/ContextMenuPopupOption';

describe('ContextMenuPopup' , () => {
	it('has properly defined initial state', () => {
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger a="asdf" onClick={() => {}}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.state()).to.eql({optionsVisible: false});
	});

	it('adds proper class to root element in case it is passed as className property', () => {
		const className = 'test-class-name';
		const initialClassName = 'my-context-menu-popup';

		const wrapper = mount(
			<ContextMenuPopup className={className}>
				<ContextMenuPopupTrigger onClick={() => {}}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('div').first().hasClass(className)).to.equal(true);
		expect(wrapper.find('div').first().hasClass(initialClassName)).to.equal(false);
	});

	it('adds proper class to root element in case it is not passed as className property', () => {
		const initialClassName = 'my-context-menu-popup';

		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger onClick={() => {}}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('div').first().hasClass(initialClassName)).to.equal(true);
	});

	it('adds proper styles to root element in case it is passed as style property', () => {
		const style = {
			padding: '10px'
		};

		const wrapper = mount(
			<ContextMenuPopup style={style}>
				<ContextMenuPopupTrigger onClick={() => {}}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('div').first().getDOMNode().style.position).to.eql('relative');
		expect(wrapper.find('div').first().getDOMNode().style.padding).to.eql('10px');
	});

	it(`overwrites css 'position' property in case it is passed in style object`, () => {
		const style = {
			position: 'absolute'
		};

		const wrapper = mount(
			<ContextMenuPopup style={style}>
				<ContextMenuPopupTrigger onClick={() => {}}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('div').first().getDOMNode().style.position).to.eql('absolute');
	});

	it(`adds proper styles to root element in case style 'property' is not passed`, () => {
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger onClick={() => {}}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('div').first().getDOMNode().style.cssText).to.eql('position: relative;');
	});

	it('properly renders trigger element', () => {
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger onClick={() => {}}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('div').at(1).getDOMNode().className).to.eql('context-menu-popup__trigger');
	});
	
	it('properly decorates ContextMenuPopupTrigger component', () => {
		const onClickHandler = () => {};
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger onClick={onClickHandler}/>
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		const Trigger = wrapper.props().children.filter((item) => {
			return item.type.name === 'ContextMenuPopupTrigger'
		})[0];

		console.log(Trigger.props.customOnClickHandler);
		console.log(Trigger.props.onClick);

		expect(Trigger.props.onClick).to.equal(onClickHandler);
	});

	//
	// xit('adds proper class to root element in case it is passed as className property', () => {
	// 	const className = 'test-class-name';
	// 	const wrapper = mount(
	// 		<ContextMenuPopup className={className}/>
	// 	);
	//
	// 	expect(wrapper.find('div').hasClass(className)).to.equal(true);
	// });
	//
	// xit('adds default class to root element in case there is no className passed as property', () => {
	// 	const className = 'context-menu-popup__trigger';
	// 	const wrapper = mount(
	// 		<ContextMenuPopup />
	// 	);
	//
	// 	expect(wrapper.find('div').hasClass(className)).to.equal(true);
	// });
	//
	// xit('calls customOnClickHandler after click event in case customOnClickHandler is passed as prop', () => {
	// 	const customOnClickHandler = sinon.spy();
	//
	// 	const wrapper = mount(
	// 		<ContextMenuPopup customOnClickHandler={customOnClickHandler}/>
	// 	);
	//
	// 	wrapper.find('div').simulate('click');
	//
	// 	expect(customOnClickHandler).to.have.property('callCount', 1);
	// 	expect(customOnClickHandler.calledWith()).to.eql(true);
	// });
	//
	// xit('calls customOnClickHandler after click event in case customOnClickHandler is passed as prop', () => {
	// 	const customOnClickHandler = sinon.spy();
	// 	const contextMenuPopup = {};
	//
	// 	const wrapper = mount(
	// 		<ContextMenuPopup customOnClickHandler={customOnClickHandler} contextMenuPopup={contextMenuPopup}/>
	// 	);
	//
	// 	wrapper.find('div').simulate('click');
	//
	// 	expect(customOnClickHandler.calledOnce).to.eql(true);
	// 	expect(customOnClickHandler.calledWith(contextMenuPopup)).to.eql(true);
	// });
	//
	// xit('calls customOnClickHandler after click event in case customOnClickHandler is passed as prop', () => {
	// 	const onClick = sinon.spy();
	//
	// 	const wrapper = mount(
	// 		<ContextMenuPopup onClick={onClick}/>
	// 	);
	//
	// 	wrapper.find('div').simulate('click');
	//
	// 	expect(onClick.calledOnce).to.eql(true);
	// 	expect(onClick.calledWith()).to.eql(true);
	// });
});
