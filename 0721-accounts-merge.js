/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const parents = {};
  const email2name = {};

  const find = (x) => {
    if (parents[x] !== x) {
      parents[x] = find(parents[x]);
    }
    return parents[x];
  };
  const union = (x, y) => {
    parents[find(x)] = find(y);
  };

  for (let i = 0; i < accounts.length; i++) {
    let accountArr = accounts[i];
    console.log(`going thru account number ${i}, ${accountArr}`);
    for (let j = 1; j < accountArr.length; j++) {
      if (!parents[accountArr[j]]) {
        console.log(`email ${accountArr[j]} is not in the array, add it there`);
        parents[accountArr[j]] = accountArr[j];
      }

      // just so i am able to add names to the emails at the end
      email2name[accountArr[j]] = accountArr[0];
      union(accountArr[j], accountArr[1]);
      console.log(`this is the new email2name`)
      console.log(email2name);
      console.log(`this is how parents look like now`)
      console.log(parents)
    }

  }

  const emails = {};
  for (const email of Object.keys(parents)) {
    console.log(`for this email ${email}`);
    const parent = find(email);
    console.log(`finding parent ${parent}`)
    if (parent in emails) {
      console.log(`already in emails, only push`)
      emails[parent].push(email);
    } else {
      console.log(`havent seen this one, create`)
      emails[parent] = [email];
    }
    console.log(`this is how the new email looks like`);
    console.log(emails);
  }

  return Object.entries(emails).map(([email, x]) => {
    return [email2name[email], ...x.sort()]
  });
};




const accounts = [
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"]]


console.log(accountsMerge(accounts))