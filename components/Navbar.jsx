import Link from "next/link";
import React from "react";


function Navbar(props) {
	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-900 shadow-lg'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<a
					href='#'
					className='flex items-center space-x-3 rtl:space-x-reverse'
				>
					<img
						src='https://www.pngfind.com/pngs/m/572-5721612_accounting-report-comments-notes-transparent-icon-hd-png.png'
						className='h-8'
						alt='Notes Logo'
					/>
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Notes app
					</span>
				</a>			
			</div>
		</nav>
	);
}

export default Navbar;
