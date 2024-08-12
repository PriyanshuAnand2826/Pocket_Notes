import { createContext, useState ,useEffect} from "react";

export const Appcontext = createContext();

export const AppProvider = ({children})=>{
  const [class_data,setClass_data]=useState(
    JSON.parse(localStorage.getItem('class_data')) || []
  );
  const [notes,setNotes]=useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  useEffect(() => {
		localStorage.setItem("class_data", JSON.stringify(class_data));
	}, [class_data]);

  
  useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

  return (
    <Appcontext.Provider value={{class_data,setClass_data,notes,setNotes}}>
      {children}
      </Appcontext.Provider>
  )
}