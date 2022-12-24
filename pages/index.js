import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState, useRef } from 'react';
import Script from 'next/script'
import Coffee from '../components/Coffee';


const Home = () => {
  const [userInput, setUserInput] = useState('');
  const ref = useRef();
  const ref2 = useRef(null);

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`)
    setIsGenerating(false);

    await scroll();
  }
  

  const scroll = async () => {
    console.log(ref.current);
    await ref.current.scrollIntoView({behavior: 'smooth'});
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };


  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <Coffee></Coffee>
        
        <div className="header">
          <div className="header-title">
            <h1>Get Inspired and Write Amazing Song Lyrics</h1>
          </div>
          <div className="header-subtitle">
            <h2 className='h2wc'>What do you want your song to be about?</h2>
            <h2>Input your ideas. We will generate awesome lyrics for you!</h2>
            <h2>The more specific you are, the better.</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="(type something like) ... a song about red birds flying in the green sky" className="prompt-box" value={userInput} onChange={onUserChangedText} />
        </div>
        <div className="prompt-buttons">
          <a className={isGenerating ? 'generate-button loading' : 'generate-button'} onClick={callGenerateEndpoint}>
            <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div> 

        <div className="output-header">
          <h3 ref={ref} >Output:</h3>
        </div>

        {apiOutput && (
        <div className="output">
          <div className="output-header-container">
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
        )}
      </div>
      
    </div>
  );
};


export default Home;
