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

## Setup a New Project

First of all we need to install all required dependencies:
```shell script
npm init -y
npm install --save react react-dom @material-ui/core next
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
