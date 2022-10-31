import uuid from "react-uuid";

const allMusic = [
  {
    name: "HamrahSho",
    cover: "https://upmusics.com/wp-content/uploads/2022/09/rty-2.jpg",
    artist: "Shajarian",
    audio:
      "https://irsv.upmusics.com/Downloads/Musics/Mohammadreza%20Shajarian%20-%20Hamrah%20Sho%20Aziz%20(128).mp3",
    color: ["#D36B00", "#42032C"],
    id: uuid(),
    active: true,
  },
  {
    name: "Nagahan",
    cover:
      "https://nex1music.ir/upload/2020-05-24/alireza-ghorbani-shorooe-nagahan-2020-05-24-20-08-05.jpg",
    artist: "Alireza Ghorbani",
    audio:
      "https://dl.nex1music.ir/1399/03/04/Alireza%20Ghorbani%20-%20Shorooe%20Nagahan%20[128].mp3?time=1666448133&filename=/1399/03/04/Alireza%20Ghorbani%20-%20Shorooe%20Nagahan%20[128].mp3",
    color: ["#F1D00A", "#3E497A"],
    active: false,
  },
  {
    name: "Khiale Khosh",
    cover:
      "https://mahanmusic.net/wp-content/uploads/2020/07/Song-Alireza-Ghorbani-Khiale-Khosh.jpg",
    artist: "Alireza Ghorbani",
    audio:
      "https://media-vip.my-pishvaz.com/mahanmusic/ahang/99/04/Alireza%20Ghorbani%20-%20Khiale%20Khosh%20-%20128%20-%20mahanmusic.net.mp3?st=QqXqYCPDaoXbj8IM9zXgFA&e=1666449053",
    color: ["#395B64", "#A5C9CA"],
    id: uuid(),
    active: false,
  },
  {
    name: "Armaghane",
    cover:
      "data:image/jpeg;base64,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",
    artist: "Mohamd Esfahani",
    audio:
      "https://dl.sakhamusic.ir/00/ordi/01/Mohammad%20Esfahani%20-%20Armaghane%20Tariki%20(128).mp3",
    color: ["#F7CCAC", "#826F66"],
    id: uuid(),
    active: false,
  },
  {
    name: "Kavir",
    cover: "https://upmusics.com/wp-content/uploads/2019/07/segd.jpg",
    artist: "Mohamd Motamedi",
    audio:
      "https://dl.ahaang.com/95/03/07/Mohammad%20Motamedi%20-%20Kavir%20(128).mp3",
      color: ["#0F3D3E", "#E2DCC8"],
    id: uuid(),
    active: false,
  },
  {
    name: "geryeKom",
    cover:
      "https://mahanmusic.net/wp-content/uploads/2022/04/Homayoun-Shajarian-Dele-Man-Migeryadd-mahanmusic.net_.jpg",
    artist: "Homayon Shajarian",
    audio:
      "https://dls.music-fa.com/tagdl/NEW2022/Homayoun%20Shajaryan%20-%20Gerye%20Kon%20(128).mp3",
    color: ["#750550", "#A13333"],
    id: uuid(),
    active: false,
  },
  {
    name: "sepid ya siah",
    cover:"https://app.akharinkhabar.ir/images/2017/10/31/351cfb35-6a7a-483a-9ca1-d1797f5c5ef0.jpeg",
        artist: "Salar Aghili",
    audio:
      "https://dl.rozmusic.com/Music/1396/03/13/Salar%20Aghili%20-%20Sepid%20Ya%20Siah%20(128).mp3",
    color: ["#864879", "#E9A6A6"],
    id: uuid(),
    active: false,
  },
];

export default allMusic;
