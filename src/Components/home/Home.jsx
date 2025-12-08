import '../home/Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link}  from 'react-scroll';

export default function Home() {
  return (
    <>
      <div className="container-home">
        
        
        <div class="content-Home">
  <h1>Sharing knowledge and 
    exploring new technologies.</h1>
   <Link  to="Contacte-content" smooth={true}  offset={-350}  duration={1500} spy={true} ><button class="btnjoin"><span>Join us</span></button> </Link>
      <Link  to="About"  smooth={true}  offset={-350}  duration={1000}  spy={true}  ><p>Read More About our Plans</p>       
 </Link>
</div>
        
      </div>
    </>
  );
}
