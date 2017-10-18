define([], function algoModule() {
  'use strict';
  
  return function AlgoFactory() {
    var AlgoService = {
      mergedArrayResult: [],
      init: function init() {
        console.log('INITIALIZING ALGO SERVICE');
      },
      findDuplicates: function findDuplicates(list) {
        var dupsObject = {};
        var dupsArray = [];
        list.forEach(function listLoop(item, idx, array) {
          if (!dupsObject[item]) {
            dupsObject[item] = item;
          }else {
            dupsArray.push(item);
          }
        });
        console.log('THE DUPES:', dupsArray);
        console.log('THE DUPES Object:', dupsObject);
      },
      pointsComparison: function pointsComparison(a0, a1, a2, b0, b1, b2) {
        //console.log('The arguments:', arguments);
        var _alice_score = 0;
        var _bob_score = 0;
        
        a0 !== b0 ? a0 > b0 ? _alice_score ++ : _bob_score ++ : _alice_score += 0, _bob_score +=0; 
        a1 !== b1 ? a1 > b1 ? _alice_score ++ : _bob_score ++ : _alice_score += 0, _bob_score +=0; 
        a2 !== b2 ? a2 > b2 ? _alice_score ++ : _bob_score ++ : _alice_score += 0, _bob_score +=0;
        
        console.log('THE SCORE', _alice_score, _bob_score); 
      },
      sum: function sum(n, ar) {
         var sum = 0;
          ar.forEach(function mapIt(item, idx, array) {
              sum += array[idx];
          });
          
          console.log('THE SMALL SUM', sum);
      },
      bigSum: function bigSum(n, ar) {
        var sum = 0;
        var sum2 = 0;
        ar.forEach(function (item, idx, array) {
          if (idx < array.length) {
            sum += array[idx];
          }
        });
        console.log(sum);
        
        for (var i = 0; i < n; i++) {
          sum2 += ar[i];
        }
        console.log(sum2);
      },
      diagonalDifference: function diagonalDifference(stdin) {
        var n = stdin[0];
        var arr = [];
        console.log('STDIN', n);
        for (var i = 1; i < n; i++) {
          console.log('STDIN', n);
          arr.push(n.split(' ').map(Number));
        }
        
        console.log('DIAGONAL ARRAY', arr);
      },
      mergeSortedArray: function mergeSortedArray(listA, listB) {
        //watch this: https://youtu.be/9YddVVsdG5A
        // read this: https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
        
        var merged = [];
        var aElm = listA[0];
        var bElm = listB[0];
        var i = 1;
        var j = 1;
        
        if (listA.length === 0) {
          return listB;
        }
        if (listB.length === 0) {
          return listA;
        }
        
       while (aElm || bElm) {
          if ((aElm && !bElm) || aElm < bElm) {
            merged.push(aElm);
            aElm = listA[i++];
          }else {
            merged.push(bElm);
            bElm = listB[j++];
          }
        }
        
        console.log('MERGED: ', merged);
        return merged;
      },
      reverseString: function reverseString(str) {
        var reversed = '';
        var reversed2 = '';
        var reversed3 = '';
        var mappedReverse = [];
        for (var i = str.length; i > 0; i--) {
          reversed += str[i-1];
        }
        console.log('Reversed String:', reversed);
        
        reversed2 = str.split('');//Convert to Array
        mappedReverse = reversed2.map(function reverseStringTest(item, idx, array) {
          return array[(array.length-1)-idx];
        }).join('');
        
        reversed3 = str.split('');
        reversed3.map(function reversIt(item, idx, array) {
          return array[(array.length-1)-idx];
        });
        
        console.log('MAPPED REVERSE: ', mappedReverse);
      },
      camelCase: function camelCase(str) {
        var wordCount = 0;
        str = str.split('');
        
        str.forEach(function countCase(item, idx, array) {
          //console.log('THE STRING', item);
          if (item === item.toUpperCase()) {
            wordCount++;
          }
        });
        
        console.log('WORDCOUNT=', wordCount);
      },
      plusMinus: function plusMinus(n) {
        console.log(n);
        var positives = 0;
        var negatives = 0;
        var zeros = 0;
        var positiveFraction = 0;
        var negativeFraction = 0;
        var zeroeFraction = 0;
        
        n.forEach(function plusMinusItteration(item, idx, array) {
          positives = item > 0 ? positives+=1 : positives; 
          negatives = item < 0 ? negatives+=1 : negatives; 
          zeros = item === 0 ? zeros+=1 : zeros; 
          
        });
        
        positiveFraction = (positives/n.length);
        negativeFraction = (negatives/n.length);
        zeroeFraction = (zeros/n.length);
        
        console.log(positiveFraction, negativeFraction, zeroeFraction);
      },
      isPalendrome: function isPalendrome(str) {
        if (typeof str !== 'string') {
          return 'WTF?  Not a string';
        }
        var stringArray = str.split('');
        var reversedStringContainer = [];
        var testCase = null;
        
        testCase = stringArray.map(function checkString(item, idx, array) {
          //return array[array[(array.length-1)-idx]];
          return array[(array.length-1) -idx];
        }).join('');
        
        str === testCase ? console.log('It is a palendrome:', str, testCase) : console.log('It is NOT a palendrome:', str, testCase);
        
        console.log('PALENDROME TEST', testCase);        
      },
      realMergeSort: function realMergeSort(list) {
        
        //Return if the array is less than 2 or if it is not an array
        if (typeof list !== 'object' || list.length < 2) {
          return list;
        }
        
        //Define a middle of the array and create two arrays from it
        var arrayMid = Math.floor(list.length/2);
        var leftSide = list.slice(0, arrayMid);
        var rightSide = list.slice(arrayMid, list.length);
        
        console.log('LEFT SIDE', leftSide, 'RIGHT SIDE', rightSide);
        //recursively call thjis this function as parameters of the merge function
        return AlgoService.merge(AlgoService.realMergeSort(leftSide), AlgoService.realMergeSort(rightSide));
        
      },
      merge: function merge(left, right) {
        var mergedArray = [];
        
        //Array.prototype.shift removes the first element of an array
        //and returns it as a value.  The array 0 index with then 
        //become what index 1 was 
        //In the case below, left.shift() represents 2
        while (left.length && right.length) {
          if (left[0] <= right[0]) {
            mergedArray.push(left.shift());
            console.log('LEFT SHIFT', mergedArray);
          }else {
            mergedArray.push(right.shift());
            console.log('RIGHT SHIFT', mergedArray);
          }
        }
        //Perform this if anything is left in the arrays.
        //These will only get called once and only one of them will fire
        while (left.length) {
          mergedArray.push(left.shift());
          console.log('LEFT SHIFT BELOW', mergedArray);
        }
        
        while (right.length) {
           mergedArray.push(right.shift());
           console.log('RIGHT SHIFT BELOW', mergedArray);
        }
        console.log('MERGED RESULT:', mergedArray);
        return mergedArray;
      },
      mergedSortArray3: function mergedSortArray3(list) {
        //Return if the array is less than 2 or not an object
        if (list.length <= 1) {
          return list;
        }
        //Define a middle of the array
        var midPoint = Math.floor(list.length/2);
        
        //Create two arrays recursively
        var left = AlgoService.mergedSortArray3(list.slice(0, midPoint));
        var right = AlgoService.mergedSortArray3(list.slice(midPoint));
        
        console.log('LEFT:', left, 'RIGHT:', right);
        
        //Create an array that will hold the merged results
        var mergedResult = [];
        
        //Create indexes that we can use to iterate through the arrays
        var idx_left = 0;
        var idx_right = 0;
        
        //Iterate while the indexes are less than the length of the array
        while (idx_left < left.length && idx_right < right.length) {
          if (left[idx_left] <= right[idx_right]) {
            mergedResult.push(left[idx_left]);
            idx_left +=1;
          }else {
            mergedResult.push(right[idx_right]);
            idx_right += 1;
          }
        }
        
        //Push the remaining indexes into the merged array after we are finsihed
        //with the itteration
        while (idx_left < left.length) {
          mergedResult.push(left[idx_left]);
          idx_left += 1;
        }
        
        while (idx_right < right.length) {
          mergedResult.push(right[idx_right]);
          idx_right += 1;
        }
        
        // return the result
        console.log('THE MERGED 3 RESULT: ', mergedResult);
        return mergedResult;
      },
      mergeSort4: function mergeSort4(list) {
      	if (typeof list !== 'object' || list.length <= 1) {
      		return list;
      	}
      	
      	//define a mid point to split the array
      	var midPoint = Math.floor(list.length/2);
      	
      	//Recursively create the two arrays
      	var left = AlgoService.mergeSort4(list.slice(0, midPoint));
      	var right = AlgoService.mergeSort4(list.slice(midPoint));
      	
      	//Create an array that will hold the merged results
      	var merged = [];
      	
      	//Create some iteration variables
      	var leftIdx = 0;
      	var rightIdx = 0;
      	
      	//Iterate only if both array lengths are less than their idx's
      	while (leftIdx < left.length && rightIdx < right.length) {
      		if (left[leftIdx] <= right[rightIdx]) {
      			merged.push(left[leftIdx]);
      			leftIdx += 1;
      		} else {
      			merged.push(right[rightIdx]);
      			rightIdx += 1;
      		}
      	}
      	
      	//Push the rest of the remaining items into merged
      	while (leftIdx < left.length) {
      		merged.push(left[leftIdx]);
      		leftIdx += 1;
      	}
      	
      	while (rightIdx < right.length) {
      		merged.push(right[rightIdx]);
      		rightIdx += 1;
      	}
      	
      	console.log('MERGE SORT 4', merged);
      	return merged;
      },
      mergeSort5: function mergeSort5(list) {
      	if (typeof list !== 'object' || list.length <= 1){
      		return list;
      	}
      	
      	var midPoint = Math.floor(list.length/2);
      	var left = AlgoService.mergeSort5(list.slice(0, midPoint));
      	var right = AlgoService.mergeSort5(list.slice(midPoint));
      	var merged = [];
      	
      	//Create some iteration variables
      	var leftIdx = 0;
      	var rightIdx = 0;
      	
      	while (leftIdx <= list.length && rightIdx < right.length) {
      		if (left[leftIdx] <= right[rightIdx]) {
      			merged.push(left[leftIdx]);
      			leftIdx +=1;
      		} else {
      			merged.push(right[rightIdx]);
      			rightIdx += 1;
      		}
      	}
      	
      	//Push in the stragglers 
      	while (leftIdx < left.length) {
      		merged.push(left[idx]);
      		leftIdx += 1;
      	}
      	
      	while (rightIdx < right.length) {
      		merged.push(right[rightIdx]);
      		rightIdx +=1;
      	}
      	return merged;
      },
      bubbleSort: function bubbleSort(list) {
      	if (typeof list !== 'object' || list.length <= 1) {
      		return list;
      	}
      	
      	do {
      		var swapped = false;//Set this to stop the loop
      		list.forEach(function getBubbleSorted(num, idx, array) {
      			if (array[idx] > array[idx+1]) {
      				console.log(array[idx], 'is greater than', array[idx+1]);
      				var temp = num;//Hold on to the value of the current index
      				array[idx] = array[idx+1];
      				array[idx+1] = temp;
      				swapped = true;
      				console.log('BUBBLE SORT', array);
      			}
      		});
      	} while (swapped === true);
      },
      bubbleSort2: function bubbleSort2(list) {
      	if (typeof list != 'object' || list.length <= 1) {
      		return list;
      	}
      	
      	do {
      		var swapped = false; //Set this to stop the loop
      		list.map(function bubbleSorted(num, idx, array) {
      			if (array[idx] > array[idx+1]) {
      				var temp = num; //Hold in memory the value of the current index
      				array[idx] = array[idx+1];
      				array[idx+1] = num;
      				swapped = true;
      			}
      			return array;
      		});
      	} while (swapped);
      },
      bubbleSort3: function bubbleSort3() {
      	if (typeof list !== 'object'|| list.length <= 1) {
      		return list;
      	}
      	
      	do {
      		var swapped = false //Set this as the baseline to stop the loop
      		list.map(function bubbleSort3(num, idx, array) {
      			if (array[idx] > array[idx+1]) {
      				var temp = num;
      				array[idx] = array[idx+1];
      				array[idx+1] = temp;
      				swapped = true;
      			}
      		});
      	} while (swapped)
      },
      quickSort: function quickSort(list) {
      	if (typeof list !== 'object' || list.length <=1) {
      		return list;
      	}
      	
      	//Set up some containers
      	var pivot = Math.floor(list.length/2);
      	var pivotValue = list[pivot];
      	var match = [];
      	var left = [];
      	var right = [];
      	      	
      	list.forEach(function eachItem(item, idx) {
      		if (list[idx] === pivotValue) {
      			match.push(list[idx]);
      		} else if (list[idx] < pivotValue) {
      			left.push(list[idx]);
      		} else {
      			right.push(list[idx]);
      		}
      	});
      	
      	return AlgoService.quickSort(left).concat(match, AlgoService.quickSort(right));
      },
      quickSort2: function quckSort2(list) {
      	if (typeof list !== 'object' || list.length <= 1) {
      		return list;
      	}
      	
      	var pivot = Math.floor(list.length/2);
      	var pivotValue = list[pivot];
      	var left = [];
      	var right = [];
      	var match = [];
      	
      	for (var i = 0; i < list.length; i++) {
      		if (list[0] === pivotValue) {
      			match.push(list[i]);
      		} else if (list[i] < pivotValue) {
      			left.push(list[i]);
      		} else {
      			right.push(list[i]);
      		}
      	}
      	console.log('QUICK SORT LEFT', left);
      	console.log('QUICK SORT MATCH', match);
      	console.log('QUICK SORT RIGHT', right);
      	return AlgoService.quickSort2(left).concat(match, AlgoService.quickSort2(right));
      },
      quckSort3: function quickSort3(list) {
      	if(typeof list != 'object' || list.length <= 1) {
      		return list
      	}
      	
      	//Set up the pivot, pivotValue, the left, right, and machedValue arrays
      	var pivot = Math.floor(list.length/2);
      	var pivotValue = list[pivot];
      	var left = [];
      	var right = [];
      	var matchedValue = [];
      	
      	list.forEach(function getQuickSorted(item, idx, array) {
      		if (list[0] === pivotValue ) {
      			match.push(list[i]);
      		} else if (list[idx] < pivotValue) {
      			left.push(left[idx]);
      		} else {
      			right.push(list[idx]);
      		}
      	});
      	
      	return AlgoService.quickSort3(left).concat(matchedValue, AlgoService.quickSort3(right));
      },
      sumRecursion: function sumRecursion(list) {
      	var first = list[0];
      	
      	if (list.length === 2) {
      		return first + list[1];
      	}
      	console.log('adding', first, '+', list[1], '=', first+list[1]);
      	console.log('WHAT IS sum.appl(null, args.slice(1))?:', list[1]);
      	return first + AlgoService.sumRecursion(list.slice(1));
      },
      sumRecursion2: function sumRecursion2(list) {
      	//Add up all the numbers in the list
      	var first = list[0]//This value will change based on the recursive call via array.slice(1)
      	
      	if (list.length === 2) {
      		return list[0] + list[1];
      	}
      	
      	//The array gets smaller each call due to array.slice(1);
      	return first + AlgoService.sumRecursion2(list.slice(1));
      },
      sumRecursion3: function sumRecursion(list) {
      	if (typeof list !== 'object' || list.length <= 1) {
      		return list;
      	}
      	
      	if (list.length === 2) {
      		return list[0] + list[1]; //Stops the function from executing
      	}
      	var first = list[0]; //This will change with each call to the function due to array.slice(1)
      	
      	return firts + AlgoService.sumRecursion3(list.slice(1));
      },
      recursionExample: function recursionExample(num) {
      	if (typeof num !== 'number') {
      		return num;
      	}
      	
      	if (num === 0) {
      		return;
      	}
      	
      	console.log('THE COUNTDOWN:', num);
      	return (AlgoService.recursionExample(num-1));
      }
    };
    
    return {
      init: AlgoService.init, 
      findDuplicates: AlgoService.findDuplicates,
      pointsComparison: AlgoService.pointsComparison,
      sum: AlgoService.sum,
      bigSum: AlgoService.bigSum,
      diagonalDifference: AlgoService.diagonalDifference,
      mergeSortedArray: AlgoService.mergeSortedArray,
      reverseString: AlgoService.reverseString,
      camelCase: AlgoService.camelCase,
      plusMinus: AlgoService.plusMinus,
      isPalendrome: AlgoService.isPalendrome,
      realMergeSort: AlgoService.realMergeSort,
      mergedSortArray3: AlgoService.mergedSortArray3,
      mergeSort4: AlgoService.mergeSort4,
      bubbleSort: AlgoService.bubbleSort,
      quickSort: AlgoService.quickSort,	
      quickSort2: AlgoService.quickSort2,	
      sumRecursion: AlgoService.sumRecursion,
      recursionExample: AlgoService.recursionExample
    };
  };
});
