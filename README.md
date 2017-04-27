## react-context-menu-popup

Simple, mobile friendly, window adjustable context menu popup for react-based web apps

<img src="https://cloud.githubusercontent.com/assets/1887361/25500914/1cb7e6b8-2b91-11e7-9965-899263952147.gif"><img style="padding-bottom: 30px;" src="https://cloud.githubusercontent.com/assets/1887361/25501107/cec319a4-2b91-11e7-9fd4-eac3fc969b86.gif">

#### Installation
```
npm install react-context-menu-popup --save
```

### Usage
Fell free to copy every code snippet here (probably you want to copy it into `render` method of your component)
Basic usage:
```
{/*initialStyles is used to set some styles for playing with component*/}
{/*do not pass it or set it to false if you want to style it yourself*/}
<ContextMenuPopup initialStyles={true}>
    <ContextMenuPopupTrigger>
        Click me
    </ContextMenuPopupTrigger>
    <ContextMenuPopupOptions>
        <ContextMenuPopupOption onClick={(contextMenuPopup) => {
            console.log('first option clicked!');
            contextMenuPopup.close();
        }}>Option 1</ContextMenuPopupOption>
        <ContextMenuPopupOption onClick={(contextMenuPopup) => {
            console.log('second option clicked!');
            contextMenuPopup.close();
        }}>Option 2</ContextMenuPopupOption>
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
        <ContextMenuPopupOption onClick={(contextMenuPopup) => {
            console.log('first option clicked!');
            contextMenuPopup.close();
        }}>Option 1</ContextMenuPopupOption>
        <ContextMenuPopupOption onClick={(contextMenuPopup) => {
            console.log('second option clicked!');
            contextMenuPopup.close();
        }}>Option 2</ContextMenuPopupOption>
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
                console.log('optionId:', optionId);

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
 <ContextMenuPopup initialStyles={true} style={{fontSize: '15px', margin: '50px'}}>
    <ContextMenuPopupTrigger style={{backgroundColor: 'green', color: 'white', cursor: 'pointer', padding: '10px', display: 'inline-block'}}>
        Click me
    </ContextMenuPopupTrigger>
    <ContextMenuPopupOptions style={{backgroundColor: 'grey', display: 'inline-block'}}>
        <ContextMenuPopupOption
            style={{border: 'solid 3px grey', padding: '10px'}}
            hoverStyle={{border: 'solid 3px white', color: 'white'}}
            onClick={(contextMenuPopup) => {
                console.log('first option clicked!');
                contextMenuPopup.close();
            }}
        >
            Option 1
        </ContextMenuPopupOption>
        <ContextMenuPopupOption
            style={{border: 'solid 3px grey', padding: '10px'}}
            hoverStyle={{border: 'solid 3px white', color: 'white'}}
            onClick={(contextMenuPopup) => {
                console.log('second option clicked!');
                contextMenuPopup.close();
            }}
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