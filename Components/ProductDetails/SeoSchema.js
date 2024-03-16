import { NextSeo } from 'next-seo'
import React from 'react'

const SeoSchema = ({data}) => {
  return (
    <div>
      <NextSeo 
        title={data?.name}
        description={data?.description}
        openGraph={{
          title: data?.name,
          description: data?.description,
          images: [
            {
              url: data?.image
            }
          ]
        }}
        />
    </div>
  )
}

export default SeoSchema
