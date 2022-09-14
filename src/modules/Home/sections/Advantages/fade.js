import Slide from 'react-reveal/Slide'

export default function FadeComponent({ right, left, top, children }) {
  return (
    <Slide right={right} left={left} top={top}>
      {children}
    </Slide>
  )
}
