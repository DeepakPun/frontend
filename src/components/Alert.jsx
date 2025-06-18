const Alert = ({ message = '' }) => {
  let content
  if (message && message.length > 0)
    content = (
      <div
        className='alert alert-info alert-dismissible fade show mt-3 text-3xl text-center'
        role='alert'
      >
        <strong>{message}</strong>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>
    )
  return content
}

export default Alert
