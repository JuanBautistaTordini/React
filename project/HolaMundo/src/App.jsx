import './App.css';
import { useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const formatUserName = (userName) => `@${userName}`;
    const [name, setName] = useState('Juan Bautista Tordini');
    const [userName, setUserName] = useState('JuanBautistaTordini');

    const handleNameChange = () => {
        setName('Pedro Michel');
        setUserName('pedromichel');
    };

    return (
        <section className="App">
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName={userName}
            >
                {name}
            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="loremipsum"
            >
                Lorem Ipsum
            </TwitterFollowCard>

            <button onClick={handleNameChange}>
                Cambiar Nombre
            </button>
        </section>
    );
}
