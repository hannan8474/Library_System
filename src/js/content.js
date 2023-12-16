document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector("#form-book-add");
    const table = document.querySelector("#book-table-body");
    form.addEventListener('submit', function(event)
    {
        event.preventDefault();
        const nameInput = form.querySelector("#FormControlInput1").value;
        const bookInput = form.querySelector("#FormControlInput2").value;
        const authorInput = form.querySelector("#FormControlInput3").value;
        const isbnInput = form.querySelector("#FormControlInput4").value;
        const priceInput = form.querySelector("#FormControlInput5").value;

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td class="table-data">${nameInput}</td>
            <td class="table-data">${bookInput}</td>
            <td class="table-data">${authorInput}</td>
            <td class="table-data">${isbnInput}</td>
            <td class="table-data">${priceInput}</td>
        `;

        table.appendChild(newRow);
        form.reset();
    });
});