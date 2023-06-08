import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";





const SendMessage = () => {

  const { sendMessage }: any = useContext(AppContext);

  const [message, setMessage]: any = useState('');


  const handleChange = (e: any) => {
    setMessage(e.target.value);
  }


  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message === '') {
      return;
    }
    sendMessage(message);
    setMessage('');
  }


  return (
    <div className="">
      <form className="" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between">
            <input className="text-box" onChange={handleChange} value={message} type="text" name="message" />
            <button className="send-button">Send</button>
        </div>
      </form>
    </div>
  )
}

export default SendMessage;