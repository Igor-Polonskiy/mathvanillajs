(() => {
    const pencils = document.querySelector('.task6_pencils')
    const pencilsImg = document.querySelectorAll('.task6_pencilImg')
    const circleWrapper = document.querySelector('.task6_circleWrapper')
    const chears = document.querySelectorAll('.chear')
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task6_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task6_pencilSelect')
            })
            e.target.classList.add('task6_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.chear')) {
            e.target.closest('.chear').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task6_pencilSelect')
        })
        color = 'white'
        chears.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        for (let i = 0; i < 5; i++) {
            if (chears[i].getAttribute('fill') === 'white') {
                winVar++
            }
        }
        if (chears[5].getAttribute('fill') === 'green') {
            winVar++
        }
        if (chears[6].getAttribute('fill') === 'white') {
            winVar++
        }
        if (chears[7].getAttribute('fill') === 'green') {
            winVar++
        }
        for (let i = 8; i < 10; i++) {
            if (chears[i].getAttribute('fill') === 'white') {
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