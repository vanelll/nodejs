/*
class !어레이! {
  static 더하기제로 = array => {
    const x = array.map(x => x * 10);
    return x;
  };
  static 50보다큰 수 = array => {
    const x = array.filter(x => x > 50);
    return x;
  };
  static 첫번째지우기 = array => {
    const x = array.slice(1);
    return x;
  };
  static 다더하기 = x => {
    const reducer = (acc, value) => acc + value;
    return x.reduce(reducer);
  };
  static 숫자쪼개기 = x => {
    const xx = x.toString().split("");
    return xx;
  };
}

output: 

[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
[60, 70, 80, 90, 100]
[70, 80, 90, 100]
340
["3", "4", "0"]

*/