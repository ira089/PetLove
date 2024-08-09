export const selectNotices = state => state.notices;
export const selectCurrentPage = state => state.notices.page;
export const selectCurrentTotalPages = state => state.notices.totalPages;
export const selectFavoritesUser = state => state.auth.noticesFavorites;

// export const selectNoticesFavorites = state => {
//     const {notices} = selectNotices(state);
//     const favoritesUser = selectFavoritesUser(state);
//     if(!favoritesUser.length) {
//         return
//     }
//     const noticesFavorites = notices.filter(notice => favoritesUser.includes(notice.id));
//     return noticesFavorites

// }