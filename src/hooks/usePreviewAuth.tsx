import { useFormStore } from '@/store/usePropertyFormStore'
import { useRouter } from 'next/navigation'

const usePreviewAuth = () => {
 const router = useRouter()
 const { formPreview } = useFormStore()
  
 if(!formPreview){
  router.push('/manageproperties/add')
 }
}

export default usePreviewAuth