/**
 * Created by ximing on 2018/8/4.
 */

export const stop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
};
/**
 * 检测某个节点是否包含在另一节点中
 * @param a 父节点
 * @param b 子节点
 * @returns {boolean|*}
 */
export function contains(a, b) {
    return (
        a == b ||
        (a && a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16))
    );
}
