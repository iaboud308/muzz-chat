import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { IMessage } from "../AppData";
import UserBubble from "./UserBubble";
import SenderBubble from "./SenderBubble";
import { displayDate, isGroup } from "../utils";






const Messages = () => {


  const contextValue = useContext(AppContext);
  

  let messages: IMessage[] = [];
  if (contextValue !== null) {
    messages = contextValue.messages;
  }


  if (!messages) {
    return (
      <h2 className="">No Messages</h2>
    );
  }





  return (
    <div className="">
          {
            messages.map((message: IMessage, index: number) => {
                return (
                    <div className="" key={ index }>
                        {
                            displayDate(index, message, messages)
                        }
                        {
                            message.sender === 1 ? <UserBubble message={message} group={isGroup(messages, message, index)} /> : <SenderBubble message={message} group={isGroup(messages, message, index)} />
                        }
                    </div>
                );
            })
          }
    </div>
  );
}

export default Messages;