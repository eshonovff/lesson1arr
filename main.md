# Array дар  Java Script чист?

Array (Массив) объектестб ки арзишҳоро на махсусан дар хосиятҳо/калидҳои номбаршуда, балки дар мавқуи аз ҷиҳати ададӣ индексатсияшуда нигоҳ медорад. Дар Javan Script Array (массив) руйхати фармоишии арзишҳо (қимматҳо) мебошад. Ҳар як арзиш (қиммат) элемент номида мешавад, бо индекс муайян карда шудааст. Аввалан Array (массив)  метавонад арзишҳои (қиматҳо) намудҳои омехтаро дошта бошад. Array (Массив) як тағйирёбандаи махсусестб ки метавонад зиёда аз як арзиш дошта бошад.

```js
index       0    1    2       3        
element    88    75   25   "three"  
```

Сохтани Array (массив)
```js 
let arr = [88, 75, 25, "Three"]
```


Шумо инчунин метавонед элемент дохил кунед ёки элементро иваз кунед индексашро истифода бурда мисол:
    
```js
let arr = [88, 75, 25, "Three"]
arr[2]= "4okadi"
console.log(arr);   // output: [88, 75, "4okadi", "Three"] 
```

# Array Methods | Методҳои Массив

/Array method .push/

 .Рush методе мебошад, ки дар охири массив як ва зиёда элементҳоро дохил мекунад ва дар return боша .length яъне дарозии массивро нишон медиҳад.

```js
let arr = [88, "Three"]
let add = arr.push(true, 5, )
console.log(arr);   // output: [88, "Three", true, 5]
console.log(add);   // output: 4 
```

/Array method .pop/
.Pop методе мебошад ки дар ҳолати истифода бурдан индекси охиронро delete мекунад. Ва дар return мебошад элементи охироне ки delete карда буд нишон медиҳад.

```js
let arr = [88, true, 5, "Three", "E"]
console.log(arr.pop);   // output: E
console.log(arr);   // output: [88,true, 5, "Three"]
```

/Array method .unshift/

 .unshift методе мебошад, ки дар аввали массив як ва зиёда элементҳоро дохил мекунад ва дар return боша .length яъне дарозии массивро нишон медиҳад.

```js
let arr = [88, "Three"]
let add = arr.unshift(true, 5, )
console.log(arr);   // output: [true, 5б 88, "Three"]
console.log(add);   // output: 4 
```

/Array method .shift/
.shift методе мебошад ки дар ҳолати истифода бурдан индекси аввалро delete мекунад. Ва дар return мебошад элементи аввалине ки delete карда буд нишон медиҳад.

```js
let arr = [88, true, 5, "Three"]
console.log(arr.shift);   // output: 88
console.log(arr);   // output: [true, 5, "Three"]
```
/Array method .toString/
.toString методе мебошад ки дар ҳолати истифода бурдан тайпи массивро string мекунад. Вале тайпи асосии массив object мебошад. 

```js
let arr = [88, true, 5, "Three"]
console.log(arr.toString);   // output: '88, true, "three"'
```


/Array method .indexOf ()/
.indexOf методе мебошад ки индекси дилхоҳ элементро дар вақти истифода ба мо нишон медиҳад.

```js
let arr = [88, true, 5, "Three"]
console.log(arr.indexOf(5));   // output: 2 
console.log(arr.indexOf("js"));   // output: -1
```

/Array method .includes ()/
.includes методе мебошад, ки ба вай мо элментеро ворид мекунем агар дар массиви мо бошад true медаҳд агар набошад false медиҳад.

```js
let arr = [88, true, 5, "Three"]
console.log(arr.includes("Three"));   // output: true
console.log(arr.includes("js"));   // output: false
```

/Array method .concat ()/
.concat методе мебошад, ки 2  ва ё зиёда массивро бо ҳам пайваст мекунадю

```js
let arr = [1, 2, 3]
let add = [4, 5, 6]
let add2 = [7, 8]
console.log(arr.concat(add,add2));  // output: [1, 2, 3, 4, 5, 6, 7, 8 ]
```


/Array method .slice ()/
.slice ин метод 2 қимат дорад start, end ва 
аз start то  end-ро нишон медиҳад.
```js
let arr = [88, true, 5, "Three"]
console.log(arr.slice(1,3));   // output: [true, 5]
```

/Array method .splice ()/
.splice ин метод 3 қимат дорад start, deletecount ва item1 ..... itemN.
splic(start, deleteCount, item1 ....itemN)



```js 
let arr = [88, true, 5, "Three"]
console.log(arr.slice(2, 2, "street", 101));   //output: [88, true, "street", 101 ]
```

# Java Script array methods callbacks

