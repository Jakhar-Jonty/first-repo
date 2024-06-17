import React from 'react'

export const Home = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>React</h1>
    <ol className='orderFontStyle'>
      <li>
        Introduction
        <ul>
          <li>
          ReactJS is a <b>declarative</b>, <b>efficient</b>, and <b>flexible</b> JavaScript library for building user interfaces.
          </li>
          <li>
          It lets you compose complex UIs from small and isolated pieces of code called “components”.
          </li>
        </ul>
      </li>

      <li>
        Components
        <ul>
          <li>
          Components are the building blocks of React applications.
          </li>
          <li>
          They can be <b>functional</b> (stateless) or <b>class-based </b>(stateful).
          </li>
        </ul>
      </li>

      <li>
        JSX
        <ul>
          <li>
          JSX is a syntax extension for JavaScript that looks similar to HTML.
          </li>
          <li>
          It allows you to write HTML elements in JavaScript and place them in the DOM without any createElement() and appendChild() calls.
          </li>
        </ul>
      </li>

      <li>
      State & Props
      <ul>
          <li>
          <b>State</b> is a set of data that determines the component’s behavior and rendering.
          </li>
          <li>
          <b>Props</b> are read-only components that must never be modified.
          </li>
        </ul>
      </li>

      <li>
      Lifecycle Methods
      <ul>
          <li>
          Lifecycle methods are hooks that allow you to run code at particular times in the component’s life cycle, such as componentDidMount, componentDidUpdate, and componentWillUnmount.
          </li>
        </ul>
      </li>

      <li>
      Hooks
      <ul>
          <li>
          Hooks are functions that let you “hook into” React state and lifecycle features from function components.
          </li>
          <li>
          Common hooks include useState, useEffect, and useContext.
          </li>
        </ul>
      </li>

      <li>
      Virtual DOM
      <ul>
          <li>
          React creates a virtual DOM, which is a lightweight copy of the actual DOM.
          </li>
          <li>
          It updates the virtual DOM first and then efficiently updates the real DOM to match it.
          </li>
        </ul>
      </li>

      <li>
      Performance Optimization
      <ul>
          <li>
          Techniques like <b>memoization</b>, <b>lazy loading</b>, and <b>code splitting</b> help improve performance.
          </li>
        </ul>
      </li>

      <li>
      Ecosystem
      <ul>
          <li>
          React has a rich ecosystem with tools like Redux for state management, React Router for navigation, and many more libraries that extend its capabilities.
          </li>
        </ul>
      </li>
    </ol>
</div>
  )
}
