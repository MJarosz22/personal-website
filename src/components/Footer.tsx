import { useNavigate } from 'react-router-dom'
import Icons from './TitlePanel/Icons'

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className='h-auto bg-cyan-950 w-screen text-white flex flex-col'>
        <div className='Links flex flex-row justify-center gap-3 my-5'>
            <button className='btn btn-square btn-ghost w-auto' onClick={() => navigate('/')}>Blog</button>
            <button className='btn btn-square btn-ghost w-auto' onClick={() => navigate('/about')}>About</button>
            <button className='btn btn-square btn-ghost w-auto' onClick={() => navigate('/projects')}>Projects</button>
        </div>
        <Icons/>
    </footer>
  )
}
