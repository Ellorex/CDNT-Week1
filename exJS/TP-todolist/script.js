function getToDo() {
    var todolist = new Array;
    var todo_item = localStorage.getItem('todo');
    if (todo_item != null) {
        todolist = JSON.parse(todo_item);
    }
    return todolist;
}

function addToDo() {
    var task = document.getElementById('todoinput').value; 
    var todolist = getToDo();
    todolist.push(task);
    localStorage.setItem('todo', JSON.stringify(todolist));
    showTodo();

    return false;
    
}

function deleteToDo() {
    var id = this.getAttribute('id');
    var todolist = getToDo();
    todolist.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todolist));
    showTodo();

}    

function showTodo() {
    var todolist = getToDo();

    var display = '<ul>';
    for(var i=0; i<todolist.length; i++) {
        display += '<li>' + todolist[i] + ' <button class="delete" id="' + i  + '">Supprimer</button></li>';
    };
    display += '</ul>';
 
    document.getElementById('todolist').innerHTML = display;
    var deletebutton = document.getElementsByClassName('delete');
    for (var i=0; deletebutton.length; i++) {
        deletebutton[i].addEventListener('click', deleteToDo);
    }

}
document.getElementById('todoadd').addEventListener('click', addToDo);
showTodo();

