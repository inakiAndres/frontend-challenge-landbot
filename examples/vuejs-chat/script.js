// Landbot core instance.
var core = new Landbot.Core({
  firebase: firebase,
  brandID: 12235,
  channelToken: 'H-116929-N86QGRNNY6QCWEU3',
  welcomeUrl: 'https://welcome.landbot.io/',
  welcome: [
    { samurai: -1, type: 'text', message: 'Type something to start a conversation with this landbot.' }
  ],
  typing_options: {
    block_custom: false,
    delay: {
      is_constant: true,
      constant: 0.5,
      max_delay: 2,
      average_human_reading_speed: 300,
    }
  },
});

// Vue app.
var chat = new Vue({
  el: '#landbot-app',
  data: {
    value: '',
    messages: {},
  },
  computed: {
    orderedMessages: function () {
      return Object
        .values(this.messages)
        .filter(messagesFilter)
        .sort((a, b) => a.timestamp - b.timestamp);
    },
    canSend: function () {
      return this.value !== '';
    },
  },
  methods: {
    submit: function (e) {
      if (this.canSend) {
        e.preventDefault();
        core.sendMessage({ message: this.value });
        this.value = '';
      }
    },
  },
});

// Scroll bottom behavior.
chat.$watch('messages', function () {
  const container = document.getElementById('landbot-messages-container');
  scrollBottom(container);
});

// New message listener.
core.pipelines.$readableSequence.subscribe(data => {
  Vue.set(chat.messages, data.key, parseMessage(data));
});

// Core initialization.
core
  .init()
  .then(data => {
    chat.messages = Object.assign(
      {},
      chat.messages,
      parseMessages(data.messages),
    );
  });


// Utils

function parseMessages(messages) {
  return Object
    .values(messages)
    .reduce((obj, next) => {
      obj[next.key] = parseMessage(next);
      return obj;
    }, {});
}

function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? 'bot' : 'user',
    timestamp: data.timestamp,
    type: data.type,
  };
}

/** Support for basic messages */
function messagesFilter(data) {
  return ['text', 'dialog'].includes(data.type);
}

function scrollBottom(container) {
  container.scrollTo({
    top: container.scrollHeight,
    behavior: 'smooth',
  });
}