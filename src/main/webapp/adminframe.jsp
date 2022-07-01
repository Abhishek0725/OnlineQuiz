<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/4930e02a36.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/adminframe.css">
    <script async type="text/javascript" src="js/adminframe.js"></script>
     <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <title>Document</title>
</head>
<body>
    <div class="mycontainer">
        <div class="sidenav">
            <a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a>
            <a href="#"><i class="fas fa-user-graduate "></i> Student</a>
            <a href="#"><i class="fas fa-chalkboard-teacher"></i> Teacher</a>
            <button class="dropdown-btn"><i class="far fa-edit"></i>Exam 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
              <a href="#">Add Exam</a>
              <a id="show_question_details" href="#">Show</a>
              <a href="#">Update</a>
              <a href="#">Delete</a>
            </div>
        </div>    
        <div class="nav">
            <div class="ham"><i class="fas fa-bars"></i>
            
                <div class="user">Admin</div>
            </div>
            
        </div>
    
    <div class="box" style="display: none;">
        <h2>Exam Details</h2>
        <form action="javascript:void(0)" onsubmit="examDetails()">
            <div class="row">
              <div class="col-25">
                <label for="exam">Exam</label>
              </div>
              <div class="col-75">
                <input type="text" id="exam" placeholder="Java">
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="examid">ExamId</label>
              </div>
              <div class="col-75">
                <input type="text" id="examid" placeholder="JAVA123">
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="tot_ques">Total Question</label>
              </div>
              <div class="col-75">
                <input type="text" id="tot_ques" placeholder="10">
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="tot_marks">Total  Marks</label>
              </div>
              <div class="col-75">
                <input type="text" id="tot_marks" placeholder="100">
              </div>
            </div>
            <div class="row">
              <input type="submit" value="Submit">
            </div>
          </form>
    </div>
    </div>
    <div class="add_ques"></div>
    <div class="show_exam h5"></div>
    <div class="show_ques" style="display: none;">
    <div class="container mt-5">
  <div class="d-flex justify-content-center row">
      <div class="col-md-10 col-lg-10">
          <div class="border">
              <div class="question bg-white p-3 border-bottom">
                  <div class="d-flex flex-row justify-content-between align-items-center mcq">
                      <h4 id="exam_name">MCQ Quiz</h4><span>(5 of 20)</span>
                  </div>
              </div>
              <div class="question bg-white p-3 border-bottom">
                  <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">Which of the following country has largest population?</h5>
                  </div>
                  <div class="option ml-2">
                      <label class="radio"><span>Brazil</span>
                      </label>
                  </div>
                  <div class="option ml-2">
                      <label class="radio"><span class="ans">Germany</span>
                      </label>
                  </div>
                  <div class="option ml-2">
                      <label class="radio"><span>Indonesia</span>
                      </label>
                  </div>
                  <div class="option ml-2">
                      <label class="radio"><span>Russia</span>
                      </label>
                  </div>
              </div>
              <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button class="btn btn-primary d-flex align-items-center btn-danger" type="button"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button class="btn btn-primary border-success align-items-center btn-success" type="button">Next<i class="fa fa-angle-right ml-2"></i></button></div>
          </div>
      </div>
  </div>
</div>
    </div>
    <script>
        /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        
        for (i = 0; i < dropdown.length; i++) {
          dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
          } else {
          dropdownContent.style.display = "block";
          }
          });
        }
        </script>
</body>
</html>