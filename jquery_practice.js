
function Foo(property) {
  this.property = property;
}

Foo.prototype.sampleMethod = function() {
  console.log("method")
};

var Bar = function(property) {
  return {};
};

function Baz(property) {
  if (!(this instanceof Baz)) return new Baz(property);
  this.property = property;
}

function SimpleObject() {
  this.collection = [1,"foo",3];
}

SimpleObject.prototype.each = function(funktion) {
  var coll = this.collection
  for (var i = 0; i < coll.length; i++) {
    funktion(coll[i], i, coll);
  };
}
