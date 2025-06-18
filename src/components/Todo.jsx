const Todo = () => {
  return (
    <div>
      <hr />
      <div className=''>
        <h3>Items still in progress</h3>
        <ul className='px-0'>
          <li>
            <i className='fa-solid fa-arrow-right mr-2' />
            Additional Testing
          </li>
          <li>
            <i className='fa-solid fa-arrow-right mr-2' />
            SEO
          </li>
          <li>
            <i className='fa-solid fa-arrow-right mr-2' />
            Backend API
          </li>
          <li>
            <i className='fa-solid fa-arrow-right mr-2' />
            UI integration with API
          </li>
          <li>
            <i className='fa-solid fa-arrow-right mr-2' />
            Security implementation
          </li>
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default Todo
