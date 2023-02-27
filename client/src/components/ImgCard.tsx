import Image from 'next/image';

type Props = {
	imgSrc: string;
	name: string;
	price: number;
};
function imgCard({ imgSrc, name, price }: Props) {
	const style = {
		wrapper: `min-w-[13vw] h-[34vh] text-center px-4 pt-4 pb-2 hover:shadow-lg scale-95 hover:scale-100 transition transform duration-200 ease-in flex flex-col`,
		imgWrapper: `relative w-full h-full mb-4`,
		name: `text-xl`,
		price: `font-bold`,
	};
	//console.log(imgSrc);
	return (
		<div className={style.wrapper}>
			<div className={style.imgWrapper}>
				<Image
					alt="signature dish"
					src={imgSrc}
					fill
					className="object-cover object-center"
				/>
			</div>
			<div className={style.name}>{name}</div>
			<div className={style.price}>{price}</div>
		</div>
	);
}
export default imgCard;