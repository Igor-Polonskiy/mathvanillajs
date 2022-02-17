(() => {
    const reloadTaskBtn = document.querySelector('.task3_reloadTask')
    const checkingTaskBtn = document.querySelector('.task3_checkingTask')
    const checkTask = document.querySelector('.task3_checkTask')
    const chek_answerTxt = document.querySelector('.task3_chek_answer')
    const inputBlue = document.querySelector('#task3_blue')
    const inputYellow = document.querySelector('#task3_yellow')

    const winVarTask3 = '8'

    let answer1 = 0
    let answer2 = 0

    inputBlue.addEventListener('change', (e) => {
        answer1 = e.target.value
        console.log(answer1)
    })
    inputYellow.addEventListener('change', (e) => {
        answer2 = e.target.value
        console.log(answer1)
    })

    reloadTaskBtn.addEventListener('click', () => {
        inputBlue.value = ''
        inputYellow.value = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        console.log(answer1, answer1, winVarTask3)
        if (answer1 === answer2 && answer2 === winVarTask3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()