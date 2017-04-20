## react-context-menu-popup

#### Installation
```
npm install react-context-menu-popup --save
```

### Usage

Basic usage:
```
<ContextMenuPopup initialStyles={true}>     // initialStyles is used to set some styles for playing with component
    <ContextMenuPopupTrigger>               // do not pass it or set it to false if you want to style it yourself
        Click me
    </ContextMenuPopupTrigger>
    <ContextMenuPopupOptions>
        <ContextMenuPopupOption onClick={this.onFirstOptionClick}>Option 1</ContextMenuPopupOption>
        <ContextMenuPopupOption onClick={this.onSecondOptionClick}>Option 2</ContextMenuPopupOption>
    </ContextMenuPopupOptions>
</ContextMenuPopup>
```

You can determine if click on trigger element should display options list
```
<ContextMenuPopup initialStyles={true}>
    <ContextMenuPopupTrigger onClick={(contextMenuPopup) => contextMenuPopup.open()}>
        Click me
    </ContextMenuPopupTrigger>
    <ContextMenuPopupOptions>
        <ContextMenuPopupOption onClick={this.onFirstOptionClick}>Option 1</ContextMenuPopupOption>
        <ContextMenuPopupOption onClick={this.onSecondOptionClick}>Option 2</ContextMenuPopupOption>
    </ContextMenuPopupOptions>
</ContextMenuPopup>
```

You can handle every option click in one handler.
For this you have to pass id prop to every single option, this id will be passed to your handler
```
<ContextMenuPopup initialStyles={true}>
    <ContextMenuPopupTrigger>
        Click me
    </ContextMenuPopupTrigger>
    <ContextMenuPopupOptions 
    onOptionSelect={
        (optionId, contextMenuButton) => {
            console.log('optionId', optionId);
            
            contextMenuButton.close();
        }
    }>
        <ContextMenuPopupOption id="option1">Option 1</ContextMenuPopupOption>
        <ContextMenuPopupOption id="option2">Option 2</ContextMenuPopupOption>
    </ContextMenuPopupOptions>
</ContextMenuPopup>
```

#### Styling
There are some inline-defined styles, 
you can disable it by NOT passing initialStyles property (or setting it to false) to ContextMenuPopup element.

You will need to provide your own styles in this case you cas pass it as style 
property to every element or use css defined in stylesheet(check section below in this case)
```
<ContextMenuPopup initialStyles={true} style={{fontSize: '30px'}}>
    <ContextMenuPopupTrigger style={{backgroundColor: 'green', display: 'inline-block'}}>
        Click me
    </ContextMenuPopupTrigger>
    <ContextMenuPopupOptions style={{backgroundColor: 'blue', display: 'inline-block'}}>
        <ContextMenuPopupOption
            style={{border: 'solid 3px grey'}}
            hoverStyle={{border: 'solid 3px pink', color: 'white'}}
            onClick={this.onFirstOptionClick}
        >
            Option 1
        </ContextMenuPopupOption>
        <ContextMenuPopupOption
            style={{border: 'solid 3px grey'}}
            hoverStyle={{border: 'solid 3px pink', color: 'white'}}
            onClick={this.onFirstOptionClick}
            >
            Option 2
        </ContextMenuPopupOption>
    </ContextMenuPopupOptions>
</ContextMenuPopup>
```

##### class names
You can provide your own class for every element
or you can used pre-defined class names as described below (it uses BEM)
```
{/* if not provided `context-menu-popup` will be set */}
<ContextMenuPopup initialStyles={true} className="your-own-class">
    {/* if not provided `context-menu-popup__trigger` will be set */}
    <ContextMenuPopupTrigger className="your-own-class">
        Click me
    </ContextMenuPopupTrigger>
    {/* if not provided `context-menu-popup__options` will be set */}
    <ContextMenuPopupOptions className="your-own-class">
        {/* if not provided `context-menu-popup__option` will be set */}
        <ContextMenuPopupOption className="your-own-class" onClick={this.onFirstOptionClick}>
            Option 1
        </ContextMenuPopupOption>
        {/* if not provided `context-menu-popup__option` will be set */}
        <ContextMenuPopupOption className="your-own-class" onClick={this.onSecondOptionClick}>
            Option 2
        </ContextMenuPopupOption>
    </ContextMenuPopupOptions>
</ContextMenuPopup>
```

### API
When passing some function as prop: 
`<ContextMenuPopupTrigger onClick={(contextMenuPopup) => contextMenuPopup.open()}>`
in this function you will receive a contextMenuPopup instance.
It contains two methods which you should be interested in:

* show - for showing context menu options,
* hide - for hiding context menu options