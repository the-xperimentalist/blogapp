// testData

export  const testData = {
  testData: {
    writers: [
      {
        id: 1,
        email: "test_user1@gmail.com",
        name: "Test User 1",
        followers: [2,4],
        profile_img: require('./static/img/profile_imgs/img1.jpg'),
      },
      {
        id: 2,
        email: "test_user2@gmail.com",
        name: "Test User 2",
        followers: [1],
        profile_img: require('./static/img/profile_imgs/img2.jpg'),
      },
      {
        id: 3,
        email: "test_user3@gmail.com",
        name: "Test User 3",
        followers: [4],
        profile_img: require('./static/img/profile_imgs/img3.png'),
      },
      {
        id: 4,
        email: "test_user4@gmail.com",
        name: "Test User 4",
        followers: [1,2,3],
        profile_img: require('./static/img/profile_imgs/img4.jpg'),
      }
    ],
    categories: [
      {
        id: 1,
        name: "Category 1"
      },
      {
        id: 2,
        name: "Category 2"
      },
      {
        id: 3,
        name: "Category 3"
      },
      {
        id: 4,
        name: "Category 4"
      },
      {
        id: 5,
        name: "Category 5"
      },
      {
        id: 6,
        name: "Category 6"
      },
      {
        id: 7,
        name: "Category 7"
      },
      {
        id: 8,
        name: "Category 8"
      }
    ],
    comments: [
      {
        id: 1,
        comment_text: "This is demo comment text 1",
        commented_by: 2,
        commented_article: 1,
        no_of_claps: 4
      },
      {
        id: 2,
        comment_text: "This is demo comment text 2",
        commented_by: 1,
        commented_article: 3,
        no_of_claps: 2
      },
      {
        id: 3,
        comment_text: "This is demo comment text 3",
        commented_by: 1,
        commented_article: 10,
        no_of_claps: 10
      },
      {
        id: 4,
        comment_text: "This is demo comment text 4",
        commented_by: 2,
        commented_article: 13,
        no_of_claps: 24
      },
      {
        id: 5,
        comment_text: "This is demo comment text 5",
        commented_by: 1,
        commented_article: 14,
        no_of_claps: 12
      },
      {
        id: 6,
        comment_text: "This is demo comment text 6",
        commented_by: 3,
        commented_article: 15,
        no_of_claps: 42
      },
      {
        id: 7,
        comment_text: "This is demo comment text 7",
        commented_by: 4,
        commented_article: 16,
        no_of_claps: 13
      },
      {
        id: 8,
        comment_text: "This is demo comment text 8",
        commented_by: 1,
        commented_article: 10,
        no_of_claps: 1
      },
      {
        id: 9,
        comment_text: "This is demo comment text 9",
        commented_by: 1,
        commented_article: 10,
        no_of_claps: 0
      },
      {
        id: 10,
        comment_text: "This is demo comment text 10",
        commented_by: 3,
        commented_article: 11,
        no_of_claps: 4
      },
      {
        id: 11,
        comment_text: "This is demo comment text 11",
        commented_by: 4,
        commented_article: 9,
        no_of_claps: 0
      },
      {
        id: 12,
        comment_text: "This is demo comment text 12",
        commented_by: 2,
        commented_article: 6,
        no_of_claps: 4
      },
      {
        id: 13,
        comment_text: "This is demo comment text 13",
        commented_by: 2,
        commented_article: 13,
        no_of_claps: 1
      },
      {
        id: 14,
        comment_text: "This is demo comment text 14",
        commented_by: 2,
        commented_article: 1,
        no_of_claps: 4
      },
      {
        id: 15,
        comment_text: "This is demo comment text 15",
        commented_by: 1,
        commented_article: 7,
        no_of_claps: 9
      },
      {
        id: 16,
        comment_text: "This is demo comment text 16",
        commented_by: 1,
        commented_article: 6,
        no_of_claps: 15
      },
      {
        id: 17,
        comment_text: "This is demo comment text 17",
        commented_by: 4,
        commented_article: 8,
        no_of_claps: 1
      },
      {
        id: 18,
        comment_text: "This is demo comment text 18",
        commented_by: 5,
        commented_article: 4,
        no_of_claps: 0
      },
      {
        id: 19,
        comment_text: "This is demo comment text 19",
        commented_by: 3,
        commented_article: 4,
        no_of_claps: 4
      },
      {
        id: 20,
        comment_text: "This is demo comment text 20",
        commented_by: 2,
        commented_article: 1,
        no_of_claps: 5
      },
      {
        id: 21,
        comment_text: "This is demo comment text 21",
        commented_by: 1,
        commented_article: 16,
        no_of_claps: 2
      }
    ],
    articles: [
      {
        id: 1,
        title: "This is demo title 1",
        subtitle: "This is demo subtitle 1",
        description: "This is demo description 1",
        created_by: 1,
        created_on: "21 May 2019",
        categories: [1,3],
        no_of_claps: 4,
        published: true,
        related_img: require('./static/img/article_imgs/img1.jpg')
      },
      {
        id: 2,
        title: "This is demo title 2",
        subtitle: "This is demo subtitle 2",
        description: "This is demo description 2",
        created_by: 4,
        created_on: "21 May 2019",
        categories: [7, 2, 8],
        no_of_claps: 12,
        published: true,
        related_img: require('./static/img/article_imgs/img2.jpg')
      },
      {
        id: 3,
        title: "This is demo title 3",
        subtitle: "This is demo subtitle 3",
        description: "This is demo description 3",
        created_by: 2,
        created_on: "21 June 2019",
        categories: [1,4,6],
        no_of_claps: 19,
        published: true,
        related_img: require('./static/img/article_imgs/img3.jpg')
      },
      {
        id: 4,
        title: "This is demo title 4",
        subtitle: "This is demo subtitle 4",
        description: "This is demo description 4",
        created_by: 3,
        created_on: "25 May 2019",
        categories: [3,4,5],
        no_of_claps: 16,
        published: true,
        related_img: require('./static/img/article_imgs/img4.jpg')
      },
      {
        id: 5,
        title: "This is demo title 5",
        subtitle: "This is demo subtitle 5",
        description: "This is demo description 5",
        created_by: 3,
        created_on: "21 April 2019",
        categories: [7,8],
        no_of_claps: null,
        published: false,
        related_img: require('./static/img/article_imgs/img5.jpg')
      },
      {
        id: 6,
        title: "This is demo title 6",
        subtitle: "This is demo subtitle 6",
        description: "This is demo description 6",
        created_by: 3,
        created_on: "21 August 2019",
        categories: [1,4,8],
        no_of_claps: 40,
        published: true,
        related_img: require('./static/img/article_imgs/img6.jpg')
      },
      {
        id: 7,
        title: "This is demo title 7",
        subtitle: "This is demo subtitle 7",
        description: "This is demo description 7",
        created_by: 3,
        created_on: "11 June 2019",
        categories: [1,3,8],
        no_of_claps: 10,
        published: true,
        related_img: require('./static/img/article_imgs/img7.jpg')
      },
      {
        id: 8,
        title: "This is demo title 8",
        subtitle: "This is demo subtitle 8",
        description: "This is demo description 8",
        created_by: 1,
        created_on: "11 July 2019",
        categories: [1,5],
        no_of_claps: null,
        published: false,
        related_img: require('./static/img/article_imgs/img8.jpg')
      },
      {
        id: 9,
        title: "This is demo title 9",
        subtitle: "This is demo subtitle 9",
        description: "This is demo description 9",
        created_by: 2,
        created_on: "21 December 2019",
        categories: [2,5,6],
        no_of_claps: 31,
        published: true,
        related_img: require('./static/img/article_imgs/img9.jpg')
      },
      {
        id: 10,
        title: "This is demo title 10",
        subtitle: "This is demo subtitle 10",
        description: "This is demo description 10",
        created_by: 2,
        created_on: "14 May 2019",
        categories: [2,3,5],
        no_of_claps: null,
        published: false,
        related_img: require('./static/img/article_imgs/img10.jpg')
      },
      {
        id: 11,
        title: "This is demo title 11",
        subtitle: "This is demo subtitle 11",
        description: "This is demo description 11",
        created_by: 4,
        created_on: "10 June 2019",
        categories: [3,5,6],
        no_of_claps: null,
        published: false,
        related_img: require('./static/img/article_imgs/img11.jpg')
      },
      {
        id: 12,
        title: "This is demo title 12",
        subtitle: "This is demo subtitle 12",
        description: "This is demo description 12",
        created_by: 4,
        created_on: "10 May 2019",
        categories: [],
        no_of_claps: null,
        published: false,
        related_img: require('./static/img/article_imgs/img12.jpg')
      },
      {
        id: 13,
        title: "This is demo title 13",
        subtitle: "This is demo subtitle 13",
        description: "This is demo description 13",
        created_by: 4,
        created_on: "20 May 2019",
        categories: [1],
        no_of_claps: null,
        published: false,
        related_img: require('./static/img/article_imgs/img13.jpg')
      },
      {
        id: 14,
        title: "This is demo title 14",
        subtitle: "This is demo subtitle 14",
        description: "This is demo description 14",
        created_by: 4,
        created_on: "13 May 2019",
        categories: [3],
        no_of_claps: null,
        published: false,
        related_img: require('./static/img/article_imgs/img14.jpg')
      },
      {
        id: 15,
        title: "This is demo title 15",
        subtitle: "This is demo subtitle 15",
        description: "This is demo description 15",
        created_by: 3,
        created_on: "11 July 2019",
        categories: [1,3,7,8],
        no_of_claps: 43,
        published: true,
        related_img: require('./static/img/article_imgs/img15.jpg')
      },
      {
        id: 16,
        title: "This is demo title 16",
        subtitle: "This is demo subtitle 16",
        description: "This is demo description 16",
        created_by: 2,
        created_on: "21 May 2019",
        categories: [1,3,5,6,7],
        no_of_claps: 33,
        published: true,
        related_img: require('./static/img/article_imgs/img16.jpg')
      }
    ]
  }
};
