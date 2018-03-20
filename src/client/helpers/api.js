
/**
 * Transform filters object into queryString according specified rules.
 */
export function transformFilters(filters) {
  const filtersToAdd = [];

  Object.keys(filters).forEach((filterKey) => {
    if (filterKey === 'capacity' && filters[filterKey] > 1) {
      filtersToAdd.push(`capacity=${filters[filterKey]}`);
    } else if (filterKey === 'equipements') {
      const equipements = filters[filterKey];
      const equToAdd = Object.keys(equipements).filter(equ => equipements[equ] === true);
      if (equToAdd.length) {
        filtersToAdd.push(`equipements=${equToAdd.join(',')}`);
      }
    }
  });
  return (filtersToAdd.length) ? `?${filtersToAdd.join('&')}` : '';
}

export default transformFilters;
