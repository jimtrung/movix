export const packs = [
  {
    "name": "Di động",
    "tag": "mobile",
    "quality-name": "Khá",
    "quality": "480p", 
    "resolution-tag": "",
    "devices": "Thiết bị di động, máy tính bảng",
    "watch-amount": 1,
    "download-amount": 1,
    "price": 70000
  },
  {
    "name": "Cơ bản",
    "tag": "basic",
    "quality-name": "Tốt",
    "quality": "720p",  
    "resolution-tag": "HD", 
    "devices": "TV, máy tính, thiết bị di động, máy tính bảng",
    "watch-amount": 1,
    "download-amount": 1,
    "price": 108000
  },
  {
    "name": "Tiêu chuẩn",
    "tag": "standard",
    "quality-name": "Tuyệt vời",
    "quality": "1080p", 
    "resolution-tag": "Full HD", 
    "devices": "TV, máy tính, thiết bị di động, máy tính bảng",
    "watch-amount": 2, 
    "download-amount": 2,
    "price": 220000
  },
  {
    "name": "Cao cấp",
    "tag": "luxury",
    "quality-name": "Tốt nhất",
    "quality": "HDR + 4K", 
    "resolution-tag": "Ultra HDR",  
    "devices": "TV, máy tính, thiết bị di động, máy tính bảng",
    "watch-amount": 4, 
    "download-amount": 5,
    "price": 1000000
  },
];

export function FindPack(packTag) {
  let foundPack;
  packs.forEach(pack => {
    if (pack.tag === packTag) {
      foundPack = pack;
    }
  });
  if (foundPack === undefined) {
    throw new Error("Cannot find pack");
  }
  return foundPack
}