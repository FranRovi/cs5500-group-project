import { useState } from 'react'; 
import OpenAI from 'openai';
import '../css/App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// const apiKey = process.env.REACT_APP_API_KEY
// console.log(apiKey)
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true
});
  
// TODO: Replace with openAi API output images.
// var placeholderImage = "https://t4.ftcdn.net/jpg/06/01/35/41/360_F_601354108_iVXhfu0CBWAmhqSuEtCd3MKuQ0AnfmA4.jpg";

function Homepage(){
    // const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState("https://t4.ftcdn.net/jpg/06/01/35/41/360_F_601354108_iVXhfu0CBWAmhqSuEtCd3MKuQ0AnfmA4.jpg")
    const [prompt, setPrompt] = useState("")

    const imagesDict = {
        1: "Portrait of a face using cubism technique with blue background",

        
        // CREATE NEW PROMPTS FOR RAMDOM IMAGES
        // 1: "Astronaut Galaxy Planets Stars Spaceships Aliens",
        // 2: "Knight Castle Battle Bridge Moat Armies",
        // 3: "Machines Muscle Cars Robots Transformers",
        // 4: "Abstract Paintings Blue Cubism Surrealism",
        // 5: "Music Singing Band Rockstar Scenario Crowd Scenario",
        // 6: "Dreams Relax Meditation Unconcious Sandman",
        // 7: "Dystopian World Machines 1984 George Orwell Brave New World Aldous Huxley",
    }

    const numGenerator = (n) => {
        let randomNum = Math.floor(Math.random() * n) + 1
        return randomNum
    }
      
    const randomImageClickHandler = () => {
        // console.log("Clicking Random Button")
        let key = numGenerator(Object.keys(imagesDict).length)
        setPrompt(imagesDict[key])
        // console.log(prompt)
        generateImage(image)
    return
    }

    const imageFromInputClickHandler = (e) => {
        // console.log(e.target.value)
        setPrompt(e.target.value)
        // console.log(prompt)
        generateImage(image)
    }

    async function generateImage() {
        try {
            const response = await openai.images.generate({
                // model: "dall-e-3",
                prompt: prompt,
                // n: 1,
                // size: "256x256",
            });
            // console.log(response.data)
            // console.log(response.data[0].url)
            // console.log(response.data.data[0].url)
            setImage(response.data[0].url)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="App">
            <header>
                <h1 className="page_title">Pixel Creation</h1>
            </header>
            <section class="inputSection">
            <div class="input">
                <Stack direction="row" spacing={2}>
                <TextField id="filled-basic" label="What images do you want?" variant="filled" style={{ width: '70%' }} onChange={(e) => setPrompt(e.target.value)} />
                    <Button onClick={imageFromInputClickHandler} variant="outlined" style={{ color: 'black' }}>Generate Image</Button>
                </Stack>
                <Button className="m-3 h-50" onClick={randomImageClickHandler} variant="outlined" style={{ color: 'black' }}>Create Random Image</Button>
                
            </div>
            </section>
            <section className="mt-2 imageSection">
                <img src={image} alt="placeholderImage" />
                <img src={image} alt="placeholderImage" />
                <img src={image} alt="placeholderImage" />
                <img src={image} alt="placeholderImage" />
            </section>
        </div>
    );
}

export default Homepage;
