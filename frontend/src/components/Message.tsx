import React from 'react'

type MessageProps = {
  name: string
}

const Message = (props: MessageProps): JSX.Element => {
  const { name } = props
  return <h1>Hey, {name} </h1>
}
export default Message
