import {NavLink} from 'react-router-dom'
function navbar (props) {
    return (
    < nav class="navbar navbar-dark bg-dark" >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Ben Hsan Yosri</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink to = "/" className="nav-link"> Home </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/contact" className="nav-link">Skills </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to = "/projects" className="nav-link">projects </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to = "/contact" className="nav-link">Contact </NavLink>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
            </div>
        </div>
</nav >
   )
}
export default navbar 