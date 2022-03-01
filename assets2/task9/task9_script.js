(() => {
    const reloadTaskBtn = document.querySelector('.task9_reloadTask')
    const checkingTaskBtn = document.querySelector('.task9_checkingTask')
    const checkTask = document.querySelector('.task9_checkTask')
    const chek_answerTxt = document.querySelector('.task9_chek_answer')
    const picturesWrapper = document.querySelector('.task9_imgWrapper')
    const answersWrapper = document.querySelector('.task9_answers')
    const task = document.querySelector('.task9_wrapper')
    const audioList = document.querySelectorAll('.task9_audio')

    const pictures = [{
            id: 1,
            src: './assets2/task9/img/task9_1.png',
        },
        {
            id: 2,
            src: './assets2/task9/img/task9_2.png',
        },
        {
            id: 3,
            src: './assets2/task9/img/task9_3.png',
        },
        {
            id: 4,
            src: './assets2/task9/img/task9_4.png',
        }
    ]

    const answers = [{
            id: 4,
            data: 'Деревянная коричневая мебель.'
        },
        {
            id: 1,
            data: 'Жёлтый кислый фрукт.'
        },
        {
            id: 2,
            data: 'Красный сладкий фрукт.'
        },
        {
            id: 3,
            data: 'Красная одежда из ткани.'
        }
    ]


    pictures.forEach(item => {
        let picture = document.createElement('div')
        picture.classList.add('task9_imgWrapper_img')
        picture.style.backgroundImage = `url(${item.src})`
        picture.setAttribute('data-number', item.id)
        picturesWrapper.append(picture)
    })

    function setAnswers() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task9_answer')
            answer.innerText = item.data
            answer.setAttribute('data-number', item.id)
            let audio = document.createElement('span');
            audio.innerHTML = '&#128265;'
            answer.append(audio)
            audio.addEventListener('click', (e) => {
                audioList[item.id - 1].play()
            })
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

    task.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('task9_answer')) {
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

            if (elemBelow.classList.contains("task9_imgWrapper_img") && elemBelow.childNodes.length === 0) {
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
        picturesWrapper.childNodes.forEach(item => {
            if (item.childNodes.length) {
                item.childNodes[0].remove()
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