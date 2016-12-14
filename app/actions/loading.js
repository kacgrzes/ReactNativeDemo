export const LOADING_START = 'LOADING_START';
export const LOADING_STOP = 'LOADING_STOP';

export const startLoading = () => {
  console.log('starting loading');
  return {
    type: LOADING_START
  };
};

export const stopLoading = () => {
  console.log('stoping loading');
  return {
    type: LOADING_STOP
  };
};