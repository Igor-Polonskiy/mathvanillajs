(() => {
    const reloadTaskBtn = document.querySelector('.task3_reloadTask')
    const checkingTaskBtn = document.querySelector('.task3_checkingTask')
    const checkTask = document.querySelector('.task3_checkTask')
    const chek_answerTxt = document.querySelector('.task3_chek_answer')
    const dropZone = document.querySelector('.task3_drop')
    const answersWrapper = document.querySelector('.task3_answers')
    const task = document.querySelector('.task3_wrapper')

    const answers = [{
            id: 1,
            data: 'small',
            src: './assets2/task3/img/task3_apple.png'
        },
        {
            id: 2,
            data: 'small',
            src: './assets2/task3/img/task3_apple.png'

        },
        {
            id: 3,
            data: 'small',
            src: './assets2/task3/img/task3_apple.png'

        },
        {
            id: 4,
            data: 'small',
            src: './assets2/task3/img/task3_apple.png'

        }, {
            id: 5,
            data: 'big',
            src: './assets2/task3/img/task3_apple.png'
        },
        {
            id: 6,
            data: 'big',
            src: './assets2/task3/img/task3_apple.png'

        },
        {
            id: 7,
            data: 'big',
            src: './assets2/task3/img/task3_apple.png'

        },
        {
            id: 8,
            data: 'big',
            src: './assets2/task3/img/task3_apple.png'

        }
    ]

    function fillAnswerField() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task3_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            if (item.data === 'small') {
                answer.style.width = '50px'
                answer.style.height = '50px'
            }
            answersWrapper.append(answer)
        })
    }
    fillAnswerField()


    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
    }

    task.addEventListener('mousedown', (e) => {

        if (e.target.classList.contains('task3_answer')) {
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
            elemBelow = elemBelow.closest(".task3_dropeitem")

            if (elemBelow.classList.contains("task3_dropeitem") && elemBelow.childNodes.length < 4) {
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

    const dropeitems = document.querySelectorAll('.task3_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {

        dropeitems.forEach(item => {
            if (item.childNodes.length) {
                let count = item.childNodes.length
                for (let i = 0; i < count; i++) {
                    item.childNodes[item.childNodes.length - 1].remove()
                }
            }
        })

        for (let i = (answersWrapper.childNodes.length - 1); i > 0; i--) {
            answersWrapper.childNodes[i].remove()
        }
        fillAnswerField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        dropeitems.forEach(item => {
            if (item.childNodes.length) {
                item.childNodes.forEach(el => {
                    if (el.getAttribute('data-number') === item.getAttribute('data-number')) {
                        winVar++
                    }
                })

            }
        })

        if (winVar === 8) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()