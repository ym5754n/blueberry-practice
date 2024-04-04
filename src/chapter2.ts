{
  const greeting: string = "Hello, ";
  const target: string = "world!";
  console.log(greeting + target);

  const width1 = 5;
  const width2 = 8;
  const height: number = 3;
  const area = (width1 + width2) * height / 2;
  console.log(area);

  const binary = 0b1010;
  const octal = 0o755;
  const hexadecimal = 0xff;
  console.log(binary, octal, hexadecimal);

  const big = 1e8;
  const small = 4e-5;
  console.log(big, small);

  const million = 1_000_000;
  console.log(million);

  const bignum: bigint = (123n + 456n) * 2n;
  console.log(bignum);

  const result = 5n / 2n;
  console.log(result);

  const str1: string = "Hello";
  const str2: string = 'world!';
  console.log(`${str1}, ${str2}`);

  const message: string = `Hello
  world!`;
  console.log(message);

  const no: boolean = false;
  const yes: boolean = true;
  console.log(yes, no);

  const val1 = null;
  const val2 = undefined;
  console.log(val1, val2);
}
