'use client';

import React, { useEffect, useState, useRef } from 'react';
import BackgroundGraphics from '@/app/components/BackgroundGraphics';
import HomeLeftPanel from '@/app/components/HomeLeftPanel';
import Link from 'next/link';

import { Roboto_Mono } from 'next/font/google';
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

enum Sections {
	HOME,
	WORK,
	LIFE,
	CONTACT,
}

enum DisplayMode {
	NONE = -1,
	HIDDEN,
	SHOWN,
}

export default function Home() {
	const rightPanelRef = useRef(null) as any;
	const rightPanelLandingRef = useRef(null) as any;
	const rightPanelWorkRef = useRef(null) as any;
	const rightPanelLifeRef = useRef(null) as any;

	const [sectionStatus, setSectionStatus] = useState([
		DisplayMode.SHOWN,
		DisplayMode.NONE,
		DisplayMode.NONE,
	]);

	const navButtonHoverHandler = (e: any) => {
		const rect = e.target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		document.documentElement.style.setProperty('--mouse-x', `${x}px`);
		document.documentElement.style.setProperty('--mouse-y', `${y}px`);
	};

	const handleSectionScroll = (e: Event) => {
		const { top: landingTop, bottom: landingBottom } =
			rightPanelLandingRef?.current.getBoundingClientRect();
		const { top: workTop, bottom: workBottom } =
			rightPanelWorkRef?.current.getBoundingClientRect();
		const { top: lifeTop, bottom: lifeBottom } =
			rightPanelLifeRef?.current.getBoundingClientRect();
		const scrollPos = window.innerHeight / 2;

		if (landingBottom >= scrollPos) {
			console.log('HOME');
			setSectionStatus((prevStatus) => {
				const newStatus = [...prevStatus];
				newStatus[Sections.HOME] = DisplayMode.SHOWN;
				newStatus[Sections.WORK] = DisplayMode.HIDDEN;
				newStatus[Sections.LIFE] = DisplayMode.HIDDEN;
				newStatus[Sections.CONTACT] = DisplayMode.HIDDEN;
				return newStatus;
			});
		} else if (workBottom >= scrollPos) {
			console.log('WORK');
			setSectionStatus((prevStatus) => {
				const newStatus = [...prevStatus];
				newStatus[Sections.HOME] = DisplayMode.HIDDEN;
				newStatus[Sections.WORK] = DisplayMode.SHOWN;
				newStatus[Sections.LIFE] = DisplayMode.HIDDEN;
				newStatus[Sections.CONTACT] = DisplayMode.HIDDEN;
				return newStatus;
			});
		} else if (lifeBottom >= scrollPos) {
			console.log('LIFE');
			setSectionStatus((prevStatus) => {
				const newStatus = [...prevStatus];
				newStatus[Sections.HOME] = DisplayMode.HIDDEN;
				newStatus[Sections.WORK] = DisplayMode.HIDDEN;
				newStatus[Sections.LIFE] = DisplayMode.SHOWN;
				newStatus[Sections.CONTACT] = DisplayMode.HIDDEN;
				return newStatus;
			});
		} else {
			console.log('CONTACT');
			setSectionStatus((prevStatus) => {
				const newStatus = [...prevStatus];
				newStatus[Sections.HOME] = DisplayMode.HIDDEN;
				newStatus[Sections.WORK] = DisplayMode.HIDDEN;
				newStatus[Sections.LIFE] = DisplayMode.HIDDEN;
				newStatus[Sections.CONTACT] = DisplayMode.SHOWN;
				return newStatus;
			});
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleSectionScroll);

		return () => {
			window.removeEventListener('scroll', handleSectionScroll);
		};
	}, []);
	return (
		<main id="landing-page">
			<BackgroundGraphics />
			<div id="main-left-section">
				<div
					id="home-left-panel"
					className={`displaying-${
						sectionStatus[0] === DisplayMode.NONE
							? 'none'
							: sectionStatus[0] === DisplayMode.SHOWN
							? true
							: false
					}`}
				>
					<HomeLeftPanel />
				</div>
				<div
					id="work-left-panel"
					className={`displaying-${
						sectionStatus[1] === DisplayMode.NONE
							? 'none'
							: sectionStatus[1] === DisplayMode.SHOWN
							? true
							: false
					}`}
				>
					Work Work Work Work Work Work Work Work Work Work Work Work
				</div>
				<div
					id="life-left-panel"
					className={`displaying-${
						sectionStatus[2] === DisplayMode.NONE
							? 'none'
							: sectionStatus[2] === DisplayMode.SHOWN
							? true
							: false
					}`}
				>
					LIFE LIFELIFELIFELIFELIFELIFELIFELIFELIFELIFELIFE
				</div>
			</div>
			<div id="main-right-section" ref={rightPanelRef}>
				<div id="landing-page-nav" ref={rightPanelLandingRef}>
					<div id="nav-buttons-group" className={robotoMono.className}>
						<Link href="#work-section">
							<div
								className="nav-button"
								onMouseMove={(e: any) => navButtonHoverHandler(e)}
							>
								<div className="nav-button-text">Work</div>
							</div>
						</Link>
						<div
							className="nav-button"
							onMouseMove={(e: any) => navButtonHoverHandler(e)}
						>
							<div className="nav-button-text">Life</div>
						</div>
						<div
							className="nav-button"
							onMouseMove={(e: any) => navButtonHoverHandler(e)}
						>
							<div className="nav-button-text">Contact</div>
						</div>
					</div>
				</div>
				<div id="work-right" ref={rightPanelWorkRef}>
					<h2>Work</h2>
					following content <br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis
					recusandae aspernatur molestias magni non, architecto inventore
					aliquam? Quia est suscipit harum amet voluptates distinctio mollitia
					accusamus quas expedita asperiores!Lorem ipsum dolor sit amet <br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores! consectetur adipisicing elit. Delectus quis recusandae
					aspernatur molestias magni non, architecto inventore aliquam? Quia est
					suscipit harum amet voluptates distinctio mollitia accusamus quas
					expedita asperiores!Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Delectus quis recusandae aspernatur molestias magni non,
					architecto inventore aliquam? Quia est suscipit harum amet voluptates
					distinctio mollitia accusamus quas expedita asperiores!Lorem ipsum
					dolor sit amet <br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis
					recusandae aspernatur molestias magni non, architecto inventore
					aliquam? Quia est suscipit harum amet voluptates distinctio mollitia
					accusamus quas expedita asperiores!Lorem ipsum dolor sit amet <br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!
				</div>
				<div id="life-section" ref={rightPanelLifeRef}>
					<h2>Life</h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis
					recusandae aspernatur molestias magni non, architecto inventore
					aliquam? Quia est suscipit harum amet voluptates distinctio mollitia
					accusamus quas expedita asperiores!Lorem ipsum dolor sit amet <br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis
					recusandae aspernatur molestias magni non, architecto inventore
					aliquam? Quia est suscipit harum amet voluptates distinctio mollitia
					accusamus quas expedita asperiores!Lorem ipsum dolor sit amet <br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Delectus quis recusandae aspernatur molestias magni non, architecto
					inventore aliquam? Quia est suscipit harum amet voluptates distinctio
					mollitia accusamus quas expedita asperiores!Lorem ipsum dolor sit amet{' '}
					<br />
					consectetur adipisicing elit. Delectus quis recusandae aspernatur
					molestias magni non, architecto inventore aliquam? Quia est suscipit
					harum amet voluptates distinctio mollitia accusamus quas expedita
					asperiores!
				</div>
			</div>
		</main>
	);
}
