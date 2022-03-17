(() => {
    const reloadTaskBtn = document.querySelector('.task2_reloadTask')
    const checkingTaskBtn = document.querySelector('.task2_checkingTask')
    const checkTask = document.querySelector('.task2_checkTask')
    const chek_answerTxt = document.querySelector('.task2_chek_answer')
    const imgs = document.querySelectorAll('.task2_img')
    const task = document.querySelector('.task2_wrapper')


    let count = 0
    let active = ['task2_active1', 'task2_active2']

    let arr1 = []
    let arr2 = []

    imgs.forEach(item => {
        item.addEventListener('click', () => {

            if (count < 2 && item.classList.length < 2) {
                item.classList.add(active[active.length - 1])
                arr2.push(item.getAttribute('data-shape'))
                count++

            } else if (count > 1 && item.classList.length < 2) {
                item.classList.add(active[active.length - 1])
                if (active[active.length - 1] === 'task2_active2') {
                    arr2.push(item.getAttribute('data-shape'))
                } else {
                    arr1.push(item.getAttribute('data-shape'))
                }

                active.pop()
                count++

            } else if (item.classList.contains('task2_active2')) {
                item.classList.remove('task2_active2')
                arr2.pop()
                count--
            } else if (item.classList.contains('task2_active1')) {
                item.classList.remove('task2_active1')
                arr1.pop()
                count--
            }


        })
    })
    task.addEventListener('click', (e) => {
        if (count < 2) {
            active = ['task2_active1', 'task2_active2']
        }
        if (count > 1 && arr2.length === 2) {
            active = ['task2_active1']
        }
        if (count > 1 && arr1.length === 2) {
            active = ['task2_active2']
        }

    })

    reloadTaskBtn.addEventListener('click', () => {
        imgs.forEach(item => {
            item.classList.remove('task2_active1')
            item.classList.remove('task2_active2')
        })
        count = 0
        arr1.length = 0
        arr2.length = 0

        active = ['task2_active1', 'task2_active2']

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        if (arr1.length === 2 && arr1[0] === arr1[1]) {
            winVar++
        }
        if (arr2.length === 2 && arr2[0] === arr2[1]) {
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