import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import {
	useSpring,
	animated,
	config as SpringConfig,
	useTrail,
} from '@react-spring/web';

const generateSpringAnimationConfig = () => {
	const maxX = window.innerWidth - 250;
	const maxY = window.innerHeight - 250;
	const iterations = 25;

	const randXArray = Array.from({ length: iterations }, (v, i) => 0);
	const randYArray = Array.from({ length: iterations }, (v, i) => 0);
	const randScaleArray = Array.from(
		{ length: iterations },
		(v, i) => Math.random() + 1
	);

	for (let i = 1; i < iterations; i++) {
		const deltaX = (Math.random() > 0.5 ? 300 : -200) * Math.random();
		const deltaY = (Math.random() > 0.5 ? 200 : -200) * Math.random();

		if (randXArray[i - 1] > maxX) {
			randXArray[i] = randXArray[i - 1] + Math.abs(deltaX) * -1;
		} else if (randXArray[i - 1] < 0) {
			randXArray[i] = randXArray[i - 1] + Math.abs(deltaX);
		} else {
			randXArray[i] = randXArray[i - 1] + deltaX;
		}

		if (randYArray[i - 1] > maxY) {
			randYArray[i] = randYArray[i - 1] + Math.abs(deltaX) * -1;
		} else if (randYArray[i - 1] < 0) {
			randYArray[i] = randYArray[i - 1] + Math.abs(deltaX);
		} else {
			randYArray[i] = randYArray[i - 1] + deltaY;
		}
	}

	const fromArray = { y: 0, x: 0, scale: 2 };
	const toArray = randXArray.map((xValue, idx) => ({
		x: xValue,
		y: randYArray[idx],
		scale: randScaleArray[idx],
	}));

	return {
		from: fromArray,
		to: [...toArray, fromArray],
		loop: true,
		config: {
			tension: 300,
			friction: 400,
			clamp: true,
			duration: 1000,
		},
	};
};

const trans = (x: number, y: number) => {
	return `translate3d(${x}px,${y}px,0)`;
};

const BackgroundGraphics = () => {
	const [resizeTimes, setResizeTimes] = useState(0);
	const blurMagentaRef = useRef<any>(null);
	const blurRedRef = useRef<any>(null);
	const blurYellowRef = useRef<any>(null);
	const blurBlueRef = useRef<any>(null);

	// const [magentaAnimationProps] = useSpring(() => {
	// 	return generateSpringAnimationConfig();
	// }, [resizeTimes]);
	const [yellowAnimationProps] = useSpring(() => {
		return generateSpringAnimationConfig();
	}, [resizeTimes]);

	const [blueAnimationProps] = useSpring(() => {
		return generateSpringAnimationConfig();
	}, [resizeTimes]);

	const [redAnimationProps] = useSpring(() => {
		return generateSpringAnimationConfig();
	}, [resizeTimes]);

	const [trail, api] = useTrail(1, (i) => ({
		xy: [0, 0],
		config: { mass: 10, tension: 200, friction: 50 },
	}));

	useEffect(() => {
		const resizeHandler = () => {
			setResizeTimes((prevTimes) => prevTimes + 1);
		};
		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	}, []);

	useEffect(() => {
		const mousemoveHandler = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			api.start({ xy: [clientX - 250, clientY - 250] });
		};
		window.addEventListener('mousemove', mousemoveHandler);

		return () => window.removeEventListener('mousemove', mousemoveHandler);
	}, []);

	return (
		<div id="background-graphics">
			<div className="blur-balls">
				{trail.map((props, index) => (
					<animated.div
						key={index}
						style={{
							transform: props.xy.to(trans),
						}}
					>
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
					</animated.div>
				))}

				{/* <animated.div style={magentaAnimationProps}>
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
				</animated.div> */}
				<animated.div style={yellowAnimationProps}>
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
				</animated.div>
				<animated.div style={blueAnimationProps}>
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
				</animated.div>
				<animated.div style={redAnimationProps}>
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
				</animated.div>
			</div>
			{/* <div className="experimental-graphics">
				<div className="blue"></div>
				<div className="red"></div>
			</div> */}
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

export default BackgroundGraphics;
