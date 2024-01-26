import { GlobeAltIcon } from '@heroicons/react/24/outline';
//Fuente personalizada cargada desde un archivo ttf
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../ui/customFonts/Two.ttf',
  display: 'swap',
})


export default function AcmeLogo() {
  return (
    <div
      className={`${myFont.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
