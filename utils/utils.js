const haversine = require('haversine');

exports.withinDistanceLondon = person => {
  const { latitude, longitude } = person;
  const londonCoordinates = { latitude: '51.514248', longitude: '-0.093145' };

  return haversine({ latitude, longitude }, londonCoordinates, {
    threshold: 50,
    unit: 'mile'
  });
};
