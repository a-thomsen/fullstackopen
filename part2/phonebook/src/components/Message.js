import React from 'react'

const Message = ({message, error}) => {
    if(message === null){
        return null
    }
    
if(error){
    return(
        <div className={'error'}>
            {message}
        </div>
    )
}

return (
    <div className={'success'}>
        {message}
    </div>
)
}

export default Message