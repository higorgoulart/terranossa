import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login } from "../pages/Login";

export function Header() {
  const [isModal, setIsModal] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  function openModal() {
    setIsModal(!isModal)
  }

  function handleLogin(user, psswd) {
    if(user == 'admin' & psswd == 'admin') {
      setIsLogin(true)

      setIsModal(!isModal)
    }

    return false
  }

  return (
    <div className="navbar pl-4 bg-primary rounded-box shadow-xl text-base-100 mb-10">
      <div className="flex-1">
        <svg className="w-7 h-7 fill-secondary" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 105.296 105.296" xml:space="preserve">
          <g>
            <g>
              <path d="M104.054,25.24c-0.784-0.318-2.036-0.979-3.528-1.377c-1.492-0.421-3.508-1.121-5.564-1.297    c-2.077-0.217-4.425-0.281-6.991-0.157c-2.505,0.204-5.048,0.736-7.775,1.441c-2.724,0.703-5.216,1.873-7.878,3.153    c-2.598,1.324-4.966,2.976-7.337,4.775c-2.241,1.858-4.367,3.915-6.311,6.102c-1.813,2.247-3.615,4.559-5.003,7.026    c-1.431,2.45-2.665,4.973-3.558,7.553c-1.91,5.108-2.671,10.364-2.751,15.045c0.007,2.375,0.147,4.579,0.441,6.604    c0.257,2.013,0.761,3.871,1.15,5.373c0.157,0.705,0.378,1.379,0.596,1.975c0.383-0.804,0.799-1.652,1.263-2.58    c2.305-4.572,5.665-10.526,9.594-16.102c1.957-2.792,4.104-5.447,6.197-7.847c1.109-1.153,2.181-2.262,3.193-3.314    c1.088-0.977,2.115-1.903,3.056-2.755c1.021-0.767,1.951-1.465,2.779-2.087c0.794-0.659,1.625-1.042,2.248-1.438    c1.27-0.752,1.995-1.181,1.995-1.181s-0.691,0.488-1.896,1.332c-0.586,0.448-1.373,0.883-2.112,1.598    c-0.766,0.676-1.629,1.437-2.573,2.267c-0.865,0.916-1.8,1.899-2.789,2.943c-0.91,1.109-1.872,2.279-2.864,3.491    c-1.872,2.522-3.754,5.273-5.448,8.155c-3.411,5.738-6.223,11.807-8.115,16.426c-0.532,1.301-0.98,2.464-1.365,3.491    c0.81-0.216,1.839-0.445,2.949-0.855c1.408-0.489,3.226-0.993,4.988-1.712c1.804-0.69,3.727-1.505,5.667-2.433    c1.971-0.914,3.891-1.988,5.858-3.118c1.965-1.125,3.826-2.412,5.675-3.736c1.796-1.376,3.579-2.766,5.197-4.305    c1.599-1.582,3.214-3.066,4.61-4.781c2.871-3.289,5.317-6.807,7.31-10.52c1.037-1.749,1.899-3.785,2.744-5.625    c0.855-1.826,1.581-3.852,2.304-5.71c0.729-1.824,1.403-3.672,1.998-5.472c0.647-1.854,1.212-3.47,1.681-4.798    c0.541-1.321,0.879-2.702,1.184-3.515c0.281-0.918,0.425-1.403,0.425-1.403S104.862,25.608,104.054,25.24z"/>
              <path d="M40.429,66.34c-2.792-1.958-5.444-4.106-7.845-6.201c-1.15-1.102-2.26-2.177-3.314-3.189    c-0.979-1.088-1.899-2.115-2.758-3.056c-0.765-1.017-1.461-1.955-2.086-2.779c-0.659-0.795-1.037-1.625-1.436-2.248    c-0.754-1.267-1.182-1.995-1.182-1.995s0.488,0.691,1.336,1.896c0.441,0.585,0.879,1.371,1.598,2.11    c0.676,0.769,1.436,1.632,2.267,2.576c0.914,0.862,1.899,1.8,2.943,2.785c1.107,0.91,2.281,1.872,3.491,2.864    c2.519,1.865,5.273,3.754,8.153,5.448c1.192,0.712,2.4,1.338,3.604,1.981c0.398-6.44,1.72-12.806,3.699-18.604    c-1.134-1.466-2.284-2.909-3.549-4.23c-1.581-1.602-3.059-3.217-4.78-4.611c-3.291-2.871-6.805-5.316-10.517-7.312    c-1.749-1.037-3.788-1.899-5.628-2.743c-1.822-0.855-3.846-1.584-5.705-2.303c-1.826-0.726-3.672-1.398-5.474-1.993    c-1.853-0.652-3.465-1.217-4.798-1.686c-1.321-0.538-2.705-0.879-3.515-1.184c-0.914-0.277-1.401-0.424-1.401-0.424    s-0.271,0.441-0.642,1.248c-0.315,0.782-0.977,2.036-1.377,3.528c-0.419,1.487-1.121,3.504-1.292,5.561    c-0.221,2.079-0.284,4.43-0.157,6.995c0.198,2.503,0.729,5.042,1.436,7.773c0.708,2.722,1.875,5.217,3.153,7.881    c1.326,2.591,2.976,4.959,4.781,7.334c1.857,2.245,3.914,4.37,6.1,6.317c2.243,1.807,4.56,3.61,7.031,5.003    c2.445,1.431,4.969,2.666,7.548,3.556c5.106,1.913,10.362,2.673,15.047,2.755c0.2,0,0.371-0.021,0.561-0.027    c-0.501-3.282-0.683-6.632-0.621-9.996C43.545,68.393,41.983,67.435,40.429,66.34z"/>
            </g>
          </g>
        </svg>
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">TerraNossa</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/" title="Home">
              Home
            </NavLink>
          </li>
          {isLogin == false && 
            <button className="btn btn-ghost text-base-100 active:text-accent" onClick={openModal}>
              Login
            </button>
          }
          
          {isModal == true ? <Login handleLogin={handleLogin} /> : ""}
          
          {isLogin == true && 
            <>
            <li>
              <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/weekly-care" title="WeeklyCare">
                Cuidados Semanais
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/activities-calendar" title="Calendar">
                Calendário
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/team" title="Team">
                Equipe
              </NavLink>
            </li>
            </>
          }
        </ul>
      </div>
    </div>
  );
}
