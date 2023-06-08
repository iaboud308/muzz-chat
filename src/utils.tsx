import { IMessage } from "./AppData";





const getDay = (date: Date) => {
    const today = new Date();
    const day = date.toLocaleDateString(undefined, { weekday: 'long'});

    if (today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear()) {
        return 'Today';
    }

    return day;

  }
  


  const getSecondsDifference = (endTime: Date, startTime: Date): number => {
    const differenceInMilliseconds = endTime.getTime() - startTime.getTime();
    return differenceInMilliseconds / 1000;
  }


  const getMinutesDifference = (endTime: Date, startTime: Date): number => {
    const seconds = getSecondsDifference(endTime, startTime);
    return seconds/60;
  }



  const displayDate = (i: number, currentMessage: IMessage, messages: IMessage[]) => {
        if (i < 1 || getMinutesDifference(currentMessage.date, messages[i - 1].date) > 60) {
            return (
                <div className="d-flex mt-4 justify-content-center">
                    <h4 className="">{ getDay(currentMessage.date) }</h4>
                    <h4 className="ms-1">{ currentMessage.date.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' })}</h4>
                </div>
            );
        }

  }


  const isGroup = (messages: IMessage[], currentMessage: IMessage, i: number) => {
    if(i === 0) {
        return false;
    }

    if(messages[i - 1].sender === currentMessage.sender && (getSecondsDifference(currentMessage.date, messages[i - 1].date) < 20)) {
        return true;
    }
    else {
        return false;
    }
  }



  export {
    getDay,
    getSecondsDifference,
    getMinutesDifference,
    displayDate,
    isGroup
  }