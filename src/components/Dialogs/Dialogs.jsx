import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newDialogsArr = props.state.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let newMessagesArr = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef()

  let addPost =()=>{
    let text = newMessageElement.current.value
    alert(text)
  }



  return (

    
    <div className={s.dialogs}>
      <DialogsItem />
      <Message />
      <div className={s.dialogsItems}>
      {newDialogsArr}
      </div>
      <div className={s.messages}>
      {newMessagesArr}
      <h3>Add message</h3>
        <div><textarea ref={newMessageElement}></textarea></div>
        <button onClick={addPost}>add</button>
      </div>
    </div>
  );
};

export default Dialogs;
