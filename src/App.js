import React from 'react'
import Navbar from './common/Navbar/Navbar'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Gallery from './components/gallery/Gallery'
import Destinations from './components/destinations/Home'
import SinglePage from './SinglePage/SinglePage'
import Blog from './components/Blog/Blog'
import BlogSingle from './components/Blog/blog-single-page/BlogSingle'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Login from './components/login/Login'
import Register from './components/login/Register'

const App = () => {
  return (
      <>
        <Router>
            <Navbar/>
            
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/gallery' exact component={Gallery}></Route>
                <Route path='/destination' exact component={Destinations}></Route>
                <Route path='/singlepage/:id' exact component={SinglePage}></Route>
                <Route path='/blog' exact component={Blog}></Route>
                <Route path='/blogsingle/:id' exact component={BlogSingle}></Route>
                <Route path='/testimonial' exact component={Testimonial}></Route>
                <Route path='/contact' exact component={Contact}></Route>
                <Route path='/sign-in' exact component={Login}></Route>
                <Route path='/register' exact component={Register}></Route>
            </Switch>
        </Router>
      
      </>
  )
}

export default App