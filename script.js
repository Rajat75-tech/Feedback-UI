const ratingElement = document.querySelectorAll('.ratings');
const btnElement = document.querySelector('#btn');
const container = document.querySelector('.container');

let selectedRating = null;

ratingElement.forEach(rating => {
  rating.addEventListener("click", () =>{
    ratingElement.forEach(r => r.classList.remove('active'));

    rating.classList.add('active');
    selectedRating = rating.querySelector('small').innerText;
  });
});

btnElement.addEventListener("click", () =>{
  if(!selectedRating) {
    alert('Please select a rating before submitting your review.');
    return;
  }

  container.innerHTML = `
  <h4>Thank you!</h4><br>
  <h4>Feedback: <strong>${selectedRating}</strong></h4><br>
  <p>We'll use your feedback to improve our customer support.</p>
  `;
});