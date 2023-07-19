import {Post} from './Blog'

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div className='flex flex-col items-start border-b-2 pb-8 mb-2 border-x-2 px-10' >
        <div className="collapse bg-base-100 ">
          <input type="checkbox" />
          <div className="collapse-title text-xl md:text-2xl font-medium underline underline-offset-3">
            {post.title}
          </div>
          <div className="collapse-content">
            <p>{post.content}</p>
          </div>
        </div>
        <h3 className=' my-5 self-end mr-5 text-gray-400'>{post.date}</h3>
        
    </div>
  )
}
