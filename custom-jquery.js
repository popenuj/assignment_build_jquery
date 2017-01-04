
document.addEventListener("DOMContentLoaded", function(event) {

  function $(queryTerm) {

    var dom = document;

    if (/^#/.test(queryTerm)) {               // id

      return dom.getElementById(queryTerm);

    } else if (/^\./.test(queryTerm)) {       // class

      return dom.getElementByClassName(queryTerm);

    } else if (/^[a-zA-Z]/.test(queryTerm)) { // tag

      return dom.getElementByTagName(queryTerm);

    }

  }

});
