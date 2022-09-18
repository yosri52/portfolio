import { BrowserRouter, Route,Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SkillDetails from './pages/SkillDetails';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1> hello </h1>
        <Navbar />
        <div className='container mt-5'>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route path="/skills/:id" component={SkillDetails} />
        </Switch>
       </div>
      </BrowserRouter>
    </div>
  )
}
export default App;
