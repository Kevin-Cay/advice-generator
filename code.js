let button = document.querySelector('.dice')
let id = document.getElementById('id')
let text = document.getElementById('text')
let loader = document.querySelector('.loader')

let error = {
    slip: {
        id: 0,
        advice: "error, please try it later"
    }
}


const timer = () => {
    setInterval(myTimer, 3000)
}


//visibility:visible;
function myTimer() {
    loader.style.display = "none";
    id.style.visibility = "visible"
    text.style.visibility = "visible"
}

function hiddeText() {
    loader.style.display = "flex"
    id.style.visibility = "hidden"
    text.style.visibility = "hidden"
}

function setAdvice(data = error) {
    let slipData = data.slip
    id.textContent = `advice #${slipData.id} `
    text.textContent = `"${slipData.advice}"`
}

async function callAdvice() {
    try {
        let response = await fetch('https://api.adviceslip.com/advice')
        let data = await response.json()
        await setAdvice(data)
    } catch (error) {
        console.log(error)
    }

}

button.addEventListener('click', () => {
    hiddeText()
    timer()
    callAdvice()
})


callAdvice()
timer()