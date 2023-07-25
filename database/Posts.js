// dummy data for posts
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const postData = [
    {
        id: 1,
        boardId: 1,
        subject: "Introduction to React",
        date: `${Math.floor(Math.random() * 28) + 1} ${month[Math.floor(Math.random() * month.length)]}`,
        image: "https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg",
        content: "React is a JavaScript library for building user interfaces."
    },
    {
        id: 2,
        boardId: 1,
        subject: "Getting Started with Next.js",
        date: `${Math.floor(Math.random() * 28) + 1} ${month[Math.floor(Math.random() * month.length)]}`,
        image: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        content: "Next.js is a framework for building server-side rendered React applications."
    },
    {
        id: 3,
        boardId: 2,
        subject: "The Theory of Relativity",
        date: `${Math.floor(Math.random() * 28) + 1} ${month[Math.floor(Math.random() * month.length)]}`,
        image: "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20196/5d35ff9a2cfac239e9942675_Andrea+Ghez+art+1+final+by+Nicolle+Fuller+2019/Andrea+Ghez+art+1+final+by+Nicolle+Fuller+2019_cf3ee8d8-f673-41d7-ac3e-8b26c29e7a8e-prv.jpg",
        content: "The theory of relativity explains the relationship between space and time."
    },
    {
        id: 4,
        boardId: 3,
        subject: "Exploring Tokyo",
        date: `${Math.floor(Math.random() * 28) + 1} ${month[Math.floor(Math.random() * month.length)]}`,
        image: "https://assets.cntraveller.in/photos/6352a8c00831d51e5aa10703/4:3/w_5332,h_3999,c_limit/tokyoGettyImages-1031467664.jpeg",
        content: "Tokyo is a vibrant city with a rich cultural heritage."
    },
    {
        id: 5,
        boardId: 3,
        subject: "Hiking in the Swiss Alps",
        date: `${Math.floor(Math.random() * 28) + 1} ${month[Math.floor(Math.random() * month.length)]}`,
        image: "https://s.wsj.net/public/resources/images/ON-CP474_swiss1_G_20180718114119.jpg",
        content: "The Swiss Alps offer breathtaking views and challenging hiking trails."
    },
    {
        id: 6,
        boardId: 4,
        subject: "Delicious Pasta Recipes",
        date: `${Math.floor(Math.random() * 28) + 1} ${month[Math.floor(Math.random() * month.length)]}`,
        image: "https://www.spoonforkbacon.com/wp-content/uploads/2021/03/best-pasta-recipes-roundup.jpg",
        content: "Learn how to make mouthwatering pasta dishes from scratch."
    },
    {
        id: 7,
        boardId: 5,
        subject: "Famous Artworks",
        date: `${Math.floor(Math.random() * 28) + 1} ${month[Math.floor(Math.random() * month.length)]}`,
        image: "https://i0.wp.com/bookmypainting.com/wp-content/uploads/2019/06/starry-night-the-famous-painting-2.jpeg?resize=555%2C462&ssl=1",
        content: "Explore some of the most famous artworks from different periods."
    },
];