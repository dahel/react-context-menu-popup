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
});
