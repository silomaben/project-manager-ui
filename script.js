class Project{
    constructor(title,description,enddate){
        this.title=title;
        this.decription=description;
        this.enddate=enddate
    }
}


let projectList = [];



  
  const form = document.getElementById("projects-form");
  let projectListContainer = document.querySelector(".projects-container");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let project_title = document.getElementById("title").value;
    let project_description = document.getElementById("description").value;
    let project_enddate = document.getElementById("deadline").value;
    

    if (project_title!=='' & project_description!=='' & project_enddate!=='') {
      let newProject = new Project(project_title,project_description,project_enddate);

      projectList.push(newProject);
    displayProjects(projectList);
    form.reset();
    } else{
      alert('fill all fields before submiting!')
    }
    
  
  
  });
  
  function displayProjects(list) {
    projectListContainer.innerHTML = "";
  
    projectList.forEach((project, index) => {
    
      const projectItem = document.createElement("div");
      projectItem.className = "new-project";
  
      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.title;

      const detail = document.createElement("div");
      detail.className = "details";
  
      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;
      projectDescription.className = "details-paragraph";
  
      const projectDeadline = document.createElement("p");
      projectDeadline.textContent = `Enddate: ${project.enddate}`;

  
      const editButton = document.createElement("button");
      editButton.textContent = "edit";

      // we edt unassigned projects
      editButton.addEventListener("click", () => {
        console.log("editing..")
        document.getElementById("title").value = project.title
        document.getElementById("description").value = project.decription;
        document.getElementById("deadline").value = project.enddate;
        

        let update =document.querySelector('#submit-btn')
        let form_btn =document.querySelector('#form-submit-btn')
        let form = document.querySelector('#projects-form')
        // let checkbox = document.querySelector('#checkbox')
       
        update.style.display = "block";
        form_btn.style.display = "none";


        // update.addEventListener("click", (event) => {
        //   event.preventDefault();

        //   let project_title_update = document.getElementById("title").value;
        //   let project_description_update = document.getElementById("description").value;
        //   let project_deadline_update = document.getElementById("deadline").value;
        //   let project_completed_update = document.querySelector("#checkbox").checked

        //   project.taskTitle = task_title_update
        //   project.taskDescription = task_description_update
        //   project.taskDeadline = task_deadline_update
        //   project.taskCompleted = task_completed_update

        //     // console.log(task);

        //     displayTasks(taskList);
        //     console.log(taskList);
        //     update.style.display = "none";
        //     form_btn.style.display = "block";
        //     form.reset()
        //     console.log(task.late, task.howlate)
            
        //   })
                
        // displayTasks();
      });
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        projectList.splice(index, 1);
        displayProjects(projectList);
      });
  
      // taskItem.appendChild(taskIteminner);
      projectItem.appendChild(projectTitle);
      projectItem.appendChild(projectDescription);
      projectItem.appendChild(detail)
      detail.appendChild(projectDeadline);
    //   detail.appendChild(projectCompleted);
      detail.appendChild(deleteButton);
      detail.appendChild(editButton);
  
      projectListContainer.appendChild(projectItem);
      
    });
    
  }


  let btnComplete = document.querySelector('#btn-complete');
  let btnActive = document.querySelector('#btn-active');
  let btnAll = document.querySelector('#btn-all');  
//   let btnClear = document.querySelector('#btn-clear');
  let itemsleft = document.querySelector('.items_left');
  

displayProjects(projectList);
console.log(projectList);
  
// btnClear.addEventListener('click', () => {
  
//   const filteredTasks = taskList.filter((item) => item instanceof Uncompleted_Todo);
//   console.log(filteredTasks);
//   taskList = filteredTasks
//   displayTasks(filteredTasks);
//   count()
  
// });

btnComplete.addEventListener('click', () => {
  const filteredTasks = taskList.filter((item) => item instanceof CompletedTodo);
  console.log("clicked complete");
  displayTasks(filteredTasks)
  count()
});
btnActive.addEventListener('click', () => {
  const filteredTasks = taskList.filter((item) => item instanceof Uncompleted_Todo);
  console.log("clicked complete");
  displayTasks(filteredTasks)
  count()
});
btnAll.addEventListener('click', () => {
  displayTasks(taskList)
  count()
});

// function count(){
//   let ongoingProjects = [];
//   let completeProjects = [];
//   const current_date = new Date();
//   projectList.forEach(project => {
//     const end_date = new Date(project.end_date);

//     if (end_date < current_date) {
//       ongoingProjects.push(project);
//     } else {
//       completeProjects.push(project);
//     }
//   });
  
//   count_remaining = ongoingProjects.length;
//   console.log(`ongoing${ongoingProjects}, completed${completeProjects}`)
//   itemsleft.textContent= count_remaining + " projects running"
// }
