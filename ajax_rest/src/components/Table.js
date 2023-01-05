class Table {
    init() { // init - initialised (method)

        // create a <table></table>
        const table = document.createElement("table")
        
        //table row
        table.innerHTML = `
            <tr> 
                <th>ID</th>
                <th>Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
            `
        return table;
    }

    // we need to add all data to the table

    row(data) {
        // creates a <tr></tr>
        const row = document.createElement("tr")
        row.id = `${data.id}`

        //create table cells
        row.innerHTML = `
            <td>${data.id}</td> 
            <td>${data.first_name}</td>
            <td>${data.last_name}</td>
            <td>${data.email}</td>
            <td>${data.gender}</td>
        `
        return row
    } // ${data.id} - template literals
}

export default Table;