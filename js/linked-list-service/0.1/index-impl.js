define(function linkedListImplementationModule() {
  'use strict';
  
  return function LinkedListFactory() {
     
     /*var Node = function Node(data) {
       this.data = data;
       this.next = null;
     };
     var LinkedList = function LinkedList() {
       this._length = 0;
       this.head = null;
     };
     
     LinkedList.prototype = {
       constructor: LinkedList,
       add: function add(data) {
         var addedNode = new Node(data);
         var currentNode = this.head;
         
         //If there is no node assigned to the head yet, you need to set the head to the new node
         //This will only fire once
         if (!currentNode) {
           this.head = addedNode;
           this._length++; //Increase the length of the list variable to show the number of nodes created
           console.log('THE ADDED NODE:', addedNode);
           return addedNode;
         }
         
         //If a node exists (a list has been created) set up the link to the next node
         console.log('CUREENT NODE:', currentNode);
         console.log('CUREENT NODE NEXT:',  currentNode.next);
         while (currentNode.next) {
           currentNode = currentNode.next;
         }
         console.log('SETTING THE NEXT PROPERTY');
         //At the end of the list set up the link for the current node to point to the added none
         currentNode.next = addedNode; 
         this._length++;
         return addedNode;
       },
       get: function get(num) {
         var checkedNode = this.head; //Point to the head
         var count = 0; //Set a counter to compare num to
         console.log('THIS IS THE HEAD', checkedNode);
         if (num > this._length) {
           return 'THIS DOES NOT EXIST: INDEX: '+num;
         }
         
         while (count < num) {
           checkedNode = checkedNode.next;
           count++;
         }
         console.log('THE NODE', checkedNode);
         return checkedNode;
         
       },
       remove: function remove(num) {
         var checkedNode = this.head;
         var count = 0;
         var previousNode = null;
         
         //FIrst check that the number entered is not higher than the number of nodes
         if (num > this._length || num < 0) {
           return "THAT NODE DOES NOT EXIST";
         }
         
         //If you want to remove the head node
         if (num === 0) {
           this.head = checkedNode.next;
           this._length--;
           return this.head;
         }
         
         while (count < num) {
           previousNode = checkedNode;
           checkedNode = checkedNode.next;
           count++;
         }
         
         previousNode.next = checkedNode.next;
         checkedNode = null;
         this._length--;
         return this.head;
          
       }
     };*/
    
    var Node = function Node(data) {
      this.data = data;
      this.next = null;
    };
    
    var LinkedList = function LinkedList() {
      this.head = null;
      this.length = 0;
    };
    
    LinkedList.prototype = {
      constructor:LinkedList,
      add: function add (data) {
        var addedNode = new Node(data);
        var currentNode = this.head;
        
        if(!currentNode){
          this.head = addedNode;
          this.length++;
          return addedNode;
        }
        console.log('WHAT IS THE CURRENT NODE.NEXT?:', 'currentNode:', currentNode, 'currentNode.next:', currentNode.next);
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        
        this.length++;
        currentNode.next = addedNode;
        return addedNode;
      },
      add2: function add2(data) {
        var addedNode = new Node(data);
        var currentNode = this.head; //Point to head, even is it's null
        
        if (!currentNode) {
          currentNode = this.head; //This only happens once. Set the head of the list to the added node.
          this.length++; //increase the length
          return addedNode;
        }
        
        //If the head exists or if more than one node are in the list
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        
        currentNode.next = addedNode; //Set up the link by adding the addedNode as currentNode.next
        this.length++;
        return addedNode;
      },
      get: function getNode(index) {
        var count = 0; //Create a count to increase via itteration
        var checkedNode = this.head; //Point to the head first
        
        if (index < 0 || index > this.length) {
          return 'The number is not within the range of this linked list';
        }
        
        while (count < index) {
          checkedNode = checkedNode.next;
          count++;
        }
        console.log('GOT THIS NODE:', checkedNode);
        return checkedNode;
      },
      get2: function get2 (index) {
        var count = 0;
        var checkedNode = this.head;
        
        if (index < 0 || index > this.length) {
          return;
        }
        
        while (count < index) {
          checkedNode = checkedNode.next;
          count++;
        }
        console.log('FROM GET2 GOT THIS NODE:', checkedNode);
        return checkedNode;
      }
    };
    return LinkedList;
  };
});
