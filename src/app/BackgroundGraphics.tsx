import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

const blurRedPosition = { x: 0, y: 0 };
const blurYellowPosition = { x: 0, y: 0 };
const blurBluePosition = { x: 0, y: 0 };

const BackgroundGraphics = () => {
	const blurMagentaRef = useRef<any>(null);
	const blurRedRef = useRef<any>(null);
	const blurYellowRef = useRef<any>(null);
	const blurBlueRef = useRef<any>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = e.clientX - blurMagentaRef?.current?.offsetWidth / 2;
			const scale = Math.max(
				((window.innerWidth - (window.innerWidth - x)) / window.innerWidth) * 3,
				1.25
			);
			const y = e.clientY - blurMagentaRef?.current?.offsetHeight / 2;
			const keyframes = {
				transform: `translate(${x}px, ${y}px) scale(${scale})`,
			};

			blurMagentaRef?.current?.animate(keyframes, {
				fill: 'forwards',
				duration: 3000,
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	function getBlurRedXY() {
		return blurRedPosition;
	}
	function getBlurYellowXY() {
		return blurYellowPosition;
	}
	function getBlurBlueXY() {
		return blurBluePosition;
	}

	function animateStuff(getXYFunc: any, ref: any, positionObj: any) {
		const randomNumbers = Array.from({ length: 2 }, (_, i) => Math.random());
		const currentHeight = window.innerHeight;

		const ballDeltaX =
			Math.round(randomNumbers[0] * 300) * (randomNumbers[0] > 0.5 ? -1 : 1);
		const ballDeltaY =
			Math.round(randomNumbers[1] * 300) * (randomNumbers[1] > 0.5 ? -1 : 1);

		let newBallX = getXYFunc().x + ballDeltaX;
		let newBallY = getXYFunc().y + ballDeltaY;

		if (
			getXYFunc().x + ballDeltaX < 0 ||
			getXYFunc().x + ballDeltaX > window.innerWidth
		)
			newBallX = getXYFunc().x - ballDeltaX;
		if (
			getXYFunc().y + ballDeltaY < 0 ||
			getXYFunc().y + ballDeltaY > currentHeight
		)
			newBallY = getXYFunc().y - ballDeltaY;

		const scale = Math.min(
			Math.max(
				(Math.abs(newBallY - currentHeight / 2) / (currentHeight / 2)) * 3,
				1.5
			),
			4
		);
		const keyframes = {
			transform: `translate(${newBallX}px, ${newBallY}px) scale(${scale})`,
		};

		positionObj.x = newBallX;
		positionObj.y = newBallY;
		ref?.current?.animate(keyframes, {
			fill: 'forwards',
			duration: 2000,
		});
	}

	useEffect(() => {
		const blurBallAnimationHandler = () => {
			animateStuff(getBlurRedXY, blurRedRef, blurRedPosition);
			animateStuff(getBlurYellowXY, blurYellowRef, blurYellowPosition);
			animateStuff(getBlurBlueXY, blurBlueRef, blurBluePosition);
		};

		const interval = setInterval(blurBallAnimationHandler, 2000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div id="background-graphics">
			<div className="blur-balls">
				<Image
					className="blur-magenta"
					src="/images/blur-magenta.svg"
					alt=""
					width={500}
					height={500}
					loading="eager"
					style={{ position: 'absolute' }}
					ref={blurMagentaRef}
				/>
				<Image
					className="blur-yellow"
					src="/images/blur-yellow.svg"
					alt=""
					width={500}
					height={500}
					loading="eager"
					style={{ position: 'absolute' }}
					ref={blurYellowRef}
				/>
				<Image
					className="blur-blue"
					src="/images/blur-blue.svg"
					alt=""
					width={500}
					height={500}
					loading="eager"
					style={{ position: 'absolute' }}
					ref={blurBlueRef}
				/>
				<Image
					className="blur-red"
					src="/images/blur-magenta.svg"
					alt=""
					width={500}
					height={500}
					loading="eager"
					style={{ position: 'absolute' }}
					ref={blurRedRef}
				/>
			</div>
			<Image
				src="/images/background-noise.png"
				alt=""
				fill
				className="background-noise"
				priority
				style={{ objectFit: 'cover' }}
			/>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		props: {},
	};
};

export default BackgroundGraphics;
