(() => {
    const pencils = document.querySelector('.task4_pencils')
    const pencilsImg = document.querySelectorAll('.task4_pencilImg')
    const circleWrapper = document.querySelector('.task4_circleWrapper')
    const circles = document.querySelectorAll('.task4_circle')
    const reloadTaskBtn = document.querySelector('.task4_reloadTask')
    const checkingTaskBtn = document.querySelector('.task4_checkingTask')
    const checkTask = document.querySelector('.task4_checkTask')
    const chek_answerTxt = document.querySelector('.task4_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task4_pencilSelect')
            })
            e.target.classList.add('task4_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_circle')) {
            e.target.style.backgroundColor = color
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task4_pencilSelect')
        })
        color = 'white'
        circles.forEach(item => {
            item.style.backgroundColor = color
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        console.log(circles[0].style.backgroundColor)
        let winVar = 0
        for (let i = 0; i < 3; i++) {
            if (circles[i].style.backgroundColor === 'green') {
                winVar++
            }
        }

        if (circles[3].style.backgroundColor === 'white' || circles[3].style.backgroundColor === '') {
            winVar++
        }

        for (let i = 4; i < 10; i++) {
            if (circles[i].style.backgroundColor === 'yellow') {
                winVar++
            }
        }

        if (winVar === 10) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()