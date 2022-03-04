(() => {
    const reloadTaskBtn = document.querySelector('.task14_reloadTask')
    const checkingTaskBtn = document.querySelector('.task14_checkingTask')
    const checkTask = document.querySelector('.task14_checkTask')
    const chek_answerTxt = document.querySelector('.task14_chek_answer')
    const drops = document.querySelectorAll('.task14_imgWrapper_img')
    const answersWrapper = document.querySelector('.task14_answers')
    const task = document.querySelector('.task14_wrapper')
    const audioList = document.querySelectorAll('.task14_audio')
    const audiobtn1 = document.querySelector('#task14_audiobtn1')
    const audiobtn2 = document.querySelector('#task14_audiobtn2')

    const answers = [{
            id: 4,
            data: 'Имена'
        },
        {
            id: 1,
            data: 'Грибы'
        },
        {
            id: 2,
            data: 'Дни недели'
        },
        {
            id: 3,
            data: 'Учебные вещи'
        }
    ]

    audiobtn1.addEventListener('click', () => {
        audioList[0].play()
    })

    audiobtn2.addEventListener('click', () => {
        audioList[1].play()
    })


    function setAnswers() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task14_answer')
            answer.innerText = item.data
            answer.setAttribute('data-number', item.id)
            let audio = document.createElement('span');
            audio.innerHTML = '&#128265;'
            answer.append(audio)
            audio.addEventListener('click', (e) => {
                audioList[item.id + 1].play()
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
        if (e.target.classList.contains('task14_answer')) {
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
            if (elemBelow.classList.contains("task14_imgWrapper_img") && elemBelow.children.length === 0) {
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
        drops.forEach(item => {
            if (item.children.length) {
                [...item.children][0].remove()
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
        drops.forEach(item => {
            if (item.children.length) {
                if ([...item.children][0].getAttribute('data-number') === item.getAttribute('data-number')) {
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