import styled from 'styled-components'
import { mixin, dimen } from '../../Utils/AppContant'

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const StoryContainer = styled.div`
    width: ${dimen.contentWidth}px;
    height: 100px;
    ${mixin.border}
    margin: 20px 0px 20px 0px;
    background-color: white;
`

export const NewFeedContainer = styled.div`
    height: 700px;
    background: white;
`