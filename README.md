# memory.js
 memory.js is a simple and functional snippet that helps bring productivity to your development
 it only has 285 bytes minified (595b not minified) and consists in a kind of facilitator for local storage
 The idea is to leave storage in the local storage simple without having to parse and worrying about what kind of variable is being put into memory, making the code simpler and readable
 Is it an object? No parse needed
 Is it an array?  No parse needed
 Tired of typing localStorage.setItem() and localStorage.getItem()?
 Just use memory.save() and memory.get()

## Before:
 ```javascript
 var object = {foo: 'bar'};
 localStorage.setItem('foo', JSON.stringify(object));

 var clone;
 try{
    clone = JSON.parse(localStorage.getItem('foo'));
 }catch(err){}
 ```
## After:
```javascript
 var object = {foo: 'bar'};
 memory.save('foo', object);

 var clone = memory.get('foo');
```

## Before:
 ```javascript
 var object;
 localStorage.setItem('foo', object);
 console.log(localStorage.getItem('foo'));
 console.log(typeof localStorage.getItem('foo'));
 // "undefined"
 // "string"
 ```
## After:
```javascript
 var object;
 memory.save('foo', object);
 console.log(memory.get('foo'));
 console.log(typeof memory.get('foo'));
 // undefined
 // undefined
```

- It also works with null objects and others parse problems.
- It also has the memory.clear() function, which is exactly the same as localStorage.clear()
