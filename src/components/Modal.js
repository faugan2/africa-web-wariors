import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import {useSelector,useDispatch} from "react-redux";
import {selectModal,setModal} from "../slices";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalComponent=()=>{
	const dispatch=useDispatch();
	 let subtitle;
	  const [modalIsOpen, setIsOpen] = useState(false);

	 

	  function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	  }

	  function closeModal() {
		dispatch(setModal(null));
		//setIsOpen(false)
	  }

	const m=useSelector(selectModal);
	
	useEffect(()=>{
		if(m==null){
			setIsOpen(false)
		}else{
			setIsOpen(true);
		}
	},[m])
	
	return(
		<Modal
		ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
	)
}

export default ModalComponent;