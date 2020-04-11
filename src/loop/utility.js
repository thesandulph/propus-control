export const keyExtractor = (...params) =>
    ['propus', 'control', 'loop', ...params].flat().filter(Boolean).join('-');
