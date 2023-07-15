import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { SubSections } from '@/app/models/enums';

interface WorkRightSectionProps {
	subSection: SubSections;
}

const WorkLeftSection = (props: WorkRightSectionProps) => {
	const subSection = props.subSection;

	const subSectionTitles = {
		'-1': '--',
		'0': 'Situation Room Dashboard System',
		'2': 'Project 2',
	} as any;

	return (
		<>
			<div className="work-static-part">
				<div className="work-static-title">
					<strong>Michael Chuang</strong> is a web developer based in Taipei,
					Taiwan.
				</div>
				<div className="work-static-content">
					Having built dashboard systems for clients including Taiwan’s top-10
					energy firm and top-2 automobile manufacturer, he is skilled in
					developing flexible, versatile, and fully interactive web systems.
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
				{/* HDRE Dashboard */}
				<div
					className={`displaying-${
						subSection === SubSections.NONE
							? 'none'
							: subSection === SubSections.HDRE
							? true
							: false
					}`}
				>
					<div className="work-dynamic-title">
						Situation Room Dashboard System
					</div>
					<div className="work-dynamic-metadata">Internal | 2022</div>
					<div className="work-dynamic-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						fringilla rutrum massa id tempor.Pellentesque laoreet lorem volutpat
						dictum ultricies. Aenean nec volutpat erat.
					</div>
					<div className="work-dynamic-read-more">Read More_</div>
				</div>
				<div
					className={`displaying-${
						subSection === SubSections.NONE
							? 'none'
							: subSection === SubSections.PROJECT_2
							? true
							: false
					}`}
				>
					<div className="work-dynamic-title">Project 2</div>
					<div className="work-dynamic-metadata">Public | 2022</div>
					<div className="work-dynamic-content">
						Aenean nec volutpat erat. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. In fringilla rutrum massa id tempor.Pellentesque
						laoreet lorem volutpat dictum ultricies.
					</div>
					<div className="work-dynamic-read-more">Read More_</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		props: {},
	};
};

export default WorkLeftSection;
