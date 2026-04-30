// Primary button
let primaryBtn = document.getElementById('primary-btn')
primaryBtn.classList.add('bg-indigo-700')


// load all phone

let loadPhoneInformation= async(search='samsung',isShowAll)=>{
    let res = await fetch( `https://openapi.programming-hero.com/api/phones?search=${search}`)
    let data = await res.json();
    let phones = data.data
    displayShowAllPhone(phones,isShowAll)
}

let displayShowAllPhone=(phones,isShowAll)=>{
        console.log(phones);
        let phoneContainer = document.getElementById('phone-container')
        phoneContainer.textContent ='';

        // show all phone
        let showAll = document.getElementById('show-all-container')
        if(phones.length>12 && !isShowAll){
            showAll.classList.remove('hidden')
        }
        else{
            showAll.classList.add('hidden')
        }

        if(!isShowAll){
            phones = phones.slice(0,12);
        }

        phones.forEach(phone=>{
            console.log(phone)

        // get phone details and view ui

            let phoneShow = document.createElement('div')
            phoneShow.classList = 'card bg-base-100 w-full shadow-sm mt-5'
            phoneShow.innerHTML = `
                <figure>
                    <img class = "object-contain rounded-xl w-full h-48"
                    src="${phone.image}"
                    alt="Shoes" />
                </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
        `
        phoneContainer.appendChild(phoneShow)

    })
    toggleLoadingSpine(false);
}

// search phone

let searchBtn = (isShowAll)=>{
    toggleLoadingSpine(true);
    let searchContainer = document.getElementById('search-container')
    let searchValue = searchContainer.value;
    console.log(searchValue)
    loadPhoneInformation(searchValue,isShowAll)
}

// Loading spine

let toggleLoadingSpine = (isLoading)=>{
    let loadingDot = document.getElementById('loadingDot')
    if(isLoading){
        loadingDot.classList.remove('hidden')
    }
    else{
        loadingDot.classList.add('hidden')
    }
}


//  handle show all

let handleShoeAll = () =>{
    searchBtn(true)
}

loadPhoneInformation();