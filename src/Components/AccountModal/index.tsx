// import { Container } from './styles'
import './account.modal.scss'
import profileImg from '../../Assets/Images/icons/profile.png'
import savedImg from '../../Assets/Images/icons/bookmark.png'
import switchImg from '../../Assets/Images/icons/switch.png'
import settingImg from '../../Assets/Images/icons/setting.png'

const AccountModal = () => {

    const logout = () => {
        console.log('LOGOUT');
        localStorage.removeItem('@authenticated')
        window.location.reload()
        
    }

    const render_item = (image:any, name:string, handle: () => void)  => {
        
        return (
            <div className='itemWrapper' onClick={() => handle()}>
                { image != '' ? <img src={image} className='image' /> : null}
                <p className='text'>{name}</p>
            </div>
        )
    }

    return (
        <div className='container'>
            {render_item(profileImg, 'Profile',() => {})}
            {render_item(savedImg, 'Saved', () => {})}
            {render_item(settingImg, 'Setting',() => {})}
            {render_item(switchImg, 'Switch Account', () => {})}
            <div className='line'/>
            {render_item('', 'Logout', logout)}
        </div>
    )
}

export default AccountModal