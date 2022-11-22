function openPlayerConfig(){
    playConfigOverleyElement.style.display='block'
    backdropElement.style.display='block'
}
function closedPlayBtn(){
    playConfigOverleyElement.style.display='none'
    backdropElement.style.display='none'
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData =new FormData(event.target);
    const enteredPlayername=formData.get('name').trim();

    if(!enteredPlayername){//enteredPlayername ===''
        errorsOutputElement.textContent='Please Enter a valid name!'
        return;

    }

}