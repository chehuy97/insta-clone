// import { Container } from './styles'
import './styles.scss'
import profileImg from '../../Assets/Images/icons/profile.png'
import savedImg from '../../Assets/Images/icons/bookmark.png'
import switchImg from '../../Assets/Images/icons/switch.png'
import settingImg from '../../Assets/Images/icons/setting.png'

const AccountModal = () => {

    const render_item = (image:any, name:string) => {
        
        return (
            <div className='itemWrapper'>
                { image != '' ? <img src={image} className='image' /> : null}
                <p className='text'>{name}</p>
            </div>
        )
    }

    return (
        <div className='container'>
            {render_item(profileImg, 'Profile')}
            {render_item(savedImg, 'Saved')}
            {render_item(settingImg, 'Setting')}
            {render_item(switchImg, 'Switch Account')}
            <div className='line'/>
            {render_item('', 'Logout')}
        </div>
    )
}

export default AccountModal