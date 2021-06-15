module.exports = rawRequest => {

  let parsedObj = {};
  const parsed = rawRequest.split('/n')[0].split(' ');
  const obj = parsed[4].slice(6);

  if(obj.length === 0) {
    parsedObj = {
      'method': `${parsed[0]}`,
      'path': `${parsed[1]}`
    };
  } else {
    parsedObj = {
      'method': `${parsed[0]}`,
      'path': `${parsed[1]}`,
      'body': obj
    };}

  return parsedObj;
};
