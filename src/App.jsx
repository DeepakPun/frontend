import Alert from './components/Alert'
import Blog from './components/Blog'
import Pic from './components/Image'
import Todo from './components/Todo'
const messages = [
  // {
  //   id: 1,
  //   content: 'Hello, 4th July!!',
  // },
  // {
  //   id: 2,
  //   content: 'LMK what we should do next Sat.',
  // },
  // {
  //   id: 3,
  //   content: 'How are my Football/Fishing buddies doing?',
  // },
  // {
  //   id: 4,
  //   content: 'How are my Tennis/Hiking buddies doing?',
  // },
]

function App() {
  return (
    <div className='p-4'>
      {messages &&
        messages.length > 0 &&
        messages.map(message => (
          <Alert key={message.id} message={message.content} />
        ))}
      <Todo />
      <Pic />
      <Blog />
      <h1>Hello how are you?</h1>
    </div>
  )
}

export default App
