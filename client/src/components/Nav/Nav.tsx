import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook2 } from 'react-icons/im';
import { useRouter } from 'next/router';
import en from './en';
import vi from './vi';
import { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { BsArrowRight } from 'react-icons/bs';
import { babylonica } from '@/lib/fonts';

type Props = {};
const Nav = (props: Props) => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : vi;
	const changeLanguage = (e: any) => {
		const locale = e.target.value;
		router.push('/', '/', { locale });
	};
	const [isActive, setIsActive] = useState(false);

	const switchNav = () => {
		if (!isActive) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
		//console.log(isActive);
	};

	const style = {
		wrapper: `fixed top-0 bg-[#141414] z-20`,
		container: `hidden md:block md:relative h-[screen] w-screen md:w-[20vw]`,
		container__active: `animate-fade-in-right relative h-screen w-screen md:w-[20vw]`,
		nav__container: `sticky h-screen flex flex-col justify-between text-white`,
		nav__img: `opacity-[24%]`,
		nav__title: `pt-8 text-7xl text-center`,
		nav: `mt-[10vh] flex flex-col max-w-max gap-[2vh] text-center mx-auto pb-[10vh]`,
		nav__links: `group bg-black/40 py-4 px-14 md:bg-transparent md:p-0 rounded-full active:text-yellow-400`,
		nav__links__content: `text-lg md:text-4xl hover:opacity-80`,
		nav__links__underline: `hidden md:block mt-4 max-w-0 group-hover:max-w-full h-0.5 bg-yellow-400 transition-all duration-400`,
		icon: `text-2xl mx-auto`,
		contact: `text-sm md:text-xl text-center mt-1 md:mt-4 pb-1 md:pb-8`,
		languages: `flex gap-2 justify-center`,
		languages__btn: `bg-black/40 hover:bg-gray-200/20 text-white rounded-full active:bg-gray-200/20 active:scale-95 transition transform duration-200 ease-in mb-2`,
		mobile: `animate-fade-in-left relative md:hidden text-white h-[12vh] w-screen flex`,
		mobile__inactive: `hidden`,
		mobile__imgWrapper: `h-0`,
		mobile__img: `opacity-[14%] object-cover object-top`,
		mobile__container: `flex items-center w-screen justify-between px-6 z-0`,
		mobile__title: `text-4xl flex`,
		mobile__menuBtn: `text-2xl`,
		mobile__menuClose: `block md:hidden mx-auto text-4xl`,
	};
	return (
		<nav className={style.wrapper}>
			<div className={`${isActive ? style.mobile__inactive : style.mobile}`}>
				<div className={style.mobile__imgWrapper}>
					<Image
						alt="navBackground"
						src="/static/wood.jpg"
						fill
						className={style.mobile__img}
					/>
				</div>

				<div className={style.mobile__container}>
					<h1 className={[babylonica.className, style.mobile__title].join(' ')}>
						The Clouds
					</h1>

					<SlMenu
						className={style.mobile__menuBtn}
						onClick={switchNav}
					/>
				</div>
			</div>
			<div
				className={`${!isActive ? style.container : style.container__active}`}>
				<Image
					alt="navBackground"
					src="/static/wood.jpg"
					fill
					className={style.nav__img}
				/>

				<div className={style.nav__container}>
					<h1 className={[babylonica.className, style.nav__title].join(' ')}>
						The Clouds
						<p className="text-4xl">☁️</p>
					</h1>

					<nav className={style.nav}>
						<Link
							href="/menu"
							className={style.nav__links}>
							<span className={style.nav__links__content}>{t.nav1}</span>
							<span className={style.nav__links__underline}></span>
						</Link>
						<Link
							href="#specials"
							className={style.nav__links}>
							<span className={style.nav__links__content}>{t.nav2}</span>
							<span className={style.nav__links__underline}></span>
						</Link>
						<Link
							href="/contact"
							className={style.nav__links}>
							<span className={style.nav__links__content}>{t.nav3}</span>
							<span className={style.nav__links__underline}></span>
						</Link>
						<BsArrowRight
							className={style.mobile__menuClose}
							onClick={switchNav}
						/>
					</nav>

					<div>
						<ImFacebook2 className={style.icon} />
						<div className={style.contact}>
							<div>6940 Victoria Drive</div>
							<div>Vancouver, BC V5P 3Y8, Canada</div>
							<a href="tel:7788922256">Tel: (+1) 778-892-2256</a>
						</div>
						<div className={style.languages}>
							<button
								value="en"
								onClick={changeLanguage}
								className={`${style.languages__btn} px-1`}>
								en
							</button>

							<button
								value="vi"
								onClick={changeLanguage}
								className={`${style.languages__btn} px-[0.34rem]`}>
								vi
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
