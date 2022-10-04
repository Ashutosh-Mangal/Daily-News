import React from 'react'

export default function Card(props) {
  return (
    <div className="my-3">
    <div className="container" style={{width: "18rem"}}>
    <img src={props.imageurl} className="card-img-top" alt="" />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.des.slice(0,80)}</p>
      <a href={props.readmore} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
    </div>
  </div>
  </div>
 
  )
}
