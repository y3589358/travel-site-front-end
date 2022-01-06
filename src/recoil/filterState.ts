import {atom} from 'recoil';

export default atom<FilterState>({
  key: 'filterState',
  default: {
    locationFilterItems: [
      {
        label: '东南亚',
        value: 'south-east-asia',
      },
      {
        label: '东亚',
        value: 'south-asia',
        children: [
          {
            label: '香港',
            value: 'hk',
          },
          {
            label: '澳门',
            value: 'macao',
          },
          {
            label: '台湾',
            value: 'taiwan',
          },
          {
            label: '中国',
            value: 'china',
          }
        ]
      }
    ],
    categoryFilterItems: [
      {
        label: '景点门票 & 表演',
        value: 'ticket',
        children:[
          {
            label: '景点＆缆车',
            value: 'view-car',
          },
          {
            label: '历史景点',
            value: 'history-view',
          }
        ]
      },
      {
        label: '一日游 & 小团游',
        value: 'one-day',
        children:[
          {
            label:"徒步＆自行车观光",
            value:"walk-bike"
          },
          {
            label:"空中观光",
            value:"sky-view"
          }
        ]
      },
      {
        label: '特色活动 & 体验',
        value: 'featured',
      },
      {
        label: '地道美食',
        value: 'food',
      },
      {
        label: '当地交通 & 旅行服务',
        value: 'travel',
      },
    ],
    languageFilterItems: [
      {
        label: '英文',
        value: 'english',
      },
      {
        label: '普通话',
        value: 'mandarin',
      },
      {
        label: '日语',
        value: 'japanese',
      },
      {
        label: '粤语',
        value: 'cantonese',
      },
    ],
    dates: [null, null],
  }
});
