/**
 * Page 1
 * 
 * 欧几里得算法
 * 计算两个非负整数 p 和 q 的最大公约数：
 * 若 q 是 0，则最大公约数为 p。
 * 否则，将 p 除以 q 得到余数 r，p 和 q 的最大公约数即为 q 和 r 的最大公约数。
 */

const euclid = (p, q) => {
  if(q === 0) return p;
  let r = p % q;
  return euclid(q, r);
}

export default euclid;
