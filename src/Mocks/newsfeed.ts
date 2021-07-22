import tieuhyVideo from "../Assets/videos/tieuhy.mp4";

export const news:News[] = [
    {
        imagePage: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/143119904_1809444312576682_3007703238103447523_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jgZvJZtc1BEAX-sIe7Q&_nc_ht=scontent.fhan2-4.fna&oh=8d74b8e3d2fca0917ee725b1c2d6ce91&oe=60FC2E86',
        namePage: 'vtv24news',
        type:'image',
        url:'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-0/p526x296/212488404_1944615799059532_9115906954659117863_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=9AHa-CGIivoAX8KCsh-&_nc_ht=scontent.fhan2-4.fna&oh=9ac6afbaa651a7c06123c1272e4096a7&oe=60FAF45D',
        likes: 1217,
        content:'Trưa 20-7, Sở Y tế Hà Nội thông tin, tính từ 7h30 đến 12h ngày 20-7, có thêm 21 ca dương tính mới trên địa bàn thành phố, trong đó có 9 trường hợp liên quan chùm ca bệnh nhà thuốc Đức Tâm, quận Đống Đa.',
        time:'32 MINUTES AGO'
    },
    {
        imagePage: 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png',
        namePage: 'Tik Tok Việt Nam',
        type:'video',
        url: tieuhyVideo,
        likes: 693,
        content:'Cô gái nổi nhất những ngày gần đây',
        time:' 1 DAY AGO'
    },
    {
        imagePage: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t31.18172-0/p180x540/24173621_520408928319801_3327641684473637799_o.jpg?_nc_cat=103&_nc_rgb565=1&ccb=1-3&_nc_sid=8631f5&_nc_ohc=nkJH34Rnp_YAX9Gg5cd&tn=Y-PnIJ47PQ6Ulxdv&_nc_ht=scontent.fhan2-4.fna&oh=6f3a7c3ff2d84d6abd75463a160674d8&oe=611ED529',
        namePage: 'Bình Luận Bóng Rổ',
        type:'image',
        url:'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/219550599_1730248443841085_3151247085160803211_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=825194&_nc_ohc=R3XC3Sq684UAX9C6tri&_nc_ht=scontent.fhan2-3.fna&oh=9173e354fb33dc35357afbf3c83474fb&oe=60FD3DBB',
        likes: 245,
        content:'Nước mắt tuôn rơi trò chơi kết thúc, Bucks trở thành tân vô địch của NBA.',
        time:' 1 DAY AGO'
    },
    {
        imagePage: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/197226403_591881698884116_7982268664999483584_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=a9o5Yvop5vAAX_LWIQj&_nc_ht=scontent.fhan2-2.fna&oh=6abe9951edc813cb91f9e7b0089af0d3&oe=60FC4FE9',
        namePage: 'VOZ.VN',
        type:'image',
        url:'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/213474289_611612980244321_4033489614489772080_n.png?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=0jOeg4gAXikAX84VwVz&_nc_ht=scontent.fhan2-3.fna&oh=8ff0dd07cd9e2397b42ecfed5e40d154&oe=60FBF9CF',
        likes: 459,
        content:'Post nhiều like,comment,share nhất tại 1 group công nghệ 😢',
        time:' 1 DAY AGO'
    },

]

export interface News {
    imagePage: string,
    namePage: string,
    type: string
    url:string,
    likes:number,
    content:string,
    time:string
}