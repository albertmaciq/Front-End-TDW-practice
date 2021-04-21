function loadCredentials(){
    localStorage.setItem("user1","x");
    localStorage.setItem("pass1","x")
    localStorage.setItem("user2","y");
    localStorage.setItem("pass2","y");
    localStorage.setItem("user3","z");
    localStorage.setItem("pass3","z");
    let logged = localStorage.getItem("logged");
    if(logged == 'true')
        changeCurrentView();
    else showSections();
}

function validateLogin() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    if(user == localStorage.getItem("user1")|| user == localStorage.getItem("user2") || user == localStorage.getItem ("user3"))
    { if(password == localStorage.getItem("pass1") || password == localStorage.getItem("pass2") || password == localStorage.getItem ("pass3"))
        {
            alert("Bienvenido " + user);
            localStorage.setItem("logged",true);
        }
        else alert("La credenciales introducidas son incorrectas.Por favor inténtelo de nuevo.")
    }        
    else
        alert("La credenciales introducidas son incorrectas.Por favor inténtelo de nuevo.")
}

function showSections(){
    loadProductsToRead();
    loadScientistsToRead();
    loadEntitiesToRead(); 
}

function loadProductsToRead(){
    let sectionProducts = []; 
    let products = localStorage.getItem("Products");
    if(products === null )
        createProducts();
    products = JSON.parse(products);  
    sectionProducts.push("<div class='container'>");
    sectionProducts.push("<h1>Productos</h1>");
    products.forEach(element => {
        sectionProducts.push("<div class='container'>");
        sectionProducts.push("<img class='img-fluid' src='"+element.Image+"'>");
        sectionProducts.push("<a class='btn btn-info' href='/details.html?id="+element.Index+"&type="+element.Type+"'>"+element.Name+"</a>");  
        sectionProducts.push("</div>");
    });    
    sectionProducts.push("</div>");
    document.getElementById("products").innerHTML = sectionProducts.join("");
}

function createProducts(){
    let products = [{
        Index:'0',
        Name: 'SGML',
        DateOfBirth: '1978-01-01',
        DateOfDeath:'',
        Wiki: 'https://es.wikipedia.org/wiki/SGML',
        Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBDHGIDfLze5A2HjPKNapQ1WVq5iz7PBHDA&usqp=CAU',
        Type: 'Products',
        Relations: ''
    },
    {
        Index:'1',
        Name: 'HTML',
        DateOfBirth: '1991-01-01',
        DateOfDeath:'',
        Wiki: 'https://es.wikipedia.org/wiki/HTML',
        Image:'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw',
        Type: 'Products',
        Relations: ''
    },
    {   Index:'2',
        Name: 'Java',
        DateOfBirth: '1995-01-01',
        DateOfDeath:'',
        Wiki: 'https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)',
        Image:'https://i.blogs.es/6091fa/java/450_1000.jpg',
        Type: 'Products',
        Relations: ''
    }];
    products = JSON.stringify(products);
    localStorage.setItem("Products",products);
}

function loadScientistsToRead(){
    let sectionScientists = []; 
    let scientists = localStorage.getItem("Scientists");
    if(scientists === null )
        createScientists();
    scientists = JSON.parse(scientists);  
    sectionScientists.push("<div class='container'>");
    sectionScientists.push("<h1>Personas</h1>");
    scientists.forEach(element => {
        sectionScientists.push("<div class='container'>");
        sectionScientists.push("<img class='img-fluid' src='"+element.Image+"'>");
        sectionScientists.push("<a class='btn btn-info' href='/details.html?id="+element.Index+"&type="+element.Type+"'>"+element.Name+"</a>");    
        sectionScientists.push("</div>");
    });    
    sectionScientists.push("</div>");
    document.getElementById("scientists").innerHTML = sectionScientists.join("");
}

function createScientists(){
    let scientists = [{
        Index: '0',
        Name: 'Raymond Lorie',
        DateOfBirth: '1936-05-14',
        DateOfDeath:'2015-06-18',
        Wiki: 'https://www.legacy.com/obituaries/mercurynews/obituary.aspx?n=raymond-amand-lorie-bonpapa&pid=175134606&fhid=13992',
        Image:'https://cache.legacy.net/legacy/images/cobrands/mercurynews/photos/WB0093866-1_20150622.jpgx?w=199&h=156&option=3',
        Type: 'Scientists',
        Relations: ''
    },
    {
        Index:'1',
        Name: 'Tim Berners-Lee',
        DateOfBirth: '1955-06-08',
        DateOfDeath:'',
        Wiki: 'https://es.wikipedia.org/wiki/Tim_Berners-Lee',
        Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYBwSNY0r-8ujLXtCJf6_yd63mTEldcg6MQ&usqp=CAU',
        Type: 'Scientists',
        Relations: ''
    },
    {   Index:'2',
        Name: 'Vannevar Bush',
        DateOfBirth: '1890-03-11',
        DateOfDeath:'1974-06-30',
        Wiki: 'https://es.wikipedia.org/wiki/Vannevar_Bush',
        Image:'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg',
        Type: 'Scientists',
        Relations: ''
    }];
    scientists = JSON.stringify(scientists);
    localStorage.setItem("Scientists",scientists);
}

