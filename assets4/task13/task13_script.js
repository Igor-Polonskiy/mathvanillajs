(() => {
    const reloadTaskBtn = document.querySelector('.task13_reloadTask')
    const checkingTaskBtn = document.querySelector('.task13_checkingTask')
    const checkTask = document.querySelector('.task13_checkTask')
    const chek_answerTxt = document.querySelector('.task13_chek_answer')
    const input1 = document.querySelector('#task13_1')
    const input2 = document.querySelector('#task13_2')
    const input3 = document.querySelector('#task13_3')
    const input4 = document.querySelector('#task13_4')

    let answer1 = ''
    let answer2 = ''
    let answer3 = ''
    let answer4 = ''


    input1.addEventListener('change', (e) => {
        answer1 = e.target.value.toLowerCase()
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value.toLowerCase()
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value.toLowerCase()
    })
    input4.addEventListener('change', (e) => {
        answer4 = e.target.value.toLowerCase()
    })

    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {

        let winVar = 0
        if (answer1 === 'ь') {
            winVar++
        }
        if (answer2 === 'о') {
            winVar++
        }
        if (answer3 === 'д') {
            winVar++
        }
        if (answer4 === 'о') {
            winVar++
        }


        if (winVar === 4) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()