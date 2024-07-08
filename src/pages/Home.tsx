import Logo from '@assets/icons/vite.svg'
import Image from '@assets/images/what.jpg'
import { ROUTES } from '@routes/routes'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { t } = useTranslation()
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2">
      <Logo />
      <Link to={ROUTES.DASHBOARD}>dashboard</Link>
      <div>{t('tokenSelector.title')}</div>
      <img src={Image} alt="" />
    </div>
  )
}
