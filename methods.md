# Methods
- `init`. Core initialization. Returns a Promise that resolves with a bunch of initial messages, corresponding to "welcome" messages or previous conversation messages.
```javascript
core.init().then(function (data) {
  console.log(data.messages);
});
```

- `sendMessage`. Send a message. See [messages](./messages) to get more info about landbot communication.
```javascript
core.sendMessage({ message: 'Hey bro!' });
```

- `destroy`. Remove all database listeners. A destroyed core can be initialized again.

- `getLastMessages`. Retrieve last database messages.
```javascript
core
  .getLastMessages(25) // Get last 25 messages
  .then(function (data) {
    console.log(data);
  });
```