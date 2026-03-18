const txt = document.getElementById('textInput')
const addBtn = document.getElementById('addBtn')
const ulref = document.getElementById('listOfTask')




addBtn.addEventListener("click", function () {


    const valueOfInput = txt.value

    if (valueOfInput === "") {
        return window.alert('Kuchto Likh Naa Usme Khali Mt Chodd')
    };

    let list = document.createElement("li")

    let taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = valueOfInput;
    taskTextSpan.className = "task-text";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.className = "delete-btn";

   
    deleteBtn.addEventListener('click', function () {
        list.remove();
    });

    // ------------------------------------------------------------------------------------
    taskTextSpan.addEventListener('dblclick', function() {
       
        const editInput = document.createElement('input');
        editInput.type = "text";
        editInput.value = taskTextSpan.textContent; 
        editInput.className = "edit-input";

       
        list.insertBefore(editInput, taskTextSpan);
        list.removeChild(taskTextSpan);
        editInput.focus(); 

      
        function saveEdit() {
            const newText = editInput.value.trim();
            if (newText !== "") {
                taskTextSpan.textContent = newText; 
            }
          
            list.insertBefore(taskTextSpan, editInput);
            list.removeChild(editInput);
        }

        
        editInput.addEventListener('blur', saveEdit);
        
      
        editInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                saveEdit();
            }
        });
    });

list.appendChild(taskTextSpan);
    ulref.appendChild(list)
    list.appendChild(deleteBtn)

    txt.value = ""


})