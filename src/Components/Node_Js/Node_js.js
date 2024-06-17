import React from 'react'

export const Node_js = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>Node JS</h1>
    <ol className='orderFontStyle'>
      <li>
      What is Node.js?
        <ul>
          <li>
          Node.js is an open-source, cross-platform JavaScript runtime environment.
          </li>
          <li>
          It allows you to run JavaScript on the server-side.
          </li>
        </ul>
      </li>

      <li>
      Non-blocking I/O
        <ul>
          <li>
          Node.js uses non-blocking, event-driven architecture.
          </li>
          <li>
          It’s designed for building scalable network applications.
          </li>
        </ul>
      </li>

      <li>
      npm (Node Package Manager)
        <ul>
          <li>
          Comes with a vast library of packages via npm.
          </li>
          <li>
          npm facilitates sharing and reuse of code.
          </li>
        </ul>
      </li>

      <li>
      Uses V8 Engine
        <ul>
          <li>
          Utilizes Google’s V8 JavaScript engine to execute code.
          </li>
          <li>
          The same engine that powers Google Chrome.
          </li>
        </ul>
      </li>

      <li>
      Single-threaded
        <ul>
          <li>
          Though single-threaded, it uses async processing to handle concurrent operations.
          </li>
        </ul>
      </li>

      <li>
      Modules
        <ul>
          <li>
          Node.js has a module system with a require and module.exports pattern.
          </li>
          <li>
          Encourages modular and reusable code.
          </li>
        </ul>
      </li>

      <li>
      Popular Frameworks
        <ul>
          <li>
          Express.js for web applications.
          </li>
          <li>
          Socket.io for real-time communication.
          </li>
        </ul>
      </li>

      <li>
      Use Cases
        <ul>
          <li>
          Ideal for developing data-intensive real-time applications that run across distributed devices.
          </li>
        </ul>
      </li>

      <li>
      Community and Support
        <ul>
          <li>
          Strong community support and active development.
          </li>
          <li>
          Continuously evolving with new features and improvements.
          </li>
        </ul>
      </li>
    </ol>
</div>
  )
}
