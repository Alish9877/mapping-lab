const Contact = ({ contact }) => {

  return (
    <div className="contact">
      <div className="image">
        <img src={contact.picture.large} alt={`A contact photo for ${contact.name.first} ${contact.name.last}`} />
      </div>
      <div className="info">
        <h2>{contact.name.first} {contact.name.last}</h2>
        <h4>Home: {contact.phone}</h4>
        <h4> Mobile: {contact.cell}</h4>
      </div>
      <div className="arrow">
        <p>{">"}</p>
      </div>
    </div>
  )
}

export default Contact