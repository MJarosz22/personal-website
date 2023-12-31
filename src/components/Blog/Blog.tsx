import BlogPost from './BlogPost'
import blogPosts from './posts.json'

export interface Post {
    id: number;
    title: string;
    date: string;
    content: string;
}

export function Blog() {
   

    return (
            <div className=" self-center flex flex-col items-center justify-start gap-10 mt-10 px-5 w-full max-w-6xl">
                <h2 className=' text-4xl md:text-5xl z-0 self-start'>Blog</h2>
                <div className="h-2 w-32 my-3 bg-gray-500 self-start"></div>
                {
                    blogPosts.posts.map(post => {
                       return <BlogPost key={post.id} post={post}/>
                    })
                }
            </div>
    )
}