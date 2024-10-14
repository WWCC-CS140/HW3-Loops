## Homework 3 - Loops

In this homework, you will complete several functions that will require you to work with loops. For this homework, we'll need input from the user.
In order to read values from the user, we need a way for them to input values.
Since we have no UI, this means through the CLI we've been using.
I've provided you a simple method called, `nextInt` that will return you the next entered number.
There are two `require` statements at the top of these problems, one of which should be commented out.

```javascript
const nextInt = require('../lib/fake-input');
// const nextInt = require('../lib/real-input');
```

If you want to provide input yourself, comment the first require, and uncomment the second require.
Otherwise, a random fake input will be generated everytime you run the problem (if you manually run it outside the tests).

```javascript
// const nextInt = require('../lib/fake-input');
const nextInt = require('../lib/real-input');
```

### P1) Number tracking

Write a program that reads an unspecified number of integers.
Keep track of how many positive and negative numbers are entered.
Also keep track of the total sum and average of all numbers entered.
Your program ends when an input of 0 is entered.
The 0 should not be tracked, it's only purpose is to end the tracking and program.

Display the positive number count, negative number count, total sum and average. The average and sum should be printed with two decimal places.

Return the positive, negative, average, and sum values in an array. The syntax is as follows:

```
return [positiveCount, negativeCount, average, sum];
```

Input: 3 -2 5 1 -3

Positive: 3
Negative: 2
Average: 0.80
Sum: 4.00

Output: [3, 2, '0.80', '4.00']


### P2) Conversion table
Write a program that displays the following table (note that 1 kilogram is 2.2 pounds).
The tests expect each column to be a total of 10 characters each (20 characters per row).
DO NOT USE padStart or padEnd

Kilograms     Pounds
1                2.2
3                6.6
...              ...
197            433.4
199            437.8


### P3) Find the highest score
Write a program that reads a user entered number, representing the number of students.
Then read each student's name and score. Display the student with the highest score and the student with the second highest score.

1st place: Nick 102
2nd place: Kloi 92


### P4) Printing patterns
Use nested loops that display the following patterns in four separate programs. Do not print the pattern name. Your program should dynamically print each patterns size, meaning if you are asked to print size 3, you only do 3 rows. You will never receive a size greater then 9. For the tests its very important you do not have more then one space between each column and no extra spaces before the first column or after the last column.

Pattern A
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6

Pattern B
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

Pattern C
          1
        2 1
      3 2 1
    4 3 2 1
  5 4 3 2 1
6 5 4 3 2 1

Pattern D
1 2 3 4 5 6
  1 2 3 4 5
    1 2 3 4
      1 2 3
        1 2
          1
