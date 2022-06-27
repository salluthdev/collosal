import '../css/callout.css';
import { Link } from 'react-router-dom';

function Callout() {
	return (
		<div className="callout">
			<hr />
			<div className="content">
				<h1>We've prepared everything, it's time for you to tell the problem</h1>
				<div className="button-wrapper">
					<Link to="/quote">
						<button>Send Quote</button>
					</Link>
					<Link to="/faq">
						<button className="light">Ask Us</button>
					</Link>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default Callout;