module.exports.format = function (path) {
    var formattedPath = path;
    formattedPath = formattedPath.replace(/^The\s+/gi, '');
    formattedPath = formattedPath.replace(/\s+(?:\(|\[)?Dis(?:c|k) (?:One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|\d)+(?:\)|\])?/gi, '');
    formattedPath = formattedPath.replace(/\s+/gi, '_');
    formattedPath = formattedPath.replace(/(?:\'|`)/gi, '');
    formattedPath = replaceAccented(formattedPath);
    formattedPath = replaceSymbols(formattedPath);
    formattedPath = formattedPath.replace(/(?:[^a-z0-9_])+/gi, '_');

    //take paths which begin with _ and Base64 encode them
    if (formattedPath.substring(0, 1) == '_') formattedPath = '_' + require('urlsafe-base64').encode(new Buffer(path));

    return formattedPath;
};

function replaceAccented(str) {
    str = str.replace(/(?:À|Á|Â|Ä|Å|Ã)/g, 'A');
    str = str.replace(/(?:È|É|Ê|Ë)/g, 'E');
    str = str.replace(/(?:Ì|Í|Î|Ï)/g, 'I');
    str = str.replace(/(?:Ò|Ó|Ô|Ö|Õ)/g, 'O');
    str = str.replace(/(?:Ù|Ú|Û|Ü)/g, 'U');
    str = str.replace(/(?:Ñ)/g, 'N');
    str = str.replace(/(?:à|á|â|ä|å|ã)/g, 'a');
    str = str.replace(/(?:è|é|ê|ë)/g, 'e');
    str = str.replace(/(?:ì|í|î|ï)/g, 'i');
    str = str.replace(/(?:ò|ó|ô|ö|õ)/g, 'o');
    str = str.replace(/(?:ù|ú|û|ü)/g, 'u');
    str = str.replace(/(?:ñ)/g, 'n');
    return str;
}

function replaceSymbols(str) {
    str = str.replace(/(?:\(|\))/g, '');
    str = str.replace(/(?:\.|\?)/g, '');
    str = str.replace(/(?:_+)/g, '_');
    return str;
}