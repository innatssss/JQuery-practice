// add new task
function addTask(taskName) {
  $("#todo-list").append(
    '<li><input type="checkbox">' +
      taskName +
      '<button class="remove-btn">Remove</button></li>'
  );
}

// remove a task
function removeTask() {
  $(this).parent().remove();
}

// mark a task as complete
function markAsComplete() {
  $(this).parent().toggleClass("completed");
}

// To submit form
$("#todo-form").submit(function (event) {
  event.preventDefault();
  let taskName = $("#todo-input").val();
  if (taskName.trim() !== "") {
    addTask(taskName);
    $("#todo-input").val("");
  }
});

// Remove button click
$("#todo-list").on("click", ".remove-btn", removeTask);

// Checkbox change
$("#todo-list").on("change", 'input[type="checkbox"]', markAsComplete);
