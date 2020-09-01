import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import logo from '../../../media/images/cityOfMiami.png';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const DashboardLogo = () => {
    return (
        <div className={`row px-4`}>
            <div className="col-12 py-2">
                <img src={logo} alt="City_of_Miami_Logo" className="img-fluid w-100" />
            </div>
            <div className="col-12 py-2">
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
