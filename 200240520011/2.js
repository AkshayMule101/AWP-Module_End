function disp() {
  let name = document.querySelector("#Username1").value;
  let pass = document.querySelector("#Password1").value;
  let email = document.querySelector("#Email1").value;

  //username,password,email values are printed on console using dom

  let clonename = name.cloneNode(true);

  let clonepass = pass.cloneNode(true);

  let clonemail = email.cloneNode(true);


}