function newItem() {
    /* Add a new item*/
    
    let inputValue = $('#input').val();
    let li = $(<li></li>).text(inputValue);
    $('#list').append(li);

    if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }




}