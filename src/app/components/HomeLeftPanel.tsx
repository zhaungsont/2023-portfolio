import { GetServerSideProps } from 'next';
import TypeIt from 'typeit-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomeLeftPanel = () => {
	return (
		<div>
			<h1 id="title">
				<TypeIt
					options={{
						strings: [
							'Lorem Ipsum',
							'Dos Ame',
							'Fighter Jets Club',
							'Yours Truly',
						],
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
			<div className="sub-content">
				<h3 id="sub-title">Michael Chuang, Web Developer</h3>
				<div id="link-icons">
					<Link href="https://github.com/zhaungsont">
						<FaGithub />
					</Link>
					<Link href="https://www.linkedin.com/in/zhsont/">
						<FaLinkedin />
					</Link>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		props: {},
	};
};

export default HomeLeftPanel;
