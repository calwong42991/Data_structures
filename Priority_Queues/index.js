const priorityQueue = () => {
  let elements = [];
  let offset = 0;
  let priorities = {};

  const size = () => elements.length;

  const isEmpty = () => elements.length === 0;


  const toArray = () => {
    let output = [];

    let pQkeys = Object.keys(priorities);
    for(let i = offset; i < pQkeys.length; i++){
      output.push(elements[priorities[pQkeys[i]]]);
    }
    return output;
  };

  const clear = () => {
    elements = [];
    offset = 0;
    priorities = {};
  };

  const front = () => {
    if(!isEmpty()){
      let pQkeys = Object.keys(priorities);
      let firstElementIndex = priorities[pQkeys[offset]];
      return elements[firstElementIndex];
    }
  };

  const back = () => {};

  const enqueue = (el, priority) => {
    if(Number.isNaN(+priority) || priority < 1){
      throw new Error(`Priority should be a positive number`);
    }

    elements.push(el);
    priorities[priority] = elements.length - 1;

  };

  const dequeue = () => {
    if(!isEmpty()){
      const first = front();
      offset += 1;
      if(offset * 2 >= size()){
        const pQkeys = Object.keys(priorities);
        const els = [];
        const prs = {};
        for(let i = offset; i < pQkeys.length; i++){
          els.push(elements[priorities[pQkeys[i]]]);
          prs[pQkeys[i]] = els.length - 1;
        }
        elements = els;
        priorities = prs;
        offset = 0;
      }
      return first;
    }
    return null;
  };

  return {
    size,
    isEmpty,
    toArray,
    clear,
    front,
    back,
    enqueue,
    dequeue
  }
}

module.exports = priorityQueue;