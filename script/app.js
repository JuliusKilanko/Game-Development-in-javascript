const playConfigOverleyElement =document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop');
const formElement=document.querySelector('form')
const errorsOutputElement=document.getElementById('config-errors')

const  editPlayer1BtnElement=document.getElementById('edit-player-1-btn')
const  editPlayer2BtnElement=document.getElementById('edit-player-2-btn')
const  editPlayer3BtnElement=document.getElementById('edit-player-3-btn')
const cancelConfigBtnElement= document.getElementById('cancel-btn-element')

 
editPlayer1BtnElement.addEventListener('click',openPlayerConfig)
editPlayer2BtnElement.addEventListener('click',openPlayerConfig)
editPlayer3BtnElement.addEventListener('click',openPlayerConfig)

cancelConfigBtnElement.addEventListener('click', closedPlayBtn)
backdropElement.addEventListener('click',closedPlayBtn)
formElement.addEventListener('submit',savePlayerConfig)