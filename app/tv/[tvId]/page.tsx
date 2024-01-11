import { getMediaCredits } from '@/actions/getMediaCredits';
import TvClient from './TvClient';
import { getSeriesDetail } from '@/actions/getSeries';
import { SeriesCredit } from '@/types/tmdb_types';

interface SeriesPageParams {
	params: { tvId: number };
}

const SeriesPage = async ({ params }: SeriesPageParams) => {
	const series = await getSeriesDetail(params.tvId);
	const credits: SeriesCredit = await getMediaCredits(params.tvId, false);

	return (
		<div>
			<TvClient series={series} credits={credits} />
		</div>
	);
};
export default SeriesPage;
