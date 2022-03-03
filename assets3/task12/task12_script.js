(() => {
    const pencils = document.querySelector('.task12_pencils')
    const pencilsImg = document.querySelectorAll('.task12_pencilImg')
    const circleWrapper = document.querySelector('.task12_circleWrapper')
    const baloons = document.querySelectorAll('.task12_baloon')
    const reloadTaskBtn = document.querySelector('.task12_reloadTask')
    const checkingTaskBtn = document.querySelector('.task12_checkingTask')
    const checkTask = document.querySelector('.task12_checkTask')
    const chek_answerTxt = document.querySelector('.task12_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task12_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task12_pencilSelect')
            })
            e.target.classList.add('task12_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task12_baloon')) {
            e.target.closest('.task12_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task12_pencilSelect')
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
            if (item.classList.contains('task12_yellow')) {
                if (item.getAttribute('fill') === 'yellow') {
                    winVar++
                }
            }
            if (item.classList.contains('task12_green')) {
                if (item.getAttribute('fill') === 'green') {
                    winVar++
                }
            }
            if (item.classList.contains('task12_red')) {
                if (item.getAttribute('fill') === 'red') {
                    winVar++
                }
            }
            if (item.classList.contains('task12_blue')) {
                if (item.getAttribute('fill') === 'blue') {
                    winVar++
                }
            }
        })

        if (winVar === 8) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()