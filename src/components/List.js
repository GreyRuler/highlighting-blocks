import Video from './Video';
import Article from './Article';
import PopularityWrapper from './PopularityWrapper';

export default function List(props) {
	return props.list.map(item => {
		switch (item.type) {
			case 'video':
				return (
					PopularityWrapper(item)(Video)
				);

			case 'article':
				return (
					PopularityWrapper(item)(Article)
				);
		}
	});
};
