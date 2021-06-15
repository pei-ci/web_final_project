import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/home_page';
import List from './pages/list_page';
import Post from './pages/post_page';
import Content from "./pages/content";
import AuthorInfo from "./pages/author_info_page"
import ReactGA from 'react-ga';
ReactGA.initialize('G-WQCXYBLR94');

class App extends React.Component {
    constructor(props) {
        super(props);
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
      componentDidMount(){
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
render(){
    return (
    
        <div className="container">
            <Navbar/>
            {/* The corresponding component will show here if the current URL matches the path */}
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path='/list'>
                    <List/>
                </Route>
                <Route path='/post'>
                    <Post/>
                </Route>
                <Route path='/content/:id'
                    render={props => <Content id={props.match.params.id}/>} />   
                <Route path='/author'>
                    <AuthorInfo/>
                </Route>
            </Switch>
        </div>
      );
    }
}  
 

export default App;
