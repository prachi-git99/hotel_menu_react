import React ,{useEffect,useState}from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0); //[current data , updated function]

  useEffect(() => {
    document.title = `Chats(${myNum})`
  });
  
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={()=>setMyNum(myNum +1)} >
          INCR 
        </div>
      </div>
    </>
  );
};

export default UseEffect;