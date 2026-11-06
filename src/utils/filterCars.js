function normalize(value) {
  return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export function filterCars(items, term) {
  const query = normalize(term);
  if (!query) return items;
  return items.filter((car) => [car.title, car.description, car.details]
    .some((value) => normalize(value).includes(query)));
}
