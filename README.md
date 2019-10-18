# React + Material-UI Templates

This project is dedicated for practicing with various 
React Material-UI Templates:
 * Basic Dashboard page
 * Basic Sign-In page
 * Premium OnePirate template
 * Premium PaperBase template
 * Premium DeviasKit template

All templates will be rendered using the Next.js for the 
sake of fastest prototyping (and as there is not backend
logic at all :) )

<p align="center">
    <img src="preview.png" width="1377" alt="Preview">
</p>

## Setup a New Project

First of all we need to install all required dependencies:
```shell script
npm init -y
npm install --save react react-dom @material-ui/core @material-ui/icons next
```

Next, add the `next.js` scripts to the `package.json`
```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

## Using Markdown Elements

Install `markdown-to-jsx` package:
```shell script
npm install --save markdown-to-jsx
```

Configure Markdown to use Material-UI components:
```jsx harmony
import React from "react";
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@material-ui/core/Typography';

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: { gutterBottom: true, variant: 'h4' },
        },
        // etc....
    },
};

export default function Markdown(props) {
    return <ReactMarkdown options={options} {...props}/>
}
```

Prepare Markdown text to be imported to the js-components. 

Install `raw-loader`:
```shell script
npm install --save raw-loader
```

Configure `Webpack` to recognize `md` files as 'raw' files. 
In our case we're using `Next.js` as a fronted framework. 
So we will need to add Webpack rules to the `next.config.js` file:
```js
// next.config.js is not transformed by Babel. So you can only use
// javascript features supported by your version of Node.js.
module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.md$/,
            loader: 'raw-loader',
        });
        return config
    },
};
```

Then we may insert compiled markdown into our components:
```jsx harmony
import React from "react";
import Markdown from "../src/components/Markdown";
import description from "../src/landing/description.md";

export default props => (
    <div>
        <Markdown>{description}</Markdown>
    </div>
);
```

## Class Composition with `clsx`

Some of the templates are using [clsx](https://github.com/lukeed/clsx) - a tiny utility to dynamically combine CSS classes. 

Installation: 
```shell script
npm install --save clsx
```

Usage:
```js
import React, {useState} from "react"
import clsx from "clsx";

export default function MyComponent() {
    const [open, setOpen] = useState(false);
    return <div className={clsx('content', open && 'open')}>Hello</div>    
}
```

## Errors

### Prop `className` did not match

##### Description
When page is reloaded the page's layout is displayed 
incorrectly and there is a Warning in the console:
```
index.js:1 Warning: Prop `className` did not match. 
Server: "MuiToolbar-root MuiToolbar-regular makeStyles-toolbar-46 MuiToolbar-gutters" 
Client: "MuiToolbar-root MuiToolbar-regular makeStyles-toolbar-1 MuiToolbar-gutters" 
    in div (created by Toolbar)
    in Toolbar (created by WithStyles(ForwardRef(Toolbar)))
    in WithStyles(ForwardRef(Toolbar)) (at pages/​index.js:40)
    in Index (created by App)
    in App
```

This is a particularly hard-to-fix bug. Here is what is know so far: 
* It happens when page is reloaded.
* It is reproducible without `next.config.js`
* It is reproducible without `.babelrc`
* It is well-known bug. See the following issues:
  * [zeit/next.js/issues/7322](https://github.com/zeit/next.js/issues/7322)
  * [styled-components/issues/1239](https://github.com/styled-components/styled-components/issues/1239)

##### Solution

Still Reproducible. 

This 
[comment](https://github.com/styled-components/babel-plugin-styled-components/issues/78#issuecomment-361160935)
 is several times mentioned as a working solution: 

The issue with exactly (?) the same error-message is raised for `babel-plugin-styled-components`
so this is probably a `babel-plugin-styled-components`'s problem. 
