const floatButton = document.querySelector('#floatButton');
const text = document.getElementsByTagName('p');

// Function to make the text float around
function floatText() {
  for (let i = 0; i < text.length; i++) {
    text[i].style.position = 'absolute';
    text[i].style.left = Math.random() * 100 + 'vw';
    text[i].style.top = Math.random() * 100 + 'vh';
  }
}

// Add event listener to the float button
floatButton.addEventListener('click', floatText);

// Add event listener to the invisible button to stop the text from floating
const invisibleButton = document.querySelector('.invisibleButton');
invisibleButton.addEventListener('click', () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.position = 'static';
  }
});