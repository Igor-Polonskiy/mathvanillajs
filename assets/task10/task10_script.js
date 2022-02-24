(() => {
    const reloadTaskBtn = document.querySelector('.task10_reloadTask')
    const checkingTaskBtn = document.querySelector('.task10_checkingTask')
    const checkTask = document.querySelector('.task10_checkTask')
    const chek_answerTxt = document.querySelector('.task10_chek_answer')
    const picturesWrapper = document.querySelector('.task10_imgWrapper')
    const answersWrapper = document.querySelector('.task10_answers')
    const task10 = document.querySelector('.task10_wrapper')

    const pictures = [{
            id: 1,
            src: './assets/task10/img/task10_1.png',
            data: 1,
            sum: 2
        },
        {
            id: 2,
            src: './assets/task10/img/task10_2.png',
            data: 1,
            sum: 4
        },
        {
            id: 3,
            src: './assets/task10/img/task10_3.png',
            data: 3,
            sum: 6
        },
        {
            id: 4,
            src: './assets/task10/img/task10_4.png',
            data: 2,
            sum: 7
        },
        {
            id: 5,
            src: './assets/task10/img/task10_5.png',
            data: 4,
            sum: 8
        },
        {
            id: 6,
            src: './assets/task10/img/task10_6.png',
            data: 3,
            sum: 9
        }
    ]

    const answers = [{
            id: 1,
            data: '1'
        },
        {
            id: 2,
            data: '1'
        },
        {
            id: 3,
            data: '3'
        },
        {
            id: 4,
            data: '2'
        },
        {
            id: 5,
            data: '4'
        },
        {
            id: 6,
            data: '3'
        }
    ]


    pictures.forEach(item => {
        let picture = document.createElement('div')
        let img = document.createElement('div')
        let sum = document.createElement('h3')
        sum.innerText = item.sum
        picture.classList.add('task10_imgWrapper_img')
        img.classList.add('task10_img')
        img.style.backgroundImage = `url(${item.src})`
        img.setAttribute('data-number', item.data)
        picture.append(sum,img)
        picturesWrapper.append(picture)
    })

    answers.sort(() => Math.random() - 0.5).forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task10_answer')
        answer.innerText = item.data
        answer.setAttribute('data-number', item.data)
        answersWrapper.append(answer)
    })

    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
    }

    task10.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('task10_answer')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''

            draggingItem = e.target
            draggingItem.style.cursor = "grabbing";

            shiftX = e.clientX - draggingItem.getBoundingClientRect().left;
            shiftY = e.clientY - draggingItem.getBoundingClientRect().top;

            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;
            document.body.append(draggingItem);

            moveAt(e.pageX, e.pageY);
        }
    })

    document.addEventListener('mousemove', (e) => {
        if (draggingItem) {
            moveAt(e.pageX, e.pageY);
            draggingItem.style.cursor = "grabbing";
        }
    })

    document.addEventListener('mouseup', (e) => {


        if (draggingItem) {
            draggingItem.style.visibility = 'hidden';
            elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            draggingItem.style.visibility = 'visible';
            draggingItem.style.cursor = "grab";

            if (elemBelow.classList.contains("task10_img") && elemBelow.childNodes.length === 0) {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                elemBelow.append(draggingItem);

            } else {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                answersWrapper.append(draggingItem);
            }
            draggingItem = null
        }
    })

    const task10_imgs = document.querySelectorAll('.task10_img')

    reloadTaskBtn.addEventListener('click', () => {

        task10_imgs.forEach(item => {
            if (item.childNodes.length) {
                item.childNodes[0].remove()
            }
        })

       for (let i = (answersWrapper.childNodes.length - 1); i > 0; i--) {
            answersWrapper.childNodes[i].remove()
        }
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task10_answer')
            answer.innerText = item.data
            answer.setAttribute('data-number', item.data)
            answersWrapper.append(answer)
        })

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        task10_imgs.forEach(item => {
            if (item.childNodes.length) {
                if (item.childNodes[0].getAttribute('data-number') === item.getAttribute('data-number')) {
                    winVar++
                }
            }
        })



        if (winVar === 6) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()