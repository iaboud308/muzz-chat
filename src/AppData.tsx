


interface IMessage {
    message: string,
    date: Date,
    sender: number
}



const yesterday = () => {
    const today = new Date();
    const yesterday = new Date(today.getDate() - 2);
    yesterday.setHours(6);
    yesterday.setMinutes(19);
    return yesterday;
}




const senderMessages: IMessage[] = [
   { message: 'Hello', date: yesterday(), sender: 2 },
   { message: 'How are you?', date: new Date(), sender: 2 },
   { message: 'I like your profile', date: new Date(), sender: 2 },
]


const userMessages: IMessage[] = [
    { message: 'Hi', date: yesterday(), sender: 1 },
    { message: 'How are you?', date: new Date(), sender: 1 },
   { message: 'I like your profile', date: new Date(), sender: 1 },
]


const chatMessages: IMessage[] = [...senderMessages, ...userMessages];



chatMessages.sort((a: IMessage, b: IMessage) => {
    return a.date.getTime() - b.date.getTime();
})




export default chatMessages;
export {
    userMessages,
    senderMessages
};
export type { IMessage };
