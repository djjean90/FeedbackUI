const container = document.querySelector('#container');
const feedbackContainer = document.querySelector('.feedback-container');
const feedbacks = document.querySelectorAll('.feedback-info');
const sendBtn = document.querySelector('#send');

let selectedFeedback = 'Satisfied';

feedbackContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('feedback-info')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedFeedback = e.target.nextElementSibling.innerText;
  }
});

function removeActive() {
  feedbacks.forEach((feedback) => feedback.classList.remove('active'));
}

sendBtn.addEventListener('click', () => {
  container.innerHTML = `
    <i class='fas fa-heart'></i>
    <strong> Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedFeedback}</strong>
    <p>We'll use your feedback to improve our customer service</p>
    `;
});
