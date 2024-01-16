let click = document.getElementById("click")

submit1.addEventListener("click", function() {
    isimYeni1.innerHTML = isim1.value 
    oyuncuismi1.innerHTML = ""
})

submit2.addEventListener("click", function() {
    isimYeni2.innerHTML = isim2.value
    oyuncuismi2.innerHTML = ""
})

click.addEventListener("click", function() {
    let oyuncu1 = isimYeni1.textContent
    let oyuncu2 = isimYeni2.textContent
    let randomNumber1 = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber1)
    let randomNumber2 = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber2)
    if (randomNumber1==1) {
        img1.src = "./images/dice1.png"
    }
    else if (randomNumber1==2) {
        img1.src = "./images/dice2.png"
    }
    else if (randomNumber1==3) {
        img1.src = "./images/dice3.png"
    }
    else if (randomNumber1==4) {
        img1.src = "./images/dice4.png"
    }
    else if (randomNumber1==5) {
        img1.src = "./images/dice5.png"
    }
    else if (randomNumber1==6) {
        img1.src = "./images/dice6.png"
    }

    if (randomNumber2==1) {
        img2.src = "./images/dice1.png"
    }
    else if (randomNumber2==2) {
        img2.src = "./images/dice2.png"
    }
    else if (randomNumber2==3) {
        img2.src = "./images/dice3.png"
    }
    else if (randomNumber2==4) {
        img2.src = "./images/dice4.png"
    }
    else if (randomNumber2==5) {
        img2.src = "./images/dice5.png"
    }
    else if (randomNumber2==6) {
        img2.src = "./images/dice6.png"
    }

    if (randomNumber1 > randomNumber2) {
        click.innerHTML = `🚩 ${oyuncu1} Kazandı.`
    }
    else if (randomNumber1 < randomNumber2) { 
        click.innerHTML = `${oyuncu2} 🚩 Kazandı.`
    }
    else if (randomNumber1 = randomNumber2) {
        click.innerHTML = "Berabere! Tıkla ve tekrar dene!"
    }
}
)
