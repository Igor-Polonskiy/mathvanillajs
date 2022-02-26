(() => {
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')
    const dropZone = document.querySelector('.task1_drop')
    const answersWrapper = document.querySelector('.task1_answers')
    const task1 = document.querySelector('.task1_wrapper')

    const dropitems = [{
            id: 1,
            data: 'blue'
        },
        {
            id: 2,
            data: 'red'
        },
        {
            id: 3,
            data: 'red'
        },
        {
            id: 4,
            data: 'yellow'
        },
        {
            id: 5,
            data: 'yellow'
        },
        {
            id: 6,
            data: 'blue'
        },
        {
            id: 7,
            data: 'green'
        },
        {
            id: 8,
            data: 'green'
        },
        {
            id: 9,
            data: 'green'
        }
    ]

    const answers = [{
            id: 1,
            data: 'blue',
            src: './assets2/task1/img/blue.png'
        },
        {
            id: 2,
            data: 'green',
            src: './assets2/task1/img/green.png'

        },
        {
            id: 3,
            data: 'yellow',
            src: './assets2/task1/img/yellow.png'

        },
        {
            id: 4,
            data: 'red',
            src: './assets2/task1/img/red.png'

        }, {
            id: 5,
            data: 'blue',
            src: './assets2/task1/img/blue.png'
        },
        {
            id: 6,
            data: 'green',
            src: './assets2/task1/img/green.png'

        },
        {
            id: 7,
            data: 'green',
            src: './assets2/task1/img/green.png'

        },
        {
            id: 8,
            data: 'red',
            src: './assets2/task1/img/red.png'

        },
        {
            id: 9,
            data: 'yellow',
            src: './assets2/task1/img/yellow.png'

        }
    ]

    dropitems.forEach(item => {
        let el = document.createElement('div')
        el.classList.add('task1_dropeitem')
        el.setAttribute('data-number', item.data)
        dropZone.append(el)
    })


    answers.sort(() => Math.random() - 0.5).forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task1_answer')
        answer.style.backgroundImage = `url(${item.src})`
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

    task1.addEventListener('mousedown', (e) => {

        if (e.target.classList.contains('task1_answer')) {
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

            if (elemBelow.classList.contains("task1_dropeitem") && elemBelow.children.length === 0) {
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

    const dropeitems = document.querySelectorAll('.task1_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {

        dropeitems.forEach(item => {
            if (item.children.length) {
                item.children[0].remove()
            }
        })

        for (let i = (answersWrapper.childNodes.length - 1); i > 0; i--) {
            answersWrapper.childNodes[i].remove()
        }
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task1_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            answersWrapper.append(answer)
        })

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        dropeitems.forEach(item => {
            if (item.childNodes.length) {
                if (item.childNodes[0].getAttribute('data-number') === item.getAttribute('data-number')) {
                    winVar++
                }
            }
        })

        if (winVar === 9) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()