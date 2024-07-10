// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try {
    const todores = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const tododata = todores.data;
    const userId = tododata.userId;
    const userresp = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userdata = userresp.data;

    const output ={
      owner: userdata.name,
      title: tododata.title,
      completed: tododata.completed,

    }
    return output;


  } catch (error) {
    
    return "INVALID TODO ID";
  }

  

};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

//รหัส นศ.:660610803

//ชื่อ-สกุล :สุริโย หลุ่มโสม
