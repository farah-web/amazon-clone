import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <>
            <div className="header">
                <Link to='/'>
                    <img src="./images/logo-amazon.jpg" alt="amazon" className="header-logo" />
                </Link>
                <div className="header-search">
                    <input type="text" className="header-searchInput" />
                    <SearchIcon className="header-searchIcon" />
                </div>

                <div className="header-nav">
                    <Link to={!user && '/login'}>
                        <div onClick={handleAuthentication} className="header-option">
                            <span className="header-optionLineOne">Hello, {user? user?.email : 'Guest'}</span>
                            <span className="header-optionLineTwo">{!user ? 'Sign in' : 'Sign out'}</span>
                        </div>
                    </Link>
                    <Link to='/orders'>
                    <div className="header-option">
                        <span className="header-optionLineOne">Returns</span>
                        <span className="header-optionLineTwo"> & Orders</span>
                    </div>
                    </Link>
                    <div className="header-option">
                        <span className="header-optionLineOne yourPrime">Your</span>
                        <span className="header-optionLineTwo yourPrime"> Prime</span>
                    </div>
                    <Link to='/checkout'>
                        <div className="header-optionBasket">
                            <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
                            <ShoppingCartIcon style={{ fontSize: 20 }}/>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Header
