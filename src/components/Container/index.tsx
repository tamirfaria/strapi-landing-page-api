import React, { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  id?: string
  children: ReactNode
}

const Container: React.FC<Props> = ({ children, id }) => (
  <S.Container id={id}>{children}</S.Container>
)

export default Container
