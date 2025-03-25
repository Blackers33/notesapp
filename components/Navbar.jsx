import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar(props) {
	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-900 shadow-lg'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
					<img
						src='https://www.pngfind.com/pngs/m/572-5721612_accounting-report-comments-notes-transparent-icon-hd-png.png'
						className='h-8'
						alt='Notes Logo'
					/>
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Notes app
					</span>
				</a>

				<div className='flex space-x-8'>
					<Link
						href='https://github.com/Blackers33'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub className='text-gray-600 dark:text-white text-2xl hover:text-gray-800 dark:hover:text-gray-400' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/sachaaltaber/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin className='text-gray-600 dark:text-white text-2xl hover:text-blue-600' />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
