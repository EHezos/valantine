document.addEventListener("DOMContentLoaded", function() {
    const valentineQuestion = document.getElementById('valentineQuestion');
    const valentineImage = document.querySelector('#content img');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
  
    noButton.addEventListener('click', function() {
      let buttonText = noButton.textContent.trim();
  
      switch(buttonText) {
        case 'No':
          noButton.textContent = 'Please';
          break;
        case 'Please':
          noButton.textContent = 'No..';
          break;
        case 'No..':
            noButton.textContent = 'Stop';
          break;
        case 'Stop':
            noButton.remove();
            break;
      }
      yesButton.style.width = (parseInt(yesButton.style.width || '120') + 10) + 'px';
      yesButton.style.height = (parseInt(yesButton.style.height || '40') + 5) + 'px';
      yesButton.style.fontSize = (parseInt(yesButton.style.fontSize || '16') + 1) + 'px';
  
      noButton.style.width = (parseInt(noButton.style.width || '120') - 10) + 'px';
      noButton.style.height = (parseInt(noButton.style.height || '40') - 5) + 'px';
      noButton.style.fontSize = (parseInt(noButton.style.fontSize || '16') - 1) + 'px';
    });
  
    yesButton.addEventListener('click', function() {
      // Change the image source
      valentineImage.src = 'happy.gif'; // Replace 'new_valentine_image.jpg' with the path to your new image
      valentineQuestion.textContent = 'See you babyyyy at 14 Feb';
  
      // Remove all buttons
      yesButton.remove();
      noButton.remove();
    });
  
    // Remove the hidden class after the sliding animation is complete
    document.getElementById('sliding-window').addEventListener('animationend', function() {
      valentineQuestion.classList.remove('hidden');
    });
  });
  