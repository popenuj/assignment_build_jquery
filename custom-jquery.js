
document.addEventListener("DOMContentLoaded", function(event) {

  window.$ = function $(queryTerm) {

    var queryResult;
    var dom = document;

    if (typeof queryTerm === "string") {

      queryResult = $.queryByString(queryTerm, dom);

    } else if (typeof queryTerm === "object") {

      queryResult = [queryTerm];

    }

    return new jQueryObject(queryResult);

  }

  window.jquery = window.$;

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

  function jQueryObject(selection) {
    if (!(this instanceof jQueryObject)) return new jQueryObject(selection);
    this.selection = selection;
    this.length = selection.length;
  }

  jQueryObject.prototype.idx = function(index) {
    return this.selection[index];
  };


  jQueryObject.prototype.hasClass = function(className) {
    this.each(function(element){
      return element.classList.includes(className);
    });
  };

  jQueryObject.prototype.each = function(funktion) {

    console.log(this);

    var selection = this.selection;

    for (var i = 0; i < selection.length; i++) {
      funktion([i], i, selection);
    }

  };

});
