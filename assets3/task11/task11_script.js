(() => {
    const pencils = document.querySelector('.task11_pencils')
    const pencilsImg = document.querySelectorAll('.task11_pencilImg')
    const circleWrapper = document.querySelector('.task11_circleWrapper')
    const baloons = document.querySelectorAll('.task11_baloon')
    const reloadTaskBtn = document.querySelector('.task11_reloadTask')
    const checkingTaskBtn = document.querySelector('.task11_checkingTask')
    const checkTask = document.querySelector('.task11_checkTask')
    const chek_answerTxt = document.querySelector('.task11_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task11_pencilSelect')
            })
            e.target.classList.add('task11_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task11_baloon')) {
            e.target.closest('.task11_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task11_pencilSelect')
        })
        color = 'grey'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        baloons.forEach(item => {
            if (item.classList.contains('task11_yellow')) {
                if (item.getAttribute('fill') === 'yellow') {
                    winVar++
                }
            }
            if (item.classList.contains('task11_green')) {
                if (item.getAttribute('fill') === 'green') {
                    winVar++
                }
            }
            if (item.classList.contains('task11_red')) {
                if (item.getAttribute('fill') === 'red') {
                    winVar++
                }
            }
            if (item.classList.contains('task11_blue')) {
                if (item.getAttribute('fill') === 'blue') {
                    winVar++
                }
            }
            if (item.classList.contains('task11_white')) {
                if (item.getAttribute('fill') === 'white') {
                    winVar++
                }
            }
        })

        if (winVar === 5) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()