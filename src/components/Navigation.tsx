import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type onCloseFunctionType = () => void;

const Navigation: React.FC<{ onClose: onCloseFunctionType }> = ({ onClose }) => {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';
    
        // Enable scrolling on unmount
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, []);
    const navigate = useNavigate();
    return (
            <div className="z-10 navbar gap-5 fixed flex inset-0 flex-col items-center justify-center bg-neutral text-neutral-content">
                <button className="btn btn-ghost h-16 text-6xl fixed top-0 right-0" onClick={onClose}>
                    x
                </button>
                <a className="btn btn-ghost h-16 normal-case text-6xl "  onClick={() => navigate('/')}>Blog</a>
                <button className="btn btn-ghost h-16 normal-case text-6xl" onClick={() => navigate('/about')}>About</button>
                <a className="btn btn-ghost h-16 normal-case text-6xl" onClick={() => navigate('/projects')}>Projects</a>
            </div>
    )
}

export default Navigation;