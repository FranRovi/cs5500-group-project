import { useState } from 'react';
import { useTranslation } from "react-i18next"; 
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
    const [language, setLanguage] = useState('English')
    const [t, i18n] = useTranslation("global")
    const [image, setImage] = useState(""); // Initialize image state with an empty string
    const [prompt, setPrompt] = useState("");

    const changeLanguageHandler = () => {
        if (language === 'English') {
            setLanguage('Español')
            i18n.changeLanguage('es')
        } else {
            setLanguage('English')
            i18n.changeLanguage('en')
        }
    }

    const imagesDict = {
        1: "Portrait of a face using cubism technique with blue background",
        1: "Horse galloping in the woods at sunset",
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
            <header className="row">
                <div className="col-10">
                    <h1 className="page_title">Pixel Creation</h1>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-dark" onClick={changeLanguageHandler}>{t("languageButton")}</button>
                </div>
            </header>
            <section className="inputSection">
                <div className="input">
                    <Stack direction="row" spacing={2}>
                        <TextField id="filled-basic" label={t("whatImagesDoYouWantToCreate")} variant="filled" style={{ width: '70%' }} onChange={(e) => setPrompt(e.target.value)} />
                        <Button onClick={imageFromInputClickHandler} variant="outlined" style={{ color: 'black' }}>{t("generateImage")}</Button>
                    </Stack>
                    <Button className="mt-4 me-1" onClick={randomImageClickHandler} variant="outlined" style={{ color: 'black' }}>{t("createRandomImage")}</Button>
                    <Button className="mt-4 ms-1" onClick={downloadImage} variant="outlined" style={{ color: 'black' }}>{t("downloadImage")}</Button>
                </div>
            </section>
            <section className="mt-2 imageSection">
                {image && <img src={image} alt="Generated" />} {/* Display image only if it exists */}
            </section>
        </div>
    );
}

export default Homepage;
