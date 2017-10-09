import React from 'react';
import { Route } from 'react-router';
import { NavLink, HashRouter } from 'react-router-dom';

import './App.css';

// The isActive function is going to take in the matched data as well as the location data. 
// We're going to go ahead and log out both of those. Then we're simply going to return the match. If it is a match, and we have that matched data, it's going to be returning true. I'm going to save this. I'm going to open up a console here.
// Right now, we're on the About path. We can see that the isActive function has actually 
// fired, the match was null, the location information is there. If we go to Contact, 
// it's fired again, but now we have a match. That tells us that this isActive method is going to fire each and every time that the s are rendered.
// Each and every time the route is changed, the is going to run our isActive function to 
// find out if we qualify this route as requiring the activeClassName. That means if we 
// return false here, the Contact will never achieve the activeClassName.
const isActiveFunc = (match, location) => {
  console.log('is ActiveFunc');
  console.log(match);
  console.log(location);
  return false;
};

const Links = () => (
  <nav>
    {/* I'm going to set activeClassName to active, which I'm going to pull in from this app.css 
    where I've styled all anchor tags to have a margin of 5, to be a color of blue, 
    and if they have this activeClass, they'll be a color of red. */}
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    {/* Another way we can do this is by directly styling the component. 
    We can do that with activeStyle. We're going to interpolate a style object here, 
    so I'm going to give it a color of green, save that. When we go to the About link, 
    we can see that the About link has actually been given a style of color of green right 
    on the HTML element.*/}
    <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
    {/* By using replace here, if I go to Home and then About, and I click Back, it's 
    going to take me to Home. If I go to Home, About, and then Contact, you might think that it's going to  
    take me to About, but what we've done by adding this replace modifier is we've 
    replaced the previous URL with the new URL. When I hit Back, it's going to go all 
    the way to Home. */}
    <NavLink isActive={isActiveFunc} activeClassName="active" replace to="/about/contact">Contact</NavLink>
  </nav>
)

// Here in home, right after links, we're going to say props.children, and in this case, 
// that is going to be the about component.
const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>;
const About = (props) => {
  return <div><h1>About</h1>{props.children}</div>;
  
};
const Contact = (props) => <div><h1>Contact</h1></div>;


const App = () => (
  // We're looking at our standard, three page, single page application, 
  // and we're using HashRouter to keep track of the URL history in our router. 
  // In production, what we want to use is something called browser history.  
  <HashRouter>
    <div>
      {/* We're going to use the exact qualifier, so that means that the path must match exactly. */}
      <Route path='/'></Route>
      <Home>
          <Route path='about'>
            <About>
              <Route path='/about/contact' component={Contact} />
            </About>
          </Route>
      </Home>
      {/* If I want to make that an optional parameter, I can simply append a question mark at the end of that parameter string */}
      <Route path='/:page?/:subpage?' render={({match}) => (
        <h1>
          PAGE: {match.params.page || 'Home'}<br/>
          SUBPAGE: {match.params.subpage}
        </h1>
      )} />
    </div>
      
  </HashRouter>
);

export default App