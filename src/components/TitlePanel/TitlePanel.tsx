import Navigation from '../Navigation';
import Icons from './Icons';
import { useState } from 'react';

export default function TitlePanel () {
    return (
            <div className=" h-auto items-center md:block bg-gradient-to-r  to-cyan-600 from-cyan-950 pb-24  text-white">
                <div className="flex flex-col h-auto mt-24 items-center">
                    <img src='src\assets\images\newpphoto.jpg' className=" h-36 w-auto rounded-full mb-10"/>
                    <h1 className=' text-yellow-300 text-4xl '>Marcin Jarosz</h1>
                    <h2 className=' text-yellow-300 text-2xl mb-5'>Full stack software engineer</h2>
                    <Icons/>
                </div>
            </div>
    )
}