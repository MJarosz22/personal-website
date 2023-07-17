import TitlePanel from '../components/TitlePanel/TitlePanel';
import { Blog } from '../components/Blog/Blog';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

export default function Home() {
    return (
        <div className="Home grid grid-cols-1 items-center justify-center h-auto w-screen">
          <NavigationBar/>
          <TitlePanel/>
          <Blog/>
          <Footer/>
        </div>
    );
}
