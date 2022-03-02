(() => {
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')
    const imgsWrapper = document.querySelector('.task1_imgwrapper')

    let pictures = [{
            id: 1,
            src: './assets3/task1/img/task1_1.png',
            data: true
        },
        {
            id: 2,
            src: './assets3/task1/img/task1_2.png',
            data: true
        },
        {
            id: 3,
            src: './assets3/task1/img/task1_3.png',
            data: true
        },
        {
            id: 4,
            src: './assets3/task1/img/task1_4.png',
            data: false
        }
    ]

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task1_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.id)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task1_img')) {
            e.target.classList.toggle('task1_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task1_active')
        let winVar = 0
        console.log(imgs.length)
        if (imgs.length === 1) {
            console.log(imgs[0])

            if (imgs[0].getAttribute('data-number') === '2') {
                winVar++
            }
        }

        if (winVar === 1) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()