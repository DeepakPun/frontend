import Alert from './components/Alert'
import Blog from './components/Blog'
import Todo from './components/Todo'

function App() {
  return (
    <div className='p-4'>
      <Alert message='Hello, 4th July!!' />
      <Alert message='LMK what we should do next Sat?' />
      <Alert message='How are my Football/Fishing buddies doin?' />
      <Alert message='How are Tennis/Hiking buddies doin?' />
      <Todo />
      <Blog />
      <h1>Hello how are you?</h1>
    </div>
  )
}

export default App
