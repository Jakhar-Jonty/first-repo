import React from 'react'

export const Npm_Package = () => {
  return (
    <div className='description'>
    <h1 className='descriptionHeading'>NPM Package</h1>
    
    <ol className='orderFontStyle'>
      <li>
      What are npm packages?
        <ul>
          <li>
          npm packages are reusable pieces of code that you can include in your Node.js projects.
          </li>
          <li>
          They can be libraries, tools, or frameworks.
          </li>
        </ul>
      </li>

      <li>
      npm Registry
        <ul>
          <li>
          The npm registry is a large database of public and private packages.
          </li>
          <li>
          It’s accessible via the npm CLI (Command Line Interface).
          </li>
        </ul>
      </li>

      <li>
      Using npm Packages
        <ul>
          <li>
          Install packages using <mark>npm install {'<package-name>'}</mark>.
          </li>
          <li>
          Packages can be installed globally or locally within a project.
          </li>
        </ul>
      </li>

      <li>
      package.json

        <ul>
          <li>
          The <mark>package.json</mark> file in a Node.js project specifies the project’s dependencies.

          </li>
          <li>
          It lists the packages your project needs to run.
          </li>
        </ul>
      </li>

      <li>
      Versioning
        <ul>
          <li>
          npm uses semantic versioning (semver) to manage package versions.
          </li>
          <li>
          Helps with managing dependencies and avoiding conflicts.
          </li>
        </ul>
      </li>

      <li>
      Scripts
        <ul>
          <li>
          <mark>package.json</mark> can also contain scripts to automate tasks like testing, building, etc.
          </li>
        </ul>
      </li>

      <li>
      Node_modules
        <ul>
          <li>
          Installed packages are stored in the <mark>node_modules</mark> directory of a project
          </li>
        </ul>
      </li>

      <li>
      npm CLI
        <ul>
          <li>
          The CLI provides commands for installing, updating, and managing packages.
          </li>
        </ul>
      </li>

      <li>
      Security
        <ul>
          <li>
          Be cautious with third-party packages to avoid security risks.
          </li>
          <li>
          Use tools like <mark>npm audit</mark> to detect vulnerabilities.
          </li>
        </ul>
      </li>
    </ol>
    <p>
    npm packages are integral to Node.js development, providing a vast ecosystem of tools that make development more efficient and standardized. 
    </p>
</div>
  )
}
