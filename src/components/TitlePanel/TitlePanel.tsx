import Icons from './Icons';

export default function TitlePanel () {
    return (
            <div className=" font-mono font-extrabold shadow-white w-full  h-auto md:block bg-gradient-to-l  to-cyan-600 from-cyan-950 pb-24  text-white">
                <div className="flex flex-row items-center md:items-start md:ml-20 h-auto mt-24 justify-center md:justify-start">
                    <div className='flex flex-col items-center md:mx-20'>
                        <img src='images\titlephoto.png' className="w-96 mx-10   mb-10"/>
                        <h1 className=' text-yellow-300 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>Marcin Jarosz</h1>
                        <h2 className=' text-yellow-300 text-xl md:text-2xl mb-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]'>Full stack software engineer</h2>
                        <Icons/>
                    </div>
                    <img src='images\logo.png' className="hidden max-w-2xl mx-auto pr-10 self-center md:inline grow "/>
                </div>
            </div>
    )
}