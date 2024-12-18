import './App.css';
import { useState } from 'react';

export function TwitterFollowCard({ children, userName, formatUserName }) {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/github/${userName}`}
                    alt={`Avatar de ${children}`}
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}
