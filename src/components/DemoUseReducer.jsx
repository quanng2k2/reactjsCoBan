import React, { useReducer} from "react";

export default function DemoUseReducer() {
    // trong react hook, useReducer đc cung cấp để thay thế cho useState
    // useState đc sử dụng trong các component đơn giản
    // còn useRrducer đc sử dụng trong các component phức tạp
    // VD : array obj lồng nhau or nhiều cấp arr obj
    //useState 
    // 1. initState : 0
    // 2. Action : setCount(count + 1) -Up ; (count -1 ) -Down
    // const [count,setCount] = useState(0) ;

    // useReducer 
    // 1 InitState : 0
    // 2 Action : (state + 1) - up , (state - 1) - down ;
    // 3 Reducer
    // 4 dispath

    // bước 1 : khởi tạo giá trị initstate
    const initState = 0;
    // bước 2 : Action
    const UP_ACTION = "up" ; 
    const DOWN_ACTION = "down" ;
    const RANDOM_ACTION = "random" ;
    // bước 3 : Reducer 
    // trong hàm reducer sẽ nhận 2 tham số 
    // 1 là state hiện tại
    // 2 là action

    const reducer = (state, action) => {
        console.log("render run ");
        switch (action) {
            case UP_ACTION:
                return state + 1;
            case DOWN_ACTION:
                return state - 1;
                case RANDOM_ACTION:
                return [state + " ; " + Math.floor(Math.random()* 10)] ;
            default:
                throw new Error(" không có action tương ứng");
        }
    };

    // bước 4 : Dispatch
    // khi comp chạy lần đầu thì chạy đến useReducer nhưng không chạy đến reducer mà chỉ chạy initstate .
    const [count, dispatch] = useReducer(reducer, initState);
    return ( 
        <div>
            <div>Count: {count}</div>
            <button onClick={() => dispatch( UP_ACTION )}> Up </button>
            <button onClick={() => dispatch( DOWN_ACTION )}> Down </button>
            <button onClick={() => dispatch( RANDOM_ACTION )}> RanDom</button> 
        </div>
    );
}
