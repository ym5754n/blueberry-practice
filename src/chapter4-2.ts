{
  // 4.2.2
  type F = (repeatNum: number) => string;
  const xRepeat: F = (num: number) => "x".repeat(num);

  // 4.2.5
  type MyFunc = {
    isUsed?: boolean;
    (arg: number): void;
  }
  const double: MyFunc = (arg: number) => {
    console.log(arg * 2);
  }
  double.isUsed = true;
  double(1000);
}