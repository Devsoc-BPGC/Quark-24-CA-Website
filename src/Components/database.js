const data = [
  {
    rank: 1,
    name: "BITS Pilani KK Birla Goa Campus",
    points: 100
  },

  {
    rank: 2,
    name: "IIT Bombay",
    points: 99
  },

  {
    rank: 3,
    name: "BITS Pilani Pilani Campus",
    points: 95
  },

  {
    rank: 4,
    name: "VIT",
    points: 90
  },

  {
    rank: 5,
    name: "Thapar",
    points: 80
  },
  {
    rank: 6,
    name: "Local Uni",
    points: 0
  },
  {
    rank: 7,
    name: "Local Uni",
    points: 0
  },
  {
    rank: 8,
    name: "Local Uni",
    points: 0
  },

  {
    rank: 9,
    name: "Local Uni",
    points: 0
  },



];

data.sort((a, b) => b.points - a.points);

export const length = data.length;

const box=length;

console.log(box)
console.log(length)

export default data;
