const xml = document.querySelector('.b1')
const fetchWay = document.querySelector('.b2')
const axiosWay = document.querySelector('.b3')
let ouput = document.querySelector('.result')

// XMLHttpRequest

const req = new XMLHttpRequest()

req.onload = function(){
    console.log("Succes(XML)")
    const data = JSON.parse(this.responseText)
    console.log(data)
    ouput.textContent = "XMLRequest is Sucess"
}

req.onerror = function() {
    console.log("Error(XML)")
    console.log(this)
}

xml.addEventListener('click',() =>{
    req.open('GET',"https://official-joke-api.appspot.com/random_joke")
    req.send();
})

// fetch

function secondWay(api) {
    fetch(api)
    .then(res => {
        res.json().then(data => console.log("Resolved and Parsed(fetch)",data))
        ouput.textContent = "Fetch request is Success"
    })
    .catch(e => {
        console.log("Error(fetch)",e)
    })
}

fetchWay.addEventListener('click',() => {
    secondWay("https://official-joke-api.appspot.com/random_joke")
})


//axios

async function thirdWay(api) {

    await axios.get(api)
    .then(res => {
        console.log("Resolved(Axios)",res.data)
        ouput.textContent = "Axios request is Success"
    })
    .catch(e => {
        console.log("Error(Axios)",e)
    })
}
axiosWay.addEventListener('click',() => thirdWay("https://official-joke-api.appspot.com/random_joke"))