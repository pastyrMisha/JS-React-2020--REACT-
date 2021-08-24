export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});

// export const rnd = (value) => ({type: 'RND', value});
export const rnd = () => {
    return {type: 'RND', value: Math.floor(Math.random() * 10)}
 };
