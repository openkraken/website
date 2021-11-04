# Develop Kraken application with Rax

## Initialize the project

Based on the `npm init rax` command, you can quickly create a Rax multi-terminal application (note: npm version needs to be >= 6.1.0):

```shell
npm init rax <YourProjectName>
```

In the process of initializing the project, please select `App`, `Kraken cross-terminal application`, and then select `JavaScript` or `TypeScript` according to your preference.

Start the dev server after creating the front-end project directory according to the process:

```shell
cd <YourProjectName>
npm install
npm start
```

Will get the following output

```shell
> @rax-materials/scaffolds-app-js@0.1.0 start
> rax-app start

[Web] Development server at:
http://localhost:3333/home.html
http://[your.ip]:3333/home.html

[Kraken] Development server at:
http://[your.ip]:3333/kraken/home.js

[Kraken] Run Play Kraken App:
kraken http://[your.ip]:3333/kraken/home.js

```

## Run

By executing the above command, you can use Kraken to open the Rax application.

```shell
kraken http://[your.ip]:3333/kraken/home.js
```

<img class="preview-image" src="//img.alicdn.com/imgextra/i3/O1CN01dfJxos1lnl8Pzjvwa_!!6000000004864-2-tps-720-1324.png" width="300px"></img>

## State Management

A complex interactive dynamic application often requires state management to manage data and UI state.

In the Rax application, we can use [State Hook](https://zh-hans.reactjs.org/docs/hooks-state.html) to manage the state in our application as follows.

**Example:**

```js
import { useState } from 'rax';

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

Of course, this method will cause the state to be dispersed among various components, and different components need to communicate to ensure data transmission and synchronization. When the developed application becomes larger, the complexity will also increase significantly, which is not conducive for developers to do state management in large-scale applications. For large-scale applications, we recommend the state management library [icestore](https://github.com/ice-lab/icestore) officially provided by Rax.
