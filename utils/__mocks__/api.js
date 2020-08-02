exports.apiGetAllUsers = jest.fn(() => {
  const data = [
    {
      id: 554,
      first_name: 'Phyllys',
      last_name: 'Hebbs',
      email: 'phebbsfd@umn.edu',
      ip_address: '100.89.186.13',
      latitude: 51.5489435,
      longitude: 0.3860497
    },
    {
      id: 31,
      first_name: 'Nolan',
      last_name: 'Castelletto',
      email: 'ncastellettou@yellowbook.com',
      ip_address: '253.133.98.232',
      latitude: 50.3919,
      longitude: 30.368267
    },
    {
      id: 32,
      first_name: 'Lewes',
      last_name: 'Shorten',
      email: 'lshortenv@rediff.com',
      ip_address: '131.105.143.66',
      latitude: 45.020739,
      longitude: 14.6315962
    }
  ];

  return Promise.resolve({ data });
});
