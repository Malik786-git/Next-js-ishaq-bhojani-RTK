import { useRouter } from "next/router"

const blogNo = () => {

  const router = useRouter();
  const No = router.query.blogNo;

  return (
    <div>
      <h1> Blog No. {No}</h1>
    </div>
  )
}

export default blogNo
