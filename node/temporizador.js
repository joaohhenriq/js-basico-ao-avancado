const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 6', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000);

// const regra = new schedule.RecurrenceRule()
// regra.dayOfWeek = []