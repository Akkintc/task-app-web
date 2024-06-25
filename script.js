const taskInput = document.querySelector("#newtask input");
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Simulate a click on the push button
    // Entering also pushes the button
    document.querySelector('#push').click();
  }
});

document.querySelector('#push').onclick = function() {
  const taskName = document.querySelector('#task-name').value.trim();
  const fileUpload = document.querySelector('#file-upload');

  // If no image is uploaded
  // taskName.length === 0 checks if task input is empty
  // !fileUpload.files.length checks if file upload imput is empty
  if (taskName.length === 0 && !fileUpload.files.length) {
    alert("Please Enter a Task or Upload an Image");
    return;
  }

  // Image Task
  const newTask = document.createElement('div'); // Creates a div element, it's an individual task
  newTask.classList.add('task'); // for css

  if (fileUpload.files.length > 0) { // Checks the file input if there's any images
    const reader = new FileReader(); // Reads the uploaded file

    // The onload event occurs when an object has been loaded. in this case it's the image loaded
    reader.onload = function(e) { // Executes onload event
      const image = document.createElement('img'); // Creates element 
      image.classList.add('task-image'); // Optional for styling
      image.src = e.target.result; // Finds the source of the image, which contains the data url of the image
      newTask.insertBefore(image, newTask.firstChild); // Creates image element
    };
    reader.readAsDataURL(fileUpload.files[0]); 
  }

  // Task Name
  const taskNameSpan = document.createElement('span'); //Creates html element "span"
  taskNameSpan.id = 'taskname'; //for css
  taskNameSpan.textContent = taskName; //Task name input becomes the task name
  newTask.appendChild(taskNameSpan); // child of the new task

  // Delete Button
  const deleteButton = document.createElement('button'); //Creates html element "button"
  deleteButton.classList.add('delete'); //for css
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>'; //Trash Icon
  newTask.appendChild(deleteButton); // child of the new task

  // Delete Button Functionality
  deleteButton.onclick = function() {
    this.parentNode.remove(); // Remove the entire task element
  };

  // Toggle Completed Class on Click
  newTask.onclick = function() {
    this.classList.toggle('completed');
  };

  // Append task element with image (if uploaded) and task name
  // Each task is a child inside tasks container
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