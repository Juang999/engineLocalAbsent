const { Car, AbsentDone } = require('../../../models')
const moment = require('moment')

let data = async () => {
    try {
        let result = [];

        for (let index = 0; index < 150; index++) {
            let date = new Date()

            let setRandomDate = Math.floor(Math.random() * date)
            let getRandomDate = new Date(setRandomDate)
    
            let createData = await AbsentDone.create({
                    id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    date: getRandomDate,
                    time: getRandomDate.toLocaleTimeString('Id'),
                    datetime: getRandomDate,
                    tgl_proses: '2020-10-08',
                    proses_tarik: 'auto'
                })

            result.push(createData)
        }
    
        return result
    } catch (error) {
        return error.message
    }
}

data().then(result => {
    console.log(result)
}).catch(err => {
    console.log(err.message)
})

let date = moment().locale('Id').format('L')
let date2 = moment().format('YYYY-MM-DD')

console.log(date2 == date)