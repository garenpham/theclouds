import Image from 'next/image';
import { babylonica } from '@/lib/fonts';
import { playfairDisplay } from '@/lib/fonts';
import { useState, useRef, useEffect } from 'react';

type Props = {
	imgUrls: any;
};
function Header({ imgUrls }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timeoutRef: any = useRef(null);
	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}
	const delay = 10000;
	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setCurrentIndex((prevCurrentIndex) =>
					prevCurrentIndex === imgUrls.length - 1 ? 0 : prevCurrentIndex + 1,
				),
			delay,
		);
		return () => {
			resetTimeout();
		};
	}, [currentIndex]);
	const style = {
		wrapper: `bg-black`,
		img__container: `flex flex-row mt-[12vh] md:mt-0`,
		imgWrap: `hidden`,
		activeimgWrap: `animate-fade-in relative w-full h-[32vh] md:h-[90vh] opacity-30`,
		title__container: `text-white flex flex-col justify-center items-center absolute w-full h-[32vh] md:w-[80vw] md:h-[90vh]`,
		title: `text-2xl md:text-[4rem] tracking-[10px]`,
		title__sub: `text-[3rem] md:text-[8rem] xl:text-[10rem] text-center`,
		navigate: ``,
		navigate__btn: ``,
	};

	// console.log(imgUrls);

	return (
		<header className={style.wrapper}>
			<div className={style.img__container}>
				{imgUrls.map((item: any, idx: any) => (
					<div
						className={`${
							currentIndex === idx ? style.activeimgWrap : style.imgWrap
						}`}
						key={idx}>
						<Image
							alt="pho"
							src={item.image.asset.url}
							fill
							className="object-cover"
						/>
					</div>
				))}
				<div className={` ${style.title__container}`}>
					<h1 className={`${playfairDisplay.className} ${style.title}`}>
						Authentic
					</h1>
					<p className={`${babylonica.className} ${style.title__sub}`}>
						Vietnamese Cusine
					</p>
				</div>
				<div className={style.navigate}></div>
			</div>
		</header>
	);
}

export default Header;
