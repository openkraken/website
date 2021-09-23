# Writing test cases

Kraken uses test cases written in the style of [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development).

The test case code is written in TypeScript, and the code is stored in the `integration_tests/specs` directory.

When the test code is running, the test framework will create a dedicated JS runtime environment, and all test cases will share this test case.

## Writing test cases

Kraken built a [jasmine.js](https://jasmine.github.io/) as a test framework in the test environment. Therefore, any function provided by Jasmine.js can be used in the environment, such as commonly used functions such as `describe`, `it`, and `expect`.

In addition to the APIs provided by Jasmine, Kraken also registered some simple tool APIs in the test environment.

For example, the API `matchViewportSnapshot()` that can take a screenshot of the current rendering result and compare the pixel with the last rendering result.

For the code of all global APIs, please refer to: [global.ts](https://github.com/openkraken/kraken/blob/main/integration_tests/runtime/global.ts)

Create any ts files and directories in the `integration_tests/specs` directory, and you can write tests.

Example:

```javascript
describe('block-in', () => {
  it('inline-003-ref', async () => {
    let div;
    div = createElement(
      'div',
        {
          style: {
            color:'green',
          },
        },
        [createText(`There should be no red.`)]
      );
      BODY.appendChild(div);

      await snapshot();
    });
  }
});
```

## Verify the rendering effect

Kraken provides the `snapshot()` function to take a screenshot of the current rendering result and save it as a PNG image. The name of the image depends on the values ​​of `describe` and `it` in the test case.

When the generated image name already exists locally, the test framework will compare the memory of the two images by pixel. If there is a difference in the rendering results of the two images, it will cause the `snapshot()` to throw an exception, making The test failed.

The generated image files will be stored in `integration_tests/snapshots`.

## Run the test

The test needs to be run on the macOS platform.

Execute `npm test` under the Kraken project to run the test.

> Note: Different macOS models may have some inconsistencies in the snapshot test, depending on the GPU model and device driver of the currently running machine.
> Currently known as Intel GPU and NVIDIA, AMD GPU snapshot results are slightly different, but this will still cause integration test snapshot comparison failure.

In order to ensure the consistency of snapshot verification, it is recommended to submit a `Pull Request` to [openkraken/kraken](https://github.com/openkraken/kraken), and then use the official CI of the Kraken team to perform the test.
