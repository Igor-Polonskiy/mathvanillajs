(() => {
    const audio = document.querySelectorAll('.task12_audio')
    const task12_prev = document.querySelector('.task12_prev')
    const task12_next = document.querySelector('.task12_next')
    const task12_slide = document.querySelector('.task12_img')
    const slide_caption = document.querySelector('.task12_slide_caption')
    const numberOfimgs = document.querySelector('.task12_count2')
    const count = document.querySelector('.task12_count1')
    const task12_begin = document.querySelector('.task12_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: './assets5/task12/img/task12-1.png',
            text: 'Закономерность — это повторение или изменение элементов по заданному правилу.'
        },
        {
            id: 2,
            src: './assets5/task12/img/task12-2.png',
            text: 'Ты уже знаком с некоторыми закономерностями. Например, день и ночь сменяют друг друга ...'
        },
        {
            id: 3,
            src: './assets5/task12/img/task12-3.png',
            text: 'Сменяются друг друга времена года: за зимой идёт весна, потом лето, затем осень. Но лето не может наступить после осени, а зима после весны.'
        },
        {
            id: 4,
            src: './assets5/task12/img/task12-4.png',
            text: 'Рассмотрим простую закономерность. Красный круг следует за синим, затем снова синий круг, а затем снова красный.'
        },
        {
            id: 5,
            src: './assets5/task12/img/task12-5.png',
            text: 'Догадайся, какой круг должен быть следующим.'
        },
        {
            id: 6,
            src: './assets5/task12/img/task12-6.png',
            text: 'Следующий круг должен быть синим.'
        },
        {
            id: 7,
            src: './assets5/task12/img/task12-7.png',
            text: 'Рассмотрим таблицу, разгадаем правило и заполним пустые клетки.'
        },
        {
            id: 8,
            src: './assets5/task12/img/task12-8.png',
            text: 'В третьей клетке не хватает рисунка, где нарисован один круг.'
        },
        {
            id: 9,
            src: './assets5/task12/img/task12-9.png',
            text: 'В третьей клетке не хватает рисунка, где нарисован один круг.'
        },
        {
            id: 10,
            src: './assets5/task12/img/task12-10.png',
            text: 'Рассмотрим второй столбик. В нижней клетке три круга, в середине — один.'
        },
        {
            id: 11,
            src: './assets5/task12/img/task12-11.png',
            text: 'В верхней клетке не хватает рисунка, на котором изображено два круга.'
        },
        {
            id: 12,
            src: './assets5/task12/img/task12-12.png',
            text: 'В третьем столбике не хватает рисунка с тремя кругами.'
        },
        {
            id: 13,
            src: './assets5/task12/img/task12-13.png',
            text: 'Проверим своё решение. В каждой строке правило соблюдается, значит, задание выполнено верно.'
        },

    ]

    task12_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task12_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task12_begin.style.display = 'none'
        } else if (e.target.classList.contains('task12_start2')) {
            task12_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task12_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task12_slide.append(element)

    task12_prev.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--
            if (sound) {
                audio[currentSlide].pause()
                audio[currentSlide].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
            task12_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task12_prev.style.opacity = 0
        }


    })

    task12_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task12_prev.style.opacity = 1
            currentSlide++
            if (sound) {
                audio[currentSlide - 2].pause()
                audio[currentSlide - 2].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
        }
        if (currentSlide === pictures.length) {
            task12_next.style.opacity = 0
        }

    })
})()