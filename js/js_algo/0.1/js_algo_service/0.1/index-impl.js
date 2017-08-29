define([], function algoModule() {
  'use strict';
  
  return function AlgoFactory() {
    var AlgoService = {
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
        var aELm = listA[0];
        var bELm = listB[0];
        var i = 1;
        var j = 1;
        
        if (listA.length === 0) {
          return listB;
        }
        if (listB.length === 0) {
          return listA;
        }
        
        while (aElm || bELm) {
          if ((aELm && !bElm) || aELm < bELm) {
            merged.push(aELm);
            aELm = listA[i++];
          }else {
            merged.push(bELm);
            bELm = listB[i++];
          }
        }
        return merged;
      }
    };
    
    return {
      init: AlgoService.init, 
      findDuplicates: AlgoService.findDuplicates,
      pointsComparison: AlgoService.pointsComparison,
      sum: AlgoService.sum,
      bigSum: AlgoService.bigSum,
      diagonalDifference: AlgoService.diagonalDifference,
      mergeSortedArray: AlgoService.mergeSortedArray
    };
  };
});
