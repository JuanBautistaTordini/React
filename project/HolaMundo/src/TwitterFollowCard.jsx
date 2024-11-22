import './App.css';

export function TwitterFollowCard(){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src="https://portfolio-tordinibautista.netlify.app/assets/img/img-portfolio.png" 
                    alt="PorfileTwitterCard" />
                <div className='tw-followCard-info'>
                    <strong>Juan Bautista Tordini</strong>
                    <span className='tw-followCard-infoUserName'>@BautistaTordini</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}