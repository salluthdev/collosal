import '../css/callout.css';
import { Link } from 'react-router-dom';
import Button from './Button';

function Callout() {
	return (
		<div className="callout">
			<hr />
			<div className="content">
				<h1>We've prepared everything, it's time for you to tell the problem</h1>
				<div className="button-wrapper">
					<Link to="/quote">
						<Button>Send Quote</Button>
					</Link>
					<Link to="/faq">
						<Button variant="light">Ask Us</Button>
					</Link>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default Callout;