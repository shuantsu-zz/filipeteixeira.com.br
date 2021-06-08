import React from 'react';
import './style.scss';

export default function Footer() {
  return (
  <footer className="footer">
	  <div className="wrapper container">
		  <div className="flex-container">
			  <div className="contato">
				  Entre em contato:<br/><br/>
			  	E-mail: <a href="mailto:shuantsu@gmail.com">shuantsu@gmail.com</a>
		  		<br/>
	  			Whatsapp: <a href="https://bit.ly/2Y16CkG">Me mande uma mensagem!</a>
  			</div>
			  <div className="social-icons">	
          <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.codewars.com/users/shuantsu/completed_solutions"><i className="icon codewars"></i><p>Codewars</p></a>
          <a className="social-icon" target="_blank" rel="noreferrer" href="https://codepen.io/filipemtx/pens/public"><i className="icon codepen"></i><p>Codepen</p></a>
          <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.youtube.com/filipemtx"><i className="icon youtube"></i><p>Youtube</p></a>
        </div>
      </div>
    </div>
  </footer>
  );
}