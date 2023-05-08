document.addEventListener('DOMContentLoaded', () => {
  const emojiContainer = document.querySelector('.emoji-container');
  const emojis = ['😀', '😁', '😂', '🤣', '😃'];

  function createEmojiElement(emoji) {
    const emojiElement = document.createElement('span');
    emojiElement.classList.add('emoji', 'noselect');
    emojiElement.textContent = emoji;
    return emojiElement;
  }

  function createCounterElement() {
    const counterElement = document.createElement('span');
    counterElement.classList.add('counter', 'noselect');
    counterElement.textContent = '0';
    return counterElement;
  }

  function handleEmojiClick(emojiWrapper) {
    const counter = emojiWrapper.querySelector('.counter');
    counter.textContent = parseInt(counter.textContent) + 1;
  }

  emojis.forEach(emoji => {
    const emojiWrapper = document.createElement('div');
    emojiWrapper.classList.add('emoji-wrapper');

    const emojiElement = createEmojiElement(emoji);
    const counterElement = createCounterElement();

    emojiWrapper.appendChild(emojiElement);
    emojiWrapper.appendChild(counterElement);

    emojiWrapper.addEventListener('click', () => handleEmojiClick(emojiWrapper));

    emojiContainer.appendChild(emojiWrapper);
  });
});
