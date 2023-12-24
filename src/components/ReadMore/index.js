// Write your code here
import {useState} from 'react'
import {
  HomeContainer,
  Header,
  Description,
  Image,
  ReadDescription,
  ReadBtn,
} from './styledComponents'

const ReadMore = props => {
  const [isReadMore, setIsReadMore] = useState(true)

  const onClickReadMore = () => {
    setIsReadMore(prevState => !prevState)
  }

  const {reactHooksDescription} = props

  const readMoreText = isReadMore
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription

  const btnText = isReadMore ? 'Read More' : 'Read Less'

  return (
    <HomeContainer>
      <Header>React Hooks</Header>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ReadDescription>{readMoreText}</ReadDescription>
      <ReadBtn type="button" onClick={onClickReadMore}>
        {btnText}
      </ReadBtn>
    </HomeContainer>
  )
}

export default ReadMore
