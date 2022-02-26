(() => {
    const reloadTaskBtn = document.querySelector('.task2_reloadTask')
    const checkingTaskBtn = document.querySelector('.task2_checkingTask')
    const checkTask = document.querySelector('.task2_checkTask')
    const chek_answerTxt = document.querySelector('.task2_chek_answer')
    const imgs = document.querySelectorAll('.task2_img')


    let count = 0
    let arr1 = []
    let arr2 = []

    imgs.forEach(item => {
        item.addEventListener('click', () => {

            if (count < 2 && item.classList.length < 2) {
                item.classList.add('task2_active1')
                arr1.push(item.getAttribute('data-shape'))
                count++
            } else if (count > 1 && item.classList.length < 2) {
                item.classList.add('task2_active2')
                arr2.push(item.getAttribute('data-shape'))
                count++
            } else if (item.classList.contains('task2_active1')) {
                item.classList.remove('task2_active1')
                arr1.pop()
                count--
            } else if (item.classList.contains('task2_active2')) {
                item.classList.remove('task2_active2')
                arr2.pop()
                count--
            }

        })
    })



    reloadTaskBtn.addEventListener('click', () => {
        imgs.forEach(item => {
            item.classList.remove('task2_active1')
            item.classList.remove('task2_active2')
        })
        count = 0
        arr1.length = 0
        arr2.length = 0

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        if (arr1[0] === arr1[1]) {
            winVar++
        }
        if (arr2[0] === arr2[1]) {
            winVar++
        }

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()