(() => {
    const pencils = document.querySelector('.task7_pencils')
    const pencilsImg = document.querySelectorAll('.task7_pencilImg')
    const circleWrapper = document.querySelector('.task7_circleWrapper')
    const baloons = document.querySelectorAll('.task7_baloon')
    const reloadTaskBtn = document.querySelector('.task7_reloadTask')
    const checkingTaskBtn = document.querySelector('.task7_checkingTask')
    const checkTask = document.querySelector('.task7_checkTask')
    const chek_answerTxt = document.querySelector('.task7_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task7_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task7_pencilSelect')
            })
            e.target.classList.add('task7_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task7_baloon')) {
            e.target.closest('.task7_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task7_pencilSelect')
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
            if (item.classList.contains('task7_yellow')) {
                if (item.getAttribute('fill') === 'yellow') {
                    winVar++
                }
            }
            if (item.classList.contains('task7_green')) {
                if (item.getAttribute('fill') === 'green') {
                    winVar++
                }
            }
            if (item.classList.contains('task7_brown')) {
                if (item.getAttribute('fill') === 'brown') {
                    winVar++
                }
            }
        })

        if (winVar === 4) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()