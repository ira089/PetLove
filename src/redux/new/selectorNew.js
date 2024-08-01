export const selectNews = state => state.new;
export const selectCurrentPage = state => state.new.page;
export const selectCurrentTotalPages = state => state.new.totalPages;
export const selectSearch = state => state.search.query;
// export const selectSearch = state => {
//     console.log(state)
// }
export const selectPage = state => state.search.page;