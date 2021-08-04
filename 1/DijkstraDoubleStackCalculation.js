/**
 * Page 79
 * 
 * Dijkstra 的双栈算术表达式求值算法
 * 表达式由括号、运算符和操作数（数字）组成。我们根据以下 4 种情况从左到右逐个将这些实体送入栈处理：
 * 将操作数压人操作数栈;
 * 将运算符压入运算符栈;
 * 忽略左括号;
 * 在遇到右括号时，弹出一个运算符，弹出所需数量的操作数，并将运算符和操作数的运算结果压人操作数栈。
 */

const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolArr = ['+', '-', '*', '/'];

// 找到字符串开头连续的数字并返回
const getCompleteNum = (str) => {
  let returnCode = '';
  let i = 0;
  while(i < str.length && numArr.includes(str[i])){
    returnCode += str[i];
    i++;
  }
  if (returnCode === '') return undefined;
  return [Number(returnCode), i];
}

// 计算
const DijkstraDoubleStackCalculation = (arithmeticStr) => {
  // 数据栈
  let dataStack = [];
  // 符号栈
  let symbolStack = [];
  for(let j = 0; j < arithmeticStr.length; j++) {
    // 当前字符是符号
    if(symbolArr.includes(arithmeticStr[j])) {
      symbolStack.push(arithmeticStr[j]);
    }

    // 当前字符是数字
    if(numArr.includes(arithmeticStr[j])) {
      const [number, length] = getCompleteNum(arithmeticStr[j]);
      dataStack.push(number);
      j = j + length - 1;
    }

    // 当前字符是 `)`
    if(arithmeticStr[j] === ')') {
      let midNum = 0;
      let num2 = dataStack.pop();
      let num1 = dataStack.pop();
      switch (symbolStack.pop()) {
        case '+':
          midNum = num1 + num2;
          break;
        case '*':
          midNum = num1 * num2;
          break;
        case '-':
          midNum = num1 - num2;
          break;
        case '/':
          midNum = num1 / num2;
          break;
      }
      dataStack.push(midNum);
    }
  }

  return dataStack.pop();
}

export default DijkstraDoubleStackCalculation;

/**
 * 注：
 * 此实现基于原书的实现方案增加了多位数的计算，如现在可以计算 (12*5)；
 * 但仍然存在必须用括号包裹的问题，如，无法计算 1+2+3，但可计算 ((1+2)+3)。
 */
