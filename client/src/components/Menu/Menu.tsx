import styleCustom from './Menu.module.scss';
import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import ImgCard from '../ImgCard';
import { lobster } from '@/utils/fonts';

type Props = {
	imgUrls: any;
};
function Menu({ imgUrls }: Props) {
	const scrollRef = useRef(null);

	const scroll = (direction: any) => {
		const { current }: any = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};
	const style = {
		background: `bg-black mt-[7rem] text-white`,
		title: `text-8xl z-10 tracking-[10px]`,
		sub: `z-10 text-2xl`,
		dishes: `flex overflow-x-scroll w-[84%] mx-auto scroll-smooth rounded-xl bg-black/30 z-10`,
		arrow__container: `absolute w-full flex justify-between items-center top-[54%] px-[4%]`,
		arrow: `cursor-pointer text-[2rem] bg-black/40 rounded-full hover:text-[#d68822] active:scale-75 transition transform duration-100 ease-in`,
	};
	return (
		<div className={style.background}>
			<div className={styleCustom.wrapper}>
				<h2 className={`${lobster.className} ${style.title}`}>Our Menu</h2>
				<p className={style.sub}>
					Discover the essence of Vietnam in every bite
				</p>
				<div
					className={`${style.dishes} scrollbar-hide`}
					ref={scrollRef}>
					{imgUrls.map((item: any, idx: any) => (
						<ImgCard
							imgSrc={item.image.asset.url}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
				<div className={style.arrow__container}>
					<BsArrowLeftShort
						className={style.arrow}
						onClick={() => scroll('left')}
					/>
					<BsArrowRightShort
						className={style.arrow}
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	);
}
export default Menu;
