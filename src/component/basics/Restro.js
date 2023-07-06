import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./menuCard"
import NavBar from "./navBar" 

const uniqueList = [...new Set(Menu.map((currentElement)=>{
    return currentElement.category;
})),
"All",
]; 

const Restro = () => {

    //usestate hook kisi bhi data ko apne pass rakhna "MUST BE AT TOP"
    const [menuData,setMenuData] = useState(Menu);   //const[state variable to hold/store menu ,updated function set+jo bhi var to manage data] = useState(intialdata) ;
    const [menuList,setMenuList] = useState(uniqueList);

    const filterItem =(category) => {

        if(category === "All"){
            setMenuData(Menu);
            return ;
        }
        const updatedList = Menu.filter((currentElement)=>{
            return currentElement.category === category ;
        });
        setMenuData(updatedList);
    };
    
  return (
   <>
    <NavBar filterItem={filterItem} menuList={menuList} />
    <MenuCard  menuData ={menuData} />
   </>  
  )
}

export default Restro