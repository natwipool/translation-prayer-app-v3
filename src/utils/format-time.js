export default (secs) => {
  let minutes = Math.floor(secs / 60) || 0;
  let seconds = (secs - minutes * 60).toFixed(0) || 0;

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
};