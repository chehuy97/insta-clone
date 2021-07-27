import tieuhyVideo from "../Assets/videos/tieuhy.mp4";

export const news:News[] = [
    {
        imagePage: 'https://cdn6.aptoide.com/imgs/c/b/a/cba8abda72f64ed3a8ff6a6543f596bf_icon.png',
        namePage: 'vtvnews',
        type:'image',
        url:'https://vtv1.mediacdn.vn/thumb_w/650/2021/7/27/vnapotaltphochiminhxuphatnhieutruonghopraduongkhongcanthietsau18gio5577292-16273450627571838188387.jpg',
        likes: 1217,
        content:'Chiều tối 26/7, lực lượng công an TP Hồ Chí Minh đã kiểm tra và xử phạt nhiều trường hợp ra đường sau 18h mà không có lý do cấp thiết',
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
        imagePage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2epiUBV6wqPECzTHEdS2GrLKI1Ev2PG5oA&usqp=CAU',
        namePage: 'Bình Luận Bóng Rổ',
        type:'image',
        url:'https://i1-thethao.vnecdn.net/2021/07/25/1-7500-1627225657.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Vn3AX6IfEOXfmqw76rPR2Q',
        likes: 245,
        content:'Lần đầu tuyển bóng rổ Mỹ thua kể từ Olympic Athens 2004, cũng là thất bại thứ ba trong năm trận gần nhất của thầy trò HLV Gregg Popovich',
        time:' 1 DAY AGO'
    },
    {
        imagePage: 'https://voz.vn/styles/next/xenforo/voz-logo-og.png?v=1',
        namePage: 'VOZ.VN',
        type:'image',
        url:'https://i.imgur.com/UnShoba.png',
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