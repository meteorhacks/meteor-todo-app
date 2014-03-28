Template.main.events({
  'click #add-todo': function () {
    var todoText = $('#input-todo').val();
    if(todoText.length > 0 ){
      Todos.insert({'title': todoText});
      $('#input-todo').val('');
    } 
  },

  'click .delete-todo': function () {
    Todos.remove(this._id);
  },

  'change .todo-done ': function(e){
    var isDone = $(e.target).is(':checked');
    Todos.update({_id: this._id}, {$set: {isDone: isDone}})
  }
});

Template.main.todosList = function(){
  return Todos.find();
}