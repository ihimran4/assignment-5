// heart count
const hearts = document.getElementsByClassName('heart')
for (const heart of hearts) (
    heart.addEventListener("click", function () {
        const totalHeart = document.getElementById('heart-nav').innerText;
        const currentHearts = Number(totalHeart) + 1;
        document.getElementById('heart-nav').innerText = currentHearts;
    })
)

function getElements(id) {
    const element = document.getElementById(id)
    return element;
}
// call alert , call history ,coin count
const callBtn = document.getElementsByClassName('call-btn')

for (let callButton of callBtn) {
    callButton.addEventListener("click", function () {
        // coin count
        const coin = getElements('coin').innerText;
        const currentCoin = Number(coin) - 20;
        if (currentCoin < 20) {
            alert('Not enough coin. At least 20 coins needed to call')
            return;
        }
        getElements('coin').innerText = currentCoin;


        // by childnodes
        const cardTitle = callButton.parentNode.parentNode.childNodes[3].innerText;

        // by children
        const cardCall = callButton.parentNode.parentNode.children[3].innerText;

        let time = new Date()
        let currentTime = time.toLocaleTimeString()
        // console.log(currentTime)

        const callHistory = getElements('call-history')

        const newHistory = document.createElement("div")
        newHistory.innerHTML = ` 
         <div class="flex justify-between items-center gap-3 p-4 bg-gray-100
         mb-4 rounded-lg ">
                    <div class = "">
                        <h1 class="text-2xl">${cardTitle}</h1>
                        <h2 class="text-xl text-gray-400">${cardCall}</h2>
                    </div>
                    <P class="text-lg  ">${currentTime}</P>
                </div>
                
                `;

        callHistory.append(newHistory);

        alert('calling' + " " + cardTitle + " " + cardCall);

    })
}
// clear call history
let clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener("click", function () {
    const callHistory = document.getElementById('call-history');
    callHistory.innerHTML = "";
})

const copyBtns = document.querySelectorAll('.copy-btn')
// copy count and copy to clipborad

for (let copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function () {
        const copyCount = document.getElementById('copy-count').innerText;
        const currentCopyCount = Number(copyCount) + 1
        document.getElementById('copy-count').innerText = currentCopyCount;


        //copy to clipboard
        // function copyTextToClipboard() {
        //     const callNums = document.getElementsByClassName('call')
        //     for (const callNum of callNums) {
        //         const copyCallNum = callNum.textContent;
        //         navigator.clipboard.writeText(copyCallNum)
        //         return
        //     }

        // }

        // const callNums = document.getElementsByClassName('call')
        // for(let callNum of callNums){
        //     const callNumber = callNum.innerText


        // }

        // const btnCalls = document.getElementsByClassName('call')
        // for (let callButton of btnCalls) {
        //     if
        //     let copyNum = callButton.innerText
        //     navigator.clipboard.writeText(copyNum)

        // }
        // alert('copied'+" "+copyNum)


    })
}
copyBtns.forEach(button => {
    button.addEventListener('click',() =>{
        const Number = button.parentNode.parentNode.children[3].textContent
        navigator.clipboard.writeText(Number)
          .then(() => {
            alert('Copied: ' + Number);
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
    })
})
