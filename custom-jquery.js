
document.addEventListener("DOMContentLoaded", function(event) {

  window.$ = function $(queryTerm) {
    var queryResult;
    var dom = document;
    if (typeof queryTerm === "string") {

      queryResult = $.queryByString(queryTerm, dom);

    }

    return new jQueryObject(queryResult);

  }

  $.queryByString = function(queryTerm, dom) {

    var queryResult;
    var formattedQuery = queryTerm.substr(1);

    if (/^#/.test(queryTerm)) {               // id

      queryResult = dom.getElementById(formattedQuery);

    } else if (/^\./.test(queryTerm)) {       // class

      queryResult = dom.getElementsByClassName(formattedQuery);

    } else if (/^[a-zA-Z]/.test(queryTerm)) { // tag

      queryResult = dom.getElementsByTagName(queryTerm);

    }

    return queryResult;

  };

  function jQueryObject(result) {
    if (!(this instanceof jQueryObject)) return new jQueryObject(result);
    this.result = result;
    this.length = result.length;
  }

  jQueryObject.prototype.idx = function(index) {
    return this.result[index];
  };

});
