import { string } from "prop-types"

export const followers:Follower[] = [
    {
        image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-fate-stay-night-saber.jpg',
        name:  'saber.arturia' ,
        friend: 'emiya.shirou'
    },
    {
        image: 'https://s4.anilist.co/file/anilistcdn/character/large/b498-n8WPZtU8l0Cz.png',
        name:  'rin.tohsaka' ,
        friend: 'matou.sakura'
    },
    {
        image: 'https://anhdep123.com/wp-content/uploads/2021/02/anh-luffy-cuc-chat.jpg',
        name:  'monkey.luffy' ,
        friend: 'boa77'
    },
    {
        image: 'https://spicy-mint.com/wp-content/uploads/2019/04/10-20190430-500x333.jpg',
        name:  'Yo.Tan.Wa' ,
        friend: 'li.xin'
    },

]

export interface Follower {
    image:string,
    name:string,
    friend:string
}