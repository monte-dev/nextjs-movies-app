import TvClient from './TvClient';
import { getSeriesDetail } from '@/actions/getSeries';

interface SeriesPageParams {
	params: { tvId: number };
}

const SeriesPage = async ({ params }: SeriesPageParams) => {
	const series = await getSeriesDetail(params.tvId);
	return (
		<div>
			<TvClient series={series} />
		</div>
	);
};
export default SeriesPage;
