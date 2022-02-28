(() => {
    const reloadTaskBtn = document.querySelector('.task7_reloadTask')
    const checkingTaskBtn = document.querySelector('.task7_checkingTask')
    const checkTask = document.querySelector('.task7_checkTask')
    const chek_answerTxt = document.querySelector('.task7_chek_answer')
    const dropZone = document.querySelector('.task7_drop')
    const answersWrapper = document.querySelector('.task7_answers')
    const task = document.querySelector('.task7_wrapper')

    const answers = [{
            id: 1,
            src: './assets2/task7/img/task7_1.png',
            target: true,
            size: 'small'
        },
        {
            id: 2,
            src: './assets2/task7/img/task7_1.png',
            target: false,
            size: 'midle'


        },
        {
            id: 3,
            src: './assets2/task7/img/task7_1.png',
            target: true,
            size: 'big'


        }
    ]

    function fillAnswerField() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task7_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            answer.setAttribute('data-target', item.target)
            if (item.size === 'small') {
                answer.style.width = '50px'
                answer.style.height = '50px'
            }
            if (item.size === 'big') {
                answer.style.width = '90px'
                answer.style.height = '90px'
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

        if (e.target.classList.contains('task7_answer')) {
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
            elemBelow = elemBelow.closest(".task7_drop")

            if (elemBelow && elemBelow.classList.contains("task7_drop")) {
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
        if (dropZone.children.length) {

            [...dropZone.children].forEach(item => {
                if (item.getAttribute('data-target') === 'true') {
                    winVar++
                } else winVar--
            })
        }

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()