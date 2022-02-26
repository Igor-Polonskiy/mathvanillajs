(() => {
    const reloadTaskBtn = document.querySelector('.task4_reloadTask')
    const checkingTaskBtn = document.querySelector('.task4_checkingTask')
    const checkTask = document.querySelector('.task4_checkTask')
    const chek_answerTxt = document.querySelector('.task4_chek_answer')
    const imgsWrapper = document.querySelector('.task4_imgwrapper')

    let pictures = [{
            id: 1,
            src: './assets2/task4/img/task4_1.png',
            data: true
        },
        {
            id: 2,
            src: './assets2/task4/img/task4_2.png',
            data: true
        },
        {
            id: 3,
            src: './assets2/task4/img/task4_3.png',
            data: true
        },
        {
            id: 4,
            src: './assets2/task4/img/task4_4.png',
            data: false
        },
        {
            id: 5,
            src: './assets2/task4/img/task4_5.png',
            data: true
        },
        {
            id: 6,
            src: './assets2/task4/img/task4_6.png',
            data: true
        },
    ]


    let count = 0

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task4_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_img')) {
            e.target.classList.toggle('task4_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task4_active')
        console.log(imgs)
        let winVar = 0
        imgs.forEach(item => {
            console.log(item.getAttribute('data-number'))
            if (item.getAttribute('data-number') === 'true') {
                winVar++
            } else winVar--
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