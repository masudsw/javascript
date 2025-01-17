const loadingSpinner=document.getElementById('loading-spiner');
const loadPhone = async (searchItem) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchItem}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = phones => {
    if(phones.length>12){
        phones=phones.slice(0,12);
        document.getElementById('btn-show-all').classList.remove('hidden');
    }
    else{
        document.getElementById('btn-show-all').classList.add('hidden');
    }
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.innerHTML='';
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact bg-gray-200 shadow-xl`;
        phoneCard.innerHTML = `
                <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
        `
        phoneContainer.appendChild(phoneCard);

    });
}

const handleSearch=()=>{
    const searchItem=document.getElementById('searchInput').value;

    loadPhone(searchItem);
}

