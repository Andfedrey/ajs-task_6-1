export default getDestructor = (obj) => {
  const special = [...obj.special];
  return special.filter((el) => Object.prototype.hasOwnProperty.call(el, 'description')); // el.hasOwnProperty('description') на такую запись ругался eslint
};
