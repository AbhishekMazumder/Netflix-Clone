import React, { useState } from 'react';
import './listItem.scss';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

const ListItem = ({ index }) => {
	const [isHovered, setisHovered] = useState(false);
	const trailer = 'https://www.youtube.com/watch?v=jAy6NJ_D5vU';
	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setisHovered(true)}
			onMouseLeave={() => setisHovered(false)}
		>
			<img
				src="https://www.sideshow.com/wp/wp-content/uploads/2019/06/02_300539_Daredevil_0244.jpg"
				alt=""
			/>

			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					<div className="itemInfo">
						<div className="itemIcons">
							<PlayArrowIcon className="icon" />
							<AddIcon className="icon" />
							<ThumbUpOutlinedIcon className="icon" />
							<ThumbDownOutlinedIcon className="icon" />
						</div>
						<div className="itemInfoTop">
							<span>2 Hours 14 mins</span>
							<span className="ageLimit">+16</span>
							<span>2006</span>
						</div>
						<div className="itemDesc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							molestiae vel quos id perspiciatis veritatis laboriosam,
							aspernatur iusto reprehenderit.
						</div>
						<div className="genre">Thriller</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