function loadEntitiesToRead(){
    let sectionEntities = []; 
    let entities = localStorage.getItem("Entities");
    if(entities === null )
        createEntities();
    entities = JSON.parse(entities);  
    sectionEntities.push("<div class='container'>");
    sectionEntities.push("<h1>Entidades</h1>")
    entities.forEach(element => {
        sectionEntities.push("<div class='container'>");
        sectionEntities.push("<img class='img-fluid' src='"+element.Image+"'>");
        sectionEntities.push("<a class='btn btn-info' href='/details.html?id="+element.Index+"&type="+element.Type+"'>"+element.Name+"</a>");       
        sectionEntities.push("</div>");   
    }); 
    sectionEntities.push("</div>");   
    document.getElementById("entities").innerHTML = sectionEntities.join("");
}

function createEntities(){
    let entities = [{
        Index:'0',
        Name: 'IBM',
        DateOfBirth: '1911-06-16',
        DateOfDeath:'',
        Wiki: 'https://es.wikipedia.org/wiki/IBM',
        Image: 'https://blogs.masterhacks.net/wp-content/uploads/2017/07/masterhacks_ibm_trabaja-lightbend.png',
        Type: 'Entities',
        Relations: ''
    },
    {
        Index:'1',
        Name: 'W3C',
        DateOfBirth: '1994-10-01',
        DateOfDeath:'',
        Wiki: 'https://es.wikipedia.org/wiki/World_Wide_Web_Consortium',
        Image:'https://www.redeszone.net/app/uploads-redeszone.net/2017/03/W3C.png',
        Type: 'Entities',
        Relations: ''

    },
    {   Index:'2',
        Name: 'CERN',
        DateOfBirth: '1954-01-01',
        DateOfDeath:'',
        Wiki: 'https://es.wikipedia.org/wiki/Organizaci%C3%B3n_Europea_para_la_Investigaci%C3%B3n_Nuclear',
        Image:'https://rinconeducativo.org/sites/default/files/cern_logo.jpg',
        Type: 'Entities',
        Relations: ''
    }];
    entities = JSON.stringify(entities);
    localStorage.setItem("Entities",entities);
}

function changeCurrentView(){
    let login = document.getElementById("loginForm");
    let logout = document.createElement("button");
    logout.className = "btn btn-danger";
    logout.setAttribute("id","logout");
    logout.setAttribute("onclick","backToInit()");
    logout.innerHTML = "Logout";
    login.parentNode.replaceChild(logout,login);
    
    loadProductsToWrite();
    loadScientistsToWrite();
    loadEntitiesToWrite();
}

function backToInit(){
    localStorage.setItem("logged",false);
    let logout = document.getElementById("logout");
    let login = document.createElement("form");
    login.className = "login";
    login.setAttribute("id","loginForm");
    login.setAttribute("onsubmit","validateLogin()");
    creatingUserLabel(login);
    creatingPasswordLabel(login);
    creatingLoginButton(login);
    logout.parentNode.replaceChild(login,logout);
    loadCredentials();
}

function creatingUserLabel(login){
    let userLabel = document.createElement("label");
    userLabel.className = "user";
    userLabel.setAttribute("for","user");
    userLabel.innerHTML = "Usuario";
    login.appendChild(userLabel);

    let user = document.createElement("input");
    user.setAttribute("type","text");
    user.setAttribute("id","user");
    login.appendChild(user);
}

function creatingPasswordLabel(login){
    let passwordLabel = document.createElement("label");
    passwordLabel.className ="password";
    passwordLabel.setAttribute("for","password");
    passwordLabel.innerHTML = "Contraseña";
    login.appendChild(passwordLabel);

    let password = document.createElement("input");
    password.setAttribute("type","password");
    password.setAttribute("id","password");
    login.appendChild(password);
}

function creatingLoginButton(login){
    let logButton = document.createElement("button");
    logButton.className = "btn btn-success";
    logButton.setAttribute("type","submit");
    logButton.setAttribute("id","loginButton");
    logButton.innerHTML = "Login";
    login.appendChild(logButton);
}
        
function loadProductsToWrite(){
    let sectionProducts = []; 
    let products = localStorage.getItem("Products");
    if(products === null || products.length === 2)
        createProducts();
    products = JSON.parse(products);  
    sectionProducts.push("<div class='container'>");
    sectionProducts.push("<h1>Productos</h1>");
    products.forEach(element => {
        sectionProducts.push("<div class='container'>");
        sectionProducts.push("<img class='img-fluid' src='"+ element.Image + "'>");
        sectionProducts.push("<p>" + element.Name + "</p>");
        sectionProducts.push("<a class='btn btn-warning' href='/edit.html?id="+element.Index+"&type="+element.Type+"'>Editar</a>"); 
        sectionProducts.push("<button class='btn btn-danger' type='button' onclick='deleteProduct("+ element.Index +")'>Borrar</button>"); 
        sectionProducts.push("</div>");
    });    
    sectionProducts.push("<div class='myContainer'>");
    sectionProducts.push("<a class='btn btn-success' href='/add.html?&type=Products'>Añadir Producto</a>"); 
    sectionProducts.push("</div>");
    sectionProducts.push("</div>");
    document.getElementById("products").innerHTML = sectionProducts.join("");
}

