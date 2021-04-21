function loadContent(){
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
    createDetailsForm(products);
}

function showScientist(index){
    let scientists = localStorage.getItem("Scientists");
    scientists = JSON.parse(scientists);
    scientists.forEach(element => {
        if(element.Index == index)
            scientists = element;
    });
    console.log(scientists);
    createDetailsForm(scientists);
}

function showEntity(index){
    let entities = localStorage.getItem("Entities");
    entities = JSON.parse(entities);
    entities.forEach(element => {
        if(element.Index == index)
            entities = element;
    });
    console.log(entities);
    createDetailsForm(entities);
}

function createDetailsForm(content){
    let html = [];
    html.push("<div class='container'>");
    html.push("<div class='card'>");
    html.push("<img class='img-fluid' src='"+ content["Image"] +"'>");
    html.push("<h1>" + content["Name"] +"</h1>");
    html.push("<p id='dateOfBirth'>Fecha de nacimiento: " + content["DateOfBirth"]+ "</p");
    html.push("</br>");
    html.push("<p id='dateOfDeath'>Fecha de fallecimiento: " + content["DateOfDeath"] +"</p>");
    html.push("<label class='linkWiki' for='linkWiki'>Wiki: </label>")
    html.push("<a class='linkWiki' href='"+ content["Wiki"] + "'>"+content["Wiki"]+"</a>");
    html.push("</div>");
    html.push("</div>");
    document.getElementById("content").innerHTML = html.join("");
}


