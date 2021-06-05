var products = [{
        name: "Fraises $1.99",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "$",
        price: 1.99,
        imageSrc: "assets/strawberry.jpg"
    },
    {
        name: "Pain $2.35",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "$",
        price: 2.35,
        imageSrc: "assets/bread.jpg"
    },
    {
        name: "Biscuits $4.99",
        nutFree: true,
        lactoseFree: false,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "$",
        price: 4.99,
        imageSrc: "assets/chipsahoy.jpg"

    },
    {
        name: "Nouilles $0.99",
        nutFree: true,
        lactoseFree: true,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "$",
        price: 0.99,
        imageSrc: "assets/noodles.jpg"
    },
    {
        name: "Cacahuètes $5.00",
        nutFree: false,
        lactoseFree: true,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "$$",
        price: 5.0,
        imageSrc: "assets/peanuts.jpg"
    },
    {
        name: "Fromage $7.00",
        nutFree: false,
        lactoseFree: false,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "$$",
        price: 7.0,
        imageSrc: "assets/cheese.jpg"
    },
    {
        name: "Granola $12.00",
        nutFree: false,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "$$$",
        price: 12.00,
        imageSrc: "assets/almondGranola.jpg"
    },
    {
        name: "Yogourt $6.00",
        nutFree: true,
        lactoseFree: false,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "$$",
        price: 6.0,
        imageSrc: "assets/yogurt.jpg"
    },
    {
        name: "Saumon $10.00",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "$$$",
        price: 10.0,
        imageSrc: "assets/salmon.jpg"
    },
    {
        name: "Bifteck $18.99",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "$$$",
        price: 18.99,
        imageSrc: "assets/steak.jpg"
    },
];


var nextBtn = document.getElementById("next-btn");
var checkedItems = document.getElementById("categorie");
var budgetStatus = [];
budgetStatus.push(document.getElementById("budgetList"));


/*Credited: https://www.w3schools.com*/
function openTab(groceryTab, animName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(groceryTab).style.display = "block";
}

function sortByPrice(newList) {
    newList.sort(function(a, b) {
        return a.price - b.price;
    });
}



