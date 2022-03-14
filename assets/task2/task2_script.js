(() => {
    const audio = document.querySelectorAll('.task2_audio')
    const task2_prev = document.querySelector('.task2_prev')
    const task2_next = document.querySelector('.task2_next')
    const task2_slide = document.querySelector('.task2_img')
    const slide_caption = document.querySelector('.task2_slide_caption')
    const numberOfimgs = document.querySelector('.task2_count2')
    const count = document.querySelector('.task2_count1')
    const task2_begin = document.querySelector('.task2_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: './assets/task2/img/task2-1.png',
            text: 'Количественный счёт — это определение количества предметов. С помощью этого счёта можно ответить на вопрос «сколько?». Для этого нужно посчитать предметы. То число, которое назвали при счёте назвали последним, указывает на количество предметов.'
        },
        {
            id: 2,
            src: './assets/task2/img/task2-2.png',
            text: 'Посмотри на предметы и посчитай, сколько их. Считаем: «Один». На картинке один предмет.'
        },
        {
            id: 3,
            src: './assets/task2/img/task2-3.png',
            text: 'Считаем: «Один, два». На картинке два предмета.'
        },
        {
            id: 4,
            src: './assets/task2/img/task2-4.png',
            text: 'Считаем: «Один, два, три». На картинке три предмета.'
        },
        {
            id: 5,
            src: './assets/task2/img/task2-5.png',
            text: 'Считаем: «Один, два, три, четыре». На картинке четыре предмета.'
        },
        {
            id: 6,
            src: './assets/task2/img/task2-6.png',
            text: 'Считаем: «Один, два, три, четыре, пять». На картинке пять предметов.'
        },
        {
            id: 7,
            src: './assets/task2/img/task2-7.png',
            text: 'Считаем: «Один, два, три, четыре, пять, шесть». На картинке шесть предметов.'
        },
        {
            id: 8,
            src: './assets/task2/img/task2-8.png',
            text: 'Считаем: «Один, два, три, четыре, пять, шесть, семь». На картинке семь предметов.'
        },
        {
            id: 9,
            src: './assets/task2/img/task2-9.png',
            text: 'Считаем: «Один, два, три, четыре, пять, шесть, семь, восемь». На картинке восемь предметов.'
        },
        {
            id: 10,
            src: './assets/task2/img/task2-10.png',
            text: 'Считаем: «Один, два, три, четыре, пять, шесть, семь, восемь, девять». На картинке девять предметов.'
        },
        {
            id: 11,
            src: './assets/task2/img/task2-11.png',
            text: 'Считаем: «Один, два, три, четыре, пять, шесть, семь, восемь, девять, десять». На картинке десять предметов.'
        },
        {
            id: 12,
            src: './assets/task2/img/task2-12.png',
            text: 'Как ты думаешь, зависит ли количество предметов от того, в каком порядке их считать?'
        },
        {
            id: 13,
            src: './assets/task2/img/task2-13.png',
            text: 'Посчитаем морковки слева направо. Сколько получилось? Поучилось 4 моркови.'
        },
        {
            id: 14,
            src: './assets/task2/img/task2-14.png',
            text: 'Посчитаем морковки справа налево. Сколько получилось? Какой вывод можно сделать? Предметы можно считать в любом порядке.'
        }
    ]

    task2_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task2_start1')) {
            sound = true
            audio[currentSlide - 1].play()
        }
        task2_begin.style.display = 'none'


    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task2_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task2_slide.append(element)

    task2_prev.addEventListener('click', () => {
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
            task2_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task2_prev.style.opacity = 0
        }


    })

    task2_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task2_prev.style.opacity = 1
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
            task2_next.style.opacity = 0
        }

    })
})()