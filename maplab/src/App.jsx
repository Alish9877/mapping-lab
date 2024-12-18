import './App.css'
import data from './data/contacts.json'
import Contact from './components/Contact'

const App = () => {

  console.log(data)

  return (
    <div className="App">
      <h1>Contact List</h1>
      <section className='contacts'>
        {data.results.map((contact) => (
          <Contact contact={contact} key={contact.login.uuid} />
        ))}
      </section>
    </div>
  )
}

export default App