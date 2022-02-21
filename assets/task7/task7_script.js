(() => {
    const reloadTaskBtn = document.querySelector('.task7_reloadTask')
    const checkingTaskBtn = document.querySelector('.task7_checkingTask')
    const checkTask = document.querySelector('.task7_checkTask')
    const chek_answerTxt = document.querySelector('.task7_chek_answer')
    const picturesWrapper = document.querySelector('.task7_imgWrapper')
    const answersWrapper = document.querySelector('.task7_answers')

    const pictures = [{
            id: 1,
            src: './assets/task7/img/task7_1.png',
            data: 10
        },
        {
            id: 2,
            src: './assets/task7/img/task7_2.png',
            data: 8
        },
        {
            id: 3,
            src: './assets/task7/img/task7_3.png',
            data: 7
        },
        {
            id: 4,
            src: './assets/task7/img/task7_4.png',
            data: 8
        }
    ]

    const answers = [{
            id: 1,
            data: '10'
        },
        {
            id: 2,
            data: '8'
        },
        {
            id: 3,
            data: '8'
        },
        {
            id: 4,
            data: '7'
        }
    ]


    let answer1 = 0

    pictures.forEach(item => {
        let picture = document.createElement('div')
        picture.classList.add('task7_imgWrapper_img')
        picture.style.backgroundImage = `url(${item.src})`
        picture.setAttribute('data-number', item.data)
        picturesWrapper.append(picture)
    })

    answers.sort(() => Math.random() - 0.5).forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task7_answer')
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

    answersWrapper.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('task7_answer')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''

            draggingItem = e.target
            draggingItem.style.cursor = "grabbing";

            shiftX = e.clientX - draggingItem.getBoundingClientRect().left;
            shiftY = e.clientY - draggingItem.getBoundingClientRect().top;

            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;
            //document.body.append(draggingItem);

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

            if (elemBelow.classList.contains("task7_imgWrapper_img") && elemBelow.childNodes.length === 0) {
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
                //answersWrapper.append(draggingItem);
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
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task7_answer')
            answer.innerText = item.data
            answer.setAttribute('data-number', item.data)
            answersWrapper.append(answer)
        })

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



        if (winVar === 4) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()