import React from 'react';
import { container } from './index.module.css';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const DashboardLogo = () => {
    return (
        <div className={`${container}`}>
            <img
                src="https://www.miamigov.com/files/assets/public/templateimages/print-header.png"
                alt="City_of_Miami_Logo"
            />
            <div style={{margin: '0 1em'}}>
                <Breadcrumbs
                    aria-label="breadcrumb"
                    separator={<NavigateNextIcon fontSize="small" />}
                >
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Elections
                    </Link>
                    <Typography color="textPrimary">PB Miami 2020</Typography>
                </Breadcrumbs>
            </div>
        </div>
    );
};
export default DashboardLogo;
