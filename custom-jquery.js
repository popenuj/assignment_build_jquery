
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
    var hasClass = false;
    this.each(function(element){
      hasClass = hasClass || element.classList.contains(className);
    });
    return hasClass;
  };

  jQueryObject.prototype.addClass = function(className) {
    this.each(function(element){
      element.classList.add(className);
    });
    return this.selection;
  };

  jQueryObject.prototype.removeClass = function(className) {
    this.each(function(element){
      element.classList.remove(className);
    });
    return this.selection;
  };

  jQueryObject.prototype.toggleClass = function(className) {
    this.each(function(element){
      element.classList.toggle(className);
    });
    return this.selection;
  };

  jQueryObject.prototype.val = function(value) {
    if (value) {
      this.each(function(element){
        element.classList.remove(className);
      });
      return this.selection;
    } else {
      return this.idx(0);
    }
  };

  jQueryObject.prototype.each = function(funktion) {

    var selection = this.selection;

    for (var i = 0; i < selection.length; i++) {
      funktion(selection[i], i, selection);
    }

  };

});
