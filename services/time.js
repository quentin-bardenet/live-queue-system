const timeConverter = (seconds) => {
  const hours = parseInt(seconds / 3600);
  const minutes = parseInt((seconds % 3600) / 60);
  const secs = parseInt((seconds % 3600) % 60);

  if (seconds > 3600) {
    return `${hours}:${minutes}:${secs}`;
  } else if (seconds > 60) {
    return `${minutes}:${secs}`;
  } else {
    return `${secs}`;
  }
};

export default timeConverter;
