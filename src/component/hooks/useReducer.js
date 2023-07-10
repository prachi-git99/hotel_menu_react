import React, { useReducer } from "react";
import "./style.css";


const reducer = (state , action) => {
    if(action.type === "INCR"){
        state = state + 1;
    }
    if(action.type === "DECR"){
        state = state > 0 ? state - 1 : 0;
    }
    return state ;
};

const UseReducer = () => {
  const initialData = 10;

 const [state , dispatch] = useReducer(reducer , initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=> dispatch({type:"INCR"})}>
          INCR
        </div>
        <div
          class="button2" onClick={()=> dispatch({type:"DECR"})}>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;