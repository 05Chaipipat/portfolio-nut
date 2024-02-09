import ExperienceLayout from "./ExportLayout";
import LayoutComponent from "./LayoutComponent";

import React from 'react'

const Education = () => {
  return (
    <LayoutComponent topic={'Education'} idcomponent={'Education'} bgopacity={'bg-opacity-[100%]'}>
<ExperienceLayout
  topic1={"Silpakorn university"}
  durationtime={"2016"}
  addresslearn={"Nakhon Pathom , Thailand"}
>
  <p>- Thailand Bachelor's Degree in science, Major in food technology</p>
</ExperienceLayout>
</LayoutComponent>
  )
}

export default Education



