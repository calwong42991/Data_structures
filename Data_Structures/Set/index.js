const set = () => {

  let elements = {};
  let count = 0;

  const size = () => count;

  const isEmpty = () => count === 0;

  const contains = (el) => elements[el] === true;

  const add = (el) => {
    if(!elements[el]){
      elements[el] = true;
      count += 1;
    }
  };

  const remove = (el) => {
    if(contains(el)){
      elements[el] = false;
      count -= 1;
    }
  };

  const toArray = () => {
    let els = [];
    Object.keys(elements).forEach((el) => {
      if(contains(el)){
        els.push(Number.isNaN(+el) ? el : +el);
      }
    })

  };

  const union = (s) => {
    const unionSet = set();
    Object.keys(elements).forEach((el) => {
      unionSet.add(el);
    })
    s.toArray().forEach(unionSet.add);
    return unionSet;
  };

  const intersect = (s) => {
    const intersectSet = set();
    Object.keys(elements).forEach((el) => {
      if(contains(el) && s.contains(el)){
        intersectSet.add(el);
      }
    })
    return intersectSet;
  };

  const diff = (s) => {
    const diffSet = set();
    Object.keys(elements).forEach((el) => {
      if(contains(el) && !s.contains(el)){
        diffSet.add(el);
      }
    })
    return diffSet;
  };

  const isSubsetOf = (s) => {
    let result = true;
    Object.keys(elements).forEach((el) => {
      if(contains(el) && !s.contains(el)){
        result = false;
      }
    })
    return result;
  };

  const isSupersetOf = (s) => {
    let result = true;
    s.toArray().forEach((el) => {
      if(!contains(el))
      result = false;
    })
    return result;
  };

  const clear = () => {
    elements = {};
    count = 0;
  };

  return {
    size,
    isEmpty,
    contains,
    add,
    remove,
    toArray,
    union,
    intersect,
    diff,
    isSubsetOf,
    isSupersetOf,
    clear
  }
}

module.exports = set;