var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const gcd = /* @__PURE__ */ __name((a, b) => {
  return b === 0 ? a : gcd(b, a % b);
}, "gcd");
const lcm = /* @__PURE__ */ __name((a, b) => {
  return Math.abs(a * b) / gcd(a, b);
}, "lcm");
function computeUnionBounds(rectangles) {
  const n = rectangles.length;
  if (n === 0) {
    return null;
  }
  const r0 = rectangles[0];
  let minX = r0[0];
  let minY = r0[1];
  let maxX = minX + r0[2];
  let maxY = minY + r0[3];
  for (let i = 1; i < n; i++) {
    const r = rectangles[i];
    const x1 = r[0];
    const y1 = r[1];
    const x2 = x1 + r[2];
    const y2 = y1 + r[3];
    if (x1 < minX) minX = x1;
    if (y1 < minY) minY = y1;
    if (x2 > maxX) maxX = x2;
    if (y2 > maxY) maxY = y2;
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
__name(computeUnionBounds, "computeUnionBounds");
export {
  computeUnionBounds as c,
  lcm as l
};
//# sourceMappingURL=mathUtil-CTARWQ-l.js.map
