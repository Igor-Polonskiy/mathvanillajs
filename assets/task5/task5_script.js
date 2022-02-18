(() => {
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')
    const inputElephant = document.querySelector('#elephants')
    const inputFlamingo = document.querySelector('#flamingos')
    const inputLegs = document.querySelector('#legs')

    const winVarTask3 = '8'

    let answer1 = 0
    let answer2 = 0
    let answer3 = 0



    inputElephant.addEventListener('change', (e) => {
        answer1 = e.target.value
    })

    inputFlamingo.addEventListener('change', (e) => {
        answer2 = e.target.value
    })

    inputLegs.addEventListener('change', (e) => {
        answer3 = e.target.value
    })

    reloadTaskBtn.addEventListener('click', () => {
        inputElephant.value = ''
        inputFlamingo.value = ''
        inputLegs.value = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === answer2 && answer2 === '2' && answer3 === '4') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()