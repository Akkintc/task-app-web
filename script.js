const taskInput = document.querySelector("#newtask input");
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Simulate a click on the push button
    document.querySelector('#push').click();
  }
});

document.querySelector('#push').onclick = function() {
  const taskName = document.querySelector('#task-name').value.trim();
  const fileUpload = document.querySelector('#file-upload');

  if (taskName.length === 0 && !fileUpload.files.length) {
    alert("Please Enter a Task or Upload an Image");
    return;
  }

  const newTask = document.createElement('div');
  newTask.classList.add('task');

  // Image (if uploaded)
  if (fileUpload.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const image = document.createElement('img');
      image.classList.add('task-image'); // Optional for styling
      image.src = e.target.result;
      newTask.insertBefore(image, newTask.firstChild); // Insert image before first child
    };
    reader.readAsDataURL(fileUpload.files[0]);
  }

  // Task Name
  const taskNameSpan = document.createElement('span');
  taskNameSpan.id = 'taskname';
  taskNameSpan.textContent = taskName;
  newTask.appendChild(taskNameSpan);

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  newTask.appendChild(deleteButton);

  // Delete Button Functionality
  deleteButton.onclick = function() {
    this.parentNode.remove(); // Remove the entire task element
  };

  // Toggle Completed Class on Click (optional)
  newTask.onclick = function() {
    this.classList.toggle('completed');
  };

  // Append task element with image (if uploaded) and task name
  tasksContainer.appendChild(newTask);

  // Clear Input Fields and File Selection
  fileUpload.value = ""; // Clear the file selector for next upload
  document.querySelector("#newtask input").value = "";
};



  function showThemeCenter() {
    document.getElementById('theme-center').classList.remove('hidden');
    document.getElementById('container').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
  }
  
  function hideThemeCenter() {
    document.getElementById('theme-center').classList.add('hidden');
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
  }
  
  function showCalendar() {
    document.getElementById('calendar-center').classList.remove('hidden');
    document.getElementById('container').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
  }
  
  function hideCalendar() {
    document.getElementById('calendar-center').classList.add('hidden');
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
  }

  function showTimer() {
    document.getElementById('timer-center').classList.remove('hidden');
    document.getElementById('container').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
  }
  
  function hideTimer() {
    document.getElementById('timer-center').classList.add('hidden');
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
  }

  function showSettings() {
    document.getElementById('settings-center').classList.remove('hidden');
    document.getElementById('container').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
  }
  
  function hideSettings() {
    document.getElementById('settings-center').classList.add('hidden');
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
  }

  var loader = document.getElementById("preloader");

  window.addEventListener("load", function(){
    loader.style.display = "none";
  })


  let profilePic = document.getElementById("tasks")
  let inputFile = document.getElementById("file-upload")

  const timeleft = document.getElementById('timer-input').value;

  var timerleft = 0;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000);
