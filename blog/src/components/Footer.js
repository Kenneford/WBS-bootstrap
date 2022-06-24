import './Footer.css';

function Footer(){
    const footerInfo = 'Contact me @ www.kenels.com';
    return (
        <div className='footer'>
            <p>
                {footerInfo}
            </p>
        </div>
    )
}
export default Footer;