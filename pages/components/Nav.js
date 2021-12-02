import { ReactElement } from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	ArchiveIcon,
	BanIcon,
	BellIcon,
	FlagIcon,
	InboxIcon,
	MenuIcon,
	PencilAltIcon,
	UserCircleIcon,
	XIcon
} from '@heroicons/react/outline';
import tw from 'tailwind-styled-components';

library.add(fab);

const user = {
	name: 'Joe Shields',
	email: 'Shields.John.Joseph@gmail.com',
	imageUrl: 'https://drive.google.com/uc?id=1sQIuxYprbofLN__tpEBbR7urzJFVBRj6'
};
const navigation = [
	{ name: 'Contact', href: '#', children: [] },
	{ name: 'Resume', href: '#', children: [] }
];
const sidebarNavigation = [
	{ name: 'Open', href: '#', icon: InboxIcon, current: true },
	{ name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
	{ name: 'Flagged', href: '#', icon: FlagIcon, current: false },
	{ name: 'Drafts', href: '#', icon: PencilAltIcon, current: false }
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Nav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full overflow-hidden">
        ```
      */}
			<div className='h-full flex flex-col'>
				{/* Top nav*/}
				<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
					{/* Logo area */}
					<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
						<a
							href='#'
							className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'
						>
							<img
								className='h-8 w-auto'
								src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
								alt='Workflow'
							/>
						</a>
					</div>

					{/* Picker area */}
					<div className='mx-auto md:hidden'>
						<div className='relative'>
							<label htmlFor='inbox-select' className='sr-only'>
								Choose inbox
							</label>
						</div>
					</div>

					{/* Menu button area */}
					<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
						{/* Mobile menu button */}
						<button
							type='button'
							className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className='sr-only'>Open main menu</span>
							<MenuIcon className='block h-6 w-6' aria-hidden='true' />
						</button>
					</div>

					{/* Desktop nav area */}
					<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
						<div className='min-w-0 flex-1'>
							<div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'></div>
							</div>
						</div>
						<div className='ml-10 pr-4 flex-shrink-0 flex items-center space-x-10'>
							<nav aria-label='Global' className='flex space-x-10'></nav>
							<div className='flex items-center space-x-8'>
								<Menu as='div' className='relative inline-block text-left'>
										<img
											className='h-12 w-12 rounded-full'
											src={user.imageUrl}
											alt=''
										/>
									

									<Transition
										as={Fragment}
										enter='transition ease-out duration-100'
										enterFrom='transform opacity-0 scale-95'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-75'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-95'
									>
										<Menu.Items className='origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>





					{/* Mobile menu, show/hide this `div` based on menu open/closed state */}
					<Transition.Root show={mobileMenuOpen} as={Fragment}>
						<Dialog
							as='div'
							className='fixed inset-0 z-40 md:hidden'
							onClose={setMobileMenuOpen}
						>
							<Transition.Child
								as={Fragment}
								enter='transition-opacity ease-linear duration-300'
								enterFrom='opacity-0'
								enterTo='opacity-100'
								leave='transition-opacity ease-linear duration-300'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'
							>
								<Dialog.Overlay className='hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75' />
							</Transition.Child>

							<Transition.Child
								as={Fragment}
								enter='transition ease-out duration-150 sm:ease-in-out sm:duration-300'
								enterFrom='transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100'
								enterTo='transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100'
								leave='transition ease-in duration-150 sm:ease-in-out sm:duration-300'
								leaveFrom='transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100'
								leaveTo='transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100'
							>
								<nav
									className='fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg'
									aria-label='Global'
								>
									<div className='h-16 flex items-center justify-between px-4 sm:px-6'>
										<a href='#'>
											<img
												className='block h-8 w-auto'
												src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500'
												alt='Workflow'
											/>
										</a>
										<button
											type='button'
											className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'
											onClick={() => setMobileMenuOpen(false)}
										>
											<span className='sr-only'>Close main menu</span>
											<XIcon className='block h-6 w-6' aria-hidden='true' />
										</button>
									</div>

									<div className='max-w-8xl mx-auto py-3 px-2 sm:px-4'>
										{navigation.map(item => (
											<Fragment key={item.name}>
												<a
													href={item.href}
													className='block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100'
												>
													{item.name}
												</a>
												{item.children.map(child => (
													<a
														key={child.name}
														href={child.href}
														className='block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100'
													>
														{child.name}
													</a>
												))}
											</Fragment>
										))}
									</div>
									<div className='border-t border-gray-200 pt-4 pb-3'>
										<div className='max-w-8xl mx-auto px-4 flex items-center sm:px-6'>
											<div className='flex-shrink-0'>
												<img
													className='h-10 w-10 rounded-full'
													src={user.imageUrl}
													alt=''
												/>
											</div>
											<div className='ml-3 min-w-0 flex-1'>
												<div className='text-base font-medium text-gray-800 truncate'>
													{user.name}
												</div>
												<div className='text-sm font-medium text-gray-500 truncate'>
													{user.email}
												</div>
											</div>
										</div>
									</div>
								</nav>
							</Transition.Child>
						</Dialog>
					</Transition.Root>
				</header>

				{/* Bottom section */}
				<div className='min-h-0 flex-1 flex overflow-hidden'>
					{/* Narrow sidebar*/}
					<nav
						aria-label='Sidebar'
						className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'
					>
						<div className='relative w-20 flex flex-col p-3 space-y-3'>
							{sidebarNavigation.map(item => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-400 hover:bg-gray-700',
										'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
									)}
								>
									<span className='sr-only'>{item.name}</span>
									<item.icon className='h-6 w-6' aria-hidden='true' />
								</a>
							))}
						</div>
					</nav>

					{/* Main area */}
					<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex'>
						{/* Primary column */}
						<section
							aria-labelledby='primary-heading'
							className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last'
						>
							<h1 id='primary-heading' className='sr-only'>
								Home
							</h1>
						</section>

						{/* Secondary column (hidden on smaller screens) */}
						<aside className='hidden lg:block lg:flex-shrink-0 lg:order-first'>
							<div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto'>
								<FontAwesomeIcon icon={['fab', 'github']} />
							</div>
						</aside>
					</main>
				</div>
			</div>
		</>
	);
}