import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react';


const NotFound = () => {
  
  const router  = useRouter();
  // redirect to home after 5sec automatically

  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    }, 5000)
  },[])

  return (
    <div>
        <Navbar/>
        404 | Page Not Not NotFound
        <br />
              
        <button onClick={()=>router.push('/')}>Back to home</button>
        {/* or */}
        {/* <Link href='/'>Back to home</Link> */}
    </div>
  )
}

export default NotFound
