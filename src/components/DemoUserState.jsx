import React, { useState } from "react";

export default function DemoUserState() {
  // kiểu dữ liệu nguyên thủy
  // + number, string, boolean , null , ...
  // kiểu dữ liệu phức tạp : Arr , object .
  const [text, setText] = useState("Hello mọi !!!");
  const [count, setCount] = useState(0);
  const [ObjList, setObjList] = useState({ count: 1, arrList: [3, 5, 7] });

  console.log(ObjList.count);

  console.log(count);

  const handleChangeText = () => {
    setText("Xin chào mọi người");
  };
  // kiểu dữ liệu phức tạp
  const [arrList, setArrList] = useState([1, 2, 3, 4]);
  const HandleAddRandom = () => {
    setArrList([...arrList, Math.floor(Math.random() * 1000)]);
  };
  // object
  const handleAddNumberObj = () => {
    setObjList({
      count: ObjList.count,
      arrList: [...ObjList.arrList, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      {console.log("re-render")} ;<h2>Demo UserState </h2>
      <div>Text : {text} </div>
      <button onClick={handleChangeText}>Change Text</button>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}> Up </button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <div>
        <h3>Kiểu dữ liệu phức tạp </h3>
        <p>{arrList.toString()}</p>
        <button onClick={HandleAddRandom}> Add Ramdom Number</button>
        <h4>{ObjList.count}</h4>
        <button
          onClick={() =>
            setObjList({
              count: ObjList.count + 1,
              arrList: [...ObjList.arrList, Math.floor(Math.random() * 10)], // khi click nó sẽ thềm vào arr in obj
            })
          }
        >
          object ++
        </button>
        <button
          onClick={() =>
            setObjList({
              count: ObjList.count - 1,
              arrList: [...ObjList.arrList, Math.floor(Math.random() * 10)], // khi click nó sẽ thềm vào arr in obj
            })
          }
        >
          object -- 
        </button> 
        <p>Array in Obj : {ObjList.arrList.toString()}</p> 
        <button onClick={handleAddNumberObj}>Add Random Number in obj</button> 
      </div>
    </div>
  );
}
