import React, { createContext, useState } from "react";
import chatMessages, { IMessage } from "../AppData";


export interface IContext {
    messages: IMessage[],
    sendMessage: (message: string) => void,
    refresh: boolean
}



const AppContext = createContext<null | IContext>(null);

const AppContextProvider: React.FC<any> = ({ children }) => {

    const [messages, setMessages] = useState<IMessage[]>(chatMessages);
    const [refresh, setRefresh] = useState(false);


    const sendMessage = (message: string) => {
        setMessages([...messages, { message: message, date: new Date(), sender: 1}]);
        setRefresh(!refresh);
    }


    const contextValue: IContext = {
        messages, sendMessage, refresh
    }


    return (
        <AppContext.Provider value={ contextValue }>
            { children }
        </AppContext.Provider>
    );


}


export default AppContextProvider;
export { AppContext }