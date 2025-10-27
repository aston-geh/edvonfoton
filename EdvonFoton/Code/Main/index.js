const sportButtons = document.querySelectorAll('.SportSelect .selectionbuttons');
const dateButtons = document.querySelectorAll('.DateSelect .selectionbuttons:not(#BackButton)');
const backButton = document.getElementById('BackButton');
const sportSelectDiv = document.querySelector('.SportSelect');
const dateSelectDiv = document.querySelector('.DateSelect');

let sport = "";
let datum = "";

// Sport buttons
sportButtons.forEach(button => {
  button.addEventListener('click', () => {
    sport = button.textContent;

    sportSelectDiv.classList.add('fade-out');

    setTimeout(() => {
      sportSelectDiv.style.display = 'none';
      sportSelectDiv.classList.remove('fade-out');

      // Make DateSelect visible before starting fade-in
      dateSelectDiv.style.display = 'block';
      dateSelectDiv.classList.add('fade-in');

      setTimeout(() => {
        dateSelectDiv.classList.remove('fade-in');
      }, 300);
    }, 300);
  });
});


// Date buttons
dateButtons.forEach(button => {
  button.addEventListener('click', () => {
    datum = button.textContent;
    console.log("Selected sport:", sport);
    console.log("Selected date:", datum);
  });
});

// Back button
backButton.addEventListener('click', () => {
  dateSelectDiv.classList.add('fade-out');

  setTimeout(() => {
    dateSelectDiv.style.display = 'none';
    dateSelectDiv.classList.remove('fade-out');

    sportSelectDiv.style.display = 'block';
    sportSelectDiv.classList.add('fade-in');

    setTimeout(() => {
      sportSelectDiv.classList.remove('fade-in');
    }, 300);
  }, 300);
});
