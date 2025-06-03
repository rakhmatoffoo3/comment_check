
const plusBtn = div.querySelector('.plus-btn');
const minusBtn = div.querySelector('.minus-btn');
const scoreVal = div.querySelector('.score-value');

plusBtn.addEventListener('click', () => {
  scoreVal.textContent = +scoreVal.textContent + 1;
});

minusBtn.addEventListener('click', () => {
  const score = +scoreVal.textContent;
  if (score > 0) scoreVal.textContent = score - 1;
});

container.appendChild(div);

function changeVote(id, value) {
  const comment = document.getElementById(id);
  const voteCountSpan = comment.querySelector('.vote-count');
  let currentVotes = parseInt(voteCountSpan.textContent);
  voteCountSpan.textContent = currentVotes + value;
}

function deleteComment(id) {
  const comment = document.getElementById(id);
  comment.remove();
}