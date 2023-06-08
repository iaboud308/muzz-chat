import { useContext, useEffect, useRef } from "react";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import { AppContext } from "../Context/AppContext";




const Main = () => {

  const messageList = useRef<HTMLDivElement>(null);

  const contextValue = useContext(AppContext);
  
  let refresh = true;
  if (contextValue !== null) {
    refresh = contextValue.refresh;
  }
  

  useEffect(() => {
    const messageListElement = messageList.current;
    if (messageListElement) {
      messageListElement.scrollTop = messageListElement.scrollHeight
      console.log(messageListElement.scrollHeight);
    }
  }, [refresh])



  return (
    <div className="mt-4 mb-4">
      <h2 className="text-center mb-2">Muzz Chat</h2>
        <div ref={ messageList } className="bg-primary container overflow-y">
            <Messages />
        </div>

        <div className="container bg-primary p-4 mt-2">
            <SendMessage />
        </div>
    </div>
  );
}

export default Main;