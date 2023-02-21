import Image from 'next/image';

type Props = {
	imgUrls: any;
};
function Presentation({ imgUrls }: Props) {
	const style = {
		img__container: `flex flex-row`,
		imgWrap: `hidden`,
		activeimgWrap: `relative w-full h-[32vh] md:h-[90vh]`,
	};

	console.log(imgUrls);

	let currentIndex = 0;

	return (
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
		</div>
	);
}

export default Presentation;
