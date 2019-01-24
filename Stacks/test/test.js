const { expect } = require('chai');
const stackFn = require('../index');

describe('Stack tests', () => {
  const stack = stackFn();

  describe('push function', () => {
    it('Push elements to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);
      stack.push(6);
      stack.push(7);
      stack.push(8);
      stack.push(9);
      stack.push(10);
    });
  });

  describe('size function', () => {
    it('Should give Size of stack', () =>
      expect(stack.size()).to.equal(10));
  })

  describe('isEmpty function', () => {
    it('Should Return a Boolen if stack is empty', () =>
      expect(stack.isEmpty()).to.equal(false));
  })

  describe('peek function', () => {
    it('Should return top of Stack', () =>
      expect(stack.peek()).to.equal(10));
  })

  describe('pop function', () => {
    it('Should remove top of Stack', () =>
      expect(stack.pop()).to.equal(10));
  })

  describe('remove popped function', () => {
    it('Should remove half the stack if size is half the stack', () => {
      stack.pop()
      stack.pop()
      stack.pop()
      stack.pop()
      expect(stack.print()).to.equal([1,2,3,4,5]);

    })
  })

  describe('clear function', () => {
    it('Should clear stack', () => {
      stack.clear()
      expect(stack.peek()).to.equal(null);
      expect(stack.pop()).to.equal(null);
      expect(stack.length()).to.equal(0);
      expect(stack.isEmpty()).to.equal(true);
    });
  });
})