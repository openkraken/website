# Develop Kraken application with react

## Sample application

We provide a [Sample Application](https://github.com/openkraken/gallery/tree/main/demos/hello-react) to show how a React application can run on Kraken.

First, clone the code and enter the ./demos/hello-react directory.

```shell
git clone https://github.com/openkraken/samples.git
cd ./demos/hello-react
```

Install dependencies and package.

```shell
npm i
npm run build
```

Run the packaged bundle through [Kraken Cli](https://www.npmjs.com/package/@openkraken/cli).

```shell
kraken ./build/static/js/bundle.js
```

<img src="https://img.alicdn.com/imgextra/i3/O1CN014QtfFz1Kcm0cIu7sQ_!!6000000001185-2-tps-375-834.png" class="preview-image" width="300px"></img >

## Initialize a React project

React provides an official [Create React App](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app) scaffolding tool to initialize a React project. Then developers only need to make some engineering transformations to the project to make the React project run smoothly on Kraken.

Since Kraken does not have HTML, our root node must be `document.body`. Therefore, developers need to change the input parameter of `ReactDOM.render` to `document.body` in the entry file.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.body,
);
```

Since Kraken does not support Script tags, you need to configure webpack so that the bundle is included in a package.

In addition, it should be noted that currently Kraken only supports inline styles, so we recommend using the following methods to write `CSS styles`.

```js
const styles = {
  App: {
    textAlign: 'center',
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: 'white',
  },
};

function App() {
  return (
    <div style={styles.App}>
      <div style={styles.AppHeader}>Demo</div>
    </div>
  );
}

export default App;
```

## State Management

A complex interactive dynamic application often requires state management to manage data and UI state.

In React applications, we can use [State Hook](https://zh-hans.reactjs.org/docs/hooks-state.html) to manage the state in our application as follows.

**Example:**

```js
import { useState } from 'react';

function Example() {
  // Declare a state variable called "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Of course, this method will cause the state to be dispersed among various components, and different components need to communicate to ensure data transmission and synchronization. When the developed application becomes larger, the complexity will also increase significantly, which is not conducive for developers to do state management in large-scale applications. For large applications, we recommend using a state management library of class `Flux` such as [Redux](https://redux.js.org/).
