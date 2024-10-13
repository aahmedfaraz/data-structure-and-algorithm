class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.size++
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    remove(data) {
        if (!this.head) return null;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;
        while(current && current.data !== data) {
            previous = current;
            current = current.next;
        }
        if (current) {
            previous.next = current.next;
            this.size --;
            return;
        }
        return null;
    }

    find(data) {
        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }
        if (current) return current;
        return null
    }

    print() {
        let current = this.head;
        let output = ""
        while(current) {
            output += `${current.data} > `
            current = current.next
        }
        console.log(output + 'null')
    }
}

const myList = new LinkedList();

myList.append(1)
myList.append(2)
myList.append(3)
myList.prepend(0)

myList.print() // 0 > 1 > 2 > 3 > null

myList.prepend(45)

myList.print() // 45 > 0 > 1 > 2 > 3 > null

myList.remove(45)

myList.print() // 0 > 1 > 2 > 3 > null

console.log(myList.find(2)) // Node { data: 2, next: Node { data: 3, next: null } }
console.log(myList.find(3)) // Node { data: 3, next: null }
console.log(myList.find(9)) // null

myList.print()              // 0 > 1 > 2 > 3 > null
console.log(myList.size)    // 5