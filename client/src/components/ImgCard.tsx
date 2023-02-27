import Image from 'next/image';

type Props = {
	imgSrc: string;
	name: string;
	price: number;
};
function imgCard({ imgSrc, name, price }: Props) {
	const style = {
		wrapper: `min-w-[60vw] md:min-w-[13vw] h-[40vh] md:h-[34vh] text-center pt-2 px-1 md:pt-4 pb-2 md:hover:shadow-lg md:scale-95 md:hover:scale-100 transition transform duration-200 ease-in flex flex-col`,
		imgWrapper: `relative w-full h-full mb-4`,
		img: `object-cover object-center rounded-t-lg`,
		name: `md:text-3xl`,
		price: `md:text-xl font-bold`,
	};
	//console.log(imgSrc);
	return (
		<div className={style.wrapper}>
			<div className={style.imgWrapper}>
				<Image
					alt="signature dish"
					src={imgSrc}
					fill
					className={style.img}
				/>
			</div>
			<div className={style.name}>{name}</div>
			<div className={style.price}>{price}</div>
		</div>
	);
}
export default imgCard;
