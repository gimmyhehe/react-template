import React,{ Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'

const appHistory = createBrowserHistory()
const supportsHistory = 'pushState' in window.history

function User(props) {
  return <h1>Hell</h1>
}
export default class RouterMap extends Component{
  render(){
    return(
      <ConnectedRouter history={appHistory} forceRefresh={!supportsHistory}>
        <Switch>
          <Route path='/home' exact component={User} />
          {/* <Route render={() => <div>not found</div> } /> */}
        </Switch>
      </ConnectedRouter>
    )
  }
}


