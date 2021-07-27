import { Story } from '../../../Mocks/story'
import { Container, PageWrapper, PageImage, PageName, Image } from './styles'

type extraStoryProps = {
    storyItem:Story,
    index: number
}

const ExtraStory = ({storyItem, index}:extraStoryProps) => {
    
    return(
        <Container index={index} >
            <Image src={storyItem.content[0].url}/>
            <PageWrapper>
                <PageImage url={storyItem.imagePage} />
                <PageName>{storyItem.pageName}</PageName>
            </PageWrapper>
        </Container>
    )

}

export default ExtraStory