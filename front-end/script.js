const admin = localStorage.getItem("admin")

console.log(admin)



class Block {
    constructor() {
        this.components = [];
        this.dragItem = "";
        // this.editMenu = document.createElement("div");
        // this.
        // this.editMenu.id = "editMenu"
        // this.Styles = {
        //     backgroundColor: "#000000",
        //     opacity: "0.75",
        //     position: 'fixed',
        //     left: "0",
        //     top: "0",
        //     border: "1px solid blue",
        //     width: "100%",
        //     height: "100%",
        // }
    }

    setDragItem(Item) {
        this.dragItem = Item;
    }

    addComponent() {
        let comp;
        if (this.dragItem == "text") {
            console.log("adduing a new Text component")
            comp = new textComponent();
            this.components.appendChild
        }
    }

    test() {
        console.log("You created a new block")
    }

    showEditPage() {
        // document.body.appendChild(this.editMenu)

        // document.body.style.overflow = "hidden";
        // // let temp = "backgroundColor"
        // // this.editMenu.style[`${temp}`] = "#000000"


        // for (var property in this.Styles) {
        //     console.log(typeof(property))
        //     console.log(property, this.Styles[`${property}`]);
        //     this.editMenu.style[`${property}`] = this.Styles[`${property}`]
        // }
        // this.editMenu.innerHTML = "This is a test";
        
        console.log("testing the creation of a new block")
        
    }
}

class Component {
    constructor() {

    }
}

class VideoComponent extends Component{
    constructor() {
        super();
    }
}

class textComponent extends Component {
    constructor() {
        super();
    }
}

window.newBlock = newBlock;
window.showEditMenu = showEditMenu;
window.hideEditMenu = hideEditMenu;
window.addBlock = addBlock;
window.saveCategory = saveCategory;
window.Initialise= Initialise;
window.logout = logout;
window.setdragItem = setdragItem;
window.dragHover = dragHover;
window.dragHoverEnd = dragHoverEnd;

import {data} from "./data.js";

function newBlock() {
    
}


let block = new Block();

function showEditMenu() {
    let editScreen = document.getElementById("editMenu");
    console.log("showing the edit menu");
    editScreen.style.display = "block";
}

function hideEditMenu() {
    let editScreen = document.getElementById("editMenu");

    // hiding the category adding menu
    document.getElementById("new-Category").style.display = "none";
    console.log("hiding the edit menu");
    editScreen.style.display = "none";
    document.getElementById("new-Cat-Input").value = "";
    document.getElementById("new-cat-warn").innerHTML = "";

    // hiding the block designer menu

    document.getElementById("new-Block").style.display = "none";
}

function addBlock(type) {
    console.log("beginnig to add a new category");
    let block= document.getElementById(type)
    block.style.display = "block";
    // document.getElementById("new-Cat-Input").focus();
    showEditMenu();

}

function saveCategory() {
    let name = document.getElementById("new-Cat-Input").value;

    if (name == "") {
        document.getElementById("new-cat-warn").innerHTML = "name of category can not be null";
        document.getElementById("new-Cat-Input").focus();
        return;
    }
    fetch(data.url_backend+`new-category.php?name=${name}`)
    .then(data => data.json())
    .then(data => {
        console.log(data);

        Initialise();
        hideEditMenu();
    })
}

function Initialise() {
    fetch(data.url_backend+`get-categories.php`)
    .then(data => data.json())
    .then(data => {
        console.log(data)
        let container = document.getElementById("side-menu-container")
        container.innerHTML = '';
        data.forEach(e => {
            console.log(e)

            let tab = document.createElement("a")
            tab.innerHTML = e.name;

            container.appendChild(tab);
        });
    });

    let admin = window.localStorage.getItem("admin");
    
    if (admin) {
        document.getElementById("add-category").style.display = "block";
        document.getElementById("add-block").style.display = "block";
        document.getElementById("admin-logout").style.display = "block";
    }
}

function logout() {
    window.localStorage.removeItem("admin");
    location.reload();
}

function dragHover() {
    console.log("the item has been dragged over the drop zone")
    document.getElementById("drop-zone").classList.add("drop-zone-active");
}

function setdragItem(item) {
    console.log("drag Item being set")
    block.setDragItem(item);
}

function dragHoverEnd() {
    console.log("draggable has left the drop zone");
    document.getElementById("drop-zone").classList.remove("drop-zone-active");
}