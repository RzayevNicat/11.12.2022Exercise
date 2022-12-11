let company = document.querySelector(".company")
let contact = document.querySelector(".contact")
let country = document.querySelector(".country")
let create = document.querySelector(".btn-success")

create.addEventListener("click", function() {
    axios.post("https://northwind.vercel.app/api/suppliers", {
        companyName: company.value,
        contactName: contact.value,
        address: {
            country: country.value
        }
    }).then(res => console.log(res))
})