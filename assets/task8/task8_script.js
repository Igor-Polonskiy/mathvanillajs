(() => {
    const reloadTaskBtn = document.querySelector('.task8_reloadTask')
    const checkingTaskBtn = document.querySelector('.task8_checkingTask')
    const checkTask = document.querySelector('.task8_checkTask')
    const chek_answerTxt = document.querySelector('.task8_chek_answer')
    const picturesWrapper = document.querySelector('.task8_imgWrapper')
    const answersWrapper = document.querySelector('.task8_answers')

    const boxes = [{
            id: 1,
            src: './assets/task8/img/boxes1.jpg',
            data: 1
        },
        {
            id: 2,
            src: './assets/task8/img/boxes2.jpg',
            data: 2
        },
        {
            id: 3,
            src: './assets/task8/img/boxes3.jpg',
            data: 3
        },
        {
            id: 4,
            src: './assets/task8/img/boxes4.jpg',
            data: 4
        },
        {
            id: 5,
            src: './assets/task8/img/boxes5.jpg',
            data: 5
        },
        {
            id: 6,
            src: './assets/task8/img/boxes6.jpg',
            data: 6
        }
    ]

    const pictures = [{
            id: 1,
            src: './assets/task8/img/task8-1.jpg',
            data: 3
        },
        {
            id: 2,
            src: './assets/task8/img/task8-2.jpg',
            data: 4
        },
        {
            id: 3,
            src: './assets/task8/img/task8-3.jpg',
            data: 2
        },
        {
            id: 4,
            src: './assets/task8/img/task8-4.jpg',
            data: 1
        },
        {
            id: 5,
            src: './assets/task8/img/task8-5.jpg',
            data: 6
        },
        {
            id: 6,
            src: './assets/task8/img/task8-6.jpg',
            data: 5
        }
    ]



    boxes.forEach(item => {
        let picture = document.createElement('div')
        picture.classList.add('task8_imgWrapper_img')
        picture.style.backgroundImage = `url(${item.src})`
        picture.setAttribute('data-number', item.data)
        picturesWrapper.append(picture)
    })

    pictures.sort(() => Math.random() - 0.5).forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task8_answer')
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

    answersWrapper.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('task8_answer')) {
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

            if (elemBelow.classList.contains("task8_imgWrapper_img") && elemBelow.childNodes.length === 0) {
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
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task8_answer')
            answer.style.backgroundImage = `url(${item.src})`
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



        if (winVar === 6) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()