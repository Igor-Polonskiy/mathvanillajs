(() => {
    const reloadTaskBtn = document.querySelector('.task2_reloadTask')
    const checkingTaskBtn = document.querySelector('.task2_checkingTask')
    const checkTask = document.querySelector('.task2_checkTask')
    const chek_answerTxt = document.querySelector('.task2_chek_answer')
    const picturesWrapper = document.querySelector('.task2_imgWrapper')
    const answersWrapper = document.querySelector('.task2_answers')
    const task = document.querySelector('.task2_wrapper')

    const pictures = [{
            id: 1,
            src: './assets3/task2/img/task2_1.png',
        },
        {
            id: 2,
            src: './assets3/task2/img/task2_2.png',
        },
        {
            id: 3,
            src: './assets3/task2/img/task2_3.png',
        },
        {
            id: 4,
            src: './assets3/task2/img/task2_4.png',
        },
        {
            id: 5,
            src: './assets3/task2/img/task2_5.png',
        },
        {
            id: 6,
            src: './assets3/task2/img/task2_6.png',
        }
    ]

    const answers = [{
            id: 4,
            data: 'под'
        },
        {
            id: 1,
            data: 'за'
        },
        {
            id: 2,
            data: 'на'
        },
        {
            id: 3,
            data: 'перед'
        },
        {
            id: 5,
            data: 'над'
        },
        {
            id: 6,
            data: 'между'
        }
    ]


    pictures.forEach(item => {
        let picture = document.createElement('div')
        picture.classList.add('task2_imgWrapper_img')
        picture.style.backgroundImage = `url(${item.src})`
        picture.setAttribute('data-number', item.id)
        picturesWrapper.append(picture)
    })

    function setAnswers() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task2_answer')
            answer.innerText = item.data
            answer.setAttribute('data-number', item.id)
            answersWrapper.append(answer)
        })
    }
    setAnswers()

    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
    }

    task.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('task2_answer')) {
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

            if (elemBelow.classList.contains("task2_imgWrapper_img") && elemBelow.childNodes.length === 0) {
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

    reloadTaskBtn.addEventListener('click', () => {
        picturesWrapper.childNodes.forEach(item => {
            if (item.childNodes.length) {
                item.childNodes[0].remove()
            }
        })

        for (let i = (answersWrapper.childNodes.length - 1); i > 0; i--) {
            answersWrapper.childNodes[i].remove()
        }
        setAnswers()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        picturesWrapper.childNodes.forEach(item => {
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