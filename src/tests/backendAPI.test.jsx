import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import OpenAI from 'openai';

// const openai = new OpenAI({ 
//   apiKey: "Enter your OpenAI API Key for testing",
//   dangerouslyAllowBrowser: true,
// });

jest.setTimeout(50000); 

describe('Backend API Test', () => {
  afterEach(cleanup); 

  test('Generate image with OpenAI API', async () => {
    const prompt = "Portrait of a face using cubism technique with blue background";
    try {
      const response = await openai.images.generate({ prompt });
      expect(response.data[0].url).toBeTruthy(); 
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
