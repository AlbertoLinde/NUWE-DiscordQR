function isUrl(string){
    return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(string);
}

module.exports = {
    isUrl: isUrl
}