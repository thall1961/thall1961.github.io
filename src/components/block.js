import React from "react"

function Block(props) {
  return (
    <div style={{ padding: "0 20px" }}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      {props.links.map(link => (
        <a
          key={link.link}
          href={link.link}
          style={{
            display: "block",
          }}
        >
          {link.title}
        </a>
      ))}
    </div>
  )
}

export default Block
