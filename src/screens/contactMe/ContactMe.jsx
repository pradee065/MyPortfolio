import React from 'react'
import './contactme.css';
import { navigationLinks } from '../../helpers/navigationLinks';

// function createLinks(){
//     return navigationLinks.map((e, idx) => {
//         return (
//         <p key={idx}>
//             <a href={e.ref} >{e.name}</a>
//         </p>
//         )
//     });
// }

function ContactMe() {
  return (
      <div id='contact'>
          <div>
              <div className="row">
                  <div className="col-md-4 text-center">
                      <i className="fa fa-map-marker fa-2x"></i>
                      <p>
                          Sapthagiri Maharshi Residency<br />
                          Nagavarapalya, 10th cross<br />
                          C V Raman Nagar<br />
                          Bangalore - 560093
                      </p>
                  </div>
                  <div className="col-md-4 text-center">
                      <i className="fa fa-envelope-o fa-2x"></i>
                      <p>pradeep.techie065@gmail.com</p>
                  </div>
                  <div className="col-md-4 text-center">
                      <i className="fa fa-phone fa-2x"></i>
                      <p>+91-9008730080</p>
                  </div>
              </div>

              {/* <div>
                {createLinks()}
              </div> */}

          </div>

          <div>
              <div className="social">
                  <ul>
                      <li><a href="https://www.facebook.com/pradee.rock" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="https://twitter.com/Pradee_rock" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="https://github.com/pradee065" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                      <li><a href="https://www.youtube.com/@pradeep.techie065" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/pradeep-b-g-61830762" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
              </div>

              <div>
              <p>Copyright &copy; {new Date().getFullYear()} Pradeep.</p>

              </div>

          </div>
      </div>
  )
}

export default ContactMe
