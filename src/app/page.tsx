import NavBar from '../components/NavBar.jsx';
import Homepage from '../components/Homepage.jsx';
import About from './about/page.jsx';
import Testimonials from './about/Testimonials.jsx';
import Services from './services/page.jsx';
import Doctors from '../components/Doctors.jsx';
import Footer from '../components/Footer.jsx'
import ContactUs from './contact/page.jsx'

export default function Home() {
  return (
    <>
      <div>
        <div className='h-full flex flex-col'>
          <div className='flex-grow'>
            <Homepage />
          </div>
        </div>
      </div> 
    </>
  );
}
