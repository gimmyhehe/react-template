// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import { HashRouter as  Router } from 'react-router-dom'
// import AppLayout from '@components/Layout/AppLayout'
// import RouterMap from './router/RouterMap'
// import { createBrowserHistory } from 'history'
// import APP from './App'
// const appHistory = createBrowserHistory()
// //手动引入语言包
// // import 'moment/locale/zh-cn'
// // import moment from 'moment'
// // moment.locale('zh-cn')
// console.log('aaa')
// // let r = moment().endOf('day').fromNow()
// // console.log(r)
// ReactDOM.render(
//   <RouterMap history={appHistory} />

//   ,
//   document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}

function Contact() {
  return <h2>About</h2>
}

function AllContacts() {
  return <h2>Users</h2>
}

function App() {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <About />
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

