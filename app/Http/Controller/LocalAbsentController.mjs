import fetch from 'node-fetch'

let data = async () => {
    let data = await fetch('http://192.168.5.63:8000/api/local-absent', {
        method: 'GET'
    })
    return await data.json()
} 

data()
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err.message)
})