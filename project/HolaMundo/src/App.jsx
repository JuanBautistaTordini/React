import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="JuanBautistaTordini" name="Juan Bautista Tordini"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="" name="lorem ipsum"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="" name="lorem ipsum"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="" name="lorem ipsum"/>
        </section>
    )
}