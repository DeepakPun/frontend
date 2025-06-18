import React from 'react'

const Blog = () => {
  return (
    <div>
      <h2>Frontend</h2>
      <p>
        User interface is built using React JS framework. Styling is implemented
        with Tailwind CSS.
      </p>
      <hr />
      <h2>Containerization</h2>
      <p>App is containerized using Docker.</p>
      <hr />
      <h2>Version control</h2>
      <p>For this purpose, git and Github are utilized.</p>
      <hr />
      <h2>Automated CI/CD</h2>
      <p>
        For continuous integration and deployment, Github actions is used. On
        certain event such as push, automatic build and deploy actions get
        triggered.
      </p>
      <hr />
      <h2>Hosting</h2>
      <p>App is hosted on Amazon Web Services</p>
      <hr />
    </div>
  )
}

export default Blog
