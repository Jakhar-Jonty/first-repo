import React from 'react'

export const Virtual_DOM = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>Virtual DOM</h1>
    
    <ol className='orderFontStyle'>
      <li>
      What is the Virtual DOM?
        <ul>
          <li>
          The Virtual DOM is a lightweight copy of the actual DOM (Document Object Model).
          </li>
          <li>
          It’s a programming concept implemented by libraries like React to improve performance.
          </li>
        </ul>
      </li>

      <li>
      How does it work?
        <ul>
          <li>
          When a component’s state changes, React first changes the object in the Virtual DOM.
          </li>
          <li>
          Then, React compares the Virtual DOM with a snapshot of the Virtual DOM taken right before the update.
          </li>
        </ul>
      </li>

      <li>
      Reconciliation
        <ul>
          <li>
          This process is called reconciliation.
          </li>
          <li>
          React calculates the best way to make these changes to the actual DOM.
          </li>
        </ul>
      </li>

      <li>
      Batching
        <ul>
          <li>
          Changes are batched together for performance gains.
          </li>
          <li>
          Only the differences (diffs) are updated on the real DOM.
          </li>
        </ul>
      </li>

      <li>
      Efficiency
        <ul>
          <li>
          This makes updates faster and more efficient as opposed to manipulating the real DOM directly.
          </li>
          <li>
          The real DOM operations are costly in terms of performance.
          </li>
        </ul>
      </li>

      <li>
      Components as Functions

        <ul>
          <li>
          In React, components are like pure functions that return views based on inputs (props and state).
          </li>
          <li>
          The Virtual DOM allows these functions to run independently of the actual DOM.
          </li>
        </ul>
      </li>

    </ol>
    <p>
    The Virtual DOM is a core part of what makes React fast and efficient at updating the UI without causing unnecessary re-renders or updates to the actual DOM. 
    </p>
</div>
  )
}
