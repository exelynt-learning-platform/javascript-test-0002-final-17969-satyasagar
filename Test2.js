let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let s = 0; s < i; s++) {
    row += " ";
  }

  let num = 1;
  for (let j = 0; j < n - i; j++) {
    row += num + " ";
    num = (num * (n - i - j - 1)) / (j + 1);
  }

  for (let j = n - i - 2; j >= 0; j--) {
    if (j === 0) row += "1";
    else row += row.trim().split(" ")[j] + " ";
  }

  console.log(row.trim());
}
