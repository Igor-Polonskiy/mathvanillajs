(() => {
    const reloadTaskBtn = document.querySelector('.task13_reloadTask')
    const checkingTaskBtn = document.querySelector('.task13_checkingTask')
    const checkTask = document.querySelector('.task13_checkTask')
    const chek_answerTxt = document.querySelector('.task13_chek_answer')
    const dropZone = document.querySelector('.task13_drop')
    const answersWrapper = document.querySelector('.task13_answers')
    const task12 = document.querySelector('.task13_wrapper')

    const dropitems = [{
            id: 1,
            data: '1'
        },
        {
            id: 2,
            data: '2'
        },
        {
            id: 3,
            data: '3'
        },
        {
            id: 4,
            data: '4'
        },
        {
            id: 5,
            data: '5'
        },
        {
            id: 6,
            data: '6'
        },
        {
            id: 7,
            data: '7'
        },
        {
            id: 8,
            data: '8'
        },
        {
            id: 9,
            data: '9'
        }
    ]

    const answers = [{
            id: 1,
            data: '1'
        },
        {
            id: 2,
            data: '2'
        },
        {
            id: 3,
            data: '4'
        },
        {
            id: 4,
            data: '5'
        },
        {
            id: 5,
            data: '6'
        },
        {
            id: 6,
            data: '7'
        },
        {
            id: 7,
            data: '9'
        }
    ]

    dropitems.forEach(item => {
        let el = document.createElement('div')
        el.classList.add('task13_dropeitem')
        el.setAttribute('data-number', item.data)
        dropZone.append(el)
    })


    answers.sort(() => Math.random() - 0.5).forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task13_answer')
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

    task12.addEventListener('mousedown', (e) => {

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

            if (elemBelow.classList.contains("task13_dropeitem") && elemBelow.childNodes.length === 0) {
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

    const dropeitems = document.querySelectorAll('.task13_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {

        dropeitems.forEach(item => {
            if (item.childNodes.length) {
                item.childNodes[0].remove()
            }
        })

        for (let i = (answersWrapper.childNodes.length - 1); i > 0; i--) {
            answersWrapper.childNodes[i].remove()
        }
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task13_answer')
            answer.innerText = item.data
            answer.setAttribute('data-number', item.data)
            answersWrapper.append(answer)
        })

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        for (let i = 0; i < 2; i++) {
            if (dropeitems[i].childNodes.length) {
                if (dropeitems[i].childNodes[0].getAttribute('data-number') === dropeitems[i].getAttribute('data-number')) {
                    winVar++
                }
            }
        }

        for (let i = 3; i < 7; i++) {
            if (dropeitems[i].childNodes.length) {
                if (dropeitems[i].childNodes[0].getAttribute('data-number') === dropeitems[i].getAttribute('data-number')) {
                    winVar++
                }
            }
        }

        if (dropeitems[8].childNodes.length) {
            if (dropeitems[8].childNodes[0].getAttribute('data-number') === dropeitems[8].getAttribute('data-number')) {
                winVar++
            }
        }


        if (winVar === 7) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()