function assesUserInformation() {
    let listItems = [];
    var userInfo = [];

    var nutFree = document.getElementById("inlineCheckbox1");
    var lactoseFree = document.getElementById("inlineCheckbox2");
    var isOrganic = document.getElementById("organicProducts");
    var nonOrganic = document.getElementById("nonOrganicProduct");
    var neither = document.getElementById("neither");
    var budget = document.getElementById("budgetList");




    if (nutFree.checked && !lactoseFree.checked) {
        listItems = products.filter((products) => { return (products.nutFree); });
    } else if (!nutFree.checked && lactoseFree.checked) {
        listItems = products.filter((products) => { return (products.lactoseFree); });
    } else if (nutFree.checked && lactoseFree.checked) {
        listItems = products.filter((products) => { return (products.lactoseFree && products.nutFree); });
    } else if (!nutFree.checked && !lactoseFree.checked) {
        listItems = products;
    }

    let newList;

    if (!(isOrganic.checked || nonOrganic.checked) && budget.value == "$") {
        newList = listItems.filter((listItems) => { return listItems.budget === "$"; });
        sortByPrice(newList);
        return newList;
    } else if (!(isOrganic.checked || nonOrganic.checked) && budget.value == "$$") {
        newList = listItems.filter((listItems) => { return listItems.budget === "$$"; });
        sortByPrice(newList);
        return newList;
    } else if (!(isOrganic.checked || nonOrganic.checked) && budget.value == "$$$") {
        newList = listItems.filter((listItems) => { return listItems.budget === "$$$"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked && budget.value == "$") {
        newList = listItems.filter((listItems) => { return listItems.organicProducts && listItems.budget === "$"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked && budget.value == "$$") {
        newList = listItems.filter((listItems) => { return listItems.organicProducts && listItems.budget === "$$"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked && budget.value == "$$$") {
        newList = listItems.filter((listItems) => { return listItems.organicProducts && listItems.budget === "$$$"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked) {
        newList = listItems.filter((listItems) => { return listItems.organicProducts; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked && budget.value == "$") {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct && listItems.budget === "$"; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked && budget.value == "$$") {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct && listItems.budget === "$$"; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked && budget.value == "$$$") {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct && listItems.budget === "$$$"; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked) {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct; });
        sortByPrice(newList);
        return newList;
    } else if (neither.checked && budget.value == "none") {
        newList = listItems;
        sortByPrice(newList);
        return newList;
    } else if (neither.checked && budget.value == "$$") {
        newList = listItems.filter((listItems) => { return listItems.budget === "$$"; });
        sortByPrice(newList);
        return newList;
    } else if (neither.checked && budget.value == "$$$") {
        newList = listItems.filter((listItems) => { return listItems.budget === "$$$"; });
        sortByPrice(newList);
        return newList;
    }

    listItems.sort(function(a, b) {
        return a.price - b.price;
    });

    return listItems;
}

function displayListItems(options) {

    var s2 = document.getElementById(options);
    var userItems = assesUserInformation();


    s2.className = "list-group";

    s2.innerHTML = "";


    if (userItems.length == 0) {
        s2.innerHTML = "NO ITEM FOUND!";
    }

    document.getElementById("submit-btn").style.display = "none";


    if (document.getElementById("firstNameInput").value !== '') {

        document.getElementById("welcomeMsg").innerHTML =
            "<h3>Hello" + " " + document.getElementById("firstNameInput").value + "! Here are your targeted products!" + "</h3>";

        document.getElementById("submit-btn").style.display = "block";
        for (var i = 0; i < userItems.length; i++) {


            var picture = document.createElement("img");
            picture.className = "pictures";
            picture.src = userItems[i].imageSrc;
            var productName = userItems[i].name;
            // create the checkbox and add in HTML DOM
            var checkbox = document.createElement("input");
            checkbox.className = "form-check-input me-1";
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.id = productName;
            checkbox.value = productName;


            // create a label for the checkbox, and also add in HTML DOM
            var label = document.createElement('label');
            label.className = "list-group-item";

            label.htmlFor = productName;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(productName));
            label.appendChild(document.createElement("br"));
            label.appendChild(picture);
            s2.appendChild(label);
        }

        document.getElementById("submit-btn").addEventListener("click", function() {
            successCheck();
        });

    } else {
        document.getElementById("welcomeMsg").innerHTML = "";
    }
}
document.getElementById("product-btn").addEventListener("click", function() {
    errCheck();
});

nextBtn.addEventListener("click", function() {
    errCheck();
});



function successCheck() {


    var loading = document.createElement("div");
    loading.className = "spinner-border text-primary";
    loading.role = "status";
    loading.style.display = "block";
    loading.style.left = "50%";
    loading.style.position = "absolute";

    document.getElementById("submit-btn").disabled = true;
    document.getElementById("successList").appendChild(loading);
    showThing(loading);

}

function showThing(loading) {
    loading.style.display = "block";
    setTimeout(() => {
        removeThing(loading);
        document.getElementById("submit-btn").disabled = false;
        document.getElementById("banner").style.display = 'block';
    }, 1000);

    setTimeout(() => {
        document.getElementById("banner").style.display = 'none';
    }, 2000);
}

// and `removeThing` removes the spinner
function removeThing(loading) {
    loading.style.display = 'none';

}

function errCheck() {
    document.getElementById("errorList").innerHTML = "";
    if (document.getElementById("firstNameInput").value == "") {
        var err = document.createElement("div");
        err.id = "errorMsg";
        err.className = "alert alert-danger";
        err.role = "alert";
        err.innerHTML = "Vous devez soumettre tous les champs obligatoires dans l'onglet client!";
        document.getElementById("errorList").appendChild(err);
    }


}

function selectedItems() {

    var ele = document.getElementsByClassName("form-check-input me-1");
    var chosenProducts = [];

    var c = document.getElementById("itemsOnList");
    var listNames = document.getElementById("listNames");
    var listPrices = document.getElementById("listPrices");
    var f = document.getElementById("totalPrice");
    var para = document.createElement("P");
    var multipleDiv = document.createElement("div");
    var diffDiv = document.createElement("div");
    var total = document.createElement("P");
    total.style = "display:flex;justify-content:space-between";
    c.style.display = "block";
    para.style.justifyContent = "space-between";

    f.innerHTML = "";
    c.innerHTML = "";
    total.innerHTML = "";

    multipleDiv.style.tabSize = "8";


    para.innerHTML = "<h3 style='display: block;'>Vous avez choisi : </h3>";
    para.style.fontSize = "16px";
    para.appendChild(document.createElement("br"));

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {

            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
            chosenProducts.push(ele[i].value);

        }
    }

    c.appendChild(para);



    f.appendChild(document.createTextNode("$" + getTotalPrice(chosenProducts)));

}

function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}