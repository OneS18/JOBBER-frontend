import main from "../assets/images/undraw_fitting_piece_re_pxay.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking </span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            ducimus expedita, soluta odio id ad nulla temporibus. Vitae fugit
            quaerat nisi qui quos ducimus minus.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>

        <img src={main} alt='job hunt' className='img main-img' />
        <h4 class='suport-uk'>support Ukraine &hearts;</h4>
      </div>
    </Wrapper>
  );
};

export default Landing;
