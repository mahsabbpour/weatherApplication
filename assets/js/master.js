let _search = document.getElementById('search')

const _list = document.getElementById('list')

const _send = document.getElementById('send')

const apiKey = '3dd0b1f8f6970a44222ca9136ca79a4b'

_send.addEventListener('click', function () {

    _searchVal = _search.value

    const _apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${_searchVal}&appid=${apiKey}&units=metric`
    fetch(_apiUrl)
        .then(res => res.json())
        .then(myData=>{

            let now = new Date()
            let nDate = nowDate(now)

            _list.innerHTML= ''
            _search.value = ''
            _search.focus()
            
            const _des = `${myData.weather[0]["description"]}`

            const _icon = `https://openweathermap.org/img/wn/${myData.weather[0].icon}@2x.png`

            let _li = document.createElement('li')
            _li.classList.add('py-2' ,'text-light')

            _li.innerHTML =`

            <div class='row justify-content-around px-0 mx-0 g-0'>
            <span class='d-flex col-12 justify-content-center dispaly-6 text-light'>${nDate}</span>

            <h2 class='col-10 text-center text-light'><i class="bi bi-geo-alt-fill"></i>${myData.name}, ${myData.sys.country}</h2> 
            <div class='line'></div>
            <img class='col-3' src='${_icon}'>
            <h1 class='col-7 d-flex align-items-center justify-content-center text-light'>${Math.round(myData.main.temp_min)}°c</h1>
            <p class'col-4 text-light display-2'>${_des}</p>
            <div class='line'></div>
            <ul class='row px-0 mx-0 py-2'>
            <li class='col text-center'><i class="bi bi-wind"></i>windy ${myData.wind.speed} NE</li>
            <li class='col text-center'><i class="bi bi-droplet"></i> ${myData.main.humidity} % </li>
            <li class='col text-center'><i class="bi bi-speedometer"></i> ${Math.round(myData.main.pressure)} </li>
            </ul>

            
            
            
            
            `
            document.getElementById('list').appendChild(_li)



        })


})

function nowDate(today){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[today.getDay()]
    let month = months[today.getMonth()]
    let year = today.getFullYear()
    let date = today.getDate()


    return `${day} , ${date} ${month} ${year}`


}