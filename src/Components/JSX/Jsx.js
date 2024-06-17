import React from 'react'

export const Jsx = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>JSX</h1>
    
    <ol className='orderFontStyle'>
      <li>
      What is JSX?
      <ul>
        <li>
        JSX stands for JavaScript XML.
        </li>
        <li>
        It allows you to write HTML-like syntax in your JavaScript code.
        </li>
      </ul>
      </li>
      <li>
      Why Use JSX?
      <ul>
        <li>
        It makes the code more readable and writing it feels like writing HTML.
        </li>
        <li>
        It can coexist with JavaScript logic, allowing you to create dynamic content.
        </li>
      </ul>
      </li>
      <li>
      JSX Elements
      <ul>
        <li>
        A JSX element is a syntactic sugar for React.createElement().
        </li>
        <li>
        It gets transpiled to JavaScript that browsers can understand.
        </li>
      </ul>
      </li>
      <li>
      Embedding Expressions
      <ul>
        <li>
        You can embed any JavaScript expression in JSX by wrapping it in curly braces {'{ }'}.
        </li>
      </ul>
      </li>
      <li>
      JSX Attributes
      <ul>
        <li>
        Similar to HTML, JSX elements can have attributes.
        </li>
        <li>
        Use camelCase syntax for attribute names (e.g., className instead of class).
        </li>
      </ul>
      </li>
      <li>
      Nested Elements
      <ul>
        <li>
        Elements can be nested within other elements to form component trees.
        </li>
      </ul>
      </li>
      <li>
      Key Differences from HTML
      <ul>
        <li>
        className is used instead of class due to class being a reserved word in JavaScript.
        </li>
        <li>
        Self-closing tags must end in a slash {'(e.g., <img />)'}.
        </li>
      </ul>
      </li>
      <li>
      Without JSX
      <ul>
        <li>
        You can write React without JSX, but it’s less intuitive and more verbose.
        </li>
      </ul>
      </li>

    </ol>
</div>
  )
}
