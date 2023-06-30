'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import TypeIt from 'typeit-react';
import BackgroundGraphics from '@/app/BackgroundGraphics';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

import { Roboto_Mono } from 'next/font/google';
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
	const navButtonHoverHandler = (e: any) => {
		const rect = e.target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		console.log(x);
		document.documentElement.style.setProperty('--mouse-x', `${x}px`);
		document.documentElement.style.setProperty('--mouse-y', `${y}px`);
	};

	useEffect(() => {}, []);
	return (
		<main id="landing-page">
			<BackgroundGraphics />
			<div id="main-left-section">
				<div id="landing-zone">
					<h1 id="title">
						<TypeIt
							options={{
								strings: ['Lorem Ipsum', 'Dos Ame'],
								// speed: 10,
								waitUntilVisible: true,
								cursorChar: '_',
								speed: 150,
								cursorSpeed: 1250,
								breakLines: false,
								deleteSpeed: 125,
								nextStringDelay: [5000, 0],
								loop: true,
							}}
						/>
					</h1>
					<h3 id="sub-title">Michael Chuang, Web Developer</h3>
					<div id="link-icons">
						<Link href="https://github.com/zhaungsont">
							<FaGithub />
							<FaLinkedin />
						</Link>
					</div>
				</div>
			</div>
			<div id="main-right-section">
				<div id="landing-page-nav">
					<div id="nav-buttons-group" className={robotoMono.className}>
						<div
							className="nav-button"
							onMouseMove={(e: any) => navButtonHoverHandler(e)}
						>
							<div className="nav-button-text">Work</div>
						</div>
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
				<div>
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
