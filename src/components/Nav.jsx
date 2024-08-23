
// import React, { Component } from 'react'


// export default class Nav extends Component {
   
//   render() {
//      const { linkname, linkurl } = this.props;
//     return (
// 			<>
// 				<li className="nav-item">
// 					<a className="nav-link js-scroll-trigger" href={linkurl}>
// 						{linkname}
						
// 					</a>
// 				</li>

// 			</>
// 		);
//   }
// }

import React from "react";

const Nav = ({ linkurl, linkname }) => {
	return (
		<li className="nav-item">
			<a className="nav-link js-scroll-trigger" href={linkurl}>
				{linkname}
			</a>
		</li>
	);
};

export default Nav;
