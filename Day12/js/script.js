
if(!localStorage.getItem('firstname') && (!localStorage.getItem('lastname') ) ){
  localStorage.getItem('firstname', prompt('what is first name') );
  localStorage.getItem('lastname', prompt('what is last name') );
  sessionStorage.setItem('password',prompt('what is your password'));
}else{
  var firstname = localStorage.getItem('firstname');
  var lastname = localStorage.getItem('lastname');
  alert(firstname + lastname + ' you are back!');
}
