# DATA TYPES

typeof 15
Prediction: integer
Actual: number

typeof 5.5
Prediction: number
Actual: number

typeof NaN
Prediction: number
Actual: number

typeof "hello"
Prediction: string
Actual: string

typeof true
Prediction: boolean
Actual: boolean

typeof 1 != 2
Prediction: boolean
Actual: true

typeof "hamburger" + "s"
Prediction: string
Actual: strings

typeof "hamburgers" - "s"
Prediction: strings
Actual: NaN

typeof "1" + "3"
Prediction: strings
Actual: string3

typeof "1" - "3"
Prediction: string
Actual: NaN

typeof "johnny" + 5
Prediction: string
Actual: string5

typeof "johnny" - 5
Prediction: NaN
Actual: NaN

99 * "luftbaloons"
Prediction: NaN
Actual: NaN


# ARRAYS

// Add an element to the back of an array.
array.push()

// Remove an element from the back of an array.
array.pop()

// Add an element to the front of an array.
array.unshift()

// Remove an element from the front of an array.
array.shift()

// Concatenates all the elements in an array into a string.
array.join()

// Separates the characters of a string into an array. This one is a string method.
string.split()


// What will the contents of the below arrays be after the code samples are executed?
```
var numbers = [2, 4, 6, 8]
```
numbers.pop() 

// [2, 4, 6]

numbers.push(10)

// [2, 4, 6, 10]

numbers.unshift(3)

// [3, 2, 4, 6, 10]


// What is the return value of the below code sample?
```
var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")

moreMorse = ["dot", "dash", "pause", "dash", "dot"]
```


// What will the contents of the below array be after the below code sample is executed?
```
var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

bands = [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]
```

# Booleans & Comparison Operators

| a | b | a AND b |
| --- | --- | --- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | true |


|a|b|a OR b|
|---|---|---|
|true|true|true|
|true|false|false|
|false|true|false|
|false|false|true|

|a|b|a `!=` b|
|---|---|---|
|3|3|false|
|1|5|true|
|2|"2"|false|

|a|b|!a AND (a OR b)|
|---|---|---|
|true|true|false|
|true|false|false|
|false|true|false|
|false|false|true|


# conditionals

var age = prompt('What is your age?')

if (age >= 21) {
  console.log("Come on in!")
} else if (>= 18 && <= 21) {
  console.log("Come on in (but no drinking)!")
} else if (age > 75) {
  console.log("Are you sure you want to be here?")
} else {
  console.log("You're too young to be in here!")


# fizzbuzz

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz")
  } else if (i % 3 == 0) {
    console.log("fizz")
  } else if (i % 5 == 0) {
    console.log("buzz")
  } else {
    console.log(i)
  }
}


# bonus


function = fizzbuzz(i){
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz")
  } else if (i % 3 == 0) {
    console.log("fizz")
  } else if (i % 5 == 0) {
    console.log("buzz")
  } else {
    console.log(i)
  }
}
