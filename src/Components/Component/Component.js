import React from 'react'

export const Component = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>Component</h1>
    <ol className='orderFontStyle'>
      <li>
        What is a Component ?
        <ul>
          <li>
          Components are the <strong>core building blocks</strong> of a React application.
          </li>
          <li>
          They serve as <strong>independent and reusable code blocks</strong> for UI elements.
          </li>
          <li>
          They represent different parts of a web page and contain both structure and behavior.
          </li>
          <li>
          They are similar to JavaScript functions.
          </li>
        </ul>
      </li>
      <li>
      Types of Components in React :
        <ul>
          <li>
          In React, we mainly have two types of components:<strong> Functional Components</strong> and<strong>Class-based Components.</strong>
          </li>
        </ul>
      </li>
      <li>
      Functional Component in React :
      <ul>
        <li>
        Functional components are just like JavaScript functions that accept properties and return a React element
        </li>
        <li>
        Here's an example of a functional component:
          <div className='codeWindow'>
             <h3> 
            {'function welcome() {'} <br/>
            {'return <h1>Hello, Welcome to GeeksforGeeks!</h1>;'} <br/>
            {'}'}
             </h3>
          </div>
        </li>
      </ul>
      </li>
      <li>
      Class Component in React :
        <ul>
          <li>
          The class components are a little more complex than the functional components.
          </li>
          <li>
          A class component can show inheritance and access data of other components.
          </li>
          <li>
          Here's an example of a class-based component:
            <div className='codeWindow'>
              <h3>
              {'class Welcome extends Component {'}<br/>
              {'render() {'}<br/>
              {'return <h1>Hello, Welcome to GeeksforGeeks!</h1>;'}<br/>
              {'}'}<br/>
              {'}'}<br/>

              </h3>
            </div>
          </li>
        </ul>
      </li>
      <li>
      Components: UI Building Blocks
          <ul>
            <li>
            On the Web, HTML lets us create rich structured documents with its built-in set of tags like {'<h1>'} and {'<li>'}
            </li>
            <li>
            React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.
            </li>
            <li>
            Just like with HTML tags, you can compose, order and nest components to design whole pages.
            </li>
          </ul>
      </li>
      <li>
      Defining a Component :
        <ul>
          <li>
          A React component is a JavaScript function that you can sprinkle with markup.
          </li>
          <li>
          Here's what that looks like:
            <div className='codeWindow'>
              <h3>
                {'export default function Profile() {'}<br/>
                {' return ('}<br/>
                {' <img src = "https://i.imgur.com/MK3eW3Am.jpg" alt = "Katherine Johnson" />'}<br/>
                {')'}<br/>
                {'}'}

              </h3>
            </div>
            The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files.<br/>
            With function Profile{'() { }'} you define a JavaScript function with the name Profile.
          </li>
        </ul>
      </li>
    </ol>
</div>
  )
}
