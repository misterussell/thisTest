// Problem 1
// console.log(this);
// this is: window object or global scope
// because... this is in the global scope

// // Problem 2
var obj1 = {
 myName: 'obj1',
 this: this
};
// console.log(obj1.this);
// // this is: the global object
// // because... the context is still the global object

// // Problem 3
var obj2 = {
 myName: 'obj2',
 child: {
     myName: 'obj2.child',
     this: this
 }
};
// console.log(obj2.child.this);
// // this is: still the global oject
// // because... nesting did not apply any new context to the value of this

// // Problem 4
function returnThis(aParameter) {
 console.log('the argument was: ', aParameter);
 return this;
}
// console.log(returnThis('This is fun!'));
// // this is: still the global object
// // because... the context from which the function was called is still the global context

// // Problem 5
// console.log(new returnThis('This is fun!'));
// // this is: an object named returnThis, an instance of the return this constructor
// // because... using the new keyword, we have adjusted the context of this, to the object being
//constructed

// // Problem 6
var obj3 = {
 myName: 'obj3',
 thisFn: returnThis
}
// console.log(obj3.thisFn('this is Fun'));
// // this is: an object
// // because... the context from which the function was called changed to obj3,

// // Problem 7
var obj4 = {
 myName: 'obj4',
 child: {
     myName: 'obj4.child',
     thisFn: returnThis
 }
}
// console.log(obj4.child.thisFn('this is fun!'));
// // this is: the child object of obj4
// // because... the context from which 'this' was called was the child of the parent object
// // context + scope only change with functions a.k.a. if not inside of a function, the context is always the global scope

// // Problem 8
// console.log(returnThis.call(this, 'how does call work?'));
// // this is: the global object
// // because...

// // Problem 9
// console.log(returnThis.apply(this, ['how does apply work?']));
// // this is: the global context
// // because... the returnThis function is being applied to the global undefined window

// // Problem 10
// console.log(returnThis.apply(obj1, ['how does apply work?']));
// // this is: the global varaible, in an object
// // because... this is defined as a key value of the obj1. apply works by applying the how does this apply
// // string to the obj 1 function

// // Problem 11
// console.log(returnThis.call(obj2, ['how does call work?']));
// // this is: an obj, instance ojb2
// // because...the parameter that was passed in was obj2 (this was how the context was set)
// // this will be used to change the context of this


// // Problem 12
var newReturnThis1 = returnThis.bind(this, 'how does bind work?');
// console.log(newReturnThis1());
// // this is: the global arugment because no new context is define in return this
// // because... it applies the selected string to the return this function

// // Problem 13
var newReturnThis2 = returnThis.bind(null, 'how does bind work?');
// console.log(newReturnThis2());
// // this is: null
// // because... the null type is applied to the function

// // Problem 14
var newReturnThis3 = returnThis.bind(obj4, 'how does bind work?');
// console.log(newReturnThis3());
// // this is:
// // because...

// // Problem 15
document.getElementById('button').addEventListener('click', function(e) {
 console.log(this);
});
// // this is: null
// // because... because of bunding null to this in returnthis

// // Problem 16
$('#button').on('click', function(e) {
 console.log(this);
});
// // this is:
// // because...

// // Problem 17
$.ajax({
 url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
 success: function() {
     console.log(this);
 }
})
// // this is:
// // because...
