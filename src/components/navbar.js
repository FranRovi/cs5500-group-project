import { Button } from '@mui/material';
import { TextField } from '@mui/material';


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <Button variant="outlined" style={{ color: 'black' }}>Home</Button>
                        <Button variant="outlined" style={{ color: 'black' }}>About Us</Button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;