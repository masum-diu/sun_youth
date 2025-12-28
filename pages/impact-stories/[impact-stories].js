import { useRouter } from 'next/router';
import React from 'react'

function singleImpactStories() {
    const router = useRouter();
    console.log(router)
    const { singleImpactStories } = router.query;
  return (
    <div>singleImpactStories</div>
  )
}

export default singleImpactStories