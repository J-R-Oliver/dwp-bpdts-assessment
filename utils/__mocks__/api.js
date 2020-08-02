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

exports.apiGetUsersLondon = jest.fn(() => {
  const data = [
    {
      id: 135,
      first_name: 'Mechelle',
      last_name: 'Boam',
      email: 'mboam3q@thetimes.co.uk',
      ip_address: '113.71.242.187',
      latitude: -6.5115909,
      longitude: 105.652983
    },
    {
      id: 396,
      first_name: 'Terry',
      last_name: 'Stowgill',
      email: 'tstowgillaz@webeden.co.uk',
      ip_address: '143.190.50.240',
      latitude: -6.7098551,
      longitude: 111.3479498
    },
    {
      id: 520,
      first_name: 'Andrew',
      last_name: 'Seabrocke',
      email: 'aseabrockeef@indiegogo.com',
      ip_address: '28.146.197.176',
      latitude: '27.69417',
      longitude: '109.73583'
    }
  ];

  return Promise.resolve({ data });
});
