function xToY(text:string):string {
    if (text.length === 1){
        return text[0]
    }
        return text[0].replace(text[0],text[0]+'*') + xToY(text.replace(text[0],''))
    
}

console.log(xToY('legyen mindenhol csillag'))
