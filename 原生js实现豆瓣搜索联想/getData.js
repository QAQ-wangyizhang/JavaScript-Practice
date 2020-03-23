function getData(searchText) {
    var res = [];
    for(var key in searchObj){
        if (searchText == key) {
            res = searchObj[key];
            break;
        }
    }
    return res;
}