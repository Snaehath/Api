// XMLHttpRequest

// const req = new XMLHttpRequest()

// req.onload = function(){
//     console.log("Succes")
//     const data = JSON.parse(this.responseText)
//     console.log(data)
// }

// req.onerror = function() {
//     console.log("Error")
//     console.log(this)
// }

// req.open('GET',"https://official-joke-api.appspot.com/random_joke")
// req.send();

// fetch

// fetch("https://official-joke-api.appspot.com/random_joke")
// .then(res => {
//     res.json().then(data => console.log("Resolved and Parsed",data))
// })
// .catch(e => {
//     console.log("Error",e)
// })

//axios

axios.get("https://official-joke-api.appspot.com/random_joke")
.then(res => {
    console.log("Resolved",res.data)
})
.catch(e => {
        console.log("Error",e)
    })