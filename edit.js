function loadEditForm(){
    let urlParams = new URLSearchParams(window.location.search);
    let index = urlParams.get('id');
    let type = urlParams.get('type');
    if(type == "Products")
        showProduct(index);
    else if (type == "Scientists")
        showScientist(index);
    else showEntity(index);
}

function showProduct(index){
    let products = localStorage.getItem("Products");
    products = JSON.parse(products);
    products.forEach(element => {
        if(element.Index == index)
            products = element;
    });
    console.log(products);
    createEditForm(products);
}

function showScientist(index){
    let scientists = localStorage.getItem("Scientists");
    scientists = JSON.parse(scientists);
    scientists.forEach(element => {
        if(element.Index == index)
            scientists = element;
    });
    console.log(scientists);
    createEditForm(scientists);
}

function showEntity(index){
    let entities = localStorage.getItem("Entities");
    entities = JSON.parse(entities);
    entities.forEach(element => {
        if(element.Index == index)
            entities = element;
    });
    console.log(entities);
    createEditForm(entities);
}

function createEditForm(content){
    let html = [];
    saveElementToEdit(content);
    constructForm(html,content);
    document.getElementById("content").innerHTML = html.join("");
}

function constructForm(html,content){
    html.push("<div class='container'>");
    html.push("<div class='card'>");
    html.push("<form class='myEditForm' id='myEditForm' action='/inicio.html'  onsubmit='validateEditTech()'>");
    html.push("<h3>Editando a '"+ content["Name"] + "' :</h3>");
    html.push("<div>");
    html.push("<label for='image' class='control-label'>Imagen: </label>");
    html.push("<input type='text' id='image' value='"+ content["Image"] + "'required>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='name' class='control-label'>Nombre: </label>");
    html.push("<input type='text' id='name' value='"+ content["Name"] + "'required>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='dateOfBirth' class='control-label'>Fecha de nacimiento: </label>");
    html.push("<input type='text' id='dateOfBirth' value='"+ content["DateOfBirth"] + "' required>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='dateOfDeath' class='control-label'>Fecha de fallecimiento: </label>");
    html.push("<input type='text' id='dateOfDeath' value='"+ content["DateOfDeath"] + "'>");
    html.push("</div>");
    html.push("<div>");
    html.push("<label for='wiki' class='control-label'>Wiki: </label>");
    html.push("<input type='text' id='wiki' value='"+ content["Wiki"] + "'>");
    html.push("</div>");
    html.push("<div class='container'>");
    html.push("<button class='btn btn-success' type='submit'>Guardar</button>");
    html.push("</div>");
    html.push("</form>");
    html.push("</div>");
    html.push("</div>");
}

function saveElementToEdit(content){
    let editableElement = JSON.stringify(content);
    localStorage.setItem("ElementToEdit",editableElement);
}

function validateEditTech(){
    updateData();
}

function updateData(){
    let image = document.getElementById("image").value;
    let name  = document.getElementById("name").value;
    let dateOfBirth  = document.getElementById("dateOfBirth").value;
    let dateOfDeath  = document.getElementById("dateOfDeath").value;
    let wiki  = document.getElementById("wiki").value;
    let editableElement = localStorage.getItem("ElementToEdit");
    editableElement = JSON.parse(editableElement);
    let elementEdited = {
        Index: editableElement.Index,
        Name: name,
        DateOfBirth: dateOfBirth,
        DateOfDeath: dateOfDeath,
        Wiki: wiki,
        Image: image,
        Type: editableElement.Type,
        Relations: ''
    }
    saveData(elementEdited);
}

function saveData(elementEdited){
    console.log(elementEdited);
    addToLocalStorage(elementEdited);
}

function addToLocalStorage(elementEdited){
    let type = elementEdited.Type;
    if(type == "Products"){
        let products = localStorage.getItem("Products");
        products = JSON.parse(products);
        addToItem(elementEdited,products);
    }
    else if (type == "Scientists"){
        let scientists = localStorage.getItem("Scientists");
        scientists = JSON.parse(scientists);
        addToItem(elementEdited,scientists);
    }
    else{ 
        let entities = localStorage.getItem("Entities");
        entities = JSON.parse(entities);
        addToItem(elementEdited,entities);
    }
}

function addToItem(elementEdited,obj){
    for(let i=0;i<obj.length;i++)
    {    if(obj[i].Index == elementEdited.Index)
            obj[i] = elementEdited;
    }
    obj = JSON.stringify(obj);
    console.log(obj);
    localStorage.setItem(elementEdited.Type,obj);
}

