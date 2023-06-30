import { GetServerSideProps } from 'next';

const Test = () => {
	return <div>test ggg</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		props: {},
	};
};

export default Test;
