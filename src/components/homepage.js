import { useState } from 'react'; 
import OpenAI from 'openai';
import '../css/App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true
});

function Homepage(){
    const [image, setImage] = useState(""); // Initialize image state with an empty string
    const [prompt, setPrompt] = useState("");

    const imagesDict = {
        1: "Portrait of a face using cubism technique with blue background",
        // Other prompts...
    };

    const numGenerator = (n) => {
        return Math.floor(Math.random() * n) + 1;
    };
      
    const randomImageClickHandler = () => {
        const key = numGenerator(Object.keys(imagesDict).length);
        setPrompt(imagesDict[key]);
        generateImage();
    };

    const imageFromInputClickHandler = (e) => {
        setPrompt(e.target.value);
        generateImage();
    };

    async function generateImage() {
        try {
            const response = await openai.images.generate({
                prompt: prompt,
            });
            setImage(response.data[0].url);
        } catch (err) {
            console.log(err);
        }
    }

    const downloadImage = () => {
        if (image) {
            const link = document.createElement('a');
            link.href = image;
            link.download = 'generated_image.png'; // Set the filename here
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="App">
            <header>
                <h1 className="page_title">Pixel Creation</h1>
            </header>
            <section className="inputSection">
                <div className="input">
                    <Stack direction="row" spacing={2}>
                        <TextField id="filled-basic" label="What images do you want?" variant="filled" style={{ width: '70%' }} onChange={(e) => setPrompt(e.target.value)} />
                        <Button onClick={imageFromInputClickHandler} variant="outlined" style={{ color: 'black' }}>Generate Image</Button>
                    </Stack>
                    <Button className="m-3 h-50" onClick={randomImageClickHandler} variant="outlined" style={{ color: 'black' }}>Create Random Image</Button>
                    <Button onClick={downloadImage} variant="outlined" style={{ color: 'black' }}>Download Image</Button>
                </div>
            </section>
            <section className="mt-2 imageSection">
                {image && <img src={image} alt="Generated" />} {/* Display image only if it exists */}
            </section>
        </div>
    );
}

export default Homepage;
