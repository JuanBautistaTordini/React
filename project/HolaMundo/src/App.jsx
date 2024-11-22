import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard userName="bautordini" name="Juan Bautista Tordini"/>
            <TwitterFollowCard userName="BautistaTordini" name="Juan Bautista Tordini"/>
        </section>
    )
}