const loadData = async (isShowAll) => {
   const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
   const data = await res.json();
   const allData = data.data.tools;
//    console.log(allData)
    displayPhones(allData, isShowAll)
}

const displayPhones = (data, isShowAll) => {
    // console.log(data)
    const cardItem = document.getElementById('card-container')
    const showAllBtn = document.getElementById('showAll-btn')
    
    if(data.length > 6 && !isShowAll){
      showAllBtn.classList.remove('hidden')
    }
    else{
      showAllBtn.classList.add('hidden')
    }

    if(!isShowAll){
      data = data.slice(0, 6)
    }

    data.forEach((item) => {
        // console.log(item)
        const createCard = document.createElement('div')
        createCard.innerHTML = `
        <div class="card w-80 bg-base-100 shadow-xl border-2 my-10">
        <figure class="p-6"><img class="rounded-2xl" src="${item.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <ol>
            <li> ${item.features[0]}</li>
            <li> ${item.features[1]}</li>
            <li> ${item.features[2]}</li>
          </ol>
          <hr class="my-2">
          <div class="card-actions justify-between items-center">
            <div class="space-y-2">
                <h1 class="text-lg font-semibold">${item.name}</h1>
                <p class="flex gap-1"><img src="./image/cal.png" alt="">${item.published_in}</p>
            </div>
            <button class="rounded-full bg-[#FEF7F7] p-2"><img src="./image/arrow.png" alt=""></button>
          </div>
        </div>
        </div>
        `;
        cardItem.appendChild(createCard)
    })
}

const handleShowAll = () => {
  loadData(true);
}


loadData();