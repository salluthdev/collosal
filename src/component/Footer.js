import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
			<div className="brand">
				<Link to="/" style={{textDecoration: 'none'}}>
					<div className="logo">
						<img src="img/logo-footer.svg" />
						<h2>Collosal.</h2>
					</div>
				</Link>
				<div className="text">
					<p>Copyright &copy; 2021</p>
					<p>Design by Collosal LLC</p>
				</div>
			</div>
			<div className="section">
				<div className="title">
					<p>Services</p>
				</div>
				<div className="child-wrapper">
					<Link to="/services/web-development" style={{textDecoration: 'none'}}>
						<p>Web Development</p>
					</Link>
					<Link to="/services/app-development" style={{textDecoration: 'none'}}>
						<p>App Development</p>
					</Link>
					<Link to="/services/ui-design" style={{textDecoration: 'none'}}>
						<p>UI Design</p>
					</Link>
					<Link to="/services/consultation" style={{textDecoration: 'none'}}>
						<p>Consultation</p>
					</Link>
					<Link to="/services/maintenance" style={{textDecoration: 'none'}}>
						<p>Maintenance</p>
					</Link>
				</div>
			</div>
			<div className="section">
				<div className="title">
					<p>Company</p>
				</div>
				<div className="child-wrapper">
					<Link to="/about" style={{textDecoration: 'none'}}>
						<p>About</p>
					</Link>
					<Link to="/contact" style={{textDecoration: 'none'}}>
						<p>Contact</p>
					</Link>
					<Link to="/quote" style={{textDecoration: 'none'}}>
						<p>Send Quote</p>
					</Link>
					<Link to="/privacy-policy" style={{textDecoration: 'none'}}>
						<p>Privacy Policy</p>
					</Link>
					<Link to="/term-of-service" style={{textDecoration: 'none'}}>
						<p>Term of Service</p>
					</Link>
					<Link to="/jobs" style={{textDecoration: 'none'}}>
						<p>Jobs</p>
					</Link>
				</div>
			</div>
			<div className="section">
				<div className="title">
					<p>Resources</p>
				</div>
				<div className="child-wrapper">
					<Link to="/support" style={{textDecoration: 'none'}}>
						<p>Support</p>
					</Link>
					<Link to="/documentation" style={{textDecoration: 'none'}}>
						<p>Documentation</p>
					</Link>
					<Link to="/license" style={{textDecoration: 'none'}}>
						<p>License</p>
					</Link>
					<Link to="/sitemap" style={{textDecoration: 'none'}}>
						<p>Sitemap</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer;