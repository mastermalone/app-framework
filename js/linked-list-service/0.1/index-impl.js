define(function linkedListImplementationModule() {
  'use strict';
  
  return function LinkedListFactory() {
     
     var Node = function Node(data) {
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
         var node = new Node(data);
         var currentNode = this.head;
         
         //If there is no list created yet, you need to create a head
         if (!currentNode) {
           this.head = node;
           this._length++;
           return node;
         }
         
         //If a node exists (a list has bee created) set up the link to the next node
         while (currentNode.next) {
           currentNode = currentNode.next;
         }
         
         this._length++;
         return node;
       }
     };
     return LinkedList;
  };
});
