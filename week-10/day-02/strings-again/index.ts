function xToY(text:string):string {
    if (text.length === 0){
        return ''
    }
        return text[0].replace('x','') + xToY(text.replace(text[0],''))
    
}

console.log(xToY('valxami itt nexm okéyyyx'))
