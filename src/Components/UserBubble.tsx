



const UserBubble = ({ message, group }: any) => {

    const classList = () => {
        if (group) {
            return 'd-flex justify-content-end group-messages'
        } else {
            return 'd-flex justify-content-end ungroup-messages'
        }
    }


  return (
    <div className={ classList() }>
        <div className="user-bubble">
            { `${message.message}` }
        </div>
    </div>
  )
}

export default UserBubble;