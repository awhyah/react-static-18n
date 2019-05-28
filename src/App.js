import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Location } from '@reach/router'

import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import logo from './img/Logo.svg'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Nav />
      <ChangeLanguage />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

function Nav() {
  return (
    <Location>
      {
        ({location}) => {
          const { pathname } = location;
          const [ , lang, route ] = pathname.split('/')

          return (
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/dynamic">Dynamic</Link>
            </nav>
          );
        }
      }
    </Location>
  )
}

function ChangeLanguage() {
  return (
    <Location>
      {({location}) => {
        const { pathname } = location;
        const [ , lang, route ] = pathname.split('/')

        return (
          <div className='buttonGroup__changeLang'>
            <Link to={`/ua/${route || lang}`}>UA</Link>
            <Link to={`/en/${route || lang}`}>EN</Link>
            <Link to={`/ru/${route || lang}`}>RU</Link>
          </div>
        )}
      }
    </Location>
  );
}

export default App
