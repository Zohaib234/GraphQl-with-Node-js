let games = [
  {
    id: "1",
    title: "Resident Evil 4 Remake",
    platform: ["PC", "PS4", "PS5", "Xbox Series X/S", "i phone 15 pro max"],
  },
  {
    id: "2",
    title: "Red Dead Redemption II ",
    platform: ["PS5/PS4", "Xbox One/X/S", "PC"],
  },
  { id: "3", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
  { id: "4", title: "The Last of US II ", platform: ["PS4/PS5"] },
  { id: "5", title: "Uncharted 4 ", platform: ["PS5", "PS4"] },
];

let authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "yoshi", verified: false },
  { id: "3", name: "peach", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem ipsum", author_id: "1", game_id: "2" },
  { id: "2", rating: 10, content: "lorem ipsum", author_id: "2", game_id: "1" },
  { id: "3", rating: 7, content: "lorem ipsum", author_id: "3", game_id: "3" },
  { id: "4", rating: 5, content: "lorem ipsum", author_id: "2", game_id: "4" },
  { id: "5", rating: 8, content: "lorem ipsum", author_id: "2", game_id: "5" },
  { id: "6", rating: 7, content: "lorem ipsum", author_id: "1", game_id: "2" },
  { id: "7", rating: 10, content: "lorem ipsum", author_id: "3", game_id: "1" },
];

export default { games, authors, reviews };
