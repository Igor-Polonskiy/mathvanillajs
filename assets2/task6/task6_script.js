(() => {
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')
    const dropZone = document.querySelector('.task6_drop')
    const answersWrapper = document.querySelector('.task6_answers')
    const task = document.querySelector('.task6_wrapper')

    const answers = [{
            id: 1,
            src: './assets2/task6/img/task6_1.png',
            target: false
        },
        {
            id: 2,
            src: './assets2/task6/img/task6_2.png',
            target: true

        },
        {
            id: 3,
            src: './assets2/task6/img/task6_3.png',
            target: true

        },
        {
            id: 4,
            src: './assets2/task6/img/task6_4.png',
            target: true

        }, {
            id: 5,
            src: './assets2/task6/img/task6_5.png',
            target: true
        },
        {
            id: 6,
            src: './assets2/task6/img/task6_6.png',
            target: false

        },
        {
            id: 7,
            src: './assets2/task6/img/task6_7.png',
            target: true

        }
    ]

    function fillAnswerField() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task6_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            answer.setAttribute('data-target', item.target)
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

        if (e.target.classList.contains('task6_answer')) {
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
            elemBelow = elemBelow.closest(".task6_drop")

            if (elemBelow && elemBelow.classList.contains("task6_drop")) {
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
        dropZone.innerHTML = ''
        answersWrapper.innerHTML = ''
        fillAnswerField()
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        console.log(dropZone.children)
        if (dropZone.children.length) {

            [...dropZone.children].forEach(item => { //???????
                if (item.getAttribute('data-target') === 'true') {
                    winVar++
                } else winVar--
            })
        }

        if (winVar === 5) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()