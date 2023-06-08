


const SenderBubble = ({ message, group }: any) => {

  const classList = () => {
    if (group) {
        return 'group-messages'
    } else {
        return 'ungroup-messages'
    }
}
  return (
    <div className={ classList() }>
        <div className="sender-bubble">
            { `${message.message}` }
        </div>
    </div>
  )
}

export default SenderBubble