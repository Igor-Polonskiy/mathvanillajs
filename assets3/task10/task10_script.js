(() => {
    const pencils = document.querySelector('.task10_pencils')
    const pencilsImg = document.querySelectorAll('.task10_pencilImg')
    const circleWrapper = document.querySelector('.task10_circleWrapper')
    const baloons = document.querySelectorAll('.task10_baloon')
    const reloadTaskBtn = document.querySelector('.task10_reloadTask')
    const checkingTaskBtn = document.querySelector('.task10_checkingTask')
    const checkTask = document.querySelector('.task10_checkTask')
    const chek_answerTxt = document.querySelector('.task10_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task10_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task10_pencilSelect')
            })
            e.target.classList.add('task10_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task10_baloon')) {
            e.target.closest('.task10_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task10_pencilSelect')
        })
        color = 'white'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        baloons.forEach(item => {
            if (item.classList.contains('task10_yellow')) {
                if (item.getAttribute('fill') === 'yellow') {
                    winVar++
                }
            }

            if (item.classList.contains('task10_blue')) {
                if (item.getAttribute('fill') === 'blue') {
                    winVar++
                }
            }
        })

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()