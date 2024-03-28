import React from 'react'
import axiosInstance from '../../../utils/axiosInstance'
import ShopHome from '../../../Components/ShopPage/ShopHome'
import Head from 'next/head'
// /api/shop/suchonamart
export const getServerSideProps = async (context) => {
    const resolvedUrl = context.resolvedUrl
    try {
        const res = await axiosInstance.get(`/api/${resolvedUrl}`)
        return {
            props: {
                data: res.data.data
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const index = ({ data }) => {
    return (
        <div>
            <Head>
                <title>{data?.shop?.name} - SuchonaMart</title>
                <meta name="description" content={data?.shop?.description} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://www.suchonamart.com/shop/${data?.shop?.slug}`} />
                <meta property="og:title" content={`${data?.shop?.name} - SuchonaMart`} />
                <meta property="og:description" content={data?.shop?.description} />
                <meta property="og:url" content={`https://www.suchonamart.com/shop/${data?.shop?.slug}`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={process.env.API_URL + data?.shop?.image} />
                <meta property="og:image:alt" content={`${data?.shop?.name} - SuchonaMart`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${data?.shop?.name} - SuchonaMart`} />
                <meta name="twitter:description" content={data?.shop?.description} />
                <meta name="twitter:image" content={process.env.API_URL + data?.shop?.image} />
            </Head>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto">
                        <img src={process.env.API_URL + data?.shop?.image} alt="" style={{ width: "120px", height: "120px" }} />
                    </div>
                    <div className="col-auto">
                        <h3>{data?.shop?.name}</h3>
                        {/* <span>{data?.shop?.owner?.name}</span> */}
                    </div>
                </div>
            </div>

            <ShopHome data={data} />
        </div>
    )
}

export default index
