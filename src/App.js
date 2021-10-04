import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import About from './components/About/About';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  const homeStyle = {

     display: 'grid',
     gridTemplateColumns: 'repeat(3, 1fr)'
    ,gridGap:'30px'

  };

  const servicesStyle = {

     display: 'grid'
    ,gridTemplateColumns: 'repeat(4, 1fr)'
    ,gridGap:'20px'

  };
  return (

    <div className="App">
      <BrowserRouter>

      <Header></Header>

      <Switch>

      <Route exact path='/'>

      <div className='m-4' style={homeStyle}><Home></Home></div>

      </Route>

      <Route path='/home'>

      <div className='m-4' style={homeStyle}><Home></Home></div>

      </Route>

      <Route path='/services'>
        <div className='m-4' style={servicesStyle}><Services></Services></div>

      </Route>

      <Route path='/about'>

        <About></About>

      </Route>

      <Route path='/contact'>

        <Contact></Contact>

      </Route>

      <Route path='/*'>

        <NotFound></NotFound>

      </Route>

      </Switch>

      <Footer></Footer>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
