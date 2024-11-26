import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const formatUserName = (userName) => `@${userName}`;

    return (
        <section className="App">
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="JuanBautistaTordini"
            >
                Juan Bautista Tordini
            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="loremipsum"
            >
                Lorem Ipsum
            </TwitterFollowCard>
        </section>
    );
}
