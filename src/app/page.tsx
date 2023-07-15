'use client';

import React, { useEffect, useState, useRef } from 'react';
import BackgroundGraphics from '@/app/components/BackgroundGraphics';
import HomeLeftPanel from '@/app/components/HomeLeftPanel';
import WorkLeftSection from '@/app/components/WorkLeftSection';
import WorkRightSection from '@/app/components/WorkRightSection';
import Link from 'next/link';
import Image from 'next/image';
import { SubSections } from '@/app/models/enums';

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

	const [scrollPos, setScrollPos] = useState(0);
	const [subSection, setSubSection] = useState(SubSections.NONE);
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
		setScrollPos(scrollPos);

		if (landingBottom >= scrollPos) {
			setSectionStatus((prevStatus) => {
				const newStatus = [...prevStatus];
				newStatus[Sections.HOME] = DisplayMode.SHOWN;
				newStatus[Sections.WORK] = DisplayMode.HIDDEN;
				newStatus[Sections.LIFE] = DisplayMode.HIDDEN;
				newStatus[Sections.CONTACT] = DisplayMode.HIDDEN;
				return newStatus;
			});
		} else if (workBottom >= scrollPos) {
			setSectionStatus((prevStatus) => {
				const newStatus = [...prevStatus];
				newStatus[Sections.HOME] = DisplayMode.HIDDEN;
				newStatus[Sections.WORK] = DisplayMode.SHOWN;
				newStatus[Sections.LIFE] = DisplayMode.HIDDEN;
				newStatus[Sections.CONTACT] = DisplayMode.HIDDEN;
				return newStatus;
			});
		} else if (lifeBottom >= scrollPos) {
			setSectionStatus((prevStatus) => {
				const newStatus = [...prevStatus];
				newStatus[Sections.HOME] = DisplayMode.HIDDEN;
				newStatus[Sections.WORK] = DisplayMode.HIDDEN;
				newStatus[Sections.LIFE] = DisplayMode.SHOWN;
				newStatus[Sections.CONTACT] = DisplayMode.HIDDEN;
				return newStatus;
			});
		} else {
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

	const onSwitchSubSection = (subSection: SubSections) => {
		setSubSection(subSection);
	};

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
					<WorkLeftSection subSection={subSection} />
					{/* <div className="work-static-part">
						<div className="work-static-title">
							<strong>Michael Chuang</strong> is a web developer based in
							Taipei, Taiwan.
						</div>
						<div className="work-static-content">
							Having built dashboard systems for clients including Taiwan’s
							top-10 energy firm and top-2 automobile manufacturer, he is
							skilled in developing flexible, versatile, and fully interactive
							web systems.
						</div>
						<div className="work-static-content-links">
							<Link href="">GitHub</Link>
							{'|'}
							<Link href="">LinkedIn</Link>
							{'|'}
							<Link href="">Blog</Link>
						</div>
					</div>
					<div className="work-dynamic-part">
						<div className="work-dynamic-title">
							Situation Room Dashboard System
						</div>
						<div className="work-dynamic-metadata">Internal | 2022</div>
						<div className="work-dynamic-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
							fringilla rutrum massa id tempor.Pellentesque laoreet lorem
							volutpat dictum ultricies. Aenean nec volutpat erat.
						</div>
						<div className="work-dynamic-read-more">Read More_</div>
					</div> */}
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
						<Link href="#work-right-section">
							<div
								className="nav-button"
								onMouseMove={(e: any) => navButtonHoverHandler(e)}
								// onClick={() => {
								// 	rightPanelWorkRef?.current?.scrollIntoView();
								// }}
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
				<div id="work-right-section" ref={rightPanelWorkRef}>
					<WorkRightSection
						scrollPos={scrollPos}
						onSwitchSubSection={onSwitchSubSection}
					/>
					{/* <div className="project">
						<div className="card horizontal">
							<Image src="/images/hdre1.jpg" className="reveal" alt="" fill />
						</div>
						<div className="card vertical">
							<Image
								src="https://images.unsplash.com/photo-1688242688672-c7e1a8fd1e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
								alt=""
								fill
							/>
						</div>
					</div>
					<div className="project">
						<div className="card vertical">
							<Image
								src="https://images.unsplash.com/photo-1683130461728-cf2ab05765c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
								alt=""
								fill
							/>
						</div>
						<div className="card vertical">
							<Image
								src="https://images.unsplash.com/photo-1688242688672-c7e1a8fd1e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
								alt=""
								fill
							/>
						</div>
					</div> */}
				</div>
				<div id="life-right-section" ref={rightPanelLifeRef}>
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
