import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Posts from "./containers/Posts/Posts";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Posts}/>
            {/*<Route path="/orders" component={Orders}/>*/}
            {/*<Route path="/add" component={AddForm}/>*/}
            {/*<Route path="/:id/edit" exact component={EditForm}/>*/}
            <Route render={() => <h1>404</h1>}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
