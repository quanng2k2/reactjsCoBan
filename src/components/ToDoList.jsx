import React from "react";
import { useState } from "react";

export default function ToDoList() {
  // Thêm công việc 
  const [tark, setTark] = useState(""); 
  // Mảng công việc 
  const [array, setArray] = useState([]);
  // Cập nhật lại công việc
  const [edittodo, setEditTodo] = useState("");
  // Vị trí của từng phần tưt công việc trong mảng
  const [editIndex, setEditIndex] = useState(-1);

  // Lắng nghe sự kiện thay đỏi giá trị trên ô input khi thêm công việc
  const HandleChangeText = (e) => {
    setTark(e.target.value);
  };
  // Xử lý việc thêm công việc vào mảng
  const HandleChangeAdd = () => {
    setArray([...array, tark]);
  };
  // Xử lý xóa phần tử trong mảng
  const HandleChangeDetele = (index) => {
    // Mảng mới bằng các giá trị được bảo lưu từ mảng cữ
    let newArray = [...array];
    // Xóa phần tử tại vị trí thứ index bắt đầu từ vị trí thứ 1
    newArray.splice(index, 1);
    // Sau khi xóa xong thì tiến hành cập nhật lại state của mảng công việc
    setArray(newArray);
  };
  // Thay đổi vị trí index của từng phần tử khi có các sự kiện onclick
  const HandleChangeEdit = (index) => {
    console.log("index", index);
    // set lại index
    setEditIndex(index);
    // Lấy ra vị trí của phàn tử trong mảng
    setEditTodo(array[index]);
  };
  // sửa lưu sau khi đã sửa công việc
  const handleSave = (index) => {
    // Gán giá trị của phần tử tại vị trí thứ index trong mảng với giá trị cập nhật từ ôn input
    array[index] = edittodo;
    //Tiến hành cập nhật lại vị trí ( Tác dụng : Ẩn và hiển thị các button: edit, delete, save, cancel)
    setEditIndex(-1);
  };
  return (
    <div>
      <div>
        <h2>To Do List</h2>
        <input type="text" value={tark} onChange={HandleChangeText} />
        <button onClick={HandleChangeAdd}>Add</button>
      </div>
      <div>
        {array.map((e, index) => {
          return (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={edittodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                  <button onClick={() => handleSave(index)}>Save</button>{" "}
                  <button onClick={() => setEditIndex(-1)}>Cancel</button>
                </>
              ) : (
                <>
                  {e}{" "}
                  <button onClick={() => HandleChangeEdit(index)}>Edit</button>{" "}
                  <button onClick={() => HandleChangeDetele(index)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
}
