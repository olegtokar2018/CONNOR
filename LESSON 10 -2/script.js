class options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    showDiv() {
        let dive = document.createElement("div");
        dive.innerHTML = `Какой-то текст...`;
        dive.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; 
        font-size: ${this.fontSize}; text-align: ${this.textAlign};`
        document.body.appendChild(dive);
    }
}
let createDiv = new options('80px', '450px', 'coral', '250%', 'center');
createDiv.showDiv();



/* Используя синтаксис ES6 в отдельном документе:
· Создать класс options
· Он должен содержать свойства: height, width, bg, fontSize, textAlign
· Он должен содержать метод, создающий новый div на странице, записывающий в него 
  любой текст и при помощи cssText изменять свой стиль из переданных параметров
· Создать новый объект через класс*/