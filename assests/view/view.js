let viewData = JSON.parse(sessionStorage.getItem("details"))
const body = document.querySelector("body")

body.innerHTML = `
<div class="card bg-warning" style="width: 18rem">
<div class="card-body">
    <h5 class="card-title">${viewData.companyName}</h5>
    <p class="card-text">
       Contact Name:  ${viewData.contactName}
    </p>
    <p class="card-text">
    Contact Title:  ${viewData.contactTitle}
 </p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item bg-warning">Country: ${viewData.address.country}</li>
    <li class="list-group-item bg-warning">City: ${viewData.address.city}</li>
    <li class="list-group-item bg-warning">Street: ${viewData.address.street}</li>
    <li class="list-group-item bg-warning">Region: ${viewData.address.region}</li>
    <li class="list-group-item bg-warning">Postal Code: ${viewData.address.postalCode}</li>
    <li class="list-group-item bg-warning">Phone: ${viewData.address.phone}</li>
</ul>
<div class="card-body">
    <a href="../index/index.html" class="btn btn-primary">Go Back</a>
</div>
</div>
`