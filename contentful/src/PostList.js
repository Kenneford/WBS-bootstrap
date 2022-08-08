
import {useEffect, useState} from 'react'
export default function PostList() {
    const [entries, setEntries] = useState(false)
    async function loadEntries() {
        const url = `https://cdn.contentful.com/spaces/u9rwxuqm3uuw/environments/master/entries?access_token=de_QKM4D3kYQm4DQjPJ6aDkmZ1iyrdLCBZrehQse9z0`
        const response = await fetch(url)
        const result = await response.json()
        // console.log(result)
        // console.log("Posts")
        console.log(result.items.filter((e) => e.sys.contentType.sys.id === 'post'))
        // console.log("Authors")
        console.log(result.items.filter((e) => e.sys.contentType.sys.id === 'author'))
        setEntries(result)
    }
    useEffect(() => {
        loadEntries()
    }, [])

    if (!entries) {
        return (<div>Loading ...</div>)
    }
    const posts = entries.items.filter((e)=>e.sys.contentType.sys.id === 'post')
    const authors = entries.items.filter((e)=>e.sys.contentType.sys.id === 'author')

    return (
        <div>
            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        {post.fields.title}
                        <p>{post.fields.shortText}</p>
                    </div>
                )
            })}
            {authors.map((author, id)=>{
                // console.log(author)
                return (
                <div key={id}>
                    <p>{author.fields.name}</p>
                        <img src={author.fields.picture.sys.id} />
                    {/* {author.fields.picture.sys.id} */}
                </div>
                )
            })}
        </div>
    )
}