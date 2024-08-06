export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const capitalizeFirstLetter = string => {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//   export const optionObj = (arr) => {
//     return arr.map(el => ({
//         value: el,
//         label: capitalizeFirstLetter(el)
//     }))
// }

export const optionObj = arr => {
  const qwe = arr.map(el => ({
    value: el,
    label: capitalizeFirstLetter(el),
  }));

  return [{ value: '', label: 'Show all' }, ...qwe];
};

export const optionObjLoc = arr => {
  return arr.map(el => ({
    value: el._id,
    label: `${el.stateEn}, ${el.countyEn}`,
  }));
};