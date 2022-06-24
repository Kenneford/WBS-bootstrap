function Avatar(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <div>
            <h3>{description}</h3>
            <img
                src={avatar}
                alt={description}
            />
        </div>
    );
}
export default Avatar;
