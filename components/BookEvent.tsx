'use client';

import { useState } from 'react';

const BookEvent = () => {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		setTimeout(() => {
			setSubmitted(true);
		}, 1000);
	};

	return (
		<div id="book-event">
			{submitted ? (
				<p className="text-sm">Thank you for sigining up</p>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<button className="button-submit" type="button">
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default BookEvent;
