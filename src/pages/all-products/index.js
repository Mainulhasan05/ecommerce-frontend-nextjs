import React from 'react'
export const getServerSideProps=async(context)=>{
    console.log(context.resolvedUrl)
    // return {
    //     redirect: {
    //     destination: '/',
    //     permanent: false,
    //     },
    // }
    return {
        props: {
            data: "Hello World"
        }
    }
    
}
const index = () => {
  return (
    <div>
      
    </div>
  )
}

export default index
