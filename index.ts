const URl = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
  const response = await fetch(URl);
document.write("response"+ response);
  const data = await response.json();
  console.log(data);

  // Create a table element
  var table = document.createElement("table");

  // Create a header row
  var headerRow = document.createElement("tr");

  // Create header cells and add text to them

  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Title";
  headerRow.appendChild(headerCell1);

  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Body";
  headerRow.appendChild(headerCell2);

  // Add the header row to the table
  table.appendChild(headerRow);

  // Loop through the data and create a new row for each entry
  for (var i = 0; i < data.length; i++) {
    var rowData = data[i];

    // Create a new row
    var row = document.createElement("tr");

    // Create cells and add text to them
    var cell1 = document.createElement("td");
    cell1.textContent = rowData.title;
    row.appendChild(cell1);

    var cell2 = document.createElement("td");
    cell2.textContent = rowData.body;
    row.appendChild(cell2);

    // Add the row to the table
    table.appendChild(row);
  }
}