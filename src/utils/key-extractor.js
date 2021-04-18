export const keyExtractor = (...params) =>
    ['propus', 'loop', ...params].filter(Boolean).join('-');
