const SECONDS_IN_WEEK = 604800;

function todoItemClass(completed, dateCreated) {
  if (completed) {
    return "completed";
  } else if (
    !completed &&
    (Date.now() - dateCreated.getTime()) / 1000 > SECONDS_IN_WEEK
  ) {
    return "todoItem has-background-danger-light";
  } else {
    return "todoItem";
  }
}

module.exports = (app) => {
  app.locals.todoItemClass = todoItemClass;
};
