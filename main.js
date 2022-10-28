// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal');
modal.classList.add('hidden')
let modalMessage = document.getElementById('modal-message');
let res;
let likeBtn = document.querySelector(".like-glyph");
let likeBtnActive ;


likeBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  mimicServerCall()
  .then(
    likeBtn.classList.toggle('activated-heart'),
    likeBtnActive = document.querySelector('.activated-heart'),
    likeBtn.innerHTML = EMPTY_HEART,
    likeBtnActive.innerHTML = FULL_HEART 
  )
  .catch((error)=>{
    modal.classList.remove('hidden'),
    modalMessage.innerText = error.message,
    setTimeout(()=>{modal.classList.add('hidden')},3000)

  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
