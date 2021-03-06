import { Helmet } from 'react-helmet';
import '../css/style.css';
import '../css/not-found.css';
import Navbar from '../component/Navbar';
import Button from './Button';
import Callout from '../component/Callout';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const pageTitle = 'Error 404 - Collosal';

function NotFound() {
	return (
		<>
			<Helmet>
		        <title>{ pageTitle }</title>
		      </Helmet>
			<div className="bg-container">
				<div className="container not-found">
					<Navbar />
					<div className="main">
						<div className="page-header">
							<h4>Error</h4>
							<h1>The page you are looking for is not on this website, please check again</h1>
						</div>
						<p>The system cannot find the page you are looking for, maybe you have the wrong path or the page has been deleted.</p>
						<Link to="/">
							<Button variant="light">Back to Home</Button>
						</Link>
					</div>
					<Callout />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default NotFound;