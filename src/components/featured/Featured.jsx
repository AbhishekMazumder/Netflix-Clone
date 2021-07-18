import React from 'react';
import './featured.scss';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Featured = ({ type }) => {
	return (
		<div className="featured" style={{ marginTop: '70px' }}>
			{type && (
				<div className="category">
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option>Genre</option>
						<option>Genre</option>
						<option>Genre</option>
					</select>
				</div>
			)}
			<img src="https://i.ytimg.com/vi/cKYibT5J87w/maxresdefault.jpg" alt="" />
			<div className="info">
				<img src="" alt="" />
				<span className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum
					exercitationem voluptas praesentium eos labore assumenda ad at.
					Assumenda unde eos dolorum ex ducimus.
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrowIcon />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlinedIcon />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
