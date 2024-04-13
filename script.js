let button = document.getElementById('button');
button.addEventListener('click', function () {
    for (let i = 0; i < 50; i++) {
        let spark = document.createElement('i');
        spark.classList.add('spark');

        // randomly position spark ele

        const randomX = (Math.random() - 0.5) * window.innerWidth;
        const randomY = (Math.random() - 0.5) * window.innerHeight;

        spark.style.setProperty('--x', randomX + 'px');
        spark.style.setProperty('--y', randomY + 'px');

        // add aniamtion to spark ele 

        const duration = Math.random() * 2 + 0.5;
        spark.style.animation = `animate ${duration}s
        ease-out forwards`;



        // random size for spark ele

        const randomSize = Math.random() * 8 + 2;
        spark.style.width = randomSize + 'px';
        spark.style.height = randomSize + 'px';

        document.body.appendChild(spark);

        // remove the spark elements after 2 secs
        setTimeout(function () {
            spark.remove();
        }, 2000);

    }
})