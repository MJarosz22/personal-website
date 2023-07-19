import { useState } from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <button onClick={() => navigate('/')}>
                <img src="public\images\logo.png" className="absolute top-11 left-8 w-24 h-auto" />
            </button>
            <button className="btn btn-square btn-ghost absolute top-10 right-10 text-white" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" w-15 h-15 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            {
                isModalOpen ? <Navigation onClose={closeModal}/> : null
            }
        </>
    )
}
