import './BlogOverview.css';
function BlogOverview(props){
    return(
        <>
            <div className="title">{props.post.title}</div>
            <div>Cost: {props.post.amount}</div>
            <div>country: {props.post.country}</div>
        </>
    )
}
export default BlogOverview;