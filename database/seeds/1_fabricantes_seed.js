exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("fabricantes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("fabricantes").insert([
        { nome: "Dell" },
        { nome: "Apple" },
        { nome: "Acer" },
        { nome: "Asus" },
        { nome: "HP" },
      ]);
    });
};
