/*
 * Copyright (c) 2002-2021 "neo4j ,"
 * neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of  neo4j.
 *
 * neo4j  is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react'
import styles from './style.less'
import { StyledSlide } from './styled'

const Slide = React.forwardRef<any, any>(({ children, content, html }, ref) => {
  if (children) {
    return (
      <StyledSlide ref={ref} className={styles.slide}>
        {children}
      </StyledSlide>
    )
  }

  if (content) {
    return (
      <StyledSlide ref={ref} className={styles.slide}>
        {content}
      </StyledSlide>
    )
  }

  if (html) {
    return (
      <StyledSlide
        ref={ref}
        className={styles.slide}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return null
})

Slide.displayName = 'Slide'

export default Slide
