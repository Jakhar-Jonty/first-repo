import React from 'react'

export const Rounting = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>Routing</h1>
    
    <ol className='orderFontStyle'>
      <li>
      What is Routing?
        <ul>
          <li>
          Routing is the process of navigating between different views or components in a React application.
          </li>
        </ul>
      </li>

      <li>
      React Router
        <ul>
          <li>
          The most popular library for implementing routing in React is <mark>react-router</mark>.
          </li>
          <li>
          It provides navigational components like <mark>{'<BrowserRouter>'}</mark>, <mark>{'<Route>'}</mark>, <mark>{'<Link>'}</mark>, and <mark>{'<Switch>'}</mark>.
          </li>
        </ul>
      </li>

      <li>
      Dynamic Routing
        <ul>
          <li>
          React Router allows for dynamic routing, which means routes can be defined as part of the component hierarchy.
          </li>
        </ul>
      </li>

      <li>
      Route Configuration
        <ul>
          <li>
          Routes are configured by mapping a path to a component.
          </li>
          <li>
          The <mark>{'<Route>'}</mark> component takes a path prop and a component prop.
          </li>
        </ul>
      </li>

      <li>
      Navigation
        <ul>
          <li>
          Use the <mark>{'<Link>'}</mark> component to create navigable links.
          </li>
          <li>
          It changes the URL without refreshing the page, maintaining the SPA (Single Page Application) feel.
          </li>
        </ul>
      </li>

      <li>
      Nested Routes
        <ul>
          <li>
          Routes can be nested within each other to create complex layouts and paths.
          </li>
        </ul>
      </li>

      <li>
      Route Parameters
        <ul>
          <li>
          Dynamic segments of the URL can be captured as parameters
          </li>
          <li>
          These parameters can be accessed within components
          </li>
        </ul>
      </li>

      <li>
      Redirects
        <ul>
          <li>
          Use <mark>{'<Redirect>'}</mark>to navigate programmatically or redirect from one path to another.
          </li>
        </ul>
      </li>

      <li>
      Hooks
        <ul>
          <li>
          React Router v5 introduced hooks like <mark>useHistory</mark>,<mark>useLocation</mark>,<mark>useParams</mark>,and <mark>useRouteMatch</mark>.
          </li>
        </ul>
      </li>

    </ol>
    <p>
    Routing is essential for creating single-page applications with multiple views in React.js
    </p>
</div>
  )
}
