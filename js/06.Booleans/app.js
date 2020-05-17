let todos = {


    /* TODO LIST - Global scope
    -------------------------------*/
    todoList: [

        { text: "Go shopping", completed: false }, //todoList[0].text

        { text: "Buy tobacco", completed: false }, //todoList[0].text

        { text: "Do this", completed: false }, //todoList[0].text

        { text: "Do that", completed: false } //todoList[0].text 

    ],


    /* DISPLAY TODOS
    -------------------------------*/
    displayTodos: function(newText, newCompleted = false) {
        console.log(this.todoList);
    },


    /* ADD TODO
    -------------------------------*/
    addTodo: function(newText, newCompleted = false) {

        this.todoList.push({
            text: newText,
            completed: newCompleted
        });
        //this.todoList.splice(index, 0, text);
        this.displayTodos();

    },


    /* CHANGE A TODO
    -------------------------------*/
    changeTodo: function(index, text) {

        this.todoList[index] = text;
        //this.todoList.splice(index, 1, text);
        this.displayTodos();

    },



    /* DELETE A TODO
    -------------------------------*/
    deleteTodo: function(index, numberToDelete = 1) {

        this.todoList.splice(index, numberToDelete);
        this.displayTodos();

    }


}


// Practice Area

// Only arrays variante



// let people = [
//     ["Mr bean", "2012.01.01", true],
//     ["Mr jonny", "2012.01.01", true],
//     ["Mr john", "2012.01.01", true]
// ];




let myList = [

    {
        text: "Learn css",
        deadline: "2020.04.30",
        completed: false
    },

    {
        text: "Learn JavaScript",
        deadline: "2020.02.20",
        completed: false
    },


    {
        text: "Learn HTML",
        deadline: "2020.03.25",
        completed: false
    }
];


// myList.push({
//     text: "Learn HTML",
//     deadline: "2020.03.25",
//     completed: false
// });


// show(myList[1], "deadline");   // Square braquettes  notation
// show(myList[0].deadline);


// myList[1].completed = true;
// show(myList[0].deadline = "2020.02.03");

// show(myList[1]);

// // DELETE
// myList.splice(1, 1);
// show(myList);




//REFACTORING

function addTodo(newText, newDeadline, newCompleted = false) {
    myList.push({
        text: newText,
        deadline: newDeadline,
        completed: newCompleted
    });
}
addTodo("Learn java", "2020.07.08", true);
show(myList);


function deleteTodo(index, deleteN = 1) {
    myList.splice(index, deleteN);
}

// show(myList.length, "List length");


// Delete only one item
deleteTodo(1);

//Delete everything after the specified index

// deleteTodo(1, myList.length - 0);
// show(myList);



function changeKEyValue(index, key, value) {
    //The key is the argument and should be used inside the braquetts
    //Otherwise, with dout notation, the key will be considered as a rel key
    // myList[index].key = value; //Wrong!
    myList[index][key] = value;
}


//In order to 
changeKEyValue(1, "completed", true);
changeKEyValue(1, "text", "Learn PHP MF");
show(myList);