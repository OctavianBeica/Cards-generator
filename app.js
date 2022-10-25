const newCard = document.querySelector(".new_card")
const delCard = document.querySelector(".del_card")
const saveCard = document.querySelector(".save_card")
const closeCard = document.querySelector(".close_card")
const questionInput = document.querySelector(".question_input")
const answerInput = document.querySelector(".answer_input")
const card = document.querySelector(".cards")
const createCard = document.querySelector(".create-card")

const question = document.querySelector(".question")

delCard.addEventListener("click", e => {
  e.preventDefault()
  card.removeChild(card.lastChild)
})

newCard.addEventListener("click", e => {
  console.log("dsa")
  createCard.classList.add("active")
})
closeCard.addEventListener("click", e => {
  createCard.classList.remove("active")
})
saveCard.addEventListener("click", e => {
  card.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <p class="question">${questionInput.value}</p>
   <p class="answer">${answerInput.value}</p>
 </div>`
  )

  const answer = document.querySelector(".answer")
  answer.addEventListener("click", e => {
    answer.style.visibility = "hidden"
  })
  window.addEventListener("click", e => {
    console.log(e.target)
    if (e.target.classList.contains("card")) {
      answer.style.visibility = "visible"
    }
  })
})
