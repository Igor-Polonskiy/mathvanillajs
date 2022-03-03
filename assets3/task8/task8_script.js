(() => {
    const pencils = document.querySelector('.task8_pencils')
    const pencilsImg = document.querySelectorAll('.task8_pencilImg')
    const circleWrapper = document.querySelector('.task8_circleWrapper')
    const baloons = document.querySelectorAll('.task8_baloon')
    const reloadTaskBtn = document.querySelector('.task8_reloadTask')
    const checkingTaskBtn = document.querySelector('.task8_checkingTask')
    const checkTask = document.querySelector('.task8_checkTask')
    const chek_answerTxt = document.querySelector('.task8_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task8_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task8_pencilSelect')
            })
            e.target.classList.add('task8_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task8_baloon')) {
            e.target.closest('.task8_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task8_pencilSelect')
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
            if (item.classList.contains('task8_yellow')) {
                if (item.getAttribute('fill') === 'yellow') {
                    winVar++
                }
            }

            if (item.classList.contains('task8_brown')) {
                if (item.getAttribute('fill') === 'brown') {
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