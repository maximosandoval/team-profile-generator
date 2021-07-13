//Place HTML template literals
//Loop thru statements for each position
//Add ${answer} the end of HTML where the data goes
const fs = require("fs");

//function to add employee
function addEmployee(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i].getRole());
    if (arr[i].getRole() == "Manager") {
      `<div class="card">
       <div class="card-header">
        <h2 class="card-fullname"><i class="fas fa-mug-hot mr-2"></i>Manager</h2>
        </div>   
        <div class="card-body">
        <ul class="list-main">
          <li class="list-id">ID:${manager.id}</li>
          <li class="list-id">Email:${manager.email}<a href="mailto:"></a></li>
          <li class="list-id">Office Number:${manager.officenumber}</li>
        </ul>
      </div>
      </div>`;
      break;
    }
    if (arr[i].getRole() == "Engineer") {
      `<div class="card">
        <div class="card-header">
         <h2 class="card-fullname"><i class="fas fa-mug-hot mr-2"></i>Engineer</h2>
         </div>   
         <div class="card-body">
         <ul class="list-main">
           <li class="list-id">ID:${engineer.id}</li>
           <li class="list-id">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
           <li class="list-id">GitHub:${engineer.github}</li>
         </ul>
       </div>
       </div>`;
      break;
    }
    if (arr[i].getRole() == "Intern") {
      renderIntern(arr[i]);
      ` <div class="card">
 <div class="card-header">
  <h2 class="card-fullname"><i class="fas fa-mug-hot mr-2"></i>Intern</h2>
  </div>   
  <div class="card-body">
  <ul class="list-main">
    <li class="list-id">ID:${intern.id}</li>
    <li class="list-id">Email:<a href="mailto:${intern.email}"></a>${intern.email}</li>
    <li class="list-id">School:${intern.school}</li>
  </ul>
</div>
</div>`;
    }
    break;
  }
}
fs.writeFileSync("./dist/index.html", renderHTML, (err) => {
  if (err) throw err;
});

module.exports = generateHTML;
