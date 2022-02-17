(() => {
    const answers = document.querySelector('.task1_answers')
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')

    const winVarTask1 = '10'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            data: "8"
        },
        {
            id: 2,
            data: "9"
        },
        {
            id: 3,
            data: "10"
        },
    ]

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task1_answer')) {
            answersItems.forEach(item => {
                item.classList.remove('answer_active')
            })
            e.target.classList.add('answer_active')
            finishAnswer = e.target.innerText
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''
            console.log(finishAnswer)

        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        answers.innerHTML = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
        insertAnswers(answersData)
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (finishAnswer === winVarTask1) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

    function shuffleArr(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    function insertAnswers(arr) {
        shuffleArr(arr)
        arr.forEach(item => {
            let e = document.createElement('div')
            e.innerText = `${item.data}`
            e.classList.add('task1_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task1_answer')
    }

    insertAnswers(answersData)
})();