import React, { useState ,useEffect ,useRef, useContext } from 'react'
import styles from './Home.module.css'
import EmptyNote from '../components/EmptyNote'
import Modal from '../../Modal'
import CreateClass from '../components/CreateClass'
import ClassName from '../components/ClassName'
import { Appcontext } from '../Context/Appcontext'
import ChatSection from '../components/ChatSection'


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {class_data}=useContext(Appcontext);
  const [isChatShown,setisChatShown]=useState(null);
  const [isRightVisible, setIsRightVisible] = useState(true); // Visible by default on web view
  const [isLefttVisible, setIsLeftVisible] = useState(true); // Visible by default on web view
  const [isMobile, setIsMobile] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener('resize', handleResize); // Add event listener for screen resize

    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
  }, []);

  // Step 3: Hide the div by default on mobile view
  useEffect(() => {
    if (isMobile) {
      setIsRightVisible(false); // Hide the div on mobile view initially
      
    }
  }, [isMobile]);

  // Step 4: Toggle visibility on button click for mobile view
  const toggleVisibility = () => {
    if (isMobile) {
      setIsRightVisible(true);
      setIsLeftVisible(false);
    }
  };
 
  //for opening the modal
  const openModal = () => {
    setIsModalOpen(true);
  };


   // for closing the modal  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  //to close the modal if click on outside  
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };



  // if click on the chat section 
  const handleChatSectionClick = (item) => {
    setisChatShown(item)
    toggleVisibility()
    console.log(isChatShown);
  };

  // //handle click on back button in chat section it will be passed as prop 
  const handleBackClick =()=>{
    if(isMobile){
      setIsLeftVisible((true))
      setIsRightVisible(false)
    }
    else{
      setisChatShown(null)
    }
     
  }
 

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isModalOpen]);

  return (
    <div className={styles.container}>
      { isLefttVisible && (<div className={styles.left}>
       <p className={styles.heading}>Pocket Notes</p>
       <div className={styles.class_name} > 
        {class_data.map((item,index)=>{
          return (
          <div key={index} className={styles.classname} onClick={()=>handleChatSectionClick(item)}>
            <ClassName key={index} item={item} />
          </div>
          )
        })}

        </div>
       <button className={styles.btn} onClick={()=>{setIsModalOpen(true)}}>+</button>
       {isModalOpen ? <Modal modalRef={modalRef} onClose={()=>{setIsModalOpen(false)}}><CreateClass onClose={()=>{setIsModalOpen(false)}}/></Modal> : null}
      </div> )}
      {isRightVisible && (<div className={styles.right}>
       {isChatShown ? <ChatSection  handleBackClick={handleBackClick}  item={isChatShown}/> : <EmptyNote/>}
      </div>)}
    </div>
  )
}

export default Home