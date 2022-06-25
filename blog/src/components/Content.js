import './Content.css';
import BlogOverview from './BlogOverview';
function Content(props){
    return (
        <div className='content'>
            <div>
                <h2>Blog Overview</h2>
            </div>
            {/* <div>
                <BlogOverview post={props.blogs[0]}/>
                <BlogOverview post={props.blogs[1]}/>
                <BlogOverview post={props.blogs[2]}/>
            </div> */}
        </div>

    )
}
export default Content;