import Alert from './components/Alert'
import Blog from './components/Blog'
import Todo from './components/Todo'

function App() {
  return (
    <div className='p-4'>
      <p>Hi</p>
      <Alert message='LMK what we should do next Sat?' />
      <Todo />
      <Blog />
      <h1>Hello how are you?</h1>
    </div>
  )
}

export default App
