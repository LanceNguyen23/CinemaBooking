"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Movie", [
      {
        movieName: "Tro tàn rực rỡ",
        movieSecondName: "",
        movieRating: 6.5,
        movieNumberRating: 20,
        movieDuration: 117,
        movieActor: "Phương Anh Đào, Quang Tuấn, Hạnh Thúy",
        movieDirector: "Bùi Thạc Chuyên",
        movieCountry: "Việt Nam",
        movieProducer: "",
        moviePremiere: "2022-12-2",
        movieContent:
          "Lấy bối cảnh xóm nghèo miền sông nước Thơm Rơm, “Tro Tàn Rực Rỡ” là câu chuyện tình khắc khoải của ba người phụ nữ dành cho những người đàn ông họ chọn gắn bó cả cuộc đời. Mỗi câu chuyện tình ấy mang những dáng vẻ khác nhau, nhưng tựu trung lại, đều mạnh mẽ và tôn vinh vẻ đẹp tâm hồn rất đỗi nhạy cảm của phái nữ.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieName: "DECIBEL",
        movieSecondName: "Âm lượng hủy diệt",
        movieRating: 8.0,
        movieNumberRating: 9,
        movieDuration: 105,
        movieActor: "Lee Jong Suk, Kim Rae Won, Park Byung Eun, Cha Eun Woo",
        movieDirector: "Hwang In Ho",
        movieCountry: "Hàn Quốc",
        movieProducer: "East Dream Synopex",
        moviePremiere: "2022-12-9",
        movieContent:
          "Tác phẩm xoay quanh nhân vật cựu phó đô đốc hải quân Kang Do Young (Kim Rae Won). Một ngày nọ, anh bị vướng vào chuỗi đánh bom khủng bố bằng bom phản ứng âm thanh được chế tạo bởi kẻ ẩn danh (Lee Jong Suk), Do Young phải chạy đua với thời gian để vừa vạch trần danh tính kẻ thủ ác, vừa chứng tỏ bản thân mình hoàn toàn trong sạch.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
