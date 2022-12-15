function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //+'1'=> 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value="";
}

// function savePlayerConfig(event){
//     event.preventDefault(); //इससे page फिर से reload नहीं होगा|
//     const formData=new FormData(event.target); //FormData एक built-in method है जिस से हम object create कर सकते है| ये check करेगा की input आया या नहीं|
//     const enterPlayerName= formData.get('username');
//     console.log(enterPlayerName);
// }
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enterPlayerName = formData.get("username").trim();

  if (!enterPlayerName) {
    errorsOutputElement.textContent = "Please enter valid name";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enterPlayerName;
  console.dir(updatedPlayerDataElement);

  player[editedPlayer-1].name=enterPlayerName;

  closePlayerConfig();
}

