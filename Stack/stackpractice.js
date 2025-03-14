class Stack {
    constructor() {
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        } else {
            return this.items.pop();
        }
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        } else {
            return this.items[this.items.length-1];
        }
    }
    isEmpty(){
        return this.items.length==0;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items);
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(90);
stack.push(50)
stack.print();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());


