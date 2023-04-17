/*
Optimzing a linked list raises many questions. Consider the simple problem of 
adding something to the tail of our linked list. In our old implementation, we
would need to start at the head and iterate until we found the node whose next
pointer was null. Once found, we can set its next to a new node holding
whatever value we want to add to the tail.

OR!

We can make a simple adjustment to LinkedList class that lets us keep track of
the tail. This O(1) change allows us to quickly find the tail and update what
its next value is. Let's take it a step further and think about removing from
both the head and the tail. Consider the implementation below.
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const node = new LinkedListNode(value);
        node.next = this.head;
        this.head = node;
        if(!this.tail) this.tail = node;
    }

    removeFromHead(){
        const head = this.head;
        this.head = head.next;
        if (this.tail === head) this.tail = null;
        return head;
    }

    addToTail(value){
        const node = new LinkedListNode(value);
        const temp = this.tail;
        this.tail = node;
        if (temp) temp.next = node;
        if (!this.head) this.head = node;
    }

    removeFromTail(){
        let beforeTail = this.head;
        const oldTail = this.tail;
        if (beforeTail === this.tail){
            this.head = null;
            this.tail = null;
            return oldTail;
        }
        while (beforeTail.next !== this.tail) beforeTail = beforeTail.next;
        this.tail = beforeTail;
        beforeTail.next = null;
        return oldTail;
        
    }

    find(val){
        let current = this.head;
        while (current){
            if (current.value === val) return true;
            current = current.next;
        }
        return false;
    }
    traverse() {
        let current = this.head.next;
        console.log("Value at head    : ", this.head.value)
        while (current !== this.tail) {
            console.log("The next value is: ", current.value)
            current = current.next;
        }
        console.log("Value at tail    : ", current)
    }
}


class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
const myLinkedList = new LinkedList()