const admin = localStorage.getItem("admin")

console.log(admin)



class Block {
    constructor() {
        this.components = [];
        this.baseContainer = "<div>This is a test</div>"
        this.editMenu = document.createElement("div");
        this.editMenu.id = "editMenu"
        this.Styles = {
            backgroundColor: "#000000",
            opacity: "0.75",
            position: 'fixed',
            left: "0",
            top: "0",
            border: "1px solid blue",
            width: "100%",
            height: "100%",
        }
    }

    test() {
        console.log("You created a new block")
    }

    showEditPage() {
        document.body.appendChild(this.editMenu)


        // let temp = "backgroundColor"
        // this.editMenu.style[`${temp}`] = "#000000"


        for (var property in this.editStyles) {
            console.log(typeof(property))
            console.log(property, this.editStyles[`${property}`]);
            this.editMenu.style[`${property}`] = this.editStyles[`${property}`]
        }
        this.editMenu.innerHTML = "This is a test";
        
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

window.newBlock = newBlock;

function newBlock() {
    const block = new Block();
    block.test();
    block.showEditPage();
} 