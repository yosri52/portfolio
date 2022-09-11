import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1> hello </h1>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
       
      </BrowserRouter>
    </div>
  )
}
export default App;
