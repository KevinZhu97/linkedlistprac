

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) { // THIS WORKS
        //add to the end of the list or adding new tail
        const newNode = new Node(value)
        //if linked list empty, make it the head
        let current;
        if(this.head === null) {
            this.head = newNode;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
                //traverses until the end of the list
            }

            //once we reach the end, current.next will be our new node
            current.next = newNode
        }

    }

    prepend(value) { //THIS WORKS
        //adds a new node to start of the list or adding new head
        this.head = new Node(value, this.head)
    }

    size() { //THIS WORKS
        let current = this.head;
        let counter = 1;
        while (current.next) {
            current = current.next
            counter++
        }

        return counter
        //returns the size of the list
    }

    tail() { //THIS WORKS
        let current = this.head;

        while (current.next) {
            current = current.next
        }


        //what happens if there's nothing? 

        return current;
        //returns the last node in the list
    }

    showHead() { //THIS WORKS
        return this.head;

        //what happens if its null?
    }

    at(index) { //THIS WORKS
        let current = this.head;
        let count = 0;

        while(current) {
            if (count === index) {
                return current.value
            }
            count++;
            current = current.next;
        }
        //returns node at given index
    }

    pop() { //This WORKS
        let current = this.head;
        let previous;

        while (current.next) {
            previous = current;
            current = current.next
        }

        previous.next = null;
        //removes the last element on the list
    }

    contains(value) { //THIS WORKS
        let current = this.head 

        while (current) {
            if (value === current.value) {
                return true;
            } else {
                return false;
            }
        }
        //returns true if contains value otherwise, false
    }

    find(value) { //THIS WORKS
        let current = this.head;
        let counter = 0;

        while (current) {
            if (current.value === value) {
                return counter;
            }
            counter++
            current = current.next;
        }

        return "Could not find"
        //returns the index of node containing the value, or null if not found
    }

    toString(value) { //THIS WORKS
        let current = this.head;

        while(current) {
            console.log(current.value)
            current = current.next
        }
        //represents your linked list objects as string to view in console ( value ) -> ( value ) -> ( value ) -> null
    }

    insertAt(value, index) { //THIS WORKS
        if (index > 0 && index > this.size()) {
            return
        }

        if (index === 0) {
            this.prepend(value)
            console.log("replaced first")
            return
        }

        let current = this.head;
        let count = 0;
        let previous;

        const newNode = new Node(value)

        while(count < index) {
            previous = current; //node before index cause count is less than index
            count++;
            current = current.next //we will move current to the next one, the node after index
        }

        newNode.next = current; //we move the node that we are displacing to next
        previous.next = newNode; //the node that comes before index, we will set new node next to it
        //that inserts a new node with the provided value at the given index
    }

    removeAt(index) { //THIS WORKS
        let current = this.head;
        let count = 0;
        let previous;
        
        if (index > 0 && index > this.size()) {
            return "No node exists at that index"
        }

        if(index === 0) {
            this.head = current.next
        } else {
            while (count < index) {
                previous = current;
                count++
                current = current.next
            }

            previous.next = current.next
        }
        //removes the node at the given index
    }
}

const ll = new LinkedList();

ll.append(300)
ll.prepend(50)
ll.insertAt(75, 1)
ll.removeAt(2)

console.log(ll.toString())


//When you insert or remove a node, consider how it will affect the existing nodes. 
//Some of the nodes will need their nextNode link updated.