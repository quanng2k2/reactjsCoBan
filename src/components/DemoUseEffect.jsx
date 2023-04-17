import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  const [title, setTitle] = useState();
  const [count, setCount] = useState(0);
  const [arrList, setArrList] = useState([1, 2, 3, 4]);

  const handleAddRandom = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  // Trường hợp 3: có cleanUp và có dependencies (deps)
  // useEffect luôn được gọi mỗi khi component mounted
  // callback sẽ đc gọi mỗi khi deps thay đổi
  useEffect(() => { 
    console.log(`Mounted`);  
  }, [count,arrList]); 

  return (
    <div>
      {console.log("Component re-render")}
      DemoUseEffect
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <button onClick={() => setCount(count - 1)}>Down</button>
      </div>
      <div>
        <p>{arrList.toString()}</p>
        <button onClick={handleAddRandom}>Add Ramdom Number</button>
      </div>
    </div>
  );
}
