import { PreviewCardTypes } from '@/Types/caseTypes'
import walletwiseThumbnail from '@/assets/walletwise/walletwise-thumbnail.png'
import referaproThumbnail from '@/assets/referapro/referapro-thumbnail.png'
import bigMerchantThumb from '@/assets/bigMerchant/bigMerchant-thumbnail.png'
import vendorizeThumb from '@/assets/vendorize/thumbnail.png'

export const casePreview: PreviewCardTypes[] = [
  {
    image: vendorizeThumb,
    name: 'Vendorize: An e-commerce for vendors',
  },
  {
    image: walletwiseThumbnail,
    name: 'Walletwise: Fintech App',
  },
  {
    image: referaproThumbnail,
    name: 'ReferAPro',
  },
  {
    image: bigMerchantThumb,
    name: 'BigMerchant: Sales App',
  },
]
