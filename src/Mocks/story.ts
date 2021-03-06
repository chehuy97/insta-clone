import dance from '../Assets/videos/dance.mp4'
import peace from '../Assets/videos/peace.mp4'
import kingvader from '../Assets/videos/kingvader.mp4'

export interface Story {
  id:number
  pageName: string;
  imagePage: string;
  content: StoryContent[];
}

export interface StoryContent {
  story_id:number;
  type: string;
  url: string;
}

export const stories: Story[] = [
  {
    id:863957209844,
    pageName: "BallerTalk",
    imagePage:
      "https://res.cloudinary.com/teepublic/image/private/s--07RXetyM--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1594562666/production/designs/12143311_0.jpg",
    content: [
      {
        story_id:8233478493,
        type: "image",
        url: "https://npr.brightspotcdn.com/dims4/default/dcb7624/2147483647/strip/true/crop/2695x1781+0+0/resize/880x582!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5d%2Fe5%2Fbf0bc4b14652ac8a77cd4cc2ad3b%2Fgettyimages-1328249149.jpg",
      },
      {
        story_id:9276533882,
        type: "image",
        url: "https://fadeawayworld.net/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTMyNzM3NjU1MTg2NTU0/nba-trade-rumors--lakers-could-create-an-amazing-big-three-with-lebron-james-anthony-davis-and-russell-westbrook.jpg",
      },
      {
        story_id:1987527856,
        type:'image',
        url:'https://www.sportsnet.ca/wp-content/uploads/2021/07/Gobert-1040x572.jpg'
      }
    ],
  },
  {
    id:9823799570,
    pageName: "Mountain",
    imagePage:"https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    content: [{
        story_id:9866253876,
        type: "image",
        url: "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/09/swiss-alps.jpg",
      },
    ],
  },
  {
    id:2874955291,
    pageName: "FunnyGroup",
    imagePage:
      "https://filmdaily.co/wp-content/uploads/2020/07/dirty-lede-1300x731.jpg",
    content: [
      {
        story_id:2733674867,
        type: "image",
        url: "https://media.vanityfair.com/photos/5f5156490ca7fe28f9ec3f55/3:2/w_1998,h_1332,c_limit/feels-good-man-film.jpg",
      },
      {
        story_id: 1982837743,
        type: 'video',
        url: dance,
      },
      {
        story_id:3849503845,
        type: "video",
        url: kingvader,
      },
    ],
  },
  {
    id:1869275409,
    pageName: "G??i Xinh",
    imagePage:
      "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg",
    content: [
      {
        story_id:234765987,
        type: "image",
        url: "https://cdn.24h.com.vn/upload/3-2020/images/2020-08-31/Hoa-khoi-Phu-Yen-duong-len-dinh-olympia-9-1598847487-550-width660height880.jpg",
      },
      {
        story_id: 2788362511,
        type: 'image',
        url: 'https://kenh14cdn.com/thumb_w/660/2019/2/24/3561716420480213454575853861059020806684672n-15510057259571546306615.jpg'
      },
      {
        story_id: 4983726551,
        type: 'image',
        url: 'https://photo2.tinhte.vn/data/attachment-files/2021/04/5450727_20210314-nu_sinh_nhat_ban_6.jpg'
      },
      {
        story_id: 1987263800,
        type: 'image',
        url: 'https://photo-cms-baonghean.zadn.vn/w607/Uploaded/2021/zsgkqzeaznzm/2019_10_26/201063688637678304493526829951550605727269n_drlt.jpg'
      },
      {
        story_id: 2839942413,
        type: 'image',
        url: 'https://cynramedia.com/wp-content/uploads/2019/08/nancy-momoland-1-1-1024x800.jpg'
      }
    ],
  },
  {
    id:3869247261,
    pageName: "Peaceful",
    imagePage:
      "https://images.squarespace-cdn.com/content/v1/55b90ef0e4b05042d5baacf1/1495244610899-UTKHKBJY91YJ7Z3B4I9H/be+peaceful+yogi+tish.png?format=1000w",
    content: [
      {
        story_id:2987156789,
        type: "image",
        url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_539043047_2000133320009280369_285351.jpg",
      },
      {
        story_id:2938475612,
        type: "video",
        url: peace,
      },
    ],
  },
  {
    id:6258359482,
    pageName: "Tottenham",
    imagePage:
      "https://methethao.net/wp-content/uploads/2021/02/logo-tottenham.jpg",
    content: [
      {
        story_id:28457522387,
        type: "image",
        url: "https://www.thesun.co.uk/wp-content/uploads/2017/10/nintchdbpict000363777505.jpg",
      },
      {
        story_id:28457522387,
        type: "image",
        url: "https://i2-prod.football.london/tottenham-hotspur-fc/players/article19562117.ece/ALTERNATES/s615/0_GettyImages-1294450398.jpg",
      },
      {
        story_id:28457522387,
        type: "image",
        url: "https://c8.alamy.com/comp/KFR29D/tottenham-hotspurs-son-heung-min-left-and-dele-alli-during-the-training-KFR29D.jpg",
      },
    ],
  },
  {
    id:2963940965,
    pageName: "LapTrinh",
    imagePage:
      "https://csc.edu.vn/data/images/tin-tuc/lap-trinh-csdl/kien-thuc-lap-trinh/hoc-lap-trinh-bat-dau-tu-dau(2).jpg",
    content: [
      {
        story_id:1298764723,
        type: "image",
        url: "https://i.stack.imgur.com/Mjg9B.png",
      },
    ],
  },
  {
    id:1667297493,
    pageName: "Animal",
    imagePage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRaZF1ieRUIWLp0WVfz5X-I9yvmjOz8jOhL0e6I7MiHmPCI-Hd6F-jNuO4duYopGW1_4&usqp=CAU",
    content: [
      {
        story_id:3648876529,
        type: "image",
        url: "https://d1jyxxz9imt9yb.cloudfront.net/program/125/detail_image/mobile/1_ElephantWithKeeper.jpg",
      },
    ],
  },
  {
    id:8862452741,
    pageName: "FGO",
    imagePage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJav5BPYoIla9BqwEX7jRDEsd28Frt6Divzvu4asoNSlwdhP47Yf2aaX4LafYhz-vqo08&usqp=CAU",
    content: [
      {
        story_id:7825634467,
        type: "image",
        url: "https://images8.alphacoders.com/884/thumb-1920-884016.png",
      },
      {
        story_id:2837748901,
        type: "image",
        url: "https://static.zerochan.net/Lancer.%28Artoria.Pendragon%29.full.2083905.jpg",
      },
      {
        story_id:1278398840,
        type: "image",
        url: "https://i.pinimg.com/736x/f5/8a/03/f58a03db4e0bdf5d8639817256c32b16.jpg",
      },
    ],
  },
  {
    id:3348619674,
    pageName: "Teapot",
    imagePage:
      "https://verdanttea.com/media/mageplaza/blog/post/1/7/17935-0675_indext.jpg",
    content: [
      {
        story_id:2783776549,
        type: "image",
        url: "https://d27pcll2dx97vv.cloudfront.net/info/wp-content/uploads/2017/09/xishi_teapot_mobile.jpg",
      },
    ],
  },
  {
    id: 8765298270,
    pageName: "CNN",
    imagePage: "https://cdn.cnn.com/cnn/.e/img/3.0/global/misc/cnn-logo.png",
    content: [
      {
        story_id:1987263866,
        type: "image",
        url: "https://cdn.cnn.com/cnnnext/dam/assets/210711172456-01-trump-cpac-2021-0711-super-tease.jpg",
      },
    ],
  },
  {
    id:6284629816,
    pageName: "FOOD",
    imagePage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
    content: [
      {
        story_id:1827736488,
        type: "image",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg",
      },
    ],
  },
];
