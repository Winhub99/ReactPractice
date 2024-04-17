class Node{
    constructor(data){
        this.data = data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    addNode(data){
        const node = new Node(data);
        if(!this.head){
            this.head=node
            return;
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode= currentNode.next
        }
        currentNode.next=node;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log('the current data is :',current.data)
            current= current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.addNode(10);
linkedList.addNode("ka daum")
linkedList.addNode(20)
linkedList.printList()