import React from 'react'

const caapitalize = (word)=>{
  const Lower = word.toLowerCase();
  return Lower.charAt(0).toUpperCase() + Lower.slice(1);
}
export default function Alerts(props) {
    return (
      props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{caapitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}