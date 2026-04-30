// Primary button
let primaryBtn = document.getElementById('primary-btn')
primaryBtn.classList.add('bg-indigo-700')


// load all phone

let loadPhoneInformation= async()=>{
    let res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    let data = await res.json();
    let phones = data.data
    displayShowAllPhone(phones)
}

let displayShowAllPhone=(phones)=>{
    console.log(phones);
    phones.forEach(phone=>{
        console.log(phone)
        let phoneContainer = document.getElementById('phone-container')
        let phoneShow = document.createElement('div')
        phoneShow.classList = 'card bg-base-100 w-full shadow-sm'
        phoneShow.innerHTML = `
            <figure>
                <img
                src="${phone.image}"
                alt="Shoes" />
            </figure>
                <div class="card-body">
                    <h2 class="card-title">Name</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Show Details</button>
                    </div>
                </div>
        `
        phoneContainer.appendChild(phoneShow)

    })
}
loadPhoneInformation();