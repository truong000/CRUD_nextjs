import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div className="main-sidebar" >
                <div className="main-navbar">
                    <a href="/">DASHBOAD</a>
                </div>
                <div className="sidenav">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="main-content">
                <div className="header-container">
                    <div className='search-navbar'>
                        <form action="">
                            <input className='input-search' type="text" placeholder="Search.." name="search" />
                            <button className='btn-search' type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                    <div className='noti-profile'>
                        <button className='btn-bell' type="submit">
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <div className='profile-head'>
                            <img className='img-profile' src="/images/profile.png" alt="profile" />
                        </div>
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}