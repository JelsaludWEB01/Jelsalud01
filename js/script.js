// Buscar contratos en la tabla
document.getElementById("search").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("table tbody tr");

    rows.forEach(function(row) {
        let columns = row.querySelectorAll("td");
        let contractNumber = columns[0].textContent.toLowerCase();
        let contractorName = columns[1].textContent.toLowerCase();

        if (contractNumber.includes(filter) || contractorName.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
