import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
	const favouritesContext = useContext(FavouritesContext);

	let content;

	if (favouritesContext.totalFavourites === 0) {
		content = <p>You currently have no favourite meetups.</p>;
	} else {
		content = <MeetupList meetups={favouritesContext.favourites} />;
	}

	return (
		<section>
			<h1>My Favourites</h1>
			{content}
		</section>
	);
}
export default Favourites;
