# Handling page jumps

In many businesses, there will be scenes where the page jumps, that is, the user clicks a place on the page to trigger the page jump.

On the browser, the page jump is achieved by the browser by jumping to a new Tab page, or directly refreshing the current page. On the client, the page will first perform a client switching animation, and then jump to a new page.

Currently Kraken supports three types of jump calls in the JavaScript environment:

1. Click to jump by creating an `a` tag
2. Jump by calling `window.open`
3. Jump by assigning a value to `location.href`

Kraken provides related designs that allow users to customize the jump logic.

## Control custom jumps in Dart

For example, run the following JavaScript code in Kraken

```javascript
const text = document.createTextNode('Click me and navigate to b.');
const a = document.createElement('a');
a.href = 'b.js';
a.style.display = 'block';

const c = document.createElement('a');
c.href = 'c.js';
c.style.display = 'block';
c.appendChild(document.createTextNode('Click me and nothing happened.'));
const p = document.createElement('p');
p.style.textAlign = 'center';
a.appendChild(text);
p.appendChild(a);
p.appendChild(c);
document.body.appendChild(p);
```

Next, we add the implementation of the corresponding logic in the Dart layer. Here, a KrakenNavigationDelegate object is created to handle the jump logic.

You can set the callback function to be executed after the page jumps by calling the `setDecisionHandler()` method. If the callback function returns `KrakenNavigationActionPolicy.allow`, then Kraken will jump.
If you return to `KrakenNavigationActionPolicy.cancel`, the jump will be blocked and the execution of the jump action will be cancelled.

```dart
KrakenNavigationDelegate navigationDelegate = KrakenNavigationDelegate();
navigationDelegate.errorHandler = (Object error, Object stack) {};
navigationDelegate.setDecisionHandler((KrakenNavigationAction action) async {
  print(action);
  if (action.target =='b.js') {
    return KrakenNavigationActionPolicy.allow;
  }
  return KrakenNavigationActionPolicy.cancel;
});

Kraken kraken = Kraken(
  bundlePath:'assets/bundle.js',
  navigationDelegate: navigationDelegate,
);

```

Therefore, in this page, clicking the text in the first line will trigger the page jump, but clicking the text in the second line will cause nothing to happen.

## Control custom jumps in iOS / Android

It is not yet supported and will be provided in the future. At this stage, please use Dart to control custom jumps.
