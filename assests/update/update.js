let edited = JSON.parse(sessionStorage.getItem("edit"))
const company = document.querySelector(".company")
const contact = document.querySelector(".contact")
const country = document.querySelector(".country")
const link = document.querySelector(".btn-success")
company.value = edited.companyName
contact.value = edited.contactName
country.value = edited.address.country
link.addEventListener("click", function(e) {

    axios.put(`https://northwind.vercel.app/api/suppliers/${edited.id}`, {
        companyName: company.value,
        contactName: contact.value,
        contactTitle: edited.contactTitle,
        address: {
            country: country.value,
            street: edited.address.street,
            city: edited.address.street,
            region: edited.address.region,
            postalCode: edited.address.postalCode,
            phone: edited.address.phone
        }

    }).then(res => console.log(res))

})