module.exports = rawRequest => {

  let parsedObj = {};
  const parsed = rawRequest.split('/n')[0].split(' ');
  const split = parsed[4].slice(6);

  if(split.length === 0) {
    parsedObj = {
      'method': `${parsed[0]}`,
      'path': `${parsed[1]}`
    };
  } else {
    parsedObj = {
      'method': `${parsed[0]}`,
      'path': `${parsed[1]}`,
      'body': split
    };}

  return parsedObj;
};
