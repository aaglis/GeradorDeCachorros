const containerDog = document.querySelector(".cardDogGenerator");
const buttonDog = document.querySelector(".button-dog");
console.log(containerDog);
console.log(buttonDog);

buttonDog.addEventListener("click", generateDogImage);

function generateDogImage() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        generateDogImage();
      } else {
        containerDog.innerHTML = `<img src="${data.url}"/>`;
      }
    });
}

// dark and light mode

const darkColor = ['#121212', '#1e1e1e', '#000000', '#444444']
const lightColor = ['white','aliceblue']

document.querySelector('#switch').addEventListener('click', changeColorMode)

function changeColorMode() {
  if(this.checked) {
    document.body.style.setProperty('--corPrimaria', darkColor[0])
    document.body.style.setProperty('--corSecundaria', darkColor[1])
    document.body.style.setProperty('--corBotao', darkColor[3])
    document.body.style.setProperty('--corTexto', lightColor[0])
    document.body.style.setProperty('--corBox', lightColor[0])
    
  }
  else {
    document.body.style.setProperty('--corPrimaria', lightColor[0])
    document.body.style.setProperty('--corSecundaria', lightColor[1])
    document.body.style.setProperty('--corBotao', lightColor[0])
    document.body.style.setProperty('--corTexto', darkColor[2])
    document.body.style.setProperty('--corBox', darkColor[2])
  }
}