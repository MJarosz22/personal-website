import TitlePanel from '../components/TitlePanel/TitlePanel';
import { Blog } from '../components/Blog/Blog';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

export default function Home() {
    return (
        <div className="Home flex flex-col items-center justify-center w-full">
          <NavigationBar/>
          <TitlePanel/>
          <Blog/>
          <Footer/>
        </div>
    );
}
