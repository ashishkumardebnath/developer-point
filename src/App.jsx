
import { useContext } from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Works from './components/Works/Works';
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMood = theme.state.darkMood;
  return (
    <div className='App'
      style={{
        background: darkMood ? 'black' : '',
        color: darkMood ? 'white' : ''
      }}>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
