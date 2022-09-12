/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} target
 * @return {number}
 */
class Solution {
  minTime(root, target) {
    //code here

    let m = new Map();
    let res = parent(root, target);
    function parent(root, target) {
      let res;
      let q = [];
      q.push(root);
      while (q.length > 0) {
        let temp = q.shift();
        if (temp.key == target) {
          res = temp;
        }

        if (temp.left != null) {
          m.set(temp.left, temp);
          q.push(temp.left);
        }

        if (temp.right != null) {
          m.set(temp.right, temp);
          q.push(temp.right);
        }
      }
      return res;
    }

    return solve(root, m, res);
    function solve(root, m, res) {
      let q = [];
      q.push(res);
      let vis = new Map();
      vis.set(res, 1);
      let max = 0;
      while (q.length > 0) {
        let no = q.length;
        let fl = 0;
        for (let i = 0; i < no; i++) {
          let temp = q.shift();

          if (temp.left != null && !vis.has(temp.left)) {
            fl = 1;
            vis.set(temp.left, 1);
            q.push(temp.left);
          }

          if (temp.right != null && !vis.has(temp.right)) {
            fl = 1;
            // console.log(m.get(temp).key);
            vis.set(temp.right, 1);
            q.push(temp.right);
          }

          // console.log("r",m.has(temp),vis.has(m.get(temp)),m.get(temp));
          if (m.has(temp) && !vis.has(m.get(temp))) {
            // console.log("inside up",q);
            //console.log(m.get(temp).key);
            fl = 1;
            vis.set(m.get(temp), 1);
            q.push(m.get(temp));
          }
        }
        if (fl) max++;
      }
      //console.log(vis);
      return max;
    }
  }
}
