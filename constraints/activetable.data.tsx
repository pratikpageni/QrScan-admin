interface ActiveTableInterface {
  tableName: string;
  time: string;
  noOfOrder: string;
}

const activetable: ActiveTableInterface[] = [
  {
    tableName: 'Sagarmatha',
    noOfOrder: '5',
    time: '12:45',
  },
  {
    tableName: 'Fistail',
    noOfOrder: '7',
    time: '12:45',
  },
  {
    tableName: 'Annapurna',
    noOfOrder: '10',
    time: '11:50',
  },
  {
    tableName: 'Ganesh Himal',
    noOfOrder: '12',
    time: '1:00',
  },
  {
    tableName: 'Manaslu',
    noOfOrder: '3',
    time: '5:12',
  },
];

export default activetable;
