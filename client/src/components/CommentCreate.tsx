import axios from 'axios';
import React, { FormEvent, useState } from 'react';

interface Props {
	postId: string;
}

export const CommentCreate = ({ postId }: Props) => {
	const [content, setContent] = useState('');

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		await axios.post(`http://posts.com/posts/${postId}/comments`, {
			content,
		});

		setContent('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="">New Comment</label>
					<input
						value={content}
						onChange={(e) => setContent(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};
