import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
  let router = useRouter()
  let {slug} = router.query
    return (
    <div>{slug}</div>
  )
}

export default slug