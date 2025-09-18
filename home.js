// heart count
const hearts = document.getElementsByClassName('heart')
for (const heart of hearts) (
    heart.addEventListener("click", function () {
        const totalHeart = document.getElementById('heart-nav').innerText;
        const currentHearts = Number(totalHeart) + 1;
        document.getElementById('heart-nav').innerText = currentHearts;
    })
)