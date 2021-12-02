class PostIt {
    backgoundColor: string;
    text: string;
    textColor: string;

    constructor (backgroundColor: string, text: string, textColor: string) {
        this.backgoundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let first = new PostIt('orange', 'Idea 1', 'blue')
let second = new PostIt('pink', 'Awesome', 'black')
let third = new PostIt('yellow', 'Superb!', 'green')
console.log(first)