import {atom} from 'recoil';

export default atom<LayoutState>({
  key: 'layoutState',
  default: {
    headerNavItemsLeft: [
      {
        name: 'Hotel',
        path: 'hotel',
      },
      {
        name: 'Recreation',
        path: 'recreation',
      },
    ],
    headerNavItemsRight: [
      {
        name: 'Journey',
        path: 'journey'
      },
      {
        name: 'Me',
        path: 'me',
        dropdown: true,
        children: [
          {
            name: 'Menber Center',
          },
          {
            name: 'Recreation Order',
          },
          {
            name: 'Holter Order',
          },
          {
            name: 'Logout',
            onClick: () => {
              // @ts-ignore
              window.navigate('/login');
            },
            className: 'logout',
          }
        ]
      },
    ],
    headerNavItemsRightLoggedOut: [
      {
        name: 'Login',
        path: 'login'
      },
    ],
    navMenuItems: [
      {
        name: 'East Asia',
        children: [
          {
            name: 'Hongkong & Aomen',
            children: [
              {name: 'Hongkong'},
              {name: 'Aomen'},
            ],
          },
          {
            name: 'Taiwan',
            children: [
              {name: 'Taichung'},
              {name: 'New Taipei'},
              {name: 'Kaohsiung '},
              {name: 'Taipei'},
              {name: 'Taoyuan'},
              {name: 'Tainan'},
              {name: 'Changhua'},
              {name: 'Pingtung'},
            ],
          },
          {
            name: 'Japan',
            children: [
              {name: 'Hokkaido'},
              {name: 'Nara-ken'},
              {name: 'Osaka'},
              {name: 'Yokohama'},
              {name: 'Tokyo'},
              {name: 'Kyoto'},
              {name: 'Kobe'},
              {name: 'Sapporo'},
            ],
          },
        ],
      },
      {
        name: 'South Asia/Middle East Asia',
        children: [
          {
            name: 'South Asia',
            children: [
              {name: 'Nepal'},
              {name: 'India'},
              {name: 'Pakistan'},
              {name: 'Bangladesh'},
              {name: 'Sri Lanka'},
              {name: 'Maldives'},
            ],
          },
          {
            name: 'Middle East Asia',
            children: [
              {name: 'Egypt'},
              {name: 'Israel '},
              {name: 'Jorda'},
              {name: 'Qatar'},
              {name: 'Saudi Arabia'},
              {name: 'Bahrain'},
              {name: 'Lebanon'},
              {name: 'Kuwait'},
            ],
          },
        ],
      },
      {
        name: 'Oceania',
        children: [
          {
            name: 'Australian',
            children: [
              {name: 'Canberra'},
              {name: 'Melbourne'},
              {name: 'Sydney'},
              {name: 'Geelong'},
              {name: 'Adelaide'},
              {name: 'Brisbane'},
              {name: 'Townsville'},
              {name: 'Darwin'},
            ],
          },
          {
            name: 'New Zealand',
            children: [
              {name: 'Wellington'},
              {name: 'Auckland'},
              {name: 'Christchurch'},
              {name: 'Dunedin'},
              {name: 'Hamilton'},
              {name: 'Wanganui'},
              {name: 'Invercargill'},
              {name: 'Queenstown'},
            ],
          },
        ],
      },
      {
        name: 'Europe',
        children: [
          {
            name: 'England',
            children: [
              {name: 'London'},
              {name: 'Birmingham'},
              {name: 'Bristol'},
              {name: 'Leeds'},
              {name: 'Liverpool'},
              {name: 'Manchester'},
              {name: 'Newcastle'},
              {name: 'Nottingham'},
              {name: 'Sheffield'},
              {name: 'Edinburgh'},
              {name: 'Glasgow'},
              {name: 'Cardiff'},
              {name: 'Belfast'},
              {name: 'Cambridge'},
              {name: 'Oxford'},
              {name: 'Portsmouth'},
              {name: 'Brighton'},
              {name: 'Bath'},
            ],
          },
          {
            name: 'Ireland',
            children: [
              {name: 'Dublin'},
              {name: 'Cork'},
              {name: 'Galway'},
              {name: 'Limerick'},
              {name: 'Waterford'},
            ],
          },
          {
            name: 'France',
            children: [
              {name: 'Paris'},
              {name: 'Marseille'},
              {name: 'Lyon'},
              {name: 'Toulouse'},
              {name: 'Nice'},
              {name: 'Nantes'},
              {name: 'Strasbourg'},
              {name: 'Montpellier'},
            ],
          },
        ],
      },
      {
        name: 'North America',
        children: [
          {
            name: 'United States of America',
            children: [
              {name: 'New York'},
              {name: 'Los Angeles'},
              {name: 'Chicago'},
              {name: 'Philadelphia'},
              {name: 'Houston'},
              {name: 'San Francisco'},
              {name: 'Detroit'},
              {name: 'Boston'},
              {name: 'Washington'},
            ],
          },
          {
            name: 'Canada',
            children: [
              {name: 'Toronto'},
              {name: 'Montreal'},
              {name: 'Vancouver'},
              {name: 'Calgary'},
              {name: 'Ottawa'},
            ],
          },
          {
            name: 'Mexico',
            children: [
              {name: 'Ciudad de México'},
              {name: 'Guadalajara'},
              {name: 'Monterrey'},
              {name: 'León'},
              {name: 'Puebla'},
            ],
          },
        ],
      },
    ]
  },
});
