import React from 'react'
import Fullpage, { FullPageSections, FullPageSection, FullPageNavigation} from "e@ap.cx/react-fullpage"

const CardScroll = () => {
  return (
    <div>
        <Fullpage>
          <FullPageSections>
            <FullPageSection style={{height: "20vh"}}>
              <h1>God is good</h1>
            </FullPageSection>
          </FullPageSections>
        </Fullpage>
    </div>
  )
}

export default CardScroll