import { createContext, useState } from "react";

const FavouritesContext = createContext({
	favourites: [],
	totalFavourites: 0,
});

function FavouritesContextProvider(props) {
	const [userFavourites, setUserFavourites] = useState([]);

	const context = {
		favourites: userFavourites,
		totalFavourites: userFavourites.length,
	};

	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	);
}
