export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectIsLoadin = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

export const selectFaforitesId = state => state.auth.noticesFavoritesId;

export const selectPets = state => state.auth.pets;

export const selectViewed = state => state.auth.noticesViewed;

export const selectFaforites = state => state.auth.noticesFavorites;