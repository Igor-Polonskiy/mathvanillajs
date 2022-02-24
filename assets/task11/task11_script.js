(() => {
    const answers = document.querySelector('.task11_answers')
    const lettersField = document.querySelector('.task11_letters')
    const line1 = document.querySelector('.task11_line1')
    const line2 = document.querySelector('.task11_line2')
    const reloadTaskBtn = document.querySelector('.task11_reloadTask')
    const checkingTaskBtn = document.querySelector('.task11_checkingTask')
    const checkTask = document.querySelector('.task11_checkTask')
    const chek_answerTxt = document.querySelector('.task11_chek_answer')

    const winVarTask1 = '7'

    let answersItems = null
    let finishAnswer = null

    const letters = [{
            id: 1,
            letter: 'А'
        },
        {
            id: 2,
            letter: 'О'
        },
        {
            id: 3,
            letter: 'И'
        },
        {
            id: 4,
            letter: "У"
        },
        {
            id: 5,
            letter: "М"
        },
        {
            id: 6,
            letter: "С"
        },
        {
            id: 7,
            letter: "Н"
        },
        {
            id: 8,
            letter: "Р"
        },
        {
            id: 9,
            letter: "Т"
        },
        {
            id: 10,
            letter: "П"
        },

    ]

    const answersData = [{
            id: 1,
            data: "6"
        },
        {
            id: 2,
            data: "7"
        },
        {
            id: 3,
            data: "8"
        },
    ]


    letters.forEach(item => {
        let letter1 = document.createElement('div')
        letter1.innerText = item.letter
        letter1.classList.add('task11_letter')
        line1.append(letter1)
        let letter2 = document.createElement('div')
        letter2.innerText = item.letter
        letter2.classList.add('task11_letter')
        line2.append(letter2)
    })

    lettersField.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_letter')) {
            e.target.classList.toggle('task11_letter_active')
        }
    })


    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.style.borderColor = 'grey'
                }
                item.classList.remove('task11_answer_active')
            })
            e.target.classList.add('task11_answer_active')
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
        let letters = document.querySelectorAll('.task11_letter_active')
        console.log(letters)
        letters.forEach(item => {
            item.classList.remove('task11_letter_active')
        })
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (finishAnswer && finishAnswer.innerText === winVarTask1) {
            finishAnswer.style.borderColor = 'green'
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.style.borderColor = 'red'
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
            e.classList.add('task11_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task11_answer')
    }

    insertAnswers(answersData)
})();