import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='webjoble' className='logo' />
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
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
};

export default Landing;
