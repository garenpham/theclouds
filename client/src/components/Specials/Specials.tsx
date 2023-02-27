import ImgCard from '../ImgCard';
import { lobster } from '@/lib/fonts';
import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

type Props = {
	imgUrls: any;
};
function Specials({ imgUrls }: Props) {
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
		wrapper: `relative`,
		title: `text-center text-6xl tracking-[10px] mt-[10vh] text-[#d68822]`,
		sub: `text-center text-2xl pt-4 pb-[3rem]`,
		dishes: `flex overflow-x-scroll w-[70%] mx-auto scroll-smooth rounded-xl bg-[#ff9100]/10`,
		arrow__container: `absolute w-full flex justify-between items-center top-[64%] px-[10%]`,
		arrow: `cursor-pointer text-[2rem] bg-[#ff9100]/10 rounded-full hover:text-[#d68822] active:scale-75 transition transform duration-100 ease-in`,
	};
	return (
		<div className={style.wrapper}>
			<h2 className={`${lobster.className} ${style.title}`}>
				Signatures & Specials
			</h2>
			<p className={style.sub}>Our Signatures and Specials menu for today</p>
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
	);
}
export default Specials;
