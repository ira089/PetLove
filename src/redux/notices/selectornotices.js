export const selectNotices = state => state.notices;
export const selectCurrentPage = state => state.notices.page;
export const selectCurrentTotalPages = state => state.notices.totalPages;
export const selectFavoritesUser = state => state.auth.noticesFavorites;

