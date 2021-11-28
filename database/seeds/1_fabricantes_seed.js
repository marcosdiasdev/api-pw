exports.seed = async function (knex) {
  // Verifica se existem produtos cadastrados antes de recriar os fabricantes
  const produtos = knex("produtos");
  if (produtos.length === 0) {
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
  }
};
