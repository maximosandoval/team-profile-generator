//Need to put in this file the HTML in template literals
//Loop thru with for
//Add ${answer} the end of HTML where the data goes

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    <title>Maximo Sandoval Team Directory</title>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron md-3 mainheader">
      <h1>Team Directory</h1>
    </div>
    </div>
    <div class="container">
      <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <br><br>
      <!--Start Manager Card-->
        <div class="card">
       <div class="card-header">
        <h2 class="card-fullname"><i class="fas fa-mug-hot mr-2"></i>Manager</h2>
        </div>   
        <div class="card-body">
        <ul class="list-main">
          <li class="list-id">ID:${employee.id}</li>
          <li class="list-id">Email:}<a href="mailto:${employee.email}"></a></li>
          <li class="list-id">Office Number:</li>
        </ul>
      </div>
      </div>
      <!--END Manager Card-->

      <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>`;

//Needs to be seperate item
` <!--Start Intern Card-->
<div class="card">
 <div class="card-header">
  <h2 class="card-fullname"><i class="fas fa-mug-hot mr-2"></i>Intern</h2>
  </div>   
  <div class="card-body">
  <ul class="list-main">
    <li class="list-id">ID:</li>
    <li class="list-id">Email:<a href="mailto:"></a></li>
    <li class="list-id">School:</li>
  </ul>
</div>
</div>
<!--End Intern Card-->`;
