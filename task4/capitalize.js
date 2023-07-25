function capitalize(string) {
  if (typeof string !== 'string' || string.trim().length === 0) {
    throw new Error('Input must be a non-empty string.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