function deleteProduct(index){
    let deleteConfirm =  confirm("Se dispone a ELIMINAR PERMANENTEMENTE del catálogo el ELEMENTO seleccionado.");
    if(deleteConfirm == true){
        let products = localStorage.getItem("Products");
        products = JSON.parse(products);
        console.log("Elemento borrado: ");
        console.log(products[index]);
        for(let i=0;i<products.length;i++)
        {    if(products[i].Index == index)
            products.splice(i,1);
        }
        console.log("Estructura resultante:");
        console.log(products);
        products = JSON.stringify(products);
        localStorage.setItem("Products",products);
        alert ("Elemento borrado correctamente.");
        update();
    }
    else alert("Se ha cancelado el borrado");
}

function loadScientistsToWrite(){
    let sectionScientists = []; 
    let scientists = localStorage.getItem("Scientists");
    if(scientists === null || scientists.length === 2)
        createScientists();
    scientists = JSON.parse(scientists);  
    sectionScientists.push("<div class='container'>");
    sectionScientists.push("<h1>Personas</h1>");
    scientists.forEach(element => {
        sectionScientists.push("<div class='container'>");
        sectionScientists.push("<img class='img-fluid' src='"+ element.Image + "'>");
        sectionScientists.push("<p>" + element.Name + "</p>"); 
        sectionScientists.push("<a  class='btn btn-warning' href='/edit.html?id="+element.Index+"&type="+element.Type+"'>Editar</a>"); 
        sectionScientists.push("<button class='btn btn-danger' type='button' onclick='deleteScientists("+ element.Index +")'>Borrar</button>");
        sectionScientists.push("</div>");
    });  
    sectionScientists.push("<div class='myContainer'>");
    sectionScientists.push("<a class='btn btn-success' href='/add.html?&type=Scientists'>Añadir Persona</a>"); 
    sectionScientists.push("</div>");
    sectionScientists.push("</div>");
    document.getElementById("scientists").innerHTML = sectionScientists.join("");
}

function deleteScientists(index){
    let deleteConfirm =  confirm("Se dispone a ELIMINAR PERMANENTEMENTE del catálogo el ELEMENTO seleccionado.");
    if(deleteConfirm == true){
        let scientists = localStorage.getItem("Scientists");
        scientists = JSON.parse(scientists);
        console.log("Elemento borrado: ");
        console.log(scientists[index]);
        for(let i=0;i<scientists.length;i++)
        {    if(scientists[i].Index == index)
                scientists.splice(i,1);
        }
        console.log("Estructura resultante:");
        console.log(scientists);
        scientists = JSON.stringify(scientists);
        localStorage.setItem("Scientists",scientists);
        update();
    }
    else alert("Se ha cancelado el borrado");
}

function loadEntitiesToWrite(){
    let sectionEntities = []; 
    let entities = localStorage.getItem("Entities");
    if(entities === null || entities.length === 2)
        createEntities();
    entities = JSON.parse(entities);  
    sectionEntities.push("<div class='container'>");
    sectionEntities.push("<h1>Entidades</h1>")
    entities.forEach(element => {
        sectionEntities.push("<div class='container'>");
        sectionEntities.push("<img class='img-fluid' src='"+ element.Image + "'>");
        sectionEntities.push("<p>" + element.Name + "</p>");
        sectionEntities.push("<a class='btn btn-warning' href='/edit.html?id="+element.Index+"&type="+element.Type+"'>Editar</a>"); 
        sectionEntities.push("<button class='btn btn-danger' type='button' onclick='deleteEntities("+ element.Index +")'>Borrar</button>");
        sectionEntities.push("</div>");
    });  
    sectionEntities.push("<div class='myContainer'>");
    sectionEntities.push("<a class='btn btn-success' href='/add.html?&type=Entities'>Añadir Entidad</a>");  
    sectionEntities.push("</div>");
    sectionEntities.push("</div>");
    document.getElementById("entities").innerHTML = sectionEntities.join("");
}

function deleteEntities(index){
    let deleteConfirm =  confirm("Se dispone a ELIMINAR PERMANENTEMENTE del catálogo el ELEMENTO seleccionado.");
    if(deleteConfirm == true){
        let entities = localStorage.getItem("Entities");
        entities = JSON.parse(entities);
        console.log("Elemento borrado: ");
        console.log(entities[index]);
        for(let i=0;i<entities.length;i++)
        {    if(entities[i].Index == index)
                entities.splice(i,1);
        }
        console.log("Estructura resultante:");
        console.log(entities);
        entities = JSON.stringify(entities);
        localStorage.setItem("Entities",entities);
        update();
    }
    else alert("Se ha cancelado el borrado");
}

function update(){
    loadProductsToWrite();
    loadScientistsToWrite();
    loadEntitiesToWrite();
}













