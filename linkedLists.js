/*
What is this list and how do I link it? Or really, why?

When we learned about Arrays, we learned that an array is a sequence of 
elements of the same type stored in a contiguous block of memory. We also
learned that things are a bit whacky in Javascript. We've got dynamic arrays
that overallocate memory so we can shove any data type into the array and not
worry about overflowing any of our indices. 

OK but what If I wanted to be able to have some data stored in a line that
doesn't do that?

Enter the Linked List. A linked list lets us setup and allocate memory as 
needed for the values we want to store. However, since we can't immediately 
tell where the next item will begin, we need to set aside another pointer for
where we can find the next item in our list. Let's take a lookn at a simple
example
*/

class LinkedListBasic {
    constructor() {
        this.head = null;
    }
}

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/*
Here we've got a LinkedList class and one for LinkedListNodes. We'll need to 
add some logic for adding things to our LinkedList, so we'll go ahead and add
that code in
*/

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const node = new LinkedListNode(value);
        node.next = this.head;
        this.head = node;
    }

    traverse() {
        let current = this.head.next;
        console.log("Value at head    : ", this.head.value)
        while (current) {
            console.log("The next value is: ", current.value)
            current = current.next;
        }
        console.log("The next value is: ", current)
    }
}

/*
We've abstracted away the need to create nodes, and instead let our addToHead 
method handle that for us. Let's go ahead and make a list!
*/

const myList = new LinkedList();

myList.addToHead(2);
myList.addToHead(4);
myList.addToHead(6);

/*
Take a moment to think through what's happening here and visualize how our  
linked list current looks. What node is the head? What's its next value? Where
does it end?
*/

// myList
// 6 -> 4 -> 2 -> null

myList.traverse()