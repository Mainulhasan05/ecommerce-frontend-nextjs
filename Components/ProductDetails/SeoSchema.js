import { ProductJsonLd } from 'next-seo';
import React from 'react'

const SeoSchema = ({data}) => {
  
  return (
    <div>
      <ProductJsonLd
      productName={data?.name}
      images={[
        ...data.images ? data?.images?.map((image) => process.env.API_URL+ image.url) : [],
      ]}
      description={data?.description}
      brand="ACME"
      color="blue"
      manufacturerName="Gary Meehan"
      manufacturerLogo="https://www.example.com/photos/logo.jpg"
      material="steel"
      slogan=
      "Discover the Vibrant Spirit of Chapai Nawabganj: Uniting Entrepreneurs, Celebrating Creativity. Welcome to SuchonaMart!"
      disambiguatingDescription="Executive Anvil, perfect for the business traveller."
      releaseDate={data?.createdAt}
      productionDate={data?.createdAt}
      purchaseDate={data?.updatedAt}
      award="Best Executive Anvil Award."
      reviews={[
        {
          author: 'Jim',
          datePublished: '2017-01-06T03:37:40Z',
          reviewBody:
            'This is my favorite product yet! Thanks Nate for the example products and reviews.',
          name: 'So awesome!!!',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '1',
          },
          publisher: {
            type: 'Organization',
            name: 'TwoVit',
          },
        },
      ]}
      aggregateRating={{
        ratingValue: '4.4',
        reviewCount: '89',
      }}
      offers={[
        {
          price: data?.new_price,
          priceCurrency: 'BDT',
          priceValidUntil: '2030-11-05',
          itemCondition: 'new',
          availability: 'in stock',
          url: `https://www.suchonamart.com/product/${data?.slug}`,
          seller: {
            name: data?.shop?.name,
          },
        },
        
      ]}
      mpn="925872"
    />
      
    </div>
  )
}

export default SeoSchema
