type User = {
  name: string;
  age: number;
  premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

// ここにコードを足す

// my answer
// const lines = data.match(/.+/g);
// const users: User[] = [];
// if (lines !== null) {
//   for (const line of lines) {
//     const userData = line.split(',');
//     if (userData !== null) {
//       users.push({
//         name: userData[0],
//         age: Number(userData[1]),
//         premiumUser: Boolean(userData[2] == "1" ? 1 : 0),
//       });
//     }
//   }
// }

// solution
// const users: User[] = [];
// const lines = data.split('\n');
// for (const line of lines) {
//   if (line === '') {
//     continue;
//   }
//   const [name, ageString, premiumUserString] = line.split(',');
//   const age = Number(ageString);
//   const premiumUser = premiumUserString === '1';

//   users.push({
//     name: name,
//     age: age,
//     premiumUser: premiumUser,
//   });
// }

// other solution
const users: User[] = data.split('\n')
  .filter(line => line !== '')
  .map(line => {
    const [name, ageString, premiumUserString] = line.split(',');

    return {
      name: name,
      age: Number(ageString),
      premiumUser: premiumUserString === '1',
    }
  });

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
  }
}