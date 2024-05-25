

function newItem() {
    /* Add a new item*/
    let inputValue = $('#input').val();
    let li = $('<li>').text(inputValue);
    $('#list').append(li);

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




} 
