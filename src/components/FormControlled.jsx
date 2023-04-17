import React, { Component } from 'react';

class FormControlled extends Component {
    // B1: Khởi tạo state ở constructor để lưu trữ dữ liệu form
    constructor(props) {
        super(props);
        this.state = {
            studentId: "",
            studentName: "",
            birthPlace: "",
            ra: true
        }
    }
    handleChange = (event) => {
        // Lấy tên của thành phần form
        let name = event.target.name;
        // Lấy giá trị hiện tại của thành phần form
        let value = event.target.value;
        console.log("Tên thành phần form -->", name);
        console.log("Giá trị thành phần form--->", value);
        // Cập nhật vào state
        this.setState({
            // name: studentId --> [studentId]:value
            // name: studentName -->[studentName]:value
            //state:{studentId,studentName,birthPlace}
            //state.studentId = value
            //[name]: thuộc tính của đối tượng state
            [name]: value
        })

    }
    handleSubmit = (event) => {
        event.preventDefault();
        // Bước 3: xử lý dữ liệu
        console.log("Student Id--->", this.state.studentId);
        console.log("Student Name-->", this.state.studentName);
        console.log("Birth Place-->", this.state.birthPlace);
    }
    render() {
        // render có điều kiện
        let elementRA = "";
        if (this.state.ra) {
            elementRA = <p>Rikkei Academy</p>
        } else {
            elementRA = <p>Xin chào các bạn</p> 
        }
        return (
            <div>
                <h2>Controlled Form Demo</h2>
                <form>
                    <label htmlFor='studentId'>Student Id</label>
                    <input type={'text'} id='studentId' name='studentId' onChange={this.handleChange} /><br></br>
                    <label htmlFor='studentName'>Student Name</label>
                    <input type={'text'} id='studentName' name='studentName' onChange={this.handleChange} /><br></br>
                    <label htmlFor='birthPlace'>Birth Place</label>
                    <select id='birthPlace' name='birthPlace' onChange={this.handleChange} >
                        <option value={''}>Chọn nơi sinh</option>
                        <option value={'HN'}>Hà Nội</option>
                        <option value={'DN'}>Đà Nẵng</option>
                        <option value={'HCM'}>TP HCM</option>
                    </select><br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                {elementRA}
                <button onClick={() => this.setState({ ra: !this.state.ra })}>Wellcome</button>
            </div>
        );
    }
}

export default FormControlled;