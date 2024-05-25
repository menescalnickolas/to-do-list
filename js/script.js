

function newItem() {
    /* Add a new item*/
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    /*Cross Out Item*/
    function crossOut() {
        li.addClass('strike');
    }
    li.on('dblclick', crossOut);

    /*Delete Button*/
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    /*Adding Class DELETE to Delete Button*/
    function deleteListItem() {
        li.addClass('delete');
    }
    
} 
