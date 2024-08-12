import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './CreateClass.module.css'
import { Appcontext } from '../Context/Appcontext'
import {color} from '../data/color.js'
import limitWords from '../data/wordLimit.js'

function CreateClass({onClose}) {
  const {class_data,setClass_data}=useContext(Appcontext);
  const [activeButton, setActiveButton] = useState(null);
  const [error,setError]=useState(false)
  const [colorerror,setColorError] =useState(false)
  const class_name=useRef(null)

  //handle on click to set border on selected color !! 
 const handleOnClick = (index)=>{
     setActiveButton(index+1)
 }

 //handle create button  !! 
 const handleCreate = ()=>{

  let className = class_name.current.value;
  className=limitWords(className,3);
  if(!className && !activeButton) {
    setError(true)
    setColorError(true)
  }
 else if(!className){
  setError(true)
  alert("Please enter GROUP NAME ")
 }
 else if(!activeButton){
  alert ("Please select the COLOR")
 }
 
  else {
    console.log("class name : ",className);
    console.log("selected color",activeButton);
    setClass_data([...class_data,{className,color:activeButton}])
    setError(false)
    setActiveButton(false)
    onClose()
  }  
 }

 //on pressing the enter key i have to make class 
 const handlekeyPress=(event)=>{
  if(event.key==='Enter'){
     handleCreate()
  }
 }
 
  return (
    <div className={styles.conatiner}>
      <p className={styles.heading}>Create New Group</p>
      <div className={styles.group_cred}>
      <p className={styles.grp_name}>Group Name</p>
      <input className={styles.grp_name_input} type="text" placeholder='Enter group name' ref={class_name} onKeyPress={handlekeyPress} />
      </div>
      {error &&  <p className={styles.error}>Class Name is required</p>}
      <div className={styles.color_cred}>
      <p className={styles.grp_name}>Choose Color</p>
      <div className={styles.color_choice}>
          
        {color.map((item,index)=>{
             return (
              <button key={index}  className={styles.color_btn_choice} style={{backgroundColor:item  ,  border: activeButton === index+1 ? '2px solid #A02334' : 'none'}} onClick={()=>handleOnClick(index)} onKeyPress={handlekeyPress}></button>
             )
        })}
         
      </div>
      </div>
      
      {colorerror &&  <p className={styles.colorerror}>Please Choose the color</p>}
      <button className={styles.create_btn} onClick={handleCreate}>Create</button>
    
      
      
    </div>
  )
}

export default CreateClass