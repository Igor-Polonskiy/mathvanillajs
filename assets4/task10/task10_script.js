(() => {
    const reloadTaskBtn = document.querySelector('.task10_reloadTask')
    const checkingTaskBtn = document.querySelector('.task10_checkingTask')
    const checkTask = document.querySelector('.task10_checkTask')
    const chek_answerTxt = document.querySelector('.task10_chek_answer')
    const dropZone = document.querySelector('.task10_drop')
    const answersWrapper = document.querySelector('.task10_answers')
    const task10 = document.querySelector('.task10_wrapper')

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
        }
    ]

    const answers = [{
            id: 1,
            data: '1',
            src: './assets4/task10/img/task10_1.png'
        },
        {
            id: 2,
            data: '2',
            src: './assets4/task10/img/task10_2.png'

        },
        {
            id: 3,
            data: '3',
            src: './assets4/task10/img/task10_3.png'

        }
    ]

    dropitems.forEach(item => {
        let el = document.createElement('div')
        el.classList.add('task10_dropeitem')
        el.setAttribute('data-number', item.data)
        dropZone.append(el)
    })

    function setAnswers() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task10_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
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

            if (elemBelow.classList.contains("task10_dropeitem") && elemBelow.children.length === 0) {
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

    const dropeitems = document.querySelectorAll('.task10_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {

        dropeitems.forEach(item => {
            if (item.children.length) {
                item.children[0].remove()
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

        dropeitems.forEach(item => {
            if (item.childNodes.length) {
                if (item.childNodes[0].getAttribute('data-number') === item.getAttribute('data-number')) {
                    winVar++
                }
            }
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