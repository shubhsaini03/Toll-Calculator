import React from 'react'
import { FaTimes, FaUserPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { links } from '../Helpers';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../slices/ControlSlice';

const Sidebar = () => {
    let {isSidebarOpen}=useSelector(state=>state.Control)
    let dispatch=useDispatch()
  return (
    <StyledSide>
      <section className={isSidebarOpen ? "sidebar" : "sidebar close-sidebar"}>
        <div className="side-header">
          <h2 className='title'>Toll Master</h2>
          <button className="ham" onClick={() => dispatch(closeSidebar())}>
            <FaTimes />
          </button>
        </div>
        <div className="side-links">
          {links.map((items) => {
            let { url, text } = items;
            return (
              <Link to={url} className="link">
                <p>{text}</p>
              </Link>
            );
          })}
        </div>
        <div className="side-footer">
          <h2>Footer</h2>
        </div>
      </section>
    </StyledSide>
  );
}


let StyledSide = styled.section`
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    max-width: 300px;
    background-color: #050709;
    height: 100vh;
    padding: 1.5rem 2rem;
    display: grid;
    grid-template-rows: 1fr 10fr 1fr;
    color: white;
    transition: all 0.5s ease;
    z-index: 2000;
  }
  .sidebar .side-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ham {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 1.3rem;
  }
  .side-links {
    margin-top: 2rem;
  }
  .side-links p {
    margin-top: 1rem;
  }

  .close-sidebar {
    transform: translateX(-100%);
    transition: all 0.5s ease;
  }

  @media (min-width: 900px) {
    /* .close-sidebar {
      transform: translateX(-300%) !important;
      transition: all 0.5s ease;
    } */
    .sidebar {
      transform: translateX(-100%);
      transition: all 0.5s ease;
    }
  }
`;

export default Sidebar