import Alert from './components/Alert'
import Blog from './components/Blog'
import Todo from './components/Todo'

function App() {
  return (
    <div className='p-4'>
      <Alert message='LMK what we should do next Sat?' />
      <Todo />
      <Blog />
    </div>
  )
}

export default App
