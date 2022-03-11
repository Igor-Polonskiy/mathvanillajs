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
        color = 'white'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })



})()