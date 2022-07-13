import {useHistory} from 'react-router-dom';
function Articles(){
    const history = useHistory()

    const navigateBack = () =>{
        history.push("/")
    }
    return (
        <div>
            <div>Article</div>
            <button onClick={navigateBack}>Main Page</button>
            <button onClick={()=>{history.push("sign-up")}}>SignUp</button>
        </div>
    )
}
export default Articles;