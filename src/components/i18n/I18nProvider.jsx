'use client'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { hydrateLocale } from '../../features/lang/langSlice'
import i18n from './i18nInstance'

export default function I18nProvider({ children }) {
  const dispatch = useDispatch()
  const locale = useSelector((state) => state.lang.locale)

  // Hydrate locale from localStorage after mount
  useEffect(() => {
    dispatch(hydrateLocale())
  }, [dispatch])

  // Sync i18n with Redux locale
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}
