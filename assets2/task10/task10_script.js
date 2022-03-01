(() => {
    const reloadTaskBtn = document.querySelector('.task10_reloadTask')
    const checkingTaskBtn = document.querySelector('.task10_checkingTask')
    const checkTask = document.querySelector('.task10_checkTask')
    const chek_answerTxt = document.querySelector('.task10_chek_answer')
    const dropZone = document.querySelector('.task10_drop')
    const answersWrapper = document.querySelector('.task10_answers')
    const task = document.querySelector('.task10_wrapper')

    const answers = [{
            id: 1,
            src: './assets2/task10/img/task10_1.png',
            height: '100px',
            width: '100px'
        },
        {
            id: 2,
            src: './assets2/task10/img/task10_2.png',
            height: '100px',
            width: '100px'

        },
        {
            id: 3,
            src: './assets2/task10/img/task10_3.png',
            height: '50px',
            width: '100px'
        },
        {
            id: 4,
            src: './assets2/task10/img/task10_4.png',
            height: '200px',
            width: '100px'
        },
        {
            id: 5,
            src: './assets2/task10/img/task10_5.png',
            height: '100px',
            width: '50px'
        },
        {
            id: 6,
            src: './assets2/task10/img/task10_6.png',
            height: '150px',
            width: '50px'
        },
        {
            id: 7,
            src: './assets2/task10/img/task10_7.png',
            height: '100px',
            width: '200px'


        }
    ]

    function fillAnswerField() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task10_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.style.height = item.height
            answer.style.width = item.width
            answersWrapper.append(answer)
        })
    }
    /*function fillAnswerField() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('img')
            answer.classList.add('task10_answer')
            answer.setAttribute('src', item.src)
            answer.style.height = item.height

            answersWrapper.append(answer)
        })
    }*/
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

        if (e.target.classList.contains('task10_answer')) {
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
        console.log('move')
        if (draggingItem) {
            moveAt(e.pageX, e.pageY);


        }
    })

    document.addEventListener('mouseup', (e) => {
        if (draggingItem) {
            draggingItem.style.visibility = 'hidden';
            elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            draggingItem.style.visibility = 'visible';
            draggingItem.style.cursor = "grab";
            elemBelow = elemBelow.closest(".task10_drop")

            if (elemBelow && elemBelow.classList.contains("task10_drop")) {
                draggingItem.style.zIndex = null;
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


})()