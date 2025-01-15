import { BinarySearchTree } from '../BinarySearchTree.js';

function recordAllData(bst) {
  const out = [];
  bst.each((data) => out.push(data));
  return out;
}

describe('BinarySearchTree', () => {
  describe('Node data retention', () => {
    it('data is retained', () => {
      expect(new BinarySearchTree(4).data).toEqual(4);
    });
  });

  describe('Insert data at proper node', () => {
    it('smaller number at left node', () => {
      const bst = new BinarySearchTree(4);
      bst.insert(2);
      expect(bst.data).toEqual(4);
      expect(bst.left.data).toEqual(2);
    });

    it('same number at left node', () => {
      const bst = new BinarySearchTree(4);
      bst.insert(4);
      expect(bst.data).toEqual(4);
      expect(bst.left.data).toEqual(4);
    });

    it('greater number at right node', () => {
      const bst = new BinarySearchTree(4);
      bst.insert(5);
      expect(bst.data).toEqual(4);
      expect(bst.right.data).toEqual(5);
    });
  });

  it('can create complex tree', () => {
    const bst = new BinarySearchTree(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

    expect(bst.data).toEqual(4);
    expect(bst.left.data).toEqual(2);
    expect(bst.left.left.data).toEqual(1);
    expect(bst.left.right.data).toEqual(3);
    expect(bst.right.data).toEqual(6);
    expect(bst.right.left.data).toEqual(5);
    expect(bst.right.right.data).toEqual(7);
  });

  describe('Sorting data', () => {
    it('can sort single number', () => {
      expect(recordAllData(new BinarySearchTree(2))).toEqual([2]);
    });

    it('can sort if second number is smaller than first', () => {
      const bst = new BinarySearchTree(2);
      bst.insert(1);
      expect(recordAllData(bst)).toEqual([1, 2]);
    });

    it('can sort if second number is same as first', () => {
      const bst = new BinarySearchTree(2);
      bst.insert(2);
      expect(recordAllData(bst)).toEqual([2, 2]);
    });

    it('can sort if second number is greater than first', () => {
      const bst = new BinarySearchTree(2);
      bst.insert(3);
      expect(recordAllData(bst)).toEqual([2, 3]);
    });

    it('can sort complex tree', () => {
      const bst = new BinarySearchTree(2);
      bst.insert(1);
      bst.insert(3);
      bst.insert(6);
      bst.insert(7);
      bst.insert(5);
      expect(recordAllData(bst)).toEqual([1, 2, 3, 5, 6, 7]);
    });
  });
});
