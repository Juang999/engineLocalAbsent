const { AbsentDone } = require('../../../models')
const axios = require('axios')
const collect = require('collect.js')
const { response } = require('express')
const moment = require('moment')
const { json } = require('sequelize')

const data = async () => {
    let data = await AbsentDone.findAll({
        where: {
            date: moment().format('YYYY-MM-DD')
        },
        group: ['id'],
        attributes: ['id']
    })

    let promises = []

    data.forEach(theData => {
        promises.push(AbsentDone.findAll({
            where: {
                id: theData.id,
                date: moment().format('YYYY-MM-DD')
            }
        }))
    });

    let promisesResult = await Promise.all(promises)
    
    let finalResult = data.map((item, index) => {
        return {
            id: item.id,
            absent: promisesResult[index]
        }
    })

    axios.post('http://192.168.5.38:8000/api/local-absent', {
        localAbsent: JSON.stringify(finalResult)
    }).then(response => {
        console.log(response.data)
    }).catch(err => {
        console.log(err.data)
    })
}

data()
