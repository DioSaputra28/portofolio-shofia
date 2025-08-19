// Import all images statically
import fanart1 from '../assets/img/fanart/fanart-1.jpg'
import comission1 from '../assets/img/comission/comission-1.jpg'
import comission2 from '../assets/img/comission/comission-2.jpg'
import comission3 from '../assets/img/comission/comission-3.jpg'
import comission4 from '../assets/img/comission/comission-4.jpg'
import comission5 from '../assets/img/comission/comission-5.jpg'
import comission6 from '../assets/img/comission/comission-6.jpg'
import comission7 from '../assets/img/comission/comission-7.jpg'
import comission8 from '../assets/img/comission/comission-8.jpg'
import oc1 from '../assets/img/original-character/oc-1.jpg'
import oc2 from '../assets/img/original-character/oc-2.jpg'
import oc3 from '../assets/img/original-character/oc-3.jpg'
import oc4 from '../assets/img/original-character/oc-4.jpg'
import illustration1 from '../assets/img/ilustration/ilutration-1.jpg'
import illustration2 from '../assets/img/ilustration/ilustration-2.jpg'
import illustration3 from '../assets/img/ilustration/ilustration-3.jpg'
import aboutImg from '../assets/img/about/about.jpg'

const imageMap: Record<string, string> = {
  'fanart/fanart-1.jpg': fanart1,
  'comission/comission-1.jpg': comission1,
  'comission/comission-2.jpg': comission2,
  'comission/comission-3.jpg': comission3,
  'comission/comission-4.jpg': comission4,
  'comission/comission-5.jpg': comission5,
  'comission/comission-6.jpg': comission6,
  'comission/comission-7.jpg': comission7,
  'comission/comission-8.jpg': comission8,
  'original-character/oc-1.jpg': oc1,
  'original-character/oc-2.jpg': oc2,
  'original-character/oc-3.jpg': oc3,
  'original-character/oc-4.jpg': oc4,
  'ilustration/ilutration-1.jpg': illustration1,
  'ilustration/ilustration-2.jpg': illustration2,
  'ilustration/ilustration-3.jpg': illustration3,
  'about/about.jpg': aboutImg,
}

export function useAssets() {
  const getImageUrl = (filename: string) => {
    return imageMap[filename] || filename
  }

  return {
    getImageUrl
  }
}