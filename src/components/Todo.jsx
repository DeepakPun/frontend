import Alert from './Alert'

const Todo = () => {
  return (
    <div>
      <Alert message='How are my Tennis/Hiking buddies doin?' />
      <Alert message='How are my Football/Fishing buddies doin?' />
      <hr />
      <div className=''>
        <h3>Items still in progress</h3>
        <ul className='px-0'>
          <li>Domain registration</li>
          <li>Backend API</li>
          <li>UI integration with API</li>
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default Todo
