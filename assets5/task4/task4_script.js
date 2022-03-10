(() => {
    const answers = document.querySelector('.task4_answers')
    const reloadTaskBtn = document.querySelector('.task4_reloadTask')
    const checkingTaskBtn = document.querySelector('.task4_checkingTask')
    const checkTask = document.querySelector('.task4_checkTask')
    const chek_answerTxt = document.querySelector('.task4_chek_answer')
    const audioList = document.querySelectorAll('.task4_audio')

    const winVarTask = '2'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            data: "Шесть"
        },
        {
            id: 2,
            data: "Семь"
        },
        {
            id: 3,
            data: "Девять"
        }
    ]

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task4_answer_active')
                    finishAnswer.classList.remove('task4_green')
                    finishAnswer.classList.remove('task4_red')
                }
                item.classList.remove('task4_answer_active')
            })
            e.target.classList.add('task4_answer_active')
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
        finishAnswer.classList.remove('task4_answer_active')
        if (finishAnswer.getAttribute('data-id') === winVarTask) {
            finishAnswer.classList.add('task4_green')
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.classList.add('task4_red')
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
            e.innerText = `${item.data} `
            e.setAttribute('data-id', item.id)
            let audio = document.createElement('span');
            audio.innerHTML = '&#128265;'
            audio.addEventListener('click', (e) => {
                audioList[item.id - 1].play()
            })
            e.append(audio)
            e.classList.add('task4_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task4_answer')
    }

    insertAnswers(answersData)
})();