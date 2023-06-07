import Popular from './Popular';
import New from './New';

export default function PopularityWrapper(item) {
	if (item.views > 1000) {
		return Component => <Popular><Component {...item}/></Popular>
	} else if (item.views < 100) {
		return Component => <New><Component {...item}/></New>
	} else {
		return Component => <Component {...item}/>
	}
}
