(() => {
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')
    const imgsWrapper1 = document.querySelector('.task5_imgwrapper1')
    const imgsWrapper2 = document.querySelector('.task5_imgwrapper2')
    const imgsWrapper3 = document.querySelector('.task5_imgwrapper3')
    const task5 = document.querySelector('.task5_wrapper')

    let pictures1 = [{
            id: 1,
            src: './assets5/task5/img/task5_1.png',
            data: true
        },
        {
            id: 2,
            src: './assets5/task5/img/task5_2.png',
            data: true
        },
        {
            id: 3,
            src: './assets5/task5/img/task5_3.png',
            data: true
        },
        {
            id: 4,
            src: './assets5/task5/img/task5_4.png',
            data: false
        }
    ]
    let pictures2 = [{
            id: 5,
            src: './assets5/task5/img/task5_5.png',
            data: true
        },
        {
            id: 6,
            src: './assets5/task5/img/task5_6.png',
            data: true
        },
        {
            id: 7,
            src: './assets5/task5/img/task5_7.png',
            data: false
        },
        {
            id: 8,
            src: './assets5/task5/img/task5_8.png',
            data: true
        },
    ]

    let pictures3 = [{
            id: 1,
            src: './assets5/task5/img/task5_9.png',
            data: true
        },
        {
            id: 2,
            src: './assets5/task5/img/task5_10.png',
            data: false
        },
        {
            id: 3,
            src: './assets5/task5/img/task5_11.png',
            data: true
        },
        {
            id: 4,
            src: './assets5/task5/img/task5_12.png',
            data: true
        }
    ]


    let count = 0

    function fillField() {
        pictures1.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task5_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper1.append(answer)
        })
        pictures2.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task5_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper2.append(answer)
        })
        pictures3.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task5_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper3.append(answer)
        })
    }

    fillField()

    task5.addEventListener('click', (e) => {
        if (e.target.classList.contains('task5_img')) {
            e.target.classList.toggle('task5_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper1.innerHTML = ''
        imgsWrapper2.innerHTML = ''
        imgsWrapper3.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task5_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'false') {
                winVar++
            } else winVar--
        })

        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()