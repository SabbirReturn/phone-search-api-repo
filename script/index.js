// Primary button
let primaryBtn = document.getElementById('primary-btn')
primaryBtn.classList.add('bg-indigo-700')


// load all phone

let loadPhoneInformation= async(search=13)=>{
    let res = await fetch( `https://openapi.programming-hero.com/api/phones?search=${search}`)
    let data = await res.json();
    let phones = data.data
    displayShowAllPhone(phones)
}

let displayShowAllPhone=(phones)=>{
            console.log(phones);
        let phoneContainer = document.getElementById('phone-container')
        phoneContainer.textContent ='';


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
}

// search phone

let searchBtn = ()=>{
    let searchContainer = document.getElementById('search-container')
    let searchValue = searchContainer.value;
    console.log(searchValue)
    loadPhoneInformation(searchValue)
}



loadPhoneInformation();