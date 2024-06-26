var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})

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

/////////////////////////////////////////////////////////////////////////////////////////////////////

const display = document.getElementById('display'); 
const buttons = document.querySelectorAll('button'); 
let timerId = null;
let minutes = 0;
let seconds = 0;
let isPaused = false;

function updateDisplay() { // Function that updates the display
  const formattedMinutes = minutes.toString().padStart(2, '0'); // Insures 2 digits
  const formattedSeconds = seconds.toString().padStart(2, '0'); // Insures 2 digits
  display.textContent = `${formattedMinutes}:${formattedSeconds}`; // Shows the time
}

function decrementTime() { // Decreasing timer by one second
  if (seconds === 0) {
    if (minutes === 0) { // If minutes are 0 it clears minutes and becomes seconds
      clearInterval(timerId);
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  updateDisplay(); // Updates the display
}

function startTimer() { // Starts the timer
  if (timerId !== null) clearInterval(timerId); // Checks if timer is already running
  timerId = setInterval(decrementTime, 1000); //  It updates everytime (1 second)
  isPaused = false; // Not paused
}

function pauseTimer() { // Pause the timer
  if (timerId !== null) clearInterval(timerId); // Checks if timer is already running
  isPaused = true; // Paused, Stops the update of timer
}

function stopTimer() { // Stop the Timer
  clearInterval(timerId); // Clears timer
  minutes = 0; // minutes timer
  seconds = 0; // seconds timer
  isPaused = false;
  updateDisplay(); // Updates
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    switch (this.id) { 
      case 'plus': // Add 5 mins
        minutes += 5;
        break;
      case 'minus': // If minus is greater than 0, minus is by 5
        if (minutes > 0) minutes -= 5;
        break;
      case 'pause': // Execute pause timer
        pauseTimer();
        break;
      case 'stop': // Execute stop timer
        stopTimer();
        break;
      case 'play': // If it's paused, start the timer
        if (!isPaused) {
          startTimer();
        } else {
          // Resume timer if paused
          timerId = setInterval(decrementTime, 1000);
          isPaused = false;
        }
        break;
    }
    updateDisplay(); // Update display
  });
});

updateDisplay(); // Update display

/////////////////////////////////////////////////////////////////////////////////////////////////////

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