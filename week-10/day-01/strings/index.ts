function xToY(text:string):string {
    if (text.length === 0){
        return ''
    }
        return text[0].replace('x','y') + xToY(text.replace(text[0],''))
    
}


let x = "xalami";
console.log(x[x.length-1]);
console.log(x);
console.log(xToY('valxami itt nexm okéyyyx'))
