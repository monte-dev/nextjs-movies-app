import { getMediaCredits } from '@/actions/getMediaCredits';
import TvClient from './TvClient';
import { getSeriesDetail } from '@/actions/getSeries';

interface SeriesPageParams {
	params: { tvId: number };
}

const SeriesPage = async ({ params }: SeriesPageParams) => {
	const series = await getSeriesDetail(params.tvId);
	const credits = await getMediaCredits(params.tvId, true);

	return (
		<div>
			<TvClient series={series} credits={credits} />
		</div>
	);
};
export default SeriesPage;
