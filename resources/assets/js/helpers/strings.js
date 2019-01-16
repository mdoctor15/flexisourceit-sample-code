
String.prototype.toUpperCaseWords = function () {
    return this.replace(/\w+/g, function(a){ 
      	return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    })
}

String.prototype.toUpperCaseFirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}


String.prototype.numberWithCommas = function () {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
