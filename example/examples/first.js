import React, { Component } from 'react';

import {
    ContextMenuPopup,
    ContextMenuPopupOptions,
    ContextMenuPopupOption,
    ContextMenuPopupTrigger
} from '../../src/index';

const ALBUMS = [
    {
        id: 'siamese_dream',
        name: 'Smashing Pumpkins - Siamese Dream'
    },
    {
        id: 'amnesiac',
        name: 'Radiohead - Amnesiac'
    },
    {
        id: 'funeral',
        name:  'Arcade Fire - Funeral'
    },
    {
        id: 'kid_a',
        name: 'Radiohead - Kid A'
    },
    {
        id: 'white_album',
        name:  'The Beatles - White Album'
    },
    {
        id: 'closer',
        name:  'Joy Division - Closer'
    },
    {
        id: 'blur1',
        name:  'Blur - The Great Escape'
    },
    {
        id: 'blur2',
        name:  'Blur - Blur'
    },
    {
        id: 'modest_mouse1',
        name:  'Modest Mouse - The Moon & Antarctica'
    },
    {
        id: 'modest_mouse2',
        name:  'Modest Mouse - Good News for People Who Love Bad News'
    }
];

export default class FirstExample extends Component {
    constructor () {
        super();
    }

    // class names
    // you can provide your own class for every element
    // or you can used pre-defined class names as described below (it uses BEM)
    render () {
        const todos = ALBUMS.map(this.renderAlbumItem.bind(this));

        return <div className="first-example album-list">
            {todos}
        </div>
    }

    renderAlbumItem(album) {
        return <li className="album-list__item" key={album.id}>
            {album.name}
            {this.renderContextMenuPopup(album.id)}
        </li>
    }

    renderContextMenuPopup(itemId) {
        return <div>
            <ContextMenuPopup initialStyles={true}>
                <ContextMenuPopupTrigger>
                    <div className="menu-trigger">
                        <div className="menu-trigger__square"></div>
                        <div className="menu-trigger__square menu-trigger__square--second"></div>
                        <div className="menu-trigger__square menu-trigger__square--third"></div>
                    </div>
                </ContextMenuPopupTrigger>
                <ContextMenuPopupOptions>
                    <ContextMenuPopupOption onClick={this.onFirstOptionClick.bind(this, itemId)}>
                        Option 1
                    </ContextMenuPopupOption>
                    <ContextMenuPopupOption onClick={this.onSecondOptionClick.bind(this, itemId)}>
                        Option 2
                    </ContextMenuPopupOption>
                </ContextMenuPopupOptions>
            </ContextMenuPopup>
        </div>
    }

    onFirstOptionClick(itemId, contextMenuButton) {
        console.log('onFirstOptionClick()', itemId);

        setTimeout(function () {
            alert('Option 1 selected');
        }, 1);
    }

    onSecondOptionClick(itemId, contextMenuButton) {
        console.log('onSecondOptionClick()', itemId);

        contextMenuButton.close();

        setTimeout(function () {
            alert('Option 2 selected');
        }, 1);
    }

}