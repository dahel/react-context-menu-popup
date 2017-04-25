import React from 'react';

import ContextMenuPopup from '../../src/components/ContextMenuPopup';
import ContextMenuPopupTrigger from '../../src/components/ContextMenuPopupTrigger';
import ContextMenuPopupOptions from '../../src/components/ContextMenuPopupOptions';
import ContextMenuPopupOption from '../../src/components/ContextMenuPopupOption';

describe('ContextMenuPopup' , () => {
	it('has properly defined initial state', () => {
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger />
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
				<ContextMenuPopupTrigger />
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
				<ContextMenuPopupTrigger />
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
				<ContextMenuPopupTrigger />
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
				<ContextMenuPopupTrigger />
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('div').first().getDOMNode().style.cssText).to.eql('position: relative;');
	});

	it('properly renders ContextMenuPopupTrigger element', () => {
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger />
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		expect(wrapper.find('.context-menu-popup__trigger')).to.have.length(1);
	});
	
	it('renders ContextMenuPopupOptions component in case this.state.optionsVisible is true', () => {
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger />
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		wrapper.instance().setState({optionsVisible: true});

		expect(wrapper.find('.context-menu-popup__options')).to.have.length(1);
	});

	it('does not render ContextMenuPopupOptions component in case this.state.optionsVisible is false', () => {
		const wrapper = mount(
			<ContextMenuPopup>
				<ContextMenuPopupTrigger />
				<ContextMenuPopupOptions>
					<ContextMenuPopupOption />
				</ContextMenuPopupOptions>
			</ContextMenuPopup>
		);

		wrapper.instance().setState({optionsVisible: false});

		expect(wrapper.find('.context-menu-popup__options')).to.have.length(0);
	});

	describe('methods', () => {
	    describe('close', () => {
	        it('sets state.optionsVisible to false', () => {
		        const wrapper = mount(
			        <ContextMenuPopup>
				        <ContextMenuPopupTrigger />
				        <ContextMenuPopupOptions>
					        <ContextMenuPopupOption />
				        </ContextMenuPopupOptions>
			        </ContextMenuPopup>
		        );

		        wrapper.instance().setState({optionsVisible: true});

		        wrapper.instance().close();

		        expect(wrapper.state('optionsVisible')).to.eql(false);
	        });
	    });

		describe('open', () => {
			it('sets state.optionsVisible to true', () => {
				const wrapper = mount(
					<ContextMenuPopup>
						<ContextMenuPopupTrigger />
						<ContextMenuPopupOptions>
							<ContextMenuPopupOption />
						</ContextMenuPopupOptions>
					</ContextMenuPopup>
				);

				wrapper.instance().setState({optionsVisible: false});

				wrapper.instance().open();

				expect(wrapper.state('optionsVisible')).to.eql(true);
			});
		});

		describe('onOptionsListMouseLeave', () => {
			it('sets state.optionsVisible to false', () => {
				const wrapper = mount(
					<ContextMenuPopup>
						<ContextMenuPopupTrigger />
						<ContextMenuPopupOptions>
							<ContextMenuPopupOption />
						</ContextMenuPopupOptions>
					</ContextMenuPopup>
				);

				wrapper.instance().setState({optionsVisible: true});

				wrapper.instance().onOptionsListMouseLeave();

				expect(wrapper.state('optionsVisible')).to.eql(false);
			});
		});

		describe('onTriggerClick', () => {
			it('sets state.optionsVisible to true', () => {
				const wrapper = mount(
					<ContextMenuPopup>
						<ContextMenuPopupTrigger />
						<ContextMenuPopupOptions>
							<ContextMenuPopupOption />
						</ContextMenuPopupOptions>
					</ContextMenuPopup>
				);

				wrapper.instance().setState({optionsVisible: false});

				wrapper.instance().onTriggerClick();

				expect(wrapper.state('optionsVisible')).to.eql(true);
			});
		});
	});
});
