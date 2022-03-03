(() => {
    const reloadTaskBtn = document.querySelector('.task13_reloadTask')
    const checkingTaskBtn = document.querySelector('.task13_checkingTask')
    const checkTask = document.querySelector('.task13_checkTask')
    const chek_answerTxt = document.querySelector('.task13_chek_answer')
    const dropzones = document.querySelectorAll('.task13_imgWrapper_img')
    const answersWrapper = document.querySelector('.task13_answers')
    const task = document.querySelector('.task13_wrapper')



    const answers = [{
            id: 1,
            src: './assets3/task13/img/task13_11.png',
            side: 'right'
        },
        {
            id: 2,
            src: './assets3/task13/img/task13_2.png',
            side: 'left'

        },
        {
            id: 3,
            src: './assets3/task13/img/task13_3.png',
            side: 'left'

        },
        {
            id: 4,
            src: './assets3/task13/img/task13_4.png',
            side: 'left'

        },
        {
            id: 5,
            src: './assets3/task13/img/task13_5.png',
            side: 'left'

        },
        {
            id: 6,
            src: './assets3/task13/img/task13_6.png',
            side: 'left'

        },
        {
            id: 7,
            src: './assets3/task13/img/task13_7.png',
            side: 'right'

        },
        {
            id: 8,
            src: './assets3/task13/img/task13_8.png',
            side: 'right'

        },
        {
            id: 9,
            src: './assets3/task13/img/task13_9.png',
            side: 'right'

        },
        {
            id: 10,
            src: './assets3/task13/img/task13_10.png',
            side: 'right'

        }
    ]

    function setAnswers() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task13_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.side)
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
        if (e.target.classList.contains('task13_answer')) {
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
            elemBelow = elemBelow.closest('.task13_imgWrapper_img')

            if (elemBelow.classList.contains("task13_imgWrapper_img")) {
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
        dropzones.forEach(item => {
            if (item.childNodes.length) {
                item.innerHTML = ''
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
        dropzones.forEach(item => {
            if (item.childNodes.length) {
                [...item.children].forEach(pic => {
                    if (pic.getAttribute('data-number') === item.getAttribute('data-number')) {
                        winVar++
                    }
                    console.log(pic)
                })
            }
        })



        if (winVar === 10) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()