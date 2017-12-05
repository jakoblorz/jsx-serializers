# jsx-serializers
collection of jsx serializers which can be injected by using the jsxstatement when compiling with babel

## Usage
This module does currently only work with [babel](http://babeljs.io). Install the necessary presets:
```bash
npm install --save-dev babel-cli babel-polyfill babel-preset-env babel-preset-react
```
Then create a `.babelrc` file to configure the presets:
```json
{
    "presets": ["env", "react"]
}
```
Install this module:
```bash
npm install jsx-serializers --save
```
You are now ready to use the custom `jsx-serializers`:
```javascript
/** @jsx renderHTMLDomTree */ // <- specifies which rendering engine to use
import { renderHTMLDomTree } from "jsx-serializers";

const htmlUserFragment = function (_id, _name) {
    return (<div>
        <h2>{_name}</h2>
        <p>{_id}</p>
    </div>);
};
```
You can do the very same but serialize it to JSON using `renderJSONDomTree`. More serializers are soon to come.