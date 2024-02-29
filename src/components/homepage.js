import '../css/App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Navbar from './navbar';

// TODO: Replace with openAi API output images.
var placeholderImage = "https://t4.ftcdn.net/jpg/06/01/35/41/360_F_601354108_iVXhfu0CBWAmhqSuEtCd3MKuQ0AnfmA4.jpg";

function Homepage(){
    return (
        <div className="App">
            <Navbar /> {/* Include the Navbar component */}
            <header>
                <h1 className="page_title">Pixel Creation</h1>
            </header>
            <section class="inputSection">
            <div class="input">
                <Stack direction="row" spacing={2}>
                <TextField id="filled-basic" label="What images do you want?" variant="filled" style={{ width: '70%' }} />
                <Button variant="outlined" style={{ color: 'black' }}>Create Image</Button>
                </Stack>
            </div>
            </section>
            <section class="imageSection">
                <img src={placeholderImage} alt="placeholderImage" />
                <img src={placeholderImage} alt="placeholderImage" />
                <img src={placeholderImage} alt="placeholderImage" />
                <img src={placeholderImage} alt="placeholderImage" />
            </section>
        </div>
    );
}

export default Homepage;
