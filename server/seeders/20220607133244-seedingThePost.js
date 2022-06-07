'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [
      {
        title: "EU reaches deal to make USB-C a common charger for most electronic devices",
        content: "Europe has reached a deal to make USB-C a common charger for all phones and electronic devices, with the aim to reduce e-waste and inconvenience with incompatible chargers. \"Under the new rules, consumers will no longer need a different charging device and ca…",
        category: "News",
        status: "Publish",
      },
      {
        title: "Microsoft's Surface Laptop Go 2 is a Few Flaws Away From Being a Great Budget Laptop",
        content: "What’s clear after using the Surface Laptop Go 2 for the past week or so is that Microsoft was content with its first effort. This sophomore release is more refinement than renovation, a straightforward update with a new engine and a few goodies sprinkled in.…",
        category: "News",
        status: "Draft",
      }
    ]

    data.forEach((el) => {
      el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Posts", data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Posts", null, {})
  }
};
