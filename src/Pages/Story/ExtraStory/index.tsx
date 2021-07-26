import { Story } from '../../../Mocks/story'
import { Container, PageWrapper, PageImage, PageName, Image } from './styles'

type extraStoryProps = {
    storyItem:Story
}

const ExtraStory = ({storyItem}:extraStoryProps) => {
    
    return(
        <Container>
            <Image src={storyItem.content[0].url}/>
            <PageWrapper>
                <PageImage url={storyItem.imagePage} />
                <PageName>{storyItem.pageName}</PageName>
            </PageWrapper>
        </Container>
    )

}

export default ExtraStory