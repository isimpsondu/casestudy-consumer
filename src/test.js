const employeeData = [
  {
    id: 1,
    name: 'Alex Example',
    work_email: 'alex@example.org',
    city: 'Sydney',
  },
  {
    id: 2,
    name: 'Grace Example',
    work_email: 'grace@example.org',
    city: 'San Francisco',
  },
  {
    id: 3,
    name: 'Chien Example',
    work_email: 'chien@example.org',
    city: 'Berlin',
  },
];

const findByField = (city) => employeeData.filter(i => i.city === city);

console.log(findByField('Sydney'));
