const validator = () => {
    let todo = document.taskForm.taskItem.value

    if(todo === ""){
        alert('cannot add an empty item')
    }
}