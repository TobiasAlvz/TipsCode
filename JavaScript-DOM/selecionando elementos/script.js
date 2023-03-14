function show() {
  // Para obter um elemento unico apartir do Id
  const byId = document.getElementById("title");
  console.log(byId);
  // Para varios elemetos por suas tags
  const byTagName = document.getElementsByTagName("li");
  console.log(byTagName);
  // a partir de uma classe
  const byClassName = document.getElementsByClassName("btn");
  console.log(byClassName);
  // a partir de uma query (semelhante aos seletores do CSS)
  const contacts = document.querySelectorAll("#list > li");
  console.log(contacts);
  // a partir de uma query (Somente 1 elemento)
  const contact = document.querySelector("#listOne");
  console.log(contact);

  const ancor = (document.querySelector("#list > li > a").style.color = "red");
}
