# 编写测试用例

Kraken 采用的是 [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) 风格编写的测试用例。

测试用例代码使用 TypeScript 进行编写，代码存放在 `integration_tests/specs` 目录。

测试代码在运行过程中，测试框架会创建一个专用的 JS 运行环境，所有的测试用例会共享这个测试用例。

## 编写测试用例

Kraken 在测试环境中，内置了一个 [jasmine.js](https://jasmine.github.io/) 作为测试框架。因此任何 Jasmine.js 所提供的功能都可以在环境中进行使用，例如 `describe`，`it`，`expect` 等常用的函数。

除了 Jasmine 所提供的 API 之外，Kraken 还额外在测试环境内注册了一些简便的工具 API。

例如可以对当前渲染结果进行截图，并和上一次渲染结果进行像素对比的 API `matchViewportSnapshot()`。

有关全部全局 API 的代码，可以参考：[global.ts](https://github.com/openkraken/kraken/blob/main/integration_tests/runtime/global.ts)

在 `integration_tests/specs` 目录下新建任何 ts 文件和目录，就可以编写测试了。

Example:

```javascript
describe('block-in', () => {
  it('inline-003-ref', async () => {
    let div;
    div = createElement(
      'div',
        {
          style: {
            color: 'green',
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

## 验证渲染效果

Kraken 中提供了 `snapshot()` 函数可以将当前的渲染结果截屏并保存成 PNG 图片，图片的命名取决于测试用例中 `describe` 和 `it` 的值。

当生成的图片名称在本地已经存在的时候，测试框架就会对两张图片的内存进行像素对比，如果发现两张图片的渲染结果存在差异，就会导致 `snapshot()` 抛出异常，使得测试失败。

生成的图片文件都会存放在 `integration_tests/snapshots`。

## 运行测试

测试需要在 macOS 平台下运行。

在 Kraken 项目下执行 `npm test` 即可运行测试。

> 注：不同的 macOS 机型可能会出现一些快照测试不一致的情况，这取决于当前运行机器的 GPU 型号和设备驱动。  
> 目前已知为 Intel GPU 和 NVIDIA，AMD GPU 快照结果存在一点点细微的差异，但是这样依然会造成集成测试快照对比失败。

为了保证快照验证一致性，建议提交 `Pull Request` 到 [openkraken/kraken](https://github.com/openkraken/kraken)，然后使用 Kraken 团队官方的 CI 执行测试。
