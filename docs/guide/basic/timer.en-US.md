# Timer

The timer is used to execute a specific code within a callback function after a period of time.

## Create a temporary timer

Use the `setTimeout(fn)` function to create a temporary timer. When the time is up, the callback function passed in by `setTimeout(fn)` will be called once.

The following code will output Ping after about 1s.

```javascript
setTimeout(function() {
  console.log('Ping');
}, 1000);
```

## Create a repetitive timer

Use `setInterval(fn)` to create a repetitive timer. The callback function passed in `setInterval(fn)` will be called once every time a certain interval passes.

The following code will output Ping approximately every 1s.

```javascript
setInterval(function() {
  console.log('Ping');
}, 1000);
```

## Interrupt timer

Use `clearTimeout` to interrupt a timer that has not expired. Either a temporary timer or a repetitive timer can be interrupted.

The following code will never output Ping.

```javascript
let timer = setTimeout(function() {
  console.log('Ping');
}, 1000);
clearTimeout(timer);
```

To know which timers Kraken supports, please check [Development Document](/en-US/api/host-environment/timers).
