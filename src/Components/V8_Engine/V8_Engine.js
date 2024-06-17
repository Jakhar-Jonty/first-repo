import React from 'react'

export const V8_Engine = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>V8 Engine</h1>

    <ol className='orderFontStyle'>
      <li>
      V8 Engine
        <ul>
          <li>
          The V8 Engine is Google’s open-source high-performance JavaScript and WebAssembly engine.
          </li>
          <li>
          It’s used in Google Chrome and in Node.js.
          </li>
        </ul>
      </li>

      <li>
      React and JavaScript Engines
        <ul>
          <li>
          React is a JavaScript library for building user interfaces and can run in any modern browser.
          </li>
          <li>
          While React itself doesn’t use the V8 Engine directly, it runs on browsers that may use V8 (like Chrome) or other JavaScript engines (like SpiderMonkey in Firefox).
          </li>
        </ul>
      </li>

      <li>
      Performance
        <ul>
          <li>
          The performance of React applications can benefit from the optimizations made in JavaScript engines like V8.
          </li>
          <li>
          Faster JavaScript execution means better performance for React apps.
          </li>
        </ul>
      </li>

      <li>
      JSX and Babel
        <ul>
          <li>JSX, used in React, is not understood by browsers or the V8 Engine directly.</li>
          <li>
          Tools like Babel transpile JSX into regular JavaScript that browsers can execute.
          </li>
        </ul>
      </li>

      <li>
      Server-Side Rendering (SSR)
        <ul>
          <li>
          When using SSR with React, Node.js (which uses the V8 Engine) can render components on the server.
          </li>
        </ul>
      </li>

      <li>
      Development Tools
        <ul>
          <li>
          The Chrome Developer Tools, powered by the V8 Engine, are useful for debugging React applications.
          </li>
        </ul>
      </li>
    </ol>
    <p>
    The V8 Engine plays a crucial role in the ecosystem where React operates by providing a fast execution environment for JavaScript.
    </p>
</div>
  )
}
