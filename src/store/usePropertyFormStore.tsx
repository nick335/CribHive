import { create } from 'zustand';

interface Actions{
 setField: (value: string | boolean | File[] | File, fieldName: keyof FormState ) => void,
 deleteImage: (id: number) => void,
 setisApartment: () => void,
 setisHostel: () => void,
 setImages: (images: File[]) => void,
 authorizeFormPreview: () => void,
 restrictFormPreview: (previewState: boolean) => void,
}

export interface FormState {
 formPreview: boolean,
 isApartment: boolean,
 address: string,
 rent: string,
 city: string,
 bedrooms: string,
 description: string,
 images: File[],
 video: File | undefined
}

const INITIAL_STATE: FormState = {
 formPreview: false,
 isApartment: true,
 address: '',
 rent: '',
 city: '',
 bedrooms: '',
 description: '',
 images: [],
 video: undefined,
}

export const useFormStore = create<FormState & Actions>((set) => ({
 formPreview: INITIAL_STATE.formPreview,
 isApartment: INITIAL_STATE.isApartment,
 address: INITIAL_STATE.address,
 rent: INITIAL_STATE.rent,
 city: INITIAL_STATE.city,
 bedrooms: INITIAL_STATE.bedrooms,
 description: INITIAL_STATE.description,
 images: INITIAL_STATE.images,
 video: INITIAL_STATE.video,
 setisApartment: () => {
  set((state) =>({
   ...state,
   isApartment: true
  }))
 },
 setisHostel: () => {
  set((state) => ({
   ...state,
   isApartment: false
  }))
 },
 setField: (value, fieldName) => {
  set((state) => ({
   ...state,
   [fieldName]: value,
  }))
 },
 setImages: (images) => {
  set((state) => ({
   ...state,
   images: images
  }))
 },
 deleteImage: (idx) => {
  set((state) => {
   const updatedImages = [...state.images]
   updatedImages.splice(idx, 1)
   return {
    ...state,
    images: updatedImages
   }
  })
 },
 authorizeFormPreview: () => {
  set((state) => ({
   ...state,
   formPreview: true
  }))
 },
 restrictFormPreview: (previewState) => {
  if(previewState){
   set((state) => ({
    ...state,
    formPreview: false
   }))
 }
 }
}))