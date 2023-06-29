const tbody = document.querySelector("tbody")
axios.get("https://northwind.vercel.app/api/suppliers")
    .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            tbody.innerHTML += `        <tr>
        <td>${res.data[i].companyName}</td>
        <td>${res.data[i].contactName}</td>
        <td>${res.data[i].address.country}</td>
        <td id="${res.data[i].id}"> <a href="https://11-12-2022-exercise-nu7z.vercel.app/view/view.html"><i class="fa-solid fa-eye bg-primary"></i> </a> <a href="https://11-12-2022-exercise-nu7z.vercel.app/update/update.html"><i class="fa-solid fa-wrench bg-warning"></i></a> <a><i class="fa-solid fa-trash bg-danger"></i></a> </td>
      </tr>`

        }
        View(res.data)
        Edit(res.data)
        DeleteData(res.data)

    })

function View(elem) {
    let view = document.querySelectorAll(".fa-eye")
    view.forEach(element => {
        element.addEventListener("click", function(e) {
            let datas = elem
            datas.forEach(elements => {
                if (elements.id == e.target.parentElement.parentElement.id) {
                    sessionStorage.setItem("details", JSON.stringify(elements))
                }
            })
        })
    })
}

function Edit(elem) {
    let edit = document.querySelectorAll(".fa-wrench")
    edit.forEach(element => {
        element.addEventListener("click", function(e) {
            console.log(e.target.className);
            let dataa = elem
            dataa.forEach(elements => {
                if (elements.id == e.target.parentElement.parentElement.id) {
                    sessionStorage.setItem("edit", JSON.stringify(elements))
                }
            })
        })
    })
}

function DeleteData(elem) {
    let deleteData = document.querySelectorAll(".fa-trash")
    deleteData.forEach(element => {

        element.addEventListener("click", function(e) {
            let datta = elem
            datta.forEach(elements => {
                if (elements.id == e.target.parentElement.parentElement.id) {
                    axios.delete(`https://northwind.vercel.app/api/suppliers/${elements.id}`)
                    e.target.parentElement.parentElement.parentElement.remove();
                }
            })
        })
    })
}
// axios.delete("https://northwind.vercel.app/api/suppliers/29")
