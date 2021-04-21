function loadAddForm(){
    let urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get('type');
    addForm(type);
}

function addForm(type){
    localStorage.setItem("Type",type);
    let html = [];
    constructForm(html,type);
    document.getElementById("content").innerHTML = html.join("");
}

function constructForm(html,type){
    html.push("<div class='container'>");
    html.push("<div class='card'>");
    html.push("<form class='myAddForm' id='myAddForm' action='/inicio.html' onsubmit='validateAdd()'>");   
    addHeader(type,html);
    html.push("<div>");
    html.push("<label for='image' class='control-label'>Imagen: </label>");
    html.push("<input type='text' id='image' required>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='name' class='control-label'>Nombre: </label>");
    html.push("<input type='text' id='name' required>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='dateOfBirth' class='control-label'>Fecha de nacimiento: </label>");
    html.push("<input type='text' id='dateOfBirth' required>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='dateOfDeath' class='control-label'>Fecha de fallecimiento: </label>");
    html.push("<input type='text' id='dateOfDeath'>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='wiki' class='control-label'>Wiki: </label>");
    html.push("<input type='text' id='wiki'>");
    html.push("</div>");
    html.push("<div class='container'>");
    html.push("<button class='btn btn-success' type='submit'>Guardar</button>");
    html.push("</div>");
    html.push("</form>");
    html.push("</div>");
    html.push("</div>");
}

function addHeader(type,html){
    if(type == "Products")
        html.push("<h3>Añadiendo Nuevo Producto:</h3>");
    else if(type == "Scientists")
        html.push("<h3>Añadiendo Nueva Persona:</h3>");
    else 
        html.push("<h3>Añadiendo Nueva Entidad:</h3>");
}

function validateAdd(){
    let type = localStorage.getItem("Type");
    console.log(type);
    updateData(type);
}

function updateData(type){
    let image = document.getElementById("image").value;
    let name  = document.getElementById("name").value;
    let dateOfBirth  = document.getElementById("dateOfBirth").value;
    let dateOfDeath  = document.getElementById("dateOfDeath").value;
    let wiki  = document.getElementById("wiki").value;

    let element = {
        Index: '',
        Name: name,
        DateOfBirth: dateOfBirth,
        DateOfDeath: dateOfDeath,
        Wiki: wiki,
        Image: image,
        Type: type,
        Relations: ''
    }
    saveData(type,element);
}

function saveData(type,element){
    addNoReplyIndex(type,element);
    let obj = localStorage.getItem(type);
    obj = JSON.parse(obj);
    obj.push(element);
    console.log(obj);
    obj = JSON.stringify(obj);
    localStorage.setItem(type,obj);
}

function addNoReplyIndex(type,element){
    let obj = localStorage.getItem(type);
    obj = JSON.parse(obj);
    obj.forEach(x => {
        let ids = "" + x.Index; 
        maximum = Math.max(ids);
        localStorage.setItem("Maximum",maximum);
    });
    let index = localStorage.getItem("Maximum");
    index++;
    index = index + "";
    element.Index = index;
}