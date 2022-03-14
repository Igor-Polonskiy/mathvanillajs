(() => {
    const reloadTaskBtn = document.querySelector('.task8_reloadTask')
    const checkingTaskBtn = document.querySelector('.task8_checkingTask')
    const checkTask = document.querySelector('.task8_checkTask')
    const chek_answerTxt = document.querySelector('.task8_chek_answer')
    const dropZone = document.querySelector('.task8_drop')
    const answersWrapper = document.querySelector('.task8_answers')
    const task12 = document.querySelector('.task8_wrapper')



    const answers = [{
            id: 1,
            data: '1',
            src: './assets5/task8/img/task8_1.png'
        },
        {
            id: 2,
            data: '2',
            src: './assets5/task8/img/task8_2.png'
        },
        {
            id: 3,
            data: '3',
            src: './assets5/task8/img/task8_3.png'

        },
        {
            id: 4,
            data: '4',
            src: './assets5/task8/img/task8_4.png'

        }
    ]

    answers.sort(() => Math.random() - 0.5).forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task8_answer')
        answer.setAttribute('data-number', item.data)
        answer.style.backgroundImage = `url(${item.src})`
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

        if (e.target.classList.contains('task8_answer')) {
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

            if (elemBelow.classList.contains("task8_dropeitem") && elemBelow.children.length === 0) {
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

    const dropeitem = document.querySelector('.task8_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {


        if (dropeitem.children.length) {
            [...dropeitem.children][0].remove()
        }


        for (let i = (answersWrapper.childNodes.length - 1); i > 0; i--) {
            answersWrapper.childNodes[i].remove()
        }
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task8_answer')
            answer.setAttribute('data-number', item.data)
            answer.style.backgroundImage = `url(${item.src})`
            answersWrapper.append(answer)
        })

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0


        if (dropeitem.children.length) {
            if ([...dropeitem.children][0].getAttribute('data-number') === dropeitem.getAttribute('data-number')) {
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