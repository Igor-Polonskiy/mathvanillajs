(() => {
    const answers = document.querySelector('.task16_answers')
    const reloadTaskBtn = document.querySelector('.task16_reloadTask')
    const checkingTaskBtn = document.querySelector('.task16_checkingTask')
    const checkTask = document.querySelector('.task16_checkTask')
    const chek_answerTxt = document.querySelector('.task16_chek_answer')

    const winVarTask16 = '1'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            data: "1"
        },
        {
            id: 2,
            data: "2"
        },
        {
            id: 3,
            data: "3"
        },
    ]

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task16_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task16_answer_active')
                    finishAnswer.classList.remove('task16_green')
                    finishAnswer.classList.remove('task16_red')
                }
                item.classList.remove('task16_answer_active')
            })
            e.target.classList.add('task16_answer_active')
            finishAnswer = e.target
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
        finishAnswer = null
    })

    checkingTaskBtn.addEventListener('click', () => {
        finishAnswer.classList.remove('task16_answer_active')
        if (finishAnswer.innerText === winVarTask16) {
            finishAnswer.classList.add('task16_green')
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.classList.add('task16_red')
            }
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
            e.classList.add('task16_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task16_answer')
    }

    insertAnswers(answersData)
})();