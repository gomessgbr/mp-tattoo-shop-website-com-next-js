
import whatsIcon from '../../../assets/whatsAppIcon.svg'
import { PointSeparator } from '@components/point-separator/point-separator';
import Image from 'next/image';


export function DefaultFooter() {
  return (
    <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center text-xs text-muted">
      <p>Sandro Luz Tattoo Shop</p>
      <PointSeparator size="large" />
      <p>Rua Limoeiro, 1000 - Catalão - SP</p>
      <PointSeparator size="small" />
      <div className="flex items-center gap-1">
        <Image src={whatsIcon} alt="icone whatsapp" />
        <p>(+55 11) 99999 9999</p>
      </div>
    </footer>
  );
}