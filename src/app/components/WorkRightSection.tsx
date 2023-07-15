'use client';

// import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { SubSections } from '@/app/models/enums';

interface WorkRightSectionProps {
	scrollPos: number;
	onSwitchSubSection: (subSections: SubSections) => void;
}

const WorkRightSection = (props: WorkRightSectionProps) => {
	const scrollPos = props.scrollPos;
	const onSwitchSubSection = props.onSwitchSubSection;
	const projectHDRERef = useRef(null) as any;
	const project2Ref = useRef(null) as any;
	const project3Ref = useRef(null) as any;

	const hdreRect = projectHDRERef?.current
		? projectHDRERef?.current?.getBoundingClientRect()
		: { top: 0, bottom: 0 };

	const project2Rect = project2Ref?.current
		? project2Ref?.current?.getBoundingClientRect()
		: { top: 0, bottom: 0 };

	if (hdreRect.top < scrollPos && scrollPos < hdreRect.bottom) {
		onSwitchSubSection(SubSections.HDRE);
	} else if (project2Rect.top < scrollPos && scrollPos < project2Rect.bottom) {
		onSwitchSubSection(SubSections.PROJECT_2);
	} else {
		onSwitchSubSection(SubSections.NONE);
	}

	return (
		<>
			<div className="project" ref={projectHDRERef}>
				<div className="card horizontal">
					<Image
						src="/images/hdre1.jpg"
						className={
							hdreRect.top < scrollPos && scrollPos < hdreRect.bottom
								? 'reveal'
								: ''
						}
						alt=""
						fill
					/>
				</div>
				<div className="card vertical">
					<Image
						src="https://images.unsplash.com/photo-1688242688672-c7e1a8fd1e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
						className={
							hdreRect.top < scrollPos && scrollPos < hdreRect.bottom
								? 'reveal'
								: ''
						}
						alt=""
						fill
					/>
				</div>
			</div>
			<div className="project" ref={project2Ref}>
				<div className="card vertical">
					<Image
						src="https://images.unsplash.com/photo-1683130461728-cf2ab05765c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
						className={
							project2Rect.top < scrollPos && scrollPos < project2Rect.bottom
								? 'reveal'
								: ''
						}
						alt=""
						fill
					/>
				</div>
				<div className="card vertical">
					<Image
						src="https://images.unsplash.com/photo-1688242688672-c7e1a8fd1e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
						className={
							project2Rect.top < scrollPos && scrollPos < project2Rect.bottom
								? 'reveal'
								: ''
						}
						alt=""
						fill
					/>
				</div>
			</div>
		</>
	);
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	return {
// 		props: {},
// 	};
// };

export default WorkRightSection;
