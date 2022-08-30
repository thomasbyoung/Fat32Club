{/* <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Office</th>
              <th scope="col">Position</th>
              <th scope="col">Department</th>
              <th scope="col">Assigned To</th>
              <th scope="col">%</th>
              <th scope="col">Effective Date</th>
            </tr>
          </thead>
          <tbody>
    </tbody>
</table> */}


var data = [
    { "name": "Tanya Thisisalotofpressure", "office": "Chicago..? idk", "position": "s... s... sales?", "department": "she's already in sales", "assignedto": "you", "percent": "1000%", "startdate": "never >:)"},
    { "name": "5002", "office": "Glazed", "position": "big brain", "department": "big brainers", "assignedto": "t-money$$$", "percent": "110%", "startdate": "now >:)"},
    { "name": "5005", "office": "Sugar", "position": "big brain", "department": "big brainers", "assignedto": "t-money$$$", "percent": "110%", "startdate": "now >:)"},
    { "name": "5007", "office": "Powdered Sugar", "position": "big brain", "department": "big brainers", "assignedto": "t-money$$$", "percent": "110%", "startdate": "now >:)"},
    { "name": "5006", "office": "Chocolate with Sprinkles", "position": "big brain", "department": "big brainers", "assignedto": "t-money$$$", "percent": "110%", "startdate": "now >:)"},
    { "name": "5003", "office": "Chocolate", "position": "big brain", "department": "big brainers", "assignedto": "t-money$$$", "percent": "110%", "startdate": "now >:)"},
    { "name": "5004", "office": "Maple", "position": "big brain", "department": "big brainers", "assignedto": "t-money$$$", "percent": "110%", "startdate": "now >:)"}
]

function populateList(data){
    for (element in data){
      row = table.insertRow();
      for (key in element){
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
      }
    }
  }

  let table = document.querySelector("table");

populateList(data)