interface dataCategoriesObj {
  name: string;
}

type dataCategoryType = Array<dataCategoriesObj>;

export const categories: dataCategoryType = [
  { name: "Spanish" },
  { name: "Greek" },
  { name: "Italian" },
  { name: "American" },
  { name: "English" },
  { name: "French" },
];
