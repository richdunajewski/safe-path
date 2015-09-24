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
    str = str.replace(/(?:�|�|�|�|�|�)/g, 'A');
    str = str.replace(/(?:�|�|�|�)/g, 'E');
    str = str.replace(/(?:�|�|�|�)/g, 'I');
    str = str.replace(/(?:�|�|�|�|�)/g, 'O');
    str = str.replace(/(?:�|�|�|�)/g, 'U');
    str = str.replace(/(?:�)/g, 'N');
    str = str.replace(/(?:�|�|�|�|�|�)/g, 'a');
    str = str.replace(/(?:�|�|�|�)/g, 'e');
    str = str.replace(/(?:�|�|�|�)/g, 'i');
    str = str.replace(/(?:�|�|�|�|�)/g, 'o');
    str = str.replace(/(?:�|�|�|�)/g, 'u');
    str = str.replace(/(?:�)/g, 'n');
    return str;
}

function replaceSymbols(str) {
    str = str.replace(/(?:\(|\))/g, '');
    str = str.replace(/(?:\.|\?)/g, '');
    str = str.replace(/(?:_+)/g, '_');
    return str;
}