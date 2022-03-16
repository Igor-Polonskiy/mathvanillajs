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
                if (finishAnswer) {
                    finishAnswer.classList.remove('task11_answer_active')
                    finishAnswer.classList.remove('task11_green')
                    finishAnswer.classList.remove('task11_red')
                }
                item.classList.remove('task1_answer_active')
            })
            e.target.classList.add('task1_answer_active')
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
    })

    checkingTaskBtn.addEventListener('click', () => {
        finishAnswer.classList.remove('task1_answer_active')
        if (finishAnswer.innerText === winVarTask1) {
            finishAnswer.classList.add('task11_green')
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.classList.add('task11_red')
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
            e.classList.add('task1_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task1_answer')
    }

    insertAnswers(answersData)
})();