const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(response => response.json())
      .then(json => displayData(json))
}

const displayData = (allData) => {
    // console.log(allData)
    
    allData.forEach(element => {
        console.log(element)
    })
}


loadData();